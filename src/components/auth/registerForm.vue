<template>
  <b-container class="text-left">
    <b-form @submit.prevent="onSubmit">
      <b-form-group label="Prénom:" label-for="Prenom">
        <b-form-input
          id="Prenom"
          v-model="form.firstname"
          type="text"
          placeholder="Entrez votre Prénom"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Nom:" label-for="Nom">
        <b-form-input
          id="Nom"
          v-model="form.lastname"
          type="text"
          placeholder="Entrez votre Nom"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Email:" label-for="email">
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="Entrez votre Email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
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

      <b-form-group label="Adresse:" label-for="Adresse">
        <b-form-input
          id="Adresse"
          v-model="form.address"
          type="text"
          placeholder="Entrez votre Adresse"
          required
        ></b-form-input>
      </b-form-group>

      
      <b-form-group label="Telephone:" label-for="Telephone">
        <b-form-input
          id="Telephone"
          v-model="form.telephone"
          type="text"
          placeholder="Entrez votre Telephone"
          required
        ></b-form-input>
      </b-form-group>

      <b-button class="mt-4" type="submit" variant="success" size="lg" pill block>S'inscrire</b-button>
      <b-button type="button" variant="link" size="lg" pill block :to="{name: 'Login'}">Authentification</b-button>
    </b-form>
  </b-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        firstname: null,
        lastname: null,
        email: null,
        password: null,
        address: null,
        telephone: null,
      },
    };
  },
  methods: {
    ...mapActions("auth", {
      registerAction: "register",
    }),
    onSubmit() {
      let params = { ...this.form };
      this.registerAction(params)
    },
  },
};
</script>

<style scoped>
</style>