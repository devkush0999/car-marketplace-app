import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


function DropdownField({item}) {
    return (
        <div>
            <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={item.label} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    {item?.options?.map((option,index)=>(
                        <SelectItem key={index.id} value={option}>{option}</SelectItem>
                    ))}
                </SelectContent>
            </Select>

        </div>
    )
}

export default DropdownField