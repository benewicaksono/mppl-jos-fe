export type resepFavoritType = {
  imgUrl: string;
  title: string;
  name: string;
  views: number;
  time: string;
};

export interface resepFavoritProps {
  data: resepFavoritType[];
}

export const resepFavorit: resepFavoritType[] = [
  {
    imgUrl: '/images/Thumbnail-Images.png',
    title: 'Lorem ipsum dolor sit amet, consecte...',
    name: 'Marcus Levin',
    views: 329,
    time: '1 month',
  },
  {
    imgUrl: '/images/Thumbnail-Images.png',
    title: 'Lorem ipsum dolor sit amet, consecte...',
    name: 'Marcus Levin',
    views: 329,
    time: '1 month',
  },
  {
    imgUrl: '/images/Thumbnail-Images.png',
    title: 'Lorem ipsum dolor sit amet, consecte...',
    name: 'Marcus Levin',
    views: 329,
    time: '1 month',
  },
];
