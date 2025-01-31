const slugify = require('slugify'); 
const db = require('../../database/db.config');
const Magasin = db.magasins;

// Créer une nouvelle Magasin
exports.create = (req, res) => {
    // Récupération des données
    const { nom, adresse, ville, codePostal} = req.body;
    if (!nom || !adresse || !ville || !codePostal) {
        return res.status(400).send({
            message: 'Tous les champs sont requis'
        })
    }
    //const slugy = slugify(nom, '-'); // Utiliser la nom pour générer le slug
    const newMagasin = new Magasin({
        nom: nom,
        adresse: adresse,
        ville: ville,
        codePostal: codePostal,
    });
    newMagasin.save(newMagasin).then((data) => {
        res.status(200).send({
            message: 'Magasin créée avec succès' 
        });
    }).catch(err => {
        console.log(err);
        });
}

exports.findAll = (req, res) => {
    Magasin.find({
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
    Magasin.findById(id).then((data) => {
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
    Magasin.findByIdAndDelete(id).then((data) => {
     if(!data){
         res.status(404).send({ message: "Magasin n'est pas trouvée"});  
     }
     res.status(200).send({ message: "Magasin est supprimée avec succés "});
    })
  };

// Mettre à jour une Magasin par son id
exports.update = (req, res) => {
    const id = req.params.id;
    const { nom, adresse, ville ,codePostal} = req.body;
    if (!id || !nom || !adresse || !ville || !codePostal) {
        res.status(400).send({ message: "Tous les champs sont requis" });
    }
    
    Magasin.findByIdAndUpdate(id,
    {nom: nom, adresse: adresse , ville: ville,  codePostal: codePostal},
    {useFindAndModify: false}).then((data) =>{
     if(!data){
         res.status(404).send({ message: `On peut pas faire le mise a jour avec id=${id}`});
     }
     res.status(200).send({ message: `mise a jour est fait avec succés`});
 }).catch((err) =>{
     console.log(err);
 });
}

