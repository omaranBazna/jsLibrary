let app=require("express")()


app.get("/",(req,res)=>{
    res.sendFile("./script.js")
})

app.listen(3000)