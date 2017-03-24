var express = require('express');
var router = express.Router();

//About DB
var mysql = require('mysql');
var db_option = {
    host: 'sql12.freemysqlhosting.net',
    user: 'sql12164741',
    password: 'wlWLsEUx3S',
    database:'sql12164741',
    port: 3306
};

// exports.index = function(req, res){
//      var connection = mysql.createConnection(db_option);
//      var query ='SELECT * FROM song';
//     connection.query(query, function(err, rows, fields){
//         if(err) throw err;
//         res.render('index', { title: '這是 mysql + node.js 示範版本', 'items': rows });
//     });
// }


// router.get('/images', function(req, res) {
//     res.json({ message: "第一個API!" });
// });

// Search API - Title
router.route('/search/title/:string') // 輸入string當作參數

.post(function(req, res) {

	var connection = mysql.createConnection(db_option);
  var query ='SELECT * FROM song WHERE(song_title LIKE "%'+ req.params.string +'%")' ;
	connection.query(query, function(err, rows, fields){

		console.log(rows);

    if(err) throw err;
    res.json({
        id: rows[0].song_id,
        title: rows[0].song_title
    })


	});
});

// Search API - Title
router.route('/search/title/:string') // 輸入string當作參數

.post(function(req, res) {

	var connection = mysql.createConnection(db_option);
  var query ='SELECT * FROM song WHERE(song_title LIKE "%'+ req.params.string +'%")' ;
	connection.query(query, function(err, rows, fields){

		console.log(rows);

    if(err) throw err;
    // res.render('index', { title: '這是 mysql + node.js 示範版本', 'items': rows });
    res.json({
        id: rows[0].song_id,
        title: rows[0].song_title
    })

	});
});

// Search API - Lyrics
router.route('/search/lyrics/:string') // 輸入string當作參數

.post(function(req, res) {

	var connection = mysql.createConnection(db_option);
  var query ='SELECT * FROM song WHERE(song_lyrics LIKE "%'+ req.params.string +'%")' ;
	connection.query(query, function(err, rows, fields){

		console.log(rows);

    if(err) throw err;
    // res.render('index', { title: '這是 mysql + node.js 示範版本', 'items': rows });
    	res.send(rows);
	});
});




// .post(function(req, res) {
//     res.json({
//         id: req.params.id,
//         message: 'The post api for image: ' + req.params.id
//     })
// })

// .put(function(req, res) {
//     res.json({
//         id: req.params.id,
//         message: 'The put api for image: ' + req.params.id
//     })
// })

// .delete(function(req, res) {
//     res.json({
//         id: req.params.id,
//         message: 'The delete api for image: ' + req.params.id
//     })
// });


module.exports = router;