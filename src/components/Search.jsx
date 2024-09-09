import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FaSearch } from "react-icons/fa";
import { Separator } from "@/components/ui/separator"
import Data from "./Shared/Data"



function Search() {
  return (
    <div className='p-2 md:p-4 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-[60%]'>
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Car" />
        </SelectTrigger>
        <SelectContent>
          {Data.Cars.map((title, index) =>
            <SelectItem key={index} value={title.condition}>{title.condition}</SelectItem>
          )}
        </SelectContent>
      </Select>
      <Separator oriantation='vertical' className="hidden md:block" />
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Car Makes" />
        </SelectTrigger>
        <SelectContent>
          {Data.CarMakes.map((maker, index) => (
            <SelectItem key={index} value={maker.name}>{maker.name}</SelectItem>

          ))}
        </SelectContent>
      </Select>
      <Separator oriantation="vertical" className="hidden md:block" />
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
          {Data.Pricing.map((amount, index) => (
            <SelectItem key={index} value={amount.price}>{amount.price}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator oriantation="vertical" />
      <div>
        <FaSearch className='text-[50px] bg-primary rounded-full p-3 text-white hover:scale-105 transition-all curser-pointer' />
      </div>

    </div>
  )
}

export default Search