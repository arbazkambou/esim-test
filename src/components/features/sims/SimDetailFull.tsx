"use client";

import SimCoverageModal from "@/components/features/sims/SimCoverageModal";
import { Card } from "@/components/ui/card";
import { formatDateTime } from "@/helpers/formatDateTime";
import { SimUsage } from "@/types/purchase/SimUsage";
import { Calendar, Code, Globe, Loader, Microchip, Phone } from "lucide-react";

import CopyButton from "../sims/CopyButton";
import QrCodeGenerator from "../sims/QrCodeGenerator";

function SimDetailFull({ simUsage }: { simUsage: SimUsage }) {
  const {
    id,
    last_bundle,
    simIccid,
    number,
    created_at,
    sell_status,
    qr_code_text,
    smdp_address,
  } = simUsage.data.sim;

  const coverage = simUsage.data.coverage;
  const isICCIDNull = simIccid === null || simIccid === "" || simIccid === " ";

  return (
    <Card className="flex flex-col gap-[1rem] rounded-[1.8125rem] px-[0.88rem] py-[1.81rem]">
      <h2 className="max-w-[300px] text-wrap break-words font-montserrat text-body-base font-600 sm:max-w-full md:text-body-md xl:text-body-lg">
        {last_bundle}
      </h2>
      {/* ICCID  */}
      <div className="flex flex-col gap-1 rounded-[0.5625rem] bg-muted px-[0.81rem] py-[0.69rem] md:flex-row md:justify-between">
        <div className="flex items-center gap-[0.81rem]">
          <Microchip size={24} className="text-primary" />
          <p className="text-base font-500">
            {isICCIDNull ? "SIM ID" : "ICCID"}
          </p>
        </div>

        {isICCIDNull ? (
          <p className="text-base">{id.slice(0, 20)}...</p>
        ) : (
          <div className="flex items-center gap-[0.88rem]">
            <p className="text-base">{simIccid}</p>
            <CopyButton text={simIccid} />
          </div>
        )}
      </div>

      {/* SMDP  */}
      <div className="flex flex-col gap-1 rounded-[0.5625rem] bg-muted px-[0.81rem] py-[0.69rem] md:flex-row md:justify-between">
        <div className="flex items-center gap-[0.81rem]">
          <Code size={24} className="text-primary" />
          <p className="text-base font-500">SMDP + Address</p>
        </div>

        {smdp_address ? (
          <div className="flex gap-[0.88rem]">
            <p className="max-w-[250px] text-wrap break-words text-base sm:max-w-full">
              {smdp_address}
            </p>
            <CopyButton text={smdp_address} />
          </div>
        ) : (
          <p className="max-w-[250px] text-wrap break-words text-base sm:max-w-full">
            In Process
          </p>
        )}
      </div>

      {/* Number  */}
      {number && (
        <div className="flex flex-col gap-1 rounded-[0.5625rem] bg-muted px-[0.81rem] py-[0.69rem] md:flex-row md:justify-between">
          <div className="flex items-center gap-[0.81rem]">
            <Phone size={23} className="text-primary" />
            <p className="text-base font-500">Number</p>
          </div>
          <div className="flex items-center gap-[0.88rem]">
            <p className="text-base">{number}</p>
            <CopyButton text={number} />
          </div>
        </div>
      )}

      {/* Activation Code  */}
      {/* <div className="flex flex-col gap-1 rounded-[0.5625rem] bg-muted px-[0.81rem] py-[0.69rem] md:flex-row md:justify-between">
                <div className="flex items-center gap-[0.81rem]">
                  <KeySquare size={24} className="text-primary" />
                  <p className="text-base font-500">Activation Code</p>
                </div>
                <div className="flex gap-[0.88rem] text-base">
                  <p className="max-w-[250px] text-wrap break-words text-base md:max-w-[350px] xl:max-w-full">
                    {usage.sim.matching_id}
                  </p>
                  <CopyButton text={usage.sim.matching_id} />
                </div>
              </div> */}

      {/* Manual Entry  */}
      {/* <div className="flex flex-col gap-1 rounded-[0.5625rem] bg-muted px-[0.81rem] py-[0.69rem] md:flex-row md:justify-between">
                <div className="flex items-center gap-[0.81rem]">
                  <Settings2 size={24} className="text-primary" />
                  <p className="text-base font-500">Manual Entry (Android)</p>
                </div>
                <div className="flex items-center gap-[0.88rem] text-base">
                  <p className="max-w-[200px] text-wrap break-words">
                    {usage.sim.qr_code_text}
                  </p>
                  <CopyButton text="864890678530256" />
                </div>
              </div> */}

      {/* Purchase Date  */}
      <div className="flex flex-col gap-1 rounded-[0.5625rem] bg-muted px-[0.81rem] py-[0.69rem] md:flex-row md:justify-between">
        <div className="flex items-center gap-[0.81rem]">
          <Calendar size={24} className="text-primary" />
          <p className="text-base font-500">Purchase Date</p>
        </div>

        <p className="text-base">{formatDateTime(created_at)}</p>
      </div>

      {/* Coverage  */}
      <div className="flex flex-col gap-1 rounded-[0.5625rem] bg-muted px-[0.81rem] py-[0.69rem] md:flex-row md:justify-between">
        <div className="flex items-center gap-[0.81rem]">
          <Globe size={24} className="text-primary" />
          <p className="text-base font-500">Coverage</p>
        </div>
        <div className="w-max">
          <SimCoverageModal coverage={coverage} />
        </div>
      </div>

      {/* Status  */}
      <div className="flex flex-col gap-1 rounded-[0.5625rem] bg-muted px-[0.81rem] py-[0.69rem] md:flex-row md:justify-between">
        <div className="flex items-center gap-[0.81rem]">
          <Loader size={24} className="text-primary" />
          <p className="text-base font-500">Status</p>
        </div>

        <p className="text-base">{sell_status}</p>
      </div>

      {/* Renewable date  */}
      {/* <div className="flex flex-col gap-1 rounded-[0.5625rem] bg-muted px-[0.81rem] py-[0.69rem] md:flex-row md:justify-between">
                <div className="flex items-center gap-[0.81rem]">
                  <Calendar1 size={24} className="text-primary" />
                  <p className="text-base font-500">Renewable Date</p>
                </div>
  
                <p className="text-base">May 07,2023</p>
              </div> */}

      {qr_code_text ? (
        <div className="ms-4 flex justify-between">
          <div className="flex flex-col gap-4">
            <p className="text-base font-500">Qr Code</p>
            <QrCodeGenerator qrCodeValue={qr_code_text} isShareable={true} />
          </div>
          {/* <div>
          <Button className="flex items-center !rounded-pill" size={"sm"}>
            <Settings />
            Manage Subscription
          </Button>
        </div> */}
        </div>
      ) : (
        <p className="rounded-[0.5625rem] bg-info/10 p-2 text-info">
          Package activation is in process
        </p>
      )}
    </Card>
  );
}

export default SimDetailFull;
