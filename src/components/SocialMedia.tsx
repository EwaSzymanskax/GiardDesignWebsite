function SocialMedia(){
    return(
        <div className="flex flex-col place-items-center bg-light-beige pt-16 pb-16">
            <section className="flex flex-col bg-green pl-5 w-80 lg:flex-row lg:w-[800px] xl:w-[1040px] lg:px-20 xl:px-[110px]">
                <div className="text-light-beige text-4xl mt-5 mb-5  lg:mt-[120px] xl:mt-[155px] lg:mr-8 lg:mb-0 xl:mr-[64px] lg:text-[40px]">
                    <p className="font-montserrat">Zostańmy w kontakcie!</p>
                    <p className="font-montserrat">Znajdziesz nas na <span className="font-inter italic">Instagramie.</span></p>
                </div>
                <div className="w-min">
                    <p className="text-base w-[170px] lg:w-[161px] text-light-beige mb-5 mt-5 lg:mt-[120px] lg:mx-0 lg:mb-0">Śledź nasze najnowsze realizacje!</p>
                    <div className="flex flex-col place-items-center lg:place-items-start">
                        <button type="button" className="m-6 w-52 h-12 bg-light-beige rounded-full text-base px-3 pt-1.5 pb-2 text-green lg:mb-[120px] lg:w-[124px] lg:mx-0 lg:px-0">Instagram</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SocialMedia;
