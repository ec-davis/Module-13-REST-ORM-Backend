const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint
const type = "tags";
router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const scope = "all";
  res.json(`${req.method} ${scope} ${type}`);
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const scope = "single by ID";
  res.json(`${req.method} ${scope} ${type}`);
});

router.post("/", (req, res) => {
  // create a new tag
  const scope = "create";
  res.json(`${req.method} ${scope} ${type}`);
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  const scope = "update by ID";
  res.json(`${req.method} ${scope} ${type}`);
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  const scope = "";
  res.json(`${req.method} ${scope} ${type}`);
});

module.exports = router;
