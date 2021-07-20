<template>
  <b-container class="text-left">
    <b-form @submit.prevent="onSubmit">
      <b-form-group id="input-group-1" label="Email:" label-for="email">
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="Entrez votre Email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Mot de passe:"
        label-for="password"
      >
        <b-form-input
          id="password"
          v-model="form.password"
          placeholder="Entrez votre Mot de passe"
          required
        ></b-form-input>
      </b-form-group>

      <b-button class="mt-4" type="submit" variant="success" size="lg" pill block>Se Connecter</b-button>
      <b-button type="button" variant="link" size="lg" pill block :to="{name: 'Register'}">Inscription</b-button>
    </b-form>
  </b-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    ...mapActions("auth", {
      loginAction: "login",
    }),
    onSubmit() {
      let params = { ...this.form };
      this.loginAction(params)
    },
  },
};
</script>

<style scoped>
</style>