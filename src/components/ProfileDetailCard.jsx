import React from 'react'
import { Card,Avatar,Text,Flex} from '@radix-ui/themes'
import DataListProfile from './DataListProfile'

const ProfileDetailCard = ({email,name ,avatar}) => {
  return (
    <>
       <Card className='mx-6 h-1/2 w-full'>
            <div className='flex items-center gap-3'>
            <Avatar
		size="9"
		src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
		fallback="A"
	/>
       <div className='flex flex-col'>
       <Text size={"9"} weight={"bold"}>{name}</Text>
      <Text size={"7"}>{email}</Text>
       </div>
         </div>
          <div className='flex flex-col  items-center mt-10'>
             <DataListProfile/>
          </div>
          
           </Card>
    </>
  )
}

export default ProfileDetailCard
