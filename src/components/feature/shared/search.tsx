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
import { ChevronDown, SearchIcon } from "lucide-react";
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
    <>
      {/* <Dialog>
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
      </Dialog> */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon" className="flex-shrink-0">
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
                <CommandGroup>
                  <CommandList>
                    {menu.map(({ name, path, children }) => (
                      <div key={name} className="mb-2">
                        
                        {children ? (
                          <CommandItem value={name} key={name}>
                            <details className="group">
                              <summary className="flex justify-between items-center px-4 py-2 cursor-pointer">
                                <span>{name}</span>
                                <ChevronDown size={16} className="group-open:rotate-180 transition-all" />
                              </summary>
                              <div className="">
                                {children.map(({ name, path }) => (
                                  <Link
                                    href={path}
                                    key={name}
                                    target={path.startsWith("http") ? "_blank" : "_self"}
                                    className="block py-1 hover:text-blue-800"
                                  >
                                    {name}
                                  </Link>
                                ))}
                              </div>
                            </details>
                          </CommandItem>

                        ) : (
                          // <Link href={path} className="block px-4 py-2 hover:text-blue-800">
                          //   {name}
                          // </Link>
                          <CommandItem value={name}>
                            <Link
                              key={path}
                              href={path}
                            //   onClick={onClose}
                            >
                                {name}
                            </Link>
                          </CommandItem>
                        )}
                      </div>
                    ))}
                  </CommandList>
                </CommandGroup>
              </Command>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export { Search };

