<template>
  <nav class="navbar">
    <label for="" class="search">
      <input type="search" name="" id="" class="search__input" placeholder="search coutry" />
      <span class="search__icon">icon</span>
      <button class="search__btn">x</button>
    </label>
    <div class="filter">
      <div class="filter__icon">></div>
      <select name="" id="" class="filter__select">
        <option class="none" value="" disabled selected>Filter by Region</option>
        <option value="" class="filter__option">none</option>
        <option value="" class="filter__option">name</option>
      </select>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar {
  @include container;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
}

.search {
  position: relative;
  width: 30rem;
  height: 3.5rem;

  @include media(md, mx) {
    width: 100%;
  }

  &__input,
  &__icon {
    position: absolute;
  }

  &__input {
    width: 100%;
    height: 100%;
    padding: 0 4.7rem;
    font-weight: 400;
    font-size: 0.875rem;
    color: var(--font-color);
    background: var(--nav-bar-color);
    border-radius: $border-radius;
    box-shadow: 0 2px 9px var(--box-shadow-color);
    transition: 0.1s;

    &:focus {
      outline: 0.125rem solid var(--font-color);
    }
  }

  &__icon {
    position: absolute;
    top: 1.2rem;
    left: 2rem;
    font-size: 0.875rem;
    color: var(--font-color);
  }

  &__btn {
    position: absolute;
    top: 1rem;
    right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1rem;
    color: var(--font-color);
    background-color: var(--background-color);
    border-radius: 50%;
    transform: rotate(45deg);
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      color: var(--background-color);
      background-color: var(--font-color);
    }
  }
}

.filter {
  position: relative;
  width: 12.5rem;

  @include media(md, mx) {
    width: 100%;
    margin-top: 2.5rem;
  }

  &__icon {
    content: '';
    position: absolute;
    top: 1.1rem;
    right: 1.5rem;
    color: var(--font-color);
    transition: all 0.5s;
  }

  &__select {
    width: 100%;
    height: 3.5rem;
    padding: 1.125rem 1.5rem;
    font-weight: 400;
    font-size: 0.875rem;
    color: var(--font-color);
    background: var(--nav-bar-color);
    border-radius: $border-radius;
    box-shadow: 0 2px 9px var(--box-shadow-color);
    cursor: pointer;
  }
}
</style>
