document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const contactList = document.getElementById('contact-list');

    // Load contacts from localStorage
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    savedContacts.forEach(contact => addContactToDOM(contact));

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const contact = {
            firstName: firstNameInput.value.trim(),
            lastName: lastNameInput.value.trim(),
            phone: phoneInput.value.trim(),
            email: emailInput.value.trim()
        };
        addContactToDOM(contact);
        saveContact(contact);
        contactForm.reset();
    });

    function addContactToDOM(contact) {
        const li = document.createElement('li');
        li.textContent = `${contact.firstName} ${contact.lastName} - ${contact.phone} - ${contact.email}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Видалити';
        deleteButton.addEventListener('click', function() {
            li.remove();
            deleteContact(contact.email);
        });

        li.appendChild(deleteButton);
        contactList.appendChild(li);
    }

    function saveContact(contact) {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        contacts.push(contact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }

    function deleteContact(email) {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        const updatedContacts = contacts.filter(contact => contact.email !== email);
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    }
});
