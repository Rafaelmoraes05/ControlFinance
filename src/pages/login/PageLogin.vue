<template>
  <div class="planodefundo">
    <MatrixBackground/>
    <form @submit.prevent="doLogin()" class="form-login">
      <div class="card">
        <div class="card-header text-center">
          <h1>ControlFinance</h1>
        </div>
        <div class="card-body">
          <div class="form-group">
            <input required type="email" v-model="email" class="form-control" placeholder="E-mail" />
          </div>
          <div class="form-group">
            <input
              required
              type="password"
              v-model="password"
              class="form-control"
              placeholder="Senha"
            />
          </div>
          <button class="btn btn-primary w-100">
            Enviar
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';
import MatrixBackground from '@/components/MatrixBackground.vue';
export default {
  name: 'PageLogin',
  components: {
    MatrixBackground
  },
  data() {
    return {
      email:'',
      password:''
    }
  },
  methods: {
    async doLogin (){

      const { email, password } = this

      try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form-login{
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 20pt;
  }

  .card{
    width: 25%;
    color: var(--darker);
  }
  input {
    margin-bottom: 20px;

  }

  button {
    color: var(--darker);
  }
}

</style>
