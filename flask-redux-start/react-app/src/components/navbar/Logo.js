import React from 'react';
import {Flex, Box, Image} from "@chakra-ui/react";

function Logo() {
    return (
        <Flex h="60px" w="100px" align="center" justify="center">
            <Box>
                <Image
                src="https://media.discordapp.net/attachments/834889363074711592/852705381280383016/2.png?width=468&height=468"
                maxW="60px"
                maxH="60px"
                rounded="sm"
                >

                </Image>
            </Box>
        </Flex>
    )
}

export default Logo
