<script lang="ts" setup>
const nuxtApp = useNuxtApp()
onMounted(() => {
  console.log(!!nuxtApp.$firebaseApp)
})
</script>

<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
