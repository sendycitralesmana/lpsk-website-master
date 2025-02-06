// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { ShowPDF } from "@/components/feature/show-pdf";
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
// import { findManyPublication } from "@/server/publication";
// import { DownloadIcon, SearchIcon } from "lucide-react";
// import Image from "next/image";

// type PublikasiPageProps = {
//   params: Promise<{ slug: string }>;
//   searchParams: Promise<{ [key: string]: string }>;
// };

// const PublikasiPage = async ({ searchParams, params }: PublikasiPageProps) => {
//   const { slug } = await params;
//   const { search, page, per_page } = await searchParamsCache.parse(
//     searchParams
//   );
//   const data: { data: { [key: string]: any }[] } = await findManyPublication({
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
//               <BreadcrumbLink href="/profil">Publikasi</BreadcrumbLink>
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
//         <Input name="search" className="flex-1" placeholder="Search" defaultValue={search} />
//         <Button>
//           <SearchIcon />
//         </Button>
//       </form>
//       <section className="w-full grid grid-cols-4 container pt-5 gap-2">
//         {data.data.map((item) => (
//           <Card
//             key={item.id}
//             className="relative overflow-hidden bg-transparent aspect-[2/3] flex flex-col justify-end p-5 group gap-3"
//           >
//             <h3 className="font-bold text-white">{item.title}</h3>
//             <div className="flex gap-2 justify-end">
//              {item?.document_url?.split(".").pop() === "pdf" && <ShowPDF url={item.document_url} />}
//               <Button size={"icon"} asChild>
//                 <Link
//                   download={true}
//                   href={`${process.env.NEXT_PUBLIC_BASE_BUCKET_URL}${item.document_url}`}
//                 >
//                   <DownloadIcon />
//                 </Link>
//               </Button>
//             </div>
//             <Image
//               fill
//               src={`${process.env.NEXT_PUBLIC_BASE_BUCKET_URL}/${
//                item.cover ?? "/default.webp"
//               }`}
//               alt="LPSK"
//               className=" object-cover -z-20 group-hover:scale-125 transition-all duration-300 !m-0"
//             />
//             <div className="absolute left-0 top-0 w-full h-full bg-black/15 -z-10"></div>
//           </Card>
//         ))}
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

// export default PublikasiPage;


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
// import { findManyPublication } from "@/server/publication";
// import { SearchIcon } from "lucide-react";
// import Image from "next/image";

// type PublikasiPageProps = {
//   params: Promise<{ slug: string }>;
//   searchParams: Promise<{ [key: string]: string }>;
// };

// const ArtikelPage = async ({ params, searchParams }: PublikasiPageProps) => {
//   const { slug } = await params;
//   const { search, page = 1, per_page = 10 } = await searchParamsCache.parse(searchParams);

//   const { data, total, per_page: perPage, page: currentPage } = await findManyPublication({
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




// import { ShowPDF } from "@/components/feature/show-pdf";
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
// import { findManyPublication } from "@/server/publication";
// import { DownloadIcon, SearchIcon } from "lucide-react";
// import Image from "next/image";
// import PaginationComponent from "@/components/Pagination";

// type PublikasiPageProps = {
//   params: Promise<{ slug: string }>;
//   searchParams: Promise<{ [key: string]: string }>;
// };

// const PublikasiPage = async ({ searchParams, params }: PublikasiPageProps) => {
//   const { slug } = await params;
//   const { search, page = 1, per_page = 10 } = await searchParamsCache.parse(searchParams);

//   const data: { data: { [key: string]: any }[], total: number } = await findManyPublication({
//     search,
//     page,
//     per_page,
//     category_slug: slug,
//   });

//   const totalPages = Math.ceil(data.total / per_page);

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
//               <BreadcrumbLink href="/profil">Publikasi</BreadcrumbLink>
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
//         <Input name="search" className="flex-1" placeholder="Search" defaultValue={search} />
//         <Button>
//           <SearchIcon />
//         </Button>
//       </form>

