let app=require("express")()
const path=require("path")


app.get("/",(req,res)=>{

    res.sendFile(path.join(__dirname,"script.js"))
})

app.listen(3000)