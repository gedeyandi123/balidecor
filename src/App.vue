<template>
  <div id="app">
    <headermenu />
    <router-view />
  </div>
</template>

<script>
import '@/assets/scss/index.scss'
import headermenu from '@/components/Header'

export default {
  name: 'App',
  components: { headermenu },
}
</script>
