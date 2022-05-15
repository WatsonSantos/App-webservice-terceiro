

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
       
      dado1.textContent = response.logradouro
      dado2.innerHTML = response.bairro
      dado3.innerHTML = response.localidade
      console.log(response)

}
}


form.addEventListener('submit', (e)=>{

   
      Api.getAddress(cepInput.value).then(()=>{
        console.log("Dados encontrados")}
        ).catch((err)=>{
            alert("Houve um erro, tente um cep válido ou tente mais tarde.")  
        })

    e.preventDefault()

})
    
