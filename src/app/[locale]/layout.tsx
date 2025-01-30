import { Accessbility } from "@/components/feature/shared/accessbility";
import { BaseLayout } from "@/components/feature/shared/base-layout";
import { Header } from "@/components/feature/shared/header";
import { FilterStoreProvider } from "@/components/provider/filter-store";
import { FontStoreProvider } from "@/components/provider/font-store";
import { ThemeProvider } from "@/components/provider/theme";
import { ToolStoreProvider } from "@/components/provider/tool-store";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import localFont from "next/font/local";
import "../globals.css";
import { Footer } from "@/components/feature/shared/footer";
import { ReactQueryProvider } from "@/components/provider/react-query";
import { NuqsAdapter } from "nuqs/adapters/next/app";
const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Lembaga Perlindungan Saksi dan Korban",
  description: "Lembaga Perlindungan Saksi dan Korban",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <ReactQueryProvider>
        <NuqsAdapter>
          <FilterStoreProvider>
            <FontStoreProvider>
              <ToolStoreProvider>
                <BaseLayout
                  className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                >
                  <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                  >
                    <NextIntlClientProvider locale={locale} messages={messages}>
                      <ScrollArea className="h-screen relative">
                        <Header />
                        {children}
                        <Footer />
                      </ScrollArea>
                      <Accessbility />
                    </NextIntlClientProvider>
                  </ThemeProvider>
                </BaseLayout>
              </ToolStoreProvider>
            </FontStoreProvider>
          </FilterStoreProvider>
        </NuqsAdapter>
      </ReactQueryProvider>
    </html>
  );
}
