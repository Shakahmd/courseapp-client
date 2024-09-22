import React from 'react'
import { Flex,TextField,Text ,Box,Card,Button,Heading} from '@radix-ui/themes'

const AuthForm = ({purpouse}) => {
  return (
    <div className=' h-screen flex justify-center items-center flex-col bg-[#F9F9F8] '>
       <Heading size="4" className='mb-3'>Welocome to <span className='text-[#5EB1EF]'>CourseApp</span></Heading>
          <Box className='sm:w-[500px] w-[300px]'>
            <Card className=' shadow-md' >
            <Flex direction="column" gap="5">
         <Text weight="bold" size='3'className='text-[#5EB1EF]'>
            {purpouse} Below
         </Text>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Name
        </Text>
        <TextField.Root
          size="3"
          placeholder="Enter your full name"
          type='text'
        />
      </label>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Email
        </Text>
        <TextField.Root
           placeholder="Enter your email"
          size="3"
          type='email'
        />
      </label>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
            Password
        </Text>
        <TextField.Root 
        placeholder='Enter your Password'
        size="3"
        type='password'/>
      </label>
      <div className='flex justify-center'>
      <Button variant='solid' color='blue' size='2'>{purpouse}</Button>
      </div>
      
    </Flex>
            </Card>
     </Box>
       </div>
  )
}

export default AuthForm
