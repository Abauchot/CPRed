import React from "react";
import Navbar from "@/app/components/navbar";
import RolesDisplay from "@/app/roles/rolesDisplay";


export default function Roles() {
    return (
        <div>
            <Navbar/>
            <div className={"justify-center"}>
                <h2>Le coeur du jeu de rôle Cyberpunk</h2>
                <p>
                    Malgré une guerre généralisée entre des mégacorporation suivi par une explosion atomique,
                    l'univers de Cyberpunk combine la sauvagerie, la sophistication, la modernité et un aspect rétrograde.
                    Des Techies flamboyants aux allures de top models côtoient des guerriers de la route prêts au combat, et tout ce beau monde
                    apparaît dans les boîtes de nuit les plus torrides, le bars sordides et les rues barbares de cette ville héritière de l'holocauste.
                    Chacun d'entre eux remplit un <strong>rôle</strong>: l'occupation principale qu'on leur connait dans la Rue.<br/>
                   <strong>Dans le futur de Cyberpunk RED, il existe dix rôles : </strong>
                </p>

            </div>
            <div>
                <RolesDisplay/>
            </div>
        </div>
    )
}