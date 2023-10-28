"use client"

import { useState } from "react";

function BuilderSiderBar(){

    const [isCollapse,setIsCollapse] = useState<boolean>(true)

    const Style = {
      width: isCollapse? "400px" : "70px",
      background:"red",
      height:"100vw"


    }

    return ( 
        <aside
          style={Style}
          >
          <button
          onClick={()=>{setIsCollapse(!isCollapse)}}
          >{isCollapse? "Close": "Open" }</button>

        </aside>
     );
}

export default BuilderSiderBar;