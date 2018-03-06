var arrayPeliculas = [];
var arrayVotantes = [];
var peliSeleccionada;
var horarioSeleccionado;
var asientosSelect = 0;
var salaActual;
var total = 0;
var listaSalaAsientos;
var precios= [7.50 , 2.50 , 4.50];
var tipoAsientos = [0, 0, 0];
var tipoAsientosString = ["Adulto", "Niño", "Tercera Edad"];
var listaDeAsientos = [];
function Votante(config){
  this.nombre = config.nombre || "noName";
  this.email = config.email || "example@mail.com";
  this.numero = config.numero || 000000000;
  this.peli = config.peli;
}

function cargarPelis() {
  hello = {
    "Nombre": "Star Wars - La amenaza fantasma",
    "Imagen": "img/sw-1",
    "Anio": "1999",
    "Sinopsis": "La República Galáctica está sumida en el caos.Los impuestos de las rutas comerciales a los sistemas estelares exteriores están en disputa. Esperando resolver el asunto con un bloqueo de poderosas naves de guerra, la codiciosa Federación de Comercio hadetenido todos los envíos al pequeño planeta de Naboo. Mientras el Congreso de la República debate interminablemente esta alarmante cadena de acontecimientos, el Canciller Supremo ha enviado en secreto a dos Caballeros Jedi, guardianes de la paz y la justicia en la galaxia, para resolver el conflicto....",
    "Horarios":[
      "9:55",
     "14:50",
     "20:45"
    ]
  };
  arrayPeliculas.push(hello);
  hello = {
    "Nombre": "Star Wars - El ataque de los clones",
    "Imagen": "img/sw-2",
    "Anioo": "2002",
    "Sinopsis": "En el Senado Galactico. reina la inquietud.Variosmiles de sistemas solareshan declarado su intención de abandonar la República. Este movimiento separatista, liderado por el misteriosoConde Dooku, ha provocado que al limitado número de    Caballeros Jedi les resulte  difícil mantener la paz y el  orden en la galaxia.  La senadora Amidala,    la    antigua reina de Naboo, regresa al Senado Galácticopara dar su voto en la crítica cuestión de crear un EJÉRCITO DE LA REPÚBLICA que ayude a los desbordados    Jedi… ",
    "Horarios":[
      "8:55",
     "16:55",
     "21:05"
    ]
  };
  arrayPeliculas.push(hello);
  hello = {
    "Nombre": "Star Wars - La venganza de los Sith",
    "Imagen": "img/sw-3",
    "Anio": "2005",
    "Sinopsis": "¡Guerra! La República se    desmorona bajo los ataques del    despiadado Lord Sith,    el Conde    Dooku.Hay héroes en ambos    bandos.El mal está por doquier.    En una contundente jugada,    el    diabólico líder droide,    el General    Grievous,    ha irrumpido en la    capital de la República y ha    secuestrado al Canciller    Palpatine,    líder del Senado    Galáctico.    Mientras el ejército droide    separatista trata de huir de la    capital sitiada con su valioso rehén dos Caballeros Jedi    lideran una misión desesperada    para rescatar al Canciller    cautivo....",
    "Horarios":[
      "7:55",
     "19:55",
     "23:05"
    ]
  };
  arrayPeliculas.push(hello);
  hello = {
    "Nombre": "Star Wars - Una nueva esperanza",
    "Imagen": "img/sw-4",
    "Anio": "1977",
    "Sinopsis": "Nos encontramos en un    periodo de guerra civil.Las    naves espaciales rebeldes,    atacando desde una base    oculta,    han logrado su    primera victoria contra    el malvado Imperio    Galáctico.    Durante la batalla,    los    espías rebeldes han    conseguido apoderarse de    los planos secretos del    arma total y definitiva del    Imperio,    la ESTRELLA    DE LA MUERTE,    una estación espacial    acorazada,    llevando en sí    potencia suficiente para    destruira un planeta    entero.    Perseguida por los    siniestros agentes del    Imperio,    la Princesa Leia    vuela hacia su patria,    a    bordo de su nave espacial,    llevando consigo los    planos robados,    que    pueden salvar a su puebloy devolver la libertad a la  galaxia...",
    "Horarios":[
      "7:45",
     "13:55",
     "20:05"
    ]
  };
  arrayPeliculas.push(hello);
  hello = {
    "Nombre": "Star Wars - El imperio contraataca",
    "Imagen": "img/sw-5",
    "Anio": "1980",
    "Sinopsis": "Son tiempos adversos para la    rebelión.Aunque la Estrella de    la Muerte ha sido destruida,    las tropas imperiales han    hecho salir a las fuerzas    rebeldes de sus bases ocultas    y las han persiguen a través de    la galaxia.    Tras escapar de la terrible    Flota Imperial,    un grupo de    guerreros de la libertad,    encabezados por Luke    Skywalker,    ha establecido    una nueva base secreta    en el remoto mundo helado    de Hoth.    El malvado Lord Darth Vader,obsesionado por encontrar al    joven skywalker,    ha eviado    miles de sondas espaciales    hacía las infinitas distancias    del espacio....    ",
    "Horarios":[
      "9:55",
     "14:55",
     "20:05"
    ]
  };
  arrayPeliculas.push(hello);
  hello = {
    "Nombre": "Star Wars - El retorno del Jedi",
    "Imagen": "img/sw-6",
    "Anio": "1983",
    "Sinopsis": "Luke Skywalker ha regresado a    Tatooine,    su planeta de origen,    para intentar rescatar a su    amigo Han Solo de las garras    del malvado Jabba,    el Hutt.    Pero Luke ignora que el IMPERIO    GALÁCTICO ha comenzado en    secreto la construcción de una    nueva estación espacial armada,    más poderosa que la temida    Estrella de la Muerte.    Una vez terminada,  este    arma suprema significará la    aniquilación del pequeño grupo    de rebeldes que lucha para    restaurar la libertad en la    galaxia....    ",
    "Horarios":[
      "9:35",
     "14:35",
     "20:35"
    ]
  };
  arrayPeliculas.push(hello);
  hello = {
    "Nombre": "Star Wars - El despertar de la fuerza",
    "Imagen": "img/sw-7",
    "Anio": "2014",
    "Sinopsis": "Luke Skywalker ha desaparecido.    En su ausencia,    la siniestra    PRIMERA ORDEN ha surgido de    las cenizas del Imperio y no    descansará hasta que Skywalker,    el último Jedi,    haya sido    destruido.    Con el apoyo de la REPÚBLICA,    la General Leia Organa dirige    una valiente RESISTENCIA.    Desesperadamente busca    a su hermano Luke con el fin    de obtener su ayuda para    restaurar la paz y la justicia    en la galaxia.    Leia ha enviado a su piloto    más audaz en una misión secreta    a Jakku,    donde un viejo aliado    ha descubierto una pista  del paradero de Luke....    ",
    "Horarios":[
     "10:55",
     "16:55",
     "21:05"
    ]
  };
  arrayPeliculas.push(hello);
  hello = {
    "Nombre": "Star Wars - Los ultimos jedis",
    "Imagen": "img/sw-8",
    "Anio": "2017",
    "Sinopsis": "Hace mucho tiempo en una galaxia muy, muy lejana [...] La PRIMERA ORDEN impera. Luego de diezmar a la pacífica República, el Líder Supremo Snoke ahora envía a sus despiadadas legiones a asumir el control militar de la galaxia. [...] Sólo la general Leia Organa y su grupo de combatientes de la RESISTENCIA se oponen a la creciente tiranía, convencidos de que el Maestro Jedi Luke Skywalker regresará y restaurará la chispa de esperanza en la lucha. [...] Pero la Resistencia ha sido expuesta. Mientras la Primera Orden se dirige hacia la base rebelde, los valientes héroes organizan un desesperado escape....",
    "Horarios":[
      "9:55",
     "14:55",
     "20:05"
    ]
  };
  arrayPeliculas.push(hello);
  hello = {
    "Nombre": "Star Wars - The clone wars(Pelicula)",
    "Imagen": "img/sw-cw",
    "Anio": "2008",
    "Sinopsis": "Hace mucho tiempo, en una galaxia muy, muy lejana [...] Una Galaxia dividida! Después de obtener la victoria en la Batalla de Geonosis, el ejército de droides del Conde Dooku ha tomado el control de las principales rutas del hiperespacio, aislando a la República de gran parte de su ejército de clones. Con pocos clones disponibles, los generales Jedi no pueden controlar el Borde Exterior conforme más y más planetas se unen a los Separatistas de Dooku. Mientras los Jedi están ocupados con una Guerra, no queda nadie para resguardar la paz. El caos y el crimen se extienden, y los inocentes se vuelven víctimas en una galaxia sin ley. El hijo de Jabba el Hutt ha sido secuestrado por una banda de piratas rivales. Desesperado por salvar a su hijo, Jabba envía una señal de auxilio, una señal que los Jedi responden con cautela......",
    "Horarios":[
      "9:55",
     "14:55",
     "20:05"
    ]
  };
  arrayPeliculas.push(hello);
  hello = {
    "Nombre": "Harry Potter & Der Stein des weissen",
    "Imagen": "img/potter",
    "Anio": "2001",
    "Sinopsis": "Harry Potter es un niño huérfano que vive con sus únicos parientes vivos, la familia Dursley, en un barrio residencial inglés. En su cumpleaños número 11, Harry es visitado por un misterioso individuo llamado Rubeus Hagrid, quien le revela que realmente él es un mago bastante popular en el mundo mágico por haber sobrevivido al ataque mortal de Lord Voldemort cuando sólo tenía un año de edad. Tras haber asesinado a sus padres (James y Lily Potter), Voldemort intentó atacar a Harry pero no consiguió matarlo, dejándole solamente una cicatriz en forma de rayo sobre su frente. Sabiendo esto, Hagrid acompaña a Harry para comprar lo necesario con tal de comenzar su formación en el Colegio Hogwarts de Magia y Hechicería. Sin el consentimiento de sus tíos  ",
    "Horarios":[
      "9:55",
     "14:55",
     "20:05"
    ]
  };
  arrayPeliculas.push(hello);
}

