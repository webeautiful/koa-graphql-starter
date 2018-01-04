module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'Author',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'author'
    }
  )
}
