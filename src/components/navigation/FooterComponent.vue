<template>
  <footer class="grid grid-cols-4 px-2">
    <router-link
      to="/"
      class="flex flex-col gap-2 items-center cursor-pointer py-2 hover:bg-[#e0e5ee] hover:rounded-md"
    >
      <i class="pi pi-home text-xl"></i>
      <span>Home</span>
    </router-link>
    <router-link
      to="/categories"
      class="flex flex-col gap-2 items-center cursor-pointer py-2 hover:bg-[#e0e5ee] hover:rounded-md"
    >
      <i class="pi pi-clone text-xl"></i>
      <span>Categories</span>
    </router-link>
    <router-link
      to="/chats"
      class="flex flex-col gap-2 items-center py-2 hover:bg-[#e0e5ee] hover:rounded-md"
    >
      <i class="pi pi-envelope text-xl"></i>
      <span>Message</span>
    </router-link>
    <router-link
      to="/signIn"
      class="flex flex-col gap-2 items-center py-2 hover:bg-[#e0e5ee] hover:rounded-md"
    >
      <i class="pi pi-sign-in text-xl"></i>
      <span>Sign In</span>
    </router-link>
  </footer>
</template>