function crearPeli(peli){
  //Crear componentes
  var peliCuerpo = $("<div class='pelicula'>");
  var divEntremedio = $("<div aria-labelledby='arenaLabel' tabindex='-1'></div>");
  var imagenPeli = $("<img src='"+arrayPeliculas[peli].Imagen+".jpg' alt='' aria-labelledby='arenaLabel"+peli+"' id='arenaImg+"+peli+"' tabindex='0' class='imgs first' />");
  var descripPeli = $("<p id='arenaLabel"+peli+"' hidden>Numero "+(parseInt(peli)+1)+" : "+arrayPeliculas[peli].Nombre+"</p>");
  var botton = $("<button type='button' value='Reservar entradas para esta Pelicula' class='btVotar btn btn-primary' aria-label='Pulse enter para continuar con el procesode reserva de entradas para esta peliculas ' ' data-toggle='modal' data-target='#modlaPelicula"+peli+"'>Reservar entradas</button>");

  //Añadir componentes

  divEntremedio.append(imagenPeli,descripPeli,botton);
  var modal = crearModal(peli);
  peliCuerpo.append(divEntremedio,modal);
  $("#main").append(peliCuerpo);
}

function crearModal(peli){
  var peliculas = arrayPeliculas[peli];
  var modalFirst = $("<div class='modal fade' id='modlaPelicula"+peli+"' role='dialog' tabindex ='-1' aria-labelledby='arenaLabel"+peli+"' aria-hidden='true'></div>");
  var modalSecond = $("<div class='modal-dialog' role='document' > </div>");
  var modalContent = $("<div class='modal-content'></div>");
  var modalHeader = $("<div class='modal-header'></div>");
  var modalHeaderContent = $("<h5 class='modal-title' id='exampleModalLabel"+peli+"'>"+peliculas.Nombre+"</h5>");
  var string = "<div class='modal-body' tabindex='0'>Sinopsis: "+peliculas.Sinopsis+" </div>"
  +"<div><h3 class='horarioTitle'>Horarios</h3>"
  for(let i = 0; i < peliculas.Horarios.length; i++){
    string += "<div class='tabHorarios'><span class='spanI'>" + peliculas.Horarios[i] +"</span></div></div><button type='button' aria-label='Pulse enter para reservar una entrada a las "+peliculas.Horarios[i]+"' class='btn btn-success' data-dismiss='modal' onclick='seleccionarEntradas("+peli+",\""+peliculas.Horarios[i]+"\")' >Entradas</button></div>";
  }
  string += "</div>";
  var modalBody =$(string)
  
  
  var modalFooter =$("<div class='modal-footer'></div>");
  var modalFotterContent =$("<button type='button' aria-label='Pulse enter para cancelar la reserva de entradas y volver a la pagina anterior' class='btn btn-danger' data-dismiss='modal'>Cancelar</button>");

  modalHeader.append(modalHeaderContent);
  modalFooter.append(modalFotterContent);
  modalContent.append(modalHeader,modalBody,modalFooter);
  modalSecond.append(modalContent);
  modalFirst.append(modalSecond);

  return modalFirst;
}

