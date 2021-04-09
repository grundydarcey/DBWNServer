const AdultService = {
  getAllAdult(knex) {
    return knex
      .select('*')
      .from('nightlife')
      .where({ 'adult': true});
  }
};

module.exports = AdultService;