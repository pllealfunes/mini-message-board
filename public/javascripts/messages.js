//deafault messages
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

let messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: today
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: today
    }
];

module.exports = { messages, today };