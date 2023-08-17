import React from "react";
import { parseEther } from "ethers";
import {
  useToast,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  FormControl,FormLabel ,Input 
} from "@chakra-ui/react";

export default function BuyCoffee({ state }) {
  const toast = useToast();
  const buyCoffee = async (e) => {
    e.preventDefault();
    const AMOUNT = "0.001";
    const { contract } = state;

    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;

    const amount = { value: parseEther(AMOUNT) };
    const transaction = await contract.buyCoffee(name, message, amount);
    await transaction.wait();

    // provide a toast
    toast({
      title: "Transaction Successful 🚀",
      description: "Account balance duduced with ${AMOUNT} ETH.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <Card >
      <CardBody>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              // value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

          <FormControl id="message">
            <FormLabel>Message</FormLabel>
            <Input
              type="text"
              // value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormControl>
          <Button
            mt={4}
            backgroundColor={"#181818"}
            color={"#FAFAFA"}
            _hover={{
              opacity: "0.9",
            }}
            // isLoading={props.isSubmitting}
            type="submit"
          >
            Pay 💰
          </Button>
        
      </CardBody>
    </Card>
  );
}
