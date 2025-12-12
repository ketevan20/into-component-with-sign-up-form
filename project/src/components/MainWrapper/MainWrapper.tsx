import FormContainer from "../FormContainer/FormContainer"
import HeroText from "../HeroText/HeroText"
import TrialOffer from "../TrialOffer/TrialOffer"

const MainWrapper = () => {
    return (
        <div className="w-full h-full min-h-screen bg-[rgba(255,121,121,1)] bg-[url('/images/background.png')] flex items-center justify-center">
            <div className="w-full h-full max-w-360 px-41.25 my-6 flex items-center justify-center gap-11.25 font-['Poppins'] max-xl:px-[5%] max-lg:flex-col max-lg:px-[10%] max-md:p-6">
                <HeroText />
                <div className="w-full flex-1 max-lg:flex-none">
                    <TrialOffer />
                    <FormContainer />
                </div>
            </div>
        </div>
    )
}

export default MainWrapper