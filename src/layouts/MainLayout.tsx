import React from "react"
import {Header} from "../components";

function MainLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <Header/>
            {children}
        </>
    )
}

export default MainLayout