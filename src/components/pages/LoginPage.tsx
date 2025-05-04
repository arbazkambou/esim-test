"use client";

import AuthImage from "../features/auth/AuthImage";
import AuthTabs from "../features/auth/AuthTabs";
import TrustpilotWidget from "../my-ui/shared/TrustpilotWidget";
import { Card } from "../ui/card";

function LoginPage() {
  return (
    <section className="container mt-4 flex w-full justify-center rounded-[2.4rem] bg-muted p-5 sm:p-10 xl:px-0 xl:py-16">
      <div className="grid w-full max-w-[1200px] xl:grid-cols-2">
        <AuthImage />
        <Card className="rounded-[2.4rem] px-[1.5rem] pb-[1.5rem] pt-[1rem] shadow-lg sm:px-[1.38rem] sm:py-[2.5rem] xl:rounded-bl-none xl:rounded-tl-none xl:px-[3.44rem] xl:py-[3.94rem] xl:pb-[3.94rem] xl:pt-[1.5rem]">
          <TrustpilotWidget className="mb-3 sm:mb-6" />

          {/* this component is responsible for showing login and register form based on user visietd route
             1. if route is login then it will render login form
             2. if route is register then it will render register form
           */}
          <AuthTabs />
        </Card>
      </div>
    </section>
  );
}

export default LoginPage;
