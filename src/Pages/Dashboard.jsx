import { ModeToggle } from '@/components/ui/mode-toggle'
import React from 'react'
import Workflow from '@/ui-assets/Workflow';
import SPBarChart from '@/ui-assets/SP-BarChart';
import BS_PieChart from '@/ui-assets/BS-PieChart';
import BalanceCards from '@/ui-assets/BalanceCards';
import InvoiceTable from '@/ui-assets/InvoiceTable/InvoiceTable';


const Dashboard = () => {

    return (
        <div className='w-full h-full p-2 bg-white dark:bg-[#272730] relative'>
            <ModeToggle />
            <div className="flex space-x-2 p-2 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-1">
                <div>
                    <Workflow />
                </div>
                <BalanceCards />
                <div>
                    <SPBarChart />
                </div>
                <div>
                    <BS_PieChart />
                </div>
                <div>
                    <InvoiceTable />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
