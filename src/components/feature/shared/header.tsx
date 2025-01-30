"use client";

import { Link } from "@/lib/i18n/routing";
import { ChevronDown, MenuIcon } from "lucide-react";
import { useMessages } from "next-intl";
import Image from "next/image";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";

import { LocaleToggle } from "./locale-toggle";
import { Search } from "./search";



const Header = () => {
  const {navigation: menu} = useMessages()
  
  return (
    <header className="w-full shadow bg-background top-0 sticky z-50">
      <section className="container flex justify-between place-items-center">
        <div className=" relative h-[50px] w-[100px]">
          <Image
            src="/images/logo-text.png"
            alt="LPSK Logo"
            className=" object-center object-cover !my-0"
            fill
          />
        </div>
        <nav className="hidden flex-1 lg:flex gap-5 justify-center place-items-center">
          {menu.map(({ name, path, children }) => {
            if (children?.length) {
              return (
                <div
                  key={name}
                  className="relative group cursor-pointer select-none"
                >
                  <div className="px-4 py-4 h-[50px] flex gap-1 place-items-center justify-center transition-colors duration-300">
                    <span className="group-hover:text-blue-600">{name}</span>
                    <ChevronDown
                      size={16}
                      className=" text-slate-600 group-hover:text-blue-600 group-hover:rotate-180 transition-all duration-300"
                    />
                  </div>
                  <Card className="absolute w-[300px] -z-10 left-0 top-full hidden group-hover:block border-none shadow transition-opacity duration-300 rounded">
                    {children.map(({ name, path }) => (
                      <Link href={path} key={name}>
                        <div className="py-2 cursor-pointer hover:bg-primary/15 rounded">
                          <div className="px-4 py-2">
                            <span>{name}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </Card>
                </div>
              );
            }
            return (
              <Link href={path} key={name}>
                <span className=" hover:text-blue-600">{name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="flex gap-2 place-items-center">
          <Search/>
          <LocaleToggle/>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size={"icon"}
                variant={"outline"}
                className=" border-2 lg:hidden h-8 w-8"
              >
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetTitle className=" text-left">LPSK</SheetTitle>
                <SheetDescription className=" text-left">
                  lembaga Perlindungan Saksi dan Korban
                </SheetDescription>
                <nav className="flex-1 flex flex-col gap-x-3 gap-y-2 text-sm justify-start place-items-start pt-5">
                  {menu.map(({ name, path }) => (
                    <Link href={path} key={name}>
                      <span className=" hover:text-blue-800">{name}</span>
                    </Link>
                  ))}
                </nav>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </section>
    </header>
  );
};

export { Header };

