import React from 'react';


export function  Table() {
    return(
       <div>
           <div className="overflow-x-auto">
               <table className="table table w-70 h-90 border-separate border border-slate-500 rounded-lg text-indigo-800">
                   <th className ="my-6 px-4 mx-2">
                       Таблица со сценарием загрузки на ПЛИС:
                       <thead>
                       <tr>
                           <th>#</th>
                           <th>Элемент FPGA</th>
                           <th>Действие</th>
                           <th>Длительность</th>
                       </tr>
                       </thead>
                       <tbody>
                       <tr>
                           <th>1</th>
                           <td>Led-1</td>
                           <td>Light </td>
                           <td>10 seconds</td>
                       </tr>
                       {/* row 2 */}
                       <tr>
                           <th>2</th>
                           <td>Button-1</td>
                           <td>Press</td>
                           <td>3 seconds</td>
                       </tr>
                       {/* row 3 */}
                       <tr>
                           <th>3</th>
                           <td>7 segment indicator</td>
                           <td>Led combination</td>
                           <td>21 seconds</td>
                       </tr>
                       <tr>
                           <th>4</th>
                           <td>7 segment indicator</td>
                           <td>Led combination</td>
                           <td>21 seconds</td>
                       </tr>
                       <tr>
                           <th>5</th>
                           <td>7 segment indicator</td>
                           <td>Led combination</td>
                           <td>21 seconds</td>
                       </tr>
                       <tr>
                           <th>6</th>
                           <td>7 segment indicator</td>
                           <td>Led combination</td>
                           <td>21 seconds</td>
                       </tr>
                       </tbody>
                   </th>
                   {/* head */}
               </table>
           </div>
       </div>
    )
}
