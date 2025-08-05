import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Microchip, PackageCheck, ReceiptText, Settings } from "lucide-react";
import { formatDateTime } from "@/helpers/formatDateTime";
import { Sim } from "@/types/purchase/MyEsims";
import CopyButton from "../sims/CopyButton";
import QrCodeGenerator from "../sims/QrCodeGenerator";
import Link from "next/link";

interface PropsType {
  sim: Sim;
  isDataVoice?: boolean;
}

function SimDetail({ sim, isDataVoice }: PropsType) {
  const isICCIDNull =
    sim.simIccid === null || sim.simIccid === "" || sim.simIccid === " ";
  return (
    <Card className="flex flex-col gap-[3rem] rounded-[1.4rem] border border-primary px-[2rem] py-[2rem] shadow-none transition-all hover:shadow-myCard">
      {/* iccid  */}
      <div className="flex items-center gap-2.5">
        <Microchip
          className="shrink-0 text-primary"
          size={39}
          strokeWidth={1.5}
        />
        <div className="flex items-end gap-[1.2rem]">
          <div className="flex flex-col gap-0.5">
            <p className="text-body-md font-500 leading-none">
              {" "}
              {isICCIDNull ? "SIM ID" : "ICCID"}
            </p>
            <p className="text-body-md font-500 leading-none text-muted-foreground">
              {isICCIDNull ? `${sim.id.slice(0, 20)}...` : sim.simIccid}
            </p>
          </div>
          <CopyButton
            text={isICCIDNull ? sim.id : sim.simIccid ? sim.simIccid : ""}
          />
        </div>
      </div>

      {/* purchase date  */}
      <div className="flex items-center gap-2.5">
        <ReceiptText
          className="shrink-0 text-primary"
          size={39}
          strokeWidth={1.5}
        />

        <div className="flex flex-col gap-0.5">
          <p className="text-body-md font-500 leading-none">
            Purchase Date (ET)
          </p>
          <p className="text-body-md font-500 leading-none text-muted-foreground">
            {formatDateTime(sim.created_at)}
          </p>
        </div>
      </div>

      {/* Active bundle  */}
      <div className="flex items-center gap-2.5">
        <PackageCheck
          className="shrink-0 text-primary"
          size={39}
          strokeWidth={1.5}
        />
        <div className="flex flex-col gap-0.5">
          <p className="text-body-md font-500 leading-none">Activated Bundle</p>
          <p className="text-[1.21875rem] leading-none text-muted-foreground">
            {sim.last_bundle}
          </p>
        </div>
      </div>

      {/* see detail nd qr code  */}
      <div className="flex items-end justify-between font-600 text-primary">
        <Link
          href={`/client/my-sim/${isDataVoice ? `voice/${sim.id}/` : `${sim.id}/`}`}
        >
          <Button
            variant={"outline"}
            className="flex items-center gap-2 rounded-full border border-primary !py-3 transition-all hover:bg-primary hover:text-background"
            size={"md"}
          >
            <Settings className="h-[20px] w-[20px] shrink-0" />
            See Details
          </Button>
        </Link>

        {sim.qr_code_text && <QrCodeGenerator qrCodeValue={sim.qr_code_text} />}
      </div>

      {!sim.qr_code_text && (
        <p className="-mt-6 rounded-md bg-info/10 p-2 text-sm text-info">
          Package activation is in process...
        </p>
      )}
    </Card>
  );
}

export default SimDetail;
