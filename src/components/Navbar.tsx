"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed inset-x-0 top-8 z-50 mx-auto w-fit", className)}>
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>

        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex min-w-[16rem] flex-col space-y-3 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Classical Sketching</HoveredLink>
            <HoveredLink href="/courses">Digital Illustration</HoveredLink>
            <HoveredLink href="/courses">UI UX Design</HoveredLink>
            <HoveredLink href="/courses">Art Photography</HoveredLink>
            <HoveredLink href="/courses">3D Sculpting</HoveredLink>
            <HoveredLink href="/courses">Motion and Animation</HoveredLink>
          </div>
        </MenuItem>

        <Link href="/contact">
          <MenuItem setActive={setActive} active={active} item="Contact" />
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
