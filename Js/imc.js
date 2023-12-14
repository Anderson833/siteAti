
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
// Variaveis globais 
var soma=0; var valorSalario=0; var numx=""; var contador=0; var subtracao=0; 
// variavel para fazer ação com a tecla ente
var valorDivida=document.getElementById("valor");
var valorDivida=document.getElementById("valor");
var grana=document.getElementById("remuneracao").value;
var btadd=document.getElementById("botao");


valorDivida.addEventListener("keyup",function (event){
  if(event.keyCode===13){
   event.preventDefault();
   btadd.click();
  }
});

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
function pegaDadosCalcularValores(){
// Pegar os dados das informações como valor aplicado, gasto e saldo
  var gastos=document.getElementById("gastos");
  var saldos=document.getElementById("saldo");
   grana=document.getElementById("remuneracao").value;
  var valor=document.getElementById("valor").value;
  var calcularVaolres=verificaCampos(grana,valor);
    if(calcularVaolres===true){
    }else{
        valor=parseFloat(valor);
        soma=parseFloat(soma);
        soma=soma+valor;
        gastos.innerHTML=soma;
      
        grana=parseFloat(grana);
        valorSalario=grana;
         subtracao=parseFloat(valorSalario-soma);
        saldos.innerHTML=subtracao;
        

        if(subtracao<0){
          saldos.innerHTML=saldos.style.color='red';
          saldos.innerHTML=subtracao;
        }
        
        //meétodo para seta na lista
        setaOsDados(valor);
        //Método para limpar os campos de valor e descrição
       limparCampos();
    }
}

  let listagem=document.getElementById('areaLista');
 
  // Método para lista os dados
 function setaOsDados(valor){
    var descricao=document.getElementById("descricao").value;   
      contador++;

    let printLista=`<div id="${contador}" class="item">
    <div class="valorDigitado">
    ${valor}
    </div>  
    <div class="descricaoDigitada">
    ${descricao}
    </div> 
    <button class="bt" id="deletar" onclick=excluirDados(${contador},${valor})>Excluir</button>
</div>`;
     listagem.innerHTML += printLista;
     console.log("Qtd "+contador);
     ordenar(contador);
 }


/**
 * Método para deleta item com seu valor
 * @param {*} id 
 * @param {*} valor 
 */
 function excluirDados(id,valor){
   let item =document.getElementById(id);
   var gastos=document.getElementById("gastos");
   var saldos=document.getElementById("saldo");
   /// valorSaldo=valorSaldo.parseFloat(valorSaldo)
    soma=soma-valor;
    subtracao=subtracao+valor;
   gastos.innerHTML=soma;
    saldos.innerHTML=subtracao;
   item.remove();
 }



 function ordenar(id){
  var item =document.getElementById(id);
  var classe=item.getAttribute('class');
  if(classe == "item"){
    item.parentNode.appendChild(item);
    console.log(classe)
  }
  
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
/**
 *  Método para limpar os campos de valor e descição
 */
  function limparCampos(){
    let desc=document.getElementById("descricao");
    let valor=document.getElementById("valor");
    desc.value="";
    valor.value="";
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

  /**
   * Método para deixar o valor aplicado em casas decimais
   */
  function valoresEmDecimais(){
    let salario=document.getElementById("remuneracao").value;
     let valorDigitado=colocarEmCasaDecimais(salario);
     document.getElementById("remuneracao").value=valorDigitado;

     if(soma!==0 && subtracao!==0){
        var valoresAlterados=salario-soma;
        document.getElementById("saldo").innerHTML=valoresAlterados;
     }

     if(subtracao<0){
      saldos.innerHTML=saldos.style.color='red';
      saldos.innerHTML=subtracao;
    }
     
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