// import { Heading } from "@chakra-ui/react";
// import TodoList from "./components/TodoList";
// import AddTodo from "./components/AddTodo";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";

// import { VStack, IconButton, useColorMode } from "@chakra-ui/react";
// import { FaSun, FaMoon } from "react-icons/fa";
// import { useState, useEffect } from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/home" element={<SignUp />} />
    </Routes>
  );
  // const initialTodos = [
  //   {
  //     id: 1,
  //     body: "Get Bored",
  //   },
  //   {
  //     id: 2,
  //     body: "Learn Something New",
  //   },
  //   {
  //     id: 3,
  //     body: "Code",
  //   },
  // ];

  // const [todos, setTodos] = useState(
  //   () => JSON.parse(localStorage.getItem("todos")) || []
  //   /* () => JSON.parse(localStorage.getItem("todos")) || [] doing this instead of
  //   //  JSON.parse(localStorage.getItem("todos")) || [] will make our app super fast this will prevent rendering everytime

  //   */
  // );

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);
  // function deleteTodo(id) {
  //   const newTodos = todos.filter((todo) => {
  //     return todo.id !== id;
  //   });
  //   setTodos(newTodos);
  // }
  // function addTodo(todo) {
  //   setTodos([...todos, todo]);
  // }

  // const { colorMode, toggleColorMode } = useColorMode();
  // return (
  //   //**!Here p = 4 means padding of 4 * 4 pixels = 16 and not 4, if p = 1 it will give padding of 4 px */
  //   //** By Default every padding has to be scaled by 4 */
  //   <VStack p={4}>
  //     <IconButton
  //       icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
  //       isRound="true"
  //       size="lg"
  //       alignSelf="flex-end"
  //       onClick={toggleColorMode}
  //     />
  //     <Heading
  //       mb="8"
  //       fontWeight="extrabold"
  //       size="2xl"
  //       bgGradient="linear(to-r, teal.500, teal.300, blue.500)"
  //       bgClip="text"
  //     >
  //       Todo Application
  //     </Heading>
  //     <TodoList todos={todos} deleteTodo={deleteTodo} />
  //     <AddTodo addTodo={addTodo} />
  //   </VStack>
  // );
}

export default App;
