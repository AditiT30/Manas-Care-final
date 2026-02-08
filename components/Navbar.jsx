import React from 'react';
import {ButtonLink} from "./link-button";
import Link from "next/link";
import {Dropdown} from "./dropdown";

const Navbar = () => {
    return (
        <nav>
        <div className="grid grid-cols-14 bg-[#009379] flex justify-between items-center">
            <div className="logo col-span-2">
                <a>
                <img src="./Logo.svg" width={115} height={55} alt="logo"/>
                </a>
            </div>
            <div className="col-span-10">
                <ul className="flex items-center space-x-6">
                    <Link href="/"  ><ButtonLink ><li className="lg:text-2xl md:text-xl text-amber-50">Home</li></ButtonLink></Link>
                    <Link href="/resources"><ButtonLink><li className=" lg:text-2xl md:text-xl text-amber-50">Resources</li></ButtonLink></Link>
                    <Link href="#FAQs"><ButtonLink><li className="lg:text-2xl md:text-xl text-amber-50">FAQs</li></ButtonLink></Link>
                    <Link href="https://manascare.web.app/cb.html"><ButtonLink><li className=" lg:text-2xl md:text-xl text-amber-50">ChatBot</li></ButtonLink></Link>
                    <Link href="/login"><ButtonLink><li className="lg:text-2xl md:text-xl text-amber-50">Vault</li></ButtonLink></Link>
                </ul>
            </div>
            <div className="button col-span-2">
                <Dropdown></Dropdown>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;