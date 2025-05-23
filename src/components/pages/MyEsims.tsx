"use client";

import { useAuth } from "@/providers/AuthProvider";
import { TabsContent } from "@radix-ui/react-tabs";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import {
  getDataOnlySims,
  getDataVoiceSims,
} from "@/services/purchase/purchaseApis";
import PendingSimDetail from "../features/sims/PendingSimDetail";
import { Button } from "../ui/button";
import { RefreshCcw } from "lucide-react";
import { useAppDispatch } from "@/redux/hooks";
import { clearCart } from "@/redux/slices/cartSlice";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import SimDetail from "../features/sims/SimDetail";
import SimDetailSkeleton from "../my-ui/fallbacks/SimDetailSkeleton";

function MyEsims() {
  const [isToasterRun, setIsToasterRun] = useState(false);

  const {
    data: dataOnlySims,
    isPending: isDataOnlySimsLoading,
    isFetching: isDataOnlySimsRefeching,
    refetch: refetchDataOnlySims,
  } = useQuery({
    queryKey: ["data-only-sims"],
    queryFn: getDataOnlySims,
  });

  const {
    data: dataVoiceSims,
    isPending: isDataVoiceSimsLoading,
    isFetching: isDataVoiceSimsRefeching,
    refetch: refetchDataVoiceSims,
  } = useQuery({
    queryKey: ["data-voice-sims"],
    queryFn: getDataVoiceSims,
  });

  const router = useRouter();

  const pathName = usePathname();

  const dispatch = useAppDispatch();

  const { isAuthLoading, isAuthenticated } = useAuth();

  const searchParams = useSearchParams();

  const status = searchParams.get("status");

  useEffect(function () {
    if (!isToasterRun && (status === "success" || status === "true")) {
      const referral = Cookies.get("referral");

      if (referral) {
        Cookies.remove("referral");
      }

      dispatch(clearCart());

      toast.success("Package has been purchase successfully.");

      setIsToasterRun(true);

      const params = new URLSearchParams(searchParams.toString());

      params.delete("status");

      const newQueryString = params.toString();

      const newUrl = newQueryString
        ? `${pathName}?${newQueryString}`
        : pathName;

      router.replace(newUrl, { scroll: false });
    } else if (status === "false" || status === "failed" || status === "fail") {
      toast.error("Payment process failed.");
    }
  }, []);

  useEffect(() => {
    if (!isAuthLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, isAuthLoading, router]);

  function handleRefresh() {
    refetchDataOnlySims();
    refetchDataVoiceSims();
  }

  const ifRefetching = isDataOnlySimsRefeching || isDataVoiceSimsRefeching;

  return (
    <>
      <Tabs defaultValue="data">
        <section className="container mt-16 flex flex-col gap-[1rem] xl:flex-row xl:justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-center font-montserrat text-h2-md font-600 xl:text-start xl:text-h2-xl">
              Sims Details
            </h1>
            <Button
              className="mt-2 rounded-full"
              onClick={handleRefresh}
              disabled={ifRefetching}
              size={"sm"}
            >
              {ifRefetching ? (
                <RefreshCcw className="animate-spin" />
              ) : (
                <RefreshCcw />
              )}
            </Button>
          </div>

          <TabsList className="flex items-center gap-2">
            <TabsTrigger value="data">Data Only Sims</TabsTrigger>
            <TabsTrigger value="voice">Data Voice Sims</TabsTrigger>
          </TabsList>
        </section>

        <div className="flex justify-end"></div>
        {/* data only sims */}
        <TabsContent value="data">
          {isDataOnlySimsLoading ? (
            <div className="container mt-[2rem] grid gap-[2rem] md:grid-cols-2 md:gap-x-[4rem] md:gap-y-[2rem] xl:grid-cols-3 xl:gap-x-[7rem] xl:gap-y-[3rem]">
              {Array.from({ length: 3 }).map((item, index) => (
                <SimDetailSkeleton key={index} />
              ))}
            </div>
          ) : (
            <>
              {/* pending sims section  */}
              {dataOnlySims && dataOnlySims.pending_packages.length > 0 && (
                <section className="container mt-10 flex flex-col gap-[1rem]">
                  <h2 className="text-center font-montserrat text-[2rem] font-600 xl:text-start">
                    Pending Sims
                  </h2>
                  <div className="mt-[2rem] grid gap-[2rem] md:grid-cols-2 md:gap-x-[4rem] md:gap-y-[2rem] xl:grid-cols-3 xl:gap-x-[7rem] xl:gap-y-[3rem]">
                    {dataOnlySims?.pending_packages.map((item, index) => (
                      <PendingSimDetail key={index} pendingPackage={item} />
                    ))}
                  </div>
                </section>
              )}

              {/* my sims section  */}
              {dataOnlySims && dataOnlySims.data.length > 0 ? (
                <section className="container mt-10 flex flex-col gap-[1rem]">
                  <h2 className="text-center font-montserrat text-[2rem] font-600 xl:text-start">
                    My Sims
                  </h2>

                  <div className="mt-[2rem] grid gap-[2rem] md:grid-cols-2 md:gap-x-[4rem] md:gap-y-[2rem] xl:grid-cols-3 xl:gap-x-[7rem] xl:gap-y-[3rem]">
                    {dataOnlySims?.data.map((item, index) => (
                      <SimDetail key={index} sim={item} />
                    ))}
                  </div>
                </section>
              ) : (
                <div className="container mt-16 flex h-[50vh] flex-col gap-[1.5rem]">
                  <h2 className="text-center font-montserrat text-[2rem] font-600 xl:text-start">
                    My Sims
                  </h2>
                  <p className="rounded-sm bg-primary/10 p-4 text-center">
                    No Sim Found
                  </p>
                </div>
              )}
            </>
          )}
        </TabsContent>

        {/* data voice sims  */}
        <TabsContent value="voice">
          {isDataVoiceSimsLoading ? (
            <div className="container mt-[2rem] grid gap-[2rem] md:grid-cols-2 md:gap-x-[4rem] md:gap-y-[2rem] xl:grid-cols-3 xl:gap-x-[7rem] xl:gap-y-[3rem]">
              {Array.from({ length: 3 }).map((item, index) => (
                <SimDetailSkeleton key={index} />
              ))}
            </div>
          ) : (
            <>
              {/* data voice pending sims section  */}
              {dataVoiceSims && dataVoiceSims.pending_packages.length > 0 && (
                <section className="container mt-10 flex flex-col gap-[1rem]">
                  <h2 className="text-center font-montserrat text-[2rem] font-600 xl:text-start">
                    Pending Sims
                  </h2>

                  <div className="mt-[2rem] grid gap-[2rem] md:grid-cols-2 md:gap-x-[4rem] md:gap-y-[2rem] xl:grid-cols-3 xl:gap-x-[7rem] xl:gap-y-[3rem]">
                    {dataVoiceSims.pending_packages.map((item, index) => (
                      <PendingSimDetail key={index} pendingPackage={item} />
                    ))}
                  </div>
                </section>
              )}

              {/* data voice my sims  */}
              {dataVoiceSims && dataVoiceSims.data.length > 0 ? (
                <section className="container mt-10 flex flex-col gap-[1rem]">
                  <h2 className="text-center font-montserrat text-[2rem] font-600 xl:text-start">
                    My Sims
                  </h2>

                  <div className="mt-[2rem] grid gap-[2rem] md:grid-cols-2 md:gap-x-[4rem] md:gap-y-[2rem] xl:grid-cols-3 xl:gap-x-[7rem] xl:gap-y-[3rem]">
                    {dataVoiceSims.data.map((item, index) => (
                      <SimDetail key={index} isDataVoice={true} sim={item} />
                    ))}
                  </div>
                </section>
              ) : (
                <div className="container mt-16 flex h-[50vh] flex-col gap-[1.5rem]">
                  <h2 className="text-center font-montserrat text-[2rem] font-600 xl:text-start">
                    My Sims
                  </h2>
                  <p className="rounded-sm bg-primary/10 p-4 text-center">
                    No Sim Found
                  </p>
                </div>
              )}
            </>
          )}
        </TabsContent>
      </Tabs>
    </>
  );
}

export default MyEsims;
