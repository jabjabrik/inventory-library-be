import 'dotenv/config'

export default {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3001,

    /** DATABASE */
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT
}