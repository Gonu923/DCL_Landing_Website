<template >
    <section id="alt-services" class="alt-services">
        <div class="container" data-aos="fade-up">
            <div class="row justify-content-around gy-4">
                <h2 class="vision_title">Our Vision</h2>
                <hr>
                <div class="col-lg-5 d-flex flex-column justify-content-center">
                    <div class="icon-box d-flex position-relative align-items-center para"  data-aos-delay="100">
                        <div class="d-flex align-items-center">
                            <p class="fs-5 fw-normal p-3">
                                Dhaka Choice Ltd has already become one of the largest conglomerates and the leader in many areas of business and industry in Bangladesh. It wishes to go far ahead from where it is now. The company wants to be the largest business house of the country and the biggest contributor, from the private sector, to the economic and social development. It also wishes to bring more and more people under job and thus become the largest employer in the private sector.
                            </p>
                        </div>
                    </div>
                    <!-- End Icon Box -->

                    <div class="icon-box d-flex position-relative align-items-center para" data-aos="fade-up" data-aos-delay="200">
                        <div class="d-flex align-items-center">
                            
                            <p class="fs-5 fw-normal p-3">
                                To accomplish the vision, the company has already ventured into many business and industrial areas, including some as pioneer, and has plans to be engaged in many more areas. The company has started work to go global and hopes to announce its global presence in a couple of years.
                            </p>
                        </div>
                    </div>
                    <div class="icon-box d-flex position-relative align-items-center para" data-aos="fade-up" data-aos-delay="200">
                        <div class="d-flex align-items-center">
                            
                            <p class="fs-5 fw-normal p-3">
                                Doing business is not an easy task anywhere, particularly in the fast- changing global scenario, which invites many new challenges. However, Dhaka Choice Ltd is confident of continuing its march forward even at a faster pace in any situation – favorable and unfavorable – in the days to come and always uphold its core theme – For the People, For the Country.
                            </p>
                        </div>
                    </div>
                    <!-- End Icon Box --> 
                </div>
                <div class="col-lg-6 img-bg "
                    data-aos="zoom-in" data-aos-delay="100"></div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "AboutVission",
    components: {},

}
</script>
<style>
.para{
  text-align: justify;
}
.para:hover{
  transform: skew(5deg);
}

.vision_title {
    font-size: 48px;
    font-weight: 700;
    font-family: var(--font-secondary);
    margin: 30px 0;
    text-align: left;
}
.alt-services .img-bg {
  background-size: cover;
  background-position: center center;
  background-image: url(../../../assets/images/about/mission.jpg);
  min-height: 400px;
}

.alt-services h3 {
  font-size: 28px;
  font-weight: 700;
  color: var(--color-secondary);
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
}

.alt-services h3:after {
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 3px;
  background: var(--color-primary);
  left: 0;
  bottom: 0;
}

.alt-services .icon-box {
  margin-top: 50px;
}

.alt-services .icon-box i {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  margin-right: 25px;
  font-size: 28px;
  width: 56px;
  height: 56px;
  border-radius: 4px;
  line-height: 0;
  box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.08);
  background-color: #fff;
  transition: 0.3s;
}



.alt-services .icon-box h4 {
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 18px;
}

.alt-services .icon-box h4 a {
  color: #000;
  transition: 0.3s;
}

.alt-services .icon-box h4 a:hover {
  color: var(--color-primary);
}

.alt-services .icon-box p {
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}
</style>