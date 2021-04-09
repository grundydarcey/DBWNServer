const NightlifeService = {
  getAllNightlife(knex) {
    return knex
      .select('*')
      .from('nightlife');
  },
  
  getByArea(knex, area) {
    /*return knex
      .from('nightlife')
      .select('*')  
      .where('area', area);*/

    return knex
      .from('nightlife')
      .select('*')
      .where({'area': area, 'adult': false});
  },

  
  getByAdult(knex) {
    return knex
      .from('nightlife')
      .select('*')
      .where('adult', true);
  }
};
  
module.exports = NightlifeService;