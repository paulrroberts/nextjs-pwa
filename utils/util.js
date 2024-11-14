import { getRetryAxiosInstance } from '@nuskin/axios-util'

const csUrl = process.env.CONTENTSTACK_URL || process.env.NEXT_PUBLIC_CONTENTSTACK_URL
const csApiKey = process.env.CONTENTSTACK_API_KEY || process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY
const csEnv = process.env.CONTENTSTACK_ENVIRONMENT || process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT

let csDToken
switch (csEnv) {
    case 'test':
        csDToken = process.env.CONTENTSTACK_TEST_DELIVERY_TOKEN || process.env.NEXT_PUBLIC_CONTENTSTACK_TEST_DELIVERY_TOKEN
        break
    case 'prod':
        csDToken = process.env.CONTENTSTACK_PROD_DELIVERY_TOKEN || process.env.NEXT_PUBLIC_CONTENTSTACK_PROD_DELIVERY_TOKEN
        break
    default:
        csDToken = process.env.CONTENTSTACK_DEV_DELIVERY_TOKEN || process.env.NEXT_PUBLIC_CONTENTSTACK_DEV_DELIVERY_TOKEN
        break
}

let retryDelay = process.env.AXIOS_RETRY_DELAY || 5000
export const myAxios = getRetryAxiosInstance({
    retries: 3,
    shouldResetTimeout: true,
    retryDelay: (retryCount) => {
        return retryCount * retryDelay
    },
    retryCondition: (error) => {
        // if retry condition is not specified, by default idempotent requests are retried
        return error.response?.status >= 500 || error.code === 'ECONNABORTED'
    },
    onRetry: (retryCount, error, requestConfig) => {
        log.info(
            {
                retryCount,
                message: error.message,
                statusCode: error.response?.status,
                statusText: error.response?.statusText,
                responseData: error.response?.data
            },
            requestConfig.metric
        )
        return true
    }
})

/**
 *
 * @param {string} base64String
 * @returns
 */
export function urlBase64ToUint8Array(base64String) {
    console.log('called urlBase64ToUint8Array() function', base64String)
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')

    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
}

function getGraphQlAxiosConfig(query) {
    const config = {
        url: `${csUrl}/stacks/${csApiKey}`,
        method: 'GET',
        headers: {
            access_token: csDToken
        },
        params: {
            environment: csEnv,
            query: query
        }
    }

    return config
}

export const getSuggestions = async (id) => {
    let suggestions = []
    const query = `{
        all_suggestions {
            total
            items {
                title
                description
                upvotes
                system {
                    uid
                    created_at
                }
            }
        }
    }
    `

    const config = getGraphQlAxiosConfig(query)
    config.metric = { ql: { getSuggestions: { id } } }

    try {
        const response = await myAxios(config)
        let data = response.data
        let items = data.data.all_suggestions.items
        items?.map((item) => {
            suggestions.push({
                id: item.system.uid,
                title: item?.title,
                description: item.description,
                upvotes: item.upvotes,
                created: item.system.created_at
            })
        })

        return suggestions
    } catch (e) {
        console.error(
            {
                contentStackError: {
                    message: e.message,
                    statusCode: e.response?.status,
                    statusText: e.response?.statusText,
                    headers: e.response?.headers,
                    responseData: e.response?.data
                }
            },
            { metric: config.metric }
        )
    }
}
