import vue from '@vitejs/plugin-vue'
const { defineConfig } = require('@vue/cli-service')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Portfolio/'  
    : '/'
}
