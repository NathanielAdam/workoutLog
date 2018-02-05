var express = require('express');
var router = express.Router();

router.post('/', function(req, res){
    var groupMember =req.body.group.groupMember
    var groupWorkout =req.body.group.groupWorkout
    var owner = req.user.id
    res.send('new member added')

    Group
        .create({
            groupMember: groupMember,
            groupWorkout: groupWorkout,
            owner:owner
        }).then(
            function createGroupSucess(group) {
                res.json({group:group})
            },
            function createGroupFail(err){
                res.send(500, err.me)
            }
        )
})

router.get('/', function(req, res){
    //user variable
    var userid = req.user.id

    Definition
    //findall by owner method
    .findAll({
        where:{owner: userid}
    })
    .then(
        //sucess
        function findAllSucess(data) {
            //console.log(data)
            res.json(data);
        },
        //error
        function findAllError(err) {
            res.send(500, err.message)
        }
    );
});
module.exports = router;