<template>
  <Layout class="page-project page-artsy">
    <SectionHdrShift>
      <g-image alt="Artsy logo" src="~/assets/images/logo-art.svg" />
    </SectionHdrShift>
    <Section class="bric-text">
      <Row>
        <Column class="bric-col-8">
          <h2>Description</h2>
          <p><strong>Artsy</strong> is lorem ipsum.</p>
        </Column>
        <Column class="bric-col-4">
          <h2>Credits</h2>
          <p>This project is <g-link to="/#">Lorem</g-link>. Ipsum lorem ipsum.</p>
          <p>
            <g-link class="link-arrow" to="/#">
              View Website
            </g-link>
          </p>
        </Column>
      </Row>
    </Section>
    <Section class="bric-tiles">
      <Row>
        <Column>
          <g-link to="/#">
            <g-image alt="Project image desc" src="~/assets/images/proj-art-dsk-01.png" />
          </g-link>
        </Column>
      </Row>
      <Row>
        <Column class="bric-col-6">
          <g-link to="/#">
            <g-image alt="Project image desc" src="~/assets/images/proj-art-mob-01.png" />
          </g-link>
        </Column>
        <Column class="bric-col-6">
          <g-link to="/#">
            <g-image alt="Project image desc" src="~/assets/images/proj-art-mob-02.png" />
          </g-link>
        </Column>
      </Row>
    </Section>
    <footer class="bric footer">
      <Row>
        <nav class="nav">
          <g-link to="/illu/">
            <span>Next</span>
            <g-image class="ftr-logo" alt="Illu logo" src="~/assets/images/logo-illu.svg" width="50" />
          </g-link>
        </nav>
      </Row>
    </footer>
  </Layout>
</template>

<script>
import Section from '@/components/Section.vue'
import SectionHdrShift from '@/components/SectionHdrShift.vue'
import Row from '@/components/Row.vue'
import Column from '@/components/Column.vue'

export default {
  components: {
    Section,
    SectionHdrShift,
    Row,
    Column
  },

  metaInfo: {
    title: 'Artsy'
  }
}
</script>

<style>
.page-artsy .bric-hdr-shift img {
  width: 61%;
  max-width: 550px;
}

.page-artsy .bric-tiles .bric-col-inner {
  background: #f6f6f4;
}

.page-artsy .bric-tiles>.bric-row:nth-child(1) .bric-col-inner {
  padding: 0;
}

/* .page-artsy .bric-tiles>.bric-row:nth-child(2) img {
  max-width: 415px;
} */

.page-artsy footer .ftr-logo {
    padding: 19px 9px 19px 0;
}

@media only screen and (min-width: 600px) {
  .page-artsy .bric-tiles>.bric-row:nth-child(2) img {
    max-width: 415px;
  }
}



</style>
