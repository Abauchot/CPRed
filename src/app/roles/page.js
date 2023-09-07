import React from "react";
import Navbar from "@/app/components/navbar";
import RolesDisplay from "@/app/roles/rolesDisplay";

export default function Roles() {
    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center">
                <div className="text-center">
                    <h1 className='text-4xl font-normal leading-normal mt-2 mb-2 text-black-800'>Le coeur du jeu de rôle Cyberpunk</h1>
                    <p className="px-8">
                        Malgré une guerre généralisée entre des mégacorporation suivi par une explosion atomique,
                        l&apos;univers de Cyberpunk combine la sauvagerie, la sophistication, la modernité et un aspect rétrograde.
                        Des Techies flamboyants aux allures de top models côtoient des guerriers de la route prêts au combat, et tout ce beau monde
                        apparaît dans les boîtes de nuit les plus torrides, le bars sordides et les rues barbares de cette ville héritière de l&apos;holocauste.
                        Chacun d&apos;entre eux remplit un <strong>rôle</strong> l&apos;occupation principale qu&apos;on leur connait dans la Rue.<br />
                        <strong>Dans le futur de Cyberpunk RED, il existe dix rôles: </strong>
                    </p>
                </div>
            </div>
            <div>
                <RolesDisplay />
            </div>
        </div>
    );
}
