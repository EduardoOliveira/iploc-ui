import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { Access } from "../../../../entities/access"
import useVulnerabilities from "../../../../hooks/useVulnerabilities";
import { useContext, useEffect, useState } from "react";
import { StatusContext } from "../../../../contexts/StatusContext";
import Pager from "../../../generic/Pager";

export interface VulnTableProps {
    access: Access
}

export default function VulnTable({ access }: VulnTableProps) {
    const { setStatus } = useContext(StatusContext);
    const [page, setPage] = useState<number>(1);

    const { vulnerabilities, loading, pages, error } = useVulnerabilities(access?.id, page, 50);
    useEffect(() => {
        setStatus({ loading, error, message: 'Loading Vulnerabilities' })
    }, [loading, error, setStatus])

    useEffect(() => {
        setPage(1)
    }, [access])
    return (
        <>
            <Pager page={page} pages={pages} setPage={setPage} loading={loading} />
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>CVE</Th>
                            <Th>Nist</Th>
                            <Th>Felling Lucky</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {vulnerabilities?.map((vuln, index) => {
                            return (
                                <Tr key={index}>
                                    <Td>{vuln}</Td>
                                    <Td><a target="_blank" href={'https://nvd.nist.gov/vuln/detail/' + vuln}>NIST</a></Td>
                                    <Td><a target="_blank" href={'https://www.google.com/search?q=' + vuln + '+poc'}>POC</a></Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}