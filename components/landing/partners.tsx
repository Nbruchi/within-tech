import Image from "next/image";

const partners = [
    { name: "Cybex", src: "/icons/partner-cybex.png" },
    { name: "Life Fitness", src: "/icons/partner-life-fitness.png" },
    { name: "Octane Fitness", src: "/icons/partner-octane-fitness.png" },
    { name: "Smile", src: "/icons/partner-smile.png" },
    { name: "Travel", src: "/icons/partner-travel.png" },
    { name: "True Fitness", src: "/icons/partner-true-fitness.png" },
];

const loopedPartners = [...partners, ...partners];

const Partners = () => {
    return (
        <section id="partners" className="overflow-hidden py-24 sm:py-32">
            <div className="px-4 lg:px-6">
                <h2 className="section-title text-app-purple">Our Partners</h2>
                <p className="mt-4 max-w-2xl text-lg">
                    Each collaboration has helped us reach more learners, unlock more
                    potential, and build lasting impact.
                </p>
            </div>

            <div className="relative mt-12 overflow-hidden py-6">
                <div className="partners-fade-left pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-20" />
                <div className="partners-fade-right pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-20" />

                <div className="partners-marquee flex w-max items-center gap-3 sm:gap-4 md:gap-6">
                    {loopedPartners.map((partner, index) => {
                        const isLower = index % 2 === 1;

                        return (
                            <div
                                key={`${partner.name}-${index}`}
                                className={`flex shrink-0 items-center justify-center px-8 sm:px-10 md:px-12 ${
                                    isLower ? "translate-y-4 sm:translate-y-5" : "-translate-y-4 sm:-translate-y-5"
                                }`}
                            >
                                <Image
                                    src={partner.src}
                                    alt={`${partner.name} logo`}
                                    width={660}
                                    height={300}
                                    className="w-36 object-contain"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Partners;