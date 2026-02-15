"use client";

import React, { useEffect, useState} from 'react';
import { productSchema } from '@/lib/validations/admin_validations';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldGroup, FieldSet } from '@/components/ui/field';
import CustomFormField from '@/components/ui/custom-form-field';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CustomButton from '@/components/ui/custom-button';
import { Eye } from 'lucide-react';
import { ApiRequests } from '@/lib/requests/api_requests';
import { Brand, Category, Feature } from '@/lib/models/products';
import { SelectItem } from '@/components/ui/select';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import Image from 'next/image';


const NewProduct = () => {

  const {data:session} = useSession();
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [featuresList, setFeaturesList] = useState<Feature[]>([]);

  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      category: "",
      brand: "",
      description: "",
      features: "",
      tags: "",

      price: "",
      discountprice: "",
      stock: "",
      size: "",
      color: "",
      sku: "",
    }
  });
  const { isSubmitting, isValid} = form.formState;

  useEffect(() => {
    const fetchCategories = async() => {
      try{
        const [categories, brands, featuresList] = await Promise.all([
          ApiRequests.get("superadmin/products/category-children/"),
          ApiRequests.get("products/brands/"),
          ApiRequests.get("products/features/"),
        ]);
        
        setCategories(categories);
        setBrands(brands);
        setFeaturesList(featuresList);
      } catch(error){
        toast.error("Error fetching data: " + error);
      }
    }
    fetchCategories();
  }, []);


  const thumbnailSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setThumbnail(file);

    const previewURL = URL.createObjectURL(file);
    setThumbnailPreview(previewURL);

   
  }

  useEffect(() => {
    return () => {
      if (thumbnailPreview) {
        URL.revokeObjectURL(thumbnailPreview);
      }
    };
  }, [thumbnailPreview]);


  const onSubmit = async (values: z.infer<typeof productSchema>) => {
    setIsLoading(true);
    try{
      if(!session?.sessionToken) return;

      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("category", values.category);
      formData.append("brand", values.brand);
      formData.append("thumbnail", thumbnail);

      // variants 
      formData.append("variant.price", values.price);
      formData.append("variant.discount_price", values.discountprice ?? "");
      formData.append("variant.size", values.size ?? "");
      formData.append("variant.color", values.color ?? "");
      formData.append("variant.stock", values.stock ?? "");
      formData.append("variant.sku", values.sku ?? "");
      

      if (values.description){
        formData.append("description", values.description);
      }

      if (values.features){
        formData.append("features", values.features);
      }
      
      const res = await ApiRequests.post("superadmin/products/products/", formData, session?.sessionToken);
      console.log(res);
      if(res.success){
        toast.success(res.message);
        router.push(`/admin/products/${res?.data}/`);
      } else {
        toast.error("An error occured");
      }

    } catch(error){
      toast.error("A network error has occurred.");
    } finally{
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col py-8">
      <h1 className="pb-5 font-bold text-xl text-qprimary">Add Product</h1>
    
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="md:col-span-8">
          

            <FieldSet>
              <FieldGroup className="gap-4">

                <Card>
                  <CardContent className="flex flex-col space-y-5">
                    <CustomFormField
                      fieldType="input"
                      name="name"
                      label="Name"
                      control={form.control}
                      placeholder="e.g Airmax shoes"
                    />

                    <CustomFormField
                      fieldType="textarea"
                      name="description"
                      label="Description"
                      control={form.control}
                      placeholder="Enter product description here ..."
                    />
                  </CardContent>
                </Card>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>More detials</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <CustomFormField
                            fieldType="input"
                            name="price"
                            label="Price(KSh)"
                            control={form.control}
                            placeholder="e.g 8500"
                          />
                        </div>
                        <div>
                          <CustomFormField
                            fieldType="input"
                            name="discountprice"
                            label="Discount Price (optional)"
                            control={form.control}
                            placeholder="e.g 6850"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <CustomFormField
                            fieldType="input"
                            name="size"
                            label="Size"
                            control={form.control}
                            placeholder="e.g SM"
                          />
                        </div>
                        <div>
                          <CustomFormField
                            fieldType="input"
                            inputType="text"
                            name="color"
                            label="Color"
                            control={form.control}
                            placeholder="e.g red"
                          />
                        </div>
                        <div>
                          <CustomFormField
                            fieldType="input"
                            inputType="text"
                            name="stock"
                            label="Stock Quantity"
                            control={form.control}
                            placeholder="e.g 20"
                          />
                        </div>
                      </div>
                      <div>
                        <CustomFormField
                          fieldType="input"
                          inputType="text"
                          name="sku"
                          label="SKU"
                          control={form.control}
                          placeholder="e.g nike sneakers for men"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Thumbnail</CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col space-y-4">
                        {/* Preview */}
                        {thumbnailPreview && (
                          <div className="relative w-32 h-32 border rounded-md overflow-hidden">
                            <Image
                              src={thumbnailPreview}
                              alt="Thumbnail preview"
                              fill
                              className="object-cover"
                              sizes="128px"
                            />
                          </div>
                        )}

                        <Input
                          type="file"
                          accept="image/*"
                          onChange={thumbnailSelect}
                        />
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Gallery (optional)</CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col space-y-4">
                        
                        

                        {/* <Input
                          type="file"
                          accept="image/*"
                          onChange={thumbnailSelect}
                        /> */}
                      </CardContent>
                    </Card>
                  </div>
                </div>
                

                
                
              </FieldGroup>
            </FieldSet>
        </div>
        <div className="md:col-span-4 space-y-5">
          <Card>
            <CardHeader>
              <CardTitle>Publish</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4">

              <div className="flex space-x-1 text-sm items-center"><Eye size={18} /> Visibility: <span className="font-bold pl-3">Public</span></div>

              <CustomButton 
                label="Publish"
                loadingText="Processing ..."
                loading={isLoading}
                
              />
            </CardContent>
          </Card>


          <Card>
            <CardHeader>
              <CardTitle>Category</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4">

              <CustomFormField
                fieldType="select"
                label="Choose category"
                name="category"
                control={form.control}
              >
                
                {categories.map((category: any) => (
                  <SelectItem value={category.id} key={category.id}>{category.name}</SelectItem>
                ))}
              </CustomFormField>

              
            </CardContent>
          </Card>



          <Card>
            <CardHeader>
              <CardTitle>Brand</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4">

              <CustomFormField
                fieldType="select"
                name="brand"
                label="Choose brand"
                control={form.control}
              >
                {brands.map((brand: any) => (
                  <SelectItem value={brand.id} key={brand.id}>{brand.name}</SelectItem>
                ))}
              </CustomFormField>


            </CardContent>
          </Card>



          <Card>
            <CardHeader>
              <CardTitle>Home Feature</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4">

              <CustomFormField
                fieldType="select"
                name="features"
                label="Choose home page feature"
                control={form.control}
              >
                {featuresList.map((feature: Feature) => (
                  <SelectItem value={feature.id} key={feature.id}>{feature.name}</SelectItem>
                ))}
              </CustomFormField>


            </CardContent>
          </Card>

          
        </div>
      </form>
    </div>
  )
}

export default NewProduct