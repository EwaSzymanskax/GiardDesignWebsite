import React from 'react';
import Menu from './components/Menu';
import SliderAbout from './components/SliderAbout';
import Cards from './components/Cards';
import About from './components/About';
import Gallery from './components/GalleryImg';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import Text from './components/Text';


function App() {
  return (
    <div>
        <div className="bg-white">
            <Menu />
        </div>
            <SliderAbout />
        <div className="bg-light-beige lg:pt-[120px] lg:flex lg:flex-col lg:place-items-center">
            <Text titleFirst='Działamy' titleSecond='kompleksowo' description="Oferujemy kompletną obsługę inwestycji terenów zielonych. Projektujemy nowoczesne ogrody przydomowe oraz rezydencjonalne. Stworzymy dla Ciebie projekt, zwizualizujemy go i wcielimy w życie, a na każdym etapie posłużymy radą i wieloletnim doświadczeniem."/>  
            <Cards />
            <About />
            <Gallery />
            <SocialMedia />
            <Footer />
        </div>
    </div>

    )
}
    
export default App;
