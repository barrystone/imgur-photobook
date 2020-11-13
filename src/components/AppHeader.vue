<template>
  <div class="ui pointing menu">
    <div class="active item">Image Storage</div>
    <div class="right menu">
      <a href="#" class="ui item" @click="login">
        Login
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AppHeader',
  methods: {
    ...mapActions(['login']),
  },
};
</script>

<style></style>
