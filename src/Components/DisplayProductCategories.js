import React from 'react';

const DisplayProductCategories = () => {
  return (
    <nav class="navbar navbar-light navbar-expand-lg" style={{backgroundColor :'#24a3b5'}}>
        <button class="navbar-toggler border" type="button" data-bs-toggle="collapse" data-bs-target="#navbar_main">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center pl-3" style={{backgroundColor: "#24a3b5", color : 'white' , hover : 'white', }} id="navbar_main">
            <ul class="navbar-nav" style={{marginLeft:"10px"}}>
                <li class="nav-item">
                    <a class="nav-link ps-0" href="#"> Categories </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">
                        <i class="fa-solid fa-plug"></i> Adapters
                    </a>
                    <ul class="dropdown-menu"  style={{backgroundColor: "#24a3b5", color : 'white' , hover : 'white', }}>
                        <li> <a class="dropdown-item" href="#">DELL Laptop Adapter</a> </li>
                        <li> <a class="dropdown-item" href="#">HP Laptop Adapter</a> </li>
                        <li> <a class="dropdown-item" href="#">Lenovo Laptop Adapter</a> </li>
                        <li> <a class="dropdown-item" href="#">Apple Laptop Adapter</a> </li>
                        <li> <a class="dropdown-item" href="#">Asus Laptop Adapter</a> </li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">
                        <i class="fa-solid fa-battery-full"></i> Laptop Batteries
                    </a>
                    <ul class="dropdown-menu"  style={{backgroundColor: "#24a3b5", color : 'white' , hover : 'white', }}>
                        <li> <a class="dropdown-item" href="#">DELL Laptop Batteries</a> </li>
                        <li> <a class="dropdown-item" href="#">HP Laptop Batteries</a> </li>
                        <li> <a class="dropdown-item" href="#">Lenovo Laptop Batteries</a> </li>
                        <li> <a class="dropdown-item" href="#">Apple Laptop Batteries</a> </li>
                        <li> <a class="dropdown-item" href="#">Asus Laptop Batteries</a> </li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">
                        <i class="fa-solid fa-keyboard"></i> Keyboards
                    </a>
                    <ul class="dropdown-menu"  style={{backgroundColor: "#24a3b5", color : 'white' , hover : 'white', }}>
                        <li> <a class="dropdown-item" href="#">DELL Laptop Keyboards</a> </li>
                        <li> <a class="dropdown-item" href="#">HP Laptop Keyboards</a> </li>
                        <li> <a class="dropdown-item" href="#">Lenovo Laptop Keyboards</a> </li>
                        <li> <a class="dropdown-item" href="#">Apple Laptop Keyboards</a> </li>
                        <li> <a class="dropdown-item" href="#">Asus Laptop Keyboards</a> </li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">
                        <i class="fa-solid fa-display"></i> Screens
                    </a>
                    <ul class="dropdown-menu"  style={{backgroundColor: "#24a3b5", color : 'white' , hover : 'white', }}>
                        <li> <a class="dropdown-item" href="#">DELL Laptop Screens</a> </li>
                        <li> <a class="dropdown-item" href="#">HP Laptop Screens</a> </li>
                        <li> <a class="dropdown-item" href="#">Lenovo Laptop Screens</a> </li>
                        <li> <a class="dropdown-item" href="#">Apple Laptop Screens</a> </li>
                        <li> <a class="dropdown-item" href="#">Asus Laptop Screens</a> </li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">
                        <i class="fa-solid fa-laptop"></i> Laptop parts
                    </a>
                    <ul class="dropdown-menu" style={{backgroundColor: "#24a3b5", color : 'white' , hover : 'white', }}>
                        <li> <a class="dropdown-item" href="#">SSD/HDD</a> </li>
                        <li> <a class="dropdown-item" href="#">Memory</a> </li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">
                        Laptop Case
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">
                        <i class="fa-solid fa-bolt"></i> Lightning Deals
                    </a>
                </li>
            </ul>
        </div> 
    </nav> 
  );
}

export default DisplayProductCategories;