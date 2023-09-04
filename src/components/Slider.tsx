import SlideButtons from "./SlideButtons";
import vectorDown from "../Icons/VectorDown.png";
import garden from "../image/Garden.png";

function Slider() {
    return (
    <section  id="slide-container" className=" bg-beige lg:flex lg:flex-row overflow-hidden items-center relative">
        <div className="h-[calc(100vh-44px)] lg:min-h-[737px]">
        <div>
            <div className="absolute flex flex-col items-center lg:flex-row  top-5 lg:top-0 xl:pt-0 h-full">
            <div className=" h-min text-center lg:text-start lg:mr-8 xl:mr-16">
                <div className="flex flex-col place-content-center">
                    <h1 className="flex font-montserrat font-medium text-2xl pt-5 mb-10 lg:text-6xl lg:ml-20 mx-auto lg:mb-11 xl:w-[560px] lg:leading-[70px]">Nowoczesna aranżacja Twojego ogrodu</h1>
                    <p className="text-sm mt-0 mx-5 lg:text-base lg:ml-20 lg:mb-2.5 lg:mt-3 lg:w-[490px]">Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.</p>
                </div>
                <div className="flex flex-col mx-auto place-items-center lg:place-items-start lg:flex-row ">
                    <button type="button" className="m-6 w-52 h-12 bg-green rounded-full text-base px-3 pt-1.5 pb-2 text-light-beige lg:mt-16 lg:ml-20">Skontaktuj się z nami</button>
                    <button type="button" className="flex flex-row mb-5  w-64 h-12 border border-green rounded-full text-base place-content-center text-green pt-3 pb-3.5 lg:mt-16 lg:ml-4">Zobacz nasze realizacje<img className="w-4 h-4 text-green pl-1 mt-1"src={vectorDown} alt="vector" />
                    </button>
                </div>
            </div>
                <div className="flex flex-col mx-auto place-items-center lg:place-items-end z-1 lg:h-full">
                <img  id="imgMove" className="w-full mb-3 bg-beige place-items-center md:w-screen lg:mb-0 lg:min-w-[600px] xl:ml-[35px] xl:min-w-full
                    z-1 duration-500 ease-out transition-all lg:h-full overflow-hidden" src={garden} alt="ogród" />
                </div>
            </div>
        </div>
    </div>
        <SlideButtons />
        <div id="slideDiv" className="hidden absolute mt-[350px] duration-500 ease-out transition-all">
            <p className="text-2xl mx-10 lg:w-[490px]">Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.</p>
        </div>
    </section>
    );
}

export default Slider;