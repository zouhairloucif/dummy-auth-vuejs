<template>
  <div class="home">
    <h1>Bienvenue vers la page d'accueil</h1>
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