$(document).ready(function() {
  cargarPelis();
  for(var i = 0; i<arrayPeliculas.length;i++){
    crearPeli(i);
  }
});

function inicio(){
  $('#main').children().remove();
  for(var i = 0; i<arrayPeliculas.length;i++){
    crearPeli(i);
  }
}

function seleccionarEntradas(peli,hora){
  peliSeleccionada = peli;
  horarioSeleccionado = hora;
  $('#main').children().remove();
  llamarMenuEntradas();
}

function llamarMenuEntradas(){
  t = $('#layer1');
  let menu = $("<div id='menuEntradas' class='col s12'></div>")
  let cabecera =  $("<div class='cabeceraEntradas'>"+
    "<span class='col s4'>Tipo Entrada</span>"+
    "<span class='col s4'>Precio (€)</span>"+
    "<span class='col s4'>Cantidad Entradas</span></div>");
  let adulto = $("<div class='rowEntradas'>"+
    "<span class='col s4'>Adulto</span>"+
    "<span class='col s4'>7,50</span>"+
    "<input class='cantidadEntradas col s4' type='number' readyOnly='true' max='10' min='0' value='0'/></div>");
  let ninio = $("<div class='rowEntradas'>"+
    "<span class='col s4'>Niño</span>"+
    "<span class='col s4'>2,50</span>"+
    "<input class='cantidadEntradas col s4' type='number' readyOnly='true' max='10' min='0' value='0'/></div>");
  let anciano = $("<div class='rowEntradas'>"+
    "<span class='col s4'>Tercera Edad</span>"+
    "<span class='col s4'>4,50</span>"+
    "<input class='cantidadEntradas col s4' type='number' readyOnly='true' max='10' min='0' value='0'/></div>");
  let botones = $("<div class='rowBotones'>"+
  "<button type='button' aria-label='Pulse enter para avanzar a la seleccion de asientos' class='btn btn-success' onclick='comprobarEntradas()'>Seleccionar Asientos</button>"+
  "<button type='button' aria-label='Pulse enter para cancelar la reservar y volver a la seleccion de peliculas' class='btn btn-danger' onclick='inicio()'>Cancelar</button>")

  menu.append(cabecera,adulto,ninio,anciano,botones);
  $('#main').append(menu);
}

