<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/introduction">Introduction</RouterLink>
        <RouterLink to="/essentials/template-syntax">template-syntax</RouterLink>
        <RouterLink to="/essentials/reactivity-fundamentals">reactivity-fundamentals</RouterLink>
        <RouterLink to="/essentials/computed-properties">reactivity-fundamentals</RouterLink>
        <RouterLink to="/essentials/class-and-style-bindings">class-and-style-bindings</RouterLink>
        <RouterLink to="/essentials/conditional-rendering">conditional-rendering</RouterLink>
        <RouterLink to="/essentials/list-rendering">list-rendering</RouterLink>
        <RouterLink to="/essentials/event-handling">event-handling</RouterLink>
        <RouterLink to="/essentials/form-input-bindings">form-input-bindings</RouterLink>
        <RouterLink to="/essentials/watchers">watchers</RouterLink>
        <RouterLink to="/essentials/template-refs">template-refs</RouterLink>
        <RouterLink to="/essentials/components-basics">components-basics</RouterLink>
        <RouterLink to="/essentials/lifecycle-hooks">lifecycle-hooks</RouterLink>
        <RouterLink to="/components-in-depth/props">props</RouterLink>
        <RouterLink to="/components-in-depth/events">events</RouterLink>
        <RouterLink to="/components-in-depth/component-v-model">component-v-model</RouterLink>
        <RouterLink to="/components-in-depth/fallthrough-attributes">fallthrough-attributes</RouterLink>
        <RouterLink to="/components-in-depth/slots">slots</RouterLink>
        <RouterLink to="/components-in-depth/provide-inject">provide-inject</RouterLink>
        <RouterLink to="/components-in-depth/async-components">async-components</RouterLink>
        <RouterLink to="/reusability/composables">composables</RouterLink>
        <RouterLink to="/reusability/custom-directives">custom-directives</RouterLink>
      </nav>
    </div>
  </header>
  <GlobalComponent />
  <RouterView />
</template>

<style scoped>
.icon {
  transform: scale(4);
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
