<template>
  <div class="login-background">
    <a-row type="flex" justify="center" align="middle">
      <a-col>
        <a-card title="Login" class="login-card">
          <a-form :form="form" @submit="handleSubmit">
            <a-form-item>
              <a-input
                placeholder="Username..."
                v-decorator="[ 'username',
                  {
                    initialValue: 'admin', 
                    rules: [{ required: true, message: 'Please input your username!' 
                  }]}
                ]"
              >
                <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                type="password"
                placeholder="Password..."
                v-decorator="[ 'password',
                  {
                    initialValue: 'P@ssw0rd',
                    rules: [{ required: true, message: 'Please input your Password!' 
                  }]}
                ]"
              >
                <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-checkbox
                v-decorator="[ 'remember',
                  {
                    valuePropName: 'checked',
                    initialValue: true,
                  }
                ]"
              >Remember me</a-checkbox>
              <a class="login-form-forgot" href="/">Forgot password</a>
              <a-button type="primary" html-type="submit" class="login-form-button">Log in</a-button>
              <a href="/">register now!</a>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { store } from '@/utils'

export default {
  beforeCreate() {
    this.form = this.$form.createForm(this)
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          const { username, password, remember } = values
          store.set('token', 'fake-token')
          store.set('rules', username === 'admin' ? 'admin' : 'user')
          window.location.href = '/'
          // this.$router.push('/')
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.login-background {
  height: 100vh;
  background: rgb(228, 227, 240);
  background: -moz-linear-gradient(
    146deg,
    rgba(228, 227, 240, 1) 0%,
    rgba(176, 176, 236, 1) 35%,
    rgba(46, 201, 232, 1) 100%
  );
  background: -webkit-linear-gradient(
    146deg,
    rgba(228, 227, 240, 1) 0%,
    rgba(176, 176, 236, 1) 35%,
    rgba(46, 201, 232, 1) 100%
  );
  background: linear-gradient(
    146deg,
    rgba(228, 227, 240, 1) 0%,
    rgba(176, 176, 236, 1) 35%,
    rgba(46, 201, 232, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#e4e3f0",endColorstr="#2ec9e8",GradientType=1);
}
.login-card {
  width: 350px;
  margin-top: 20%;
  max-width: 350px;
  box-shadow: 2px 0 5px rgba(0, 21, 41, 0.15);
  .login-form-forgot {
    float: right;
  }
  .login-form-button {
    width: 100%;
  }
}
</style>