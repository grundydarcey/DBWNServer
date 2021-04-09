const NightlifeService = {
  getAllNightlife(knex) {
    return knex
      .select('*')
      .from('nightlife')
      .where({ 'adult': false });
  },
  
  getByArea(knex, area) {
    return knex
      .from('nightlife')
      .select('*')
      .where({'area': area, 'adult': false});
  }
};
  
module.exports = NightlifeService;