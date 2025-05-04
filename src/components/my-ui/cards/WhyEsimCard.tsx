import { Card } from "../../ui/card";

interface PropsType {
  icon: React.ReactNode;
  title: string;
  body: string;
}

function WhyEsimCard({ cardData }: { cardData: PropsType }) {
  const { title, icon, body } = cardData;
  return (
    <Card className="shadow-myCard flex flex-col gap-[0.81rem] rounded-md border border-transparent px-[1.5rem] pb-[1.88rem] pt-[2.38rem] transition-all hover:scale-105 hover:cursor-pointer hover:border-primary">
      <div className="text-primary">{icon}</div>
      <h3 className="font-montserrat text-xl font-500 text-foreground">
        {title}
      </h3>
      <p className="text-body-base text-muted-foreground">{body}</p>
    </Card>
  );
}

export default WhyEsimCard;
