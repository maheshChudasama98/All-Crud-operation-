const User = require('../Models/User');
const db = require('../Models/index')
const mail = require('../Src/mail')

const Show = async (req, res) => {
    const Users = db.Users;
    const Roles = db.Roles;
    const Company = db.Company
    const Designation = db.Designation

    const jane = await Users.findAll({
        include: [
            { model: Roles, attributes: ["Role_id", "Role_Name"] },
            { model: Company, attributes: ["Company_id", "Company_Name"] },
            { model: Designation, attributes: ["Desi_id", "Desi_Name"] }]
    });
    res.json(jane)
}

const getUser = async (req, res) => {
    const Users = db.Users;
    const Roles = db.Roles;
    const Company = db.Company
    const Designation = db.Designation

    const jane = await Users.findAll({
        include: [
            { model: Roles, attributes: ["Role_id", "Role_Name"] },
            { model: Company, attributes: ["Company_id", "Company_Name"] },
            { model: Designation, attributes: ["Desi_id", "Desi_Name"] }]
    });

    // mail.sendMail(msg , userNa me)
    res.json(jane)
}

const pustUser = async (req, res) => {
    const Users = db.Users;
    const Roles = db.Roles;
    const Company = db.Company
    const Designation = db.Designation
    const data = req.body;
    const jane = await Users.create(data);

    console.log(data);
    const roleName = await Roles.findAll({ where: { Role_id: data.RoleRoleId }, raw: true, nest: true, attributes: ["Role_Name"] })
    const CompanyName = await Company.findAll({ where: { Company_id: data.CompanyCompanyId }, raw: true, attributes: ["Company_Name"] })
    const DesignationName = await Designation.findAll({ where: { Desi_id: data.DesignationDesiId }, raw: true, attributes: ["Desi_Name"] })

    const sendData = {
        subject: "Add User",
        Massgess: "Well Come  Mr.",
        FullName: data.User_Name,
        UserName: data.User_user_name,
        UserEmail: data.User_email,
        RoleName: roleName[0].Role_Name,
        CompanyName: CompanyName[0].Company_Name,
        DesignationName: DesignationName[0].Desi_Name,
    }
    mail.sendMail(sendData)
    res.json(jane)
}

const putUser = async (req, res) => {
    const Users = db.Users;
    const Roles = db.Roles;
    const Company = db.Company
    const Designation = db.Designation
    const fineId = req.params.id
    const data = req.body
    console.log(fineId, "---", data);
    const jane = await Users.update(data, { where: { User_id: fineId } });

    const roleName = await Roles.findAll({ where: { Role_id: data.RoleRoleId }, raw: true, nest: true, attributes: ["Role_Name"] })
    const CompanyName = await Company.findAll({ where: { Company_id: data.CompanyCompanyId }, raw: true, attributes: ["Company_Name"] })
    const DesignationName = await Designation.findAll({ where: { Desi_id: data.DesignationDesiId }, raw: true, attributes: ["Desi_Name"] })

    const sendData = {
        subject: "Edit User Details",
        Massgess: "Mr.",
        FullName: data.User_Name,
        UserName: data.User_user_name,
        UserEmail: data.User_email,
        RoleName: roleName[0].Role_Name,
        CompanyName: CompanyName[0].Company_Name,
        DesignationName: DesignationName[0].Desi_Name,
    }
    mail.sendMail(sendData)
    res.send(jane)
}

const deleteUser = async (req, res) => {
    const Users = db.Users;
    const Roles = db.Roles;
    const Company = db.Company
    const Designation = db.Designation
    const fineId = req.params.id
    const data= await Users.findAll({ where: { User_id: fineId } ,attributes:["User_Name","User_user_name","User_email","User_Password","RoleRoleId" ,"DesignationDesiId" ,"CompanyCompanyId"]});
    const jane = await Users.destroy({ where: { User_id: fineId } });
    // console.log(data);
    
    const roleName = await Roles.findAll({ where: { Role_id: data[0].RoleRoleId }, raw: true, nest: true, attributes: ["Role_Name"] })
    const CompanyName = await Company.findAll({ where: { Company_id: data[0].CompanyCompanyId }, raw: true, attributes: ["Company_Name"] })
    const DesignationName = await Designation.findAll({ where: { Desi_id: data[0].DesignationDesiId }, raw: true, attributes: ["Desi_Name"] })

    // console.log(roleName);

    const sendData = {
        subject: "Delete ",
        Massgess: "Mr.",
        FullName: data[0].User_Name,
        UserName: data[0].User_user_name,
        UserEmail: data[0].User_email,
        RoleName: roleName[0].Role_Name,
        CompanyName: CompanyName[0].Company_Name,
        DesignationName: DesignationName[0].Desi_Name,
    }
    mail.sendMail(sendData)

    res.json(jane)
}

module.exports = {
    getUser,
    pustUser,
    putUser,
    deleteUser,
    Show
}