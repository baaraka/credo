<template>
  <div class="mb-6">
    <Splide :options="splideOptions" aria-label="My Favorite Items">
      <SplideSlide v-for="(slide, index) in slides" :key="index">
        <div class="relative text-top">
          <img
            :src="slide.image"
            alt="slide image"
            class="w-full h-60 object-cover rounded-3xl"
          />
          <div
            class="absolute top-0 left-0 p-4 flex items-center justify-center bg-opacity-50 text-white text-xl font-bold"
          >
            {{ slide.text }}
          </div>
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

const splideOptions = {
  perPage: 1, // Number of slides visible at once
  perMove: 1, // Number of slides to move at once
  type: "loop", // Enable loop
  gap: "1rem", // Space between slides
  pagination: false, // Disable pagination if needed
  arrows: true, // Enable navigation arrows
  autoplay: true, // Enable autoplay
  interval: 3000, // Interval between slides in milliseconds (3 seconds)
  pauseOnHover: true, // Pause autoplay when the user hovers over the slider
};

const slides = [
  {
    image:
      "https://images.pexels.com/photos/20875243/pexels-photo-20875243/free-photo-of-woman-standing-under-stone-building-with-red-window-shutters.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    text: "Banner 1",
  },
  {
    image:
      "https://images.pexels.com/photos/27025471/pexels-photo-27025471/free-photo-of-pizza-margherita.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    text: "Banner 2",
  },
  {
    image:
      "https://images.pexels.com/photos/26347463/pexels-photo-26347463/free-photo-of-a-woman-holding-a-dog.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    text: "Banner 3",
  },
  {
    image:
      "https://images.pexels.com/photos/25863005/pexels-photo-25863005/free-photo-of-a-drink-and-a-dessert-on-a-tray.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    text: "Banner 4",
  },
  {
    image:
      "https://images.pexels.com/photos/27133387/pexels-photo-27133387/free-photo-of-a-red-and-white-tram-is-traveling-down-a-street.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    text: "Banner 5",
  },
  {
    image:
      "https://images.pexels.com/photos/27349289/pexels-photo-27349289/free-photo-of-a-bride-and-groom-pose-in-front-of-a-van.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    text: "Banner 6",
  },
];
</script>
