var express = require("express");
var router = express.Router();
const axios = require("axios").default;

router.get("/", async (req, res, next) => {
  try {
    const response = await axios({
      url: `https://dictionaryapi.com/api/v3/references/spanish/json/test?key=0fdb7527-9507-4ef5-9a76-838beb439dbe`,
      method: "get",
    });
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ message: err });
  }

  // try {
  //   const data = await axios({
  //     headers: { Accept: "text/html, application/json, text/plain, */*" },
  // url: "https://dictionaryapi.com/api/v3/references/spanish/json/test?key=0fdb7527-9507-4ef5-9a76-838beb439dbe",
  //     method: "get",
  //   });
  //   res.status(200).json({ data: data.data });
  // } catch (err) {
  //   console.log("====>>> errr", err);
  // }
});

module.exports = router;
