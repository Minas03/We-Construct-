import React from 'react'
import { v4 as uuid } from 'uuid';
import { useForm } from 'react-hook-form'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  VStack,
  Select,
} from '@chakra-ui/react'


const CreateTask = ({ onOpen, isOpen, onClose, setValue, value }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const task = { id: uuid(), ...data }
    value.push(task)
    localStorage.setItem('tasks', JSON.stringify(value))
    onClose()
    setValue(JSON.parse(localStorage.getItem('tasks')))
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <VStack spacing={5}>
                <Input {...register("title", { required: true })} placeholder="title"
                  isInvalid={!!errors.title} />
                <Input {...register("description")} placeholder="description"
                  isInvalid={!!errors.description} />
                <Select placeholder='Priority'
                  {...register("priority", { required: true })}
                  isInvalid={!!errors.description}>
                  <option value='Low'>Low</option>
                  <option value='Medium'>Medium</option>
                  <option value='High'>High</option>
                </Select>
                <Select placeholder='Status'
                  {...register("status", { required: true })}
                  isInvalid={!!errors.description}>
                  <option value='Todo'>Todo</option>
                  <option value='Doing'>Doing</option>
                  <option value='Done'>Done</option>
                </Select>
                <Button colorScheme='teal' variant='solid' mr={3} type="submit">
                  Save
                </Button>
              </VStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreateTask;