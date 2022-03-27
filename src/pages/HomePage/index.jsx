import React, { useState } from 'react'
import CreateTask from './CreateTask'
import Card from './Card'
import {
  Box,
  Button,
  useDisclosure,
  HStack,
  VStack,
  Flex,
  Text,
} from '@chakra-ui/react'

const HomePage = () => {

  const [value, setValue] = useState(JSON.parse(localStorage.getItem("tasks")) ?? [])

  const { onOpen, isOpen, onClose } = useDisclosure()

  return (
    <Box >
      <Flex alignItems="center" justifyContent="center">
        <Text fontSize='4xl'> TASK MANAGEMENT PLATFORM</Text>
      </Flex>
      <Box pt="30px" ml="40px" pb="30px">
        <Button colorScheme='teal' variant='solid'
          onClick={onOpen}>
          Add Task
        </Button>
      </Box>
      <HStack spacing="5" p="80px">
        <VStack>
          <Text fontSize="3xl">Todo</Text>
          {value?.filter(task => task.status === 'Todo').map(task =>
            <Box key={task.id}>
              <Card tasks={task} value={value} setValue={setValue} />
            </Box>)}
        </VStack>
        <VStack>
          <Text fontSize="3xl">Doing</Text>
          {value?.filter(task => task.status === 'Doing').map(task =>
            <Box key={task.id}>
              <Card tasks={task} value={value} setValue={setValue} />
            </Box>)}
        </VStack>
        <VStack>
          <Text fontSize="3xl">Done</Text>
          {value?.filter(task => task.status === 'Done').map(task =>
            <Box key={task.id}>
              <Card tasks={task} value={value} setValue={setValue} />
            </Box>)}
        </VStack>
      </HStack>
      <CreateTask
        onOpen={onOpen}
        isOpen={isOpen}
        onClose={onClose}
        setValue={setValue}
        value={value} />
    </Box>
  )
}

export default HomePage;