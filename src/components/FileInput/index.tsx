import React from 'react';


export function FileInput () {
    return(
       <div>
           <input type="file" className="bg-sky-50 file-input file-input-bordered w-full max-w-xs" />
           <div className={"mx-12 my-3"}>
               Файл должен быть текстовым
           </div>
       </div>
    )
}
