"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { EyeIcon, XIcon } from "lucide-react";
import { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();


export function ShowPDF({ url }: { url: string }) {

    const [numPages, setNumPage] = useState(0)
    const [open, setOpen] = useState(false)

    const onLoadSucces = ({ numPages }: { numPages: number }) => {
        setNumPage(numPages)
    }

    return (
        <div>
            <Button size={'icon'} onClick={() => setOpen(!open)}><EyeIcon /></Button>
            {open && (
                <div className="fixed left-0 top-0 w-full h- overflow-clip bg-slate-800 bg-opacity-80 z-50 flex flex-col justify-center place-items-center">
                    <Button variant={'outline'} onClick={() =>setOpen(!open)} className=" top-5 right-5 absolute z-[100]">
                        <XIcon size={25}/>
                    </Button>
                    <Document onLoadError={(error) => console.error(error)} onLoadSuccess={(file) => onLoadSucces({ numPages: file.numPages })} file={{url}} className={cn(
                        " flex flex-col h-screen w-full justify-center place-items-center gap-3 relative ")}>
                        {/* @ts-expect-error flipbook */}
                        <HTMLFlipBook width={450} height={600} showCover={false} className="relative overflow-visible w-full h-screen" startPage={0}>
                            <div className="relative overflow-hidden" onClick={(event) => event.stopPropagation()}></div>
                            {Array.from(Array(numPages).keys()).map((a, i) => (
                                <div key={i} className="relative overflow-hidden" onClick={(event) => event.stopPropagation()}>
                                    <Page pageNumber={i + 1} width={355} height={500} scale={1} />
                                </div>
                            ))}
                        </HTMLFlipBook>
                    </Document>
                </div>
            )}
        </div>

    );
}