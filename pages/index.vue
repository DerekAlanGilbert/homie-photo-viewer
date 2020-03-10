<template>
  <div class="relative">
    <div
      class="w-full h-auto bg-darkGrey-dark flex justify-between items-center px-4 py-2 text-xxs fixed z-50"
    >
      <div class="inline-flex items-center">
        <svg
          id="Homie_logo"
          class="h-5 w-5 fill-current text-teal"
          viewBox="0 0 43.2 41.5"
        >
          <g>
            <path
              class="st0"
              d="M29.4,35.9H13.9c-1.2,0-2.6,1.3-2.6,2.8s1.5,2.8,2.6,2.8h15.5c1.2,0,2.6-1.3,2.6-2.8S30.6,35.9,29.4,35.9z"
            />
            <path
              class="st0"
              d="M41.3,16.6L28.1,2.8C26.3,1,24,0,21.6,0c0,0,0,0-0.1,0c-2.4,0-4.7,1-6.5,2.8L2,16.6c-1.9,1.8-2.5,4.5-1.5,6.8
		c0.9,2.3,3.3,3.9,5.9,3.9H37c2.6,0,4.9-1.6,5.9-3.9C43.7,21.1,43.1,18.4,41.3,16.6z M37.7,21.3c-0.1,0.3-0.4,0.4-0.7,0.4H6.3
		c-0.4,0-0.6-0.2-0.7-0.4c-0.1-0.2-0.1-0.5,0.2-0.8L19,6.7c0.7-0.7,1.6-1.1,2.6-1.1h0.1c1,0,1.9,0.4,2.6,1.1l13.1,13.8
		C37.7,20.8,37.7,21.1,37.7,21.3z"
            />
          </g>
        </svg>
        <h1 class="text-lg font-bold m-0 p-0 text-white ml-2">
          Homie photo viewer
        </h1>
      </div>
      <div>
        <button
          :class="[
            { 'bg-darkGrey-medium': selectedView === 'Single' },
            'mr-2   py-1 px-2 transition ease-in-out duration-700 hover:bg-lightGrey-dark focus:outline-none text-lightGrey-medium'
          ]"
          @click="selectedView = 'Single'"
        >
          Stacked
        </button>
        <button
          :class="[
            { 'bg-darkGrey-medium': selectedView === 'Double' },
            'mr-2   py-1 px-2 transition ease-in-out duration-700 hover:bg-lightGrey-dark focus:outline-none text-lightGrey-medium'
          ]"
          @click="selectedView = 'Double'"
        >
          Double
        </button>
        <button
          :class="[
            { 'bg-darkGrey-medium': selectedView === 'Triple' },
            'mr-2   py-1 px-2 transition ease-in-out duration-700 hover:bg-lightGrey-dark focus:outline-none text-lightGrey-medium'
          ]"
          @click="selectedView = 'Triple'"
        >
          Triple
        </button>
      </div>
    </div>
    <div>
      <transition-group
        mode="out-in"
        name="photo"
        tag="ul"
        :class="[
          { 'grid-cols-1': selectedView === 'Single' },
          { 'grid-cols-2': selectedView === 'Double' },
          { 'grid-cols-3': selectedView === 'Triple' },
          'grid pt-8'
        ]"
      >
        <li v-for="photo in photos" :key="photo.id" class="relative pb-3/5">
          <img
            :src="photo.uri"
            alt=""
            class="h-full w-full object-cover absolute top-0 left-0"
          />
        </li>
      </transition-group>
    </div>
    <div
      class="w-full h-auto bg-lightGrey-medium flex justify-between items-center pl-4  text-xxs bottom-0 left-0 fixed z-50"
    >
      <div class="inline-flex items-center text-sm">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-5 h-5 text-darkGray-light mr-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          ></path>
        </svg>
        Favorite
      </div>
      <div>
        <button class="px-4 py-2 text-base bg-teal text-white opacity-100">
          Tour this home
        </button>
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
    console.log(data)
    this.listing = data
  }
}
</script>

<style>
.photo-enter-active,
.photo-leave-active {
  transition: all 0.2s;
}
.photo-enter,
.photo-leave-to {
  opacity: 0;
}
.photo-enter-active {
  transition-delay: 0.2s;
}
</style>
