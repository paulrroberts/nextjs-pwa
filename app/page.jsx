import PushNotificationManager from '../components/pushNotificationManager'
import InstallPrompt from '../components/installPrompt'

export default function Page() {
    return (
        <div>
            <PushNotificationManager />
            <InstallPrompt />
        </div>
    )
}
