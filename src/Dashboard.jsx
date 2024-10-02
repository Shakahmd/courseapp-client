import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useBaseUrl } from './hook/useUrl'
import { Card,Box,Inset,Flex,Text,Strong, Grid ,Blockquote,Button,Heading,AlertDialog} from '@radix-ui/themes'
import { useNavigate } from 'react-router-dom'
import DeleteButton from './components/DeleteButton'
import toast,{Toaster} from 'react-hot-toast'
import CourseCard from './components/CourseCard'


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
        //     <Box className='w-[400px] h-[400px] '>
        //     <Card className='shadow-md' >
        //    <Inset>
        //    <img
            
        //         src={`${baseUrl}/courseImage/${courses.imageLink}`}
        //         alt="uploadedimage"
        //         style={{
        //           display: 'block',
        //           objectFit: 'cover',
        //           width: '100%',
        //           height: 140,
        //           backgroundColor: 'var(--gray-5)',
        //         }}
        //       />
        //    </Inset>
        //    <div className='mt-3  flex flex-col gap-9'>
        //    <Text weight='bold' color='blue'>{courses.title}</Text>
        //     <Blockquote size='3' weight="medium" highContrast>{courses.description}</Blockquote>
        //     <Text weight='bold' color='gray'>{courses.price}/-</Text>
        //      <div className='flex justify-center gap-3'>
        //      <Button variant='solid'color='blue'size='3' onClick={()=>{
        //       navigate('/e/addCourse',{ state: { isUpdate: true, courseId :`${courses._id}`,courses:courses } })
        //    }}>Edit</Button>
        //     <DeleteButton title="Delete" description="Are you sure you want to delete this course?" cancel="cancel" 
        //     onDelete ={()=>{handledeleteCourse(courses._id)}}/>
        //      </div>
        //    </div>
           
        //    </Card>
        //     </Box>
        )
}

export default Dashboard