//       <section className="w-full grid grid-cols-4 container pt-5 gap-2">
//         {data.data.map((item) => (
//           <Card
//             key={item.id}
//             className="relative overflow-hidden bg-transparent aspect-[2/3] flex flex-col justify-end p-5 group gap-3"
//           >
//             <h3 className="font-bold text-white">{item.title}</h3>
//             <div className="flex gap-2 justify-end">
//               {item?.document_url?.split(".").pop() === "pdf" && <ShowPDF url={item.document_url} />}
//               <Button size={"icon"} asChild>
//                 <Link download={true} href={`${process.env.NEXT_PUBLIC_BASE_BUCKET_URL}${item.document_url}`}>
//                   <DownloadIcon />
//                 </Link>
//               </Button>
//             </div>
//             <Image
//               fill
//               src={`${process.env.NEXT_PUBLIC_BASE_BUCKET_URL}/${item.cover ?? "/default.webp"}`}
//               alt="LPSK"
//               className="object-cover -z-20 group-hover:scale-125 transition-all duration-300 !m-0"
//             />
//             <div className="absolute left-0 top-0 w-full h-full bg-black/15 -z-10"></div>
//           </Card>
//         ))}
//       </section>

//       <section>
//         <PaginationComponent currentPage={page} totalPages={totalPages} />
//       </section>
//     </main>
//   );
// };

// export default PublikasiPage;

"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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
import { DownloadIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import PaginationComponent from "@/components/Pagination";
import { findManyPublication } from "@/server/publication"; // Function to fetch data
import Link from "next/link";

const PublikasiPage = ({ params }: any) => {
  const { slug } = params;
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // States for data and pagination
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Get current page and search term from URL query parameters
    const page = parseInt(searchParams.get("page") || "1");
    const searchQuery = searchParams.get("search") || "";

    // Fetch data when page or search term changes
    const fetchData = async () => {
      setLoading(true);
      const { data, total } = await findManyPublication({
        search: searchQuery,
        page,
        per_page: 10, // Adjust this based on your needs
        category_slug: slug,
      });

      setData(data);
      setTotalPages(Math.ceil(total / 10)); // Assuming the API returns a total number of records
      setCurrentPage(page);
      setSearch(searchQuery);
      setLoading(false);
    };

    fetchData();
  }, [searchParams, slug]); // Re-fetch when searchParams or slug changes

  const handleSearch = async () => {
    // Trigger data fetching on search
    setLoading(true);
    const page = 1; // Reset to page 1 on new search
    const { data, total } = await findManyPublication({
      search: search,
      page,
      per_page: 10,
      category_slug: slug,
    });

    setData(data);
    setTotalPages(Math.ceil(total / 10));
    setCurrentPage(page);
    setLoading(false);

    // Update URL with the search query
    router.push(`?page=1&search=${search}`);
  };

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
              <BreadcrumbPage>{slug.toUpperCase()}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-center font-bold">{slug.replace("-", " ").toUpperCase()}</h1>
      </section>

      <form className="container flex flex-row gap-2 pt-5">
        <Input
          name="search"
          className="flex-1"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={handleSearch}>
          <SearchIcon />
        </Button>
      </form>

      <section className="w-full grid grid-cols-4 container pt-5 gap-2">
        {loading ? (
          <div>Loading...</div>
        ) : (
          data.map((item) => (
            <Card
              key={item.id}
              className="relative overflow-hidden bg-transparent aspect-[2/3] flex flex-col justify-end p-5 group gap-3"
            >
              <h3 className="font-bold text-white">{item.title}</h3>
              <div className="flex gap-2 justify-end">
                {item?.document_url?.split(".").pop() === "pdf" && <ShowPDF url={item.document_url} />}
                <Button size={"icon"} asChild>
                  <Link download={true} href={`${process.env.NEXT_PUBLIC_BASE_BUCKET_URL}${item.document_url}`}>
                    <DownloadIcon />
                  </Link>
                </Button>
              </div>
              <Image
                fill
                src={`${process.env.NEXT_PUBLIC_BASE_BUCKET_URL}/${item.cover ?? "/default.webp"}`}
                alt="LPSK"
                className="object-cover -z-20 group-hover:scale-125 transition-all duration-300 !m-0"
              />
              <div className="absolute left-0 top-0 w-full h-full bg-black/15 -z-10"></div>
            </Card>
          ))
        )}
      </section>

      {/* Pagination Component */}
      <section>
        <PaginationComponent currentPage={currentPage} totalPages={totalPages} />
      </section>
    </main>
  );
};

export default PublikasiPage;
