const express = require("express");
const router = require("express").Router();

router
  .get("/", (req, res) => {
    res.send("RODOUUU");
  })
  .post("/", (req, res) => {
    res.send("RODOUUU");
  })
  .put("/", (req, res) => {
    res.send("RODOUUU");
  })
  .delete("/", (req, res) => {
    res.send("RODOUUU");
  });

module.exports = router;
