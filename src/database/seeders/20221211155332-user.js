'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('user', [
            {
                name: "Jacob Cross",
                phone_number: "0111175182",
                birth_date: "2003-11-29",
                birth_place: "Yopal",
                address: "Ap #764-6156 Adipiscing Rd.",
                gender: "female",
                created_at: Sequelize.fn('now'),
                updated_at: Sequelize.fn('now'),
            },
            {
                name: "Gray Snow",
                phone_number: "0818583343",
                birth_date: "2004-02-10",
                birth_place: "Çermik",
                address: "Ap #310-874 Enim Ave",
                gender: "female",
                created_at: Sequelize.fn('now'),
                updated_at: Sequelize.fn('now'),
            },
            {
                name: "Colleen Kelly",
                phone_number: "0587429461",
                birth_date: "2002-04-27",
                birth_place: "San Nicolás",
                address: "1252 Magna, Road",
                gender: "female",
                created_at: Sequelize.fn('now'),
                updated_at: Sequelize.fn('now'),
            },
            {
                name: "Xenos Bernard",
                phone_number: "0813042266",
                birth_date: "2005-08-28",
                birth_place: "Lương Bằng",
                address: "Ap #800-1389 Metus. Rd.",
                gender: "female",
                created_at: Sequelize.fn('now'),
                updated_at: Sequelize.fn('now'),
            },
            {
                name: "Amy Shannon",
                phone_number: "0668581140",
                birth_date: "2001-10-10",
                birth_place: "Las Vegas",
                address: "Ap #379-4194 Velit Rd.",
                gender: "female",
                created_at: Sequelize.fn('now'),
                updated_at: Sequelize.fn('now'),
            },
            {
                name: "Piper Goodwin",
                phone_number: "0183407473",
                birth_date: "2003-11-20",
                birth_place: "Nam Định",
                address: "4441 Pellentesque Road",
                gender: "female",
                created_at: Sequelize.fn('now'),
                updated_at: Sequelize.fn('now'),
            },
            {
                name: "Kelsey Leon",
                phone_number: "0205347956",
                birth_date: "2008-09-7",
                birth_place: "Otukpo",
                address: "P.O. Box 822, 5081 Ac Street",
                gender: "female",
                created_at: Sequelize.fn('now'),
                updated_at: Sequelize.fn('now'),
            },
            {
                name: "Aaron Albert",
                phone_number: "0705338188",
                birth_date: "2002-05-3",
                birth_place: "Bergisch Gladbach",
                address: "Ap #446-4754 Adipiscing. Street",
                gender: "female",
                created_at: Sequelize.fn('now'),
                updated_at: Sequelize.fn('now'),
            },
            {
                name: "Sheila Lynch",
                phone_number: "0322895738",
                birth_date: "2007-01-24",
                birth_place: "Shanxi",
                address: "321-7300 Amet Street",
                gender: "female",
                created_at: Sequelize.fn('now'),
                updated_at: Sequelize.fn('now'),
            },
            {
                name: "Len Yates",
                phone_number: "0549141165",
                birth_date: "2005-10-2",
                birth_place: "Valéncia",
                address: "915-7413 Metus. St.",
                gender: "female",
                created_at: Sequelize.fn('now'),
                updated_at: Sequelize.fn('now'),
            },
            {
                name: "Samuel Potts",
                phone_number: "0855031720",
                birth_date: "2005-10-4",
                birth_place: "Dipolog",
                address: "7203 Eu, Street",
                gender: "female",
                created_at: Sequelize.fn('now'),
                updated_at: Sequelize.fn('now'),
            },
            {
                name: "Ebony West",
                phone_number: "0874148684",
                birth_date: "2009-05-15",
                birth_place: "Peshawar",
                address: "824-1197 Ut, Rd.",
                gender: "female",
                created_at: Sequelize.fn('now'),
                updated_at: Sequelize.fn('now'),
            },
            {
                name: "Chaney Ayers",
                phone_number: "0333431352",
                birth_date: "2006-04-13",
                birth_place: "Hay River",
                address: "163-107 Orci Avenue",
                gender: "female",
                created_at: Sequelize.fn('now'),
                updated_at: Sequelize.fn('now'),
            },
            {
                name: "Gage Waller",
                phone_number: "0332245597",
                birth_date: "2002-04-25",
                birth_place: "Ormoc",
                address: "P.O. Box 130, 8903 Donec St.",
                gender: "female",
                created_at: Sequelize.fn('now'),
                updated_at: Sequelize.fn('now'),
            },
            {
                name: "Angela Shields",
                phone_number: "0488393324",
                birth_date: "2007-06-14",
                birth_place: "Westport",
                address: "550-482 Ac Rd.",
                gender: "female",
                created_at: Sequelize.fn('now'),
                updated_at: Sequelize.fn('now'),
            },
            {
                name: "Cameran Maddox",
                phone_number: "0864733559",
                birth_date: "2006-05-5",
                birth_place: "Kongsvinger",
                address: "343-438 Vulputate Avenue",
                gender: "female",
                created_at: Sequelize.fn('now'),
                updated_at: Sequelize.fn('now'),
            },
            {
                name: "Kibo Neal",
                phone_number: "0622548746",
                birth_date: "2004-08-2",
                birth_place: "Galway",
                address: "P.O. Box 209, 4714 Eget Avenue",
                gender: "female",
                created_at: Sequelize.fn('now'),
                updated_at: Sequelize.fn('now'),
            },
            {
                name: "Alan Jimenez",
                phone_number: "0775425274",
                birth_date: "2006-06-16",
                birth_place: "Liberia",
                address: "561-448 Pellentesque Road",
                gender: "female",
                created_at: Sequelize.fn('now'),
                updated_at: Sequelize.fn('now'),
            },
            {
                name: "Victor Frye",
                phone_number: "0179319881",
                birth_date: "2003-10-19",
                birth_place: "Mamuju",
                address: "Ap #296-1691 Malesuada St.",
                gender: "female",
                created_at: Sequelize.fn('now'),
                updated_at: Sequelize.fn('now'),
            },
            {
                name: "TaShya Rich",
                phone_number: "0373777735",
                birth_date: "2009-03-15",
                birth_place: "Santiago",
                address: "P.O. Box 279, 5182 Nisi Av.",
                gender: "female",
                created_at: Sequelize.fn('now'),
                updated_at: Sequelize.fn('now'),
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('user', null, {});
    }
};