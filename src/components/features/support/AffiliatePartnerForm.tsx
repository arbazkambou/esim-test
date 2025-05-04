import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PartnerFormImage from "./PartnerFormImage";
import LoginForm from "../auth/LoginForm";
import RegisterForm from "../auth/RegisterForm";

function AffiliatePartnerForm() {
  return (
    <section className="container flex w-full justify-center">
      <div className="grid w-[97%] xs:w-[95%] lg:w-[90%] xl:grid-cols-2">
        <PartnerFormImage />
        <Card className="rounded-[2.4rem] px-[1.38rem] py-[2.5rem] shadow-lg xl:rounded-bl-none xl:rounded-tl-none xl:px-[3.44rem] xl:py-[3.94rem]">
          <Tabs defaultValue="register" className="flex flex-col gap-[1.5rem]">
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
              <LoginForm isAffiliate={true} />
            </TabsContent>
            <TabsContent value="register">
              <RegisterForm isAffiliate={true} />
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
}

export default AffiliatePartnerForm;
