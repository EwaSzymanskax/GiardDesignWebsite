import house from "../image/House.png";
import vectorWhite from '../Icons/VectorWhite.png';

function About(){
    return(
        <div className="lg:flex lg:flex-row lg:w-full">
        <img className="pt-5 w-full lg:w-1/2 xl:w-[688px] lg:pt-0 2xl:w-full" src={house} alt="dom" />
        <div className=" bg-green lg:pl-16 lg:w-1/2 xl:w-full 2xl:w-2/5">
            <div className="text-white pb-5 mx-5 lg:ml-8 xl:ml-24 lg:flex lg:flex-col">
                <h1 className="text-xl pt-10 lg:text-xs lg:pt-40">O firmie</h1>
                <h2 className=" font-montserrat font-medium text-3xl mt-5 lg:mx-0 lg:text-5xl lg:mt-4 xl:w-[200px]">Tworzymy z <span className="font-inter font-medium italic">pasją</span></h2>
                <p className="text-sm mt-5 lg:text-base lg:mt-10 font-inter font-normal xl:w-[500px]">Każdy projekt to nowe wyzwanie. Dlatego nasz zespół tworzą wykwalifikowani projektanci oraz architekci, których zadaniem jest rozpoznanie i realizacja potrzeb każdego Klienta. Nasza specjalizacja to przestrzenie nowoczesne, które charakteryzuje minimalizm, geometria i elegancka prostota. Tworzymy ogrody małoobsługowe, dostosowane do współczesnego trybu życia.</p>
                <button type="button" className="flex flex-row mt-16 mb-6 w-48 h-12 border border-white rounded-full text-base place-content-center pt-3 lg:w-[190px] lg:h-[50px] lg:mt-[72px] font-inter font-light">Poznaj nas bliżej<img className="h-4 pl-1 mt-1 ml-1" src={vectorWhite} alt="strzałka" /></button>
            </div>
        </div>
    </div>
    
    )
}
export default About;