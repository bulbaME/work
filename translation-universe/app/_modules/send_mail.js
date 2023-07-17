'use server';

const sendmail = require('sendmail')();

export default async function send_mail(name, mail, product, text) {
    sendmail({
        from: 'no-reply@translationuniverse.com',
        to: 'support@translationuniverse.com',
        subject: `A person contacted \nName: ${name}\nE-mail: ${mail}\nService they need: ${product}`,
        text: text
    }, (err, _) => {
     console.log(err && err.stack);
    });
}
