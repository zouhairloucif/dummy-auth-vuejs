<template>
  <div class="home">
    <h1>Bienvenue vers la page d'accueil</h1>
    <div class="my-4">
      <b-icon icon="person-circle" font-scale="5"></b-icon>
    </div>
    <h3>{{getFullName}}</h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'Home',
  computed: {
    ...mapGetters("auth", ["loggedUser"]),
    getFullName() {
      return `${this.loggedUser.firstname} ${this.loggedUser.lastname}`;
    },
  },
};
</script>
