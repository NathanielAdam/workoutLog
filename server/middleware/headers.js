module.exports = function(req,res,next){
    // allows two origins to talk to one another
    res.header('access-control-allow-origin','*');
    // returns the next item in a sequence, iterator function
    next();
}