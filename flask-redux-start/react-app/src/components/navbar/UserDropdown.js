import React from 'react'
import { useDisclosure, Button, Collapse, Box, Stack } from "@chakra-ui/react";

function UserDropdown() {
        const { isOpen, onToggle } = useDisclosure()

    return (
        <>
            <Button onClick={onToggle}>Login / Sign Up</Button>
            <Collapse in={isOpen} animateOpacity>
                <Box
                display="block"
                p="40px"
                color="blackAlpha.800"
                mt="4"
                backgroundColor="blackAlpha.400"
                rounded="md"
                shadow="md"
                >
                    <Stack direction="column">
                        <Box>
                            <Button w="150px" >Log In Page</Button>
                        </Box>
                        <Box>
                            <Button w="150px" >Sign Up Page</Button>
                        </Box>
                        <Box>
                            <Button w="150px" >Demo User Login</Button>
                        </Box>
                    </Stack>
                </Box>
            </Collapse>
    </>
    )
}

export default UserDropdown
