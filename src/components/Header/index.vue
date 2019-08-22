<template>
  <a-layout id="header">
    <a-layout-header class="header-top">
      <div class="logo" v-if="isLoggedIn && rules === 'admin'" />
      <a-row type="flex" align="middle">
        <a-col :span="12" class="header-left">
          <a-menu mode="horizontal" :selectable="false" :defaultSelectedKeys="[]">
            <a-menu-item key="contact">
              <a-icon type="phone" />+62 821 1234 5678
            </a-menu-item>
            <a-menu-item key="email">
              <a-icon type="mail" />bukan@email.com
            </a-menu-item>
          </a-menu>
        </a-col>
        <a-col :span="12" class="header-right">
          <a-menu mode="horizontal" :selectable="false" :defaultSelectedKeys="[]">
            <a-menu-item key="instagram">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <a-icon type="instagram" />
              </a>
            </a-menu-item>
            <a-menu-item key="login" v-if="!isLoggedIn">
              <router-link to="/login">
                <a-icon type="login" />Login or Register
              </router-link>
            </a-menu-item>

            <a-sub-menu v-if="isLoggedIn">
              <span slot="title" class="submenu-title-wrapper">
                <a-icon type="user" />admin@email.com
              </span>
              <a-menu-item key="account">
                <a-icon type="idcard" />Profile
              </a-menu-item>
              <a-menu-item key="logout" v-on:click="onLogout">
                <a-icon type="logout" />Logout
              </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-col>
      </a-row>
    </a-layout-header>
  </a-layout>
</template>

<script>
import { store } from '@/utils'

export default {
  data() {
    return {
      isLoggedIn: false,
      rules: null,
    }
  },

  created() {
    const token = store.get('token')
    if (token) {
      const rules = store.get('rules')
      let that = this

      that.isLoggedIn = true
      that.rules = rules
    }
  },

  methods: {
    onLogout: async () => {
      await store.remove('token')
      await store.remove('rules')
      window.location.href = '/'
    },
  },
}
</script>

<style lang="scss" scoped>
#header .logo {
  height: 40px;
  width: 190px;
  padding: 0 10px;
  background: rgba(214, 150, 150, 0.2);
  float: left;
}
.header-top {
  position: fixed;
  width: 100%;
  .ant-menu {
    line-height: 39px;
  }
  .ant-menu-horizontal {
    border-bottom: 0;
  }
  .ant-menu-item {
    border-bottom: 0;
  }
  .ant-menu-item:hover {
    border-bottom: 0;
  }
  .header-left {
    float: left;
  }
  .header-right {
    float: right;
    text-align: right;
  }
}
.ant-layout-header {
  height: 40px;
  padding: 0 10px;
  background: none repeat scroll 0 0 #f0f0e9;
}
.ant-menu-horizontal {
  background: none repeat scroll 0 0 #f0f0e9 !important;
}
</style>
