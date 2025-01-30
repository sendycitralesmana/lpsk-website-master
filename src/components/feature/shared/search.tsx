"use client";

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { Link } from "@/lib/i18n/routing";
import { SearchIcon } from "lucide-react";
import { useMessages } from "next-intl";
import { Button } from "../../ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../ui/dialog";
import { Label } from "../../ui/label";

const Search = () => {
  const { navigation: menu } = useMessages();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size={"icon"} className=" flex-shrink-0">
          <SearchIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="!m-0">Cari</DialogTitle>
        </DialogHeader>
        <div className="flex space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Command>
                  <CommandInput placeholder="Search Menu..." />
                  <CommandEmpty>No menu found.</CommandEmpty>
                  <CommandGroup>
                    <CommandList>
                      {menu.map((item) => (
                        <Link
                          key={item.path}
                          href={item.path}
                        //   onClick={onClose}
                        >
                          <CommandItem value={item.name}>
                            {item.name}
                          </CommandItem>
                        </Link>
                      ))}
                    </CommandList>
                  </CommandGroup>
                </Command>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { Search };

