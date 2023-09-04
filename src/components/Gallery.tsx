import Photo3 from "../image/projects/Photo (3).png";
import Photo4 from "../image/projects/Photo (4).png";
import Photo5 from "../image/projects/Photo (5).png";
import Photo6 from "../image/projects/Photo (6).png";
import Photo7 from "../image/projects/Photo (7).png";
import Photo8 from "../image/projects/Photo (8).png";
import Photo9 from "../image/projects/Photo (9).png";
import Photo10 from "../image/projects/Photo (10).png";
import Photo11 from "../image/projects/Photo (11).png";
import vectorBlack from "../Icons/VectorBlack.png";


function Gallery(){
    return(
        <div className="pt-10 bg-beige lg:pt-[120px]">
            <header>
                <h1 className="text-xl mx-5 text-green lg:text-xs lg:ml-52">Realizacje</h1>
                <h2 className=" font-montserrat font-medium text-3xl mt-5 mx-5 mb-24 lg:text-5xl lg:ml-52">Nasze <span className="font-inter italic">projekty</span></h2>
            </header>
            <div>
                <div className="grid z-0 gallery relative">
                    <a href="image/projects/Photo (3).png" className="grid-item mb-3" data-pswp-width="451" data-pswp-height="600"><img src={Photo3} alt="schody"/></a>
                    <a href="image/projects/Photo (4).png" className="grid-item mb-3" data-pswp-width="452" data-pswp-height="338"><img src={Photo4}  alt="basen"/></a>
                    <a href="image/projects/Photo (5).png" className="grid-item mb-3" data-pswp-width="451" data-pswp-height="451"><img src={Photo5}  alt="ogród"/></a>
                    <a href="image/projects/Photo (7).png" className="grid-item mb-3" data-pswp-width="452" data-pswp-height="452"><img src={Photo7} alt="ryba"/></a>
                    <a href="image/projects/Photo (8).png" className="grid-item mb-3" data-pswp-width="451" data-pswp-height="600"><img src={Photo8}  alt="droga/"/></a>
                    <a href="image/projects/Photo (6).png" className="grid-item mb-3" data-pswp-width="451" data-pswp-height="451"><img src={Photo6} alt="drzewo"/></a>
                    <a href="image/projects/Photo (10).png" className="grid-item mb-3" data-pswp-width="452" data-pswp-height="600"><img src={Photo10}  alt="taras"/></a>
                    <a href="image/projects/Photo (9).png" className="grid-item mb-3" data-pswp-width="451" data-pswp-height="338"><img src={Photo9} alt="taras"/></a>
                    <a href="image/projects/Photo (11).png" className="grid-item mb-3" data-pswp-width="451" data-pswp-height="338"><img src={Photo11} alt="dach"/></a>
                    <div id="blurDiv" className="pointer-events-none bg-gradient-to-t from-beige absolute z-10 w-full h-full bottom-0" ></div>
                </div>
                <div className="flex flex-column mx-auto place-items-center">
                    <button type="button" id="addButton" className="flex flex-row mx-auto mt-16 mb-6 w-32 h-12 border border-black rounded-full text-base place-content-center pt-3">Rozwiń <img className="w-4 h-4 pl-1 mt-1" src={vectorBlack} alt="strzałka"/></button>
                </div>
            </div>
        </div>
    )

}

export default Gallery;