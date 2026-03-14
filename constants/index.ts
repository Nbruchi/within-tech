export const navLinks = [
    {
        id: "1",
        label: "Home",
        href: "/",
    },
    {
        id: "2",
        label: "About us",
        href: "/about",
    },
    {
        id: "3",
        label: "Programs",
        href: "/programs",
    },
    {
        id: "4",
        label: "Our gallery",
        href: "/gallery",
    },
    {
        id: "5",
        label: "Impact",
        children: [
            {
                id: "5.1",
                label: "Our impact",
                href: "/impact",
            },
            {
                id: "5.2",
                label: "Our partners",
                href: "/partners",
            },
        ],
    },
    {
        id: "6",
        label: "Get involved",
        children: [
            {
                id: "6.1",
                label: "Become a mentor",
                href: "/mentor",
            },
            {
                id: "6.2",
                label: "Become a volunteer",
                href: "/volunteer",
            },
        ],
    },
];
export const programs: Program[] = [
    {
        id: "1",
        title: "Get Into Tech Summer Camp",
        description:
            "An exciting summer program where students learn coding, robotics, design, and innovation while building real technology projects.",
        banner: "/images/landing-pic-02.png",
        slug: "get-into-tech-summer-camp",

        fullName: "Get Into Tech Summer Camp",
        whoForText:
            "Open to curious students who want an intensive tech immersion during the holidays. Perfect for those eager to build projects and discover new passions in STEM.",
        ages: "10 – 17",
        levels: "Beginner – Intermediate",
        format: "Full-day sessions over 2–4 weeks (school holidays)",
        location: "Within Tech Makerspace in Kigali & partner venues",

        benefitsText:
            "Participants gain hands-on skills, teamwork experience, and excitement about tech careers — many return as mentors or club leaders in their schools.",
        testimonials: [
            {
                quote: "I built my first game during camp — now I want to be a game developer!",
                name: "Aime",
                age: 20,
                image: "/images/aime.jpg",
            },
            {
                quote: "The robotics part was amazing. I never knew I could make something move by coding!",
                name: "Esther",
                age: 15,
                image: "/images/esther.jpg",
            },
        ],

        whatLearnIntro:
            "Campers dive deep into multiple STEM areas through daily projects and challenges.",
        learnCards: [
            {
                title: "CODING & APP DEVELOPMENT",
                desc: "Build interactive games and apps using Scratch, Python, and block-based tools.",
                bgColor: "bg-app-purple/10",
            },
            {
                title: "ROBOTICS & ENGINEERING",
                desc: "Assemble and program robots to complete missions and solve problems.",
                bgColor: "bg-app-yellow/80",
            },
            {
                title: "DESIGN & INNOVATION",
                desc: "Use design thinking to ideate, prototype, and present creative solutions.",
                bgColor: "bg-app-orange/10",
            },
        ],

        sampleIntro:
            "Each camp features rotating challenges to keep things fresh and fun.",
        sampleList: [
            "Create a climate action game",
            "Build a line-following robot",
            "Design a smart home prototype",
            "Team pitch at final showcase",
        ],
        sampleImage: "/images/landing-pic-02.png",

        programIntroTitle:
            "UNLEASHING CREATIVITY THROUGH INTENSIVE TECH IMMERSION",
        programIntroText:
            "Our summer camps turn school holidays into launchpads for innovation — learners collaborate, experiment, and build things they’re proud to show off.",
        programIntroImage: "/images/landing-pic-02.png",

        howItWorksText:
            "Intensive holiday program with daily hands-on sessions, expert facilitators, and group projects.",
        schedule:
            "Full days (9 AM – 4 PM) during school breaks (2–4 weeks depending on camp)",
        showcase:
            "Final day exhibition where campers present projects to parents and community",
        support:
            "All materials, laptops, and snacks provided; transport support available for some participants",
        howImages: [
            "/images/withintech-koica-01.jpg",
            "/images/withintech-koica-02.jpg",
        ],
    },
    {
        id: "2",
        title: "Coding & Robotics Clubs",
        description:
            "Weekly school-based technology clubs that introduce students to programming, robotics, and problem-solving through hands-on projects.",
        banner: "/images/landing-pic-03.jpeg",
        slug: "coding-and-robotics-club",

        fullName: "Coding & Robotics Clubs",
        whoForText:
            "School-based clubs for students interested in regular tech exploration without long-term commitment.",
        ages: "8 – 18",
        levels: "Beginner – Intermediate",
        format: "Weekly after-school clubs (1–2 hours per session)",
        location: "Partner schools across Kigali, Musanze and beyond",

        benefitsText:
            "Builds consistent skills, school community, and long-term interest in STEM through fun weekly meetups.",
        testimonials: [
            {
                quote: "Club day is my favorite — we always build something cool together!",
                name: "Gabriella",
                age: 16,
                image: "/images/gabriella.jpg",
            },
            {
                quote: "Club day fascinates me — we came up with new ideas and we try to build them from scratch",
                name: "Sharif",
                age: 20,
                image: "/images/sharif.jpg",
            },
        ],

        whatLearnIntro:
            "Weekly sessions focus on progressive skill-building in coding and robotics.",
        learnCards: [
            {
                title: "PROGRAMMING BASICS",
                desc: "Start with Scratch and move toward Python fundamentals.",
                bgColor: "bg-app-purple/10",
            },
            {
                title: "ROBOTICS PROJECTS",
                desc: "Build and code robots for challenges like maze navigation.",
                bgColor: "bg-app-yellow/80",
            },
            {
                title: "TEAM PROBLEM-SOLVING",
                desc: "Collaborate on group projects and present solutions.",
                bgColor: "bg-app-orange/10",
            },
        ],

        sampleIntro: "Clubs rotate themes each term for variety.",
        sampleList: [
            "Maze-solving robot challenge",
            "Interactive story game in Scratch",
            "Simple sensor-based invention",
        ],
        sampleImage: "/images/landing-pic-03.jpeg",

        programIntroTitle: "BRINGING TECH TO YOUR SCHOOL EVERY WEEK",
        programIntroText:
            "Clubs make STEM accessible right in school — regular fun sessions that spark ongoing curiosity.",
        programIntroImage: "/images/landing-pic-03.jpeg",

        howItWorksText:
            "School-hosted weekly clubs with trained facilitators and provided kits.",
        schedule: "1–2 sessions per week during term time",
        showcase: "Term-end mini-exhibitions for parents and school",
        support: "Robotics kits, laptops (shared), and materials supplied",
        howImages: ["/images/sonrise-01.jpg", "/images/sonrise-02.jpg"],
    },
    {
        id: "3",
        title: "Girls Get Into STEM",
        description:
            "A three-month program designed to support girls and young women in building confidence and skills in technology and innovation.",
        banner: "/images/landing-pic-04.jpg",
        slug: "girls-get-into-stem",

        fullName: "Girls Get Into STEM",
        badge: "Girls in Stem",
        whoForText:
            "We welcome girls aged 8–17 - from complete beginners to the already curious. Learners join from our Kigali makerspace and partner schools across Nairobi and beyond. Everyone gets a chance to participate; sponsored seats help ensure cost is never a barrier.",
        ages: "8 – 17",
        levels: "Beginner – Intermediate",
        format: "After-school + monthly talks",
        location: "Kigali & partner schools",

        benefitsText:
            "Girls leave with more than technical know-how—they gain confidence, a sense of belonging in STEM spaces, and a supportive network of peers and mentors. These outcomes open doors to further learning and help them envision a future in technology, science, or engineering.",
        testimonials: [
            {
                quote: "Before WithinTech, I had never touched a computer. Now I’ve built a robot that follows my voice!",
                name: "Nancy",
                age: 18,
                image: "/images/nancy.jpg",
            },
        ],

        whatLearnIntro:
            "Through hands-on projects, participants learn the fundamentals of coding using beginner-friendly tools like Scratch and Python, experiment with robotics and simple electronics, and apply design thinking to solve real-world problems. Along the way, they practice collaboration and communication, presenting their ideas to peers and mentors to build confidence.",
        learnCards: [
            {
                title: "CODING FUNDAMENTALS",
                desc: "Master the basics of programming with beginner-friendly tools like Scratch and Python, building a strong foundation for future tech exploration.",
                bgColor: "bg-app-purple/10",
            },
            {
                title: "ROBOTICS & ELECTRONICS",
                desc: "Explore the exciting world of robotics, learning to build and program simple electronic circuits and devices through hands-on projects.",
                bgColor: "bg-app-yellow/80",
            },
            {
                title: "DESIGN THINKING",
                desc: "Develop critical thinking skills by applying design thinking principles to identify problems and create innovative solutions for real-world challenges.",
                bgColor: "bg-app-orange/10",
            },
        ],

        sampleIntro:
            "Activities rotate each term to keep learning fresh and exciting. Recent challenges included building an animated story app, creating a smart plant-watering system using sensors, and presenting a robotics build at our mini showcase.",
        sampleList: [
            "Building an animated story app",
            "Smart plant-watering with sensors",
            "Robot demo at Mini-Showcase",
        ],
        sampleImage: "/images/landing-pic-04.jpg",

        programIntroTitle: "BUILDING CONFIDENCE, CREATIVITY, AND SKILLS",
        programIntroText:
            "Girls belong in STEM - in the classroom, the lab, and the workplace. Our Girls in STEM program is designed to provide a safe, supportive space where girls can explore coding, robotics, and scientific discovery. With the guidance of inspiring mentors and role models, participants gain skills, confidence, and the belief that they can achieve anything.",
        programIntroImage: "/images/landing-pic-04.jpg",

        howItWorksText:
            "The program runs as weekly after-school sessions, supplemented by monthly talks from women in STEM who share their journeys. Term-based enrollment supports steady progress, while our sponsorships and scholarships ensure access for learners who need it. Sessions are hosted at our WithinTech makerspace in Kigali and at partner schools.",
        schedule: "1–2 sessions per week (by school term)",
        showcase:
            "Mini demos where girls present projects to peers and parents",
        support: "Laptops, kits, and materials provided",
        howImages: [
            "/images/landing-pic-01.jpeg",
            "/images/landing-pic-04.jpg",
        ],
    },
    {
        id: "4",
        title: "Get Into Space Tech (GIST)",
        description:
            "A program where learners explore space science, robotics, satellites, and engineering through practical projects.",
        banner: "/images/space-tech-01.jpg",
        slug: "get-into-space-tech",

        fullName: "Get Into Space Tech (GIST)",
        whoForText:
            "Ideal for space enthusiasts and students curious about satellites, astronomy, and aerospace engineering.",
        ages: "10 – 18",
        levels: "Beginner – Intermediate",
        format: "Monthly workshops + project terms",
        location: "Makerspace & partner schools",

        benefitsText:
            "Inspires fascination with space while building engineering and scientific thinking skills applicable to many careers.",
        testimonials: [
            {
                quote: "I designed a mini satellite model — space feels real now!",
                name: "Liam",
                age: 19,
                image: "/images/aime.jpg",
            },
        ],

        whatLearnIntro:
            "Explore space-themed STEM through building, coding, and real science experiments.",
        learnCards: [
            {
                title: "SPACE SCIENCE BASICS",
                desc: "Learn about planets, orbits, and satellites with hands-on models.",
                bgColor: "bg-app-purple/10",
            },
            {
                title: "ROBOTICS FOR SPACE",
                desc: "Build rovers and probes that simulate space missions.",
                bgColor: "bg-app-yellow/80",
            },
            {
                title: "SATELLITE & DATA",
                desc: "Code simple data loggers and understand remote sensing.",
                bgColor: "bg-app-orange/10",
            },
        ],

        sampleIntro: "Projects inspired by real space missions.",
        sampleList: [
            "Build a Mars rover prototype",
            "Code a satellite tracker simulation",
            "Rocket launch challenge",
        ],
        sampleImage: "/images/space-tech-01.jpg",

        programIntroTitle: "LAUNCHING YOUNG MINDS INTO SPACE EXPLORATION",
        programIntroText:
            "GIST ignites passion for space while teaching engineering, coding, and scientific inquiry through exciting projects.",
        programIntroImage: "/images/space-tech-01.jpg",

        howItWorksText:
            "Monthly intensive sessions with guest astronomers and engineers.",
        schedule: "Monthly full-day or weekend workshops",
        showcase: "Space project exhibition and demos",
        support: "Kits, telescopes (shared), and materials provided",
        howImages: ["/images/space-tech-02.jpg", "/images/space-tech-03.jpg"],
    },
    {
        id: "5",
        title: "Enjoy AI Competition",
        description:
            "An exciting challenge where young innovators build AI-powered solutions and compete while learning about artificial intelligence.",
        banner: "/images/rca-02.jpg",
        slug: "enjoy-ai-competition",

        fullName: "Enjoy AI Competition",
        whoForText:
            "Creative coders ready to tackle AI challenges and present solutions in a fun competition format.",
        ages: "12 – 18",
        levels: "Intermediate",
        format: "Project-based with mentorship + final competition day",
        location: "Makerspace & online elements",

        benefitsText:
            "Builds AI literacy, presentation skills, and competitive spirit — great for portfolios.",
        testimonials: [
            {
                quote: "My AI chatbot won second place — I learned so much!",
                name: "Mark",
                age: 20,
                image: "/images/tss-02.jpg",
            },
        ],

        whatLearnIntro:
            "Introduction to AI concepts through building and competing.",
        learnCards: [
            {
                title: "AI BASICS & ETHICS",
                desc: "Understand machine learning, bias, and responsible AI.",
                bgColor: "bg-app-purple/10",
            },
            {
                title: "BUILDING AI PROJECTS",
                desc: "Create image recognizers, chatbots, or predictors with tools like Teachable Machine.",
                bgColor: "bg-app-yellow/80",
            },
            {
                title: "PRESENTATION & JUDGING",
                desc: "Pitch your solution and receive feedback from experts.",
                bgColor: "bg-app-orange/10",
            },
        ],

        sampleIntro: "Past competition themes and winning ideas.",
        sampleList: [
            "AI plant disease detector",
            "Voice-controlled assistant",
            "Emotion recognition game",
        ],
        sampleImage: "/images/rca-02.jpg",

        programIntroTitle: "COMPETING WITH CREATIVITY IN AI",
        programIntroText:
            "A thrilling challenge where young minds build, test, and showcase AI solutions — learning while having fun.",
        programIntroImage: "/images/rca-02.jpg",

        howItWorksText:
            "Mentored project development leading to a showcase competition.",
        schedule: "8–12 week preparation + competition day",
        showcase: "Live judging and awards ceremony",
        support: "AI tools access, mentorship, and computing resources",
        howImages: ["/images/rca-01.jpg", "/images/rca-03.jpg"],
    },
    {
        id: "6",
        title: "Internship Program",
        description:
            "A practical learning opportunity where university students gain real-world experience by mentoring younger learners and working on technology projects.",
        banner: "/images/landing-pic-05.jpg",
        slug: "internship-program",

        fullName: "Internship Program",
        whoForText:
            "University students passionate about tech education and mentoring — gain leadership and technical experience.",
        ages: "University students (18+)",
        levels: "Advanced (undergraduate/postgraduate)",
        format: "Part-time internship (3–6 months)",
        location: "Makerspace in Kigali + remote elements",

        benefitsText:
            "Develop teaching, project management, and tech skills while making a real community impact.",
        testimonials: [
            {
                quote: "Mentoring learners taught me more about leadership than any lecture.",
                name: "Michael",
                age: 19,
                image: "/images/ruhengeri-03.jpg",
            },
        ],

        whatLearnIntro:
            "Interns learn facilitation, advanced tech, and community engagement.",
        learnCards: [
            {
                title: "MENTORSHIP SKILLS",
                desc: "Guide younger learners through projects and challenges.",
                bgColor: "bg-app-purple/10",
            },
            {
                title: "ADVANCED PROJECTS",
                desc: "Work on real tools like AI, web dev, or robotics kits.",
                bgColor: "bg-app-yellow/80",
            },
            {
                title: "COMMUNITY IMPACT",
                desc: "Design sessions and contribute to program growth.",
                bgColor: "bg-app-orange/10",
            },
        ],

        sampleIntro: "Intern tasks and responsibilities.",
        sampleList: [
            "Facilitate weekly coding sessions",
            "Develop new workshop materials",
            "Assist in competition prep",
        ],
        sampleImage: "/images/landing-pic-05.jpg",

        programIntroTitle: "GROW WHILE GIVING BACK",
        programIntroText:
            "Our internship bridges university learning with real-world impact — interns mentor learners and build their own portfolios.",
        programIntroImage: "/images/landing-pic-05.jpg",

        howItWorksText:
            "Structured mentorship with training, project work, and reflection.",
        schedule: "Flexible part-time (10–20 hours/week)",
        showcase: "Intern-led sessions and final presentation",
        support:
            "Training, stipend (where possible), certificates, recommendation letters",
        howImages: ["/images/ruhengeri-01.jpg", "/images/ruhengeri-02.jpg"],
    },
];
export const testimonials: Testimonial[] = [
    {
        quote: "WithinTech allowed me to write my first Hello World in coding. That moment changed everything for me. After attending their training, I gained the confidence and skills that helped me get a job.",
        name: "Teta Nancy",
        image: "/images/nancy.jpg",
    },
    {
        quote: "Through the Get Into Tech Summer Camp, I worked on a real project with my team using the skills I gained during the training. It helped me understand how technology solves real problems.",
        name: "Aimé Loïc",
        image: "/images/aime.jpg",
    },
    {
        quote: "Training with WithinTech was one of the most meaningful moments of my learning journey. Today, I believe in myself and in what I'm capable of doing.",
        name: "Gabriella",
        image: "/images/gabriella.jpg",
    },
    {
        quote: `Just wrapped up an amazing holiday coding program! Learned a ton, had so much fun, and grew my skills big time. Highly recommend @withintechrwanda to anyone looking to level up their coding game.`,
        name: "Esther",
        image: "/images/esther.jpg",
    },
    {
        quote: `I had the opportunity to participate in the Within Tech Summer Camp (Cohort 2), where I learned a lot about coding and robotics. I am currently studying at NIT. Special thanks to the Mother of Mentees for the guidance and continuous support`,
        name: "Sharif",
        image: "/images/sharif.jpg",
    },
];
