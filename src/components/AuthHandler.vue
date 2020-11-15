<template>
  <div>
    Please wait...
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AuthHandler',
  methods: mapActions(['finalizeLogin']),
  created() {
    //Testing URL also modified login() action in autth.js module
    window.location.hash = '#access_token=testasdasdasdasdasd';

    this.finalizeLogin(window.location.hash);
  },
};
</script>

<style></style>
