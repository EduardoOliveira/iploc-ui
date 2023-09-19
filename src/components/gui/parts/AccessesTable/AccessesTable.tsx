import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Radio, RadioGroup } from "@chakra-ui/react";
import { Access } from "../../../../entities/access";
import { useContext } from "react";
import { SharedStateContext } from "../../../../contexts/SharedStateContext";


export interface AccessesTableProps {
    accessesStream: Map<string, Access>
}

export default function AccessesTable({ accessesStream }: AccessesTableProps) {
    const { sharedState, setSharedState } = useContext(SharedStateContext);
    const selectAccess = (value: string) => {
        if (accessesStream.has(value)) {
            const a = accessesStream.get(value) as Access
            setSharedState({
                mode: 'accesses', 
                selectedAccess: a
            })
        }
    }
    return (
        <>
            <TableContainer>
                <Table variant='simple' size='sm'>
                    <Thead>
                        <Tr>
                            <Th></Th>
                            <Th>Last Seen</Th>
                            <Th>Ip</Th>
                            <Th>Country</Th>
                            <Th>Comment</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {[...accessesStream.values()].map((access) => {
                            return (
                                <Tr key={access.id} onClick={()=>{selectAccess(access.id)}}>
                                    <Td>
                                        <RadioGroup value={sharedState?.selectedAccess?.id} onChange={selectAccess}><Radio value={access.id} /></RadioGroup>
                                    </Td>
                                    <Td>{new Date(access.lastSeen).toLocaleString()}</Td>
                                    <Td>{access.ip}</Td>
                                    <Td>{access.abuseIPDBData.countryName}</Td>
                                    <Td></Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer></>
    )
}
