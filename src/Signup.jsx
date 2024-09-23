import React from 'react'
import { Flex,TextField,Text ,Box,Card,Button,Heading, Strong} from '@radix-ui/themes'
import AuthForm from './components/AuthForm'
import { useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { useBaseUrl } from './hook/useUrl'


const Signup = () => {
    const [signupData,setSignUpData] = useState({})
     const baseUrl = useBaseUrl()
   const handleChangeSignUp = (value) =>{
          setSignUpData(value)
          
   }

     const handleSubmitSignUp = async() =>{
         try {
       
             const response = await axios.post(`${baseUrl}/user/signup`,signupData)

              console.log(response.data)
              if(response.status === 200){
                localStorage.setItem("userToken",response.data.token)
                console.log(response.data.message)
                toast.success(<Text weight="bold">{response.data.message}</Text>)
              }

              
         } catch (error) {
             console.log("error during signUp",error)
              console.log(error.response.status)
              
              if(error.response.status >= 400 && error.response.status < 500){
                
                toast.error(<Text>{error.response.data.message}</Text>)
              }else{
                toast.error('error during signup')
              }
              
           
         }
     }
  return (
     <>
       <AuthForm purpouse="SignUp" handleChangeSignUp={handleChangeSignUp} handleSubmitSignUp={handleSubmitSignUp}/>
       <Toaster position='top-center'/>
     </>
   
  )
}

export default Signup
