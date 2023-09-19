import { Box, BoxProps } from "@chakra-ui/react";
import { AbuseIpdb } from "../../../../entities/access";


type CountryProps = {
    abuseIPDB: AbuseIpdb;
} & BoxProps;

export default function Country({abuseIPDB, ...props}: CountryProps) {

    return (
        <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
            {...props}
        >
            <Box className={`fi fi-${abuseIPDB.countryCode.toLocaleLowerCase()}`} as='span' mr={3}></Box>
            <Box as='span' fontSize='sm'>
                {abuseIPDB.countryName} {abuseIPDB.tor ? '(TOR)' : ''}
            </Box>
        </Box>
    )
}