import React from 'react';
export function Footer () {
    return(
        <div className="flex flex-col min-h-screen text-indigo-900">
            <footer className="footer footer-center p-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-primary-content mt-auto">
                <div>
                    <img src="../../../src/assets/01_Logo_HSE_full_rus_Pantone.png" alt="" className={"h-10 w-8"}/>
                    <p className="font-bold">
                        Higher school of Economics. <br/>
                    </p>
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
            </footer>
        </div>


    )
}
