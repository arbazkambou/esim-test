"use client";

import RedeemForm from "@/components/features/support/RedeemForm";
import PagesHero from "@/components/my-ui/heros/PagesHero";
import { Card } from "@/components/ui/card";
import { redeemSimUsage } from "@/services/purchase/purchaseApis";
import { SimUsage } from "@/types/purchase/SimUsage";
import { useMutation } from "@tanstack/react-query";
import { ChevronRight, Dot } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import EsimDetailsPage from "./EsimDetailsPage";

function RedeemPage() {
  const [localSimUsage, setLocalSimUsage] = useState<SimUsage | null>(null);

  const whatWillYouGetText = {
    title: "✅ What You’ll Get",
    listItems: [
      {
        type: "text",
        text: "QR Code: Ready to scan and activate",
      },
      {
        type: "text",
        text: "Installation Instructions: Step-by-step guide for your device",
      },
      {
        type: "text",
        text: "Data Usage: Track how much data you’ve used and what’s remaining",
      },
      {
        type: "bold",
        text: "Plan Details: Check validity and network info",
      },
    ],
  };

  const whereToFindIccidText = {
    title: "🔐 Where to Find Your eSIM ID or ICCID?",
    description: "You can locate this number on your device:",
    iphone: {
      title: "iPhone:",
      steps: [
        {
          text: "Go to Settings",
        },
        {
          text: "General",
        },
        {
          text: "About",
        },
        {
          text: "ICCID",
        },
      ],
    },

    android: {
      title: "Android:",
      steps: [
        {
          text: "Go to Settings",
        },
        {
          text: "About Phone",
        },
        {
          text: "SIM Status",
        },
        {
          text: "ICCID",
        },
      ],
    },
  };

  const whyUseThisToolTex = {
    title: "⚡ Why Use This Tool?",
    listItems: [
      {
        type: "text",
        text: "No login or account needed",
      },
      {
        type: "text",
        text: " Access your eSIM any time",
      },
      {
        type: "text",
        text: "Perfect if you lost your activation email",
      },
      {
        type: "bold",
        text: " Works on all devices, 24/7",
      },
    ],
  };

  //this api is used to redeem sim usage
  const {
    mutate: redeemSimUsageApi,
    isPending,
    data,
    isSuccess,
  } = useMutation({
    mutationFn: redeemSimUsage,
    mutationKey: ["redeem"],
    onSuccess: (data) => {
      toast.success("🎉 Success! Here are your SIM details.");
      localStorage.setItem("redeemSim", JSON.stringify(data));
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  //to check if usage is in local storage
  //1. if sim usag is in local storage then it willl immeditaly show the sim usage detail
  useEffect(function () {
    const savedUsage = localStorage.getItem("redeemSim");

    if (savedUsage) {
      try {
        const parsedUsage: SimUsage = JSON.parse(savedUsage);
        setLocalSimUsage(parsedUsage);
      } catch (error) {
        console.error("Failed to parse redeemedSim from localStorage", error);
        localStorage.removeItem("redeemSim");
      }
    }
  }, []);

  return (isSuccess && data) || localSimUsage ? (
    <>
      <EsimDetailsPage
        isUsageLoading={isPending}
        usage={localSimUsage ? localSimUsage : data}
      />
    </>
  ) : (
    <>
      <PagesHero
        title="Redeem eSIM – Instantly Access Your eSIM Details"
        description="Enter your eSIM ID or ICCID below to instantly view your eSIM information – including QR code, installation instructions, data usage, and plan validity.No login required."
        showDownloadAndRating={false}
        className="!py-[3rem]"
      />

      <section className="container mt-16 grid gap-8 md:grid-cols-2">
        {/* iccid input */}
        <Card className="rounded-[0.9375rem] px-[1.5rem] py-[2rem] xl:px-[1.81rem] xl:py-[3.75rem]">
          <RedeemForm
            isUsageLoading={isPending}
            redeemSimUsageApi={redeemSimUsageApi}
          />
        </Card>

        {/* what will you get  */}
        <Card className="rounded-[0.9375rem] px-[1.5rem] py-[2rem] xl:px-[1.81rem]">
          <h2 className="font-montserrat text-[1.2rem] font-600 xl:text-[1.5rem]">
            {whatWillYouGetText.title}
          </h2>

          <ul className="mt-[1.56rem] flex flex-col gap-[0.5rem] text-[0.9375rem] xl:gap-[1rem]">
            {whatWillYouGetText.listItems.map((item, index) => (
              <li className="flex items-center gap-1" key={index}>
                <>
                  <Dot className="shrink-0" /> {item.text}
                </>
              </li>
            ))}
          </ul>
        </Card>

        {/* where to find iccid  */}
        <div className="flex flex-col gap-[0.75rem] rounded-[0.9375rem] bg-primary px-[1.81rem] py-[1.88rem] text-[0.9375rem] text-background">
          <h2 className="font-montserrat text-[1.2rem] font-600 xl:text-[1.5rem]">
            {whereToFindIccidText.title}
          </h2>
          <p>{whereToFindIccidText.description}</p>
          <p className="font-600 leading-none">
            {whereToFindIccidText.iphone.title}
          </p>
          {/* iphone steps  */}
          <div className="flex flex-wrap items-center gap-2">
            {whereToFindIccidText.iphone.steps.map((item, index) => (
              <div
                key={index}
                className="flex items-center rounded-[0.625rem] bg-background/20 px-[1rem] py-[0.5rem] text-[0.9375rem] font-500"
              >
                <ChevronRight size={18} /> {item.text}
              </div>
            ))}
          </div>

          <p className="font-600 leading-none">
            {whereToFindIccidText.iphone.title}
          </p>

          {/* android steps */}
          <div className="flex flex-wrap items-center gap-2">
            {whereToFindIccidText.android.steps.map((item, index) => (
              <div
                key={index}
                className="flex items-center rounded-[0.625rem] bg-background/20 px-[1rem] py-[0.5rem] text-[0.9375rem] font-500"
              >
                <ChevronRight size={18} /> {item.text}
              </div>
            ))}
          </div>
        </div>

        {/* why use this tool text  */}
        <Card className="rounded-[0.9375rem] px-[1.81rem] py-[2rem]">
          <h2 className="font-montserrat text-[1.2rem] font-600 xl:text-[1.5rem]">
            {whyUseThisToolTex.title}
          </h2>

          <ul className="mt-[1.56rem] flex flex-col gap-[0.5rem] text-[0.9375rem] xl:gap-[1rem]">
            {whyUseThisToolTex.listItems.map((item, index) => (
              <li className="flex items-center gap-1" key={index}>
                <>
                  <Dot className="shirnk-0" /> {item.text}
                </>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <div className="container">
        <p className="mt-10 rounded-[0.625rem] bg-primary/15 px-[2.38rem] py-[1.5rem] font-500 text-primary">
          Need Help: If you can’t find your ICCID or have trouble accessing your
          eSIM details, contact support and we’ll be happy to assist you.
        </p>
      </div>
    </>
  );
}

export default RedeemPage;
