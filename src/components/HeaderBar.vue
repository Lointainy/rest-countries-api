<template>
  <div class="header">
    <router-link to="/home" class="header__logo">Where in the world?</router-link>
    <label class="header__theme-toggle">
      <input @change="toggleTheme" type="checkbox" name="" id="" class="header__theme-toggle-btn" />
      <span class="header__theme-toggle-icon"><i></i></span>
    </label>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const userTheme = ref('light-theme')

onMounted(() => {
  const initUserTheme = getTheme() || getMediaPreference()
  setTheme(initUserTheme)
})

const toggleTheme = () => {
  const activeTheme = localStorage.getItem('user-theme')
  if (activeTheme === 'light-theme') {
    setTheme('dark-theme')
  } else {
    setTheme('light-theme')
  }
}

const getTheme = () => {
  return localStorage.getItem('user-theme')
}

const setTheme = (theme) => {
  localStorage.setItem('user-theme', theme)
  userTheme.value = theme
  document.documentElement.className = theme
}

const getMediaPreference = () => {
  const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (hasDarkPreference) {
    return 'dark-theme'
  } else {
    return 'light-theme'
  }
}
</script>

<style lang="scss">
.header {
  @include container;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  background-color: var(--nav-bar-color);
  box-shadow: var(--box-shadow-color);

  &__logo {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2rem;
    color: var(--font-color);

    @include mediaWidth(440px, mx) {
      font-size: 0.875rem;
    }
  }

  &__theme-toggle {
    position: relative;
    width: 4rem;
    height: 2rem;
    overflow: hidden;
    cursor: pointer;

    @include mediaWidth(440px, mx) {
      width: 3rem;
      height: 1.5rem;
    }

    &-icon {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--swtich-btn-color);
      border-radius: 1.5rem;
      transition: 0.5s;

      i {
        position: absolute;
        top: 0.25rem;
        left: 0.25rem;
        width: 1.5rem;
        height: 1.5rem;
        overflow: hidden;
        background-color: var(--swtich-btn-icon-color);
        border-radius: 50%;
        transition: 0.5s;

        @include mediaWidth(440px, mx) {
          left: 0.25rem;
          width: 1rem;
          height: 1rem;
        }
      }
    }

    &-btn {
      position: relative;
      z-index: 1;
      appearance: none;

      &:checked ~ span {
        background-color: var(--swtich-btn-color);
      }

      &:checked ~ span i {
        left: 2.25rem;
        background-color: var(--swtich-btn-icon-color);

        @include mediaWidth(440px, mx) {
          left: 1.5rem;
        }
      }
    }
  }
}
</style>
