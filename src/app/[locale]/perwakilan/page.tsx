"use client";

import { AppContainer } from "@/components/ui/app-container";

import { Clock10Icon, MailIcon, PhoneIcon, PinIcon } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col gap-10">
      <div className=" h-[400px] w-full bg-background">
        <div className=" flex w-full h-full justify-center place-items-center relative">
          <div className="h-full w-full absolute bg-slate-800">
            <Image
              src={"/images/fondasi.png"}
              fill
              alt=""
              sizes="100vh"
              className=" object-cover opacity-50"
            />
          </div>
          <div className=" absolute left-0 top-0 right-0 bottom-0 flex justify-center place-items-center">
            <h1 className=" text-3xl font-bold absolute text-slate-100">
              Kontak Kami
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full relative md:h-[450px] bg-background">
        <AppContainer>
          <div className="grid grid-cols-6 md:grid-cols-12 h-full gap-5 py-5">
            <div className=" col-span-4 xl:px-5 group">
              <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                <Image
                  src={"/images/background.webp"}
                  fill
                  sizes="100vh"
                  alt=""
                  className=" object-cover group-hover:scale-125 transition-all duration-300"
                />
              </div>
            </div>
            <div className=" col-span-8 px-3  xl:px-5">
              <div className="h-full flex flex-col justify-center space-y-2">
                <h1>Kantor Pusat</h1>
                <h2 className="flex gap-2">
                  <Clock10Icon />
                  Jam Operasional
                </h2>
                <p className="text-base pl-5">Senin - Kamis : 08.00 - 16.30 </p>
                <p className="text-base pl-5">Jumat : 08.00 - 17.00 </p>
                <h2 className="flex gap-2">
                  <PinIcon />
                  Alamat Kantor LPSK
                </h2>
                <div className=" space-y-2">
                  <p className="text-base pl-5">
                    <b>Kantor Pusat LPSK</b> Jalan Raya Bogor KM 24 No. 47-49,
                    Jakarta Timur. Telp. 021-29681560
                  </p>
                  <p className="text-base pl-5">
                    <b>Kantor LPSK Perwakilan Yogyakarta</b> Gedung Keuangan
                    Negara DI Yogyakarta Sayap Barat Lantai II, Jalan
                    Kusumanegara No.11, Kota Yogyakarta. Telp. 0274-5019084
                  </p>
                  <p className="text-base pl-5">
                    <b>Kantor LPSK Perwakilan Medan</b> Gedung Keuangan Negara
                    Medan GKN II Lantai 6, Jalan Diponegoro No. 30a, Kota Medan.
                    Telp. 061-42007818
                  </p>
                </div>
                <h2 className="flex gap-2">
                  <PhoneIcon /> Hubungi Kami
                </h2>

                <p className="text-base pl-5">Fax. (021) 29681551</p>

                <h2 className="flex gap-2">
                  <MailIcon /> Email
                </h2>

                <p className="text-base pl-5">lpsk_ri@lpsk.go.id</p>
              </div>
            </div>
          </div>
        </AppContainer>
      </div>
    </div>
  );
}
