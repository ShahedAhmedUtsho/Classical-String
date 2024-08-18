import React from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle 
  } from "@/components/ui/navigation-menu"
import { ModeToggle } from '@/components/ModeToggle';
import { Link } from 'react-router-dom';
  
const Navbar = () => {
    return (
        <NavigationMenu className="">
  
  <NavigationMenuList>
  <NavigationMenuItem>
          <Link className={navigationMenuTriggerStyle()} to="/">
           
              Documentation
           
          </Link>
        </NavigationMenuItem>
  </NavigationMenuList>
  <ModeToggle />
</NavigationMenu>

    );
};

export default Navbar;