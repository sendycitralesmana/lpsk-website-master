import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { AppContainer } from "@/components/ui/app-container";
import { DownloadCloudIcon, FileIcon } from "lucide-react";
import { Hero } from "../_components/Hero";

const AppPage = () => {
  return (
    <div className="space-y-10">
      <Hero title="Malumat Pelayanan" />
      <AppContainer>
          <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            <Card>
              <CardHeader className="flex justify-center place-items-center">
                <FileIcon size={50} />
              </CardHeader>
              <CardContent className="text-center">
                <p>
                  Maklumat
                </p>
              </CardContent>
              <CardFooter className="flex justify-center place-items-center">
                <Button asChild>
                  <a
                    download
                    href="/informasi-pelayanan/maklumat/maklumat.pdf"
                    className="flex gap-2"
                  >
                    <DownloadCloudIcon /> Unduh
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </AppContainer>
    </div>
  );
};

export default AppPage;
