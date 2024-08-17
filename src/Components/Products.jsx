import React from 'react';
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
const Products = ({ products }) => {
    console.log(products, "eta amr dorkar");
    return (
        <div>
            <p>{products.length}</p>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-4'>
                {
                    products.length > 0 && products?.map(product => <Card key={product._id} className="py-4">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <p className="text-tiny uppercase font-bold">{product.
                                productName}</p>
                            <small className=" text-primary font-bold">{product.price}tk</small>
                            <h4 className="font-bold text-large">Category : {product.
                                category}</h4>
                            <small>Creation Date Time {product.
                                creationDateTime}</small>
                            <small>Ratings : {product.
                                ratings}</small>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2 w-[80%]">
                            <Image
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src={
                                    product.productImage}
                                width={300}
                            />
                        </CardBody>
                    </Card>)
                }
            </div>
        </div>
    );
};

export default Products;