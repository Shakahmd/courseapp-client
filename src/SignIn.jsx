import React, { useState } from 'react'
import AuthForm from './components/AuthForm'
import axios from 'axios'
import toast,{Toaster} from 'react-hot-toast'
import { Text } from '@radix-ui/themes'
import { useBaseUrl } from './hook/useUrl'

const SignIn = () => {
   const [signInData,setSignInData] = useState({})
    const baseUrl  = useBaseUrl()
    console.log(baseUrl)
  
   const handleChangeSignIn = (value) =>{
        setSignInData(value)
        console.log(signInData)
   }
     const handleSubmitSignIn = async() =>{
        try {
             const response = await axios.post(`${baseUrl}/user/login`,signInData)
              console.log(response.data.message)
               if(response.status === 200){
                  localStorage.setItem("userToken",response.data.token)
                  toast.success(<Text weight='bold'>{response.data.message}</Text>)
                  window.location = '/'
               }
            
        } catch (error) {
            console.log(error) 
            if(error.response.status >= 400 && error.response.status < 500){
               toast.error(<Text weight='bold'>{error.response.data.message}</Text>)
            }else{
               toast.error("Error durig Signin")
            }
           
        }
     }

  return (
     <>
     <AuthForm purpouse="SignIn" handleChangeSignIn={handleChangeSignIn} handleSubmitSignIn={handleSubmitSignIn}/>
     <Toaster position="top-center"/>
     </>
  
  )
}

export default SignIn
