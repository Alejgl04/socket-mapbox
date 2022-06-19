const { Router } = require('express');
const { map } = require('../socket-io/socket');

const router = Router();

router.get('/map',( req, res ) => {
  res.json(
    map.getMarkers()
  );
});

module.exports = router;