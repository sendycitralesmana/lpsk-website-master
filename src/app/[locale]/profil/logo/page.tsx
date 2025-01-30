import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
  import { Button } from "@/components/ui/button";
  import { Card } from "@/components/ui/card";
  import Image from "next/image";
  import { Link } from "@/lib/i18n/routing";
  
  const LogoResmiPage = () => {
    return (
      <main className="space-y-10 w-screen">
        <section className="container">
          <Breadcrumb className="pt-5">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/profil">Profil</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Ketentuan Logo Resmi</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </section>
        <section className="container space-y-10">
          <h1 className="text-2xl font-bold text-center">
            KETENTUAN LOGO RESMI
          </h1>
          <div className="flex flex-col place-items-center gap-2">
            <div className=" w-full grid grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex flex-col gap-5">
                  <Card className="aspect-square relative rounded overflow-hidden group">
                    <Image
                      src={`https://picsum.photos/seed/report-${
                        index + 1
                      }/1000/1000`}
                      alt=""
                      fill
                      className=" object-center group-hover:scale-105 transition-all duration-300"
                    />
                  </Card>
                  <Button asChild>
                    <Link href={"/"}>Unduh</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  };
  
  export default LogoResmiPage;
  