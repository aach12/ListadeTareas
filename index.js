var Contact = function (tarea, estado) {
    this.tarea = tarea;
    this.estado = estado;
}

var contacts = [];

var listContacts = function () {
    document.getElementById('displayContacts').innerHTML = " ";
    for (var i = 0; i < contacts.length; i++) {console.log(contacts[i])
         var claseCompletado=''
        if (contacts[i].estado=='completado') {claseCompletado = contacts[i].estado}; console.log(claseCompletado);
        document.getElementById('displayContacts').innerHTML += '<tr class="' + claseCompletado +'"><td id="tarea' + i + '">' + contacts[i].tarea + '</td><td><button class="editbut" onclick=updateContact(' + i + ')>Editar</button></div><button class="deletebut" onclick=deleteContact(' + i + ')>Eliminar</button></td></tr><button class="listobut" onclick=ActualizarEstado(' + i + ')>Listo</button></td></td>';
    }
    document.getElementsByClassName("marcador")[0].innerHTML = contacts.length
}

var addNewContact = function () {
    var tarea = document.getElementById('inputTarea').value;
    var contact = new Contact(tarea, "pendiente");
    contacts.push(contact);
    listContacts();
}

var ActualizarEstado = function (i) {
    contacts[i].estado = 'completado';
    listContacts();
}

var deleteContact = function (i) {
    contacts.splice(i, 1);
    listContacts();
}

var updateContact = function (i) {
    contactId = i;
    document.getElementById("inputTarea").value = contacts[i].tarea;
    document.getElementById("submitButtons").innerHTML = '<button id="updateButton" class="editbut" onclick=submitUpdatedContact(contactId)>Modificar</button>';

}

var submitUpdatedContact = function (i) {
    contacts[i].tarea = document.getElementById("inputTarea").value;
    document.getElementById("inputTarea").value = "";
    document.getElementById("submitButtons").innerHTML = '<button type="button" class="agregarbut" onclick="addNewContact()">Agregar</button>';

    listContacts();
}


listContacts();