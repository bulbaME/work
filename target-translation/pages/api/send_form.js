const sendmail = require('sendmail')();

const send_mail = (name, mail, product, text) => {
    sendmail({
        from: 'no-reply@target-translation.com',
        to: 'support@target-translation.com',
        subject: `A person contacted \nName: ${name}\nE-mail: ${mail}\nService they need: ${product}`,
        html: text
    }, () => {});
}

export default function handler(req, res) {
    const body = JSON.parse(req.body);
    send_mail(...body);
    res.status(200);
}