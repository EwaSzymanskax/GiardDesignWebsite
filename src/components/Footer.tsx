import logo from "../Icons/giarddesign.png";
import logoGroup from "../Icons/Group 129.png";
import line from "../Icons/Line.png";


function Footer(){
    return (
        <footer className="bg-black lg:flex lg:flex-col lg:place-items-center w-full">
            <div className=" lg:w-[800px] xl:w-[1040px]">
                <div className="text-light-beige pt-5 lg:flex lg:flex-row lg: place-content-between lg:pt-20 lg:mb-[62px]">
                    <img className="ml-5 mb-5 w-28 h-5 lg:ml-0" src={logo} alt="logo"/>
                    <div className="lg:flex lg:flex-row">
                        <p className="text-sm ml-5 mb-10 lg:mr-3">Daj znać, co możemy dla Ciebie zrobić!</p>
                        <div className="flex flex-col place-items-center">
                            <button type="button" className="m-6 w-52 h-12 bg-green rounded-full text-base px-3 pt-1.5 pb-2 lg:pt-0 lg:pb-0 lg:-mt-4 lg:ml-0 lg:mr-1 lg:mb-0  text-light-beige">Skontaktuj się z nami</button>
                        </div>
                    </div>
                </div>
                <img src={line} alt="linia"/>
                <div className="text-light-beige mx-5 mb-5 mt-10 lg:flex lg: flex-row place-content-between lg:mx-0">
                    <div>
                        <ol className="text-sm flex flex-row place-content-between lg:mt-[62px]">
                            <li>Kontakt</li>
                            <li className="lg:ml-8">Instagram</li>
                            <li className="lg:ml-8">Facebook</li>
                            <li className="lg:ml-8">LinkedIn</li>
                        </ol>
                    </div>
                    <div className="flex flex-row place-content-between lg:mt-[62px]">
                        <p className="text-sm mt-10 lg:mr-8 lg:mt-0">000-000-000</p>
                        <p className="text-sm mt-10 lg:mt-0">giarddesign@kontakt.pl</p>
                    </div>
                </div>
                <div className="flex flex-row text-sm text-light-beige place-content-between mt-20 lg:mb-20">
                    <p className="ml-5 lg:ml-0 lg:mt-[62px]">Prawa zastrzeżone © 2022</p>
                    <p className="mr-5 lg:flex lg:flex-row lg:mt-[62px] lg:mr-5 ">made by<img className="w-28 h-6 mb-5" src={logoGroup} alt="logo"/></p>
                </div>
            </div>
        </footer>
    )

}

export default Footer;
