const express = require('express');
const router = express.Router();

//@ router  GET api/contacts
//@desc Get all users contacts
//@access   Private
router.get('/', (req,res) =>{
    res.send('Get all contacts');
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