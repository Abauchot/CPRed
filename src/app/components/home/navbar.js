import React from "react";
import Image from "next/image";

function Navbar() {
    return (
        <nav class="flex items-center justif-between flex-wrap bg-black p-6 grid-cols-12">
            <div class='flex flex-shrink-0 grid-cols-1'>
                <Image src="/images/CPRlogo.png" width={200} height={200} alt="Cyberpunk Red" />
            </div>
        </nav>

    )


}
export default Navbar;
