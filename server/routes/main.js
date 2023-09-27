const express = require('express');
const router = express.Router();

//routes
router.get('',(req,res) => {
    //res.send("Welcome JD to full stack blog");
    
    const locals = {
        title: "NodeJS Blog",
        description: "This is the example of a full stack nodejs backend blog"
    }
    res.render('index', { locals });
});
router.get('/about',(req,res) => {
    //res.send("Welcome JD to full stack blog");
    res.render('about');
});

module.exports = router;