let app=require("express")()


app.get("/",(req,res)=>{
    res.send(`
    let hello="Hello"
    
    `)
})

app.listen(3000)