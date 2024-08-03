<template>
  <footer class="grid grid-cols-4 px-2">
    <router-link
      to="/"
      :class="[
        isLinkActive('/') ? 'bg-[#e0e5ee]' : 'hover:bg-[#f4f5f6]',
        'flex',
        'flex-col',
        'gap-2',
        'items-center',
        'cursor-pointer',
        'py-2',
        'rounded-md',
      ]"
    >
      <i class="pi pi-home text-xl"></i>
      <span>Home</span>
    </router-link>
    <router-link
      to="/categories"
      :class="[
        isLinkActive('/categories') ? 'bg-[#e0e5ee]' : 'hover:bg-[#f4f5f6]',
        'flex',
        'flex-col',
        'gap-2',
        'items-center',
        'cursor-pointer',
        'py-2',
        'rounded-md',
      ]"
    >
      <i class="pi pi-clone text-xl"></i>
      <span>Categories</span>
    </router-link>
    <router-link
      to="/chats"
      :class="[
        isLinkActive('/chats') ? 'bg-[#e0e5ee]' : 'hover:bg-[#f4f5f6]',
        'flex',
        'flex-col',
        'gap-2',
        'items-center',
        'cursor-pointer',
        'py-2',
        'rounded-md',
      ]"
    >
      <i class="pi pi-envelope text-xl"></i>
      <span>Message</span>
    </router-link>
    <router-link
      to="/signIn"
      :class="[
        isLinkActive('/signIn') ? 'bg-[#e0e5ee]' : 'hover:bg-[#f4f5f6]',
        'flex',
        'flex-col',
        'gap-2',
        'items-center',
        'cursor-pointer',
        'py-2',
        'rounded-md',
      ]"
    >
      <i class="pi pi-sign-in text-xl"></i>
      <span>Sign In</span>
    </router-link>
  </footer>
</template>

<script setup>
import { useRoute } from "vue-router";

const isLinkActive = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>
