var mysql = require('mysql');

var connMySQL = function () {
    //console.log('Conexao com banco estabelecida');
    return mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    });
};

module.exports = function(){
    //console.log('O auto-load carregou o modulo de conexao com o banco');
    return connMySQL;
}