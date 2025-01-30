"use client";

import { useToolStore } from "@/components/hook/tool-store";
import { Button } from "@/components/ui/button";
import { ButtonToggle } from "@/components/ui/button-toggle";
import { HeadphonesIcon, ImageOffIcon, LinkIcon } from "lucide-react";

const ToolToggle = () => {
  const store = useToolStore((state) => state);
  return (
    <section className="space-y-2 border p-2 rounded mt-2">
      <h5 className="font-bold">Alat</h5>
      <div className="grid grid-cols-2 gap-2">
        <ButtonToggle
          level={store.hideImages ? 1 : 0}
          length={1}
          onClick={store.setHideImages}
        >
          <ImageOffIcon />
          <span>Sembunyi Gambar</span>
        </ButtonToggle>
        <ButtonToggle
          level={store.highlightLinks ? 1 : 0}
          length={1}
          onClick={store.setHighlightLinks}
        >
          <LinkIcon />
          <span>Sorot Tautan</span>
        </ButtonToggle>
        <ButtonToggle
          level={store.readText ? 1 : 0}
          length={1}
          onClick={store.setReadText}
        >
          <HeadphonesIcon />
          <span>Baca Tulisan</span>
        </ButtonToggle>
        <Button
          variant={"outline"}
          className="col-span-2"
          onClick={store.setDefault}
        >
          Atur Ulang Alat
        </Button>
      </div>
    </section>
  );
};

export { ToolToggle };
