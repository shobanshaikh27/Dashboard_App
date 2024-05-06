import {
    Card,
    CardContent,
} from "@/components/ui/card"
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DescriptionIcon from '@mui/icons-material/Description';

const WorkFlowCards = () => {
    return (
        <div className='m-8 p-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <Card className="shadow-lg border-none overflow-hidden hover:shadow-xl transition-transform duration-300 hover:scale-105">
                    <CardContent className="p-0" >
                        <div className='grid grid-cols-9'>
                            <div className='col-span-2 flex justify-center items-center bg-blue-950'>
                                <PersonAddAltOutlinedIcon style={{ fill: '#ffffff' }}  fontSize='large' />
                            </div>
                            <div className='col-span-7 p-4'>
                                <p className="md:text-xl text-lg font-semibold leading-none tracking-tight whitespace-nowrap overflow-auto">Customer and Supplier</p>
                                <p className="max-sm:hidden">Add Customer and Supplier</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="shadow-lg border-none overflow-hidden hover:shadow-xl transition-transform duration-300 hover:scale-105">
                    <CardContent className="p-0" >
                        <div className='grid grid-cols-9'>
                            <div className='col-span-2 flex justify-center items-center bg-blue-950'>
                                <AddShoppingCartIcon style={{ fill: '#ffffff' }} fontSize='large' />
                            </div>
                            <div className='col-span-7 p-4'>
                                <p className="md:text-xl text-lg font-semibold leading-none tracking-tight">Product/Services</p>
                                <p className="max-sm:hidden">Add Product/Services</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="shadow-lg border-none overflow-hidden hover:shadow-xl transition-transform duration-300 hover:scale-105">
                    <CardContent className="p-0" >
                        <div className='grid grid-cols-9'>
                            <div className='col-span-2 flex justify-center items-center bg-blue-950'>
                                <DescriptionIcon style={{ fill: '#ffffff' }} fontSize='large' />
                            </div>
                            <div className='col-span-7 p-4'>
                                <p className="md:text-xl text-lg font-semibold leading-none tracking-tight">Sale/Purchase</p>
                                <p className="max-sm:hidden">Add Sale/Purchase Invoices</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default WorkFlowCards
