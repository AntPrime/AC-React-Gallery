const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  //code here
});

// GET /gallery
router.get('/', (req, res) => {
  // code here
  const sqlText = `
  SELECT * FROM "gallery";
`
pool.query(sqlText)
  .then((Result) => {
      console.log(`Result.rows is:`, Result.rows);
      res.send(Result.rows);
  })
  .catch((error) => {
      console.log(`dbError making database query ${sqlText}`, error);
      res.sendStatus(500);
  })
});

module.exports = router;
