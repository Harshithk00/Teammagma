import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";


const app = express();
const port = 3000;
// const port = process.env.PORT;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended:true }));

app.set('view engine', 'ejs');


app.get("/", (req,res) =>{
    
    
    res.render("index.ejs");
});
app.post("/projects", (req,res) =>{
    

    res.render("project.ejs");
})
app.post("/Members", (req,res) =>{
    

    res.render("member.ejs");
})


app.listen(port, () => {
    console.log(`Your app is listening on http://localhost:${port}`);
  });