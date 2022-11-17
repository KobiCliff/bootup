const express = require('express');
const router = express.Router();
const DB = require('../../module/dbconnect')

router.post("/api/create", (req,res) => {
    res.status(200).json({status: true, Info: "working"})
});

router.get("/api/list", (req, res) => {
    res.status(401).json({status: true, info: "working"})
});

router.get("api/:id/view", (reeq, res) => {
    res.status(401).json({status: true, info: "working"})
});

router.post("/api/:id/edit", (req, res) => {
    res.status(401).json({status: true, info: "working"})
});

router.delete("/api/:id/delete", (req, res) => {
    res.status(401).json({status: true, info: "working"})
});

module.exports = router;