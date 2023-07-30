import React from "react";


export default function RolesDisplay() {
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
        <div className="grid gap-4 grid-cols-3 grid-rows-3 mt-2.5">
            {roles.map((roles) =>(
                <div key={roles.name} className='flex items-center gap-x-6'>
                    <img className='h-16 w-16 rounded-full' src={roles.imageUrl} alt={roles.name}/>
                    <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>{roles.name}</h3>
                    <p>{roles.shortDescription}</p>
                </div>
            ))}
        </div>
    )
}