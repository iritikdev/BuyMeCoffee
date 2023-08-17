import { Box, Button, Container, Flex, Link, Text } from "@chakra-ui/react";
import {MdOutlineDarkMode} from 'react-icons/md'
const Navbar = () => {
  return (
    <Box>
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center" p={4}>
          <Button
            href="#"
            fontWeight="700"
            variant={"outline"}
            // backgroundColor={"#181818"}
            color={"#181818"}
            border={"2px solid #181818"}
            boxShadow={"4px 4px #181818"}
            _hover={{
              opacity: "0.9",
              boxShadow: "none",
            }}
          >
            CaféToken
          </Button>

          <Button  bgColor={"#181818"} color={"#fff"} variant="solid">
            <MdOutlineDarkMode fontSize={18} />
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
