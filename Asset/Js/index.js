function evaluarOpcion(opcion) {
  // Ocultar todas las imágenes excepto la de Trekking
  $('.imagen').not('#imagenTrekking').hide();

  switch(opcion) {
    case 'trekking':
      console.log('Has seleccionado Trekking');
      var fila = $("<section> <br>");
      var fila2 = $("<section> <br>");
      
      fila.append($("<div>")
      .addClass('imagen')
      .attr('id', 'imagenTrekking')
      .html("<img src='https://wildhawk.in/wp-content/uploads/2019/05/trekking-3.jpg' width='800px' height='500px'>" +
          "<div class='overlay'>" +
          "<h1 class='text fs-1'>TREKKING</h1> <h2 class='text2 fs-3'> Volcan Villarrica <h2>" +
          "</div>")
  );
  


      fila.append($("<div>")
      .attr('id', 'descripcionTrekking')
      .html("<div class='container border bg-light text-start col-6 mt-5 ' ><p class=' text-justify m-0 '>Modalidad de excursismo que consiste en  recorrer a pie largas distancias o zonas determinadas, generalmente de alta montala y poco frecuentadas por el turismo convencional.</p><a type='button' class='btn btn-link p-0'>Conocer más</a> <br> <button type='button' class='btn btn-light'>Agendar actividad</button></div>")
      );


      $("#descripccion").append(fila2);
      $("#imagen").append(fila);

      // Mostrar imagen y descripción de Trekking por defecto
      $('#imagenTrekking').show();
      $('#descripcionTrekking').show();
   
      break;
    case 'natacion':
      console.log('Has seleccionado Natación');
      var fila = $("<section> <br>");
      fila.append($("<div>")
        .addClass('imagen')
        .attr('id', 'imagenNatacion')
        .html("<img src='https://concepto.de/wp-content/uploads/2019/06/natacion-e1562943144215.jpg' width='800px' height='500px'>" +
        "<div class='overlay'>" +
        "<h1 class='text fs-1'>NATACION</h1> <h2 class='text2 fs-3'> Volcan Villarrica <h2>" +
        "</div>")
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