import Header from '@/components/Header'
import React from 'react'
import carDetails  from './../components/Shared/carDetails.json'
import InputField from './components/InputField'
import DropDownField from './components/DropDownField'


function AddListing() {
  return (
    <div>
        <Header/>
        <div className="px-10 md:px-20 my-10">
            <h2 className="font-bold text-4xl">Add New Listing</h2>
            <form className='p-10 border rounded-xl mt-10'>
                  {/* car details */}
                  <div >
                    <h2 className="font-medium text-xl mb-6">Car Details</h2>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
                     {carDetails.carDetails.map((item,index)=>(
                      <div  key={index}>
                        <label className='text-sm'>{item?.label}{item.required&&<span>*</span>}</label>
                        {item.fieldType=='text' || item.fieldType=='number' 
                        ?<InputField item={item}/>:item.fieldType=='dropdown'?<DropDownField item={item}/> :null}
                      </div>
                     ))}
                    </div>
                  </div>



                  {/* features list */}




                  {/* car images */}



                
            </form>
            <p className='border bg-pink-200 font-mono text-center mt-14'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima laudantium deleniti odio rerum error neque assumenda dicta expedita voluptatem facere numquam, incidunt omnis enim sequi. Labore eius natus suscipit voluptatibus. Modi officia, sapiente ipsum id reiciendis deleniti magni aliquam earum voluptatibus suscipit molestias quisquam temporibus, numquam ea tempora beatae cumque sed voluptates mollitia eaque? Suscipit accusantium quidem eum quisquam minima, nihil fuga voluptas voluptate velit, ex voluptatibus corporis officiis consequuntur est ab iste quaerat voluptatem dolorem non mollitia, modi autem? Eveniet temporibus excepturi ad soluta? Aliquam incidunt pariatur unde facere quia soluta ducimus aspernatur, vel fugiat tenetur deserunt porro beatae!
            </p>

            </div>

    </div>
  )
}

export default AddListing