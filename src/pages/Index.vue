<template>
    <Layout class="page-home">
        <SectionHdrShift>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div>
                <h1>Amber Verhulst</h1>
                <span>Designer + Front-End Developer</span>
            </div>
        </SectionHdrShift>

        <Section id="work" class="bric-tiles">
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

            <g-link class="back-to-top" to="/#app">
                <svg alt="Back to top" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"
                    height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                    <rect fill="none" height="24" width="24" />
                    <path d="M5,9l1.41,1.41L11,5.83V22H13V5.83l4.59,4.59L19,9l-7-7L5,9z" />
                </svg>
            </g-link>
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
        text-align: center;
    }

    .page-home .bric-hdr-shift div>span::before {
        content: '';
        display: block;
        background: #0aff7e;
        width: 2.3em;
        height: 0.23em;
        margin: 0 auto 1.47em auto;
    }

    .page-home .header a,
    .page-home.hdr-shift .header a[href="/#work"] {
        color: #fff;
    }

    .page-home .header a[href="/#work"],
    .page-home.hdr-shift .header a:hover {
        color: #0AFF7E;
    }

    .page-home .header a:hover {
        color: #0AFF7E;
    }

    .page-home .bric-hdr-shift .bric-row>div {
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        margin: 0 auto;
        height: auto;
    }

    .page-home .bric-hdr-shift h1 {
        display: block;
        font-family: Eczar, serif;
        font-weight: 600;
        color: #fff;
        font-size: 2.1em;
        margin-bottom: 0.473em;
        letter-spacing: .037em;
    }

    .page-home .bric-hdr-shift>span {
        display: block;
        font-size: 1.16em;
        letter-spacing: .04em;
        padding-bottom: 0.4em;
    }

    .page-home .header nav a:first-child {
        display: none;
    }

    .page-home .header {
        background-color: transparent !important;
    }

    .page-home .header .bric-row {
        border: none;
    }

    .page-home.hdr-shift-after .header a[href="/#work"] {
        background: #D7DEDC;
    }

    .page-home .bric-hdr-shift,
    .page-home .bric-tiles {
        height: 100vh;
    }

    .page-home .bric-tiles {
        background: #161616;
    }

    .page-home .bric-tiles {
        position: relative;
        max-width: none;
        text-align: center;
        text-transform: uppercase;
        color: #fff;
        padding-top: 70px;
        padding-bottom: 0;
    }

    .page-home .bric-tiles h2 {
        text-align: center;
        font-size: 25px;
        font-weight: normal;
        display: none;
    }

    .page-home .bric-tiles h2 span::after {
        content: '';
        display: block;
        background: #0AFF7E;
        width: auto;
        height: 3px;
        margin: 5px 0 0 0;
    }

    .page-home .bric-tiles .bric-row {
        max-width: 1660px;
    }

    .page-home .bric-tiles .bric-col {
        font-size: 13px;
        height: calc(33.333vh - 24px);
        min-height: 200px;
        overflow: hidden;
        padding-bottom: 0;
    }

    .page-home .bric-tiles .bric-col-inner {
        padding-left: 0;
        padding-right: 0;

        padding: 0;
        position: relative;
        height: 100%;
    }

    .page-home .bric-tiles .bric-col a {
        display: block;
        position: relative;
        max-width: 100%;
        background: #555;

        height: auto;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 50px;
    }

    .page-home .bric-tiles .bric-row img {
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        max-height: 140px;
    }

    .page-home .bric-tiles .bric-col:nth-child(1) a {
        background: url('../assets/images/ban-crash-hom-01.png');
        background-size: cover;
        background-position: center center;
    }

    .page-home .bric-tiles .bric-col:nth-child(2) a {
        background: url('../assets/images/ban-art-hom-04-a.png');
        background-size: cover;
        background-position: center center;
    }

    .page-home .bric-tiles .bric-col:nth-child(3) a {
        background: url('../assets/images/ban-ill-hom-01.png');
        background-size: cover;
        background-position: center center;
    }

    .page-home .bric-tiles .bric-col a::before {
        content: '';
        display: block;
        background: #161616;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        filter: opacity(85%);
        transition: background .25s ease;
    }

    .page-home .bric-tiles .bric-col a:hover::before {
        filter: opacity(75%);
        background: #0aff7e;
    }

    .page-home .bric-tiles .bric-col:nth-child(1) img {
        width: 67%;
        max-width: 344px;
    }

    .page-home .bric-tiles .bric-col:nth-child(2) img {
        width: 65%;
        max-width: 324px;
    }

    .page-home .bric-tiles .bric-col:nth-child(3) img {
        width: 32%;
        max-width: 170px;
    }

    .page-home .bric-tiles ul,
    .page-home .bric-tiles ul li {
        margin: 0;
        padding: 0;
    }

    .page-home .bric-tiles ul {
        list-style-type: none;
        display: block;
        padding-top: 12px;

        position: absolute;
        bottom: 0;
        top: auto;
        left: 0;
        right: 0;
        line-height: 38px;
        padding: 0 0 12px 0;
    }

    .page-home .bric-tiles ul li {
        display: block;
    }

    .page-home .bric-tiles ul li:nth-child(1) {
        font-weight: 600;
        float: left;
    }

    .page-home .bric-tiles ul li:nth-child(2) {
        text-align: right;
        float: right;
    }

    .page-home .bric-tiles ul li:first-child span:first-child,
    .page-home .bric-tiles ul li:last-child span span {
        color: #0AFF7E;
    }

    .page-home .bric-tiles ul li:first-child span:first-child::after {
        content: '';
        display: inline-block;
        width: 38px;
        height: 2px;
        background: #0AFF7E;
        line-height: 1em;
        margin: 0 12px 5px 12px;
    }

    .page-home .back-to-top {
        display: none;
        margin: 0;
        padding: 0;
        filter: none;
        position: absolute;
        bottom: 22px;
        right: 46px;
    }

    .page-home .back-to-top:hover svg {
        fill: #0aff7e;
    }

    .page-home .back-to-top img {
        display: inline-block;
        filter: none;
        width: 26px;
    }

    @media only screen and (min-width: 450px) {

        .page-home .bric-tiles .bric-col {
            font-size: 16px;
        }

    }

    @media only screen and (min-width: 470px) {
        .page-home .bric-hdr-shift div {
            font-size: 20px;
        }
    }

    @media only screen and (min-width: 670px) {
        .page-home .bric-hdr-shift h1 {
            margin-bottom: 0.3em;
        }

        .page-home .bric-hdr-shift div {
            font-size: 25px;
        }

        .page-home .bric-hdr-shift div>span::before {
            width: 2.8em;
            height: 0.28em;
            margin-bottom: 1.24em;
        }
    }

    @media only screen and (min-width: 970px) {
        .page-home .bric-hdr-shift div {
            font-size: 35px;
        }

        .page-home .bric-hdr-shift div>span {
            font-size: .8em;
        }
    }


    @media only screen and (min-width: 1000px) {

        .page-home .bric-tiles {
            padding-left: 50px;
            padding-right: 50px;
        }

        .page-home .bric-tiles h2,
        .page-home .bric-tiles h2 span,
        .page-home .back-to-top {
            display: inline-block;
        }

        .page-home .bric-tiles h2 {
            position: absolute;
            top: 0;
            bottom: auto;
            left: 0;
            right: 0;
            margin: 0;
        }

        .page-home .bric-tiles .bric-row {
            margin: 0 auto;
            padding: 40px 0;
            overflow: hidden;

            position: absolute;
            left: 50px;
            right: 50px;
            top: 50%;
            transform: translateY(-50%);
        }

        .page-home .bric-tiles .bric-row-inner {
            padding: 0;
            margin-left: -25px;
            margin-right: -25px;
        }

        .page-home .bric-tiles .bric-col {
            font-size: 13px;
            padding-left: 25px;
            padding-right: 25px;
            height: auto;
            padding-top: 50px;
        }

        .page-home .bric-tiles .bric-col a {
            height: 233px;
            position: relative;
        }

        .page-home .bric-tiles .bric-row img {
            max-height: none;
        }

        .page-home .bric-tiles ul {
            position: relative;
        }

        .page-home .bric-tiles ul li:first-child span:first-child::after {
            width: 13px;
            margin: 0 4px 4px 4px;
        }

    }

    @media only screen and (min-width: 1170px) {

        .page-home .bric-tiles .bric-col a {
            height: 293px;
        }

        .page-home .bric-tiles ul li:first-child span:first-child::after {
            width: 38px;
            margin: 0 12px 5px 12px;
        }

    }

    @media only screen and (min-width: 1280px) {

        .page-home .bric-tiles .bric-row {
            padding: 65px 0;
        }

        .page-home .bric-tiles .bric-col {
            font-size: 16px;
        }

    }


    @media only screen and (min-width: 1740px) {

        .page-home .bric-tiles h2 {
            font-size: 31px;
        }

    }

    @media only screen and (min-width: 1900px) {

        .page-home .bric-hdr-shift div {
            font-size: 53px;
        }

        .page-home .bric-hdr-shift h1 {
            margin-bottom: 0.14em;
        }

        .page-home .bric-hdr-shift div>span::before {
            width: 3.4em;
            height: 0.4em;
            margin-bottom: 0.92em;
        }
    }

    @media only screen and (min-width: 1920px) {

        .page-home .bric-tiles .bric-row {
            max-width: 1720px;
        }

        .page-home .bric-tiles .bric-row-inner {
            margin-left: -40px;
            margin-right: -40px;
        }

        .page-home .bric-tiles .bric-col {
            padding-left: 40px;
            padding-right: 40px;
        }

    }
</style>
