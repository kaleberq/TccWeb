export default {
  name: 'Login',
  data () {
    return {
      senha: undefined,
      usuario: undefined,
      e1: true,
      e2: false,
      e3: false,
      e4: false
    }
  },
  methods: {
    verificaAutanticacao(){
      let url = 'http://localhost:8082/auth'
      let data = {
        email: this.usuario,
        senha: this.senha
      }
       this.$http.post(url,data).then((res) => {
        console.log(res)
       })
    }
  }
}
