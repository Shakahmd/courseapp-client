import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useBaseUrl } from './hook/useUrl'
import { Card ,Box} from '@radix-ui/themes'
import { Text } from '@radix-ui/themes'

const Course = () => {
    const [purchaseCourse, setPurchaseCourse] = useState(null)
    const baseUrl = useBaseUrl()
    const { courseId } = useParams()
   

    useEffect(() => {
        const getSingleCourse = async () => {
            try {
              const token = localStorage.getItem("userToken")
              if(!token){
                console.log("No token available")
             }
                const response = await axios.post(`${baseUrl}/user/courses/${courseId}`,null,{
                  headers:{
                    Authorization:`Bearer ${token}`
                  }
                })
                console.log(response.data)
                setPurchaseCourse(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getSingleCourse()
    }, [courseId]) 

    
    if (!purchaseCourse) {
        return <p>Loading...</p> 
    }

    
    return (
       <div className='w-full h-screen flex justify-center items-center'>
         
             <Box width="800px">
             <Card>
              <div className='flex flex-col justify-center items-center'>
              <Text size="8">{purchaseCourse.message}</Text> 
              <Text size={"5"} color="cyan">{purchaseCourse.course.title}</Text> 
              </div>
            
             </Card>
             </Box>
            
             
        
       </div>
    )
}

export default Course
