import { Responsive, WidthProvider } from 'react-grid-layout';
// import { layouts } from './gridConfig.js'
import "../../components/ui/GridLayout.css"

const ResponsiveGridLayout = WidthProvider(Responsive);

const availableHandles = ["s", "w", "e", "n", "sw", "nw", "se", "ne"];

const GridLayout = ({ children , layouts }) => {
    return (
        <ResponsiveGridLayout
            layouts={layouts}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={10}
            autoSize
            // resizeHandles={availableHandles}
            onLayoutChange={(f)=>console.log("Updated Layout",f)}
        >
            {children}
        </ResponsiveGridLayout>
    );
};

export default GridLayout;
