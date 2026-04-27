
export interface Feature {
    id: string;
    name: string;
    priority: string;
}


export interface Category {
    id: string;
    name: string;
    slug: string;
    thumbnail: string;
}


export interface Brand {
    id: string;
    name: string;
    slug: string;
    thumbnail: string;
}


export interface ProductCard {
    id: string;
    slug: string;
    name: string;
    category: string;
    thumbnail: string;
    price?: string;
    variants: any[];
}


export interface ProductData {
    id: string;
    slug: string;
    name: string;
    category: string;
    brand: string;
    description?: string;
    thumbnail: string;
    price: string;
}


export type Variant = {
    id: string
    sku: string
    price: string
    discount_price: string
    is_active: boolean
    stock: number
    color: string
    size: string
    storage: string
}

