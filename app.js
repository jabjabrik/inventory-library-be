import express from 'express'
import cors from 'cors'
import 'express-async-errors'
import * as middlewares from './src/middlewares/index.js'
import db from './src/database/index.js'
import config from './src/config/config.js'
import * as router from './src/routes/index.js'

const app = express()
const { PORT } = config

try {
    await db.sequelize.sync() // sync - authenticate
    console.log("Successfully connect to database");
} catch (err) {
    console.error(`Failed to connect db: ${err.message}`);
    process.exit(1)
}


app.use(cors({ origin: '*' }));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', router.user)
app.use('/api/books', router.book)
app.use('/api/admins', router.admin)
app.use('/api/categories', router.category)
app.use('/api/bookshelves', router.bookshelf)
app.use('/api/transactions', router.transaction)

app.use(middlewares.notFoundMiddleware)
app.use(middlewares.errorHandlerMiddleware);

app.listen(PORT, () => console.log(`app running on http://localhost:${PORT}`))