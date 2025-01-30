import { ApplicationExternalSection } from "@/components/feature/application-external-section";
import { ApplicationSection } from "@/components/feature/application-internal-section";
import { ClientPreview } from "@/components/feature/client-preview";
import { Hero } from "@/components/feature/hero";
import { InformationSection } from "@/components/feature/information-preview";
import { NewsSection } from "@/components/feature/news-preview";
import { PublicationPreview } from "@/components/feature/publication-preview";
import { StatisticsPreview } from "@/components/feature/statistic-preview";
import { findManyHighlight } from "@/server/highlight";

export default async function Home() {
  const carousel = await findManyHighlight({
    page: 1,
    per_page: 10,
    category_slug: "carousel",
  });

  return (
    <main className="w-full space-y-16">
      <Hero data={carousel} />
      <InformationSection />
      <NewsSection />
      <ApplicationSection />
      <PublicationPreview />
      <StatisticsPreview />
      <ApplicationExternalSection />
      <ClientPreview />
    </main>
  );
}
