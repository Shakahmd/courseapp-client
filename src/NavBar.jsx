import React, { useEffect,useState } from 'react'
import { Button ,Text} from '@radix-ui/themes'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useBaseUrl } from './hook/useUrl'

const NavBar = () => {
   const baseUrl = useBaseUrl()
    const navigate = useNavigate()
     const [profileDetails,setProfileDetails] = useState({})

     useEffect(()=>{
       const getProfile = async() =>{
          try {
            const adminToken = localStorage.getItem('adminToken')
            const userToken = localStorage.getItem('userToken')

            if(userToken){
              const response = await axios.get(`${baseUrl}/user/me`,{
                headers:{
                  Authorization:`Bearer ${userToken}`
                }
              })
               
               setProfileDetails(response.data)
               
               

            }else if(adminToken){
               const response = await axios.get(`${baseUrl}/admin/me`,{
                headers:{
                  Authorization:`Bearer ${adminToken}`
                }
               })

             
               setProfileDetails(response.data)
               
            }
           
            
          } catch (error) {
            console.log(error)
          }
       }
        getProfile()
     },[])

    
console.log(profileDetails)

  return (
    <div className='sm:flex justify-between  mt-4 mx-4'>
        <Text size='7' weight='medium'>CourseApp</Text>
          
         {profileDetails.admin ? (<div className='mx-3 flex gap-4 '>
            <Text weight='bold'>{profileDetails.admin.email}</Text>

            <Button variant='solid'color='blue'size='3' onClick={()=>{
              localStorage.removeItem("adminToken")
               window.location = '/'
            }}>LogOut</Button>

         </div>) 
            :(
              profileDetails.user ?(<div className='mx-3 flex gap-4 '>
              <Text weight='bold'>{profileDetails.user.email}</Text>
  
              <Button variant='solid'color='blue'size='3' onClick={()=>{
               localStorage.removeItem("userToken")
                window.location = '/'
              }}>LogOut</Button>
  
           </div>):
            <div className='mx-3 flex gap-4 '>
            <Button variant='solid'color='blue' size='3' onClick={()=>{
             navigate('/signin')
            }}>SignIn</Button>
            <Button  variant='solid'color='blue'size='3' onClick={()=>{
             navigate('/signup')
            }}> SignUp</Button>
        </div>
         )}   
    </div>
  )
}

export default NavBar
