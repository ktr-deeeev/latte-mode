export type Post = {
  id: number;
  user: string;
  avatar: string;
  image: string;
  likes: number;
  caption: string;
  time: string;
};

export const posts: Post[] = [
  {
    id: 1,
    user: 'cozy_cafe_tokyo',
    avatar: '☕',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
    likes: 234,
    caption: '本日のラテアート。心を込めて一杯ずつ丁寧に淹れています。',
    time: '2時間前',
  },
  {
    id: 2,
    user: 'morning_brew',
    avatar: '🥐',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400',
    likes: 189,
    caption: '焼きたてクロワッサンとコーヒーの朝。幸せな一日の始まり。',
    time: '4時間前',
  },
  {
    id: 3,
    user: 'cafe_moments',
    avatar: '🍰',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400',
    likes: 312,
    caption: '季節限定のモンブランケーキ。栗の風味が優しく広がります。',
    time: '6時間前',
  },
  {
    id: 4,
    user: 'urban_coffee',
    avatar: '🌿',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400',
    likes: 276,
    caption: '静かな午後のひととき。窓辺の特等席で過ごす贅沢な時間。',
    time: '8時間前',
  },
  {
    id: 5,
    user: 'latte_love',
    avatar: '☕',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400',
    likes: 445,
    caption:
      'キャラメルマキアート。甘さと苦みの絶妙なバランスをお楽しみください。',
    time: '10時間前',
  },
  {
    id: 6,
    user: 'bean_story',
    avatar: '🫘',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400',
    likes: 198,
    caption: '自家焙煎の豆を使用。香り高いエスプレッソをどうぞ。',
    time: '12時間前',
  },
];
