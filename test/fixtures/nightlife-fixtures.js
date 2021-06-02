function makeNightlifeArray() {
  return [
    {
      club_id: 1,
      club_name: 'Hot Nightclub',
      address_building_number: 199,
      address_street: 'East Wayfair',
      address_zipcode: 12345,
      city: 'Dimmsdale',
      club_state: 'Florida',
      phone_number: null,
      entry_age: 21,
      adult: false,
      area: 'Downtown',
      club_image: 'https://www.google.com',
      lat: 11.1111111,
      lng: 99.9999999
    },
    {
      club_id: 2,
      club_name: 'Equinox',
      address_building_number: 59,
      address_street: 'Easy Street',
      address_zipcode: 67212,
      city: 'Kansas City',
      club_state: 'Missouri',
      phone_number: '316-123-0000',
      entry_age: 18,
      adult: false,
      area: 'Midtown',
      club_image: null,
      lat: 20.8427112,
      lng: 61.2230432
    },
    {
      club_id: 3,
      club_name: 'The Salty Spitoon',
      address_building_number: 380,
      address_street: 'Krabby Patty Way',
      address_zipcode: 92212,
      city: 'Hollywood',
      club_state: 'California',
      phone_number: '123-456-7890',
      entry_age: 21,
      adult: true,
      area: 'Oceanview',
      club_image: 'https://www.yahoo.com',
      lat: 48.1294201,
      lng: 52.1204922
    },
    {
      club_id: 4,
      club_name: 'Bootz with the Fur',
      address_building_number: 5000,
      address_street: 'Main',
      address_zipcode: 42023,
      city: 'Memphis',
      club_state: 'Tennessee',
      phone_number: null,
      entry_age: 21,
      adult: false,
      area: 'Notown',
      club_image: null,
      lat: 38.1947233,
      lng: 23.1846222
    },
  ];
}

module.exports = {
  makeNightlifeArray
};