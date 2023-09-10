import React, { Children } from "react"
import Navbar from "../navbar"
import { useRouter } from "next/router"


type AppShellProps = {
    children: React.ReactNode
}

const disableNavbar = ['/auth/login', '/auth/register', '/404']

const AppShell = (props: AppShellProps) => {
    const {pathname} = useRouter()
 return (
    <main>
        {!disableNavbar.includes(pathname) && <Navbar />}
        {props.children}
    </main>
 )   
}

export default AppShell