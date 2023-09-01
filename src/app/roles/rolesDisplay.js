import React from "react";
import Image from "next/image";


export default function RolesDisplay() {
    const roles = [
        {
            name: 'Rockeurs',
            shortDescription: "Rellebes rock'n'roll qui défient l'autorité à l'aide de conerts, d'oeuvre d'art et discours enflammés",
            imageUrl:
                '/images/tokens_roles/rockeur_token.png',
                width: 100, 
                height: 100
        },
        {
            name: 'Solos',
            shortDescription: "Assassins, gardes du corps, tueurs à gages et soldats à louer dans un nouveau où la loi n'a plus cours",
            imageUrl:
                '/images/tokens_roles/solo_token.png',
                width: 100, 
                height: 100
        },
        {
            name: 'Netrunners',
            shortDescription: "Maîtres cybernitiques du pritage de l'après-NET et cambrioleurs des secrets de la psyché.",
            imageUrl:
                '/images/tokens_roles/netrunner_token.png',
                width: 100, 
                height: 100
        },
        {
            name: 'Techies',
            shortDescription: "Mécaniciens renégats et inventeurs des supertechnologies; ce sont eux qui assurent le fonctionnement de ce futur sombre.",
            imageUrl:
                '/images/tokens_roles/techie_token.png',
                width: 100, 
                height: 100
        },
        {
            name: 'Medtechs',
            shortDescription: "Docteurs de quartiers qui excerent sans autorisation et médecins de la cybernétique; ils répartent aussi bien la chair que le métal.",
            imageUrl:
                '/images/tokens_roles/medtech_token.png',
                width: 100, 
                height: 100
        },
        {
            name: 'Médias',
            shortDescription: "Journalistes, stars médiatiques et influenceurs qui risquent tout au nom de la vérité - ou pour la gloire.",
            imageUrl:
                '/images/tokens_roles/media_token.png',
                width: 100, 
                height: 100
        },
        {
            name: 'Corporatistes',
            shortDescription: "Cadres d'entreprise et corsaises du monde du business qui luttent pour rétable le règle des mégacorporations.",
            imageUrl:
                '/images/tokens_roles/corporatiste_token.png',
                width: 100, 
                height: 100
        },
        {
            name: 'Justiciers',
            shortDescription: "Des agents de l'autorité augmentés qui patrouillent dans les rue sauvages et les autoroutes où règent les barbares de la route.",
            imageUrl:
                '/images/tokens_roles/justicier_token.png',
                width: 100, 
                height: 100
        },
        {
            name: 'Fixers',
            shortDescription: "Trafiquants, contrebandiers, négociateurs et informateurs qui règnent sur le marchés de minuit, dans la rue d'après-guerre.",
            imageUrl:
                '/images/tokens_roles/fixer_token.png',
                width: 100, 
                height: 100
        },
        {
            name: 'Nomades',
            shortDescription: "Experts en transports, quintessence des guerriers de la route, pirates et contrebandiers qui relient les communautés du monde entier.",
            imageUrl:
                '/images/tokens_roles/nomade_token.png',
                width: 100, 
                height: 100
        },
    ]

    return (
        <div className="flex justify-center items-center">
            <div className="container grid gap-12 grid-cols-2 grid-rows-2 mt-2.5">
                {roles.map((role) => (
                    <div key={role.name} className="flex flex-col items-center gap-x-6 mt-2.5 mb-2.5">
                        <Image className="h-16 w-16 rounded-full" src={role.imageUrl} alt={role.name} width={role.width} height={role.height} />
                        <h3 className="text-xl font-semibold l leading-7 tracking-tight text-gray-900">{role.name}</h3>
                        <p className="break-normal ">{role.shortDescription}</p>
                        <div>
                            <button className='border-2'>afficher</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}