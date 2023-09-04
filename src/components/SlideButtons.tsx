 import btnLeft from "../Icons/Frame 2311.png";
 import btnRight from "../Icons/Frame 2310.png";

function SlideButtons(){
    return(
        <div className="absolute bottom-[20px] right-1/2 translate-x-1/2  lg:-bottom-1 lg:right-[94px]">
            <button type="button" id="btnLeft" className="w-11 h-11 bg-light-beige float-left -mr-1 lg:w-24 lg:h-24 "><img className="w-12 h-12 lg:ml-5" src={btnLeft} alt="arrow left"/>
            </button> 
            <button type="button" id="btnRight" className=" w-11 h-11 bg-light-beige float-left lg:w-24 lg:h-24"><img className="w-12 h-12 lg:ml-5" src={btnRight} alt="arow right" /></button>
        </div>
    )
}

export default SlideButtons;