import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useBaseUrl } from './hook/useUrl'
import { Card,Box,Inset,Flex,Text,Strong, Grid ,Blockquote,Button,Heading,AlertDialog} from '@radix-ui/themes'
import { useNavigate } from 'react-router-dom'
import DeleteButton from './components/DeleteButton'
import toast,{Toaster} from 'react-hot-toast'
import CourseCard from './components/CourseCard'
import { Root } from '@radix-ui/themes/dist/esm/components/alert-dialog.js'


const Dashboard = () => {
    const baseUrl = useBaseUrl()
    const [createdCourses,setCreatedCourses] = useState([])
    const naviagte = useNavigate()
    useEffect(()=>{
        const coursesCreatedByAdmin = async() =>{
        
            try {
                const response = await axios.get(`${baseUrl}/admin/courses`,{
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem("adminToken")}`
                    }
                })
    
                console.log(response.data)
                setCreatedCourses(response.data.courses)
            } catch (error) {
                console.log(error)
            }
        }
        coursesCreatedByAdmin()
    },[])
    
    const handledeleteCourse = async(courseId) =>{
        try {
         const response = await axios.delete(`${baseUrl}/admin/courses/${courseId}`,{
             headers:{
                 Authorization:`Bearer ${localStorage.getItem("adminToken")}`
             }
         })
          console.log(response.data)
       setCreatedCourses(createdCourses.filter((courses)=>courses._id !== courseId))
       toast.success(<Text weight='bold'>{response.data.message}</Text>)
        
        } catch (error) {
         console.log(error)
        }
 }

  
    

  return (
    <div className='overflow-auto h-screen'>
        <div className='flex justify-center my-4'>
            <Heading size='9'>Created <span><Text color='blue'>Courses</Text></span> </Heading>
        </div>
         <div className='flex justify-center my-3'>
      <Button variant='solid'color='teal'size='4' onClick={()=>{
         naviagte('/e/addCourse')
      }}>Create New Course</Button>
         </div>
           <div className='flex flex-wrap flex-row gap-3 justify-center my-9'>
      {createdCourses.map((courses)=>{
           return <Courses courses={courses} baseUrl={baseUrl} handledeleteCourse={handledeleteCourse} />
      })}
      </div>
      <Toaster/>
    </div>
     
  )
}


const Courses = ({courses,baseUrl,handledeleteCourse}) =>{

     const navigate = useNavigate()
        return (
            <>
              <CourseCard courses={courses} baseUrl={baseUrl} handledeleteCourse={handledeleteCourse}/>
            </>
        
        )
}

export default Dashboard


