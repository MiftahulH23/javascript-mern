const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn")
const ObjectedId = require("mongodb").ObjectId;
recordRoutes.use(express.urlencoded({extended: true}));

// Menampilkan data
recordRoutes.route("/record").get(function(req, res){
    let db_connect = dbo.getDb("employees");
    db_connect
        .collection("records")
        .find({})
        .toArray(function(err, result){
            if(err) throw err;
            res.json(result);
        }).then((data) => {
            res.json({
                message: "Data Berhasil di tampilkan",
                data : data
            })
        })

})

// menampilkan data by id
recordRoutes.route("/record/:id").get(function(req, res){
    let db_connect = dbo.getDb();
    let myquery = { _id: new ObjectedId(req.params.id)};
    db_connect
        .collection("records")
        .findOne(myquery, function(err, result){
            if(err)throw err;
            res.json(result)
        }).then((data) => {
            res.json({
                message: "Data Berhasil di tampilkan",
                data : data
            })
        })

})

// menambhakan data
recordRoutes.route("/record/add").post(function(req, response){
    let db_connect = dbo.getDb();
    let myobj = {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level
    }
    db_connect
        .collection("records")
        .insertOne(myobj, function(err, res){
            if(err) throw err;
            response.json(res)
        }).then(() => {
            response.json({
                message: "Data Berhasil di tambahkan",
                data : myobj
            })
        })

})

// Update
recordRoutes.route("/update/:id").put(function(req, res){
    let db_connect = dbo.getDb();
    let myquery = { _id: new ObjectedId(req.params.id)};
    let newvalues = {
        $set:{
            name: req.body.name,
            position: req.body.position,
            level: req.body.level
        }
    }
    db_connect
        .collection("records")
        .updateOne(myquery, newvalues, function(err, res){
            if(err) throw err;
            console.log("1 Document Updated");
            response.json(res)
        }).then(() => {
            console.log("1 Document Updated")
            res.json({
                message: "Data Berhasil di update",
                data : newvalues
            })
        })

})

// hapus
recordRoutes.route("/delete/:id").delete(function(req, response){
    let db_connect = dbo.getDb();
    let myquery = { _id: new ObjectedId(req.params.id)};
    db_connect
        .collection("records")
        .deleteOne(myquery, function(err, obj){
            if(err) throw err;
            console.log("1 Document deleted");
            response.json(obj)
        }).then((data) => {
            console.log("1 Document deleted")
            response.json({
                message: "Data Berhasil di hapus",
                data : data
            })
        })

})
module.exports = recordRoutes;
