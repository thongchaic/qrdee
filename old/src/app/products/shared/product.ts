export interface Product {
  id: number;
  code_product: string;
  store_id: number;
  product_category_id: number;
  product_th: string;
  product_en: string;
  details_th: string;
  details_en: string;
  cost: number;
  price: number;
  instock: number;
  reorder_point: number;
  product_status_id: number;
  fda_code: string;
  qrcode: string;
  barcode: string;
  arcode: string;
  thumbnail: string;
  producer_name: string;
  producer_mobile_number: string;
  producer_address: string;
  mfg: Date;
  exp: Date;
  bbe: Date;
  weight: number;
  weight_unit_id: number;
}
