<template>
  <Layout class="page-about">
    <Section class="bric bric-sm">
      <Row>
        <Column class="bric-col-6">
        </Column>
        <Column class="bric-col-6">
          <h2 class="hdg-sm">About</h2>
            <p>My name is Amber Verhulst and I'm a designer and front-end developer. I’m known for my playful art style and CSS prowess, and I love the entire creative process that goes into making a front-end, from mocking it up to building it out.</p>
            <p>I've worked both at firms and independently, across several industries, doing web development, UI/UX, graphic design, and illustration.</p>
        </Column>
      </Row>
    </Section>
  </Layout>
</template>
<script>
import Section from '@/components/Section.vue'
import Row from '@/components/Row.vue'
import Column from '@/components/Column.vue'

export default {
  components: {
    Section,
    Row,
    Column
  },

  metaInfo: {
    title: 'About'
  }
}

</script>

<style>
h1 {
  display: block;
}

.page-about .hdr-shift {background-color: #fff !important;}
.page-about .hdr-shift .bric-row {border-bottom: 2px solid #161616 !important;}


.page-about .header a {
  color: #000;
}

.page-about .bric-sm {
  height: 100vh;
  position: relative;
  padding-top: 106px;
}

.page-about .bric-sm .bric-col:first-child .bric-col-inner {
    background: url('../assets/images/img-abt.png');
    background-size: cover;
    background-position: top center;
    height: auto;
    max-width: 100%;
    margin: 0 auto;
    padding: 100% 0 0 0;
}

@media only screen and (min-width: 400px) {

  .page-about .bric-sm .bric-row {
    width: 400px;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

}

@media only screen and (min-width: 760px) {
  .page-about .bric-sm .bric-row {
    width: 500px;
  }
}

@media only screen and (min-width: 1000px) {

  .page-about .bric-sm .bric-row {
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      margin: 0 auto;
      width: 730px;
      max-width: 100%;
      height: auto;
  }
  
  .page-about .bric-sm .bric-col:first-child .bric-col-inner {
    width: 100%;
    padding: 119% 0 0;
  }

  .page-about .hdg-sm {margin-top: 31px;}

}

@media only screen and (min-width: 1500px) {

  .page-about .bric-sm .bric-row {width: 800px;}
  .page-about .hdg-sm {margin-top: 42px;}

}
</style>
