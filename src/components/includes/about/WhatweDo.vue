<template>
    <section id="alt-services" class="alt-services">
        <div class="container" data-aos="fade-up">
            <div class="row justify-content-around gy-4">
                <h2 class="history_title">What We Do</h2>
                <hr>
                <div class="col-lg-6">
                    <div class="card" style="width: 100%;">
                        <div class="card-body">
                            <p class="card-text"> We provide a variety of online web based services to
                                customers, Merchant & Business Partner. Like- C2B, B2C, B2B, Also we provided a variety
                                of online app Partner Services, Like- Retail products purchase from online, Wholesale
                                products purchase from online, By using apps, customers can purchase products from the
                                shopkeeper and get discounts and Anyone can buy products directly from the wholesale
                                market using apps and get discounts. Every person has different types of work in their
                                home and to shoot all those tasks, one has to go outside the house and find the
                                servicemen, which is very painful and waste of time; we are the first in Bangladesh to
                                bring various types of home services in apps, which can be directly accessed in apps.
                                Such as: Mason, Electrician, Painter, Doctor, Nurse, Work Boy, etc.
                                B2C: Apps Based Service (Shopkeeper relationship with customers)
                                B2B: Apps Based Services (Relationship of Retailer with Wholesaler)
                                C2B: Apps Based Service (Customer Relationship with Service Provider)
                                E-commerce: Web Based Business Platform (Online Retail Product and Wholesale Product
                                Sales Services)
                                Delivery: Apps Based Services (Delivery is provided in all over Bangladesh)
                                Credit: Apps Based Services (Helping Retail Traders by Lending Money, Helping Wholesale
                                Traders by Lending Money)</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 img-bg " data-aos="zoom-in" data-aos-delay="100">
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name:"WhatweDo",
    components:{},

}
</script>
<style>
    .history_title {
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