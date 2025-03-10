/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Badge } from "@/components/ui/badge";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
// import { Link } from "@/lib/i18n/routing";
// import { searchParamsCache } from "@/lib/server/search-params";
// import { findManyNews } from "@/server/news";
// import { SearchIcon } from "lucide-react";
// import Image from "next/image";

// type ArtikelPageProps = {
//   params: Promise<{ slug: string }>;
//   searchParams: Promise<{ [key: string]: string }>;
// };

// const ArtikelPage = async ({ params, searchParams }: ArtikelPageProps) => {
//   const { slug } = await params;
//   const { search, page, per_page } = await searchParamsCache.parse(
//     searchParams
//   );
//   const data: { data: [{ [key: string]: any }] } = await findManyNews({
//     search,
//     page,
//     per_page,
//     category_slug: slug,
//   });
//   return (
//     <main className="w-full">
//       <section className="w-full aspect-[21/4] bg-primary-foreground flex place-items-center justify-center relative">
//         <Breadcrumb className="pt-5 absolute top-0 left-0">
//           <BreadcrumbList className="m-0">
//             <BreadcrumbItem>
//               <BreadcrumbLink href="/">Home</BreadcrumbLink>
//             </BreadcrumbItem>
//             <BreadcrumbSeparator />
//             <BreadcrumbItem>
//               <BreadcrumbLink href="/berita">
//                 {slug.replace("-", " ").toUpperCase()}
//               </BreadcrumbLink>
//             </BreadcrumbItem>
//             <BreadcrumbSeparator />
//             <BreadcrumbItem>
//               <BreadcrumbPage>{slug.toUpperCase()}</BreadcrumbPage>
//             </BreadcrumbItem>
//           </BreadcrumbList>
//         </Breadcrumb>
//         <h1 className="text-center font-bold">{slug.replace("-", " ").toUpperCase()}</h1>
//       </section>
//       <form className="container flex flex-row gap-2 pt-5">
//         <Input name="search" className="flex-1" placeholder="Search" />
//         <Button>
//           <SearchIcon />
//         </Button>
//       </form>
//       <section className="container w-full">
//         <section className="w-full grid grid-cols-1 lg:grid-cols-3 pt-5 gap-2">
//           {data.data.map((item) => (
//             <Link key={item.id} href={`/berita/${slug}/${item.id}`}>
//               <Card className="relative overflow-hidden bg-transparent aspect-[3/2] flex flex-col justify-end p-5 group gap-3">
//                 <Badge
//                   className="w-fit
//               "
//                 >
//                   <small>{item.created_at}</small>
//                 </Badge>
//                 <h3 className="font-bold text-white">{item?.title?.slice(0, 50)}</h3>
//                 <Image
//                   fill
//                   src={`${process.env.NEXT_PUBLIC_BASE_BUCKET_URL}${
//                     item.cover ?? "/default.webp"
//                   }`}
//                   alt="LPSK"
//                   className=" object-cover -z-20 group-hover:scale-125 transition-all duration-300"
//                 />
//                 <div className="absolute left-0 top-0 w-full h-full bg-black/15 -z-10"></div>
//               </Card>
//             </Link>
//           ))}
//         </section>
//       </section>
//       <section>
//         <Pagination>
//           <PaginationContent>
//             <PaginationItem>
//               <PaginationPrevious href="#" />
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationLink href="#">1</PaginationLink>
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationEllipsis />
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationNext href="#" />
//             </PaginationItem>
//           </PaginationContent>
//         </Pagination>
//       </section>
//     </main>
//   );
// };

// export default ArtikelPage;


// import { useState, useEffect } from "react";
// import { Badge } from "@/components/ui/badge";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
// import { Link } from "@/lib/i18n/routing";
// import { searchParamsCache } from "@/lib/server/search-params";
// import { findManyNews } from "@/server/news";
// import { SearchIcon } from "lucide-react";
// import Image from "next/image";

// type ArtikelPageProps = {
//   params: Promise<{ slug: string }>;
//   searchParams: Promise<{ [key: string]: string }>;
// };

// const ArtikelPage = async ({ params, searchParams }: ArtikelPageProps) => {
//   const { slug } = await params;
//   const { search, page = 1, per_page = 10 } = await searchParamsCache.parse(searchParams);

//   const { data, total, per_page: perPage, page: currentPage } = await findManyNews({
//     search,
//     page,
//     per_page,
//     category_slug: slug,
//   });

//   const totalPages = Math.ceil(total / perPage);

