import React,{useState}from 'react'
import { Box,TextField,Card,Inset,Text,Flex ,Heading,Radio,Button} from '@radix-ui/themes'
import { useBaseUrl } from './hook/useUrl'
import axios from 'axios'
import toast,{Toaster} from 'react-hot-toast'


const AddCourse = () => {
      const baseUrl = useBaseUrl()
          const [courseImage,setCourseImage]  =useState({})
          const [courseData,setCourseData] = useState({
            title:"",
            description:"",
            price:'',
            published:false
          })
          
        //   const handleFileChange = ({target}) =>{
        //      const file = target.files[0]
        //      console.log(file)
        //   }


          const handleChange = ({target}) =>{
            const {value,name,type,checked,files} = target
              
            if(type === 'file'){
                setCourseImage(files[0])
            }else{
                setCourseData((prev)=>({
                  ...prev,
                  [name]:type === 'checkbox' ? checked :
                         name === 'price' ? (parseFloat(value)||0):
                         value
                }))
            }
               
               
          }
      
           const formData = new FormData()
           formData.append("title",courseData.title)
           formData.append("description",courseData.description)
           formData.append("price",courseData.price)
           formData.append("published",courseData.published)
           formData.append("courseImage",courseImage)

         
         console.log(formData)

         
            
           
          const handleSubmit = async() =>{
            
             try {
             const token = localStorage.getItem('adminToken')
             if(!token){
                console.log("No token available")
             }

             const response = await axios.post(`${baseUrl}/admin/courses`,formData,{
                headers:{
                    "Content-Type":'multipart/form-data',
                    Authorization:`Bearer ${token}`
                }
             })
               if(response.status === 200){
                 toast.success(<Text weight='bold'>{response.data.message}</Text>)
                 console.log(response.data.message)
               }
               
       
             } catch (error) {
                  if(error.response.status >= 400 && error.response.status > 500){
                    toast.error(<Text weight='bold'>{error.response.data.message}</Text>)
                  }else{
                    toast.error("Error during course creation")
                  }

                 console.log(error)
             }
          }
  return (
    <div className='flex justify-center'>
      <Box width='700px' >
        <div className='flex justify-center my-5'>
        <Heading size='7' weight='bold' trim='both'>Add Your <span className='text-[#5EB1EF]'>Course</span> Below</Heading>
        </div>
        <Card className=' shadow-md mt-32'>
            <Flex  direction="column" gap='3'>
            <label>
             <Text weight='bold' trim='both' color='sky'>Title</Text>
            </label>
            <TextField.Root size='3' type='text' variant='classic' radius='large'
             name="title"
             value={courseData.title}
              onChange={handleChange}/>
            <label>
             <Text weight='bold' trim='both' color='sky' >Description</Text>
            </label>
            <TextField.Root size='3' variant='classic' type='text' radius='large'
              name='description'
              value={courseData.description}
              onChange={handleChange}/>
            <label>
             <Text weight='bold' trim='both' color='sky'>Price</Text>
            </label>
            <TextField.Root size='3' variant='classic' radius='large' type='number'
            name='price'
            value={courseData.price}
            onChange={handleChange}/>
              <label>
             <Text weight='bold' trim='both' color='sky'>CourseImage</Text>
            </label>
            <TextField.Root className='py-3' size='3' variant='classic' type="file"  radius='large'
             name="courseImage"
             value={courseData.courseImage}
             onChange={handleChange}/>
              <div>
                <label><Text weight='bold' trim='both' color='sky'>Published</Text></label>
                <input type="checkbox" name='published' checked={courseData.published} onChange={handleChange}/>
              </div>
                  </Flex>
               <div className='mt-3'>
               <Button variant='solid'color='blue' size='3' onClick={handleSubmit}>Done</Button>
               </div>
             
        </Card>

      </Box>
      <Toaster position='top-center'/>
    </div>
  )
}

export default AddCourse
