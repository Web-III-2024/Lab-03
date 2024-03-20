var db = firebase.apps[0].firestore();
const tablaProductos = document.querySelector('#tablaProductos');

db.collection("productos").get().then(function(query) {
    tablaProductos.innerHTML = "";
    var salida = "<table class=\"table table-striped\">" +
                    "    <thead>" +
                    "        <tr>" +
                    "            <td><strong>ID</strong></td>" +
                    "            <td><strong>Nombre</strong></td>" +
                    "            <td><strong>Descripción</strong></td>" +
                    "            <td><strong>Precio</strong></td>" +
                    "            <td><strong>Cantidad</strong></td>" +
                    "            <td><strong>Estado</strong></td>" +

                    "        </tr>" +
                    "    </thead><tbody>";
    query.forEach(function(doc) {
        salida += '<tr>';
        salida += '<td>' + doc.data().ID + '</td>';
        salida += '<td>' + doc.data().Nombre + '</td>';
        salida += '<td>' + doc.data().Descripción + '</td>';
        salida += '<td>' + doc.data().Precio + '</td>';
        salida += '<td>' + doc.data().Cantidad + '</td>';
        salida += '<td>' + doc.data().Estado + '</td>';
        salida += '</tr>';
    });
    salida += "</tbody></table>";
    tablaProductos.innerHTML = salida;
});
