import { soldColumns, purchasedColumns } from './Columns';
import { DataTable } from "./DataTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const soldData = [
    {
      item: "Product1",
      stockOnHand: 100
    },
    {
      item: "Product2",
      stockOnHand: 50
    },
    {
      item: "Product3",
      stockOnHand: 75
    },
    {
      item: "Product4",
      stockOnHand: 120
    },
    {
      item: "Product5",
      stockOnHand: 80
    },
    {
      item: "Product6",
      stockOnHand: 60
    },
    {
      item: "Product7",
      stockOnHand: 110
    },
    {
      item: "Product8",
      stockOnHand: 90
    },
    {
      item: "Product9",
      stockOnHand: 70
    },
    {
      item: "Product10",
      stockOnHand: 85
    }
  ];

  const purchaseData = [
    {
      item: "Product1",
      invoiceCount: 20
    },
    {
      item: "Service1",
      invoiceCount: 15
    },
    {
      item: "Product2",
      invoiceCount: 18
    },
    {
      item: "Service2",
      invoiceCount: 12
    },
    {
      item: "Product3",
      invoiceCount: 25
    },
    {
      item: "Service3",
      invoiceCount: 22
    },
    {
      item: "Product4",
      invoiceCount: 30
    },
    {
      item: "Service4",
      invoiceCount: 10
    },
    {
      item: "Product5",
      invoiceCount: 17
    },
    {
      item: "Service5",
      invoiceCount: 28
    }
  ];
  export default function MspTable() {
    return (
        <section className=" overflow-x-auto">
            <Tabs defaultValue="sold" className="">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="sold">Sold</TabsTrigger>
                    <TabsTrigger value="purchased">Purchased</TabsTrigger>
                </TabsList>
                <TabsContent value="sold">
                    <DataTable columns={soldColumns}
                        data={soldData} heading="Most Sold/Purchased Product and Service" />
                </TabsContent>
                <TabsContent value="purchased">
                    <DataTable columns={purchasedColumns}
                        data={purchaseData} heading="Most Sold/Purchased Product and Service" />
                </TabsContent>
            </Tabs>
        </section>
    )
}