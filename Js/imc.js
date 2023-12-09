
function calcular(){

var num1= document.getElementById("n1").value;   
var num2=document.getElementById("n2").value;

const rst=document.getElementById("resultado");
let numero1=parseFloat(num1);
let numero2=parseFloat(num2);
const total=parseFloat(numero1+numero2);
rst.innerHTML=total;
}

function aviso(){
    var valor=document.getElementById("valor").value;
    let preco=parseFloat(valor);

    var seta =document.getElementById("gastos");
    seta.innerHTML=preco.toFixed(2);
}
var soma=0; var valorSalario=0; var numx="";

function  verificaCampos(valor1,valor2){
var verificar=false;
  if(valor1==="" || valor1===null){
    alert("Preencha o campo de valor aplicado:")
    document.getElementById("remuneracao").focus();
    verificar=true;
  }else if(valor2==="" || valor2===null){
    alert("Preencha o campo de valor:")
    document.getElementById("valor").focus();
    verificar=true;
  }else{
    verificar=false;
  }
    return verificar;
}
// Método para executar os calculos
function pegaDados(){
// Pegar os dados das informações como valor aplicado, gasto e saldo
  var grana=document.getElementById("remuneracao").value;
  var gastos=document.getElementById("gastos");
  var saldos=document.getElementById("saldo");
  var valor=document.getElementById("valor").value;
  var calcularVaolres=verificaCampos(grana,valor);
  var analisarCampoDescricao=verificaCampoDescricao();
    if(calcularVaolres===true && analisarCampoDescricao===true){
    }else{
        valor=parseFloat(valor);
        soma=parseFloat(soma);
        soma=soma+valor;
        gastos.innerHTML=soma;
       
        grana=parseFloat(grana);
        valorSalario=grana;
        let subtracao=parseFloat(valorSalario-soma);
        saldos.innerHTML=subtracao;
     
        if(subtracao<0){
          saldos.innerHTML=saldos.style.color='red';
          saldos.innerHTML=subtracao;
        }
         
        //meétodo para seta na lista
        setaOsDados(valor);
       
    }
}

  let listagem=document.getElementById('areaLista');
 
  // Método para lista os dados
 function setaOsDados(valor){
    var descricao=document.getElementById("descricao").value;   
    let printLista=`<div class="item">
    <div class="valorDigitado">
    ${valor}
    </div>  
    <div class="descricaoDigitada">
    ${descricao}
    </div> 
    <button class="bt">Excluir</button>
</div>`;
     listagem.innerHTML += printLista;
 }



 function setaSalario(){
    var valorAplicar=document.getElementById("salario");
    valorAplicar.innerHTML=`<input type="text" id="descricao" placeholder="ex: 100" >`;
    var slr=valorAplicar.value;
    var passarFlot=parseFloat(slr);
    var setaValor=valorAplicar;
    innerHTML=`<div class="item-total" ondblclick="setaSalario()" id="salario">
    <p>${passarFlot}</p>
   </div>`
 }

 function removerLetras(String){
  
   return String.replace(/[^0-9.]/g,"");
 }

 function apenasCaracteres(String){
  
    return String.replace(/[^a-zA-Z,]/g,"");
  }

  let cont=0;


  function verificaCampoValorAplicado(){
    var id="remuneracao";
    apenasNumeros(id)
  }

  function verificaCampoDeValor(){
    var id="valor";
    apenasNumeros(id)
  }

  function verificaCampoDescricao(){
    let analisar=false;
   let desc=document.getElementById('descricao').value;

   if(desc==="" || desc===null){
     alert("Preenchar o campo da descrição, caso contrário vai se nulo:")
    analisar=true;
   }else{
      analisar=false;
   }
     return analisar;
  }

function apenasNumeros(campo){
    var rmnc=document.getElementById(campo).value;
    var convertValor=rmnc.toString();
  let letras=removerLetras(convertValor);

    var caracters=document.getElementById(campo).value;
    console.log("Quantidade de cart "+caracters.length)

    if(caracters.length==15){
        document.getElementById(campo).disabled=true;
alert("Chegou ao limite de caracteres!")
document.getElementById(campo).disabled=false;
    }

     if(rmnc==="" || rmnc===null || rmnc===NaN){
      // alert("Campo limpo, caso apareça o nome NaN. Pressione o botão de limpa e fique segurando por alguns segundos.")
       document.getElementById(campo).focus();
     }

     if(rmnc!==letras){  
      document.getElementById(campo).value=numx;
      //console.log("Quantidade de removidos ")
      alert("Digite apenas números.")
     }else{
         var num=parseFloat(convertValor);
          numx=num;
     }
   
     let a=document.getElementById(campo).value;
     if(a.match(/[.]/)){
    cont++;
    console.log("contagem "+cont)

     }

     if(cont===1){
        document.getElementById(campo).value=numx;
     }else{
        cont=0;
     }

     if(isNaN(rmnc)){
        document.getElementById(campo).value=numx;
     }
      
}


 function iniciaComFocus(){
    document.getElementById("remuneracao").focus();

 }

function converterNaN(valor) {
    return isNaN(valor) ? 0 : valor;
  }

function colocarEmCasaDecimais(valor){
    valor =parseFloat(valor).toFixed(2);
    return valor;
  }
function informaSalario(){
    var remuneracao=document.getElementById("salario");
   var x=parseFloat(prompt('Informe o salario:'));
   if(isNaN(x)){
     alert('Digite apenas números!')
     informaSalario();
   }else{
    remuneracao.innerHTML=x.toFixed(2);
    valorSalario=x;
   }
}