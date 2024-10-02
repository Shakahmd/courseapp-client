import React ,{useEffect, useState}from 'react'
import axios from 'axios'
import { useBaseUrl } from './hook/useUrl'
import { Card,Box,Inset,Flex,Text,Strong, Grid ,Blockquote,Button, Heading} from '@radix-ui/themes'
import { useNavigate } from 'react-router-dom'
import CourseCard from './components/CourseCard'
const Courses = () => {
     const baseUrl = useBaseUrl()
     const [courses,setCourses] = useState([])
     

       useEffect(()=>{
         const getAllCourses = async() =>{
            try {
                const response = await axios.get(`${baseUrl}/user/courses`,{
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem('userToken')}`
                    }
                })
                console.log(response.data.courses)
                setCourses(response.data.courses)
            } catch (error) {
                console.log(error)
            }
         }
        getAllCourses()
       },[])
        
     
     
        
  return (
     <div>
      <div>
      <Heading  size='9'  color='teal'className='flex justify-center'>Courses</Heading>
      </div>
  <div className='mt-3 mx-4 h-screen overflow-auto flex flex-wrap justify-center gap-4 '>
           
           {courses.map((courses)=>{
                  return (
                      <div className='flex flex-row justify-center mt-3 '>
                    <Course courses ={courses} baseUrl={baseUrl}/>
                   
                    </div>
                      )
                  
          })}
             </div>
        
     </div>
   
    
  
   
   
  )
}

const Course = ({courses,baseUrl}) =>{
  const navigate = useNavigate()
  
  return (
     
     <div className='mx-4 my-6'>
         <CourseCard courses={courses} baseUrl={baseUrl}/>
     </div>
    
      )
}
export default Courses

