import * as z from "zod";

export const categorySchema = z.object({
    name: z.string({message: "Category name is required."}),
    parent: z.string().optional(),
    thumbnail: z.instanceof(File).refine(file => file.size > 0, "Image/ logo is required.")
});

export const brandSchema = z.object({
    name: z.string({ message: "Brand name is required." }),
    image: z.instanceof(File).refine(file => file.size > 0, "Image/ logo is required.")
});



export const variantSchema = z.object({
    price: z.string({ message: "Price is required." }),
    discountprice: z.string().optional(),
    size: z.string().optional(),
    color: z.string().optional(),
    stock: z.string().optional(),
    sku: z.string().optional(),
});

export const productSchema = z.object({
    name: z.string({ message: "Product name is required"}),
    category: z.string({ message: "Category is required."}),
    brand: z.string({ message: "Brand is required."}),
    description: z.string().optional(),
    features: z.string().optional(),
    tags: z.string().optional(),
    
    // variant
    price: z.string().optional(),
    discountprice: z.string().optional(),
    size: z.string().optional(),
    color: z.string().optional(),
    stock: z.string().optional(),
    sku: z.string().optional(),
});





