import Image from "next/image"
import './sponsor_list.css'

export function SponsorList() {
    // Array delle immagini per pulizia del codice
    const sponsors = [
        "/PoliTO.png", "/altium.png", "/Igus_logo.svg.png", "/pinto.png", "/preziosiRicami.png", "/solidworks.png", "/STM.png", "/NextPCN.png",
    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="mx-auto px-4">
                <h3 className="text-center text-xl font-semibold text-gray-600 mb-12 uppercase tracking-wider">
                    I nostri Sponsor
                </h3>
                
                {/* Contenitore dello slider */}
                <div className="sponsor-slider relative h-[100px] mx-auto overflow-hidden">
                    <div className="slide-track flex">
                        {sponsors.map((src, index) => (
                            <div key={index} className="slide flex items-center justify-center shrink-0 h-[100px] w-[250px] px-4">
                                <Image 
                                    src={src} 
                                    height={80} 
                                    width={200} 
                                    alt={`Sponsor ${index + 1}`} 
                                    className="object-contain max-h-[60px]"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}