import Image from "next/image"
import './sponsor_list.css'
import Link from "next/link";

export function SponsorList() {
    // Array delle immagini per pulizia del codice
    const sponsors = [
        {
            src: "/sponsor/PoliTo.png",
            link: "https://www.polito.it/"
        },
        {
            src:  "/sponsor/altium.png",
            link: "https://www.altium.com/?srsltid=AYCX9vJOUC7Z2tuvXJFJwUuWlS7m6YlgTG5foBEJLyhApAI5nWeKXJgw"
        },
        {
            src:  "/sponsor/Igus_logo.svg.png",
            link: "https://www.igus.it/"
        },
        {
            src:  "/sponsor/pinto.png",
            link: "https://www.pintoelettronica.com/"
        },
        {
            src:  "/sponsor/preziosiRicami.png",
            link: "https://www.preziosiricami.it/"
        },
        {
            src: "/sponsor/solidworks.png",
            link: "https://www.solidworks.com/it"
        },
        {
            src:"/sponsor/NextPCB.png",
            link: "https://www.nextpcb.com/?utm_campaign=NextPCB1111&adgroupid=187795674239&utm_source=google&utm_medium=cpc&keyword=next%20pcb&device=c&network=g&gad_source=1&gad_campaignid=23246847486&gbraid=0AAAAACmNWVD91mdVIrpyv7pzxkHwlwIyE&gclid=CjwKCAjwuobXBhBXEiwAYUaIlTaVumSEmkxJl7DWUvwNaxmRC25HRKOUH79sLmIcWgiAP6TwYKDmWhoCgB4QAvD_BwE"
        },
        {
            src: "/sponsor/STM.png",
            link: "https://www.st.com/content/st_com/en.html"
        }
    ];

    return (
        <section className="isaac-pattern py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h3 className="text-center text-lg font-semibold text-gray-600 mb-6 tracking-wider">
                    Credono in noi
                </h3>

                <div className="sponsor-slider relative w-full max-w-[960px] h-[100px] mx-auto overflow-hidden rounded-lg">
                    <div className="slide-track flex">
                        {sponsors.map((obj, index) => (
                            <div key={index} className="slide flex items-center justify-center shrink-0 h-[100px] w-[250px] px-4">
                                <Link href={obj.link} target="_blank">
                                    <Image
                                        src={obj.src}
                                        height={80}
                                        width={200}
                                        alt={`Sponsor ${index + 1}`}
                                        className="object-contain max-h-[60px]"
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}