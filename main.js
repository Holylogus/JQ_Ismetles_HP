import {ESEMENY_TERVEK} from "./adatok.js";
import ListaMegjelenít from "./megjelenit.js";


$(document).ready(function () {
    const szuloElem = $(".tartalom")
    displayFunction(ESEMENY_TERVEK,szuloElem);

});

function displayFunction (LISTA,szuloElem) {
    new ListaMegjelenít(LISTA, szuloElem);
}
/*----------------------------1.Lépés------------------------------*/

/*IMPORTÁLVA MEGJENELÍT.JS-BŐL*/
/*function displayFunction (textWrite) {
    const szuloElem = $(".tartalom")
   szuloElem.html(textWrite)};
}*/ 
/*-----------------------------------------------------------------*/


