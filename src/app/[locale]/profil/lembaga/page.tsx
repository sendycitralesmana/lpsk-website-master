import { AppContainer } from "@/components/ui/app-container";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const ProfilLembagaPage = () => {
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
              Sekilas LPSK
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full relative md:h-[450px] bg-background">
        <AppContainer>
          <div className="grid grid-cols-6 md:grid-cols-12 h-full gap-5 py-5">
            <div className=" col-span-6 px-3  xl:px-5">
              <div className="h-full flex flex-col justify-center space-y-2">
                <h1>VISI</h1>

                <p className=" font-bold">
                  ”Terwujudnya perlindungan saksi dan korban dalam sistem
                  peradilan pidana”
                </p>

                <p className="">
                  Visi ini mengandung maksud bahwa LPSK yang diberikan mandat
                  oleh undang-undang selaku focal point dalam pemberian
                  perlindungan saksi dan korban harus mampu mewujudkan suatu
                  kondisi dimana saksi dan korban benar-benar merasa terlindungi
                  dan dapat mengungkap kasus dalam peradilan pidana.
                </p>
              </div>
            </div>
            <div className=" col-span-6 xl:px-5 group">
              <div className="h-[300px] md:h-full w-full relative overflow-hidden rounded">
                <Image
                  src={"/images/banner/lpsk-1.jpg"}
                  fill
                  sizes="100vh"
                  alt=""
                  className=" object-cover group-hover:scale-125 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </AppContainer>
      </div>
      <div className="w-full relative md:h-[450px] bg-background">
        <AppContainer>
          <div className="grid grid-cols-6 md:grid-cols-12 h-full gap-5 py-5">
            <div className=" col-span-6 xl:px-5 group">
              <div className="h-[300px] md:h-full w-full relative overflow-hidden rounded">
                <Image
                  src={"/images/banner/lpsk-2.jpeg"}
                  fill
                  sizes="100vh"
                  alt=""
                  className=" object-cover group-hover:scale-125 transition-all duration-300"
                />
              </div>
            </div>
            <div className=" col-span-6 px-3  xl:px-5">
              <div className="h-full flex flex-col justify-center space-y-2">
                <h1>MISI</h1>

                <p className="">
                  Dalam rangka mewujudkan visi di atas, Lembaga Saksi dan Korban
                  memiliki misi sebagai berikut :
                </p>

                <ul className="list-disc pl-5">
                  <li>
                    Mewujudkan perlindungan dan pemenuhan hak-hak bagi saksi dan
                    korban dalam peradilan pidana.
                  </li>
                  <li>
                    Mewujudkan kelembagaan yang profesional dalam memberikan
                    perlindungan dan pemenuhan hak-hak bagi saksi dan korban.
                  </li>
                  <li>
                    Memperkuat landasan hukum dan kemampuan dalam pemenuhan
                    hak-hak saksi dan korban.
                  </li>
                  <li>
                    Mewujudkan dan mengembangkan jejaring dengan para pemangku
                    kepentingan dalam rangka pemenuhan hak saksi dan korban.
                  </li>
                  <li>
                    Mewujudkan kondisi yang kondusif serta partisipasi
                    masyarakat dalam perlindungan saksi dan korban.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AppContainer>
      </div>
      <section className="w-full">
        <AppContainer className="space-y-5">
          <h1 className="text-center">WEWENANG</h1>
          <div className=" grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3">
            <Card className={"pt-5"}>
              
              <CardContent className="text-center">
                <p className="">
                  Meminta keterangan secara lisan dan / atau tertulis dari
                  pemohon dan pihak lain yang terkait dengan permohonan
                </p>
              </CardContent>
            </Card>
            <Card className={"pt-5"}>
              
              <CardContent className="text-center">
                <p className="">
                  Menelaah keterangan, surat, dan/atau dokumen yang terkait
                  untuk mendapatkan kebenaran atas permohonan
                </p>
              </CardContent>
            </Card>
            <Card className={"pt-5"}>
              
              <CardContent className="text-center">
                <p className="">
                  Meminta salinan atau fotokopi surat dan/atau dokumen terkait
                  yang diperlukan dari instansi manapun untuk memeriksa laporan
                  pemohon sesuai dengan ketentuan peraturan perundang-undangan
                </p>
              </CardContent>
            </Card>
            <Card className={"pt-5"}>
              
              <CardContent className="text-center">
                <p className="">
                  Meminta informasi perkembangan kasus dari penegak hukum
                </p>
              </CardContent>
            </Card>
            <Card className={"pt-5"}>
              
              <CardContent className="text-center">
                <p className="">
                  Mengubah identitas terlindung sesuai dengan ketentuan
                  peraturan perundang-undangan
                </p>
              </CardContent>
            </Card>
            <Card className={"pt-5"}>
              
              <CardContent className="text-center">
                <p className="">Mengelola rumah aman</p>
              </CardContent>
            </Card>
            <Card className={"pt-5"}>
              
              <CardContent className="text-center">
                <p className="">
                  Memindahkan atau merelokasi terlindung ke tempat yang lebih
                  aman
                </p>
              </CardContent>
            </Card>
            <Card className={"pt-5"}>
              
              <CardContent className="text-center">
                <p className="">Melakukan pengamanan dan pengawalan</p>
              </CardContent>
            </Card>
            <Card className={"pt-5"}>
              
              <CardContent className="text-center">
                <p className="">
                  Melakukan pendampingan Saksi dan/atau Korban dalam proses
                  peradilan
                </p>
              </CardContent>
            </Card>
            <Card className={"pt-5"}>
              
              <CardContent className="text-center">
                <p className="">
                  Melakukan penilaian ganti rugi dalam pemberian Restitusi dan
                  Kompensasi
                </p>
              </CardContent>
            </Card>
          </div>
        </AppContainer>
      </section>
      {/* <GallerySection /> */}
    </div>
  );
};

export default ProfilLembagaPage;
