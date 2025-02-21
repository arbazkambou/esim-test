"use client";
import AuthImage from "../features/auth/login/AuthImage";
import LoginForm from "../features/auth/login/LoginForm";
import RegisterForm from "../features/auth/register/RegisterForm";
import { Card } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

function RegisterPage() {
  return (
    <section className="container mt-4 flex w-full justify-center rounded-[2.4rem] bg-muted py-16">
      <div className="grid w-[97%] xs:w-[95%] lg:w-[80%] xl:grid-cols-2">
        <AuthImage />
        <Card className="rounded-[2.4rem] px-[1.38rem] py-[2.5rem] shadow-lg xl:rounded-bl-none xl:rounded-tl-none xl:px-[3.44rem] xl:py-[3.94rem]">
          <Tabs defaultValue="login" className="flex flex-col gap-[1.5rem]">
            <div className="flex items-center justify-center">
              <TabsList className="flex w-full justify-between rounded-sm bg-primary-light p-1">
                <TabsTrigger
                  value="login"
                  className="w-full rounded-sm bg-transparent"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger
                  value="register"
                  className="w-full rounded-sm bg-transparent"
                >
                  Register
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="login">
              <LoginForm />
            </TabsContent>
            <TabsContent value="register">
              <RegisterForm />
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
}

export default RegisterPage;
