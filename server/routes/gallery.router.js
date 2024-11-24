const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // !CODE HERE
  // console.log( '/ PUT:' );
  // const queryText = `UPDATE "gallery" SET "likes"=$1 WHERE id=$2;`;
  // const values = [ req.body.likes, req.params.id ];
  // // run pool.query
  // pool.query( queryText, values ).then( ( results )=>{
  //     res.sendStatus( 200 ); // "OK"
  // }).catch( ( err )=>{
  //     // handle any errors
  //     console.log( err );
  //     res.sendStatus( 400 );
  // })
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
