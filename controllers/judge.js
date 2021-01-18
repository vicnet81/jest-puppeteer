module.exports = app => {
    app.post('/judge', (req, res) => {
        const json = req.body
        console.log(json);
        res.status(201).json({msg:"tested",grade:100}); 
    }) 
}