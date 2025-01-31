const slugify = require('slugify'); 
const db = require('../../database/db.config');
const Chaussure = db.chaussures;
const http = require('http');
const fs = require('fs');
const path = require('path');


exports.create = (req, res) => {
    const { marque, prix, pointure, couleur, magasin, image} = req.body;
    
    if (!marque || !prix || !pointure || !couleur || !magasin || !image)  {
       
        return res.status(400).send({
            message: 'Tous les champs sont requis'
        })
    }
        const newChaussure = new Chaussure({
        marque: marque,
        prix: prix,
        pointure: pointure,
        couleur: couleur,
        magasin: magasin?.id,
        imageSrc: image,
    });

    newChaussure.save(newChaussure).then((data) => {
        res.status(200).send({
            message: 'Chaussure créée avec succès' 
        });
    }).catch(err => {
        console.log(err);
        });
}

exports.findAll = (req, res) => {
    Chaussure.find({
    }).then((data) => {
    res.send(data);
    }).catch((err) => {
    console.log(err);
    });
    }

//consultation par id
exports.findOne = (req, res) => {
    const id = req.params.id;
    if(!id) {
     res.status(400).send({ message: "contenu demandé "});
    }
    Chaussure.findById(id).then((data) => {
        res.send(data); 
    }).catch((err) => {
        console.log(err);
    });
 }

//suppression par id 
exports.delete = (req, res) => {
    const id = req.params.id;
    if(!id) {
     res.status(400).send({ message: "contenu demandé "});
    }
    Chaussure.findByIdAndDelete(id).then((data) => {
     if(!data){
         res.status(404).send({ message: "chaussures non trouvées "});  
     }
     res.status(200).send({ message: "chaussures est supprimée avec succés "});
    })
  };

// Mettre à jour une chaussure par son id
exports.update = (req, res) => {
    const id = req.params.id;
    const { marque, prix, pointure ,couleur, magasin, image} = req.body;
    if (!id || !marque || !prix || !pointure || !couleur || !magasin || !image) {
        res.status(400).send({ message: "Tous les champs sont requis" });
    }
    
    Chaussure.findByIdAndUpdate(id,
    {marque: marque, prix: prix , pointure: pointure,  couleur: couleur, magasin, imageSrc:image},
    {useFindAndModify: false}).then((data) =>{
     if(!data){
         res.status(404).send({ message: `On peut pas faire le mise a jour avec id=${id}`});
     }
     res.status(200).send({ message: `mise a jour est fait avec succés`});
 }).catch((err) =>{
     console.log(err);
 });
}
