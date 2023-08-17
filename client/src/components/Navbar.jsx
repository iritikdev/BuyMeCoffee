import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center" p={4}>
          <Button
            href="#"
            fontWeight="700"
            variant={"outline"}
            color={"#181818"}
            border={"2px solid #181818"}
            boxShadow={"4px 4px #181818"}
            _hover={{
              opacity: "0.9",
              boxShadow: "none",
            }}
            _dark={{
              color: "#f3f2f2",
              border: "2px solid #f2f2f2",
              boxShadow: "4px 4px #f2f2f2",
              _hover: {
                boxShadow: "none",
              },
            }}
          >
            CaféToken
          </Button>

          <IconButton
            onClick={toggleColorMode}
            icon={
              colorMode == "dark" ? (
                <MdOutlineLightMode fontSize={24} />
              ) : (
                <MdOutlineDarkMode fontSize={24} />
              )
            }
            _hover={{ backgroundColor: "#181818", color: "#A8A8A8" }}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
