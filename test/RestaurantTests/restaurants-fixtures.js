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
      phone_link: 'tel:1234567890',
      rest_image: null,
      link: 'https://www.google.com',
      lat: 42.2828342,
      lng: 81.0001221
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
      phone_link: 'tel:1112223333',
      rest_image: 'https://static.dezeen.com/uploads/2021/01/burger-king-logo-rebrand-bk-jkr_logo_dezeen_2364_col_0.jpg',
      link: 'https://thumbs.dreamstime.com/b/dancing-tomato-illustration-smile-eyes-nose-42115084.jpg',
      lat: 23.1120332,
      lng: 10.2322091
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
      phone_link: 'tel:0987654321',
      rest_image: 'https://i.insider.com/5076c8c46bb3f7b05800001e?width=600&format=jpeg&auto=webp',
      link: 'https://townsquare.media/site/74/files/2013/05/Screen-Shot-2013-05-12-at-7.52.59-PM.png?w=980&q=75',
      lat: 31.3131310,
      lng: 12.3456789
    },
  ];
}
  
module.exports = {
  makeRestaurantArray
};