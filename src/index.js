require("dotenv").config()

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const useRouter = require("./routes/doctor/router")

const app = express()

/* SETUP MIDDLEWARE */

app.disable("x-powered-by")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

/* SETUP ROUTES */

app.use("/doctor", useRouter)

app.get("*", (req, res) => {
  res.json({ ok: true })
});

/* START SERVER */

const port = process.env.PORT || 3030

app.listen(port, () => {
  console.log(`\nš Server is running on http://localhost:${port}/\n`)
});
