
const form = document.getElementById("formulario")
const cepInput = document.getElementById("input-dados")

class Address{
    constructor({logradouro, bairro, localidade}){
        this.logradouro = logradouro,
        this.bairro = bairro,
        this.localidade = localidade
    }
}


class Api{
    static async getAddress(cep){
      const response = new Address((await axios.get(`https://viacep.com.br/ws/${cep}/json/`)).data)
     if(!response || response.logradouro == undefined){
        alert("Informe um cep válido!")
     }else{

        dado1.textContent = response.logradouro
       dado2.innerHTML = response.bairro
       dado3.innerHTML = response.localidade
       console.log(response)

     }
      
      
}
}

//69082-542
form.addEventListener('submit', (e)=>{
    
    Api.getAddress(cepInput.value).then(()=>{
        console.log("Dados encontrados")}
        ).catch((err)=>{
            alert("Houve um erro, tente um cep válido ou tente mais tarde.")  
            console.log(err)
        })

    e.preventDefault()

})
    
