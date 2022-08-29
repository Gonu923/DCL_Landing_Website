<template>
    <section id="about" class="about">
        <div class="container" data-aos="fade-up">
            <div class="row position-relative">
                <div class="col-lg-5 about-img">
                </div>

                <div class="col-lg-7">
                    <h2>About Us</h2>
                    <div class="our-story">
                        <h3>Corporate Profile-</h3>
                        <p>
                            Dhaka Choice Ltd is one of the largest online business platforms in Bangladesh. We are the top e-commerce company in Bangladesh. Launched in 2021, the online store offers the widest range of products in categories ranging from electronics to household appliances, latest smart phones, Camera, Computing & accessories fashion, health equipment and makeup. Among the spacious and growing strategic business units of the giant Dhaka Choice Ld, We are here to grow your business; also we provided the necessary guidelines that will help you to increase your product and your service. We offer the best service that helps you to achieve your goal on a larger scale. We handled your service so professionally and creatively. Dhaka Choice Ltd believes in “Delivering Happiness” with an excellent customer experience thus providing the most efficient delivery service through its own logistics so that customers get a hassle-free product delivery at their doorstep. We help our local and international vendors as well as 200 brands serving thousands of consumers from all over Bangladesh. We also offer free returns and various payment methods including Cash on delivery, Online Payments, Card on delivery and bkash with all of our products. Follow us on Facebook, Twitter, Instagram, Youtube to stay updated about our latest offers and promotions. Happy Online Service!
                        </p>
                     
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {

    name: "AboutHero",
    components: {}
}
</script>
<style>
.about h2 {
    font-size: 48px;
    font-weight: 700;
    font-family: var(--font-secondary);
    margin: 30px 0;
}

@media (min-width: 991px) {
    .about h2 {
        max-width: 65%;
        margin: 0 0 80px 0;
    }
}

.about .our-story {
    padding: 40px;
    background-color: #f5f6f7;
}

@media (min-width: 991px) {
    .about .our-story {
        padding-right: 5%;
    }
}

.about .our-story h4 {
    text-transform: uppercase;
    font-size: 18px;
    color: #838893;
}

.about .our-story h3 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 20px;
    color: var(--color-secondary);
}

.about .our-story p:last-child {
    margin-bottom: 0;
}

.about ul {
    list-style: none;
    padding: 0;
    font-size: 15px;
}

.about ul li {
    padding: 5px 0;
    display: flex;
    align-items: center;
}

.about ul i {
    font-size: 20px;
    margin-right: 4px;
    color: var(--color-primary);
}

.about .watch-video i {
    font-size: 32px;
    transition: 0.3s;
    color: var(--color-primary);
}

.about .watch-video a {
    font-weight: 600;
    color: var(--color-secondary);
    margin-left: 8px;
    transition: 0.3s;
}

.about .watch-video:hover a {
    color: var(--color-primary);
}

.about .about-img {
    min-height: 600px;
    background-size: cover;
    background-image: url(../../../assets/images/about/about_us_img.png);
    background-position: center;

}

@media (min-width: 992px) {
    .about .about-img {
        position: absolute;
        top: 0;
        right: 0;
        margin-top: -20px;
    }
}
</style>