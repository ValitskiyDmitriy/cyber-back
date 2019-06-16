const secrets = {
    dbUri: process.env.DB_URI || 'mongodb://localhost:27017/myapp',
};

const getSecret = (key) => secrets[key];

module.exports = { getSecret };
