<template>
  <div class="h-screen flex flex-col">
    <Navbar :class="{ 'bg-scrolled': isScrolled }" />
    <main ref="content" class="flex-grow overflow-y-auto" @scroll="onScroll">
      <router-view />
    </main>
    <FooterComponent />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "@/components/navigation/Navbar.vue";
import FooterComponent from "@/components/navigation/FooterComponent.vue";

//track scroll state
const isScrolled = ref(false);
const content = ref(null);

//function to handle scroll events
const onScroll = () => {
  if (content.value.scrollTop > 0) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};
</script>
