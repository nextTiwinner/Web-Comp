const contactTemplate = document.getElementById("contact-card");
const contactsContainer = document.getElementById("contacts-container");

function createContactCard(imageSrc, name, email, phone) {
  const contactCard = contactTemplate.content.cloneNode(true);

  contactCard.querySelector("img").src = imageSrc;
  contactCard.querySelector("h2").textContent = name;
  contactCard.querySelector("p:nth-of-type(1) span").textContent = email;
  contactCard.querySelector("p:nth-of-type(2) span").textContent = phone;

  return contactCard;
}

const contact1 = createContactCard("https://ya62.ru/upload/iblock/db2/f9b7vdg0koc20q5szxcoeirq3zqthj31.jpg", "Андрей", "andrey@example.com", "123-456-789");
const contact2 = createContactCard("https://img.championat.com/c/900x900/news/big/o/h/miranchuk-v-atalante-teper-oficialno_1599244032688896990.jpg", "Алексей", "alex@example.com", "987-654-321");

contactsContainer.appendChild(contact1);
contactsContainer.appendChild(contact2);