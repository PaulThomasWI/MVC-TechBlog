const seedUsers    = require('./user-seeds');
const seedPosts    = require('./post-seeds');
const seedComments = require('./comment-seeds');
const sequelize    = require('../config/connection');

const seedDB = async () => {
  await sequelize.sync({ force: true });
  
  await seedUsers();
    console.log('\nSeed Users...\n');
  
  await seedPosts();
    console.log('\nSeed Posts...\n');

  await seedComments();
    console.log('\nSeed Comments...\n');

  process.exit(0);
};

seedDB();