function comprobarEntradas(){
    total = 0;
    let entradas = $('.cantidadEntradas');
    for(let i = 0; i < entradas.length; i++){
        tipoAsientos[i] = entradas[i].value;
        total += parseInt(entradas[i].value);
    }
    switch(true){
        case (total == 0):alert('no se han selecionado entradas');break;
        case (total > 10):alert('no se permiten mas de 10 entradas');break;
        default: crearSala();       
    }
}

function crearSala(){
    $('#main').children().remove();
    cargaAsientos();
}

function cargaAsientos(){
    salaActual = -1;
    listaSalaAsientos = load('asientosCompleto');
    if(listaSalaAsientos == undefined){
      listaSalaAsientos = [];
     
    }
    else{
      for(let i = 0; i< listaSalaAsientos.length; i++){
        if(listaSalaAsientos[i].peli == peliSeleccionada && listaSalaAsientos[i].hora == horarioSeleccionado){
          salaActual = listaSalaAsientos[i];
        }
      }
    //salaActual =  listaSalaAsientos[peli][horarioSeleccionado].asientos;
    }
    if(salaActual == -1){
      let newItem = {
        peli: peliSeleccionada,
        hora: horarioSeleccionado,
        asientos:[]
        }
      salaActual = newItem;
      listaSalaAsientos.push(newItem);
    }
    
    asientosSelect = 0;
    let mapa =$("<svg class='sitGroup' width='699' height='600' viewBox='0 0 2400 2400'></svg>");
    let use2=document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use2.setAttribute('href','#layer2');
    use2.setAttribute('width',1000);
    use2.setAttribute('heigth',200);
    use2.setAttribute('x',750);
    use2.setAttribute('y',100);
    mapa.append(use2);
    let counter = 0;
    let dist = 300;
    let disti = 0;
    let counter2 = 0;
    for(let i = 1; i<=9 ; i++){
        for(let j = 1; j<= 9 ; j++, counter ++){
            let use=document.createElementNS('http://www.w3.org/2000/svg', 'use');
            use.setAttribute('href','#layer1');
            use.setAttribute('width',85.256714);
            use.setAttribute('heigth',100.75835);
            use.setAttribute('onclick','interact(this,'+total+')');
            let paint = ocupado(i,j)
            if(paint){
              use.classList.add("red");
            }
            else{
              use.classList.add("blue");
            }
            use.setAttribute('x',i*200+disti);
            use.setAttribute('y',dist + j*200);
            let tooltip=document.createElementNS('http://www.w3.org/2000/svg','title');
            tooltip.innerHTML= ' Asiento ' + (i) +' , Fila: ' + (j)  ;
            mapa.append(use);

            use.appendChild(tooltip);
    //	asientos[i][j]=use;
        }
        counter2 ++;
        if(counter2 == 3){
            disti +=200;
            counter2 = 0;
        }
    
    }
    let menu = $("<div id='menuEntradas'></div>")
    let botones = $("<div class='rowBotones'>"+
    "<button type='button' aria-label='Pulse para reservar los asientos' class='btn btn-success col s6' onclick='comprobarAsientos()'>Pago</button>"+
    "<button type='button' aria-label='Pulse enter para cancelar la reservar y volver a la seleccion de peliculas' class='btn btn-danger col s6' onclick='inicio()'>Cancelar</button>")

    menu.append(botones);
    $('#main').append(mapa,menu);
}

