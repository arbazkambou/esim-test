export interface Sim {
  id: string;
  simIccid: string | null | "";
  qr_code_text: string | null;
  qr_code_generation: string | null;
  smdp_address: string | null;
  matching_id: string | null;
  created_at: string;
  updated_at: string;
  status_of_sim: string;
  sell_status: string;
  sim_data_service_status: string | null;
  sim_voice_service_status: string | null;
  sim_sms_service_status: string | null;
  charge_type: string;
  status_of_sim_package: string;
  apn: string;
  last_bundle: string;
  last_bundle_id: string;
  is_expire: boolean;
  expiry_message: string | null;
  number: string;
  provider_name: string;
  activation_type: string;
  activation_type_description: string;
  can_renew: boolean;
  can_cancel: boolean;
  can_android_auto_install: boolean;
  auto_install_details: string | null;
}

export interface SimPackage {
  id: string;
  package: string;
  package_id: string;
  initial_data_quantity: number;
  initial_data_unit: string;
  rem_data_quantity: number;
  rem_data_unit: string;
  date_created: string;
  created_at?: string;
  date_activated: string;
  quantity: number;
  date_expiry: string;
  activated: boolean;
  status: string;
  imei?: string;
  revoked_at: string;
}

export interface MyEsims {
  status: boolean;
  data: Sim[];
  pending_packages: SimPackage[];
  unused_packages: SimPackage[];
}
