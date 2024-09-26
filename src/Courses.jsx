import React ,{useEffect, useState}from 'react'
import axios from 'axios'
import { useBaseUrl } from './hook/useUrl'
import { Card,Box,Inset,Flex,Text,Strong, Grid ,Blockquote,Button} from '@radix-ui/themes'
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
    <div className='mt-3 mx-4 h-screen overflow-auto flex flex-wrap justify-center gap-4  '>
   
   {courses.map((courses)=>{
          return (
              <div className='flex flex-row justify-center mt-3'>
            <Course courses ={courses} baseUrl={baseUrl}/>
            </div>
              )
          
  })}
     </div>

    
  
   
   
  )
}

const Course = ({courses,baseUrl}) =>{
   console.log(courses.title)
  return (
    
      <Box className='w-[400px] h-[400px] '>
    <Card className='shadow-md'>
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
   <Button variant='solid'color='blue'size='3'>Purchase</Button>
   </div>
   
   </Card>
    </Box>
    
  
    
 
  )
}
export default Courses

