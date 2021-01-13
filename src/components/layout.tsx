import React from "react"
import { Footer, Header } from "./Layout/Global"

interface Props {
    location: any
    title: string
}

const Layout: React.FC<Props> = ({ children, ...props }) => {
    //TODO: Repetitive, create utility file for pathing
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = props.location.pathname === rootPath

    return (
        <div className="global-wrapper" data-is-root-path={isRootPath}>
            <Header {...props} />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
