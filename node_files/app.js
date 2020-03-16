// Library import section

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const { node } = require('compile-run');


app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

// Responce Section

app.post('/compile' ,function(req,res) {
	const sourcecode = req.body.source;
	let resultPromise = node.runSource(sourcecode);
	resultPromise.then(result => {
	    res.json({status : 1,result : result});
	}).catch(err => {
	     res.json({err : err});
	});
})

app.listen(3014, () => {
  console.log('The server is listening.....');
});