import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type CountryFlag = {
  imgSrc: StaticImageData;
  name: string;
  href: string;
};

interface PropsType {
  countryFlags: CountryFlag[];
}

const FlagHoverComponent = ({ countryFlags }: PropsType) => {
  return (
    <div className="flex">
      {countryFlags.map((item, index) => (
        <div
          key={index}
          className="group relative"
          style={{ right: `${index * 7}px`, zIndex: index }}
        >
          <Link
            href={item.href}
            className="flex flex-col items-center justify-center gap-3.5"
          >
            {/* Country Name fade-in on hover */}
            <span className="text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {item.name}
            </span>

            {/* Flag hover lift and scale */}
            <div className="relative h-10 w-10 transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-110">
              <Image
                src={item.imgSrc}
                alt={`${item.name} eSIM`}
                fill
                sizes="auto"
                priority
                quality={70}
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FlagHoverComponent;
