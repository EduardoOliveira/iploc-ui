import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { Access } from "../../../../entities/access"
import { useContext, useEffect, useState } from "react";
import { StatusContext } from "../../../../contexts/StatusContext";
import useBanners from "../../../../hooks/useBanners";
import Pager from "../../../generic/Pager";

export interface BannersTableProps {
    access: Access
}

export default function BannersTable({ access }: BannersTableProps) {
    const { setStatus } = useContext(StatusContext);
    const [page, setPage] = useState<number>(1);

    const { banners, loading, pages, error } = useBanners(access?.id, page, 50);
    
    useEffect(() => {
        setStatus({ loading, error, message: 'Loading Banners' })
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
                            <Th>Timestamp</Th>
                            <Th>Port</Th>
                            <Th>Product</Th>
                            <Th>Version</Th>
                            <Th>Transport</Th>
                            <Th>Data</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {banners?.map((banner, index) => {
                            return (
                                <Tr key={index}>
                                    <Td>{new Date(banner.timestamp).toLocaleString()}</Td>
                                    <Td>{banner.port}</Td>
                                    <Td>{banner.product}</Td>
                                    <Td>{banner.version}</Td>
                                    <Td>{banner.transport}</Td>
                                    <Td noOfLines={1} maxWidth='auto'>{banner.data}</Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}