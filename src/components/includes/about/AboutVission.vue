<template >
    <section id="alt-services" class="alt-services">
        <div class="container" data-aos="fade-up">
            <div class="row justify-content-around gy-4">
                <h2 class="mission_title">Our Vision</h2>
                <hr>
                <div class="col-lg-5 d-flex flex-column justify-content-center">
                    
                    <div class="icon-box d-flex position-relative"  data-aos-delay="100">
                        <i class="fas fa-check flex-shrink-0"></i>
                        <div>
                            <h4><a href="" class="stretched-link">Lorem Ipsum</a></h4>
                            <p>
                                Voluptatum deleniti atque corrupti quos dolores et quas
                                molestias excepturi sint occaecati cupiditate non provident
                            </p>
                        </div>
                    </div>
                    <!-- End Icon Box -->

                    <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
                        <i class="fas fa-check flex-shrink-0"></i>
                        <div>
                            <h4><a href="" class="stretched-link">Nemo Enim</a></h4>
                            <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus
                                qui blanditiis praesentium voluptatum deleniti atque
                            </p>
                        </div>
                    </div>
                    <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
                        <i class="fas fa-check flex-shrink-0"></i>
                        <div>
                            <h4><a href="" class="stretched-link">Nemo Enim</a></h4>
                            <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus
                                qui blanditiis praesentium voluptatum deleniti atque
                            </p>
                        </div>
                    </div>
                    <!-- End Icon Box -->

                    <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
                        <i class="fas fa-check flex-shrink-0"></i>
                        <div>
                            <h4><a href="" class="stretched-link">Dine Pad</a></h4>
                            <p>
                                Explicabo est voluptatum asperiores consequatur magnam. Et
                                veritatis odit. Sunt aut deserunt minus aut eligendi omnis
                            </p>
                        </div>
                    </div>
                    <!-- End Icon Box -->

                    <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
                        <i class="fas fa-check flex-shrink-0"></i>
                        <div>
                            <h4><a href="" class="stretched-link">Tride clov</a></h4>
                            <p>
                                Est voluptatem labore deleniti quis a delectus et. Saepe
                                dolorem libero sit non aspernatur odit amet. Et eligendi
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
.mission_title {
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