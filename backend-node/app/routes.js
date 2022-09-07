const express = require("express");
const {
  register,
  login,
} = require("../controllers/UserController");
const { registerErrors } = require("../middlewares/ErrorsMiddleware");
const {
  addHome,
  getHome,
  deleteHome,
  updateHome,
} = require("../controllers/HomeController");
const {
  addAbout,
  getAbout,
  deleteAbout,
  updateAbout,
} = require("../controllers/AboutController");
const auth = require("../middlewares/AuthMiddleware");

const router = express.Router();

// ROUTES

//AUTH ROUTES
router.post("/auth/register", registerErrors, register);
router.post("/auth/login", login);

//HOME ROUTES
router.post("/auth/addhome", auth, addHome);
router.get("/auth/home", auth, getHome);
router.delete("/auth/delete/:id", auth, deleteHome);
router.patch("/auth/movie/update/:id", auth, updateHome);

//ABOUT ROUTES
router.post("/auth/addabout", auth, addAbout);
router.get("/auth/about", auth, getAbout);
router.delete("/auth/about/delete/:id", auth, deleteAbout);
router.patch("/auth/about/update/:id", auth, updateAbout);

//ROADMAP ROUTES
router.post("/auth/addroadmap", auth, addRoadmap);
router.get("/auth/roadmap", auth, getRoadmap);


module.exports = router;
