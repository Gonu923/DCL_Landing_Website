<template>
    <section id="alt-services" class="alt-services">
        <div class="container" data-aos="fade-up">
            <div class="row justify-content-around gy-4">
                <div class="col-lg-8">
                    <div class="card profile" style="width: 100%;">
                        <div class="card-body">
                            <p class="card-text">Shahana Nazim Sultana Nab is the Director of Dhaka Choice Ltd. Progress
                                for me has never been a dream. It has always been a distant reality and once one
                                milestone is achieved, there is always another one waiting to be crossed. It is with
                                this belief that I started Dhaka Choice Ltd. in 2021, a company that was in the business
                                of Online Business Platform. Almost instantly, Dhaka Choice Ltd. became a prominent name
                                in its business segment, but like every entrepreneur sticks to their dream; I always
                                wanted to push my company to more prosperous milestones. More than being a global
                                player, I always perceived my company as a unit that could make a difference with its
                                quality and competitively priced products. A highly sensitive business that requires a
                                high amount of technical know-how, expertise and specialized knowledge. The journey of
                                Dhaka Choice Ltd is never ending. But with the support of my team and clients, I am
                                confident that the company will continue to scale milestones of excellence for years to
                                come.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card profile mb-2">
                        <div class="card-body text-center pt-2 p-0">
                            <img src="../../../assets/images/message/shahana_nazim.jpg" alt="avatar"
                                class="rounded-circle img-fluid" style="width: 150px" />
                            <h5 class="my-3">Shahana Nazim Sultana Nab</h5>
                            <p class="text-muted mb-1">Director</p>
                            <p class="text-muted mb-4">Dhaka Choice Ltd.</p>
                            <div class="d-flex justify-content-center mb-2">
                                <a class="btn btn-outline-primary ms-1" href=""><i class="fab fa-facebook-f fa-lg"
                                        style="color: #55acee"></i></a>
                                <a class="btn btn-outline-primary ms-1" href=""><i class="fab fa-instagram fa-lg"
                                        style="color: #3F729B"></i></a>
                                <a class="btn btn-outline-primary ms-1" href=""><i class="fab fa-twitter fa-lg"
                                        style="color: #55acee"></i></a>
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
    name: "DirectorOne",
    components: {},

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