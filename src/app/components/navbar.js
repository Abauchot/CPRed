'use client';
import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function Navbar() {
    const router = useRouter()


    return (
        <nav className="flex items-center justif-between flex-wrap p-6 grid-cols-12 border-2 border-red-700 ">
            <div className='flex flex-shrink-0 grid-cols-1'>
                <Image src="/images/CPRlogo.png" width={200} height={200} alt="Cyberpunk Red" onClick={() => router.push('/')} />
            </div>
            <div className="flex flex-row text-white space-x-5  mx-6">
                <button onClick={() => router.push('/roles')} className="cybr-btn">
                    Roles<span aria-hidden>_</span>
                    <span aria-hidden className="cybr-btn__glitch">Roles_</span>
                </button>
            </div>
            <div className="flex flex-row text-white space-x-5  mx-6">
                <button onClick={() => router.push('/characteristic')} className="cybr-btn">
                    Caractéristiques<span aria-hidden>_</span>
                    <span aria-hidden className="cybr-btn__glitch">Caractéristiques</span>
                </button>
            </div>
            <div className="flex flex-row text-white space-x-5  mx-6">
                <button onClick={() => router.push('/skills')} className="cybr-btn">
                    Compétences<span aria-hidden>_</span>
                    <span aria-hidden className="cybr-btn__glitch">Compétences</span>
                </button>
            </div>
            <div className="flex flex-row text-white space-x-5  mx-6">
                <button onClick={() => router.push('/gears')} className="cybr-btn">
                    Équipement<span aria-hidden>_</span>
                    <span aria-hidden className="cybr-btn__glitch">Équipement</span>
                </button>
            </div>
            <div className="flex flex-row text-white space-x-5 justify-end mx-6">
                <button onClick={() => router.push('/rules')} className="cybr-btn">
                    Règles<span aria-hidden>_</span>
                    <span aria-hidden className="cybr-btn__glitch">Règles</span>
                </button>
            </div>
        </nav>

    )
}


