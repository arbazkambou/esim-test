import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PropsType {
  title?: string;
  paras: string[];
}

function PageTextCard({
  cardData,
  className,
}: {
  cardData: PropsType;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "flex flex-col gap-6 px-[2.62rem] py-[2.31rem] shadow-md",
        className,
      )}
    >
      {cardData.title && (
        <h2 className="font-montserrat text-h2-base font-600 text-primary">
          {cardData.title}
        </h2>
      )}

      {cardData.paras.map((item, index) => (
        <p className="text-body-base xl:text-body-md" key={index}>
          {item}
        </p>
      ))}
    </Card>
  );
}

export default PageTextCard;
