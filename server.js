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
const Corporation = require('./models/Corporation');
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

server.get("/getItemByID/:id", function(req, res, next){
    Resource.findById(req.params.id, function (err, resource){
        if(resource){
            res.json(resource)
        }if(err){
           // console.log("Error looking up resource by ID")
        }
    })

    Alloy.findById(req.params.id, function (err, alloy){
        if(alloy){
            res.json(alloy)
        }if(err){
           // console.log("Error looking up alloy by ID")
        }
    })

    Component.findById(req.params.id, function (err, component){
        if(component){
            res.json(component)
        }if(err){
           // console.log("Error looking up component by ID")
        }
    })
})

//get all alloys that use item as an input
server.get("/alloyUses/:item", function(req, res, next){

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

server.post("/resourceDelete/:id", function(req, res, next){
    console.log("inside server function")
    const item = req.params.id
    Resource.deleteOne({_id: item}, function (err, resource){
        if (err){
            console.log("could not find "+item)
        }
        if (resource){
            res.redirect("/resourcepage");
        }
    })
})

server.post("/alloyDelete/:id", function(req, res, next){
    const item = req.params.id
    Alloy.deleteOne({_id: item}, function (err, alloy){
        if (err){
            console.log("could not find "+ item)
        }
        if (alloy){
            res.redirect("/alloypage");
        }
    })
})

server.post("/componentDelete/:id", function(req, res, next){
    const item = req.params.id
    Component.deleteOne({_id: item}, function (err, component){
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
   
 server.get("/corporation/:corp", function (req, res, next){
     const corp = req.params.corp
     Corporation.findOne({name: corp}, function (err, corporation){
         if (corporation){
             return app.render(req, res, '/corporation', {corporation: corporation})
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

//get all assemblies from the database
server.get("/corporationList", function(req, res, next){
    Corporation.find({}, (err, corporations) => {      
        res.json(corporations)
    });
});

server.post("/newResource", function(req, res, next){
  
    var newResource = new Resource({
        name: req.body.name,
        mass: req.body.mass,
        volume: req.body.volume,
        description: req.body.description
    });

    newResource.save(next);
    res.redirect("/resourcepage");
});

server.post("/newCorporation", function(req, res, next){


    var newCorporation = new Corporation({
        name: req.body.name,
        specialty: req.body.specialty,
        description: req.body.description
    });

    newCorporation.save(next);
    res.redirect("/corporationpage");
});

server.post("/newAlloy", async function(req, res, next){

    const getRes = async str => {
        let resource = await Resource.findOne({name: str}).lean()
            return resource._id
    }

    const getIDs = async() =>{
        return await Promise.all(req.body.ingredient.map(str => getRes(str))).catch(console.log("rejected promise in creating new alloy"))
    }

    const ingredientIDs = await getIDs()

    var newAlloy = new Alloy({
        name: req.body.name,
        mass: req.body.mass,
        volume: req.body.volume,
        description: req.body.description,
        ingredients: ingredientIDs,
        quantities: req.body.quantity,
        output:req.body.output
    });

    newAlloy.save(next);
    res.redirect("/alloypage");
});

server.post("/newComponent", async function(req, res, next){
   
    var types = req.body.type;

    const getRes = async str => {
        let resource = await Resource.findOne({name: str}).lean()
            return resource._id
    }
    const getAll = async str => {
        let alloy = await Alloy.findOne({name: str}).lean()
            return alloy._id
    }

    const getComp = async str => {
        let component = await Component.findOne({name: str}).lean()
        return component._id
    }

    const getIDs = async() =>{
        return await Promise.all(req.body.ingredient.map(function (str, index){
            if(types[index] === "Resource"){
                return getRes(str).catch()
            }
            if(types[index] === "Alloy"){
                return getAll(str).catch()
            }
            if(types[index] === "Component"){
                return getComp(str).catch()
            }
        })).catch(function(err){
            console.log("A promise failed to resolve in newComponent server ", err)
        })
    }

    const ingredientIDs = await getIDs()

    var newComponent = new Component({
        name: req.body.name,
        mass: req.body.mass,
        volume: req.body.volume,
        description: req.body.description,
        types:req.body.type,
        ingredients: ingredientIDs,
        quantities: req.body.quantity,
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