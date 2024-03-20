var db = firebase.apps[0].firestore();
const tabla = document.querySelector('#tablaCateg') ;

db.collection("Categories").get().then(function(query){
    tabla.innerHTML="";
var salida = "<table class=\"table table-striped\">" +
                    "    <thead>" +
                    "        <tr>" +
                    "            <td><strong>Código</strong></td>" +
                    "            <td><strong>Nombre</strong></td>" +
                    "            <td><strong>Descripción</strong></td>" +
                    "            <td colspan='2' align='center'><strong>Modificar</strong></td>" +
                    "        </tr>" +
                    "    </thead><tbody>";
    query.forEach(function(doc){
        salida += '<tr>'
        salida += '<td><a href="lstproductos.html?cod=' + doc.data().CategoryID + '">' + doc.data().CategoryID +'<a/></td>';
        salida += '<td>'+ doc.data().CategoryName + '</td>';
        salida += '<td>'+ doc.data().Description + '</td>';

        salida += '<td align="center"><a href="modifyCategory.html?cod=' + doc.id + ' ">Editar<a/></td>';
        salida += '<td align="center"><a href="deleteInfo.html?cod=' + doc.id + '">Borrar<a/></td>';

        salida += '</tr>'
    })
    salida += "</tbody></table>";
    tabla.innerHTML = salida;
})
