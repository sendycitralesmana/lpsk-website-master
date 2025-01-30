"use client";

import { useFilterStore } from "@/components/hook/filter-store";
import { Button } from "@/components/ui/button";
import { ButtonToggle } from "@/components/ui/button-toggle";
import {
  BlendIcon,
  ContrastIcon,
  EclipseIcon,
  SunDimIcon,
  SwatchBookIcon
} from "lucide-react";

const FilterToggle = () => {
  const store = useFilterStore((state) => state);
  return (
    <section className="space-y-2 border p-2 rounded mt-2">
      <h5 className="font-bold">Filter Warna</h5>
      <div className="grid grid-cols-2 gap-2">
        <ButtonToggle
          level={store.contrast}
          length={store.maxContrast}
          onClick={store.setContrast}
        >
          <ContrastIcon />
          <span>Kontras</span>
        </ButtonToggle>
        <ButtonToggle
          level={store.sepia}
          length={store.maxSepia}
          onClick={store.setSepia}
        >
          <BlendIcon />
          <span>Warna coklat tua</span>
        </ButtonToggle>
        <ButtonToggle
          level={store.brightness}
          length={store.maxBrightness}
          onClick={store.setBrightness}
        >
          <EclipseIcon />
          <span>Kecerahan</span>
        </ButtonToggle>
        <ButtonToggle
          level={store.grayscale}
          length={store.maxGrayscale}
          onClick={store.setGrayscale}
        >
          <ContrastIcon />
          <span>Skala abu abu</span>
        </ButtonToggle>
        <ButtonToggle
          level={store.invert}
          length={store.maxInvert}
          onClick={store.setInvert}
        >
          <SunDimIcon />
          <span>Membalikan</span>
        </ButtonToggle>
        <ButtonToggle
          level={store.saturate}
          length={store.maxSaturate}
          onClick={store.setSaturate}
        >
          <SwatchBookIcon />
          <span>Jenuh</span>
        </ButtonToggle>
        <ButtonToggle
          level={store.hueRotate}
          length={store.maxHueRotate}
          onClick={store.setHueRotate}
        >
          <SwatchBookIcon />
          <span>Putar Warna</span>
        </ButtonToggle>
        <Button
          variant={"outline"}
          className="col-span-2"
          onClick={store.setDefault}
        >
          Atur Ulang Filter Warna
        </Button>
      </div>
    </section>
  );
};

export { FilterToggle };