//   return (
//     <main className="w-full">
//       <section className="w-full aspect-[21/4] bg-primary-foreground flex place-items-center justify-center relative">
//         <Breadcrumb className="pt-5 absolute top-0 left-0">
//           <BreadcrumbList className="m-0">
//             <BreadcrumbItem>
//               <BreadcrumbLink href="/">Home</BreadcrumbLink>
//             </BreadcrumbItem>
//             <BreadcrumbSeparator />
//             <BreadcrumbItem>
//               <BreadcrumbLink href="/berita">
//                 {slug.replace("-", " ").toUpperCase()}
//               </BreadcrumbLink>
//             </BreadcrumbItem>
//             <BreadcrumbSeparator />
//             <BreadcrumbItem>
//               <BreadcrumbPage>{slug.toUpperCase()}</BreadcrumbPage>
//             </BreadcrumbItem>
//           </BreadcrumbList>
//         </Breadcrumb>
//         <h1 className="text-center font-bold">{slug.replace("-", " ").toUpperCase()}</h1>
//       </section>
//       <form className="container flex flex-row gap-2 pt-5">
//         <Input name="search" className="flex-1" placeholder="Search" />
//         <Button>
//           <SearchIcon />
//         </Button>
//       </form>
//       <section className="container w-full">
//         <section className="w-full grid grid-cols-1 lg:grid-cols-3 pt-5 gap-2">
//           {data.map((item) => (
//             <Link key={item.id} href={`/berita/${slug}/${item.id}`}>
//               <Card className="relative overflow-hidden bg-transparent aspect-[3/2] flex flex-col justify-end p-5 group gap-3">
//                 <Badge>
//                   <small>{item.created_at}</small>
//                 </Badge>
//                 <h3 className="font-bold text-white">{item?.title?.slice(0, 50)}</h3>
//                 <Image
//                   fill
//                   src={`${process.env.NEXT_PUBLIC_BASE_BUCKET_URL}${item.cover ?? "/default.webp"}`}
//                   alt="LPSK"
//                   className="object-cover -z-20 group-hover:scale-125 transition-all duration-300"
//                 />
//                 <div className="absolute left-0 top-0 w-full h-full bg-black/15 -z-10"></div>
//               </Card>
//             </Link>
//           ))}
//         </section>
//       </section>
//       <section>
//         <Pagination>
//           <PaginationContent>
//             {/* Tombol Previous */}
//             <PaginationItem>
//               <PaginationPrevious
//                 href={`?page=${Math.max(currentPage - 1, 1)}&per_page=${perPage}&search=${search || ''}`}
//                 disabled={currentPage === 1}
//               />
//             </PaginationItem>

//             {/* Halaman Sebelumnya */}
//             {[...Array(totalPages).keys()].map((pageIndex) => (
//               <PaginationItem key={pageIndex}>
//                 <PaginationLink
//                   href={`?page=${pageIndex + 1}&per_page=${perPage}&search=${search || ''}`}
//                   isActive={pageIndex + 1 === currentPage}
//                 >
//                   {pageIndex + 1}
//                 </PaginationLink>
//               </PaginationItem>
//             ))}

//             {/* Tombol Next */}
//             <PaginationItem>
//               <PaginationNext
//                 href={`?page=${Math.min(currentPage + 1, totalPages)}&per_page=${perPage}&search=${search || ''}`}
//                 disabled={currentPage === totalPages}
//               />
//             </PaginationItem>
//           </PaginationContent>
//         </Pagination>
//       </section>
//     </main>
//   );
// };

// export default ArtikelPage;


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
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { searchParamsCache } from "@/lib/server/search-params";
import { findManyNews } from "@/server/news";
import { Link } from "@/lib/i18n/routing";
import PaginationComponent from "@/components/Pagination";

type ArtikelPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string }>;
};

const ArtikelPage = async ({ params, searchParams }: ArtikelPageProps) => {
  const { slug } = await params;
  const { search, page = 1, per_page = 10 } = await searchParamsCache.parse(searchParams);

  const data: { data: [{ [key: string]: any }], total: number } = await findManyNews({
    search,
    page,
    per_page,
    category_slug: slug,
  });

  // Calculate total pages from total count of items
  const totalPages = Math.ceil(data.total / per_page);

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
              <BreadcrumbLink href="/berita">
                {slug.replace("-", " ").toUpperCase()}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{slug.toUpperCase()}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-center font-bold">{slug.replace("-", " ").toUpperCase()}</h1>
      </section>

      <form className="container flex flex-row gap-2 pt-5">
        <Input name="search" className="flex-1" placeholder="Search" />
        <Button>
          <SearchIcon />
        </Button>
      </form>

      <section className="container w-full">
        <section className="w-full grid grid-cols-1 lg:grid-cols-3 pt-5 gap-2">
          {data.data.map((item) => (
            <Link key={item.id} href={`/berita/${slug}/${item.id}`}>
              <Card className="relative overflow-hidden bg-transparent aspect-[3/2] flex flex-col justify-end p-5 group gap-3">
                <Badge>
                  <small>{item.created_at}</small>
                </Badge>
                <h3 className="font-bold text-white">{item?.title?.slice(0, 50)}</h3>
                {/* <Image
                  fill
                  src={`${process.env.NEXT_PUBLIC_BASE_BUCKET_URL}${item.cover ?? "/default.webp"}`}
                  alt="LPSK"
                  className="object-cover -z-20 group-hover:scale-125 transition-all duration-300"
                /> */}
                <Image
                  fill
                  src={item.cover != null
                    ? `${process.env.NEXT_PUBLIC_BASE_BUCKET_URL}/${item.cover}`
                    : '/images/default.webp'
                  }
                  alt="LPSK"
                  className="object-cover -z-20 group-hover:scale-125 transition-all duration-300 !m-0"
                /> 
                <div className="absolute left-0 top-0 w-full h-full bg-black/15 -z-10"></div>
              </Card>
            </Link>
          ))}
        </section>
      </section>

      {/* Pagination Component */}
      <section>
        <PaginationComponent currentPage={page} totalPages={totalPages} />
      </section>
    </main>
  );
};

export default ArtikelPage;
