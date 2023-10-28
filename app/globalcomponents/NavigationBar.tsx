import Link from "next/link";
import React from "react";
import { Fragment } from "react";

function NavigationBar() {

    const linkStyle = {
        paddingRight:"15px",
        textDecoration: "none",
    }

    const  navStyle = {
        width:"100%",
        height:"50px",
        background:"#4267B2",
        display:"flex",
        
      }


    return (
         <nav style={navStyle}>
           <Link style={linkStyle} href={"/"} >Home</Link>
           <Link style={linkStyle} href={"/builder"} >Builder</Link>
           <Link style={linkStyle} href={"/profile"} >Profile</Link>
           <Link style={linkStyle} href={"/admin"}>Admin</Link>
        </nav>    
                )
}

export default NavigationBar;