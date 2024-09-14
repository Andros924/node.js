const express = require("express");
const multer = require("multer");
const { Client } = require("pg");

const app = express();
const port = 3000;

const client = new Client({
  user: "your_username",
  host: "your_host",
  database: "your_database",
  password: "your_password",
  port: 5432,
});

client.connect();
