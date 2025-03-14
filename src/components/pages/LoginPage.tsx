"use client";

import AuthTabs from "../features/auth/AuthTabs";
import AuthImage from "../features/auth/login/AuthImage";
import { Card } from "../ui/card";

function LoginPage() {
  return (
    <section className="container mt-4 flex w-full justify-center rounded-[2.4rem] bg-muted py-16">
      <div className="grid w-[97%] place-content-center xs:w-[95%] lg:w-[90%] xl:grid-cols-2">
        <AuthImage />
        <Card className="rounded-[2.4rem] px-[1.5rem] py-[1.5rem] shadow-lg sm:px-[1.38rem] sm:py-[2.5rem] xl:rounded-bl-none xl:rounded-tl-none xl:px-[3.44rem] xl:py-[3.94rem]">
          <AuthTabs />
        </Card>
      </div>
    </section>
  );
}

export default LoginPage;
