//store info of state details
module.exports = (sequelize, DataTypes) => {
  var KODOdata = sequelize.define('KODOdata', {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.BIGINT,
          field: 'id'
      },
      name: {
          type: DataTypes.TEXT,
          field: "name",
          allowNull: false,
      },
      image: {
          type: DataTypes.TEXT,
          field: "image",
          allowNull: false,
      },
      description: {
          type: DataTypes.TEXT,
          field: "description",
          allowNull: true
      },
      dateLastEdited: {
          type: DataTypes.DATE,
          field: "date_last_edited",
          allowNull: false
      },
      createdAt: {
          type: DataTypes.DATE,
          field: 'created_at',
          allowNull: false
      },
      updatedAt: {
          type: DataTypes.DATE,
          field: 'updated_at',
          allowNull: false
      }
  }, {
      freezeTableName: true,
      tableName: 'kodo_data'
  });
  return KODOdata;
};