<template>
  <div>
    <layoutAdmin v-if="isLoggedIn && rules === 'admin'" />
    <layoutUser v-if="isLoggedIn && rules === 'user'" />
    <layoutPublic v-if="rules !== 'admin'" />
  </div>
</template>

<script>
import { store } from '@/utils'
import layoutLogin from './login'
import layoutAdmin from './admin'
import layoutUser from './user'
import layoutPublic from './public'

export default {
  components: { layoutLogin, layoutAdmin, layoutUser, layoutPublic },
  data() {
    return {
      isLoggedIn: false,
      rules: null,
    }
  },

  created() {
    const token = store.get('token')
    if (token) {
      let that = this
      const rules = store.get('rules')

      that.isLoggedIn = true
      that.rules = rules
    }
  },
}
</script>