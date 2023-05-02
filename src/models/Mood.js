"use strict";

const { Sequelize } = require("sequelize");
const connection = require("../database/db");

const Mood = connection.define(
  "mood",
  {
    mood_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    icon: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    text: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    time: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    timestamp: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
    createdat: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

const initTable = async () => {
  await Mood.sync();
};

initTable();

module.exports = Mood;
