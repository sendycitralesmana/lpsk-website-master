"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { DownloadIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import api from "@/lib/axios"; // Assuming you have a configured axios instance
import Link from "next/link";
import { Separator } from "../ui/separator";

const NewsSection = () => {
  
  // Updated variable names
  const [artikel, setArtikel] = useState<any[]>([]); // Initialize as empty array
  const [informasi, setInformasi] = useState<any[]>([]); // Initialize as empty array
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Function to fetch both artikel and informasi
    const fetchData = async () => {
      setLoading(true);
      try {
        const [artikelResponse, informasiResponse] = await Promise.all([
          api.get("/news/latestArtikel"),
          api.get("/news/latestInformasi"),
        ]);
        setArtikel(artikelResponse.data.artikel || []); // Safeguard in case data is undefined
        setInformasi(informasiResponse.data.informasi || []); // Safeguard in case data is undefined
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async () => {
    if (searchTerm.trim()) {
      setLoading(true);
      try {
        const searchResponse = await Promise.all([
          api.get(`/information/search`, { params: { query: searchTerm } }),
          api.get(`/news/search`, { params: { query: searchTerm } }),
        ]);
        setArtikel(searchResponse[0].data.data || []);
        setInformasi(searchResponse[1].data.data || []);
      } catch (error) {
        console.error("Error searching data:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section className="w-full">
      <div className="grid grid-cols-3 gap-4 container">
        {/* <div className="col-span-1">
          <Card className="h-full w-full relative">
            <Image src={"/images/lpsk-lg.png"} fill alt="Random Image" />
          </Card>
        </div> */}
        <div className="col-span-1 hidden sm:block">
          <Card className="h-[350px] w-full relative">
            <Image src="/images/lpsk-lg.png" fill alt="Random Image" />
          </Card>
        </div>
        <div className="col-span-3 md:col-span-2">
          <Tabs defaultValue="news" className="w-full">
            <TabsList className="w-full bg-neutral-200">
              <TabsTrigger value="news" className="flex-1">
                Berita / Artikel
              </TabsTrigger>
              <TabsTrigger value="information" className="flex-1">
                Informasi
              </TabsTrigger>
            </TabsList>

            {/* Artikel Section */}
            <TabsContent value="news">
              <Card>
                <CardContent className="flex flex-col gap-4 p-4">
                  {loading ? (
                    <div>Loading...</div>
                  ) : (
                    artikel.map((item) => (
                      <Link key={item.id} href={`/id/berita/artikel/${item.id}`}>
                        <div className="p-2 rounded flex flex-col w-full gap-1 cursor-pointer group hover:bg-neutral-100 transition-colors duration-300">
                          <p className="font-bold group-hover:text-blue-900 transition-colors duration-300">
                            {item.title}
                          </p>
                          <small className="text-muted-foreground group-hover:text-blue-900 transition-colors duration-300">
                            {item.date}
                          </small>
                          <Separator />
                        </div>
                      </Link>
                    ))
                  )}
                  {/* <Button size={"sm"} className="w-fit">
                    Selengkapnya
                  </Button> */}
                  <Link
                    href={"/id/berita/artikel"}
                    className="w-fit flex items-center gap-2"
                  >
                    <Button size={"sm"} className="w-fit">
                      Selengkapnya
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Informasi Section */}
            <TabsContent value="information">
              <Card>
                <CardContent className="flex flex-col gap-4 p-4">
                  {loading ? (
                    <div>Loading...</div>
                  ) : (
                    informasi.map((item) => (
                      <Link key={item.id} href={`/id/berita/information/${item.id}`}>
                        <div className="p-2 rounded flex flex-col w-full gap-1 cursor-pointer group hover:bg-neutral-100 transition-colors duration-300">
                          <p className="font-bold group-hover:text-blue-900 transition-colors duration-300">
                            {item.title}
                          </p>
                          <small className="text-muted-foreground group-hover:text-blue-900 transition-colors duration-300">
                            {item.date}
                          </small>
                          <Separator />
                        </div>
                      </Link>
                    ))
                  )}
                  {/* <Button size={"sm"} className="w-fit">
                    Selengkapnya
                  </Button> */}
                  <Link
                    href={"/id/berita/informasi"}
                    className="w-fit flex items-center gap-2"
                  >
                    <Button size={"sm"} className="w-fit">
                      Selengkapnya
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export { NewsSection };







// "use client";

// import { Link } from "@/lib/i18n/routing";
// import { Card, CardContent } from "../ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
// import { Button } from "../ui/button";
// import { Separator } from "../ui/separator";
// import Image from "next/image";



// const NewsSection = () => {
//   return (
//     <section className="w-full">
//       <div className="grid grid-cols-3 gap-4 container">
//         <div className="col-span-1">
//           <Card className="h-full w-full relative">
//             <Image src={"https://picsum.photos/1000/1000"} fill alt="" />
//           </Card>
//         </div>
//         <div className="col-span-2">
//           <Tabs defaultValue="news" className="w-full">
//             <TabsList className="w-full bg-neutral-200">
//               <TabsTrigger value="news" className="flex-1">
//                 Informasi
//               </TabsTrigger>
//               <TabsTrigger value="information" className="flex-1">
//                 Berita / Artikel
//               </TabsTrigger>
//             </TabsList>
//             <TabsContent value="news">
//               <Card>
//                 <CardContent className="flex flex-col gap-4 p-4">
//                   <Link href={"/"}>
//                     <div className="p-2 rounded flex flex-col w-full gap-1 cursor-pointer group hover:bg-neutral-100 transition-colors duration-300">
//                       <p className="font-bold group-hover:text-blue-900 transition-colors duration-300">
//                         Lorem ipsum dolor sit amet consectetur, adipisicing
//                         elit. Inventore, dolores.
//                       </p>
//                       <small className=" text-muted-foreground group-hover:text-blue-900 transition-colors duration-300">
//                         10 Oktober 2023
//                       </small>
//                       <Separator />
//                     </div>
//                   </Link>
//                   <Link href={"/"}>
//                     <div className="p-2 rounded flex flex-col w-full gap-1 cursor-pointer group hover:bg-neutral-100 transition-colors duration-300">
//                       <p className="font-bold group-hover:text-blue-900 transition-colors duration-300">
//                         Lorem ipsum dolor sit amet consectetur, adipisicing
//                         elit. Inventore, dolores.
//                       </p>
//                       <small className=" text-muted-foreground group-hover:text-blue-900 transition-colors duration-300">
//                         10 Oktober 2023
//                       </small>
//                       <Separator />
//                     </div>
//                   </Link>
//                   <Link href={"/"}>
//                     <div className="p-2 rounded flex flex-col w-full gap-1 cursor-pointer group hover:bg-neutral-100 transition-colors duration-300">
//                       <p className="font-bold group-hover:text-blue-900 transition-colors duration-300">
//                         Lorem ipsum dolor sit amet consectetur, adipisicing
//                         elit. Inventore, dolores.
//                       </p>
//                       <small className=" text-muted-foreground group-hover:text-blue-900 transition-colors duration-300">
//                         10 Oktober 2023
//                       </small>
//                       <Separator />
//                     </div>
//                   </Link>
//                   <Link href={"/"}>
//                     <div className="p-2 rounded flex flex-col w-full gap-1 cursor-pointer group hover:bg-neutral-100 transition-colors duration-300">
//                       <p className="font-bold group-hover:text-blue-900 transition-colors duration-300">
//                         Lorem ipsum dolor sit amet consectetur, adipisicing
//                         elit. Inventore, dolores.
//                       </p>
//                       <small className=" text-muted-foreground group-hover:text-blue-900 transition-colors duration-300">
//                         10 Oktober 2023
//                       </small>
//                       <Separator />
//                     </div>
//                   </Link>
//                   <Button size={"sm"} className="w-fit">
//                     Selengkapnya
//                   </Button>
//                 </CardContent>
//               </Card>
//             </TabsContent>
//             <TabsContent value="information">
//               <Card>
//                 <CardContent className="flex flex-col gap-4 p-4">
//                   <Link href={"/"}>
//                     <div className="p-2 rounded flex flex-col w-full gap-1 cursor-pointer group hover:bg-neutral-100 transition-colors duration-300">
//                       <p className="font-bold group-hover:text-blue-900 transition-colors duration-300">
//                         Lorem ipsum dolor sit amet consectetur, adipisicing
//                         elit. Inventore, dolores.
//                       </p>
//                       <small className=" text-muted-foreground group-hover:text-blue-900 transition-colors duration-300">
//                         10 Oktober 2023
//                       </small>
//                       <Separator />
//                     </div>
//                   </Link>
//                   <Link href={"/"}>
//                     <div className="p-2 rounded flex flex-col w-full gap-1 cursor-pointer group hover:bg-neutral-100 transition-colors duration-300">
//                       <p className="font-bold group-hover:text-blue-900 transition-colors duration-300">
//                         Lorem ipsum dolor sit amet consectetur, adipisicing
//                         elit. Inventore, dolores.
//                       </p>
//                       <small className=" text-muted-foreground group-hover:text-blue-900 transition-colors duration-300">
//                         10 Oktober 2023
//                       </small>
//                       <Separator />
//                     </div>
//                   </Link>
//                   <Link href={"/"}>
//                     <div className="p-2 rounded flex flex-col w-full gap-1 cursor-pointer group hover:bg-neutral-100 transition-colors duration-300">
//                       <p className="font-bold group-hover:text-blue-900 transition-colors duration-300">
//                         Lorem ipsum dolor sit amet consectetur, adipisicing
//                         elit. Inventore, dolores.
//                       </p>
//                       <small className=" text-muted-foreground group-hover:text-blue-900 transition-colors duration-300">
//                         10 Oktober 2023
//                       </small>
//                       <Separator />
//                     </div>
//                   </Link>
//                   <Link href={"/"}>
//                     <div className="p-2 rounded flex flex-col w-full gap-1 cursor-pointer group hover:bg-neutral-100 transition-colors duration-300">
//                       <p className="font-bold group-hover:text-blue-900 transition-colors duration-300">
//                         Lorem ipsum dolor sit amet consectetur, adipisicing
//                         elit. Inventore, dolores.
//                       </p>
//                       <small className=" text-muted-foreground group-hover:text-blue-900 transition-colors duration-300">
//                         10 Oktober 2023
//                       </small>
//                       <Separator />
//                     </div>
//                   </Link>
//                   <Button size={"sm"} className="w-fit">
//                     Selengkapnya
//                   </Button>
//                 </CardContent>
//               </Card>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </div>
//     </section>
//   );
// };

// export { NewsSection };