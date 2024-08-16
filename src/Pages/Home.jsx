import React from 'react';
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Paginationa from '../Components/pagination';
import Dropdowna from '../Components/Dropdowna';


const Home = () => {
    return (
        <div className='container mx-auto'>
           
            <div className='my-10'>
            <p className='text-2xl font-bold '>Short By</p>
            <Dropdowna></Dropdowna>
            </div>



           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4'>
           <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">Daily Mix</p>
                    <small className="text-default-500">12 Tracks</small>
                    <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://nextui.org/images/hero-card-complete.jpeg"
                        width={270}
                    />
                </CardBody>
            </Card>
           </div>
          <div className='flex justify-center items-center'>
          <Paginationa></Paginationa>
          </div>
        </div>
    );
};

export default Home;