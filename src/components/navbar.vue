<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand :to="{ name: 'Home' }">
      <b-icon icon="gem"></b-icon>
      <span class="ml-2">Test Vuejs</span>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <template v-if="loggedUser">
          <b-nav-item :to="{ name: 'Home' }">
            Accueil
          </b-nav-item>
          <b-nav-item :to="{ name: 'About' }">
            A propos
          </b-nav-item>
          <b-nav-item :to="{ name: 'Charts' }">
            Graphs
          </b-nav-item>
        </template>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Utilisateur</em>
          </template>
          <b-dropdown-item :to="{ name: 'Login' }" v-if="!loggedUser">
            <b-icon icon="box-arrow-in-right"></b-icon>
            <span class="ml-2">Login</span>
          </b-dropdown-item>
          <b-dropdown-item :to="{ name: 'Register' }" v-if="!loggedUser">
            <b-icon icon="person-plus"></b-icon>
            <span class="ml-2">S'Inscrire</span>
          </b-dropdown-item>
          <b-dropdown-item @click="logOut" v-if="loggedUser">
            <b-icon icon="box-arrow-in-left"></b-icon>
            <span class="ml-2">Sign Out</span>
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("auth", ["loggedUser"]),
  },
  methods: {
    ...mapActions("auth", {
      logoutAction: "logout",
    }),
    logOut() {
      this.logoutAction();
    },
  },
};
</script>