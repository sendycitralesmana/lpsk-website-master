"use client";


import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/lib/i18n/routing";
import { useLocale } from "next-intl";

export function LocaleToggle() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
  
    const changeLocale = (locale: "en" | "id") => {
      router.replace(pathname, { locale });
      router.refresh();
    };
  

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className=" aspect-square">
          {locale.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLocale("id")}>
          ID
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLocale("en")}>
          EN
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
