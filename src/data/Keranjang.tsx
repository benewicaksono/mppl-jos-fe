export type keranjangItemType = {
  id: string;
  imgUrl: string;
  title: string;
  desc: string;
  price: string;
  totalPrice: string;
};

export interface keranjangItemProps {
  data: keranjangItemType[];
}

export const keranjangItemData: keranjangItemType[] = [
  {
    id: '6bTJWql54oka0jDmWHSa',
    imgUrl: '/images/Thumbnail-Images.png',
    title: 'Sate Jamur',
    desc: 'Sate jamur, gurih manis berpadu untuk mengisi waktu sore sembari menikmati teh hangat',
    price: '10.000',
    totalPrice: '0',
  },
  {
    id: 'FS2WeuaNTEPieNWE45MS',
    imgUrl: '/images/Thumbnail-Images.png',
    title: 'Sate Jamur',
    desc: 'Sate jamur, gurih manis berpadu untuk mengisi waktu sore sembari menikmati teh hangat',
    price: '10.000',
    totalPrice: '0',
  },
  {
    id: 'ywy15vsAMIDMWjyJo7eu',
    imgUrl: '/images/Thumbnail-Images.png',
    title: 'Sate Jamur',
    desc: 'Sate jamur, gurih manis berpadu untuk mengisi waktu sore sembari menikmati teh hangat',
    price: '10.000',
    totalPrice: '0',
  },
];
