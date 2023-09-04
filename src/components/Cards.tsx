import pen from "../Icons/Pen.png";
import eye from "../Icons/Eye.png";
import stars from "../Icons/Stars.png";
import vectorRight from "../Icons/VectorRight.png";

function Cards(){
    return(
        <div className="flex flex-col place-items-center space-y-3 lg:flex-row lg:mb-40 lg:space-y-0">
            <div className="flex flex-col justify-between border-1 rounded-lg bg-white w-80 h-80 xl:w-[378px] xl:h-[370px] lg:mr-4 xl:mr-16 transition transform hover:-translate-y-3  motion-reduce:transition-none motion-reduce:hover:transform-none">
                <div>
                    <img className="w-11 h-11 mt-8 ml-10 mb-8 lg:mt-12" src={pen} alt="ołówek"/>
                    <h3 className="text-2xl font-montserrat font-medium mb-3 mx-10">Projekty</h3>
                    <p className="text-sm mx-10">Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.</p>
                </div>
                <a href="/#" >
                <button type="button" className="flex flex-row text-green mx-10 mt-5 mb-12 text-base border-b border-green">Dowiedz się więcej <img className="w-4 h-4 ml-2 mt-1" src={vectorRight} alt="strzałka"/></button></a>
            </div>
            <div className="flex flex-col justify-between border-1 rounded-lg bg-white w-80 h-80 xl:w-[378px] xl:h-[370px] lg:mr-4 xl:mr-16 transition transform hover:-translate-y-3  motion-reduce:transition-none motion-reduce:hover:transform-none">
                <div>
                    <img className="w-12 h-11 mt-8 ml-10 mb-8 lg:mt-12" src={eye} alt="oko"/>
                    <h3 className="text-2xl font-montserrat font-medium mb-3 mx-10">Wizualizacje</h3>
                    <p className="text-sm mx-10">Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D.</p>
                </div>
                <a href="/#">
                <button type="button" className="flex flex-row text-green mx-10 mt-5 mb-12 text-base border-b border-green">Dowiedz się więcej <img className="w-4 h-4 ml-2 mt-1" src={vectorRight} alt="strzałka"/></button></a>
            </div>
            <div className="flex flex-col justify-between border-1 rounded-lg bg-white w-80 h-80 xl:w-[378px] xl:h-[370px] transition transform hover:-translate-y-3  motion-reduce:transition-none motion-reduce:hover:transform-none">
                <div>
                    <img className="w-11 h-11 mt-8 ml-10 mb-8 lg:mt-12" src={stars} alt="gwiazdy"/>
                    <h3 className="text-2xl font-montserrat font-medium mb-3 mx-10">Realizacje</h3>
                    <p className="text-sm mx-10">Zrealizujemy Twoje marzenie przy użyciu najnowszych rozwiązań i zaawansowanych technologii.</p>
                </div>
                <a href="/#">
                <button type="button"className="flex flex-row text-green mx-10 mt-5 mb-12 text-base border-b border-green">Dowiedz się więcej <img className="w-4 h-4 ml-2 mt-1" src={vectorRight} alt="strzałka"/></button></a>
            </div>
        </div>
    )
}

export default Cards;