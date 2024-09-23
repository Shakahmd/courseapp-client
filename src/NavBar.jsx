import React from 'react'
import { Button ,Text} from '@radix-ui/themes'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
  return (
    <div className='flex justify-between  mt-4 mx-4'>
        <Text size='7' weight='medium'>CourseApp</Text>
        <div className='mx-3 flex gap-4 '>
           <Button variant='solid'color='blue' size='3' onClick={()=>{
            navigate('/signin')
           }}>SignIn</Button>
           <Button  variant='solid'color='blue'size='3' onClick={()=>{
            navigate('/signup')
           }}> SignUp</Button>
       </div>
     
    </div>
  )
}

export default NavBar
