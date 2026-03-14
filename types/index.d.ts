declare interface Program {
    id: string;
    title: string;
    description: string;
    banner: string;
    slug: string;

    fullName: string;
    badge?: string;                      // optional small tag like "Girls in Stem"
    whoForText: string;
    ages: string;
    levels: string;
    format: string;
    location: string;

    benefitsText: string;
    testimonials: Array<{
        quote: string;
        name: string;
        age: number | string;
        photo: string;
    }>;

    whatLearnIntro: string;
    learnCards: Array<{
        title: string;
        desc: string;
        bgColor: string;                   // Tailwind class like "bg-sky-50"
    }>;

    sampleIntro: string;
    sampleList: string[];
    sampleImage: string;

    programIntroTitle: string;
    programIntroText: string;
    programIntroImage: string;

    howItWorksText: string;
    schedule: string;
    showcase: string;
    support: string;
    howImages: string[];                 // 2 images
}
declare interface Testimonial {
    quote: string;
    name: string;
    image: string;
}

