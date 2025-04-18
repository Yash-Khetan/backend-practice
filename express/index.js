import express from "express" 

const app = express();


// to fix the cannot / get
app.get("/",(req,res) => {
    res.send("Hello world")
   
})
// trying to "get the /about us"
app.get("/about",(req,res) => {
    res.send("<h1>About Me</h1>")
})


// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// })



        
        app.listen(4523, () =>{
            console.log("server is running on port 4523");
        })
