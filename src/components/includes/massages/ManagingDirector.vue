<template>
    <section id="alt-services" class="alt-services">
        <div class="section-title">
          <h2>Messages</h2>
        </div>
        <div class="container" data-aos="fade-up">
            <div class="row justify-content-around gy-4">
                <div class="col-lg-4">
                    <div class="card profile mb-2">
                        <div class="card-body text-center pt-2 p-0">
                            <img src="../../../assets/images/message/Md.akbor.jpg"
                                alt="avatar" class="rounded-circle img-fluid" style="width: 150px" />
                            <h5 class="my-3">Md. Akbor Hosain</h5>
                            <p class="text-muted mb-1">Managing Director</p>
                            <p class="text-muted mb-4">Dhaka Choice Ltd.</p>
                            <div class="d-flex justify-content-center mb-2">
                                <a class="btn btn-outline-primary ms-1" href=""><i class="fab fa-facebook-f fa-lg" style="color: #55acee"></i></a>
                                <a class="btn btn-outline-primary ms-1" href=""><i class="fab fa-instagram fa-lg" style="color: #3F729B"></i></a>
                                <a class="btn btn-outline-primary ms-1" href=""><i class="fab fa-twitter fa-lg" style="color: #55acee"></i></a>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="col-lg-8">
                    <div class="card profile" style="width: 100%;">
                        <div class="card-body">
                            <p class="card-text">kbor Hossain is the Managing Director of Dhaka Choice Ltd. Mr. Akbor
                                Hossen is a self-made man. He was born in 1985 in a respectable Muslim family in the
                                district of Laxmipur, Bangladesh. Mr.Akbor Hssen started his career in the Food and
                                Beverage sector in 2007. In this field, he has obtained a lot of knowledge about
                                commercial work, Banking, Rawhide purchase, production planning from rawhide to finished
                                leather with quality control systems. He started to visit many countries of Asia,
                                Europe; the U.S.A & Africa to learn marketing and explore the lifestyle of different
                                regions. Mr. Akbor Hossen is a businessman with a vision. He has worked hard in various
                                sectors from the beginning of his career. Overcoming challenge after challenge with the
                                support of my brilliant team, I have been trying to bring Dhaka Choice Ltd to a new
                                milestone of global recognition.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "ManagingDirector",
    components: {}

}
</script>
<style>

.brd_title{
    margin: auto;
    width: 80%;
    border: 1px solid #000;
}
.mission_title {
    font-size: 48px;
    font-weight: 700;
    font-family: var(--font-secondary);
    margin: 30px 0;
    text-align: right;
}

/* .alt-services .img-bg {
        background-size: cover;
        background-position: center center;
        background-image: url(../../../assets/images/about/mission.jpg);
        min-height: 400px;
    } */
.left_img {
    width: 80%;
    height: 500px;


}

.left_img img {
    width: 280px;
    height: 280px;
    border-radius: 50%;
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

.profile:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 100%;
}

/* this comment by asif */
</style>