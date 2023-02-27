import React from 'react';
import {FileInput} from "../components/FileInput";
import {DE10Static} from "../components/DE-10Static";
import {Button} from "../components/button";
import {Table} from "../components/table";

export function  Homepage() {
    return(
            <div
            className={"min-h-screen flex flex-col"}>
                   <div className={"flex-grow position-relative"}>
                       <div className={"position-absolute h-40 w-70 absolute top-80 left-40 "}>
                           <DE10Static/>
                           <div className={"my-8 mx-28 px-12"}>
                               <FileInput/>
                           </div>
                           <div className={"ml-64 mx-6"}>
                                    <Button/>
                           </div>
                       </div>
                       <div className={"position-absolute h-auto w-auto absolute top-80 left-96 mx-96 px-36"}>
                           <Table/>
                       </div>

                   </div>
            </div>
    )
}