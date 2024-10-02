import React from 'react'
import { Card,Box,Inset,Flex,Text,Strong, Grid ,Blockquote,Button,Heading,AlertDialog} from '@radix-ui/themes'
import DeleteButton from './DeleteButton'
import { useNavigate } from 'react-router-dom'

const CourseCard = ({courses,baseUrl,handledeleteCourse}) => {
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
    {
        handledeleteCourse ? (
            <div className='flex justify-center gap-3'>
             <Button variant='solid'color='blue'size='3' onClick={()=>{
                  navigate('/e/addCourse',{ state: { isUpdate: true, courseId :`${courses._id}`,courses:courses } })
               }}>Edit</Button>
                <DeleteButton title="Delete" description="Are you sure you want to delete this course?" cancel="cancel" 
                onDelete ={()=>{handledeleteCourse(courses._id)}}/>
                 </div>
        ):
        (
            <Button variant='solid'color='blue'size='3'
            onClick={()=>{
             navigate(`/courses/${courses._id}`)
          }}>Purchase</Button>
        )
    }
 
   </div>
   
   </Card>
    </Box>
  
  )
}

export default CourseCard
