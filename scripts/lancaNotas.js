const select = document.getElementById("select");
const tabelaNotas = document.getElementById("tabela-notas");

let turmaN1 = [
    ["Maria", 7.8, 9, 8], 
    ["João", 6.9, 10, 5],
    ["Helena", 8.3, 7.5, 6],
    ["Marcos", 3.5, 9, 8.5],
    ["Beatriz", 7, 8, 10],
    ["Ana", 5.8, 7.5, 9]
];

let turmaN2 = [
    ["Camila", 6, 7.5, 8.2], 
    ["Bruno", 10, 10, 6],
    ["Pedro", 6.4, 8.3, 9],
    ["Paula", 9.8, 6, 7.6],
    ["Lara", 8, 9, 7],
    ["Eduardo", 5.8, 7.5, 7],
    ["Fernando", 5, 9.3, 8.5],
    ["Patrícia", 7.5, 8, 7.3]
];

function calculaMedia(aluno){
    let media = 0;
    for(k = 1; k < aluno.length; k++){
        media += aluno[k];
    }
    media = media/(aluno.length - 1);
    return media;
}

function setTabelaNotas(){
    let turma = null;
    if(select.value == "TurmaN1")
    turma = turmaN1;
    else 
    turma = turmaN2;

    //thead
    if(document.getElementById("tabela-notas").rows.length != 0){   
        tabelaNotas.removeChild(tabelaNotas.getElementsByTagName("thead")[0]);
    }

    let cabecalho = ["Nome","Prova 1", "Prova 2", "Prova3","Média Final"];
    let headTabela = document.createElement('THEAD');
    let trHead = document.createElement("TR");
    for(h = 0; h < cabecalho.length; h++){
        let th = document.createElement("TH");
        let thText = document.createTextNode(cabecalho[h]);
        th.appendChild(thText);
        trHead.appendChild(th);
    }
    headTabela.appendChild(trHead);
    tabelaNotas.appendChild(headTabela);
    
    //body
    if(document.getElementById("tabela-notas").tBodies.length != 0){
        tabelaNotas.removeChild(tabelaNotas.getElementsByTagName("tbody")[0]);
    }

    let corpoTabela = document.createElement('TBODY');
    corpoTabela.setAttribute("id","corpo-tabela");

    for(i = 0; i < turma.length; i++){
        let trx = document.createElement("TR");
        corpoTabela.appendChild(trx);
        let mediaAluno = turma[i].push(calculaMedia(turma[i]).toFixed(2));
        for(j = 0; j < turma[i].length; j++){
            let td = document.createElement("TD");
            let tdText = document.createTextNode(turma[i][j]);
            td.appendChild(tdText);
            trx.appendChild(td);
        }
        corpoTabela.appendChild(trx);
        turma[i].pop();
    }
    tabelaNotas.appendChild(corpoTabela);
}

  