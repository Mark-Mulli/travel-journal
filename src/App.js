import React from "react"

import Navbar from "./components/Navbar"
import Main from "./components/Main"
import myArray from "./data"

import "./styles.css"

export default function App() {
    //Components Here

    const journal = myArray.map(item => {
        return (
            <Main
                key = {item.id}
                {...item}
            />
        )
    })

    return (
        <div>
            <Navbar />
           
            {journal}
          
            
        </div>
    )
}