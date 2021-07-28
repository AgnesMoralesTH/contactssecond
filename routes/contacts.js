const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Contact = require('../models/Contact');

//@ router  GET api/contacts
//@desc Get all users contacts
//@access   Private
router.get('/', auth, async(req,res) =>{
    try {
        const contacts = await Contact.find({ user: req.user.id}).sort({ date:-1 });
        res.json(contacts);
        
    }catch(err){
        console.error(err.message);
        res.send(500).send('Server Error');
    }
})

//@ router  POST api/contacts
//@desc Get Add new contact
//@access   Private
router.post('/', (req,res) =>{
    res.send('Add contact');
})

//@ router  PUT api/contacts
//@desc Get Update a contact
//@access   Private
router.put('/:id', (req,res) =>{
    res.send('Update contact');
})

//@ router  DELETE api/contacts
//@desc Get delete a contact
//@access   Private
router.put('/:id', (req,res) =>{
    res.send('Delete contact');
})

module.exports = router;