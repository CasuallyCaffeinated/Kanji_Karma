import React from 'react';
import { Box, Button, Flex, Link } from "@chakra-ui/react";

import "./navbar.css";

function DiscoverJapanese() {
    return (
       <Flex align="center" justify="center" >
           <Box className="dj-box">
                <Button className="dj-btn">
                    <Link>
                        Discover Japanese
                    </Link>
                </Button>
           </Box>
       </Flex>
    )
}

export default DiscoverJapanese
