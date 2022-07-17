<template>
  <div class="bric-row">
    <h2 v-if="$route.name === 'home'"><span>Projects</span></h2>
    <div class="bric-row-inner">
      <slot/>
    </div>
  </div>
</template>