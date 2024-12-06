import React from 'react'
import landing from './assets/landing.svg'
import { Text,Container,Heading,Card,Button } from '@radix-ui/themes'
import { useNavigate } from 'react-router-dom'


const LandingPage = () => {
    const navigate = useNavigate()
     
  return (
       <div className='h-full overflow-auto'>
        
            <div className='flex  flex-wrap justify-between mt-9 mx-6 align-bottom'>
            <div className='mt-40'>
               <Container>
               
                <Heading size='9' weight='medium'>Welcome to <span><Text weight='bold' color='blue'>CourseApp</Text></span><br />Learn And Grow</Heading>
                 <div className='mt-4'>
                 <Button onClick={()=>{

                  navigate('/courses')
                 }}>Courses</Button>
                 </div>
               
              
                </Container>
            
         </div>
       <img
         width='900px'
         src={landing}/>
          
    </div>
       </div>
    
  )
    
  
}

export default LandingPage
