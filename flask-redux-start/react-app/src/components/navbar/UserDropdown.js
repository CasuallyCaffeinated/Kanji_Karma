import React from 'react'
import { useDisclosure, Button, Collapse, Box, Stack } from "@chakra-ui/react";

import { login } from "../../store/session"

import { useDispatch} from "react-redux"

import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";

function UserDropdown() {
        const { isOpen, onToggle } = useDisclosure()

        const dispatch = useDispatch()

        const history = useHistory()

        const demoUserPageLoader = async () => {
            dispatch(login('demo@aa.io', 'password')).then(res => history.push(`/profile/${res}`))
        }

    return (
        <>
            <Button onClick={onToggle} className="navbar dropdown or logout btn">Login / Sign Up</Button>
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
                            <Link to="/login">
                            <Button w="150px" >Log In Page</Button>
                            </Link>
                        </Box>
                        <Box>
                            <Link to="/sign-up">
                            <Button w="150px" >Sign Up Page</Button>
                            </Link>
                        </Box>
                        <Box>
                            <Button w="150px" onClick={demoUserPageLoader}>Demo User Login</Button>
                        </Box>
                    </Stack>
                </Box>
            </Collapse>
    </>
    )
}

export default UserDropdown
