<template>
  <nav>
      <RouterLink to="/">
        <h1>Home</h1>
      </RouterLink>
      <RouterLink to="/login">
        <h1>Login</h1>
      </RouterLink>
  </nav>
</template>

<script>
export default {
  name: 'PageHome'
}
</script>

<style lang="scss" scoped>

h1{
  color: var(--light);
}
</style>

