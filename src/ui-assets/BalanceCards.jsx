import React from 'react'
import {
    Card, CardHeader,
    CardTitle, CardDescription,
} from '@/components/ui/card'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

import CountUpComponent from './Countup';
const BalanceCards = () => {
    return (
        <>
            <div className='grid gap-4'>
                <Card className="w-3/4 place-self-center bg-[#172554] dark:bg-[#172554] text-white">
                    <CardHeader>
                        <CardTitle><CountUpComponent end={500321} duration={5} /></CardTitle>
                        <div className='flex items-center justify-between space-x-2'>
                            <CardDescription className=" font-semibold text-lg text-slate-300">Cash Balance</CardDescription>
                            <AccountBalanceWalletOutlinedIcon />
                        </div>
                    </CardHeader>
                </Card >
                <Card className="w-3/4 place-self-center">
                    <CardHeader>
                        <CardTitle><CountUpComponent end={250257}duration={5} /></CardTitle>
                        <div className='flex items-center justify-between space-x-2'>
                            <CardDescription className=" font-semibold text-lg">Bank Balance</CardDescription>
                            <AccountBalanceOutlinedIcon />
                        </div>
                    </CardHeader>
                </Card>
            </div>
        </>
        // <div>
        //     <div className='bg-[#dad5d5] dark:bg-[#1d1d29] p-2 rounded-lg max-sm:w-full'>
        //         <div className='font-semibold text-lg dark:text-slate-50'>Bank and Cash Balance</div>
        //         <div className="p-1 flex items-center max-sm:flex-col">
        //             <div className="p-2 max-sm:p-1 max-sm:w-full">
        // <Card>
        //     <CardHeader>
        //         <CardTitle>5,00,321 </CardTitle>
        //         <div className='flex items-center justify-between space-x-2'>
        //             <CardDescription className=" font-semibold text-lg">Cash Balance</CardDescription>
        //             <AccountBalanceWalletOutlinedIcon />
        //         </div>
        //     </CardHeader>
        // </Card>
        //             </div>
        //             <div className="p-2  max-sm:p-1 max-sm:w-full">
        // <Card>
        //     <CardHeader>
        //         <CardTitle>5,00,321 </CardTitle>
        //         <div className='flex items-center justify-between space-x-2'>
        //             <CardDescription className=" font-semibold text-lg">Bank Balance</CardDescription>
        //             <AccountBalanceOutlinedIcon />
        //         </div>
        //     </CardHeader>
        // </Card>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default BalanceCards
