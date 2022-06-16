const AppConfig = () => {
    return {
        about: {
            gridArea: "main"
        },
        projects: {
            gridArea: "main"
        },
        contact: {
            gridArea: "main"
        },
        navbar: {
            gridArea: "navbar",
            menuItems: [
                {
                    title: "About",
                    link: "/"
                },
                {
                    title: "Projects",
                    link: "/projects"
                },
                {
                    title: "Contact",
                    link: "/contact"
                },
            ]
        }
    }
}

export default AppConfig