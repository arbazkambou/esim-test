"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { HashIcon, SettingsIcon, TabletSmartphoneIcon } from "lucide-react";

const phones = [
    {
        Manufacturer: "Apple",
        phoneModel: "iPhone XR",
        NoOfeSIMs: "20",
    },
    {
        Manufacturer: "Apple",
        phoneModel: "iPhone XS",
        NoOfeSIMs: "20",
    },
    {
        Manufacturer: "Apple",
        phoneModel: "iPhone XS Max",
        NoOfeSIMs: "20",
    },
    {
        Manufacturer: "Apple",
        phoneModel: "iPhone 11",
        NoOfeSIMs: "20",
    },
    {
        Manufacturer: "Apple",
        phoneModel: "iPhone 11 Pro",
        NoOfeSIMs: "20",
    },
    {
        Manufacturer: "Apple",
        phoneModel: "iPhone 11 Pro Max",
        NoOfeSIMs: "20",
    },
    {
        Manufacturer: "Apple",
        phoneModel: "iPhone SE(2020)",
        NoOfeSIMs: "20",
    },
    {
        Manufacturer: "Apple",
        phoneModel: "iPhone 12 Mini",
        NoOfeSIMs: "20",
    },
    {
        Manufacturer: "Apple",
        phoneModel: "iPhone 12",
        NoOfeSIMs: "20",
    },
    {
        Manufacturer: "Apple",
        phoneModel: "iPhone 12 Pro",
        NoOfeSIMs: "20",
    },
    {
        Manufacturer: "Apple",
        phoneModel: "iPhone 12 Pro Max",
        NoOfeSIMs: "20",
    },
    {
        Manufacturer: "Apple",
        phoneModel: "iPhone 13 mini",
        NoOfeSIMs: "20",
    },
    {
        Manufacturer: "Apple",
        phoneModel: "iPhone 13",
        NoOfeSIMs: "20",
    },
    {
        Manufacturer: "Apple",
        phoneModel: "iPhone 13 Pro",
        NoOfeSIMs: "20",
    },
    {
        Manufacturer: "Apple",
        phoneModel: "iPhone 13 Pro Max",
        NoOfeSIMs: "20",
    },
    {
        Manufacturer: "Apple",
        phoneModel: "iPhone SE(2022)",
        NoOfeSIMs: "20",
    },
    {
        Manufacturer: "Apple",
        phoneModel: "iPhone 14",
        NoOfeSIMs: "20",
    },
    {
        Manufacturer: "Apple",
        phoneModel: "iPhone 14 Plus",
        NoOfeSIMs: "20",
    },
    {
        Manufacturer: "Apple",
        phoneModel: "iPhone 14 Pro",
        NoOfeSIMs: "20",
    },
    {
        Manufacturer: "Apple",
        phoneModel: "iPhone 14 Pro Max",
        NoOfeSIMs: "20",
    },
    {
        Manufacturer: "Apple",
        phoneModel: "iPhone 15",
        NoOfeSIMs: "20",
    },
    {
        Manufacturer: "Apple",
        phoneModel: "iPhone 15 Plus",
        NoOfeSIMs: "20",
    },
    {
        Manufacturer: "Apple",
        phoneModel: "iPhone 15 Pro",
        NoOfeSIMs: "20",
    },
    {
        Manufacturer: "Apple",
        phoneModel: "iPhone 15 Pro Max",
        NoOfeSIMs: "20",
    },
    {
        Manufacturer: "Apple",
        phoneModel: "iPad Pro (2018 and onwards)",
        NoOfeSIMs: "20",
    },
    {
        Manufacturer: "Apple",
        phoneModel: "iPad Air",
        NoOfeSIMs: "20",
    },
    {
        Manufacturer: "Apple",
        phoneModel: "iPad",
        NoOfeSIMs: "20",
    },
    {
        Manufacturer: "Google",
        phoneModel: "Pixel 3",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Google",
        phoneModel: "Pixel 3a",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Google",
        phoneModel: "Pixel 4",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Google",
        phoneModel: "Pixel 4a",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Google",
        phoneModel: "Pixel 5",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Google",
        phoneModel: "Pixel 6",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Google",
        phoneModel: "Pixel 6a",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Google",
        phoneModel: "Pixel 6 Pro",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Google",
        phoneModel: "Pixel 7",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Google",
        phoneModel: "Pixel 7 Pro",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Google",
        phoneModel: "Pixel 8",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Google",
        phoneModel: "Pixel 8 Pro",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Google",
        phoneModel: "Pixel Fold",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Huawei",
        phoneModel: "P40",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Huawei",
        phoneModel: "P40 Pro (not including the P40 Pro +)",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Huawei",
        phoneModel: "Mate 40 Pro",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Motorola",
        phoneModel: "Razr 2019",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Motorola",
        phoneModel: "Razr 5G",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Motorola",
        phoneModel: "Razr 40",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Motorola",
        phoneModel: "Razr 40 Ultra",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Motorola",
        phoneModel: "Razr+",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Motorola",
        phoneModel: "Edge+",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Motorola",
        phoneModel: "Edge 40",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Motorola",
        phoneModel: "Edge 40 Pro",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Motorola",
        phoneModel: "G52J 5G",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Motorola",
        phoneModel: "G52J 5G  Ⅱ",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Motorola",
        phoneModel: "G53J 5G",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Samsung",
        phoneModel: "Galaxy Z Flip",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Samsung",
        phoneModel: "Galaxy Z Flip 5G",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Samsung",
        phoneModel: "Galaxy Z Flip3 5G",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Samsung",
        phoneModel: "Galaxy Z Flip4",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Samsung",
        phoneModel: "Galaxy Z Flip5 5G",
        NoOfeSIMs: "+5",
    },
    {
        Manufacturer: "Samsung",
        phoneModel: "Galaxy Fold",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Samsung",
        phoneModel: "Galaxy Z Fold2 5G",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Samsung",
        phoneModel: "Galaxy Z Fold3 5G",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Samsung",
        phoneModel: "Galaxy Z Fold4",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Samsung",
        phoneModel: "Galaxy Z Fold5 5G",
        NoOfeSIMs: "+5",
    },
    {
        Manufacturer: "Samsung",
        phoneModel: "Galaxy S20",
        NoOfeSIMs: "5",
    },
    {
        Manufacturer: "Samsung",
        phoneModel: "Galaxy S20+ 5G",
        NoOfeSIMs: "5",
    },
    {
        Manufacturer: "Samsung",
        phoneModel: "Galaxy S20 Ultra",
        NoOfeSIMs: "5",
    },
    {
        Manufacturer: "Samsung",
        phoneModel: "Galaxy S20 Ultra 5G",
        NoOfeSIMs: "5",
    },
    {
        Manufacturer: "Samsung",
        phoneModel: "Galaxy S21",
        NoOfeSIMs: "5",
    },
    {
        Manufacturer: "Samsung",
        phoneModel: "Galaxy S21+ 5G",
        NoOfeSIMs: "5",
    },
    {
        Manufacturer: "Samsung",
        phoneModel: "Galaxy S21 Ultra 5G",
        NoOfeSIMs: "5",
    },
    {
        Manufacturer: "Samsung",
        phoneModel: "Galaxy S22",
        NoOfeSIMs: "+5",
    },
    {
        Manufacturer: "Samsung",
        phoneModel: "Galaxy S22+",
        NoOfeSIMs: "+5",
    },
    {
        Manufacturer: "Samsung",
        phoneModel: "Galaxy S22 Ultra",
        NoOfeSIMs: "+5",
    },
    {
        Manufacturer: "Samsung",
        phoneModel: "Galaxy Note 20 Ultra 5G",
        NoOfeSIMs: "5",
    },
    {
        Manufacturer: "Samsung",
        phoneModel: "Galaxy Note 20",
        NoOfeSIMs: "5",
    },
    {
        Manufacturer: "Samsung",
        phoneModel: "Galaxy S23",
        NoOfeSIMs: "+5",
    },
    {
        Manufacturer: "Samsung",
        phoneModel: "Galaxy S23+",
        NoOfeSIMs: "+5",
    },
    {
        Manufacturer: "Samsung",
        phoneModel: "Galaxy S23 Ultra",
        NoOfeSIMs: "+5",
    },
    {
        Manufacturer: "Rakuten Mobile",
        phoneModel: "Rakuten Mini",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Rakuten Mobile",
        phoneModel: "Big-S",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Rakuten Mobile",
        phoneModel: "Big",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Rakuten Mobile",
        phoneModel: "Hand",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Rakuten Mobile",
        phoneModel: "Hand 5G",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Oppo",
        phoneModel: "Find N2 Flip",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Oppo",
        phoneModel: "Find X3 Pro",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Oppo",
        phoneModel: "Reno 5 A",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Oppo",
        phoneModel: "Find X5",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Oppo",
        phoneModel: "Find X5 Pro",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Oppo",
        phoneModel: "A55s 5G",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Oppo",
        phoneModel: "Reno 6 Pro 5G",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Sony",
        phoneModel: "Xperia 10 III Lite",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Sony",
        phoneModel: "Xperia 10 IV",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Sony",
        phoneModel: "Xperia 10V",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Sony",
        phoneModel: "Xperia 1 IV",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Sony",
        phoneModel: "Xperia 5 IV",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Sony",
        phoneModel: "Xperia 1 V",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Sony",
        phoneModel: "Sony Xperia Ace III",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Honor",
        phoneModel: "Magic 4 Pro",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Honor",
        phoneModel: "Magic 5 Pro",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Honor",
        phoneModel: "90",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Xiaomi",
        phoneModel: "12T Pro",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Xiaomi",
        phoneModel: "13",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Xiaomi",
        phoneModel: "13 Lite",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Xiaomi",
        phoneModel: "13 Pro",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Xiaomi",
        phoneModel: "13T Pro",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Sharp",
        phoneModel: "Aquos Sense6s",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Sharp",
        phoneModel: "Aquos sense 7",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Sharp",
        phoneModel: "Aquos sense 7plus",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Sharp",
        phoneModel: "Aquos Wish",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Sharp",
        phoneModel: "Aquos wish 2 SHG08",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Sharp",
        phoneModel: "Aquos wish3",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Sharp",
        phoneModel: "Aquos Sense4 lite",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Sharp",
        phoneModel: "Aquos zero 6",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Sharp",
        phoneModel: "Simple Sumaho6",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Sharp",
        phoneModel: "Aquos R7",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Sharp",
        phoneModel: "Aquos R8",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Sharp",
        phoneModel: "Aquos R8 Pro",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "DOOGEE",
        phoneModel: "V30",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "OnePlus",
        phoneModel: "11",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "HAMMER",
        phoneModel: "Blade 3",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "HAMMER",
        phoneModel: "Explorer PRO",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "HAMMER",
        phoneModel: "Blade 5G",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Nokia",
        phoneModel: "XR21",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Nokia",
        phoneModel: "X30",
        NoOfeSIMs: "1",
    },
    {
        Manufacturer: "Nokia",
        phoneModel: "G60 5G",
        NoOfeSIMs: "1",
    },

]

