import GridLayout from '@/components/ui/GridLayout';

import {layouts} from '../components/ui/gridConfig';
import Workflow from '@/ui-assets/Workflow';
import BalanceCards from '@/ui-assets/BalanceCards';
import BS_PieChart from '@/ui-assets/BS-PieChart';


const MainLayout = () => {
  return (
    <GridLayout layouts={layouts}>
      <div key="1" style={{ border: '1px solid #ccc' }}>
        <BalanceCards />
      </div>
      <div key="2" style={{ border: '1px solid #ccc' }}>
        <Workflow />
      </div>
      <div key="3" style={{ border: '1px solid #ccc' }} className='overflow-auto'>
        <BS_PieChart />
      </div>
      <div key="4" style={{ border: '1px solid #ccc' }}>
        4
      </div>
      <div key="5" style={{ border: '1px solid #ccc' }}>
        5
      </div>
      <div key="6" style={{ border: '1px solid #ccc' }}>
        6
      </div>
      {/* <div key="7" style={{ border: '1px solid #ccc' }}>
        7
      </div>
      <div key="8" style={{ border: '1px solid #ccc' }}>
        8
      </div> */}
    </GridLayout>
  );
};

export default MainLayout;