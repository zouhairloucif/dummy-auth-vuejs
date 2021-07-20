<template>
  <b-container class="text-left form-container my-5">
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
          type="password"
          placeholder="Entrez votre Mot de passe"
          required
        ></b-form-input>
      </b-form-group>

      <b-button class="mt-4" type="submit" variant="success" size="lg" pill block>
        <b-icon icon="box-arrow-in-right"></b-icon>
        <span class="ml-2">Se Connecter</span>
      </b-button>
      <b-button type="button" variant="link" size="lg" pill block :to="{name: 'Register'}">
        <b-icon icon="person-plus"></b-icon>
        <span class="ml-2">S'inscrire</span>
      </b-button>
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
.form-container {
  max-width: 800px;
}
</style>