function ocupado(x,y){
  for (let i = 0; i < salaActual.asientos.length; i++){
    if(parseInt(salaActual.asientos[i].x) == x && parseInt(salaActual.asientos[i].y) == y){
      return true;
    }
  }
  return false;
}

function confirm(){
  for(let i = 0;i < $('.green').length; i++){
    let name = $('.green')[i].children[0].textContent;
    var nameSplit = name.split(' ');
    newItem = {
      x: nameSplit[2],
      y: nameSplit[5]
    }
    salaActual.asientos.push(newItem);
  }
  for(let i = 0; i< listaSalaAsientos; i++){
    if(listaSalaAsientos[i].peli == salaActual.peli && listaDeAsientos[i].hora == salaActual.hora){
     listaSalaAsientos[i] = salaActual;
    }
  }
  save(listaSalaAsientos, 'asientosCompleto');
}

function interact(event,total){
    let target = event;
    
	if(target.classList.contains("blue") && total > asientosSelect){
        target.classList.replace("blue","green");
        asientosSelect++;
    }
	else if(target.classList.contains("green")){
        target.classList.replace("green","blue");
        asientosSelect--;
    }
    
}

function comprobarAsientos(){
  listaDeAsientos = [];
  for(let i = 0;i < $('.green').length; i++){
    listaDeAsientos.push($('.green')[i].children[0].textContent);
  }
    switch(true){
        case (asientosSelect < total):alert("no se han selecionado todos los asientos reservados");break;
        case (asientosSelect == total):confirm();continuarPago();
    }
}

