<template>
  <section id="bricHdrShift" class="bric bric-hdr-shift">
    <div class="bric-row">
      <slot/>
    </div>
  </section>
</template>

<script>

export default {
  mounted() {
      document.getElementById("app").classList.add("hdr-shift");

      var hdrShiftHeight = document.getElementById('bricHdrShift').offsetHeight;

      window.onscroll = function() {myFunction()};
      function myFunction() {
        if (document.documentElement.scrollTop > (hdrShiftHeight - 35)) {
            document.getElementById("app").classList.remove("hdr-shift");
        } else {
          document.getElementById("app").classList.add("hdr-shift");
        }
      }
  }

}

</script>

<style>

  .bric-hdr-shift::before {
    content: '';
    display: block;
    background: #161616;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    filter: opacity(85%);
  }

  @media only screen and (min-width: 630px) { 
    .bric-hdr-shift {
      padding: 0;
      height: 540px;
    }
  }

</style>