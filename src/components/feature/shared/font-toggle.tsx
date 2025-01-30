"use client";

import { useFontStore } from "@/components/hook/font-store";
import { Button } from "@/components/ui/button";
import { ButtonToggle } from "@/components/ui/button-toggle";
import { FontFamilyIcon, FontSizeIcon } from "@radix-ui/react-icons";
import { IndentIncrease, SpaceIcon } from "lucide-react";

const FontToggle = () => {
  const store = useFontStore((state) => state);
  return (
    <section className="space-y-2 border p-2 rounded mt-2">
      <h5 className="font-bold">Huruf</h5>
      <div className="grid grid-cols-2 gap-2">
        <ButtonToggle
          level={store.size}
          length={store.maxSize}
          onClick={store.setSize}
        >
          <FontSizeIcon />
          <span>Ukuran Huruf</span>
        </ButtonToggle>
        <ButtonToggle
          level={store.leading}
          length={store.maxLeading}
          onClick={store.setLeading}
        >
          <IndentIncrease />
          <span>Huruf Terkemuka</span>
        </ButtonToggle>
        <ButtonToggle
          level={store.spacing}
          length={store.maxSpacing}
          onClick={store.setSpacing}
        >
          <SpaceIcon />
          <span>Spasi Huruf</span>
        </ButtonToggle>
        <ButtonToggle
          level={store.family}
          length={store.maxFamily}
          onClick={store.setFamily}
        >
          <FontFamilyIcon />
          <span>Keluarga Huruf</span>
        </ButtonToggle>
        <Button
          variant={"outline"}
          className="col-span-2"
          onClick={store.setDefault}
        >
          Atur Ulang Huruf
        </Button>
      </div>
    </section>
  );
};

export { FontToggle };
