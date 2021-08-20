import React from 'react'
import { Flex, Box, Stack, Link } from "@chakra-ui/react"

import "./homepage/sp.css"


import { FaGithub, FaLinkedinIn, FaTwitter, FaAngellist } from "react-icons/fa"


function Footer() {
    return (
        <>
        <Flex
        w="100%"
        h="60px"
        justify="center"
        align="space-around"
        pos="fixed"
        bottom="0"
        className="footer"
        bgColor="blackAlpha.200"
        >
            <Flex
                   align="center"
                   justify="center"
                   w="100%"
                   h="100%"
                   >
            <Stack
               direction="row"

               pos="fixed"
               bottom="10px"
               spacing="25px"
               align="center"
               justify="center"
               >
                   <Box as="button"><Link href="https://github.com/Christian-Cozma" isExternal><FaGithub fontSize={'35px'}/></Link></Box>
                   <Box><Link href="https://www.linkedin.com/in/christian-cozma-9847431ba/" isExternal><FaLinkedinIn fontSize={'35px'}/></Link></Box>
                   <Box fontSize={'30px'}>Christian Cozma</Box>
                   <Box><Link href="https://angel.co/u/christian-cozma" isExternal><FaAngellist fontSize={'35px'}/></Link></Box>
                   <Box><Link href="https://twitter.com/cozma_christian" isExternal textDecoration="none"><FaTwitter fontSize={'35px'}/></Link></Box>
               </Stack>
        </Flex>
        </Flex>

    </>
    )
}

export default Footer
