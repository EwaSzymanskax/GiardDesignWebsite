import React from 'react';
import Menu from './components/Menu';
import Slider from './components/Slider'
import logo from './image/giarddesign.png';

function App() {
  return (
    <div>
        <div className="bg-white">
            <header>
                <div className="flex flex-row justify-between">
                    <img className="m-3 w-28 h-5 lg:ml-20 lg:mt-5 lg:mb-5" src={logo} alt="logo"></img>
                    <Menu />
                </div>
            
            </header>
        </div>
        <Slider />
    </div>
    )
}
                /* <nav>
                    <img className="m-3 w-5 h-5 lg:hidden" src="Icons/bars-solid (1).svg" alt="menu"></img>
                    <ul className="hidden lg:flex lg:text-sm lg:mr-14 xl:mr-20 lg:mt-5 lg:mb-5 lg:h-6 space-x-8 cursor-pointer">
                        <li className=" flex flex-row  place-content-center text-sm text-black group relative">Oferta<img className="w-3 h-3 mt-1 ml-1 " src="Icons/IconMenu.png" alt="strzałka" />
                            <ol className="absolute  hidden group-hover:block pt-10 z-10">
                                <li className="bg-white hover:bg-light-beige py-2 px-4 border-2 border-light-beige">Projekty</li>
                                <li className="bg-white hover:bg-light-beige py-2 px-4 block border-2 border-light-beige">Wizualizacje</li>
                                <li className="bg-white hover:bg-light-beige py-2 px-4 block border-2 border-light-beige">Realizacje</li>
                            </ol>
                        <li className="text-sm text-black">O firmie</li>
                        <li className="text-sm text-black">Realizacje</li>
                        <li className="text-sm text-black">Kontakt</li>
                        <li className="hidden -mt-[4px]" id="input">
                        <input  value="Szukaj..." className="border-black border-2 h-8 pl-1 duration-500 ease-out transition-all"></input>
                        <button type="button" id="closeButton" className=" ml-3 text-black text-base">X</button></li>
                        <li className="w-5 h-5"><img id="search" src="Icons/IconSearch.png" alt="lupa"></img></li>
                    </ul>
                </nav> */
            /* </div>
          </header>
        </div>
        <section  x-data="imageSlider" id="slide-container" className=" bg-beige lg:flex lg:flex-row overflow-hidden items-center relative">
         <div className="h-[calc(100vh-44px)] lg:min-h-[737px]">
            <template x-for="(slide, index) in slides">
                <div x-show="currentIndex == index + 1" x-transition:enter="transition transform duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition transform duration-300" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" className="absolute flex flex-col items-center lg:flex-row  top-5 lg:top-0 xl:pt-0 h-full">
                <div className=" h-min text-center lg:text-start lg:mr-8 xl:mr-16">
                    <div className="flex flex-col place-content-center">
                        <h1 className="flex font-montserrat font-medium text-2xl pt-5 mb-10 lg:text-6xl lg:ml-20 mx-auto lg:mb-11 xl:w-[560px] lg:leading-[70px]" x-text="slide.title"></h1>
                        <p className="text-sm mt-0 mx-5 lg:text-base lg:ml-20 lg:mb-2.5 lg:mt-3 lg:w-[490px]" x-text="slide.description"></p>
                    </div>
                    <div className="flex flex-col mx-auto place-items-center lg:place-items-start lg:flex-row ">
                        <button type="button" className="m-6 w-52 h-12 bg-green rounded-full text-base px-3 pt-1.5 pb-2 text-light-beige lg:mt-16 lg:ml-20">Skontaktuj się z nami</button>
                        <button type="button" className="flex flex-row mb-5  w-64 h-12 border border-green rounded-full text-base place-content-center text-green pt-3 pb-3.5 lg:mt-16 lg:ml-4">Zobacz nasze realizacje<img className="w-4 h-4 text-green pl-1 mt-1"src="Icons/VectorDown.png" alt="vector">
                        </button>
                    </div>
                </div>
                    <div className="flex flex-col mx-auto place-items-center lg:place-items-end z-1 lg:h-full">
                    <img  id="imgMove" className="w-full mb-3 bg-beige place-items-center md:w-screen lg:mb-0 lg:min-w-[600px] xl:ml-[35px] xl:min-w-full
                     z-1 duration-500 ease-out transition-all lg:h-full overflow-hidden" :src="slide.src" alt="ogród">
                    </div>
                </div>
                </div>
            </template>
        </div>
            <div className="absolute bottom-[20px] right-1/2 translate-x-1/2  lg:-bottom-1 lg:right-[94px]">
                <button type="button" @click="previous()" id="btnLeft" className="w-11 h-11 bg-light-beige float-left -mr-1 lg:w-24 lg:h-24 "><img className="w-12 h-12 lg:ml-5" src="Icons/Frame 2311.png" alt="arrow left"></button> 
                <button type="button" @click="forward()" id="btnRight" className=" w-11 h-11 bg-light-beige float-left lg:w-24 lg:h-24"><img className="w-12 h-12 lg:ml-5"src="Icons/Frame 2310.png" alt="arow right"></button>
            </div>
            <div id="slideDiv" className="hidden absolute mt-[350px] duration-500 ease-out transition-all">
                <p className="text-2xl mx-10 lg:w-[490px]">Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.</p>
            </div> */
export default App;
