<template>
    <section id="alt-services" class="alt-services">
        <div class="container" data-aos="fade-up">
            <div class="row justify-content-around gy-4">
                <h2 class="mission_title">What We Are</h2>
                <hr>
                <div class="col-lg-6 img-bg " data-aos="zoom-in" data-aos-delay="100"></div>

                <div class="col-lg-5 d-flex flex-column justify-content-right wearetext">
                    <div class="card" style="width: 100%;">
                        <div class="card-body">
                            <p class="card-text">
                                We are a sales performance company. We have been helping businesses drive revenue with
                                the use of inbound marketing and sales enablement tactics since 2020; our team is made
                                up of smart and talented people that are passionate about creating inbound sales
                                results! This is the first time in Bangladesh that customers can buy products directly
                                from any retail store and get discounts and reward points by apps. Dhaka Choice Ltd is a
                                Online Business Platform, a sister concern of Jamal Foods and Chemical Ltd. Dhaka Choice
                                Ltd focuses on Ultimate one stop shopping experience, Most trusted online shopping
                                platform, Most trusted online business partner, Respected service provider, Wide
                                selection of the best local and foreign brand, Fastest delivery service, Genuine and
                                authentic products,
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "WhatweAre",
    components: {

    }

}
</script>
<style>
.wearetext {
    text-align: right;
}

.mission_title {
    font-size: 48px;
    font-weight: 700;
    font-family: var(--font-secondary);
    margin: 30px 0;
    text-align: right;
}

.alt-services .img-bg {
    background-size: cover;
    background-position: center center;
    background-image: url(../../../assets/images/about/one.jpg);
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