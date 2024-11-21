/** @format */

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { CartContext } from "@/context/CartContext";

import { Product } from "@/types/product";
import { createLazyFileRoute } from "@tanstack/react-router";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const {} = useContext(CartContext);

  const [products, setProducts] = useState<Product[] | null | undefined>(null);
  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get("https://dummyjson.com/products");
      if (res.status == 200) {
        setProducts(res.data.products as Product[]);
      }
    };
    getProduct();
  }, []);

  return (
    <section className='py-12 bg-white'>
      <div className='container grid md:grid-cols-3  sm:grid-cols-2 gap-4'>
        {products?.map((product, idx) => (
          <Card
            key={idx}
            className='border-2 border-teal-500 bg-teal-50 dark:bg-transparent'>
            <img
              src={product.thumbnail}
              className='aspect-video rounded-md object-contain mx-auto w-full'
            />
            <CardContent className='space-y-4'>
              <CardTitle>{product.title}</CardTitle>
              <CardDescription className='leading-relaxed'>
                {product.description}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant='outline' className='flex items-center gap-1'>
                <AiOutlineShoppingCart /> Add to cart
              </Button>
            </CardFooter>
          </Card>
        ))}
        <button className='border-2 border-black'>update</button>
      </div>
    </section>
  );
}
