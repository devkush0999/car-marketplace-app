import React from 'react'
import { Input } from "@/components/ui/input"
// import carDetails  from '../components/Shared/carDetails.json'
import carDetails  from '../../components/Shared/carDetails.json'



function InputField({item}) {
  return (

    <div>
      {/* {carDetails.carDetails.map((item,index)=>( */}
        {/* <div className="" key={index}> */}
           <Input type={item?.fieldType} name={item?.name} required={item?.required}/>
        {/* </div> */}

      {/* ))} */}
      
    </div>
  )
}

export default InputField