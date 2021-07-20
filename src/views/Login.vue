<template>
    <b-container>
        <h1>Bienvenue au page d'Authentificaion</h1>
        <login-form />
    </b-container>
</template>

<script>
import loginForm from '../components/auth/loginForm.vue'
export default {
  components: { loginForm },
}
</script>

<style scoped>

</style>