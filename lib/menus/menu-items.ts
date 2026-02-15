import { BanknoteIcon, Boxes, BoxesIcon, ClipboardList, Clock11Icon, Clock4, HeartIcon, Layers3, LayoutDashboard, ListChecks, Settings, Settings2, User2, Users } from "lucide-react"

export const clientItems = [
    {
        title: "My Quza Account",
        url: "/user/",
        icon: User2
    },
    {
        title: "Orders",
        url: "/user/orders",
        icon: BoxesIcon
    },
    {
        title: "Wishlist",
        url: "/user/wishlist",
        icon: HeartIcon
    },
   
    {
        title: "Settings",
        url: "/user/profile",
        icon: Settings2
    },
]


export const managerItems = [
    {
        title: "Dashboard",
        url: "/manager",
        icon: LayoutDashboard
    },
    {
        title: "Orders",
        url: "/manager/orders",
        icon: ClipboardList
    },
    {
        title: "Products",
        url: "/manager/products",
        icon: Boxes
    },
    
    {
        title: "Settings",
        url: "/manager/settings",
        icon: Settings
    },
]

export const adminItems = [
    {
        title: "Dashboard",
        url: "/admin",
        icon: LayoutDashboard
    },
    {
        title: "Categories",
        url: "/admin/categories",
        icon: ListChecks
    },
    {
        title: "Brands",
        url: "/admin/brands",
        icon: Layers3
    },
    {
        title: "Products",
        url: "/admin/products",
        icon: Boxes
    },
    {
        title: "Orders",
        url: "/admin/orders",
        icon: ClipboardList
    },
    {
        title: "Payments",
        url: "/admin/payments",
        icon: BanknoteIcon
    },
    {
        title: "Users",
        url: "/admin/users",
        icon: Users
    },
    {
        title: "Settings",
        url: "/admin/settings",
        icon: Settings
    },
]