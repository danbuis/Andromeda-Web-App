const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const Resource = require('./models/Resource');
const Alloy = require('./models/Alloy');
const Component = require('./models/Component');

const handle = app.getRequestHandler();

//connect to MongoDB
mongoose.connect("mongodb+srv://danbuis88:DbuisAndromeda@cluster0-lncyj.mongodb.net/test?retryWrites=true&w=majority", function(err){
    if (err){
        console.log('NOT CONNECTED TO MONGOOSE')
        console.log(err)
    }else(
        console.log('Connected to mongoose')
    )
})

app.prepare().then(() => {
//start express
 const server = express();

 server.use(bodyParser.json());
 server.use(bodyParser.urlencoded({extended: false}));



//get all resources from the database
server.get("/resourceList", function(req, res, next){
    Resource.find({}, (err, resources) => {
       // console.log("in resourceList")
       
        res.json(resources)
       // console.log(res)
    });
});

//get all alloys that use item as an input
server.get("/alloyUses/:item", function(req, res, next){
    console.log("inside server method for getAlloys()")

    const item = req.params.item;
    Alloy.find({ingredients: item}, (err, alloys) => {

        res.json(alloys)
    });
});

//get all alloys that use item as an input
server.get("/componentUses/:item", function(req, res, next){
    const item = req.params.item;
    Component.find({ingredients: item}, (err, components) => {

        res.json(components)
    });
});

server.post("/resourceDelete/:name", function(req, res, next){
    console.log("inside server function")
    const item = req.params.name
    Resource.deleteOne({name: item}, function (err, resource){
        if (err){
            console.log("could not find "+item)
        }
        if (resource){
            res.redirect("/resourcepage");
        }
    })
})

server.post("/alloyDelete/:name", function(req, res, next){
    const item = req.params.name
    Alloy.deleteOne({name: item}, function (err, alloy){
        if (err){
            console.log("could not find "+item)
        }
        if (alloy){
            res.redirect("/alloypage");
        }
    })
})

server.post("/componentDelete/:name", function(req, res, next){
    const item = req.params.name
    Component.deleteOne({name: item}, function (err, component){
        if (err){
            console.log("could not find "+item)
        }
        if (component){
            res.redirect("/componentpage");
        }
    })
})

//get a specific resource
server.get("/item/:name", function (req, res, next) {
    const item = req.params.name
    console.log(item)
    Resource.findOne({name: item}, function (err, resource){
        if(resource){
            return app.render(req, res, '/resource', {resource: resource})
        }
    })
    Alloy.findOne({name: item}, function (err, alloy){
        if(alloy){
            return app.render(req, res, '/alloy', {alloy: alloy})
        }
    })
    Component.findOne({name: item}, function (err, component){
        if(component){
            return app.render(req, res, '/component', {component: component})
        }
    })
})
   
    

//get all alloys from the database
server.get("/alloyList", function(req, res, next){
    Alloy.find({}, (err, alloys) => {      
        res.json(alloys)
    });
});

//get all components from the database
server.get("/componentList", function(req, res, next){
    Component.find({}, (err, components) => {      
        res.json(components)
    });
});

//get all assemblies from the database
server.get("/assembliesList", function(req, res, next){
    Assembly.find({}, (err, assemblies) => {      
        res.json(assemblies)
    });
});

server.post("/newResource", function(req, res, next){
    var name = req.body.name;
    var mass = req.body.mass;
    var volume = req.body.volume;
    var description = req.body.description;
    console.log(name);

    var newResource = new Resource({
        name: name,
        mass: mass,
        volume: volume,
        description: description
    });

    newResource.save(next);
    res.redirect("/resourcepage");
});

server.post("/newAlloy", async function(req, res, next){
    var name = req.body.name;
    var mass = req.body.mass;
    var volume = req.body.volume;
    var description = req.body.description;
    var ingredients = req.body.ingredient;
    var quantities = req.body.quantity;
    var output = req.body.output;

    var ingredientIDs = ingredients.map( function(str){        
        const getRes = async () =>{
            let resource = await Resource.findOne({name: str}).lean().exec()
            console.log (resource)
            return resource._id
        }
        
        var res = await getRes()

        console.log(res)
        return res;
    });

    var newAlloy = new Alloy({
        name: name,
        mass: mass,
        volume: volume,
        description: description,
        ingredients: ingredientIDs,
        quantities: quantities,
        output:output
    });

    newAlloy.save(next);
    res.redirect("/alloypage");
});

server.post("/newComponent", function(req, res, next){
    var name = req.body.name;
    var mass = req.body.mass;
    var volume = req.body.volume;
    var description = req.body.description;
    var ingredients = req.body.ingredient;
    var quantities = req.body.quantity;
    var types = req.body.type;

    var newComponent = new Component({
        name: name,
        mass: mass,
        volume: volume,
        description: description,
        types:types,
        ingredients: ingredients,
        quantities: quantities,
    });

    newComponent.save(next);
    res.redirect("/componentpage");
});

server.get('*', (req, res) => handle(req, res));

 //listen on the port
 server.listen(port, (err) => {
  if (err) throw err;
  console.log(`🤘 on http://localhost:${port}`);
 });
});