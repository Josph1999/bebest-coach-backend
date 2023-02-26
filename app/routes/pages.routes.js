const authMiddleware = require("../firebase/auth-middleware");

module.exports = (app) => {
  const pages = require("../controllers/pages.controller");

  const router = require("express").Router();

  router.post("/", authMiddleware, pages.create);
  router.get("/content/:content", pages.getPage);
  router.get("/", authMiddleware, pages.getAll);
  router.patch("/:id", authMiddleware, pages.update);

  app.use("/api/pages", router);
};
