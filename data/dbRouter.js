const express = require('express');
const db = require('./db.js');

const router = express.Router();

router.get('/', (req, res) => {
    db.find()
        .then(post => {
            res.status(200).json(post)
        })
        .catch(err => {
            res.status(500).json({ error: "The posts information could not be retrieved.",})
        })
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    
    db.findById(id)
        .then(userId => {
            if(id){
                res.status(200).json(userId)
            } else{
                res.status(404).json({message: "The post with the specified ID does not exist."})
            }
            
        })
        .catch(err => {
            res.status(500).json({ error: "The posts information could not be retrieved.",})
        })
})

module.exports = router;