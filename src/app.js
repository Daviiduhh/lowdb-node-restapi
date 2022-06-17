import express from 'express'
import taskRoutes from './routes/task.js'

const app = express()

app.use(taskRoutes)

export default app;