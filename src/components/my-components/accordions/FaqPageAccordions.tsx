import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";

interface PropsType {
  title: string;
  body: string | React.ReactNode;
}
function FaqPageAccordions({ data }: { data: PropsType[] }) {
  return (
    <div className="mt-12">
      <Accordion type="multiple" className="grid gap-y-4">
        {data.map((item, index) => (
          <AccordionItem
            value={`${index}`}
            key={index}
            className="group h-full rounded-lg border-2 border-transparent transition-all data-[state=open]:border-primary data-[state=open]:bg-muted"
          >
            <AccordionTrigger className="text-body-md font-500 transition-all group-hover:text-primary data-[state=open]:text-primary xl:text-body-lg">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-body-sm text-muted-foreground xl:text-body-md">
              {item.body}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default FaqPageAccordions;
