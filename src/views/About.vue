<template>
  <b-container>
    <h1>{{ getFullName }}</h1>
    <b-row class="mt-5">
      <b-col>
        <b-card>
          <b-card-header header-bg-variant="transparent"> Email </b-card-header>
          <b-card-body>
            {{ loggedUser.email }}
          </b-card-body>
        </b-card>
      </b-col>
      <b-col>
        <b-card>
          <b-card-header header-bg-variant="transparent"> Adresse </b-card-header>
          <b-card-body>
            {{ loggedUser.address }}
          </b-card-body>
        </b-card>
      </b-col>
      <b-col>
        <b-card>
          <b-card-header header-bg-variant="transparent"> Téléphone </b-card-header>
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