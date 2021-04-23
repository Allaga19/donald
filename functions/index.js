const functions = require("firebase-functions");
const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;
const { email, password } = require(''./config');

exports.sendUseEmail = functions.database.ref('orders/{pushID}')
.onCreate(order:  => console.log(order));
