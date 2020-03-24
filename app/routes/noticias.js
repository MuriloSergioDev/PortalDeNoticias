// var dbConnetion = require('../../config/dbConnection');

module.exports = function (app) {

    // var connection = dbConnetion();

    app.get('/noticias', function (req, res) {
        app.app.controllers.noticias.noticias(app,req,res);
    });

    app.get('/noticia', function (req, res) {
        app.app.controllers.noticias.noticia(app,req,res);
    });
};