"use client";
import { cardVariantPrimary } from "@/lib/animations";
import Reveal from "@/components/animations/Reveal";
import { generateSlug } from "@/helpers/generateSlug";
import { ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface PropsType {
  slug: string;
  name: string;
  imgSrc: StaticImageData;
  index?: number;
}
function RegionImageCard({ name, slug, imgSrc, index }: PropsType) {
  const pathName = usePathname();
  return (
    <Reveal variants={cardVariantPrimary} custom={index} className="w-full">
      <Link
        href={
          pathName === "/data-voice-sms/regional/"
            ? `/${generateSlug(slug)}`
            : slug
        }
        className="w-full"
      >
        <div className="group relative h-[200px] w-full overflow-hidden rounded-[0.625rem] transition-transform hover:scale-105">
          <div className="relative z-30 flex h-full flex-col justify-between text-background">
            <h3 className="ms-[1.2rem] mt-[0.5rem] text-start text-body-lg font-700">
              {name}
            </h3>
            <div className="mb-[1.5rem] me-[1.5rem] flex justify-end">
              <ArrowUpRight className="relative z-40 transition-transform group-hover:rotate-45" />
            </div>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-image-overlay"></div>

          {/* Background Image */}
          <Image
            src={imgSrc}
            alt={`eSIM for ${name}`}
            fill
            sizes="auto"
            className="object-cover transition-all group-hover:opacity-75 group-hover:shadow-2xl"
            quality={70}
          />
        </div>
      </Link>
    </Reveal>
  );
}

export default RegionImageCard;
