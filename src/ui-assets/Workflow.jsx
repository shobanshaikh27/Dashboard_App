import React from 'react'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DescriptionIcon from '@mui/icons-material/Description';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const Workflow = () => {
    const workflows = [
        {
            id: 1,
            name: "Customer and Supplier",
            icon: <PersonAddAltOutlinedIcon fontSize='large' />
        },
        {
            id: 2,
            name: "Product/ Service",
            icon: <AddShoppingCartIcon fontSize='large' />
        },
        {
            id: 3,
            name: "Sale Invoice",
            icon: <DescriptionIcon fontSize='large' />
        },
        {
            id: 4,
            name: "Purchase Invoice",
            icon: <DescriptionOutlinedIcon fontSize='large' />
        },
    ]
    return (
        <div>
            <div className='bg-[#dad5d5] dark:bg-[#1d1d29]  p-2 rounded-lg max-sm:w-full max-sm:p-1'>
                <div className='text-lg p-1 font-semibold dark:text-slate-50  '>WorkFlow</div>
                <ScrollArea className="w-full   max-sm:w-auto whitespace-nowrap rounded-md border  bg-white dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50">
                    <div className="flex w-max space-x-4 p-4">
                        
                            {workflows.map((workflow) => (
                                <div key={workflow.id} className='flex flex-col items-center justify-center'>
                                    <div>
                                        {workflow.icon}
                                    </div>
                                    <div>
                                        {workflow.name}
                                    </div>
                                </div>
                            ))}
                        
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
        </div>
    )
}

export default Workflow
