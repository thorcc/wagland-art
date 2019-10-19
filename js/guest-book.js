const db = firebase.firestore();
const guestBookCol = db.collection("guest-book");


const messages = document.querySelector("#messages");
const messageDiv = document.querySelector("#messageDiv");
const inpName = document.querySelector("#inpName");
const inpMail = document.querySelector("#inpMail");
const button = document.querySelector("button");
const textarea = document.querySelector("textarea");

button.onclick =  addMessage;

async function addMessage(){
  if(inpName.value !== "" && textarea.value !== ""){
    let date = new Date;
    let messageRef = await guestBookCol.add({
      name: inpName.value,
      message: textarea.value,
      mail: inpMail.value,
      date: date
    });
    inpName.value = "";
    inpMail.value = "";
    textarea.value = "";
    messages.innerHTML = "";
    getMessages();
  }
  else{
    alert("Please submit name and comment");
  }
}

async function getMessages() {
  let snap = await guestBookCol.orderBy("date","desc").get();
  for (const doc of snap.docs) {
    let text = doc.data().message;
    let name = doc.data().name;
    let mail = doc.data().mail;

    let date = doc.data().date.toDate();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = date.getFullYear();
    let dateF = dd + '/' + mm + '/' + yyyy;


    let spName = document.createElement("span");
    spName.classList.add("spSender");
    spName.innerText = name;
    let spMessage = document.createElement("span");
    spMessage.classList.add("spMessage");
    spMessage.innerText = text;
    let divMessAndName = document.createElement("div");
    divMessAndName.appendChild(spName);
    divMessAndName.appendChild(spMessage);
    let spDate = document.createElement("div");
    spDate.classList.add("spDate");
    spDate.innerText = dateF;
    let divMessage = document.createElement("div");
    divMessage.classList.add("messageDiv");
    divMessage.appendChild(divMessAndName);
    divMessage.appendChild(spDate);
    messages.appendChild(divMessage);
  }
}

getMessages();