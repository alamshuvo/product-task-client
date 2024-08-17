import React, { useEffect, useState } from 'react';

import Paginationa from '../Components/pagination';
import Dropdowna from '../Components/Dropdowna';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const [itemPerPage,setItemPerPage]=useState(10);
    
    const totalCount=useLoaderData()
    // const itemPerPage=10;
    const numberOfPages=Math.ceil(totalCount.total/itemPerPage)
    const pages=[...Array(numberOfPages).keys()]
    // useEffect(
    //     ()=>{
    //         fetch(`http://localhost:5000/product?page=${}`)
    //         .then(res=>res.json())
    //         .then(data=>setProducts(data))
    //     }
    //     ,[])

    console.log(totalCount,numberOfPages,pages);
    return (
        <div className='container mx-auto'>
           
            <div className='my-10'>
            <p className='text-2xl font-bold '>Short By</p>
            <Dropdowna></Dropdowna>
            </div>



          <div className='flex justify-center items-center my-5'>
          <Paginationa pages={pages} itemPerPage={itemPerPage} setItemPerPage={setItemPerPage}></Paginationa>
          </div>
        </div>
    );
};

export default Home;