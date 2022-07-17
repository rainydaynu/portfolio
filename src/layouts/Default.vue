<template>
  <div class="layout">
    <header class="bric header">
      <div class="bric-row">
        <nav class="nav">
          <g-link to="/">{{ $static.metadata.siteName }}</g-link>
          <g-link class="nav__link" to="/#work">Work</g-link>
          <g-link class="nav__link" to="/about/">About</g-link>
        </nav>
      </div>
    </header>

    <slot/>

  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
h1 {
  display: block;
}
</style>
