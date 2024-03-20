// JavaScript Document
var db = firebase.apps[0].firestore();
var container = firebase.apps[0].storage().ref();

// Evento que se dispara cuando el contenido del DOM está cargado y listo para interactuar.
document.addEventListener('DOMContentLoaded', function() {
    // Captura el ID del documento desde la URL.
const urlParams = new URLSearchParams(window.location.search);
const docId = urlParams.get('cod'); // 'cod' es el nombre del parámetro en la URL.
// Referencia al documento en Firebase.
var docRef = firebase.firestore().collection('Categories').doc(docId);

// Recupera los datos actuales del documento.
docRef.get().then(function(doc) {
    if (doc.exists) {
        const filetoErr = doc.data().urlImage;
        // Encuentra el botón Aceptar y asigna el evento click.
        var acceptButton = document.getElementById('acceptButton');
        if (acceptButton) {
            acceptButton.addEventListener('click', function() {
                // Llamamos a erraseData aquí, pasando DOCid como argumento.
                erraseData(docId, filetoErr);
            });
        }
    } else {
        console.error("No se encontró 'cod' en la URL o es undefined.");
    }
    })
})

function erraseData(docId, filetoErr){   
    const archivo = filetoErr.files[0];
    const nomarch = archivo.name;
    const metadata ={
        contentType : archivo.type
    }
    container.child('categories/ ' + nomarch ).delete(archivo, metadata)
    
    db.collection('Categories').doc(docId).delete().then(function(){
        console.log("Document Successfully deleted!!.")
    }).catch(function(error){
        console.error("Error Removing document: ", error)
    })
    }
