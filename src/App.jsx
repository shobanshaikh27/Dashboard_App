import { ThemeProvider } from "./components/ui/theme-provider.jsx"
import './App.css'
import Dashboard from './Pages/Dashboard'
import Layout from "./Pages/Layout.jsx"
import MainLayout from "./Pages/MainLayout.jsx"
import BS_PieChart from "./ui-assets/BS-PieChart.jsx"
import Workflow from "./ui-assets/Workflow.jsx"


function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {/* <Dashboard /> */}
        <div className="p-1 dark:bg-gray-900 bg-gray-100">
        <Layout /> 
        </div>
        {/* <Workflow /> */}
        {/* <MainLayout /> */}
        {/* <BS_PieChart /> */}
      </ThemeProvider>
    </>
  )
}

export default App
