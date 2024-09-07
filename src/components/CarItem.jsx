import { Separator } from '@radix-ui/react-select'
import React from 'react'
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { BsSpeedometer } from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";
import { IoOpenOutline } from "react-icons/io5";



function CarItem({ car }) {
    return (
        <div className='rounded-xl bg-white hover:shadow-md cursor-pointer'>
            <div className="absolute m-2 bg-green-500 px-2 rounded-full text-sm text-white">New</div>
            <img src={car?.image} width={'100%'} height={250} className='rounded-t-xl' />
            <div className='p-4'>
                <h2 className='font-bold text-black text-lg mb-2'>{car?.name}</h2>
                < Separator className='border' />
                <div className='grid grid-cols-3 mt-5'>
                    <div className='flex flex-col item-center'>
                        <BsSpeedometer className='text-lg mb-2'/>
                        <h2>{car.fuelType}<br/>Fuel</h2>
                    </div>
                    <div className='flex flex-col item-center'>
                        <TbManualGearbox className='text-lg mb-2'/>
                        <h2>{car.gearType}<br/> Gear</h2>
                    </div>

                    <div className='flex flex-col item-center'>
                        <BsFillFuelPumpDieselFill className='text-lg mb-2'/>
                        <h2>{car.miles} Miles</h2>
                    </div>
                </div>
                <Separator className="my-2 border"/>
                <div className='flex items-center justify-between'>
                    <h2 className='font-bold text-xl'>Price: ${car.price}</h2>
                    <h2 className='text-primary text-sm flex gap-2'>
                        View Details <IoOpenOutline /></h2>
                </div>
            </div>
        </div>
    )
}

export default CarItem