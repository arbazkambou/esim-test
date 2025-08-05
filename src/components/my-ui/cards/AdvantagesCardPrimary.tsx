import { Card } from "../../ui/card";

interface PropsType {
  icon?: React.ReactNode;
  title: string;
  body: string | React.ReactNode;
}

function AdvantagesCardPrimary({
  cardData,
  isPara,
}: {
  cardData: PropsType;
  isPara?: boolean;
}) {
  const { title, icon, body } = cardData;
  return (
    <Card className="flex flex-col gap-[0.81rem] rounded-md border bg-primary px-[1.5rem] pb-[1.88rem] pt-[2.38rem] text-background shadow-lg transition-all hover:scale-105 hover:border-primary">
      {cardData.icon && <div>{icon}</div>}
      {isPara ? (
        <p className="font-montserrat text-xl font-500">{title}</p>
      ) : (
        <h3 className="font-montserrat text-xl font-500">{title}</h3>
      )}

      <p className="text-body-base">{body}</p>
    </Card>
  );
}

export default AdvantagesCardPrimary;
