import vectorDown from "../Icons/VectorDown.png";

interface Props{
    title: string;
    description: string;
    image: string;
}

function Slide({title, description, image}: Props) {
    return(
        <div className="lg:min-h-[737px] lg:h-[calc(100vh-64px)]">
                <div className="h-full">
                    <div className="flex flex-col relative items-center lg:flex-row  top-5 lg:top-0 xl:pt-0 h-full">
                        <div className=" h-min text-center lg:text-start lg:mr-8 xl:mr-16">
                            <div className="flex flex-col place-content-center">
                                <h1 className="flex font-montserrat font-medium text-2xl pt-5 mb-10 lg:text-6xl lg:ml-20 mx-auto lg:mb-11 xl:w-[560px] lg:leading-[70px]">{title}</h1>
                                <p className="text-sm mt-0 mx-5 lg:text-base lg:ml-20 lg:mb-2.5 lg:mt-3 lg:w-[490px]">{description}</p>
                            </div>
                            <div className="flex flex-col mx-auto place-items-center lg:place-items-start lg:flex-row ">
                                <button type="button" className="m-6 w-52 h-12 bg-green rounded-full text-base px-3 pt-1.5 pb-2 text-light-beige lg:mt-16 lg:ml-20">Skontaktuj się z nami</button>
                                <button type="button" className="flex flex-row mb-5  w-64 h-12 border border-green rounded-full text-base place-content-center text-green pt-3 pb-3.5 lg:mt-16 lg:ml-4">Zobacz nasze realizacje<img className="w-4 h-4 text-green pl-1 mt-1"src={vectorDown} alt="vector" />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col mx-auto place-items-center lg:place-items-end z-1 lg:h-full relative">
                            <img id="imgMove" className="w-full bg-beige place-items-center md:w-screen lg:mb-0 lg:min-w-[400px] xl:ml-[35px] min-w-full
                            z-1 duration-500 ease-out transition-all lg:h-full overflow-hidden relative" src={image} alt="ogród" />
                        </div>   
                    </div>
                </div>
            </div> 
    )
}

export default Slide;