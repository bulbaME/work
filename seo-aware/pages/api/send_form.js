const sendmail = require('sendmail')();

const send_mail = (name, mail, product, text) => {
    sendmail({
        from: 'no-reply@seo-aware.com',
        to: 'support@seo-aware.com',
        subject: 'A person contacted',
        html: `<p>name: ${name}</p> <p>e-mail: ${mail}</p> <p>product: ${product == 'Select service' ? 'none' : product}</p> <p>comments: ${text}</p>`
    }, () => {});
}

export default function handler(req, res) {
    const body = JSON.parse(req.body);
    send_mail(body.name, body.mail, body.product, body.text);
    res.status(200);
}