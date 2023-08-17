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
} from "@chakra-ui/react";
import banner from "../assets/banner.png";
import BuyCoffee from "./BuyCoffee";
import { ArrowRightIcon } from "@chakra-ui/icons";
import {FaGithubAlt} from 'react-icons/fa'

export default function Hero({ state }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      bgImage={banner}
      px={["8", "16", "40"]}
      py={["8", "16", "24"]}
      margin={4}
      borderRadius={10}
    >
      <Text mt={2} fontSize={["16", "18"]}>
        Hey There...✔
      </Text>
      <Heading fontFamily={"poppins"} fontWeight= {700} >Buy a cup of Coffee ☕ for Ritik</Heading>
      <Text mt={2} fontSize={["16", "18"]} color={"#181818"}>
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
      <Button  mt={3} ml={2} rightIcon={<FaGithubAlt  />} variant={"solid"}>
        Github
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Start ethereum transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <BuyCoffee state={state} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
