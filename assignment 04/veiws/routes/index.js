var express = require('express');
var router = express.Router();

router.get('/person1', function(req, res, next) {
  res.render('person1', { 
    name: 'Person 1',
    profession: 'Actor',
    biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae turpis ac odio tincidunt posuere.'
  });
});

router.get('/person2', function(req, res, next) {
  res.render('person2', { 
    name: 'Person 2',
    profession: 'Singer',
    biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae turpis ac odio tincidunt posuere.'
  });
});

router.get('/person3', function(req, res, next) {
    res.render('person3', { 
      name: 'Person 3',
      profession: 'Player',
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae turpis ac odio tincidunt posuere.'
    });
  });
  router.get('/person4', function(req, res, next) {
    res.render('person4', { 
      name: 'Person 2',
      profession: 'Singer',
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae turpis ac odio tincidunt posuere.'
    });
  });

module.exports = router;
