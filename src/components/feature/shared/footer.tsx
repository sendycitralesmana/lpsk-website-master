"use client";

import {
  FacebookIcon,
  InfoIcon,
  InstagramIcon,
  MailIcon,
  MessageCircleIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

import { Avatar, AvatarFallback } from "../../ui/avatar";
import { LogoText } from "@/components/ui/logo-text";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-900 text-white py-10 mt-5">
      <section className="w-full container flex gap-5">
        <div className="flex flex-col gap-5">
          <LogoText />
          <p className="text-muted max-w-xs">
            Jl. Raya Bogor KM.24 No.47-49, RT.6/RW.1, Susukan, Kec. Ciracas,
            Jakarta Timur, DKI Jakarta - 13750
          </p>
          <p>
            <b>Telepon:</b> (021) 2968-1560
          </p>
          <p>
            <b>Hotline:</b> 1500-148
          </p>
        </div>
        <div className="flex-1 grid grid-cols-3 place-items-center justify-around">
          <div className="flex flex-col gap-0.5">
            <div className="flex gap-2 font-bold place-items-center">
              <MessageCircleIcon />
              <span>Whatsapp</span>
            </div>
            <p>+62 857-700-10048</p>
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="flex gap-2 font-bold place-items-center">
              <MailIcon />
              <span>Email</span>
            </div>
            <p>lpsk_ri@lpsk.go.id</p>
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="flex gap-2 font-bold place-items-center">
              <InfoIcon />
              <span>FAQs</span>
            </div>
            <p>+62 857-700-10048</p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-3">
          <h3 className="font-bold">Media Sosial</h3>
          <div className="flex gap-4 w-full justify-between">
            <Avatar className=" text-blue-900">
              <AvatarFallback>
                <FacebookIcon />
              </AvatarFallback>
            </Avatar>
            <Avatar className=" text-blue-900">
              <AvatarFallback>
                <InstagramIcon />
              </AvatarFallback>
            </Avatar>
            <Avatar className=" text-blue-900">
              <AvatarFallback>
                <TwitterIcon />
              </AvatarFallback>
            </Avatar>
            <Avatar className=" text-blue-900">
              <AvatarFallback>
                <YoutubeIcon />
              </AvatarFallback>
            </Avatar>
            <Avatar className=" text-blue-900">
              <AvatarFallback>
                <FacebookIcon />
              </AvatarFallback>
            </Avatar>
            <Avatar className=" text-blue-900">
              <AvatarFallback>
                <FacebookIcon />
              </AvatarFallback>
            </Avatar>
          </div>
          <p className=" max-w-sm">
            Pengunjung hari ini: 1,359 | Kemarin: 9,571 | Minggu ini: 36,588
            Bulan ini: 158,117 | Total: 5,226,379
          </p>
          <p className=" max-w-sm">
            © 2024 Lembaga Perlindungan Saksi dan Korban. All Rights Reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};

export { Footer };
