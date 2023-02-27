const authMiddleware = require("../firebase/auth-middleware");

module.exports = (app) => {
  const auth = require("../controllers/auth.controller");

  const router = require("express").Router();

  router.post("/", auth.login);

  app.use("/api/auth", router);
};