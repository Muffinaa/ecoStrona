import ProductCard from '@/components/ProductCard'
import React from 'react'
import { Product } from '@/components/ProductCard'
import { getProducts } from '@/api/prodcuts'



async function Products() {

    const products = await getProducts()

    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-productsGrid p-2 place-items-center gap-2">
                {products.map((product: Product) => {
                    return <ProductCard key={product.id} {...product} />
                })}
            </div>
        </div>
    )
}

export default Products