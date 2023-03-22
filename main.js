const contacts = [
    {id: 1, name: "Steve Rogers", message: "That is America's ass рџ‡єрџ‡ёрџЌ‘", mesage_count: 14, image_url: "images/rojers.png" },
    {id: 2, name: "Tony Stark", message: "Uh, he's from space, he came here to steal a necklace from a wizard.", mesage_count: 0, image_url: "images/stark.png" },
    {id: 3, name: "Bruce Banner", message: "There's an Ant-Man *and* a Spider-Man?", mesage_count: 1, image_url: "images/benner.png" },
    {id: 4, name: "Thor Odinson", message: "I like this one", mesage_count: 3, image_url: "images/thor.png" },
    {id: 5, name: "Carol Danvers", message: "Hey Peter Parker, you got something for me?", mesage_count: 2, image_url: "images/denvers.png" }
]

const messagesList = [
    {id: 1, image_url:"images/rojers.png", name: "Steve Rogers", seen: "Today at 15:06", correspondence: {date: "Today at 15:06", messages: ["aaaaa", "bbbbbbb", "ccccccc", "dddddddd", "aaaaa", "bbbbbbb", "ccccccc", "dddddddd","aaaaa", "bbbbbbb", "ccccccc", "dddddddd","aaaaa", "bbbbbbb", "ccccccc", "dddddddd"]}},
    {id: 2, image_url:"images/stark.png", name: "Tony Stark", seen: "Today at 15:06", correspondence: {date: "Today at 12:56", messages: ["eeeeeee", "ffffffff", "ddddddd", "jjjjjjjjjj"]}},
    {id: 3, image_url:"images/benner.png", name: "Bruce Banner", seen: "Today at 15:06", correspondence: {date: "Today at 02:11", messages: ["kkkkkkkkkkk", "mmmmmmmmmmm", "nnnnnnnnn", "lllll"]}},
    {id: 4, image_url:"images/thor.png", name: "Thor Odinson", seen: "Today at 15:06", correspondence: {date: "Today at 15:50", messages: ["ffffffff", "oooooooo", "ttttttt", "uuuuuu"]}},
    {id: 5, image_url:"images/denvers.png", name: "Carol Danvers", seen: "Today at 15:06", correspondence: {date: "Today at 16:22", messages: ["xxxxxxxx", "zzzzzzz", "ttttttttt", "hhhhhhhhhhh"]}}
]

function showContacts(contacts) {
    let contactsBody = document.getElementById("contacts-body");
    contacts.forEach(contact => {
        let contactDiv = document.createElement("div");
        let contactPicDiv = document.createElement("div");
        contactPicDiv.setAttribute("class", "pic");
        contactPicDiv.style.backgroundImage = `url(${contact.image_url})`;
        let contactBageDiv = document.createElement("div");
        if (contact.mesage_count > 0) {
            contactBageDiv.setAttribute("class", "badge");
            contactBageDiv.innerHTML = contact.mesage_count;            
        }
        let contactNameDiv = document.createElement("div");
        contactNameDiv.setAttribute("class", "name");
        contactNameDiv.innerHTML = contact.name;
        let contactMessageDiv = document.createElement("div");
        contactMessageDiv.setAttribute("class", "message");
        contactMessageDiv.innerHTML = contact.message;
        let className = window.screen.width > 640 ? "contact" : "contact mobile-contact"
        contactDiv.setAttribute("class", className);
        contactDiv.setAttribute("id", contact.id);
        contactDiv.setAttribute("onclick", "getChat(this)");
        contactDiv.appendChild(contactPicDiv);
        contactDiv.appendChild(contactBageDiv);
        contactDiv.appendChild(contactMessageDiv);
        contactDiv.appendChild(contactNameDiv);
        contactsBody.appendChild(contactDiv);
    });
}

function createChat(chat) {
    let firstChat = chat;
    let chatDiv = document.getElementById("chat");
    let chatHeadertDiv = document.createElement("div");
    chatHeadertDiv.setAttribute("class", "contact bar");
    if (window.screen.width <= 640) {
        let chatHeaderBacktDiv = document.createElement("div");
        chatHeaderBacktDiv.setAttribute("class", "back-div");
        let chatHeaderBacktI = document.createElement("i");
        chatHeaderBacktI.setAttribute("class", "fa fa-arrow-left back");
        chatHeaderBacktI.setAttribute("aria-hidden", "true");
        chatHeaderBacktI.setAttribute("onclick", "backToContacts()");
        chatHeaderBacktDiv.appendChild(chatHeaderBacktI);
        chatHeadertDiv.appendChild(chatHeaderBacktDiv);        
    }
    let chatHeaderPictDiv = document.createElement("div");
    chatHeaderPictDiv.setAttribute("class", "pic");
    chatHeaderPictDiv.style.backgroundImage = `url(${firstChat.image_url})`;
    let chatHeaderNametDiv = document.createElement("div");
    chatHeaderNametDiv.setAttribute("class", "name");
    chatHeaderNametDiv.innerHTML = firstChat.name;
    let chatHeaderSeentDiv = document.createElement("div");
    chatHeaderSeentDiv.setAttribute("class", "seen");
    chatHeaderSeentDiv.innerHTML = firstChat.seen;

    chatHeadertDiv.appendChild(chatHeaderPictDiv);
    chatHeadertDiv.appendChild(chatHeaderNametDiv);
    chatHeadertDiv.appendChild(chatHeaderSeentDiv);
    

    let correspondenceDiv = document.getElementById("correspondence");
    let timeDiv = document.createElement("div");
    timeDiv.setAttribute("class", "time");
    timeDiv.innerHTML = firstChat.correspondence.date;
    correspondenceDiv.appendChild(timeDiv);

    let messages = firstChat.correspondence.messages;
    for (let i = 0; i < messages.length; i++) {
        let div = document.createElement("div");
        let clasName = i%2==0 ? "message my-message" : "message"
        div.setAttribute("class", clasName);
        div.innerHTML = messages[i];
        correspondenceDiv.appendChild(div);                
    }
    chatDiv.prepend(chatHeadertDiv);
}

function getChat(that) {
    let chat = document.getElementById("chat");
    let correspondence = document.getElementById("correspondence");
    chat.removeChild(chat.firstElementChild);
    while (correspondence.hasChildNodes()) {
        correspondence.removeChild(correspondence.lastChild);
    };
    let findedChat = messagesList.find(x => x.id == that.id)
    createChat(findedChat);
    if (window.screen.width <= 640) {
        let contacts = document.getElementById("contacts");
        contacts.style.display = "none";
        chat.style.display = "flex";
        chat.style.width = "100%";
    }
}

function backToContacts() {
    let chat = document.getElementById("chat");
    let contacts = document.getElementById("contacts");
    contacts.style.display = "flex";
    chat.style.display = "none";
}

window.onload = function () {
    showContacts(contacts);
    createChat(messagesList[0]);
}

