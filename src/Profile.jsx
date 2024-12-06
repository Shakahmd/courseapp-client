import React, { useEffect } from 'react'
import ProfileCard from './components/ProfileCard'
import ProfileDetailCard from './components/ProfileDetailCard'
import { Card } from '@radix-ui/themes'
import CourseCard2 from './components/CourseCard2'
import { useBaseUrl } from './hook/useUrl'
import axios from 'axios'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'




const Profile = () => {
   const baseUrl = useBaseUrl()
   const [purchasedCourse,setPurchasedCourse] = useState([])
  const location = useLocation()
  const dataReceived = location.state;

  console.log(dataReceived.email)
   

  useEffect(()=>{
    const getPurchasedCourses = async () => {
       
        
        try {

            const response =  await axios.get(`${baseUrl}/user/purchasedCourse`,{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('userToken')}`
                }
            })
             
            console.log(response.data)
             
            setPurchasedCourse(response.data.purchasedCourse)

            
        } catch (error) {
            console.log(error)

        }
    }
    getPurchasedCourses()
  },[])
  return (
    <div className='w-full h-screen  grid grid-cols-3 '>
        <div className='col-span-1 flex items-center'>
         <ProfileDetailCard
         email={dataReceived.email}
         name={dataReceived.name}
         />
        </div>
        <div className='col-span-2'>
        <div className='grid grid-cols-3 mt-4  min-h-screen'>
           
                {
                 purchasedCourse.map((course)=>{
                    return (
                         
                           <CourseCard2 
                           baseUrl ={baseUrl}
                           courseImage={course.imageLink}
                           title={course.title}
                           price={course.price}
                           description={course.description}/>
                        
                        
                    )
                 })
               }
           
               
          </div>
        </div>
      </div>
  )
}



export default Profile
