export type Pesan = {
  id: string;
  name: string;
  price: string;
  qty: string;
  desc_a: string;
  desc_b: string;
  cal: string;
  url_thumb: string;
  url_vid: string;
};
export type PesanDetailApi = {
  data: Pesan;
  message: string;
  status: boolean;
};
export type PesanApi = {
  data: Pesan[];
  loading?: boolean;
  error?: string | null;
};
