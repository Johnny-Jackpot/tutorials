<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue';
import AppGuides from '@/components/AppGuides.vue';
import AppHeader from '@/components/AppHeader.vue';


</script>

<template>
  <div class="container py-4 px-3 mx-auto">
    <AppHeader />

    <h1>Build Bootstrap with Vue</h1>
    <div class="col-lg-8 px-0">
      <p class="fs-4">You've successfully loaded the Bootstrap + Vue example! It's loaded up with <a
          href="https://getbootstrap.com/">Bootstrap 5</a> and uses Vue and Vite to compile and bundle our Sass and
        JavaScript. It also features a handful of custom Vue components.</p>
      <p>If this button appears blue and the link appears purple, you've done it!</p>
    </div>

    <button type="button" class="btn btn-primary me-3" data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasExample">Toggle offcanvas</button>
    <a id="popoverButton" class="text-success" href="#" role="button" data-bs-toggle="popover" title="Custom popover"
      data-bs-content="This is a Bootstrap popover.">Example popover</a>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div>
          Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
          etc.
        </div>
        <div class="dropdown mt-3">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
            data-bs-toggle="dropdown">
            Dropdown button
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
    </div>

    <hr class="col-1 my-5 mx-0">

    <AppGuides />

    <AppFooter />
  </div>
</template>
