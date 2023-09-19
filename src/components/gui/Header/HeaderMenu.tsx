import { Box, Center,  Heading, Spacer, Spinner } from "@chakra-ui/react";
import { motion } from "framer-motion"
import { StatusContext } from "../../../contexts/StatusContext";
import { useContext } from "react";

export default function HeaderMenu() {
    const { status } = useContext(StatusContext);
    return (
        <>
            <Center height='50px' minHeight='50px' style={{ pointerEvents: 'none' }} marginTop='5px'>
                <Box p='2' bg='Background' height="100%" borderWidth='1px' paddingX={4} borderRadius='lg' w='lg' display='flex' justifyContent='space-between' alignItems='center'
                    as={motion.div}
                    animate={{
                        width: ["20%", "30%", "40%", "50%", "70%"],
                    }}
                    transition='0.5s linear'
                >
                    <Heading size='md'>Very things</Heading>
                    <Spacer/>
                    {status?.loading &&
                        <>
                            <Box mr={5}>{status.message}</Box>
                            <Spinner />
                        </>
                    }
                </Box>
            </Center>
        </>
    )
}