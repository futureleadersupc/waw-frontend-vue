<script setup>
import Avatar from "primevue/avatar";
import { PrimeIcons } from "primevue/api";
import { AuthenticationService } from "@/accounts/services/authentication.service";
import { onBeforeMount, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";

const auth = ref(AuthenticationService.instance);
const user = ref(auth.value.getCurrentUser());

const router = useRouter();

onBeforeMount(() => {
  if (!auth.value.loggedIn) {
    router.push("/account/signin");
  }
});

watchEffect(() => {
  user.value = auth.value.getCurrentUser();
});
</script>
<template>
  <div class="p-16 flex space-x-8 max-w-screen-2xl">
    <div class="w-3/4 space-y-8">
      <div class="flex flex-col rounded bg-white overflow-hidden">
        <div class="flex items-center w-full h-48 overflow-hidden">
          <img
            class="object-contain w-full"
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=916" />
        </div>
        <div class="flex">
          <div class="px-8 pb-8 relative">
            <span class="h-32 w-48 block" />
            <Avatar
              class="avatar-contain h-48 w-48 absolute inset-0 left-8 -top-16 border-8 border-white"
              image="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640"
              shape="circle" />
          </div>
          <div class="flex flex-col p-8 w-full space-y-2">
            <div class="flex justify-between w-full">
              <span class="text-xl font-medium">{{ user.fullName }}</span>
              <div class="text-sm text-slate-700 space-x-1 flex items-center">
                <i :class="PrimeIcons.MAP_MARKER" class="text-sm"></i>
                <span>{{ user.location }}</span>
              </div>
            </div>
            <p class="w-full text-slate-700">
              {{ user.biography }}
            </p>
          </div>
        </div>
      </div>
      <div class="p-8 bg-white space-y-4">
        <span class="text-xl font-semibold block">About</span>
        <p class="text-lg text-slate-700">{{ user.about }}</p>
        <span class="uppercase font-bold text-slate-600 block">See more</span>
      </div>
      <section class="lg:pt-32 lg:pb-20 bg-white">
        <div class="container">
          <div class="flex flex-col p-8 w-full space-y-3">
            <span class="text-xl font-semibold block">Projects</span>
            <span class="text-xl text-slate-500 block"> 3 of 12</span>
          </div>
          <div class="flex flex-wrap -mx-4">
            <div class="w-full md:w-1/2 xl:w-1/3 px-4">
              <div class="bg-white rounded-lg overflow-hidden mb-10">
                <img
                  src="https://unsplash.com/photos/T6fDN60bMWY/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dXglMkZ1aSUyMGRlc2lnbnxlc3wwfHx8fDE2NTE3NTA5MDc&w=640"
                  alt="work's image"
                  class="w-full" />
                <div class="py-2 sm:p-9 md:p-7 xl:p-9">
                  <h3>
                    <a
                      href="project"
                      class="mt-6 text-base font-medium text-slate-600">
                      Zara redisign concept
                    </a>
                  </h3>
                  <p class="text-sm font-light mb-7">
                    UX/UI Design - July 5, 2019
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 px-4">
              <div class="bg-white rounded-lg overflow-hidden mb-10">
                <img
                  src="https://unsplash.com/photos/v9vII5gV8Lw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8Z3JhcGhpYyUyMGRlc2lnbnxlc3wwfHx8fDE2NTE3NDc2Njc&w=640"
                  alt="work's image"
                  class="w-full" />
                <div class="p-8 sm:p-9 md:p-7 xl:p-9">
                  <h3>
                    <a
                      href="project"
                      class="mt-6 text-base font-medium text-slate-600">
                      SCTHON Event Brand Identity
                    </a>
                  </h3>
                  <p class="text-sm font-light mb-7">
                    Graphic Design - March 31, 2019
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 px-4">
              <div class="bg-white rounded-lg overflow-hidden mb-10">
                <img
                  src="https://unsplash.com/photos/CGpifH3FjOA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8Z3JhcGhpYyUyMGRlc2lnbnxlc3wwfHx8fDE2NTE3NDc2Njc&w=640"
                  alt="work's image"
                  class="w-full" />
                <div class="p-8 sm:p-9 md:p-7 xl:p-9">
                  <h3>
                    <a
                      href="project"
                      class="mt-6 text-base font-medium text-slate-600">
                      Dzord Brand Identity
                    </a>
                  </h3>
                  <p class="text-sm font-light mb-7">
                    Graphic Design - April 4, 2016
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<style>
.avatar-contain > img {
  @apply object-cover;
}
</style>