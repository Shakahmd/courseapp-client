import React from 'react'
import { AlertDialog,Button,Flex } from '@radix-ui/themes'

const DeleteButton = ({title,description,cancel,onDelete}) => {
  return (

    <AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button color="red" size='3'>{title}</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content maxWidth="450px">
    <AlertDialog.Title>{title}</AlertDialog.Title>
    <AlertDialog.Description size="2" weight='bold'>
      {description}
    </AlertDialog.Description>

    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
        <Button variant="soft" color="gray">
         {cancel}
        </Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button variant="solid" color="red" onClick={onDelete} >
          {title}
        </Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>
  
  )
}

export default DeleteButton
