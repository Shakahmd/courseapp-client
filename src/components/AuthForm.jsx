import React,{useState} from 'react'
import { Flex,TextField,Text ,Box,Card,Button,Heading} from '@radix-ui/themes'

const AuthForm = ({purpouse,
  handleChangeSignUp,
  handleChangeSignIn,
  handleSubmitSignUp,
  handleSubmitSignIn,
  handleChangeAdminSignUp,
  handleSubmitAdminSignUp,
  handleChangeAdminSignIn,
  handleSubmitAdminSignIn}) => {
    
      const [formData,setFormData] = useState({
        userName:"",
        password:"",
        email:""
      })

       const handleChange = ({target}) =>{
           const {name,value} = target
           setFormData({...formData,[name]:value})
       }
         if(purpouse === 'SignIn'){
            handleChangeSignIn(formData)
         }else if(purpouse === 'SignUp'){
            handleChangeSignUp(formData)
         }else if(purpouse === "AdminSignUp"){
                handleChangeAdminSignUp(formData)
         }else if(purpouse === 'AdminSignIn'){
          handleChangeAdminSignIn(formData)
         }
       
  
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
        <Text as="div" size="2" mb="1" weight="bold"  >
          Name
        </Text>
        <TextField.Root
          size="3"
          placeholder="Enter your full name"
          type='text'
          name="userName"
          value= {formData.userName}
          onChange={handleChange}
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
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
            Password
        </Text>
        <TextField.Root 
        placeholder='Enter your Password'
        size="3"
        type='password'
        name='password'
        value={formData.password}
        onChange={handleChange}/>
      </label>
      <div className='flex justify-center'>
      <Button variant='solid' color='blue' size='2'onClick={()=>{
         if(purpouse === 'SignUp'){
            handleSubmitSignUp()
         }else if(purpouse==="SignIn"){
             handleSubmitSignIn()
         }else if(purpouse === 'AdminSignUp'){
           handleSubmitAdminSignUp()
         }else if(purpouse === 'AdminSignIn'){
          handleSubmitAdminSignIn()
         }
      }} >{purpouse}</Button>
      </div>
      
    </Flex>
            </Card>
     </Box>
       </div>
  )
}

export default AuthForm
