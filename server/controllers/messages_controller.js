let messages = [];

let id = 0;


// all messages will have
// {
//     id: 0,
//     text:,
//     time:
// }


module.exports = {
    create: (req, res) => {
        let { text, time } = req.body;
        messages.push({ id, text, time });
        id++;
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        let { text } = req.body;
        let messageId = req.params.id;
        let messageIndex = messages.findIndex((message) => message.id == messageId);

        let message = messages[messageIndex];

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }

        res.status(200).send(messages);
    },
    delete: (req, res) => {
        let messageId = req.params.id;
        let messageIndex = messages.findIndex((message) => message.id == messageId);

        messages.splice(messageIndex, 1);

        res.status(200).send(messages);
    }
};