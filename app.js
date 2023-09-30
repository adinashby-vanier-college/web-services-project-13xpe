const express = require('express');

//express appp
const app = express();

app.set('view engine' , 'ejs');

// the default path is /views
// if you lioke to change it, use the following line
// app.set("views", "myviews");

app.get('/', (req,res)=>{
    const blogs = [
        {title:"Blog 1", snippet:'Lorem ipsum dlor sit amet consectetur'},
        {title:"Blog 1", snippet:'Lorem ipsum dlor sit amet consectetur'},
        {title:"Blog 1", snippet:'Lorem ipsum dlor sit amet consectetur'},
    ];
    
   
   //res.sendFile('./views/index.html',{root:__dirname});

    res.render("index", {title:"Homepage",blogs});
});
app.get('/about', (req,res)=>{
  
   // res.sendFile('./views/ABOUT.html',{root:__dirname});
    res.render("about");
});

app.use( (req,res)=>{
  //  res.status(404).sendFile('./views/404.html',{root:__dirname});
  res.status(404).render("404");
});
app.listen(3000,()=>{
    console.log('server is listeniong on port 3000');
   
});