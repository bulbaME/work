'use server';

const sendmail = require('sendmail')();

export default async function send_mail(name, mail, product, text) {
    sendmail({
        from: 'no-reply@seodigital360.com',
        to: 'support@seodigital360.com',
        subject: 'A person contacted',
        html: `<p>name: ${name}</p> <p>e-mail: ${mail}</p> <p>product: ${product == 'Select service' ? 'none':product}</p> <p>comments: ${text}</p>`
    }, () => {});
}
