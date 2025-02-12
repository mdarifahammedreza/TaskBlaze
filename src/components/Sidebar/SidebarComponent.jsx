"use client";
import { LuBrain } from "react-icons/lu";
import React, { Children, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { FaPeopleGroup } from "react-icons/fa6";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

function SidebarComponent({children}) {
  const links = [
    {
      label: "Dashboard",
      href: "/",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "Profile",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "Profile",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Teams",
      href: "Teams",
      icon: (
        <FaPeopleGroup className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      
      ),
    },
    {
      label: "Settings",
      href: "Settings",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "Logout",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    (<div
      className={cn(
        " flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1  border border-neutral-200 dark:border-neutral-700 overflow-hidden",
       
      )}>
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <>
              <Logo />
            </>
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div className="border border-gray-900 px-1 bg-neutral-900 shadow shadow-gray-900">
            <SidebarLink
              link={{
                label: (<p className="text-3xl font-semibold">Tasks<span className="text-cyan-600">Blaze</span></p>),
                href: "/TaskblazeAI",
                icon: (
                  <p className="text-3xl"><LuBrain /></p>
                ),
              }} />
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="h-screen w-full flex items-center justify-center bg-gray-900">{children}</div>
     
    </div>)
  );
}
export const Logo = () => {
  return (
    (<Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">

      <Image
        src="https://assets.aceternity.com/manu.png"
        className="h-9 w-9 flex-shrink-0 rounded-full"
        width={50}
        height={50}
        alt="Avatar" />
      <p className="text-sm font-semibold text-white">Md Arif Ahammed Reza</p>
    </Link>)
  );
};
export default SidebarComponent;