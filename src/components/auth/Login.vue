<template>
  <div class="px-6 py-10 flex flex-col items-center gap-5">
    <div class="flex items-center">
      <img
        src="/credo.png"
        alt="credo"
        class="w-40 h-40 object-cover rounded-3xl"
      />
    </div>
    <div class="flex flex-col gap-6">
      <h2 class="text-xl font-bold text-center">Sign In</h2>
      <p class="text-base">
        Welcome back again. Enter your email and the OTP received from your
        email.
      </p>
      <p class="text-base">
        If your new here don't worry just follow the same procedure and your
        account will be created.
      </p>

      <input
        type="text"
        id="email"
        name="email"
        placeholder="email"
        class="flex-grow border-gray-500 text-base border rounded-full p-4 mr-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
      />
      <span class="text-center text-base"
        >Enter Valid OTP form your email
      </span>
      <div class="flex items-center gap-4 justify-center">
        <input
          type="text"
          name="otp"
          id="otp"
          class="border border-gray-500 w-12 h-12 focus:outline-none focus:ring-2 focus:ring-gray-900"
        />

        <span class="text-4xl mb-4">.</span>

        <input
          type="text"
          name="otp"
          id="otp"
          class="border border-gray-500 w-12 h-12 focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
        <span class="text-4xl mb-4">.</span>
        <input
          type="text"
          name="otp"
          id="otp"
          class="border border-gray-500 w-12 h-12 focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
        <span class="text-4xl mb-4">.</span>
        <input
          type="text"
          name="otp"
          id="otp"
          class="border border-gray-500 w-12 h-12 focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
      </div>
      <span
        class="text-center p-2 text-lg font-medium text-[#3b5998] hover:bg-[#e0e5ee] hover:rounded-md"
        >RE-SEND EMAIL</span
      >
      <button class="text-lg px-4 py-2 bg-[#3b5998] rounded-md text-white">
        Sign In
      </button>
      <router-link
        class="text-center p-2 text-lg text-[#3b5998] font-medium hover:bg-[#e0e5ee] hover:rounded-md"
        to="/"
        >GO-HOME</router-link
      >
    </div>
  </div>
</template>
