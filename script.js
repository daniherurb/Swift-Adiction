function mostrarInfo(album) {
    var mainSquare = document.getElementsByClassName('cuadroPrincipal')[0];
    mainSquare.style.display = 'none'; // Usar = para asignar 'none'

    var infoDiv = document.getElementById('info' + album);
    if (infoDiv.style.display === 'none') {
        infoDiv.style.display = 'block';
    } else {
        infoDiv.style.display = 'none';
    }
}

function volver(album){
    /*vuelve al cuadro principañl*/
    var mainSquare = document.getElementsByClassName('cuadroPrincipal')[0];
    mainSquare.style.display = 'block'; 
    /* oculta la info */
    var infoDiv = document.getElementById('info' + album);
    infoDiv.style.display = 'none';
}