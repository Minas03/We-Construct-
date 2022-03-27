import React from 'react'
import { Box, useDisclosure } from '@chakra-ui/react'
import EditTask from './EditTask'

const Card = ({ tasks, value, setValue }) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      minW="sm"
      borderRadius="8px"
      overflow="hidden"
      boxShadow="0 0 24px 4px rgba(0, 0, 0, 0.15)"
      color="teal.500"
      onClick={onOpen}>
      <Box p="7" >
        <Box mt="1" fontWeight="semibold" as="h3" lineHeight="tight">
          Title: {tasks.title}
        </Box>
        <Box mt="1" fontWeight="semibold" as="h3" lineHeight="tight">
          Description: {tasks.description}
        </Box>
        <Box mt="1" fontWeight="semibold" as="h3" lineHeight="tight">
          Status: {tasks.status}
        </Box>
        <Box mt="1" fontWeight="semibold" as="h3" lineHeight="tight" spacing="5">
          Priority: {tasks.priority}
        </Box>
        <EditTask
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          tasks={tasks}
          value={value}
          setValue={setValue} />
      </Box>
    </Box>
  )
}

export default Card