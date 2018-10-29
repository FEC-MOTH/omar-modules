const router = require("express").Router()
const controller = require("../controllers/main")

router 
  .route("/product")
  .get(controller.get)
  .post(controller.post)
  .put(controller.put)
  .delete(controller.delete)

module.exports = router;