export const navLinks = [
    {
        id:"1",
        label:"Home",
        href:"/"
    },
    {
        id:"2",
        label:"About us",
        href:"/about"
    },
    {
        id:"3",
        label:"Programs",
        href:"/programs"
    },
    {
        id:"4",
        label:"Our gallery",
        href:"/gallery"
    },
    {
        id:"5",
        label:"Impact",
        children:[
            {
                id:"5.1",
                label:"Our impact",
                href:"/impact"
            },
            {
                id:"5.2",
                label:"Our partners",
                href:"/partners"
            }
        ]
    },
    {
        id:"6",
        label:"Get involved",
        children: [
            {
                id:"6.1",
                label:"Become a mentor",
                href:"/mentor"
            },
            {
                id:"6.2",
                label:"Become a volunteer",
                href:"/volunteer"
            }
        ]
    }
]

export const programs = [
    {
        id:"1",
        title:"Get Into Tech Summer Camp",
        description:"An exciting summer program where students learn coding, robotics, design, and innovation while building real technology projects.",
        banner: "/images/landing-pic-02.png"
    },
    {
        id:"2",
        title:"Coding & Robotics Clubs",
        description: "Weekly school-based technology clubs that introduce students to programming, robotics, and problem-solving through hands-on projects.",
        banner: "/images/landing-pic-03.png"
    },
    {
        id:"3",
        title:"Girls Get Into STEM",
        description: "A three-month program designed to support girls and young women in building confidence and skills in technology and innovation.",
        banner: "/images/landing-pic-04.png"
    },
    {
        id:"4",
        title:"Get Into Space Tech (GIST)",
        description: "A program where learners explore space science, robotics, satellites, and engineering through practical projects.",
        banner: "/images/landing-pic-05.png"
    },
    {
        id:"5",
        title:"Enjoy AI Competition",
        description: "An exciting challenge where young innovators build AI-powered solutions and compete while learning about artificial intelligence.",
        banner: "/images/landing-pic-06.png"
    },
    {
        id:"6",
        title:"Internship Program",
        description: "A practical learning opportunity where university students gain real-world experience by mentoring younger learners and working on technology projects.",
        banner: "/images/landing-pic-01.png"
    },
]

export const testimonials = [
    {
        quote: "WithinTech allowed me to write my first Hello World in coding. That moment changed everything for me. After attending their training, I gained the confidence and skills that helped me get a job.",
        name: "Teta Nancy",
        image: "/images/nancy.jpg"
    },
    {
        quote: "Through the Get Into Tech Summer Camp, I worked on a real project with my team using the skills I gained during the training. It helped me understand how technology solves real problems.",
        name: "Aimé Loïc",
        image: "/images/aime.jpg"
    },
    {
        quote: "Training with WithinTech was one of the most meaningful moments of my learning journey. Today, I believe in myself and in what I'm capable of doing.",
        name: "Gabriella",
        image: "/images/gabriella.jpg"
    },
    {
        quote: `Just wrapped up an amazing holiday coding program! Learned a ton, had so much fun, and grew my skills big time. Highly recommend @withintechrwanda to anyone looking to level up their coding game.`,
        name: "Esther",
        image: "/images/esther.jpg"
    },
    {
        quote: `I had the opportunity to participate in the Within Tech Summer Camp (Cohort 2), where I learned a lot about coding and robotics. I am currently studying at NIT. Special thanks to the Mother of Mentees for the guidance and continuous support`,
        name: "Sharif",
        image: "/images/sharif.jpg"
    }
];