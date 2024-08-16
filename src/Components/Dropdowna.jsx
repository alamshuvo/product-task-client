import React, { useState } from 'react';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

const Dropdowna = () => {
    const [keyterm,SetKeyterm]=useState("price")
    return (
        <div>
             <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          {
            keyterm === "price" ? "price" : (keyterm === "HightoLow" ? "High to Low" : "Low to High")
          }
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Action event example" 
        onAction={(key) => SetKeyterm(key)}
      >
        <DropdownItem key="HightoLow">High to Low</DropdownItem>
        <DropdownItem key="LowtoHigh"> Low to High</DropdownItem>
      </DropdownMenu>
    </Dropdown>
        </div>
    );
};

export default Dropdowna;