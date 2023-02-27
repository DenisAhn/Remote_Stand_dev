import React from 'react';
import  {Link} from "react-router-dom";


export function Header  () {
    return(
        <div className="navbar bg-gradient-to-r from-fuchsia-50 to-indigo-100 text-indigo-900">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl" href={"https://miem.hse.ru/"} target="_blank">МИЭМ </a>
                            <a href="https://www.hse.ru/" target="_blank">
                            <img src="/01_Logo_HSE_full_rus_Pantone.svg" alt="Hse logo" className={"my-2.5 px-2 w-12 h-11"} />
                        </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to= "/">Главная</Link></li>
                    <li tabIndex={0}>
                        <a>
                            Лабораторные работы
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="p-3">
                            <li><Link to = "/Lab1">Лабораторная работа #1</Link></li>
                            <li><Link to = "/Lab2">Лабораторная работа #2</Link></li>
                            <li><Link to = "/Lab3">Лабораторная работа #3</Link></li>
                            <li><Link to = "/Lab4">Лабораторная работа #4</Link></li>
                        </ul>
                    </li>
                    <li><Link to="Docs">Документация</Link></li>
                    <li tabIndex={0}>
                        <a>
                            Обратная связь
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="p-2">
                            <li><Link to="/FeedbackForm">Форма для предложений </Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
            </div>
        </div>
    )
}
