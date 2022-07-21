<template>
  <div class="list-loader"></div>
</template>

<style lang="scss" scoped>
.list-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

  &::after {
    content: '';
    width: 80px;
    height: 80px;
    background-color: var(--background-color);
    border: 10px solid var(--nav-bar-color);
    border-top-color: var(--font-color);
    border-radius: 50%;
    box-shadow: var(--box-shadow-color);
    animation: loading 1s ease-in-out infinite;
  }

  @keyframes loading {
    to {
      transform: rotate(1turn);
    }
  }
}
</style>
