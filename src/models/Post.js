module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'Post',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      authorId: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      votes: {
        type: DataTypes.BIGINT,
        allowNull: false
      }
    },
    {
      tableName: 'post'
    }
  )
}