<template>
  <div class="p-6">
    <div class="flex items-center gap-4 mb-6">
      <i class="pi pi-bars text-2xl text-[#3b5998]"></i>
      <h1 class="text-2xl font-bold text-[#3b5998]">Chats</h1>
    </div>

    <div
      class="bg-gray-100 flex items-center justify-center py-6 px-4 rounded-md"
    >
      <div
        class="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden p-2"
      >
        <div class="p-4 h-80 overflow-y-auto">
          <div class="mb-2">
            <div class="bg-gray-200 p-3 rounded-lg inline-block text-sm mb-1">
              Hello!
            </div>
            <br />
            <span class="text-sm">9:00 am</span>
          </div>
          <div class="mb-2 text-right">
            <div
              class="bg-[#3b5998] text-white p-3 rounded-lg inline-block text-sm mb-1"
            >
              Hi there!
            </div>
            <br />
            <span class="text-sm">9:00 am</span>
          </div>
          <div class="mb-2">
            <div class="bg-gray-200 p-3 rounded-lg inline-block text-sm mb-1">
              How are you?
            </div>
            <br />
            <span class="text-sm">9:00 am</span>
          </div>
          <div class="mb-2 text-right">
            <div
              class="bg-[#3b5998] text-white p-3 rounded-lg inline-block text-sm mb-1"
            >
              I'm good, thanks! And you?
            </div>
            <br />
            <span class="text-sm">9:00 am</span>
          </div>
        </div>
        <div class="bg-gray-200 px-4 py-4">
          <div class="flex">
            <input
              class="flex-grow border rounded-full px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Type a message"
            />
            <button class="bg-[#3b5998] text-white px-4 py-2 rounded-full">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
