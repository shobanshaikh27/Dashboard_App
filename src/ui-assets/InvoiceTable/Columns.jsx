// Columns.jsx
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
export const columns = [
    {
        accessorKey: "invoice",
        header: "Invoice",
    },
    {
        accessorKey: "pending_amount",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                className="dark:bg-transparent dark:border-[lightGray]"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Pending Amount 
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
        },  
    },
    {
        accessorKey: "date",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                className="dark:bg-transparent dark:border-[lightGray]"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Date
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
        },  
    },
];