import { services } from '@/modules/data';

const sendmail = require('sendmail')();

const send_mail = (name, mail, product, text) => {
    sendmail({
        from: 'no-reply@diorama-designs.com',
        to: 'support@diorama-designs.com',
        subject: 'A person contacted',
        html: `<p>name: ${name}</p> <p>e-mail: ${mail}</p> <p>product: ${product == -1 ? 'none' : services[product].title}</p> <p>comments: ${text}</p>`
    }, () => {});
}

export default function handler(req, res) {
    const body = JSON.parse(req.body);
    send_mail(body.name, body.mail, body.product, body.text);
    res.status(200);
}