<template>
  <Layout class="page-home">

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/assets/images/favicon.png" width="135" /> -->

    <SectionHdrShift>
      <div>
        <h1>Amber Verhulst</h1>
        <span>Designer + Front-End Developer</span>
      </div>
    </SectionHdrShift>    

    <Section id="work" class="bric-tiles">
      <h2>Projects</h2>
      <Row>
        <Column class="bric-col-4">
          <g-link to="/crashword/">
            <g-image alt="Crashword logo" src="~/assets/images/logo-cra.svg" />
          </g-link>
            <ul>
              <li>
                <span>#1</span>
                <span>Crashword</span>
              </li>
              <li>
                <span>
                  Game Design
                </span>
              </li>
            </ul>
        </Column>
        <Column class="bric-col-4">
          <g-link to="/artsy/">
            <g-image alt="Artsy logo" src="~/assets/images/logo-art.svg" />         
          </g-link>
          <ul>
            <li>
              <span>#2</span>
              <span>Artsy</span>
            </li>
            <li>
              <span>
                Web Dev <span>+</span> UI
              </span>
            </li>
          </ul>          
        </Column>
        <Column class="bric-col-4">
          <g-link to="/illu/">
            <g-image alt="Illu logo" src="~/assets/images/logo-illu.svg" />
          </g-link>
          <ul>
            <li>
              <span>#3</span>
              <span>Illu</span>
            </li>
            <li>
              <span>
                Personal <span>+</span> Commissioned
              </span>
            </li>
          </ul>             
        </Column>        
      </Row>
    </Section>  

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
    title: 'Home'
  }
}
</script>

<style>

  .page-home .bric-hdr-shift {
    background-color: blue;
  }






  h1 {display: block;}

/*todo fix active*/
  .page-home.hdr-shift-after .header a[href="/#work"] {
      background: #D7DEDC;
  }

  .page-home .bric-hdr-shift {
      height: 100vh;
  }  

  .page-home .bric-tiles {
    position: relative;
    max-width: none;
    background: #161616;
    text-transform: uppercase;
    color: #fff;
  }

  .page-home .bric-tiles h2 {
    text-align: center;
  }

  .page-home .bric-tiles .bric-row {
    max-width: 1840px;
  }

  .page-home .bric-tiles .bric-col {}

  .page-home .bric-tiles .bric-col-inner {
    padding-left: 0;
    padding-right: 0;
  }

  .page-home .bric-tiles .bric-col a {
    display: block;
    position: relative;
    width: 520px;
    max-width: 100%;
    height: 400px;
    background: #555;
  }

  .page-home .bric-tiles img {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }  

  .page-home .bric-tiles .bric-col:nth-child(1) img {width: 67%;}
  .page-home .bric-tiles .bric-col:nth-child(2) img {width: 65%;}
  .page-home .bric-tiles .bric-col:nth-child(3) img {width: 32%;}

  .page-home .bric-tiles ul,
  .page-home .bric-tiles ul li {
    margin: 0;
    padding: 0;
  }

  .page-home .bric-tiles ul {
    list-style-type: none;
    display: flex;
  }

  .page-home .bric-tiles ul li {
    flex: 1;
  }

  .page-home .bric-tiles ul li:nth-child(1) {
    font-weight: 600;
  }

  .page-home .bric-tiles ul li:nth-child(2) {
    text-align: right;
  }


  @media only screen and (min-width: 1500px) {


    .page-home .bric-tiles {
      height: 100vh;
      position: relative;
    }

    .page-home .bric-tiles .bric-row {
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }    


  }



</style>
