/* eslint-disable @typescript-eslint/no-explicit-any */
import { ShowPDF } from "@/components/feature/show-pdf";
import { AppContainer } from "@/components/ui/app-container";
import { Badge } from "@/components/ui/badge";
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
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Link as RouteLink } from "@/lib/i18n/routing";
// import { Link as NextLink } from "next/navigation";
import { findManyNews, findNews } from "@/server/news";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ArtikelPageProps = {
  params: Promise<{
    id: string;
    slug: string;
  }>;
};

const ArtikelPage = async ({ params }: ArtikelPageProps) => {
  const { id, slug } = await params;
  const data: any = await findNews(id);
  const references: { data: [{ [key: string]: any }] } = await findManyNews({
    search: "",
    page: 1,
    per_page: 6,
    category_slug: slug,
  });

  const addSlashIfNotExist = (str: string) => {
    if (str.substring(0, 1) !== "/") {
      return `/${str}`;
    }
    return str;
  };

  return (
    <main className="w-full">
      <section className="w-full aspect-[21/9] flex place-items-center justify-center relative">
        <Breadcrumb className="pt-5 absolute top-0 left-0">
          <BreadcrumbList className="m-0 text-white">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/berita">Berita</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white">Rilis</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_BUCKET_URL}${addSlashIfNotExist(
            data?.cover ?? "/default.webp"
          )}`}
          alt="image"
          fill
          className="object-cover h-full w-full -z-20"
        />
        <div className="absolute left-0 top-0 w-full h-full bg-black/15 -z-10"></div>
        {/* <h1 className="text-center font-bold text-white">{data?.title}</h1> */}
      </section>
      <AppContainer className="flex flex-col gap-3 pt-5">
        <h2 className="font-bold">{data?.title}</h2>
        <small>{data?.created_at}</small>
        <small>Diposting oleh {data?.user?.name ?? "Admin"}</small>
        <article className="" dangerouslySetInnerHTML={{ __html: data?.content ?? "" }} />
        {data?.documents && data?.documents.length > 0 && (
          <Table>
            <TableBody>
              {data?.documents?.map((item: any) => (
                <TableRow key={item.id}>
                  <TableCell className="font-bold">{item.name}</TableCell>
                  <TableCell className="flex gap-3">
                    <ShowPDF
                      url={
                        process.env.NEXT_PUBLIC_BASE_BUCKET_URL +
                        addSlashIfNotExist(item.url)
                      }
                    />
                    <Button size={"icon"} asChild>
                      <Link
                        target="_blank"
                        download={true}
                        href={`${
                          process.env.NEXT_PUBLIC_BASE_BUCKET_URL
                        }${addSlashIfNotExist(item.url)}`}
                      >
                        <DownloadIcon />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
        {data?.images && data?.images.length > 0 && (
          <div className="gap-3 grid grid-cols-1 md:grid-cols-4">
            {data?.images?.map((item: any) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded aspect-video lg:aspect-square"
              >
                <Image
                  src={`${
                    process.env.NEXT_PUBLIC_BASE_BUCKET_URL +
                    addSlashIfNotExist(item.url)
                  }`}
                  alt="image"
                  fill
                  className="object-cover"
                />
                <Button
                  size={"icon"}
                  asChild
                  className="absolute top-2 right-2"
                >
                  <Link
                    target="_blank"
                    download={true}
                    href={`${
                      process.env.NEXT_PUBLIC_BASE_BUCKET_URL
                    }${addSlashIfNotExist(item.url)}`}
                  >
                    <DownloadIcon />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        )}
        {data?.videos && data?.videos.length > 0 && (
          <div className="gap-3 grid grid-cols-1 md:grid-cols-2">
            {data?.videos?.map((item: any) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded aspect-video lg:aspect-square"
              >
                <video
                  controls
                  className="object-cover rounded"
                  src={`${
                    process.env.NEXT_PUBLIC_BASE_BUCKET_URL +
                    addSlashIfNotExist(item.url)
                  }`}
                />
              </div>
            ))}
          </div>
        )}
      </AppContainer>
      <AppContainer className="w-full grid grid-cols-1 lg:grid-cols-3 gap-2">
        {references.data.map((item) => (
          <RouteLink key={item.id} href={`/berita/${slug}/${item.id}`}>
            <Card className="relative overflow-hidden bg-transparent aspect-[3/2] flex flex-col justify-end p-5 group gap-3">
              <Badge
                className="w-fit
              "
              >
                <small>{item.created_at}</small>
              </Badge>
              <h3 className="font-bold text-white">
                {item?.title?.slice(0, 50)}
              </h3>
              <Image
                fill
                src={`${process.env.NEXT_PUBLIC_BASE_BUCKET_URL}${
                  data?.cover ?? "/default.webp"
                }`}
                alt="LPSK"
                className=" object-cover -z-20 group-hover:scale-125 transition-all duration-300"
              />
              <div className="absolute left-0 top-0 w-full h-full bg-black/15 -z-10"></div>
            </Card>
          </RouteLink>
        ))}
      </AppContainer>
    </main>
  );
};

export default ArtikelPage;
