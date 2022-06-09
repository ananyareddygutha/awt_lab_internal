var express = require('express')
var app = express();
var fs = require('fs')
app.use(express.json())
//To get the data
app.get('/staff', function (req, res) {
fs.readFile('faculty.json', function (err, data) {
res.send(data)
}) })
//To get static web pages from same directory
app.get('/staff1', (req, res) => {
let myrf = fs.createReadStream(__dirname + "/hello.html", 'utf8')
myrf.pipe(res);
// res.render("hello.html")
})

//To insert the document using postman
app.post('/addstf', (req, res) => {
console.log(req.body)
const newstf = { name: req.body.name,
id: req.body.id,
loc: req.body.loc, }
fs.readFile('faculty.json', function (err, data) {
var sdata = JSON.parse(data);
sdata.push(newstf);
fs.writeFile('faculty.json', JSON.stringify(sdata), function (err, data) {
console.log("data inserted");
}) })
res.send("faculty data inserted");
});

//To update the data using put in postman
app.put('/updatestaff/:id', (req, res) => { var id = req.body.id;
fs.readFile('faculty.json', function (err, data) {
var sdata = JSON.parse(data);
for (let i in sdata) {
if (id === sdata[i]['id']) {
sdata[i]['id'] = req.body.id;
sdata[i]['name'] = req.body.name;
sdata[i]['loc'] = req.body.loc;
fs.writeFile('faculty.json', JSON.stringify(sdata), function (err, data) {
console.log("data updated");
}) } }
res.send("Staff Data Updated");
}) })

//To perform the delete operation using postman
app.delete('/deletestaff/:id', (req, res) => {
var id = req.body.id;
fs.readFile('faculty.json', function (err, data) {
var sdata = JSON.parse(data);
for (let i in sdata) {
if (id === sdata[i]['id']) {
sdata.splice(i, 1);
fs.writeFile('faculty.json', JSON.stringify(sdata), function (err, data) {
console.log("data deleted");
}) } }
res.send("Staff Data Deleted");
}) })
app.listen(1258, function () { // var host = server.address().address
// var port = server.address().port // console.log("Example data at http:// %s:%s", host, port)
console.log("server started….") })


//
// app.delete("/delStaff/:id",(req,res)=>{
//     var id=req.body.id
//     fs.readFile("faculty.json",function(err,data){
//         var sdata=JSON.parse(data)
//         for(let i in sdata){
//             if(id==sdata[i]['id']){
//                 sdata.splice(i,1)
//                 fs.writeFile("faculty.json",JSON.stringify(sdata),function(err,data){
//                     console.log("deletion successful")
//                 })
//             }
//         }
//     })
//     res.send("data deleted")
// })