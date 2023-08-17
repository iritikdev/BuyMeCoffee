import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import banner from "../assets/banner.png";
import BuyCoffee from "./BuyCoffee";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { FaGithubAlt } from "react-icons/fa";

export default function Hero({ state }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClose = (data) => {
    onClose(data)
  }
  return (
    <Box
      bgImage={banner}
      px={["8", "16", "40"]}
      py={["8", "16", "24"]}
      margin={4}
      borderRadius={10}
    >
      <Text mt={2} fontSize={["16", "18"]} _dark={{color:"#181818"}}>
        Hey There...✔
      </Text>
      <Heading fontFamily={"poppins"} fontWeight={700} _dark={{color:"#181818"}} >
        Buy a cup of Coffee ☕ for Ritik
      </Heading>
      <Text mt={2} fontSize={["14", "15", "18"]} color={"#181818"}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eius
        ut hic eos dicta? Ducimus saepe voluptate voluptates sint veritatis.
      </Text>
      <Button
        mt={3}
        backgroundColor={"#181818"}
        color={"#FAFAFA"}
        _hover={{
          opacity: "0.9",
        }}
        onClick={onOpen}
      >
        Click To Pay &nbsp; <ArrowRightIcon fontSize={10} />
      </Button>
      <Button
        as={"a"}
        mt={3}
        ml={2}
        href="https://github.com/iritikdev/BuyMeCoffee"
        target="_blank"
        rightIcon={<FaGithubAlt />}
        isExternal
        _dark={{color:"#181818", bgColor: "#f2f2f2"}}
      >
        Github
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontFamily={"poppins"}>
            Start ethereum transaction
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <BuyCoffee state={state} onClose = {handleClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
