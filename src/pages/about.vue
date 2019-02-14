<template>
  <div>
    <page-header></page-header>
    <section class="about-us ap-two">
      <div class="container">
        <div class="sec-title centered">
          <h5>About Us</h5>
          <h2>Welcome to ASTRAGRACE</h2>
        </div>
        <div class="row">
          <div class="services-block-two col-xl-6 col-lg-12">
            <div class="inner-box">
              <div class="title">
                <h4>Nature has an answer for your heath!</h4>
              </div>
              <div class="text">
                <p>
                  ASTRAGRACE Corp Pty Ltd. started from the heart of embracing Australian nature. The therapeutic benefits and the natural healing of our bodies can be found from our wonderful environment. We believe that "Nature has an answer for you health".
                  It’s true that modern prescription medicines provide instant and immediate results in treating people’s health. However, these medical treatments can at times cause undetermined adverse reactions and side effects, causing the body with a weak immune system. Therefore, we are committed to researching and developing a natural therapeutic medicine for all health and people. We maintain high efficacy and level of potency of our ingredients, leaving the body with little or no side effects.
                </p>
                <p>
                  Our company ensures that all our products are manufactured in high quality and hygienic processes which includes clinical validation of the products before they are placed on the shelf. We continue to strive ourselves to be Australia’s leading natural therapeutic company to expand awareness of Australia’s natural therapeutic medicine to the world. We hope you take part with us on this journey for growth and success.
                  Our brands includes DR.NATURAL, MEDIACTIVE, MDACTIVE, ASPODEL and SR20+.
                </p>
              </div>
              <!-- <div class="signature">
                <img src="images/icons/sign.png" alt>
              </div>
              <div class="author-information">
                <h4>Mark Nicholes</h4>
                <div class="designation">CEO & Founder</div>
              </div> -->
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <div class="flex-box">
              <div class="image">
                <img src="../../static/images/resource/about-1.jpg" alt>
              </div>
              <!--Fact Counter-->

            </div>
          </div>
        </div>
      </div>
    </section>

    <page-footer></page-footer>
  </div>
</template>


<script>
import PageHeader from "@/components/header.vue";
import PageFooter from '@/components/footer';
export default {
  name: "about",
  components: {
    PageHeader,
    PageFooter,
  }
};
</script>
