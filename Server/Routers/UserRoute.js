const express = require('express');
const app = express()
const router = express.Router();
const data = require('../Src/databaseMysql')
const con = data.cos
require('../Models/index')

const RolesSequelize = require('../Controller/RolesSequelize')
const DesiSequelize = require('../Controller/DesiSequelize')
const CompanySequelize = require('../Controller/CompanySequelize')
const UserSequelize = require('../Controller/UsersSequelize')

//  sequlize controller data  
// Roles  url
router.get('/sequlize/Roles', RolesSequelize.getRoles)
router.post('/sequlize/Roles', RolesSequelize.pustRoles)
router.put('/sequlize/Roles/:id', RolesSequelize.putRoles)
router.delete('/sequlize/Roles/:id', RolesSequelize.deleteRoles)

// Designation
router.get('/sequlize/Designation', DesiSequelize.getDesi)
router.post('/sequlize/Designation', DesiSequelize.pustDesi)
router.put('/sequlize/Designation/:id', DesiSequelize.putDesi)
router.delete('/sequlize/Designation/:id', DesiSequelize.deleteDesi)

// Company 
router.get('/sequlize/Company', CompanySequelize.getCompany)
router.post('/sequlize/Company', CompanySequelize.pustCompany)
router.put('/sequlize/Company/:id', CompanySequelize.putCompany)
router.delete('/sequlize/Company/:id', CompanySequelize.deleteCompany)

// Company 
router.get('/sequlize/User', UserSequelize.getUser)
router.get('/sequlize/Show', UserSequelize.Show)
router.post('/sequlize/User', UserSequelize.pustUser)
router.put('/sequlize/User/:id', UserSequelize.putUser)
router.delete('/sequlize/User/:id', UserSequelize.deleteUser)


module.exports = router