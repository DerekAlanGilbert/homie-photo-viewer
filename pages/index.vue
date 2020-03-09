<template>
  <div class="relative">
    <div
      class="w-full h-auto bg-darkGrey flex justify-between items-center px-4 py-2 text-xxs fixed z-50"
    >
      <div>
        <h1 class="text-lg font-bold m-0 p-0 text-white">
          Homie photo viewer
        </h1>
      </div>
      <div>
        <button
          :class="[
            { 'bg-darkGrey-light': selectedView === 'Single' },
            'mr-2  rounded py-1 px-2 transition ease-in-out duration-700 hover:bg-lightGrey-dark focus:outline-none text-lightGrey-medium'
          ]"
          @click="selectedView = 'Single'"
        >
          Stacked
        </button>
        <button
          :class="[
            { 'bg-darkGrey-light': selectedView === 'Double' },
            'mr-2  rounded py-1 px-2 transition ease-in-out duration-700 hover:bg-lightGrey-dark focus:outline-none text-lightGrey-medium'
          ]"
          @click="selectedView = 'Double'"
        >
          Double
        </button>
        <button
          :class="[
            { 'bg-darkGrey-light': selectedView === 'Triple' },
            'mr-2  rounded py-1 px-2 transition ease-in-out duration-700 hover:bg-lightGrey-dark focus:outline-none text-lightGrey-medium'
          ]"
          @click="selectedView = 'Triple'"
        >
          Triple
        </button>
      </div>
    </div>
    <div
      :class="[
        { 'grid-cols-1': selectedView === 'Single' },
        { 'grid-cols-2': selectedView === 'Double' },
        { 'grid-cols-3': selectedView === 'Triple' },
        'grid pt-8'
      ]"
    >
      <div
        v-for="(photo, index) in photos"
        :key="index"
        class="relative pb-3/5"
      >
        <img
          :src="photo.uri"
          alt=""
          class="h-full w-full object-cover absolute top-0 left-0"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      listing: [],
      selectedView: 'Single'
    }
  },
  computed: {
    photos() {
      return this.listing.listingPhotos
    },
    photosCount() {
      return this.listing.listingPhotos.length
    }
  },
  async mounted() {
    const { data } = await axios.get(
      'https://api-homie-dev.azurewebsites.net/api/v1/listings/349706'
    )
    this.listing = data
  }
}
</script>

<style></style>
