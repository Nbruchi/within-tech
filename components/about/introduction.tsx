import TitleLabel from "../title-label";

const Introduction = () => {
    return (
        <section
            id="introduction"
            className="relative min-h-screen pt-24 sm:pt-28"
        >
            <div className="absolute inset-0 -z-10 bg-[url('/images/landing-pic-06.jpg')] bg-cover bg-center bg-no-repeat" />
            <div className="absolute inset-0 -z-10 bg-black/70" />

            <div className="px-4 py-16 sm:px-6 lg:px-6 flex flex-col gap-y-12 items-center gap-2 mx-auto max-w-5xl">
                <TitleLabel label="About Us" color="white" />
                <h1 className="font-space-grotesk text-app-orange text-6xl text-center">
                    Born to Build
                </h1>
                <p className="text-white font-inter text-xl mt-4 text-center">
                    Empowering the next generation of creators, innovators, and
                    problem-solvers through technology education.
                </p>
            </div>
        </section>
    );
};

export default Introduction;
