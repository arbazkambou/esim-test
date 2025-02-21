import { cn } from "@/lib/utils";
import Link from "next/link";

interface PropsType {
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top" | "";
}

function FooterLink({ children, href, className, target = "" }: PropsType) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center gap-4 text-foreground-light transition-all hover:text-primary hover:underline hover:underline-offset-4",
        className,
      )}
      target={target}
    >
      {children}
    </Link>
  );
}

export default FooterLink;
