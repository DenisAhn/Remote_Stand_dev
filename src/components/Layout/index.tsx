import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {Footer} from "../footer";
import {Header} from "../header";


export function  Layout() {
    return(
       <div >
           <Header/>
                    <Outlet/>
           <Footer/>
       </div>
    )
}
