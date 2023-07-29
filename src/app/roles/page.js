import React from "react";
import Navbar from "@/app/components/navbar";


export default function Roles() {
    const roles = [
        {
            name: 'Rockeurs',
            shortDescription: "Rellebes rock'n'roll qui défient l'autorité à l'aide de conerts, d'oeuvre d'art et discours enflammés",
            imageUrl:
                '',
        },
        {
            name: 'Solos',
            shortDescription: "Assassins, gardes du corps, tueurs à gages et soldats à louer dans un nouveau où la loi n'a plus cours",
            imageUrl:
                '',
        },
        {
            name: 'Netrunners',
            shortDescription: "Maîtres cybernitiques du pritage de l'après-NET et cambrioleurs des secrets de la psyché.",
            imageUrl:
                '',
        },
        {
            name: 'Techies',
            shortDescription: "Mécaniciens renégats et inventeurs des supertechnologies; ce sont eux qui assurent le fonctionnement de ce futur sombre.",
            imageUrl:
                '',
        },
        {
            name: 'Medtechs',
            shortDescription: "Docteurs de quartiers qui excerent sans autorisation et médecins de la cybernétique; ils répartent aussi bien la chair que le métal.",
            imageUrl:
                '',
        },
        {
            name: 'Médias',
            shortDescription: "Journalistes, stars médiatiques et influenceurs qui risquent tout au nom de la vérité - ou pour la gloire.",
            imageUrl:
                '',
        },
        {
            name: 'Corporatistes',
            shortDescription: "Cadres d'entreprise et corsaises du monde du business qui luttent pour rétable le règle des mégacorporations.",
            imageUrl:
                '',
        },
        {
            name: 'Justiciers',
            shortDescription: "Des agents de l'autorité augmentés qui patrouillent dans les rue sauvages et les autoroutes où règent les barbares de la route.",
            imageUrl:
                '',
        },
        {
            name: 'Fixers',
            shortDescription: "Trafiquants, contrebandiers, négociateurs et informateurs qui règnent sur le marchés de minuit, dans la rue d'après-guerre.",
            imageUrl:
                '',
        },
        {
            name: 'Nomades',
            shortDescription: "Experts en transports, quintessence des guerriers de la route, pirates et contrebandiers qui relient les communautés du monde entier.",
            imageUrl:
                '',
        },
    ]
    return (
        <div>
            <Navbar/>
            <div className={"justify-center"}>
                <h2>Le coeur du jeu de rôle Cyberpunk</h2>

            </div>
            <div className="py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {roles.map((roles) => (
                            <li key={roles.name}>
                                <div className="flex items-center gap-x-6">
                                    <img className="h-16 w-16 rounded-full" src={roles.imageUrl} alt=""/>
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{roles.name}</h3>
                                        <p className="text-sm font-semibold leading-6 text-red-600">{roles.shortDescription}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}