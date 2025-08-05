import { Country } from "@/helpers/generateSiteMap";
import { generateSlug } from "@/helpers/generateSlug";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PropsType {
  country: Country;
}

function StartingPriceCard({ country }: PropsType) {
  return (
    <Link
      prefetch={false}
      className="group flex justify-between rounded-lg border border-transparent bg-muted px-[1.06rem] py-[0.94rem] transition-all hover:scale-105 hover:border-primary hover:bg-background hover:shadow-2xl"
      href={
        country.slug
          ? `/esim/${country.slug}`
          : `/${generateSlug(country.name)}`
      }
    >
      <div className="flex items-center gap-3">
        <div className="relative h-[42px] w-[42px]">
          <Image
            src={country.image_url}
            alt={`${country.name} flag`}
            sizes="auto"
            fill
            className="shrink-0 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-body-base font-500">{country.name}</h3>
          <p className="text-sm">Starts at ${country.starts_at}</p>
        </div>
      </div>
      <div>
        <ArrowUpRight className="group-hover:rotate-45 group-hover:text-primary" />
      </div>
    </Link>
  );
}

export default StartingPriceCard;
