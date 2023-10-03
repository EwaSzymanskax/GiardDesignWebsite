import garden from "../image/Garden.png";
import house from "../image/House.png";
import Slider from 'react-slick';
import Slide from '../components/Slide';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import prevArrow from '../Icons/Frame 2311.png';
import nextArrow from '../Icons/Frame 2310.png';
import './arrows.css';



function SliderAbout() {

    const CustomPrevArrow = (props: any) => {
        const { className, style, onClick } = props;
        return (
            <div
            className={className}
            style={{ ...style, width: '24px', height: '24px', backgroundColor: 'rgba(245,240,236)', zIndex: "2", backgroundImage: `url(${prevArrow})`}}
            onClick={onClick}
            />
        );
    };

    const CustomNextArrow = (props: any) => {
        const { className, style, onClick } = props;
        return (
            <div
            className={className}
            style={{ ...style, width: '24px', height: '24px', backgroundColor: 'rgba(245,240,236)', backgroundImage: `url(${nextArrow})`}}
            onClick={onClick}
            />
        );
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
      };

    return (
    <section id="slide-container" className=" bg-beige relative">
        <Slider {...settings}>
            <Slide title="Nowoczesna aranżacja Twojego ogrodu" description="Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu." image={garden}></Slide>
            <Slide title="Każdy projekt to nowe wyzwanie, które chętnie zrealizujemy" description="Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.Oferujemy kompleksowy zakres usług i indywidualne podejście." image={house}></Slide>
        </Slider>
    </section>
    );
}

export default SliderAbout;