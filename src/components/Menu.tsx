import React, { useState } from 'react';
import menuIcon from "../Icons/bars-solid (1).svg";
import menuArrow from "../Icons/IconMenu.png";
import iconSearch from "../Icons/IconSearch.png"
import logo from '../image/giarddesign.png';

function Menu(){

    const [elementVisible, setElementVisible] = useState(false);

    const visible=()=>{
        setElementVisible(!elementVisible)
        }
    
return(
    <header>
        <div className="flex flex-row justify-between">
        <img className="m-3 w-28 h-5 lg:ml-20 lg:mt-5 lg:mb-5" src={logo} alt="logo"/>
            <img className="m-3 w-5 h-5 lg:hidden" src={menuIcon} alt="menu"></img>
            <ul className="hidden lg:flex lg:text-sm lg:mr-14 xl:mr-20 lg:mt-5 lg:mb-5 lg:h-6 space-x-8 cursor-pointer">
                <li className=" flex flex-row  place-content-center text-sm text-black group relative">Oferta<img className="w-3 h-3 mt-1 ml-1 " src={menuArrow} alt="strzałka" />
                    <ol className="absolute  hidden group-hover:block pt-10 z-10">
                        <li className="bg-white hover:bg-light-beige py-2 px-4 border-2 border-light-beige">Projekty</li>
                        <li className="bg-white hover:bg-light-beige py-2 px-4 block border-2 border-light-beige">Wizualizacje</li>
                        <li className="bg-white hover:bg-light-beige py-2 px-4 block border-2 border-light-beige">Realizacje</li>
                    </ol>
                </li>
                <li className="text-sm text-black">O firmie</li>
                <li className="text-sm text-black">Realizacje</li>
                <li className="text-sm text-black">Kontakt</li>
                {elementVisible ? (
                <li className=" -mt-[4px]" id="input">
                <input defaultValue="Szukaj..." className="border-black border-2 h-8 pl-1 duration-500 ease-out transition-all"></input>
                <button type="button" id="closeButton" className=" ml-3 text-black text-base">X</button></li>) : null}
                <li className="w-5 h-5" onClick={visible}><img id="search" src={iconSearch} alt="lupa"></img></li>
            </ul>
        </div>
    </header>
)
}

export default Menu;

