const express = require('express');
const router = express.Router();
const Course = require('../models/courses.model'); 

// GET all courses
router.get('/', async (req, res) => {
  const courses = await Course.find();
  res.send(courses);
});

// DELETE /courses/:id
router.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;
  const delid= await coursesModel.deleteOne({id})
  res.json({msg:"Deleted",status:true});
});

module.exports = router;
