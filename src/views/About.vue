<template>
  <b-container>
    <p><b-icon icon="person-circle" font-scale="5"></b-icon></p>
    <h1>{{ getFullName }}</h1>
    <b-row class="mt-5">
      <b-col>
        <b-card>
          <b-card-header header-bg-variant="transparent" header-border-variant="white">
            <p><b-icon icon="envelope-fill" font-scale="3"></b-icon></p>
            <p class="mb-0">Email</p>
          </b-card-header>
          <b-card-body>
            {{ loggedUser.email }}
          </b-card-body>
        </b-card>
      </b-col>
      <b-col>
        <b-card>
          <b-card-header header-bg-variant="transparent" header-border-variant="white">
            <p><b-icon icon="geo-fill" font-scale="3"></b-icon></p>
            <p class="mb-0">Adresse</p>
          </b-card-header>
          <b-card-body>
            {{ loggedUser.address }}
          </b-card-body>
        </b-card>
      </b-col>
      <b-col>
        <b-card>
          <b-card-header header-bg-variant="transparent" header-border-variant="white">
            <p><b-icon icon="telephone-fill" font-scale="3"></b-icon></p>
            <p class="mb-0">Téléphone</p>
          </b-card-header>
          <b-card-body>
            {{ loggedUser.telephone }}
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("auth", ["loggedUser"]),
    getFullName() {
      return `${this.loggedUser.firstname} ${this.loggedUser.lastname}`;
    },
  },
};
</script>