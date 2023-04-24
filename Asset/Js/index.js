function evaluarOpcion(opcion) {
  // Ocultar todas las imágenes
  $('.imagen').hide();

  switch(opcion) {
    case 'trekking':
      console.log('Has seleccionado Trekking');
      var fila = $("<section> <br>");
      fila.append($("<div>")
        .addClass('imagen')
        .attr('id', 'imagenTrekking')
        .html("<img src='https://wildhawk.in/wp-content/uploads/2019/05/trekking-3.jpg' width='800px' height='500px'>")
      );
      $("#imagen").append(fila);
      break;
    case 'natacion':
      console.log('Has seleccionado Natación');
      var fila = $("<section> <br>");
      fila.append($("<div>")
        .addClass('imagen')
        .attr('id', 'imagenNatacion')
        .html("<img src='https://concepto.de/wp-content/uploads/2019/06/natacion-e1562943144215.jpg' width='800px' height='500px'>")
      );
      $("#imagen").append(fila);
      break;
    case 'ferry':
      console.log('Has seleccionado Ferry');
      var fila = $("<section> <br>");
      fila.append($("<div>")
        .addClass('imagen')
        .attr('id', 'imagenFerry')
        .html("<img src='https://hackercar.com/wp-content/uploads/2021/06/ferry.jpg' width='800px' height='500px'>")
      );
      $("#imagen").append(fila);
      break;
    default:
      console.log('Opción no válida');
      break;
  }
}