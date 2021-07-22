var nodeMailer = require('nodemailer')

var transport = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'ghanshyambmragjale@gmail.com',
        pass: 'Ghanshyambmragjale5$'
    }
});

var mailOption = {
    from: 'ghanshyambmragjale@gmail.com',
    to: 'ghanshyambmragjale@gmail.com',
    subject: 'Mail testing',
    text: 'New mail from myself'
}

transport.sendMail(mailOption, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email has been sent', info.response);
    }
})


// less secure app access needs to on in gmail account.