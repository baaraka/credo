<template>
  <nav
    :class="['navbar', $attrs.class]"
    class="pt-4 pb-2 px-6 shadow-md transition-all"
  >
    <div class="flex items-center justify-between">
      <h2 :class="['text-xl', $attrs.class]" class="font-bold">Mockup</h2>
      <div :class="['flex space-x-6', $attrs.class]">
        <i :class="['pi pi-user text-xl cursor-pointer', $attrs.class]"></i>
        <i
          :class="[
            'pi pi-shopping-cart text-xl relative cursor-pointer',
            $attrs.class,
          ]"
        >
          <span
            :class="[
              'absolute w-full h-full -top-2 -right-3 text-xs items-center justify-center rounded-full px-2',
              $attrs.class,
            ]"
            class="bg-gray-500"
          >
            3
          </span>
        </i>
        <i :class="['pi pi-bell text-xl cursor-pointer', $attrs.class]"></i>
      </div>
    </div>
    <div class="relative w-full md:w-3/4 mx-auto mt-6">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search...."
        :class="[
          'w-full py-2 pl-4 pr-12 border rounded-full bg-inherit focus:outline-none focus:ring-2',
          $attrs.class,
        ]"
        class="w-full py-2 pl-4 pr-12 border rounded-full bg-inherit focus:outline-none focus:ring-2 focus:ring-white-500"
      />
      <button
        :class="[
          'absolute right-2 top-1/2 items-center justify-center transform -translate-y-1/2',
          $attrs.class,
        ]"
        class="bg-white text-[#3b5998] px-6 py-1 rounded-full"
      >
        <i class="pi pi-search"></i>
      </button>
    </div>
    <div class="bg-transparent mt-4">
      <!-- slider -->
      <Splide :options="splideOptions" aria-label="My Favorite Items">
        <SplideSlide v-for="(item, index) in slides" :key="index">
          <div class="p-1 text-center">{{ item }}</div>
        </SplideSlide>
      </Splide>
    </div>
  </nav>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

const splideOptions = {
  perPage: 3, // Number of slides visible at once
  perMove: 3, // Number of slides to move at once
  type: "loop", // Enable loop
  gap: "1rem", // Space between slides
  pagination: false, // Disable pagination if needed
  arrows: true, // Enable navigation arrows
};

// Define slides data
const slides = [
  'All',
  'Brand1',
  'Brand2',
  'Brand3',
  'Brand4',
  'Brand5',
];
</script>

<style scoped>
/* Default Navbar styles */
.navbar {
  background-color: #3b5998;
  color: white;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Background color and text color when scrolled */
.bg-scrolled {
  background-color: white; /* Change this color as needed */
  color: #3b5998; /* Change this color as needed */
}

/* Styling for scrolled state, targeting specific elements */
.bg-scrolled .pi {
  color: #3b5998; /* Change icon color as needed */
}

.bg-scrolled button {
  color: white;
  background-color: #3b5998; /* Change this color as needed */
}

.bg-scrolled .pi-shopping-cart {
  background-color: white; /* Change this color as needed */
}

.bg-scrolled .pi-shopping-cart span {
  background-color: #3b5998; /* Change this color as needed */
  color: white; /* Change this color as needed */
}

/* Exclude search icon from changes */
.bg-scrolled .pi-search {
  color: white; /* Ensure search icon remains with the same color if needed */
}
.bg-scrolled input {
  border-color: rgb(39, 38, 38); /* Change this color as needed */
}
</style>
