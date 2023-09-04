import React from 'react';
import Menu from './components/Menu';
import Slider from './components/Slider';
import Cards from './components/Cards';
import About from './components/About';
import Gallery from './components/Gallery';


function App() {
  return (
    <div>
        <div className="bg-white">
            <Menu />
        </div>
            <Slider />
        <div className="bg-light-beige lg:pt-[120px] lg:flex lg:flex-col lg:place-items-center">
            <div className="lg:w-[1040px]">
                <h1 className="text-xl lg:text-xs text-green pt-5 ml-5 lg:mb-4 lg:p">Oferta</h1>
                <h2 className="text-3xl lg:text-5xl font-montserrat font-medium mt-5 mx-5">Działamy <span className="italic font-inter font-medium">kompleksowo</span></h2>
                <p className="m-5 lg:mb-24 text-sm lg:text-base lg:w-[700px] lg:mt-8">Oferujemy kompletną obsługę inwestycji terenów zielonych. Projektujemy nowoczesne ogrody przydomowe oraz rezydencjonalne. Stworzymy dla Ciebie projekt, zwizualizujemy go i wcielimy w życie, a na każdym etapie posłużymy radą i wieloletnim doświadczeniem.</p>
            </div>   
            <Cards />
            <About />
            <Gallery />
        </div>
    </div>

    )
}
    
export default App;
