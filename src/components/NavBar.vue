<template>
  <div class="navbar">
    <div class="navbar__logo">Where in the world?</div>
    <label class="navbar__theme-toggle">
      <input type="checkbox" name="" id="" class="navbar__theme-toggle-btn" />
      <span class="navbar__theme-toggle-icon"><i></i></span>
    </label>
  </div>
</template>

<style lang="scss">
.navbar {
  @include container;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  background-color: $color-white;
  box-shadow: $box-shadow-white;

  &__logo {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2rem;
    color: $color-chinese-black;

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
      background-color: $color-chinese-black;
      border-radius: 1.5rem;
      transition: 0.5s;

      i {
        position: absolute;
        top: 0.25rem;
        left: 0.25rem;
        width: 1.5rem;
        height: 1.5rem;
        overflow: hidden;
        background-color: $color-lotion;
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
        background-color: $color-lotion;
      }

      &:checked ~ span i {
        left: 2.25rem;
        background-color: $color-chinese-black;

        @include mediaWidth(440px, mx) {
          left: 1.5rem;
        }
      }
    }
  }
}
</style>
