<template>
  <div>{{photos}}</div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData({ $http }) {
    const { data } = await axios.get(
      "https://api-homie-dev.azurewebsites.net/api/v1/listings/313226"
    );
    return { listing: data };
  },
  computed: {
    photos() {
      return this.listing.listingPhotos;
    }
  }
};
</script>

<style>
</style>
