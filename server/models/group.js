module.exports = function(sequelize, DataTypes) {
    return sequelize.define('group', {
        groupMember: DataTypes.STRING,
        groupWorkout: DataTypes.STRING,
        owner:DataTypes.INTEGER
    },{

})
}

