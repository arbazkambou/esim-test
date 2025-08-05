"use client";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname } from "next/navigation";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function AuthTabs() {
  const pathName = usePathname();
  const authTabs = [
    {
      label: "Login",
      href: "/login/",
      content: <LoginForm />,
    },
    {
      label: "Register",
      href: "/register/",
      content: <RegisterForm />,
    },
  ];
  return (
    <Tabs defaultValue={pathName} className="flex flex-col gap-[1.5rem]">
      <div className="flex items-center justify-center">
        <TabsList className="flex w-full justify-between rounded-sm bg-primary-light p-1">
          {authTabs.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              scroll={false}
              className="w-full"
            >
              <TabsTrigger
                value={item.href}
                className="bg-transparents w-full rounded-sm"
              >
                {item.label}
              </TabsTrigger>
            </Link>
          ))}
        </TabsList>
      </div>
      {authTabs.map((item, index) => (
        <TabsContent value={item.href} key={index}>
          {item.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}

export default AuthTabs;
