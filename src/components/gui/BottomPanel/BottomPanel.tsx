import { Box, Button } from "@chakra-ui/react"
import { Access } from "../../../entities/access"
import { BiExpandVertical } from "react-icons/bi"
import { useState } from "react"
import AccessesTable from "../parts/AccessesTable/AccessesTable"


export interface BottomPanelProps {
    accessesStream: Map<string, Access>
}

export default function BottomPanel({ accessesStream }: BottomPanelProps) {
    const [expanded, setExpanded] = useState(false)
    let boxHeight = expanded ? '300' : '2';
    const onClick = () => {
        setExpanded(!expanded)
        boxHeight = expanded ? '300' : '2';
    }

    return (
        <>
            <Box>
                    <Button bg='background' onClick={onClick} ml={2} borderBottomRadius={0} leftIcon={<BiExpandVertical />}>{accessesStream.size}</Button>
                    <Box bg='background' height={boxHeight} overflowY='scroll'>
                        <AccessesTable accessesStream={accessesStream} />
                    </Box>
            </Box>
        </>
    )
}