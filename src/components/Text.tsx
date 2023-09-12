interface Props{
    titleFirst: string;
    titleSecond: string;
    description?: string;
    customClass?: string;
}

function Text({titleFirst, titleSecond, description, customClass=""}: Props){
    

    return(
        <div className="lg:w-[1040px]">
                <h1 className={`text-xl lg:text-xs text-green pt-5 ml-5 lg:mb-4 ${customClass} lg:p`}>Oferta</h1>
                <h2 className="text-3xl lg:text-5xl font-montserrat font-medium mt-5 mx-5">{titleFirst} <span className="italic font-inter font-medium">{titleSecond}</span></h2>
                {description? <p className="m-5 lg:mb-24 text-sm lg:text-base lg:w-[700px] lg:mt-8">{description}</p> : null}
            </div> 
    )
}
export default Text;