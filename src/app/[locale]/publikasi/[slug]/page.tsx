/* eslint-disable @typescript-eslint/no-explicit-any */
import { ShowPDF } from "@/components/feature/show-pdf";
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
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Link } from "@/lib/i18n/routing";
import { searchParamsCache } from "@/lib/server/search-params";
import { findManyPublication } from "@/server/publication";
import { DownloadIcon, SearchIcon } from "lucide-react";
import Image from "next/image";

type PublikasiPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string }>;
};

const PublikasiPage = async ({ searchParams, params }: PublikasiPageProps) => {
  const { slug } = await params;
  const { search, page, per_page } = await searchParamsCache.parse(
    searchParams
  );
  const data: { data: { [key: string]: any }[] } = await findManyPublication({
    search,
    page,
    per_page,
    category_slug: slug,
  });

  return (
    <main className="w-full">
      <section className="w-full aspect-[21/4] bg-primary-foreground flex place-items-center justify-center relative">
        <Breadcrumb className="pt-5 absolute top-0 left-0">
          <BreadcrumbList className="m-0">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/profil">Publikasi</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Profil Lembaga</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-center font-bold">Buku Publikasi</h1>
      </section>
      <form className="container flex flex-row gap-2 pt-5">
        <Input name="search" className="flex-1" placeholder="Search" defaultValue={search} />
        <Button>
          <SearchIcon />
        </Button>
      </form>
      <section className="w-full grid grid-cols-4 container pt-5 gap-2">
        {data.data.map((item) => (
          <Card
            key={item.id}
            className="relative overflow-hidden bg-transparent aspect-[2/3] flex flex-col justify-end p-5 group gap-3"
          >
            <h3 className="font-bold text-white">{item.title}</h3>
            <div className="flex gap-2 justify-end">
             {item?.document_url?.split(".").pop() === "pdf" && <ShowPDF url={item.document_url} />}
              <Button size={"icon"} asChild>
                <Link
                  download={true}
                  href={`${process.env.NEXT_PUBLIC_BASE_BUCKET_URL}${item.document_url}`}
                >
                  <DownloadIcon />
                </Link>
              </Button>
            </div>
            <Image
              fill
              src={`${process.env.NEXT_PUBLIC_BASE_BUCKET_URL}/${
               item.cover ?? "/default.webp"
              }`}
              alt="LPSK"
              className=" object-cover -z-20 group-hover:scale-125 transition-all duration-300 !m-0"
            />
            <div className="absolute left-0 top-0 w-full h-full bg-black/15 -z-10"></div>
          </Card>
        ))}
      </section>
      <section>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </main>
  );
};

export default PublikasiPage;
