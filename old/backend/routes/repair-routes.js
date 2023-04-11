const express = require('express');
const router = express.Router();
const Repair = require("../model/repair");
const repairsController = require("../controllers/repairs-controller");


router.get("/", repairsController.getAllrepairs);
router.post("/add", repairsController.addrepair);
router.get("/:id",repairsController.getById);
router.put("/:id",repairsController.updaterepair);
router.delete("/:id",repairsController.deleterepair);

module.exports = router;