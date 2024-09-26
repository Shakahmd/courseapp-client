import React,{useState} from 'react'
import AuthForm from './components/AuthForm'
import axios from 'axios'
import { useBaseUrl } from './hook/useUrl'
import toast,{Toaster} from 'react-hot-toast'
import { Text } from '@radix-ui/themes'


const AdminSignup = () => {
    const [adminSignUpData,setAdminSignUpData] = useState({})
    const baseUrl = useBaseUrl()
     const handleChangeAdminSignUp = (value) =>{
          setAdminSignUpData(value)
          console.log(adminSignUpData)
     }

       const handleSubmitAdminSignUp = async() =>{
            try {
                const response = await axios.post(`${baseUrl}/admin/signup`,adminSignUpData)
                 console.log(response.data.message)
                 localStorage.setItem('AdminToken',response.data.token)
                 toast.success(<Text weight='bold'>{response.data.message}</Text>)
                 window.location = '/'
            } catch (error) {
                 console.log(error.response)
                  if(error.response.status >= 400 && error.response.status < 500){
                    toast.error(<Text weight='bold'>{error.response.data.message}</Text>)
                  }else{
                    toast.error('Error during AdminSignUp')
                  }

            }
       }
  return (
    <>
    <AuthForm purpouse="AdminSignUp" handleChangeAdminSignUp={handleChangeAdminSignUp} handleSubmitAdminSignUp={handleSubmitAdminSignUp}/>
    <Toaster position='top-center' />
    </>
  )
}

export default AdminSignup
