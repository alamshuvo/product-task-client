import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, Link } from "@nextui-org/react";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  

    return (
        <div className=' text-[#fff]'>
            <Navbar className='bg-primary rounded-lg' onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand>
                       
                    <div className='w-[120px]'>
                    <img className='w-[50%]' src="https://i.ibb.co/JBNpKGj/31530356-bird-2.jpg" alt="" />
                    </div>
                    </NavbarBrand>
                </NavbarContent>

                {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Features
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            Customers
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Integrations
                        </Link>
                    </NavbarItem>
                </NavbarContent> */}
                <NavbarContent  justify="end"x>
                <NavbarItem>
                    <Link className='text-[#fff]' href="/">Home</Link>
                    </NavbarItem>
                    <NavbarItem className="hidden lg:flex x">

                        <Link  className='text-[#fff]' href="login">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                    <Link  className='text-[#fff]' href="signup">Sign Up</Link>
                    </NavbarItem>
                    
                </NavbarContent>
                {/* <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu> */}
            </Navbar>
        </div>
    );
};

export default Nav;