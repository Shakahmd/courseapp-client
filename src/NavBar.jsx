import React from 'react'
import { Button ,Text} from '@radix-ui/themes'

const NavBar = () => {
  return (
    <div className='flex justify-between  mt-4 mx-4'>
        <Text size='7' weight='medium'>CourseApp</Text>
        <div className='mx-3 flex gap-4 '>
           <Button variant='solid'color='blue' size='3'>SignIn</Button>
           <Button  variant='solid'color='blue'size='3'> SignUp</Button>
       </div>
     
    </div>
  )
}

export default NavBar
