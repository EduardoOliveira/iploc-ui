import { Badge, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { Access } from "../../../../entities/access"
import useReports from "../../../../hooks/useReports";
import { useContext, useEffect, useState } from "react";
import { StatusContext } from "../../../../contexts/StatusContext";
import Pager from "../../../generic/Pager";
import { ReportCategories } from "../../../../utils/consts";

export interface ReportsTableProps {
    access: Access
}


export default function ReportsTable({ access }: ReportsTableProps) {
    const { setStatus } = useContext(StatusContext);
    const [page, setPage] = useState<number>(1);

    const { reports, loading, pages, error } = useReports(access?.id, page, 50);
    useEffect(() => {
        setStatus({ loading, error, message: 'Loading Reports' })
    }, [loading, error, setStatus])

    useEffect(() => {
        setPage(1)
    }, [access])


    return (
        <>
            <Pager page={page} pages={pages} setPage={setPage} loading={loading} />
            <TableContainer>
                <Table variant='simple' size='sm'>
                    <Thead>
                        <Tr>
                            <Th>Reported At</Th>
                            <Th>Reporter Country</Th>
                            <Th>Categories</Th>
                            <Th>Comment</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {reports.map((report, index) => {
                            return (
                                <Tr key={index}>
                                    <Td>{new Date(report.reportedAt).toLocaleString()}</Td>
                                    <Td>{report.reporterCountryName}</Td>
                                    <Td>

                                        {report.categories.map((category, index) => {
                                            return (
                                                <Badge key={index} mr={1} variant='solid' colorScheme='red' title={ReportCategories[category].description}>
                                                    {ReportCategories[category].label}
                                                </Badge>
                                            )
                                        })}
                                    </Td>
                                    <Td>{report.comment}</Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}