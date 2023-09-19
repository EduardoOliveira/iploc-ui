import { Box, BoxProps } from "@chakra-ui/react";

type LastSeenProps = {
    lastSeen: number;
} & BoxProps
export default function LastSeen({ lastSeen, ...props }: LastSeenProps) {
    return (<Box as='span' fontSize='sm' {...props}>
        Last Seen: {new Date(lastSeen).toLocaleString()}
    </Box>)
}
