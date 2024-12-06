import React from 'react'
import { Card,Box,Inset,Text,Blockquote} from '@radix-ui/themes'

const CourseCard2 = ({courseImage,title,price,description,baseUrl}) => {
    
  return (
    <div>
        <Box className='w-[400px] h-[400px] '>
    <Card className='shadow-md' >
   <Inset>
   <img
    
         src={`${baseUrl}/courseImage/${courseImage}`}
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
   <Text weight='bold' color='blue'>{title}</Text>
   <Text weight='bold' color='blue'>{description}</Text>
     <Text weight='bold' color='gray'>{price}/-</Text>
   </div>
   </Card>
    </Box>
    </div>
  )
}

export default CourseCard2
