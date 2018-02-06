
var router = require('express').Router();
var sequelize = require('../db');
var USER = sequelize.import('../models/user')
var group = sequelize.import('../models/group')


router.post('/', function(req, res){
    var groupMember =req.body.groupMember
    var groupWorkout =req.body.groupWorkout
    var owner = req.user.id
   

    group
    .create({
            groupMember: groupMember,
            groupWorkout: groupWorkout,
            owner:owner
        }).then(
            function createGroupSucess(group) {
                res.json({
                    group:group,
                    message:"created"
                })
            },
            function createGroupFail(err){
                res.send(501, err.message)
            }
        )
})
//test for group.id: 7
router.get('/', function(req, res) {
    
    group
    .findAll().then(
       
        function findAllSucess(data) {
            //console.log(data)
            res.json(data);
        },
        
        function findAllError(err) {
            res.send(502, err.message)
        }
    );
})
module.exports = router;

