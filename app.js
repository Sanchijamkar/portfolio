const express = require('express');
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');


const app = express();
app.use(express.static("style"));
app.use(bodyparser.urlencoded({extended: true}));




app.get("/",function(req, res){
    res.sendFile(__dirname + "/src/components/Contact.jsx");
    console.log(__dirname);
});

app.post("/", function(req, res){
    const comm = req.body.message;
    const name = req.body.name;
var transpoter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "sanchijamkar01@gmail.com",
        pass: "Shrisan_05"
    }
})
var mailOption = {
    from: 'sanchijamkar01@gmail.com',
    to: req.body.user,
    cc:'sanchijamkar01@gmail.com',
    subject: 'thanks ' + name,
    text : 'thanks'+ comm,

};
transpoter.sendMail(mailOption, function(error, info){
    if(error){
        console.log(error);
    }else{
        res.send("mail submitte");
        console.log("email sent" + info.response);
    }

})

});


app.listen(3000,function(){
    console.log("server started at 3000");
});










app.listen(3000, function(){
    console.log("server startes at 3000");
})