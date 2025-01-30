"use client";

import { Link } from "@/lib/i18n/routing";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";


const StatisticsPreview = () => {
  return (
    <section className="w-full">
      <div className="container flex flex-col place-items-center gap-4 px-5">
        <h2 className="font-bold max-w-md text-center">
          STATISTIK & SEBARAN PERLINDUNGAN SAKSI DAN KORBAN TINDAK PIDANA
        </h2>
        <Card className=" bg-primary text-white">
          <CardContent className="pt-6 grid grid-cols-4 gap-4">
            <div className="flex flex-col place-items-center justify-center gap-2">
              <h2 className="font-bold">7.777</h2>
              <small className="max-w-xs">Permohonan Perlindungan 2023</small>
            </div>
            <div className="flex flex-col place-items-center justify-center gap-2">
              <h2 className="font-bold">5.523</h2>
              <small className="max-w-xs">Terlindung 2023</small>
            </div>
            <div className="flex flex-col place-items-center justify-center gap-2">
              <h2 className="font-bold">5.702</h2>
              <small className="max-w-xs">Layanan Perlindungan 2023</small>
            </div>
            <div className="flex flex-col place-items-center justify-center gap-2">
              <h2 className="font-bold">4.091</h2>
              <small className="max-w-xs">Layanan Perlindungan Aktif</small>
            </div>
          </CardContent>
        </Card>
        <Button className=" w-fit">
          <Link href={"/"}>Lihat Selengkapnya</Link>
        </Button>
      </div>
    </section>
  );
};

export { StatisticsPreview };