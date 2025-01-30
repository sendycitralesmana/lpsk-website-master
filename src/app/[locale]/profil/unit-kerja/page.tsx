import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

const PejabatPage = () => {
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
              <BreadcrumbPage>Unit Kerja</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>
      <section className=" container w-full space-y-10">
        <h1 className="text-2xl font-bold text-center">
          UNIT KERJA LEMBAGA PERLINDUNGAN SAKSI DAN KORBAN
        </h1>
        <div className="w-full grid grid-cols-4 gap-5">
          <Card className="col-span-4 p-10 text-center">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-center text-xl font-bold">
                  Sekretariat Jenderal
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsam modi ab quibusdam molestias, voluptates, ex adipisci
                  suscipit autem explicabo eaque quasi esse iste nam. Vitae
                  asperiores quia fuga adipisci sunt commodi deserunt atque
                  nulla consequuntur temporibus suscipit, magnam illum quo
                  distinctio ipsam totam aperiam corporis dolore. Minus iusto
                  saepe alias?
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          <Card className="col-span-1 p-10 text-center h-fit">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-center text-xl font-bold">
                  Biro Penelaahan Permohonan
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsam modi ab quibusdam molestias, voluptates, ex adipisci
                  suscipit autem explicabo eaque quasi esse iste nam. Vitae
                  asperiores quia fuga adipisci sunt commodi deserunt atque
                  nulla consequuntur temporibus suscipit, magnam illum quo
                  distinctio ipsam totam aperiam corporis dolore. Minus iusto
                  saepe alias?
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          <Card className="col-span-1 p-10 text-center h-fit">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-center text-xl font-bold">
                  Biro Pemenuhan Hak Saksi dan Korban
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsam modi ab quibusdam molestias, voluptates, ex adipisci
                  suscipit autem explicabo eaque quasi esse iste nam. Vitae
                  asperiores quia fuga adipisci sunt commodi deserunt atque
                  nulla consequuntur temporibus suscipit, magnam illum quo
                  distinctio ipsam totam aperiam corporis dolore. Minus iusto
                  saepe alias?
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          <Card className="col-span-1 p-10 text-center h-fit">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-center text-xl font-bold">
                  Biro Hukum, Kerja Sama dan Hubungan Masyarakat
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsam modi ab quibusdam molestias, voluptates, ex adipisci
                  suscipit autem explicabo eaque quasi esse iste nam. Vitae
                  asperiores quia fuga adipisci sunt commodi deserunt atque
                  nulla consequuntur temporibus suscipit, magnam illum quo
                  distinctio ipsam totam aperiam corporis dolore. Minus iusto
                  saepe alias?
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          <Card className="col-span-1 p-10 text-center h-fit">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-center text-xl font-bold">
                  Biro Umum dan Kepegawaian
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsam modi ab quibusdam molestias, voluptates, ex adipisci
                  suscipit autem explicabo eaque quasi esse iste nam. Vitae
                  asperiores quia fuga adipisci sunt commodi deserunt atque
                  nulla consequuntur temporibus suscipit, magnam illum quo
                  distinctio ipsam totam aperiam corporis dolore. Minus iusto
                  saepe alias?
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default PejabatPage;
