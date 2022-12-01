<script lang="ts" setup>
import { doc, getDoc } from 'firebase/firestore'
import { onServerPrefetch, ref } from 'vue'
import { useFirebaseApp, useFirestore } from 'vuefire'

console.log('are the same apps', useFirebaseApp() === useNuxtApp().$firebaseApp) // true
const db = useFirestore()
const configRef = doc(db, 'configs', 'jORwjIykFo2NmkdzTkhU')


// const config = useState('config', () => ref())

onServerPrefetch(async () => {
  const snapshot = await getDoc(configRef)
  console.log('got snapshot once', snapshot.data()?.amount)
  // config.value = snapshot.data()
})
</script>

<template>
  <div>
    Config:

  </div>
</template>
