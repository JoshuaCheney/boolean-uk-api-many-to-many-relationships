const express = require("express")

const { getAppointmentsById } = require("./controller")

const router = express.Router()

router.get("/:id/appointments", getAppointmentsById)

module.exports = router