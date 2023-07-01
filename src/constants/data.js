import images from './images';

const wines = [
  {
    title: 'American Heat Pizza',
    price: '₹299',
    tags: 'IN | Medium',
  },
  {
    title: 'American Heat Pizza',
    price: '₹299',
    tags: 'IT | Medium',
  },
  {
    title: 'Cheese Burst Pizza',
    price: '₹399',
    tags: 'IT | Medium',
  },
  {
    title: 'Fresh Veggi Special',
    price: '₹350',
    tags: 'IT | Medium',
  },
  {
    title: 'Irish Guinness',
    price: '₹260',
    tags: 'IN | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Pinacolada Frappe',
    price: '₹200',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: 'Shaky Daddy Frappe',
    price: '₹160',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Strawberry Frappe',
    price: '₹200',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '₹310',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Sunshine Frappe',
    price: '₹260',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Dining ',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
