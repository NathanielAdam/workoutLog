module.exports=function(sequelize, DataTypes){
    //With define, the first argument is going to represent a colimn in the db table 

        return sequelize.define('definition', {
            description: DataTypes.DataTypes.STRING,
            logType: DataTypes.STRING, /* by time, reps, weight, ....*/

            owner:DataTypes.INTEGER
        },{

        });
}