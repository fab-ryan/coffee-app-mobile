

interface Products {
  id: number;
  name: string;
  subType: string;
  price: number;
  image: string;
  ratings: string;
}

export const Products: Products[] = [
  {
    id: 1,
    name: 'Burger',
    subType: 'Fast Food',
    price: 10,
    image:
     require('../../assets/images/coffe_1.png'),
    ratings: '4.5',
  },
  {
    id: 2,
    name: 'Pizza',
    subType: 'Fast Food',
    price: 10,
    image:require('../../assets/images/coffee_2.png'),
    ratings: '4.5',
  },
  {
    id: 3,
    name: 'Burger',
    subType: 'Fast Food',
    price: 10,
    image:require('../../assets/images/coffee_3.png'),
    ratings: '4.5',
  },
  {
    id: 4,
    name: 'Burger',
    subType: 'Fast Food',
    price: 10,
    image:
     require('../../assets/images/coffee_2.png'),
    ratings: '4.5',
  },
];
