const router = require("express").Router();
const { response, request } = require("express");
const { Router } = require("express").Router();
const { House } = require("../../Models/House");

//==============================HOUSE FETCHING ROUTE==========================

router.get("/api/house-sale", async (request, response) => {
  try {
    House.find({
      "house_details.isSaleorRent": "SALE",
    })
      .exec()
      .then((data) => {
        //console.log(data);
        return response.status(200).json(data);
      });
  } catch (error) {
    return response.status(500).json({ msg: "server is currently down :( " });
  }
});

router.get("/api/house-rent", async (request, response) => {
  try {
    House.find({
      "house_details.isSaleorRent": "RENT",
    })
      .exec()
      .then((data) => {
        //console.log(data);
        return response.status(200).json(data);
      });
  } catch (error) {
    return response.status(500).json({ msg: "server is currently down :( " });
  }
});

router.get("/api/house-details/:id", async (request, response) => {
  console.log(request.params.id);
  await House.findOne({ _id: request.params.id })
    .exec()
    .then((data) => {
      return response.status(200).json(data);
    })
    .catch((error) => {
      return response.status(400).json(error);
    });
});

module.exports = router;
