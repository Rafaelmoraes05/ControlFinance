<template>
  <div class="login-wrapper">
    <MatrixBackground />
    <div class="login-container">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Usuário" required>
        <input type="password" placeholder="Senha" required>
        <button type="submit">Entrar</button>
      </form>
    </div>
  </div>
</template>

<script>
import MatrixBackground from './MatrixBackground.vue';

export default {
  name: 'HomeLogin',
  components: {
    MatrixBackground
  }
}
</script>

<style scoped>
.login-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.login-container {
  position: relative;
  z-index: 1;
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
}

.login-container h1 {
  margin-bottom: 20px;
  text-align: center;
}

.login-container form {
  display: flex;
  flex-direction: column;
}

.login-container input {
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
}

.login-container button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #0f0;
  color: black;
  font-weight: bold;
  cursor: pointer;
}

.login-container button:hover {
  background: #0c0;
}
</style>
