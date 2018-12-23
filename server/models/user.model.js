module.exports = (sequelize, Sequelize) => {
  // ! TODO: make relation

  const User = sequelize.define(
    'user',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      login: {
        type: Sequelize.INTEGER,
        allowNull: false,
        isNumeric: true,
        validate: {
          notEmpty: {
            msg: 'The login is required.',
          },
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'The password is required.',
          },
        },
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'The name is required.',
          },
        },
      },
      surname: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'The surname is required.',
          },
        },
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'The address is required.',
          },
        },
      },
      date_registration: {
        type: Sequelize.DATE,
      },
      last_logged: {
        type: Sequelize.DATE,
      },
    },
    {
      timestamps: false,
      tableName: 'bankapplication_accounts',
    },
  );

  return User;
};
