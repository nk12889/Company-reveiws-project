const express = require("express");

const reviewsController = require("../controllers/reviews");

const router = express.Router();

router.get("/get-reviews/", reviewsController.getReviews);

router.post("/add-reviews", reviewsController.addReviews);


module.exports = router;