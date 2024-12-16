const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// PUT /gallery/like/:id

router.put('/like/:id', (req, res) => {
  // !CODE HERE
  console.log( '/ in Router PUT' );
  console.log('req.params.id: ', req.params.id)
  console.log(req.body)

  const queryText = `UPDATE "gallery" SET "likes"=$1 WHERE "id"=$2;`;

  const likes = req.body.likes
  const id = req.params.id
  const values = [likes, id];

  console.log(likes)
  pool.query( queryText, values ).then( ( results )=>{
    //console.log('Update Successful:', results)
      res.sendStatus( 200 ); // "OK"
  }).catch( ( err )=>{
      // handle any errors
      console.log( err );
      res.sendStatus( 400 );
  })
});

// GET /gallery
router.get('/', (req, res) => {
  // code here
  const sqlText = `
  SELECT * FROM "gallery";
`
pool.query(sqlText)
  .then((Result) => {
      //console.log(`Result.rows is:`, Result.rows);
      res.send(Result.rows);
  })
  .catch((error) => {
      console.log(`dbError making database query ${sqlText}`, error);
      res.sendStatus(500);
  })
});

module.exports = router;
