// Columns.jsx
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
export const customerColumns = [
    {
        accessorKey: "customer",
        header: "Customer",
    },
    {
        accessorKey: "amount",
        header:"Amount",
    },
];
export const supplierColumns = [
    {
        accessorKey: "supplier",
        header: "Supplier",
    },
    {
        accessorKey: "inv_count",
        header:"Invoice Count",
    },
];