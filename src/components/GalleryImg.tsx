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
import React, { useState } from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery'






//   function getItemElement(i: number) {
//     const elem = document.createElement('div');
//     elem.classList.add("grid-item");
//     blurDiv.style.display = 'none';
//     addButton.style.display = 'none';

//     const img= document.createElement('img');
//     img.src= imgArr[i]
//     elem.appendChild(img);
 
//     return elem;
//   }



const GalleryImg =(): JSX.Element =>{
    const [imgShow, setImgShow]= useState(false)

    const buttonHandler=()=>{
    setImgShow(true);
    }

    


    return(
        <div className="pt-10 bg-beige lg:pt-[120px] w-full">
            <header>
                <h1 className="text-xl mx-5 text-green lg:text-xs lg:ml-52">Realizacje</h1>
                <h2 className=" font-montserrat font-medium text-3xl mt-5 mx-5 mb-24 lg:text-5xl lg:ml-52">Nasze <span className="font-inter italic">projekty</span></h2>
            </header>
            <div>
                <div className="z-0 gallery relative gap-x-3">
                <Gallery>
                <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                    <Masonry className="columns-3 space-x-3 justify-around">
                            <Item
                              original={Photo3}
                              thumbnail={Photo3}
                              width="452"
                              height="338">
                            {({ ref, open }: any) => (
                             <img ref={ref} onClick={open} src={Photo3} className="mb-3" alt="schody"/>)}
                            </Item>
                            <Item
                              original={Photo4}
                              thumbnail={Photo4}
                              width="452"
                              height="338">
                            {({ ref, open }: any) => (
                             <img ref={ref} onClick={open} src={Photo4} className="mb-3"  alt="basen"/>)}
                            </Item>
                            <Item
                              original={Photo5}
                              thumbnail={Photo5}
                              width="451"
                              height="451">
                            {({ ref, open }: any) => (
                             <img ref={ref} onClick={open} src={Photo5} className="mb-3"  alt="ogród"/>)}
                            </Item>
                            <Item
                              original={Photo6}
                              thumbnail={Photo6}
                              width="452"
                              height="452">
                            {({ ref, open }: any) => (
                             <img ref={ref} onClick={open} src={Photo6} className="mb-3" alt="ryba"/>)}
                            </Item>
                            <Item
                              original={Photo7}
                              thumbnail={Photo7}
                              width="451"
                              height="600">
                            {({ ref, open }: any) => (
                             <img ref={ref} onClick={open} src={Photo7} className="mb-3"  alt="droga"/>)}
                            </Item>
                            <Item
                              original={Photo8}
                              thumbnail={Photo8}
                              width="451"
                              height="451">
                            {({ ref, open }: any) => (
                             <img ref={ref} onClick={open} src={Photo8}  className="mb-3" alt="drzewo"/>)}
                            </Item>
                            <Item
                              original={Photo9}
                              thumbnail={Photo9}
                              width="452"
                              height="600">
                            {({ ref, open }: any) => (
                             <img ref={ref} onClick={open} src={Photo9} className="mb-3"  alt="taras"/>)}
                            </Item>
                            <Item
                              original={Photo10}
                              thumbnail={Photo10}
                              width="451"
                              height="338">
                            {({ ref, open }: any) => (
                             <img ref={ref} onClick={open} src={Photo10} className="mb-3"  alt="basen"/>)}
                            </Item>
                            <Item
                              original={Photo11}
                              thumbnail={Photo11}
                              width="451"
                              height="338">
                            {({ ref, open }: any) => (
                             <img ref={ref} onClick={open} src={Photo11} className="mb-3"  alt="dach"/>)}
                            </Item>

                            {imgShow &&
                             <Item
                                original={Photo8}
                                thumbnail={Photo8}
                                width="451"
                                height="451">
                                {({ ref, open }: any) => (
                                <img ref={ref} onClick={open} src={Photo8} className="mb-3"  alt="drzewo"/>)}
                                </Item>}
                                
                            {imgShow &&
                             <Item
                                original={Photo10}
                                thumbnail={Photo10}
                                width="451"
                                height="338">
                                {({ ref, open }: any) => (
                                <img ref={ref} onClick={open} src={Photo10} className="mb-3"  alt="taras"/>)}
                                </Item>}
                            
                            {imgShow &&
                             <Item
                                original={Photo3}
                                thumbnail={Photo3}
                                width="451"
                                height="600">
                                {({ ref, open }: any) => (
                                <img ref={ref} onClick={open} src={Photo3} className="mb-3"  alt="schody"/>)}
                                </Item>}
                            {!imgShow &&
                            <div id="blurDiv" className="pointer-events-none bg-gradient-to-t from-beige absolute z-10 w-full h-full bottom-0" ></div>}

                        {/* <a href="image/projects/Photo (4).png" className="grid-item mb-3" data-pswp-width="452" data-pswp-height="338"><img src={Photo4}  alt="basen"/></a>
                        <a href="image/projects/Photo (5).png" className="grid-item mb-3" data-pswp-width="451" data-pswp-height="451"><img src={Photo5}  alt="ogród"/></a>
                        <a href="image/projects/Photo (6).png" className="grid-item mb-3" data-pswp-width="452" data-pswp-height="452"><img src={Photo6} alt="ryba"/></a>
                        <a href="image/projects/Photo (7).png" className="grid-item mb-3" data-pswp-width="451" data-pswp-height="600"><img src={Photo7}  alt="droga/"/></a>
                        <a href="image/projects/Photo (8).png" className="grid-item mb-3" data-pswp-width="451" data-pswp-height="451"><img src={Photo8} alt="drzewo"/></a>
                        <a href="image/projects/Photo (9).png" className="grid-item mb-3" data-pswp-width="452" data-pswp-height="600"><img src={Photo9}  alt="taras"/></a>
                        <a href="image/projects/Photo (10).png" className="grid-item mb-3" data-pswp-width="451" data-pswp-height="338"><img src={Photo10} alt="taras"/></a>
                        <a href="image/projects/Photo (11).png" className="grid-item mb-3" data-pswp-width="451" data-pswp-height="338"><img src={Photo11} alt="dach"/></a>

                        {imgShow &&
                           <a href="image/projects/Photo (8).png" className="grid-item mb-3" data-pswp-width="451" data-pswp-height="451"><img src={Photo8} alt="drzewo"/></a>}
                        {imgShow &&
                            <a href="image/projects/Photo (10).png" className="grid-item mb-3" data-pswp-width="451" data-pswp-height="338"><img src={Photo10} alt="taras"/></a>}
                        {imgShow &&
                            <a href="image/projects/Photo (3).png" className="grid-item mb-3" data-pswp-width="451" data-pswp-height="600"><img src={Photo3} alt="schody"/></a>}
                        {!imgShow &&
                            <div id="blurDiv" className="pointer-events-none bg-gradient-to-t from-beige absolute z-10 w-full h-full bottom-0" ></div>} */}
                
                    </Masonry>
                </ResponsiveMasonry>
                </Gallery>
                </div>
                {!imgShow && <div className="flex flex-column mx-auto place-items-center">
                    <button type="button" id="addButton" className="flex flex-row mx-auto mt-16 mb-6 w-32 h-12 border border-black rounded-full text-base place-content-center pt-3" onClick={buttonHandler} >Rozwiń <img className="w-4 h-4 pl-1 mt-1" src={vectorBlack} alt="strzałka"/></button>
                </div>}
            </div>
        </div>
    )

}

export default GalleryImg;