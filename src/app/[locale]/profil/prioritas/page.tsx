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
import { Link } from "@/lib/i18n/routing";

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
              <BreadcrumbPage>Roadmap & Rencana Strategis</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>
      <section className="container space-y-10">
        <h1 className="text-2xl font-bold">TINDAK PIDANA PRIORITAS</h1>
        <ul className=" list-decimal pl-5">
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Saepe, incidunt
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  suscipit doloremque neque quasi excepturi minima at mollitia
                  architecto esse nulla? Dignissimos, repudiandae! Aspernatur,
                  ratione doloremque a ducimus illo corporis optio mollitia
                  possimus. Facilis tempora est ad eius, iste exercitationem
                  beatae aspernatur impedit expedita nemo dolore cupiditate
                  earum doloribus veniam quos reprehenderit? Molestiae, tempora
                  magnam. Veritatis aut ipsam nam accusamus perferendis officiis
                  architecto reprehenderit accusantium aperiam amet illo ab,
                  pariatur impedit hic eaque libero quod suscipit alias
                  mollitia, repellat aliquid ullam cum temporibus labore. Velit
                  deleniti rem maiores natus omnis, assumenda reprehenderit
                  expedita quis similique modi, repellendus sapiente, soluta ea.
                  Dolores sit at modi ipsa asperiores possimus consequuntur
                  iusto repellat reprehenderit! Saepe officiis cum ratione,
                  incidunt in sapiente eaque possimus repellendus, nesciunt
                  voluptatibus suscipit mollitia? Explicabo, eligendi? Nisi
                  voluptate, quasi earum officiis, corrupti dolorem illum alias
                  deserunt necessitatibus quod eaque illo delectus commodi
                  maxime, doloremque amet obcaecati maiores a voluptates sunt!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Saepe, incidunt
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  suscipit doloremque neque quasi excepturi minima at mollitia
                  architecto esse nulla? Dignissimos, repudiandae! Aspernatur,
                  ratione doloremque a ducimus illo corporis optio mollitia
                  possimus. Facilis tempora est ad eius, iste exercitationem
                  beatae aspernatur impedit expedita nemo dolore cupiditate
                  earum doloribus veniam quos reprehenderit? Molestiae, tempora
                  magnam. Veritatis aut ipsam nam accusamus perferendis officiis
                  architecto reprehenderit accusantium aperiam amet illo ab,
                  pariatur impedit hic eaque libero quod suscipit alias
                  mollitia, repellat aliquid ullam cum temporibus labore. Velit
                  deleniti rem maiores natus omnis, assumenda reprehenderit
                  expedita quis similique modi, repellendus sapiente, soluta ea.
                  Dolores sit at modi ipsa asperiores possimus consequuntur
                  iusto repellat reprehenderit! Saepe officiis cum ratione,
                  incidunt in sapiente eaque possimus repellendus, nesciunt
                  voluptatibus suscipit mollitia? Explicabo, eligendi? Nisi
                  voluptate, quasi earum officiis, corrupti dolorem illum alias
                  deserunt necessitatibus quod eaque illo delectus commodi
                  maxime, doloremque amet obcaecati maiores a voluptates sunt!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Saepe, incidunt
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  suscipit doloremque neque quasi excepturi minima at mollitia
                  architecto esse nulla? Dignissimos, repudiandae! Aspernatur,
                  ratione doloremque a ducimus illo corporis optio mollitia
                  possimus. Facilis tempora est ad eius, iste exercitationem
                  beatae aspernatur impedit expedita nemo dolore cupiditate
                  earum doloribus veniam quos reprehenderit? Molestiae, tempora
                  magnam. Veritatis aut ipsam nam accusamus perferendis officiis
                  architecto reprehenderit accusantium aperiam amet illo ab,
                  pariatur impedit hic eaque libero quod suscipit alias
                  mollitia, repellat aliquid ullam cum temporibus labore. Velit
                  deleniti rem maiores natus omnis, assumenda reprehenderit
                  expedita quis similique modi, repellendus sapiente, soluta ea.
                  Dolores sit at modi ipsa asperiores possimus consequuntur
                  iusto repellat reprehenderit! Saepe officiis cum ratione,
                  incidunt in sapiente eaque possimus repellendus, nesciunt
                  voluptatibus suscipit mollitia? Explicabo, eligendi? Nisi
                  voluptate, quasi earum officiis, corrupti dolorem illum alias
                  deserunt necessitatibus quod eaque illo delectus commodi
                  maxime, doloremque amet obcaecati maiores a voluptates sunt!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Saepe, incidunt
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  suscipit doloremque neque quasi excepturi minima at mollitia
                  architecto esse nulla? Dignissimos, repudiandae! Aspernatur,
                  ratione doloremque a ducimus illo corporis optio mollitia
                  possimus. Facilis tempora est ad eius, iste exercitationem
                  beatae aspernatur impedit expedita nemo dolore cupiditate
                  earum doloribus veniam quos reprehenderit? Molestiae, tempora
                  magnam. Veritatis aut ipsam nam accusamus perferendis officiis
                  architecto reprehenderit accusantium aperiam amet illo ab,
                  pariatur impedit hic eaque libero quod suscipit alias
                  mollitia, repellat aliquid ullam cum temporibus labore. Velit
                  deleniti rem maiores natus omnis, assumenda reprehenderit
                  expedita quis similique modi, repellendus sapiente, soluta ea.
                  Dolores sit at modi ipsa asperiores possimus consequuntur
                  iusto repellat reprehenderit! Saepe officiis cum ratione,
                  incidunt in sapiente eaque possimus repellendus, nesciunt
                  voluptatibus suscipit mollitia? Explicabo, eligendi? Nisi
                  voluptate, quasi earum officiis, corrupti dolorem illum alias
                  deserunt necessitatibus quod eaque illo delectus commodi
                  maxime, doloremque amet obcaecati maiores a voluptates sunt!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

        </ul>
      </section>
    </main>
  );
};

export default PejabatPage;
