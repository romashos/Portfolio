//index.js
// Sofiia Romashova
// 301303223
// October 8, 2023

const express = require('express');
const router = express.Router();

// Navigation to homepage using ejs
router.get('/home', (req, res) => {
    res.render('home');
});

// Routes for other pages
router.get('/about', (req, res) => {
    res.render('about'); 
 });
 router.get('/projects', (req, res) => {
    res.render('projects'); 
 });
 router.get('/services', (req, res) => {
    res.render('services'); 
 });
 router.get('/contact', (req, res) => {
    res.render('contact'); 
 });

module.exports = router;