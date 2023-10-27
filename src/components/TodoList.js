import React from "react";
import {
  VStack,
  HStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

// Add according which will look better in terms of the todo list

// If there is no Todo in the list then render this Badge
function TodoList({ todos, deleteTodo }) {
  if (!todos.length) {
    return (
      <Badge colorScheme="green" p="4" m="8" borderRadius="lg">
        No Todos, Today!
      </Badge>
    );
  }
  // Else render the Todo list
  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.200"
      borderWidth="2px"
      p="4"
      borderRadius="lg"
      w="80%"
      maxW={{ base: "90vw", small: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todos.map((todo) => (
        <HStack key={todo.id} margin={"5px"}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            isRound="true"
            onClick={() => deleteTodo(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;
