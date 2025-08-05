import { revalidatePath } from "next/cache";

//Call this api for on demand revalidation of statically generated pages
export async function GET(req: Request) {
  const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET;

  const { searchParams } = new URL(req.url);

  const secret = searchParams.get("secret");

  if (secret !== REVALIDATE_SECRET) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  revalidatePath("/", "page");
  revalidatePath("/esim", "page");
  revalidatePath("/regional", "page");
  revalidatePath("/global", "page");
  revalidatePath("/esim/[slug]", "page");
  revalidatePath("/regional/[slug]", "page");
  revalidatePath("/data-voice-sms", "page");
  revalidatePath("/data-voice-sms/regional", "page");
  revalidatePath("/international-esim", "page");
  revalidatePath("/[slug]", "page");
  revalidatePath("/blog", "page");
  revalidatePath("/blog/[category]", "page");
  revalidatePath("/blog/[category]/[slug]", "page");

  return Response.json({ revalidated: true });
}
