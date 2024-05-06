import WorkFlowCards from "@/ui-assets/WorkFlowCards"
import { ModeToggle } from "@/components/ui/mode-toggle"
import BS_PieChart from "@/ui-assets/BS-PieChart"
import BS_LineChart from "@/ui-assets/BS_LineChart"
import BalanceCards from "@/ui-assets/BalanceCards"
import InvoiceTable from "@/ui-assets/InvoiceTable/InvoiceTable"
import SP_BarChart from "@/ui-assets/SP-BarChart"
import { Separator } from "@/components/ui/separator"
import IE_PieChart from "@/ui-assets/IE-PieChart"
import MvcTable from "@/ui-assets/MvcTable/MvcTable"
import MspTable from "@/ui-assets/MspTable/MspTable"

const Layout = () => {
  return (
    <div className="p-2">
      <ModeToggle />
      <WorkFlowCards />
      <div className="grid grid-cols-12 gap-4 place-items-center m-8">
        <div className="lg:col-span-4 col-span-full w-full place-self-center">
          {/* <div className="dark:text-white p-2 text-lg">Bank and Cash Balance</div> */}
          <BalanceCards />
        </div>

        <div className="lg:col-span-4 max-sm:col-span-full col-span-6 w-full  rounded-xl shadow-xl bg-white dark:bg-[#020617]">
          <div className="dark:text-white p-2 text-lg font-semibold bg-[#172554] text-white rounded-t-lg">Balance Sheet</div>
          <Separator />
          <BS_PieChart />
        </div>
        <div className="lg:col-span-4 max-sm:col-span-full col-span-6 w-full rounded-xl shadow-xl bg-white dark:bg-[#020617]">
          <div className="dark:text-white p-2 text-lg font-semibold bg-[#172554] text-white rounded-t-lg">Income and Expense</div>
          <Separator />
          <IE_PieChart />

        </div>
        <div className="lg:col-span-5 md:col-span-5 col-span-full w-full  place-self-center">
          <InvoiceTable />
        </div>
        <div className="lg:col-span-7 md:col-span-7 col-span-full w-full h-full rounded-xl shadow-xl bg-white  dark:bg-[#020617]">
          <div className="dark:text-white p-2 text-lg font-semibold bg-[#172554] text-white rounded-t-lg">Sales and Purchase</div>
          <Separator />
          <SP_BarChart />
        </div>
        <div className="lg:col-span-12 md:col-span-7 col-span-full w-full  rounded-xl shadow-xl bg-white  dark:bg-[#020617]">
          <div className="dark:text-white p-2 text-lg font-semibold bg-[#172554]  text-white rounded-t-lg mb-1">Bank and Cash Balance</div>
          <Separator />
          <BS_LineChart />
        </div>
        <div className="lg:col-span-6 md:col-span-5 col-span-full w-full  place-self-center">
          <MvcTable />
        </div>
        <div className="lg:col-span-6 md:col-span-5 col-span-full w-full  place-self-center">
          <MspTable />
        </div>
      </div>
      {/* <BalanceCards /> */}
      {/* <section className='border-8 border-red-600 h-screen m-8 grid grid-cols-8'>
      <div className='w-full border border-green-500 bg-yellow-300 col-span-4'><Workflow /></div>
      <div className='w-full border border-green-500 h-full bg-yellow-300 row-span-2 col-span-2'>2</div>
      <div className='w-full border border-green-500 h-full bg-yellow-300 row-span-2 col-span-2'>3</div>
      <div className='w-full border border-green-500 h-full bg-yellow-300 col-span-4'>4</div>
      <div className='w-full border border-green-500 h-full bg-yellow-300 col-span-3'>5</div>
      <div className='w-full border border-green-500 h-full bg-yellow-300 col-span-5'>6</div>
    </section> */}
    </div>
  )
}

export default Layout
