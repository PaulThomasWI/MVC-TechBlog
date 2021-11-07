const { User } = require('../models');

const userData = [
    {
        username: "User1",
        twitter: "twUser1",
        github: "ghUser1",
        email: "user1@gmail.com",
        password: "!P@ssw0rd-User1"
    },
    {
        username: "User2",
        twitter: "twUser2",
        github: "ghUser2",
        email: "user2@gmail.com",
        password: "!P@ssw0rd-User2"
    },
    {
        username: "User3",
        twitter: "twUser3",
        github: "ghUser3",
        email: "user3@gmail.com",
        password: "!P@ssw0rd-User3"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;