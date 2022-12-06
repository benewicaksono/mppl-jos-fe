export type Resep = {
  id: string;
  name: string;
  qty: string;
  desc_a: string;
  desc_b: string;
  cal: string;
  url_thumb: string;
  url_vid: string;
};
export type ResepDetailApi = {
  data: Resep;
  message: string;
  status: boolean;
};
export type ResepApi = {
  data: Resep[];
  loading?: boolean;
  error?: string | null;
};
