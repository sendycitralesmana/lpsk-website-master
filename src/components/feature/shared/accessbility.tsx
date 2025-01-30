"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AccessibilityIcon } from "lucide-react";
import { FilterToggle } from "./filter-toggle";
import { FontToggle } from "./font-toggle";
import { ToolToggle } from "./tool-toggle";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ModeToggle } from "./mode-toggle";
import { LocaleToggle } from "./locale-toggle";

const Accessbility = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size={"icon"}
          className="fixed bottom-5 left-5"
        >
          <AccessibilityIcon className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="!m-0">Aksesibilitas</SheetTitle>
        </SheetHeader>
        <ScrollArea className="w-full flex-1 overflow-y-auto">
          <ToolToggle />
          <FontToggle />
          <FilterToggle />
        </ScrollArea>
        <SheetFooter className="flex ">
          <SheetClose asChild>
            <Button className="w-full">Tutup</Button>
          </SheetClose>
          <ModeToggle/>
          <LocaleToggle/>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export { Accessbility };
