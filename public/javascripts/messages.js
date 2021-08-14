//deafault messages
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

let messages = [
    {
        topic: "First Topic",
        text: "Hi there!",
        user: "Amando",
        added: today
    },
    {
        topic: "Second Topic",
        text: "Hello World!",
        user: "Charles",
        added: today
    }
];

module.exports = { messages, today };