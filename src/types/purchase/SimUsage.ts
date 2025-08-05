import { Coverage } from "../packages/data-only/DataOnlyCountryPackages";
import { Sim, SimPackage } from "./MyEsims";

export interface Usage {
  initial_data_quantity: number;
  initial_data_unit: string;
  rem_data_quantity: number;
  rem_data_unit: string;
  unlimited?: boolean;
}

export interface DataVoiceUsage extends Usage {
  initial_minutes: number;
  initial_minutes_unit: string;
  rem_minutes: number | string;
  rem_minutes_unit: string;
  initial_sms: number;
  initial_sms_unit: string;
  rem_sms: number | string;
  rem_sms_unit: string;
}

export interface SimUsage {
  status: boolean;
  data: {
    sim: Sim;
    in_use_packages: SimPackage[];
    assigned_packages: SimPackage[];
    completed_packages: SimPackage[];
    revoked_packages: SimPackage[];
    coverage: Coverage[];
    overall_usage: Usage;
  };
}

export interface DataVoiceSimUsage {
  status: boolean;
  data: {
    sim: Sim;
    in_use_packages: SimPackage[];
    assigned_packages: SimPackage[];
    completed_packages: SimPackage[];
    revoked_packages: SimPackage[];
    coverage: Coverage[];
    overall_usage: DataVoiceUsage;
  };
}
