<template>
  <div class="header">
    <div class="container">
      <a-row type="flex" align="middle" class="header-top">
        <a-col :span="12">
          <div class="contact-info">
            <ul class="nav nav-pills">
              <li class="item float-item">
                <a-icon type="phone" />
                <span>+62 821 1234 5678</span>
              </li>
              <li class="item float-item">
                <a href="mailto:email@email.com">
                  <a-icon type="mail" />
                  <span>bukan@email.com</span>
                </a>
              </li>
            </ul>
          </div>
        </a-col>
        <a-col :span="12">
          <div class="account-sosmed">
            <ul class="nav nav-pills">
              <li class="float-item">
                <div class="item">
                  <a href="http://instagram.com" target="_blank">
                    <a-icon type="instagram" />
                  </a>
                </div>
              </li>
              <li class="item float-item" v-if="!isLoggedIn">
                <div class="item">
                  <a-icon type="login" />
                  <router-link to="/login">Login or Register</router-link>
                </div>
              </li>
              <li class="item float-item" v-if="isLoggedIn" v-on:click="onLogout">
                <div class="item">
                  <a-icon type="logout" />
                  <span>Logout</span>
                </div>
              </li>
            </ul>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { store } from '@/utils'

export default {
  data() {
    return {
      isLoggedIn: false,
    }
  },

  created() {
    const token = store.get('token')
    if (token) {
      let that = this
      that.isLoggedIn = true
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
.header {
  font-size: 12px;
  color: #696763;
  font-family: 'Roboto', sans-serif;
  background: none repeat scroll 0 0 #f0f0e9;
}
.header-top {
  height: 35px;
  max-height: 35px;
}
.contact-info {
  float: left;
}
.account-sosmed {
  float: right;
}
.nav {
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-pills {
  margin: 0 auto;
  .float-item {
    float: left;
    padding-right: 20px;
  }
  .item {
    cursor: pointer;
    text-decoration: none;
    a {
      color: #696763;
    }
  }
}
.nav-pills:after {
  content: '.';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
@media screen and (max-width: 425px) {
  .header {
    font-size: 8px;
    font-weight: 400;
    // font-size: calc(8px * ((100vw - 425px) / 680));
  }
}
@media screen and (max-width: 375px) {
  .header {
    font-size: 6px;
    font-weight: 400;
    // font-size: calc(8px * ((100vw - 425px) / 680));
  }
}
</style>
