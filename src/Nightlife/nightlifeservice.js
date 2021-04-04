const NightlifeService = {
  getAllNightlife(knex) {
    return knex
      .select('*')
      .from('nightlife');
  },
  
  getByArea(knex, area) {
    return knex
      .from('nightlife')
      .select('*')  
      .where('area', area);
  },
  
  getByAdult(knex) {
    return knex
      .from('nightlife')
      .select('*')
      .where('adult', true);
  }
};
  
module.exports = NightlifeService;