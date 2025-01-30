"use client";

import { AppContainer } from "@/components/ui/app-container";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { MessageCircleIcon, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import { Link } from "@/lib/i18n/routing";

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
              Cara Mengajukan Permohonan Perlindungan
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full relative md:h-[450px] bg-background">
        <AppContainer>
          <div className="grid grid-cols-6 md:grid-cols-12 h-full gap-5 py-5">
            <div className=" col-span-6 md:col-span-4 xl:px-5 group">
              <div className="h-full md:h-full w-full relative overflow-hidden">
                <Image
                  src={"/images/background.webp"}
                  fill
                  sizes="100vh"
                  alt=""
                  className=" object-contain group-hover:scale-125 transition-all duration-300"
                />
              </div>
            </div>
            <div className=" col-span-6 md:col-span-8 px-3  xl:px-5">
              <div className="h-full flex flex-col justify-center space-y-2">
                <h1 className="flex gap-2">Pengajuan Permohonan</h1>

                <p className="text-base">
                  Masyarakat dapat mengajukan permohonan perlindungan ke LPSK
                  melalui sejumlah media yang tersedia.
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href={
                      "https://api.whatsapp.com/send/?phone=6285770010048&text=Hallo+LPSK+saya+mau+bertanya&type=phone_number&app_absent=0"
                    }
                    target={"_blank"}
                  >
                    <div className=" bg-green-500 rounded p-5 flex gap-3 shadow">
                      <MessageCircleIcon className=" text-white" />
                      <h1 className="text-base font-bold text-white">
                        Whatsapp
                      </h1>
                    </div>
                  </Link>
                  <Link
                    href={
                      "https://play.google.com/store/apps/details?id=lpsk.perlindungan.sipali.app&hl=id&gl=US"
                    }
                    target={"_blank"}
                  >
                    <div className=" bg-white rounded p-5 flex gap-3 shadow">
                      <MessageCircleIcon className="" />
                      <h1 className="text-base font-bold">Playstore</h1>
                    </div>
                  </Link>
                  <div className=" bg-red-500 rounded p-5 flex gap-3 shadow">
                    <PhoneCallIcon className=" text-white" />
                    <h1 className="text-base font-bold text-white">
                      Hotline: 1500 - 148
                    </h1>
                  </div>
                  <div className=" bg-blue-500 rounded p-5 flex gap-3 shadow">
                    <EnvelopeClosedIcon className=" text-white" />
                    <h1 className="text-base font-bold text-white">
                      Email: lpsk_ri@lpsk.go.id
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AppContainer>
      </div>
    </div>
  );
}
