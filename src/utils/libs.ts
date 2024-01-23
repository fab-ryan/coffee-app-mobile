export const baseUrl: NonNullable<string | undefined> =
  process.env.EXPO_PUBLIC_API_URL || 'http://localhost:4000';
import onboarding1 from '../../assets/images/onboarding1.jpg';
import onboarding2 from '../../assets/images/onboarding2.jpg';
import onboarding3 from '../../assets/images/onboarding3.jpg';

import coffee_1 from '@assets/images/coffe_1.png';
import coffee_2 from '@assets/images/coffee_2.png';
import coffee_3 from '@assets/images/coffee_3.png';
import coffee_4 from '@assets/images/coffee_5.jpg';
import beans_1 from '@assets/images/beans_1.png';
import beans_2 from '@assets/images/beans_2.png';


type onBoardDataType = {
  title: string;
  description: string;
  image: typeof onboarding1;
};

export const onBoardingData: onBoardDataType[] = [
  {
    title: 'Break Fast ',
    description: 'Start your day with exclusive breakfast',
    image: onboarding1,
  },
  {
    title: 'Lunch',
    description: 'At middle of the day you can order your coffee',
    image: onboarding2,
  },
  {
    title: 'Dinner',
    description: 'End your day with exclusive dinner with coffee',
    image: onboarding3,
  },
];

type IPrice = {
  id: string;
  size: string;
  price: number;
};
export type ICart = {
  id: string;
  name: string;
  subtitle: string;
  roasted: string;
  image: any;
  price: IPrice[];
};
export const DumpyCart: ICart[] = [
  {
    id: '1',
    name: 'Coffee Blend 1',
    subtitle: 'Smooth and Rich',
    roasted: 'Medium',
    image: coffee_1,
    price: [
      { id: '1', size: '250mg', price: 5.99 },
      { id: '2', size: '500mg', price: 7.99 },
      { id: '3', size: '1kg', price: 9.99 },
    ],
  },
  {
    id: '2',
    name: 'Coffee Blend 2',
    subtitle: 'Bold and Dark',
    roasted: 'Dark',
    image: 'coffee_blend_2.jpg',
    price: [
      { id: '4', size: '250mg', price: 6.99 },
    ],
  },
  {
    id: '3',
    name: 'Decaf Coffee',
    subtitle: 'Mild and Flavorful',
    roasted: 'Light',
    image: coffee_2,
    price: [
      { id: '7', size: '250mg', price: 4.99 },
      { id: '8', size: '500mg', price: 6.99 },
      { id: '9', size: '1kg', price: 8.99 },
    ],
  },
  {
    id: '4',
    name: 'Espresso Blend',
    subtitle: 'Intense and Aromatic',
    roasted: 'Dark',
    image: coffee_3,
    price: [
      { id: '10', size: 'Single Shot', price: 3.99 },
    ],
  },
  {
    id: '5',
    name: 'Hazelnut Flavored Coffee',
    subtitle: 'Sweet and Nutty',
    roasted: 'Medium',
    image: coffee_4,
    price: [
      { id: '12', size: '250mg', price: 6.99 },
      { id: '13', size: '500mg', price: 8.99 },
      { id: '14', size: '1kg', price: 10.99 },
    ],
  },
  {
    id: '6',
    name: 'Vanilla Latte',
    subtitle: 'Creamy and Smooth',
    roasted: 'Light',
    image: beans_1,
    price: [
      { id: '15', size: '250mg', price: 4.99 },
      { id: '16', size: '500mg', price: 5.99 },
      { id: '17', size: '1kg', price: 6.99 },
    ],
  },
];
