import { Paper, Table, TableBody, TableContainer, TableCell, TableRow } from '@mui/material'
import TuneIcon from '@mui/icons-material/Tune'
import SearchIcon from '@mui/icons-material/Search'
import LanOutlinedIcon from '@mui/icons-material/LanOutlined'
import './build.css'

export default function Page() {
    return (
        <>
            <div className="tabs">
                <div className="tab active">Group</div>
                <div className="tab">Retail</div>
            </div>

            <div className="filter">
                <select>
                    <option>10/2024</option>
                </select>
                <select>
                    <option>1</option>
                </select>
                <div>
                    <TuneIcon />
                </div>
                <div>
                    <SearchIcon />
                </div>
            </div>

            <div className="group-info">
                <LanOutlinedIcon /> GROUP SIZE: 70
            </div>

            <TableContainer component={Paper}>
                <Table className="build-table">
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <div>Jim</div>
                                <div>Brand Affiliate</div>
                                <div>Level 0</div>
                            </TableCell>
                            <TableCell align="right">
                                <div>PSV</div>
                                <div>DC-SV</div>
                                <div>GSV</div>
                            </TableCell>
                            <TableCell>
                                <div>0.00</div>
                                <div>0.00</div>
                                <div>0.00</div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div>Add, Testus</div>
                                <div>Brand Affiliate</div>
                                <div>Level 1</div>
                            </TableCell>
                            <TableCell align="right">
                                <div>PSV</div>
                                <div>DC-SV</div>
                                <div>GSV</div>
                            </TableCell>
                            <TableCell>
                                <div>0.00</div>
                                <div>0.00</div>
                                <div>0.00</div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div>Jim</div>
                                <div>Brand Affiliate</div>
                                <div>Level 0</div>
                            </TableCell>
                            <TableCell align="right">
                                <div>PSV</div>
                                <div>DC-SV</div>
                                <div>GSV</div>
                            </TableCell>
                            <TableCell>
                                <div>0.00</div>
                                <div>0.00</div>
                                <div>0.00</div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div>Add, Testus</div>
                                <div>Brand Affiliate</div>
                                <div>Level 1</div>
                            </TableCell>
                            <TableCell align="right">
                                <div>PSV</div>
                                <div>DC-SV</div>
                                <div>GSV</div>
                            </TableCell>
                            <TableCell>
                                <div>0.00</div>
                                <div>0.00</div>
                                <div>0.00</div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div>Jim</div>
                                <div>Brand Affiliate</div>
                                <div>Level 0</div>
                            </TableCell>
                            <TableCell align="right">
                                <div>PSV</div>
                                <div>DC-SV</div>
                                <div>GSV</div>
                            </TableCell>
                            <TableCell>
                                <div>0.00</div>
                                <div>0.00</div>
                                <div>0.00</div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div>Add, Testus</div>
                                <div>Brand Affiliate</div>
                                <div>Level 1</div>
                            </TableCell>
                            <TableCell align="right">
                                <div>PSV</div>
                                <div>DC-SV</div>
                                <div>GSV</div>
                            </TableCell>
                            <TableCell>
                                <div>0.00</div>
                                <div>0.00</div>
                                <div>0.00</div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div>Jim</div>
                                <div>Brand Affiliate</div>
                                <div>Level 0</div>
                            </TableCell>
                            <TableCell align="right">
                                <div>PSV</div>
                                <div>DC-SV</div>
                                <div>GSV</div>
                            </TableCell>
                            <TableCell>
                                <div>0.00</div>
                                <div>0.00</div>
                                <div>0.00</div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div>Add, Testus</div>
                                <div>Brand Affiliate</div>
                                <div>Level 1</div>
                            </TableCell>
                            <TableCell align="right">
                                <div>PSV</div>
                                <div>DC-SV</div>
                                <div>GSV</div>
                            </TableCell>
                            <TableCell>
                                <div>0.00</div>
                                <div>0.00</div>
                                <div>0.00</div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div>Jim</div>
                                <div>Brand Affiliate</div>
                                <div>Level 0</div>
                            </TableCell>
                            <TableCell align="right">
                                <div>PSV</div>
                                <div>DC-SV</div>
                                <div>GSV</div>
                            </TableCell>
                            <TableCell>
                                <div>0.00</div>
                                <div>0.00</div>
                                <div>0.00</div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div>Add, Testus</div>
                                <div>Brand Affiliate</div>
                                <div>Level 1</div>
                            </TableCell>
                            <TableCell align="right">
                                <div>PSV</div>
                                <div>DC-SV</div>
                                <div>GSV</div>
                            </TableCell>
                            <TableCell>
                                <div>0.00</div>
                                <div>0.00</div>
                                <div>0.00</div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
