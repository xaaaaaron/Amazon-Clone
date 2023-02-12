import React from 'react'
import Product from './Product';


const ProductFeed = ({products}) => {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
            {products?.map(({id, category, title, price, description, image}) => (
               <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                image={image}
                category={category}
                />
            ))}
        </div>
    )
}

export default ProductFeed
