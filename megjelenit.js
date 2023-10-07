class ListaMegjelenít{
    constructor(LISTA, szuloElem){
        this.LISTA=LISTA;
        this.szuloElem=szuloElem;
        let txt = textWrite(LISTA);
        this.szuloElem.html(txt)
    }
}

function textWrite(LISTA) {  
    let szöveg = "<ul>"
    for (let index = 0; index < LISTA.length; index++) {
         const element = LISTA[index];
         szöveg += `<li>${element}</li>`
    }
    szöveg += "</ul>"
    return szöveg
}

export default ListaMegjelenít





