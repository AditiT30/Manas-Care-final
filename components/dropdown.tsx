"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";

export function Dropdown() {
    const [position, setPosition] = React.useState("bottom")

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Log-in</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">

                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                   <Link href="./login"> <DropdownMenuRadioItem value="top">Student</DropdownMenuRadioItem></Link>
                   <Link href="./admin-login"><DropdownMenuRadioItem value="bottom">Admin</DropdownMenuRadioItem></Link>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
