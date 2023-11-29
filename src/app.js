const express=require("express");
const app=express();
const port= process.env.PORT || 8000;
const path=require("path");
const hbs=require("hbs");


// Using path 
const staticPath=path.join(__dirname,"../public");
const templates_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");

// Using Methods 
app.set('view engine','hbs');
app.set('views',templates_path);
hbs.registerPartials(partials_path);

// static Path 
app.use(express.static(staticPath));

// Home Page 
app.get("/",(req,res)=>{
    res.render("index");
})
// About page 
app.get("/about",(req,res)=>{
    res.render("about");
})
// contact Page 
app.get("/contact",(req,res)=>{
    res.render("contact");
})
// Error page 
app.get("*",(req,res)=>{
    res.render("404error",{
        errorMes:"Opps! Page is not found."
    });
});


app.listen(port,()=>{
    console.log(`Listening to the port no. ${port}`);
});