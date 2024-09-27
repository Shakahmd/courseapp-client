import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { useBaseUrl } from './hook/useUrl'

const Course = () => {
     const [purchaseCourse,setPurchaseCourse] = useState([])
     const baseUrl = useBaseUrl()
     const {courseId} = useParams()

     useEffect(()=>{
         const getSingleCourse = async() =>{
            try {
                 const response = await axios.post(`${baseUrl}/user/courses/${courseId}`)
                 console.log(response.data)
                 setPurchaseCourse(response.data)
            } catch (error) {
                 console.log(error)
            }
         }
         getSingleCourse()
     },[])
     
  return (

    <div>
     {purchaseCourse.message}
    </div>
  )
}

export default Course
