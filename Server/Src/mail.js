const nodemailer = require("nodemailer");

const sendMail = (sendData) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'user.my005@gmail.com',
            pass: 'mzznwdeaimuvnrhk'
        }
    });
    var mailOptions = {
        from: 'user.my005@gmail.com',
        to: 'mahesh.chudasama098@gmail.com',
        subject: `${sendData.subject}`,
        cc: "mahesh.chudasama098@gmail.com",
        html: `
        <h1>${sendData.Massgess} ${sendData.UserName} </h1>
        <h3>User Full Name : - ${sendData.FullName}  </h3>
        <h3>User Name : - ${sendData.UserName}  </h3>
        <h3>User Email : - ${sendData.UserEmail}  </h3>
        <h3>Role Name : - ${sendData.RoleName}  </h3>
        <h3>Company Name: - ${sendData.CompanyName}  </h3>
        <h3>Designation Name: - ${sendData.DesignationName}  </h3>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
module.exports = {
    sendMail
}