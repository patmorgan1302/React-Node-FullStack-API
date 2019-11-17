let express = require('express');
let router = express.Router();
const Userprofile = require('../models/userprofile-schema')


router.put('/:id', function(req, res, next) {
    Userprofile.update({_id: req.params.id}, function (err, data){ 
        if (err){
            return res.json({err: 414, message: 'User PUT HTTP Fail'})
        }
        res.json(data)
})})

router.post('/', function (req, res, next) {
    Userprofile.create(req.body, function (err, data){ 
        if (err){
            return res.json({err: 424, message: 'User POST HTTP Fail'})
        }
        res.json(data);
})})

router.delete('/:id', function(req, res, next) {
    Userprofile.deleteOne({_id: req.params.id}, function(err, data){
        if (err){
            return res.json({err: 434, message: 'User DELETE HTTP Fail'})
        }
        res.json(data);

})})

router.get('/', function(req, res, next) {
    Userprofile.find({}, function (err, data){ 
        if (err){
            return res.json({err: 444, message: 'User GET HTTP Fail'})
        }   
        res.json(data)
})}) 
  

router.get('/:id', function(req, res, next) {
    Userprofile.find({_id:id }, function (err, data){ 
        if (err){
            return res.json({err: 454, message: 'User GET HTTP Fail'})
        }
   res.json(data)
})})

    


module.exports = router
