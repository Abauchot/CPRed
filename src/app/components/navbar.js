'use client';
import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default  function Navbar() {
    const router = useRouter()


    return (
        <nav className="flex items-center justif-between flex-wrap bg-black p-6 grid-cols-12">
            <div className='flex flex-shrink-0 grid-cols-1'>
                <Image src="/images/CPRlogo.png" width={200} height={200} alt="Cyberpunk Red"/>
            </div>
            <div className="flex flex-row text-white space-x-5 justify-end">
                <button onClick={ () => router.push('/roles')} className="cybr-btn">
                    Roles<span aria-hidden>_</span>
                    <span aria-hidden className="cybr-btn__glitch">Roles_</span>
                </button>
            </div>
        </nav>

    )
}


