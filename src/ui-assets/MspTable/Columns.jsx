// Columns.jsx
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
export const soldColumns = [
    {
        accessorKey: "item",
        header: "Product and Service",
    },
    {
        accessorKey: "stockOnHand",
        header:"Stock On Hand",
    },
];
export const purchasedColumns = [
    {
        accessorKey: "item",
        header: "Product and Service",
    },
    {
        accessorKey: "invoiceCount",
        header:"Invoice Count",
    },
];