function moeda(atual){
  return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}

let nome = "Victor Komadaki";
let número = 31; 
let turma = "D";
let série = "1";


function total(){
  let c = document.getElementById("valor").value;
  let j = document.getElementById("juros").value;
  let t = document.getElementById("meses").value;
  if (!Number(c)){
    alert("colocar números");
    document.getElementById("valor").value = "";
    document.getElementById("valor").focus();
    return 
  }

  if (!Number(j)){
    alert("é número cara");
    document.getElementById("juros").value = "";
    document.getElementById("juros").focus();
    return 
  }

  if (!Number(t)){
    alert("mano n sabe o que é número?");
    document.getElementById("meses").value = "";
    document.getElementById("meses").focus();
    return;
  }
  
  let mes= "";
  let r = 0;
  for(let i = 1; i <= t; i++){
      r = c * (1 + (j/100));
      "Mês: "+ i + "valor " + moeda(r) + "<br>";  
     // document.write("Mês " + i + " valor: " + moeda(r) +"<br>");
      c = r;
  }
  document.getElementById("total").innerHTML="Total: "+moeda(r);
  //document.write("Resultado: " + moeda(r));
}


function adicao(){
let val1 = document.getElementById("v1").value;
let val2 = document.getElementById("v2").value;
let r = Number(val1) + Number(val2);
document.getElementById("resultado").innerHTML =r;
}

function subtracao(){
  let val1 = document.getElementById("v1").value;
  let val2 = document.getElementById("v2").value;
  let r = Number(val1) - Number(val2);
  document.getElementById("resultado").innerHTML =r;
  }

  function divisao(){
    let val1 = document.getElementById("v1").value;
    let val2 = document.getElementById("v2").value;
    let r = Number(val1) / Number(val2);
    document.getElementById("resultado").innerHTML =r;
    }
  
    function multiplicacao(){
      let val1 = document.getElementById("v1").value;
      let val2 = document.getElementById("v2").value;
      let r = Number(val1) * Number(val2);
      document.getElementById("resultado").innerHTML =r;
      }
      function porcentagem(){
        let val1 = document.getElementById("v1").value;
        let val2 = document.getElementById("v2").value;
        let c = 100
        let p = Number(val2)  / Number(c)
        let r = Number(val1) * Number(p);
        document.getElementById("resultado").innerHTML =r;
        }

  
