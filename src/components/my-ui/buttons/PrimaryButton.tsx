import { Button } from "@/components/ui/button";
import { ArrowUpLeft } from "lucide-react";
import Link from "next/link";

interface PropsType {
  className?: string;
  href?: string;
  label: string;
}
function PrimaryButton({ className = "", href = "#", label }: PropsType) {
  return (
    <Link href={href}>
      <Button className={`group flex items-center gap-3 text-sm ${className}`}>
        <ArrowUpLeft
          className="transition group-hover:rotate-90 group-hover:text-foreground"
          size={20}
        />
        {label}
      </Button>
    </Link>
  );
}

export default PrimaryButton;
