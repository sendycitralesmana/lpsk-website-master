/* eslint-disable @typescript-eslint/no-explicit-any */
import { bucket } from "@/lib/server/bucket";
import mime from "mime";
import { NextRequest } from "next/server";
export const GET = async (
  req: NextRequest,
  { params }: {params: Promise<{ slug: string[] }>}
) => {
  const list = await params;
  const path = `/${list.slug.join("/")}`

  const call = async (): Promise<Buffer> => {
    const promise = new Promise<Buffer>(
      (resolve, reject) => {
        bucket.getObject("lpsk",path ).then((stream: any) => {
          const chunks: Buffer[] = [];
          stream.on("data", (chunk: any) => chunks.push(chunk));
          stream.once("end", () => {
            const data = Buffer.concat(chunks);
            resolve(data);
          });
          stream.once("error", reject);
        });
      }
    );
    return await promise;
  };

  const data = await call();

  const contentType = mime.getType(path);
  const response = new Response(data, {
    headers: {
      "Content-Type": contentType || "application/octet-stream",
    },
  });



  return response;
};
