const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// PUT /gallery/like/:id

router.put('/like/:id', (req, res) => {
  console.log('Received PUT request for likes update.');

  // Make sure the body contains the 'likes' field
  if (!req.body.likes) {
    return res.status(400).send('Likes value is required');
  }

  const likes = parseInt(req.body.likes);
  
  if (isNaN(likes)) {
    return res.status(400).send('Likes value must be a number');
  }

  const queryText = `UPDATE "gallery" SET "likes"=$1 WHERE "id"=$2;`;
  const values = [likes, req.params.id];

  // Debug: Log the query and parameters
  console.log('Query:', queryText);
  console.log('Values:', values);

  pool.query(queryText, values)
    .then((results) => {
      console.log('Update successful:', results);
      res.sendStatus(200); // "OK"
    })
    .catch((err) => {
      console.error('Error during database query:', err);
      res.sendStatus(400); // Bad Request if query fails
    });
});
// router.put('/likes/:id', (req, res) => {
//   // !CODE HERE
//   console.log( '/ PUT:' );
//   const queryText = `UPDATE "gallery" SET "likes"=$1 WHERE "id"=$2;`;

//   const likes = req.body.likes
//   const values = [likes, req.params.id];
// console.log(req.body)
//   console.log(likes)
//   pool.query( queryText, values ).then( ( results )=>{
//     console.log('Update Successful:', results)
//       res.sendStatus( 200 ); // "OK"
//   }).catch( ( err )=>{
//       // handle any errors
//       console.log( err );
//       res.sendStatus( 400 );
//   })
// });

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
