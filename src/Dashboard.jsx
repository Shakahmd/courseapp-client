import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useBaseUrl } from './hook/useUrl'
import { Card,Box,Inset,Flex,Text,Strong, Grid ,Blockquote,Button,Heading} from '@radix-ui/themes'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const baseUrl = useBaseUrl()
    const [createdCourses,setCreatedCourses] = useState([])
    
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

  return (
    <div className='overflow-auto h-screen'>
        <div className='flex justify-center'>
            <Heading size='9'>Created <span><Text color='blue'>Courses</Text></span> </Heading>
        </div>
           <div className='flex flex-wrap flex-row gap-3 justify-center mt-9'>
      {createdCourses.map((courses)=>{
           return <Courses courses={courses} baseUrl={baseUrl}/>
      })}
      </div>
    </div>
     
  )
}


const Courses = ({courses,baseUrl}) =>{
     const navigate = useNavigate()
        return (
            <Box className='w-[400px] h-[400px] '>
            <Card className='shadow-md' >
           <Inset>
           <img
            
                src={`${baseUrl}/courseImage/${courses.imageLink}`}
                alt="uploadedimage"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: 140,
                  backgroundColor: 'var(--gray-5)',
                }}
              />
           </Inset>
           <div className='mt-3  flex flex-col gap-9'>
           <Text weight='bold' color='blue'>{courses.title}</Text>
            <Blockquote size='3' weight="medium" highContrast>{courses.description}</Blockquote>
            <Text weight='bold' color='gray'>{courses.price}/-</Text>
           <Button variant='solid'color='blue'size='3' onClick={()=>{
              navigate('/e/addCourse',{ state: { isUpdate: true, courseId :`${courses._id}` } })
           }}>Edit</Button>
           </div>
           
           </Card>
            </Box>
        )
}

export default Dashboard
