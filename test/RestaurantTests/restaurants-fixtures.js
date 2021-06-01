function makeRestaurantArray() {
  return [
    {
      rest_id: 1,
      rest_name: 'Mcdonalds',
      cuisine: 'Fast Food',
      address_building_number: 100,
      address_street: 'Main',
      address_zipcode: 11111,
      city: 'Smalltown',
      rest_state: 'RandomState',
      phone_number: '111-111-1111',
      rest_image: null
    },
    {
      rest_id: 2,
      rest_name: 'Burger King',
      cuisine: 'Fast food',
      address_building_number: 200,
      address_street: 'Boulevard',
      address_zipcode: 22222,
      city: 'Bigtown',
      rest_state: 'New York',
      phone_number: '222-222-2222',
      rest_image: 'https://static.dezeen.com/uploads/2021/01/burger-king-logo-rebrand-bk-jkr_logo_dezeen_2364_col_0.jpg'
    },
    {
      rest_id: 3,
      rest_name: 'Wendys',
      cuisine: 'Fast food',
      address_building_number: 12,
      address_street: 'Backroad',
      address_zipcode: 33333,
      city: 'Anycity',
      rest_state: 'California',
      phone_number: '333-333-3333',
      rest_image: 'https://i.insider.com/5076c8c46bb3f7b05800001e?width=600&format=jpeg&auto=webp'
    },
  ];
}
  
module.exports = {
  makeRestaurantArray
};