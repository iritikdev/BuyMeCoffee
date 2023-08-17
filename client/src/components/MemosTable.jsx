import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";

export default function MemosTable({ state }) {
  const [memos, setMemos] = useState([]);
  const { contract } = state;

  const getMemos = async () => {
    setMemos(await contract.getMemos());
  };

  useEffect(() => {
    contract && getMemos();
  }, [contract]);

  return (
    <TableContainer shadow={"lg"} py={4} px={4}>
      <Table variant={"simple"}>
        <TableCaption>
          Transactions with a smart contract that deployed with sepolia test
          network.
        </TableCaption>
        <Thead>
          <Tr>
            <Th>address</Th>
            <Th>Name</Th>
            <Th>Message</Th>
            <Th>Timestamp</Th>
          </Tr>
        </Thead>

        <Tbody>
          {memos.map((memo) => (
            <Tr key={memo.timestamp}>
              <Td>
                <Button
                mr={3}
                size={"xs"}
                  rightIcon={<CopyIcon />}
                  colorScheme="teal"
                  variant="unstyled"/>
                  
                {memo.from}
              </Td>
              <Td>{memo.name}</Td>
              <Td>{memo.message}</Td>
              <Td>{memo.timestamp}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
