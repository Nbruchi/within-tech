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