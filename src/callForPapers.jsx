import IMG1 from './IMG1.jpg';

const CallForPapersSection = () => {
    return (
        <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
                    
                    {/* Left Side - Image */}
                    <div className="w-full md:w-1/2 order-1 md:order-1">
                        <div className="relative rounded-xl overflow-hidden shadow-xl">
                            <img 
                                src= {IMG1} 
                                alt="Call for Paper image"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                    
                    {/* Right Side - Text Content */}
                    <div className="w-full md:w-1/2 space-y-4 md:space-y-6 order-2 md:order-2">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            ETHICS AND POLICIES
                        </h2>
                        
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                            At the ANUK Public Sector Accounting and Finance Journal (APSAFJ), we uphold the highest standards of
publication ethics to ensure the integrity and quality of our scholarly outputs. We are committed to ethical
publishing practices, guided by the principles of the Committee on Publication Ethics (COPE). All authors,
reviewers, and editors are expected to adhere to our ethical standards.
                        </p>
                        
                    </div>
                    
                </div>
            </div>
        </section>
    );
};



export default CallForPapersSection;