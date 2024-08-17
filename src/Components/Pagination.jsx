import React, { useEffect, useState } from 'react';
import { Pagination, Button } from "@nextui-org/react";
import Products from './Products';

const Paginationa = ({pages,itemPerPage,setItemPerPage,products}) => {
    console.log(pages,products);
    const [currentPage, setCurrentPage] = useState(pages[0]);
    const [productsa,setProductsa]=useState(0)

    const handleValue=e=>{
        const val =parseInt(e.target.value);
        setItemPerPage(val)
        setCurrentPage(pages[0])
    }
console.log(products);
    // useEffect(
    //     ()=>{
    //         fetch(`http://localhost:5000/product?page=${currentPage}&size=${itemPerPage}`)
    //         .then(res=>res.json())
    //         .then(data=>setProductsa(data))
    //     }
    //     ,[currentPage,itemPerPage])
    //     console.log(products);
        
    return (
        <div>
            <Products products={productsa}></Products>
            <div className="flex flex-col gap-5">
                <p className="text-small text-default-500">Selected Page: {currentPage}</p>
                <Pagination
                    total={pages.length}
                    color="secondary"
                    page={currentPage}
                    onChange={setCurrentPage}
                />
                <div className="flex gap-2">
                    <Button
                        size="sm"
                        variant="flat"
                        color="secondary"
                        onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
                    >
                        Previous
                    </Button>
                    <Button
                        size="sm"
                        variant="flat"
                        color="secondary"
                        onPress={() => setCurrentPage((prev) => (prev < `${pages.length}` ? prev + 1 : prev))}
                    >
                        Next
                    </Button>
                </div>
            </div>
            <div className='border-2 my-3 w-[10%] flex justify-center items-center'>
              <select value={itemPerPage} onChange={handleValue} name="" id="">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="35">35</option>
                <option value="40">40</option>
              </select>
            </div>
        </div>
    );
};

export default Paginationa;