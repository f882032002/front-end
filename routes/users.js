var express = require('express');
var router = express.Router();


var array = {
  name: 'hunt',
  age: 18,
  phonenumber: 0912345678,
  menu: ['雞排','豬排','牛排']
};



/* GET users listing. */
router.get('/', function (req, res, next) {
  //res.send('respond with a resource"HIß" ');
  res.json(array);
});

module.exports = router;