function continuarPago(){
  let precioTotal =0;
    $('#main').children().remove();
    let string = "<div class='collection'>"
    string += "<a href='#!' class='collection-item'><span class='badge'>"+horarioSeleccionado+"</span>Hora:</a>"
    for (let i = 0; i < tipoAsientos.length; i++){
      precioTotal += tipoAsientos[i]* precios[i];
     string += "<a href='#!' class='collection-item'><span class='badge'>"+tipoAsientos[i]+"</span>"+tipoAsientosString[i]+"</a>"
    }
    string += "<a href='#!' class='collection-item'><span class='badge'>"+precioTotal+"€</span>Precio Total</a>"
    string += "</div>"
    let component = $(string);

    string ="<div class='collection'>";
    for(let i = 0; i < listaDeAsientos.length; i++){
      string += "<a href='#!' class='collection-item'><span class='badge'>"+listaDeAsientos[i]+"</span>Posicion</a>"
    }
    string += "</div>"

    let component2 = $(string);
    /*<div class='collection'>
      <a href='#!' class='collection-item'><span class='badge'>1</span>Alan</a>
      <a href='#!' class='collection-item'><span class='new badge'>4</span>Alan</a>
      <a href='#!' class='collection-item'>Alan</a>
      <a href='#!' class='collection-item'><span class='badge'>14</span>Alan</a>
    </div>*/
            
    let form = $("<div class='row'>"+
                    "<form onsubmit='evento()' action='#inicio()' class='col s12'>"+
                        "<div class='row'>"+
                            "<div class='input-field col s12'>"+
                                "<input placeholder='myemail@mail.com' id='email' required type='email' class='validate'>"+
                                "<label for='email'>Email</label>"+
                            "</div>"+
                        "</div>"+
                        "<div class='row'>"+
                            "<div class='input-field col s12'>"+
                                "<input placeholder='Ex : 2933-3920-3023' id='creditCardNumber' pattern='[0-9]{13,16}' required type='text' class='validate'>"+
                                "<label for='creditCardNumber'>Card Number</label>"+
                            "</div>"+
                        "</div>"+
                        "<div class='row'>"+
                            "<div class='input-field col s3'>"+
                                "<input placeholder='MM' id='exprie' type='number' max='12'  required min='1' class='validate'>"+
                                "<label for='expire'>Expiry Month</label>"+
                            "</div>"+
                            "<div class='input-field col s3'>"+
                                "<input placeholder='YY' id='year' type='text'  min='2018' required max='2035' class='validate'>"+
                                "<label for='year'>Expiry Year</label>"+
                            "</div>"+
                            "<div class='input-field col s3'>"+
                                "<input placeholder='CCV' id='ccv' type='text' min='0' required max='999' class='validate'>"+
                                "<label for='ccv'>CCV</label>"+
                            "</div>"+
                        "</div>"+
                        "<div class='row'>"+
                            "<div class='input-field col s12'>"+
                                "<input placeholder='Ex: Mara De la Cruz ' id='cardHolderName' type='text' class='validate'>"+
                                "<label for='cardHolderName'>Dueño</label>"+
                            "</div>"+
                        "</div>"+
                        "<button type='submit' aria-label='Pulse enter para avanzar a la seleccion de asientos' class='btn btn-success' >Confirmar</button>"+
                        "<button type='button' aria-label='Pulse enter para cancelar la reservar y volver a la seleccion de peliculas' class='btn btn-danger' onclick='inicio()'>Cancelar</button>"+
                      
                    "</form>"+
                    "</div>");

    $('#main').append(component,component2,form);
}

function evento(){
  let mail = $('#email').val();
  let cardnumber = $('#creditCardNumber').val();
  let mont = $('#eprie').val();
  let year = $('#year').val();
  let holder = $('#cardHolderName').val();
  let newItem = {Compra:{
    email:mail,
    cardnumber:cardnumber,
    month: mont,
    year: year,
    cardHolder: holder
  }}
  let lista = load('listaCompra');
  if(lista == undefined){
    lista = [];
  }
    lista.push(newItem);
  save(lista,'listaCompra');

  alert("Se ha realizado la reserva con exito.")
  inicio();
 return false;
}
 