export function CompatibleTable() {
    return (
        <section className="container mt-16">
            <Table className="text-center">
                <TableHeader>
                    <TableRow className="bg-primary">
                        <TableHead className="text-white">
                            <div className="flex items-center gap-2 justify-center">
                                <SettingsIcon className="w-4 h-4" /> Manufacturer
                            </div>
                        </TableHead>
                        <TableHead className="text-white">
                            <div className="flex items-center gap-2 justify-center">
                                <TabletSmartphoneIcon className="w-4 h-4" /> Phone Model
                            </div>
                        </TableHead>
                        <TableHead className="text-white">
                            <div className="flex items-center gap-2 justify-center">
                                <HashIcon className="w-4 h-4" /> No. of eSIMs
                            </div>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {phones.map((phone, index) => (
                        <TableRow key={`${phone.Manufacturer}-${phone.phoneModel}`}
                            className={index % 2 === 0 ? "bg-white" : "bg-secondary"}>
                            <TableCell className="font-medium">{phone.Manufacturer}</TableCell>
                            <TableCell>{phone.phoneModel}</TableCell>
                            <TableCell className="bg-primary/20 px-3 mt-2 mb-6 rounded-sm text-primary inline-block">{phone.NoOfeSIMs}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </section>
    )
}

export default CompatibleTable;