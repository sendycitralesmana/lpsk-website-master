"use client";

import Image from "next/image";


const LogoText = () => {
  return (
    <div className="flex gap-2 h-[60px] w-[220px]">
      <div className="relative h-[60px] w-[60px]">
        <Image
          src={"/images/logo-lg.png"}
          alt={"Logo LPSK"}
          className=" object-center object-cover"
          fill
        />
      </div>
      <div className="flex flex-col flex-1 leading-none">
        <h1 className="text-lg font-bold">LPSK</h1>
        <p className=" text-xs max-w-xs font-bold">
          Lembaga Perlindungan Saksi dan Korban
        </p>
      </div>
    </div>
  );
};

export { LogoText };