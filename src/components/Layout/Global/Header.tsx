import { Link } from "gatsby"
import React from "react"

interface Props {
    location: any
    title: string
}

const Header: React.FC<Props> = ({ children, ...props }) => {
    //TODO: Repetitive, create utility file for pathing
    const rootPath: string = `${__PATH_PREFIX__}/`
    const isRootPath: boolean = props.location.pathname === rootPath

    const link: JSX.Element = isRootPath ? (
        <h1 className="main-heading">
            <Link to="/">{props.title}</Link>
        </h1>
    ) : (
        <Link className="header-link-home" to="/">
            {props.title}
        </Link>
    )

    return <header className="global-header">{link}</header>
}

export default Header
