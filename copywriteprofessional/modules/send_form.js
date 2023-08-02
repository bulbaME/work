export default function send_form(name, mail, product, text) {
    fetch('/api/send_form', {
        method: 'Post',
        body: JSON.stringify({
            name,
            mail,
            product,
            text
        })
    });
}