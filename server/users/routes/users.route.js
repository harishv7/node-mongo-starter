const express = require("express");
const router = express.Router();
const controller = require("../controllers/users.controller");

router.route("/").post(controller.createUser);
router.route("/:id").get(controller.getUserById);
router.route("/").get(controller.getUsers);
router.route("/:id").delete(controller.deleteUser);
router.route("/:id").patch(controller.updateUser);

module.exports = router;
