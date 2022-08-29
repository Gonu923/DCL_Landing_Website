<template>
    <section id="alt-services" class="alt-services">
        <div class="container" data-aos="fade-up">
            <div class="row justify-content-around gy-4">
                <h2 class="mission_title">Our Values</h2>
                <hr>
                <div class="col-lg-6 img-bg " data-aos="zoom-in" data-aos-delay="100">
                </div>

                <div class="col-lg-6">
                    <div class="card" style="width: 100%;">
                        <div class="card-body">
                            <p class="card-text">Dhaka Choice Ltd has adopted patriotism, honesty, fair practice and service to the nation as its core values, which act as the main basis in its decision-making. These values have created a moral compass for everyone at the company from the top management to ordinary employees and created the organizational culture accordingly. The group always tries to be driven by these values and not to deviate from them in any situation.</p>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md text-center mt-5">
                                <i class="fas fa-check"></i>
                                <a class="btn btn-warning mt-3">Innovation</a>
                            </div>
                            <div class="col-md text-center mt-5">
                                <i class="fas fa-check"></i>
                                <a class="btn btn-warning mt-3">Innovation</a>
                            </div>
                            <div class="col-md text-center mt-5">
                                <i class="fas fa-check"></i>
                                <a class="btn btn-warning mt-3">Innovation</a>
                            </div>
                            <div class="col-md text-center mt-5">
                                <i class="fas fa-check"></i>
                                <a class="btn btn-warning mt-3">Innovation</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "AboutValue",
    components: {

    }
}
</script>
<style>
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