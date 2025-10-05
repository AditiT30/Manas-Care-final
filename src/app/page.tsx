import Image from "next/image";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import FAQs from "../../components/faq";
import FooterSection from "../../components/Footer";
import KeyFeaturesPage from "../../components/KeyFeaturesPage";


export default function Home() {
    return (
        // SOLUTION 1: More aggressive padding with proper structure
        <div className="bg-[#E5F4F2] min-h-screen">
            <Navbar/>
            {/* Hero section with generous padding */}
            <section
                className="hero-section min-h-screen flex items-center px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-12">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
                        <div className="main-content flex flex-col justify-center space-y-6 lg:pr-8">
                            <div>
                                <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-4">ManasCare</h1>
                                <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl mb-6 text-gray-800">
                                    Small Steps to a Calmer Mind
                                </h2>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-base md:text-lg lg:text-xl max-w-2xl">
                                Manas Care is your personal companion for mental well-being—a safe, supportive space
                                where students can share, reflect, and find guidance without judgment. Designed to
                                listen, understand, and help you navigate stress, anxiety, or any emotional challenge,
                                Manas Care is here to ensure that your mind always has a caring space to breathe and
                                heal.
                            </p>
                        </div>
                        <div className="image-content flex justify-center items-center lg:pl-8">
                            <div className="w-full max-w-lg">
                                <Image
                                    src="/hero-section-img.png"
                                    alt="hero"
                                    width={400}
                                    height={400}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 md:py-24 lg:py-28 bg-[#E5F4F2] ">
                <div className="container mx-auto max-w-7xl px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24">
                    {/* Section Header */}
                    <div className="text-center mb-16 md:mb-20 lg:mb-24">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-gray-900 leading-tight">
                            Discover how ManasCare supports your mental wellness
                        </h2>
                        <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                            Experience our key features and resources, created for your wellbeing and connection.
                        </p>
                    </div>

                    <section>
                        <KeyFeaturesPage/>
                    </section>
                </div>
            </section>

            <section id="FAQs" className="">
                <FAQs></FAQs>

            </section>
            <FooterSection></FooterSection>

        </div>
    );
}