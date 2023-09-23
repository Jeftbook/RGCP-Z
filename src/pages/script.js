//Despues lo borro xd
//Cosa a imprimir

<div class="minificha">
    <div class="img_perfil_soporte">
        <div class="img_perfil_micro"><img src="../img/elguillo.jpeg" /></div>
    </div>
    <table>
        <td class="nmb">Rosendo Her&aacute;clito Guido Bustamante</td>
        <td class="movil">54 9 3541 345345</td>
        <td class="ml">guillebooquit@super-gmail.com</td>
        <td>edit/delete</td>
    </table>
</div>

window.addEventListener('load', () => {
    updateTable();
});

function updateTable() {
    fetch('http://localhost:3000/users')
        .then((response) => response.json())
        .then((users) => {
            while (usersTable.rows.length > 1) {
                usersTable.deleteRow(1);
            }

            users.forEach((user) => {
                const tr = document.createElement('tr');
                tr.innerHTML = `<td>${user.Nombre}</td><td>${user.Apellido}</td> <button class="delete-button" data-id="${user.id}">Eliminar</button></td> <button class="update-button" data-id="${user.id}">Actualizar Informacion</button></td>`;
                usersTable.appendChild(tr);
            });
        });
}