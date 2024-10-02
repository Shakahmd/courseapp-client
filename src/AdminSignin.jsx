import React,{useState} from 'react'
import AuthForm from './components/AuthForm'
import axios from 'axios'
import { useBaseUrl } from './hook/useUrl'
import toast, {Toaster} from 'react-hot-toast'
import { Text } from '@radix-ui/themes'

const AdminSignin = () => {
  const [adminSignInData,setAdminSignInData]  = useState({})
   const baseUrl = useBaseUrl()
    const handleChangeAdminSignIn = (value) =>{
          setAdminSignInData(value)
        
    } 

     const handleSubmitAdminSignIn = async() =>{
        try {
            const response = await axios.post(`${baseUrl}/admin/login`,adminSignInData)
             console.log(response.data.message)
             if(response.status === 200){
                toast.success(<Text weight='bold'>{response.data.message}</Text>)
                localStorage.setItem("adminToken",response.data.token)
                window.location = '/e/dashboard'
             }
            
        } catch (error) {
             console.log(error)
             if(error.response.status >= 400 && error.response.status < 500){
                 toast.error(<Text weight='bold'>{error.response.data.message}</Text>)
             }else{
                toast.error("error during adminSign In")
             }
        }
     }
  return (
   <>

      
      <AuthForm purpouse="AdminSignIn" handleChangeAdminSignIn={handleChangeAdminSignIn} handleSubmitAdminSignIn={handleSubmitAdminSignIn}/>
    <Toaster/>
  
   
   </>
  )
}

export default AdminSignin
