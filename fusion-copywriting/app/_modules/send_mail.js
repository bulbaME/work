'use server';

const sendmail = require('sendmail');

export default async function send_mail(name, mail, product, text) {
    sendmail({
        from: 'no-reply@fusioncopywriting.com',
        to: 'support@fusioncopywriting.com',
        subject: `A person contacted \nName: ${name}\nE-mail: ${mail}\nService they need: ${product}`,
        html: text
    }, () => {});
}
