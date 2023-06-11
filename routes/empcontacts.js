const router = require('express').Router();
const empcontact = require('../models/empcontact');

router.post('/add', async(req, res)=>{
    const {name, jobtitle, phoneNumber, email, address, city, state, primaryContact, priNumber, priRelationship, secondaryContact, secNumber, secRelationship} = req.body;
    try {
        const createContact= await empcontact.create({name, jobtitle, phoneNumber, email, address, city, state, primaryContact, priNumber, priRelationship, secondaryContact, secNumber, secRelationship});
        console.log('contact has been saved', createContact);

    } catch (err){
        console.log(err);
        res.status(400).json({status: 'Failure', error:err});

    }
    return res.status(200).json({status: 'success', msg:'contact details has been saved'});
});

router.get('/all',async(req, res)=>{
    let allContacts;
    try {
        allContacts = await empcontact.find();

    } catch(err) {
        console.log(err);
        return res.status(400).json({status:'Failure', error:err});

    }
    return res.status(200).json({status: 'success', empcontacts: allContacts});
});

router.get('/all/:id',async(req, res)=>{
    let oneContact;
    try {
        oneContact = await empcontact.findById(req.params.id);

    } catch(err) {
        console.log(err);
        return res.status(400).json({status:'Failure', error:err});

    }
    return res.status(200).json({status: 'success', empcontacts: oneContact});
});

router.put('/update/:id',async(req,res)=>{
    const {id: _id} =req.params;
    const {name, jobtitle, phoneNumber, email, address, city, state, primaryContact, priNumber, priRelationship, secondaryContact, secNumber, secRelationship} = req.body;
    try {
        const updateData = await empcontact.updateOne({_id: _id},{name, jobtitle, phoneNumber, email, address, city, state, primaryContact, priNumber, priRelationship, secondaryContact, secNumber, secRelationship})

    } catch(err) {
        console.log(err);
        return res.status(400).json({status:'Failure', error:err});

    }
    return res.status(200).json({status: 'success', msg:'contact details has been updated'});
});

router.delete('/delete/:id',async(req,res)=>{
    const {id: _id} =req.params;
    try {
        const deleteData = await empcontact.deleteOne({_id: _id});

    } catch(err) {
        console.log(err);
        return res.status(400).json({status:'Failure', error:err});

    }
    return res.status(200).json({status: 'success', msg:'contact details has been deleted'});
});

module.exports = router;