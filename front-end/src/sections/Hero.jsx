import Button from "../components/Button";
import heroImage from "../assets/heroImage.jpg";



function Hero(){
    return(
        <div>
            <div className="bg-black h-96 flex justify-between items-center">
                {/* left content */}
                <div className="px-20 py-32">
                    <h1 className="text-white text-sm md:text-5xl lg:text-3xl font-bold mb-3">Welcome to Academy Tr Course Share</h1>
                    <span className="text-white text-sm md:text-2xl lg:text-3xl font-medium tracking-wide">Advance your online college courses</span>
                    <p className="text-white text-xs w-11/12 mt-3">
                        Acadeum Course Share is the leading online college course exchange. 
                        Unlock learning from accredited colleges and universities for credit 
                        that’s guaranteed to transfer back to your home institution. Accelerate 
                        your student progress at over 525 schools nationwide.
                    </p>
                    <Button label="get started" className="bg-white text-primary w-52 h-12 text-1xl mt-5 uppercase font-bold cursor-pointer"/>
                </div>
                <div>
                    <img src={heroImage} alt="" className="h-72" style={{width: 1400, height: 384}}/>
                </div>
            </div>
        </div>
    )
}


export default Hero;