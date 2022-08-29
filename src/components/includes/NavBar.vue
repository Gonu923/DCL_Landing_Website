<script>
import OwlCarusel from './OwlCarusel.vue';


export default {
    name: "NavBar",
    components: { OwlCarusel }
};
</script>
<template>

    <div>
        <!-- Status Bar Section Start -->
        <div class="container-fluid">
            <div class="row bg-danger
         py-2 ">
                <div class="col-md-6 col-12 d-flex justify-content-start status-bar-left">
                    <li>Contact</li>
                    <li><i class="fas fa-envelope"></i></li>
                    <li>dhaka.choice@gmail.com</li>
                </div>
                <div class="col-md-6 col-12 d-flex justify-content-end status-bar-right ">
                    <p class="follow_us ">Follow Us</p>
                    <a class="link" href=""><i class="fab fa-facebook"></i></a>
                    <a class="link" href=""><i class="fab fa-twitter"></i></a>
                    <a class="link" href=""><i class="fab fa-instagram"></i></a>
                    <a class="link" href=""><i class="fab fa-youtube"></i></a>
                    <a class="link" href=""><i class="fab fa-skype"></i></a>
                    <a class="link" href=""><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </div>
        <!-- Status Bar Section End -->
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2">
                    <img width="160" height="120" src="../../assets/images/logo.png" alt="">
                </div>
                <div class="col-md-10 py-2">
                    <OwlCarusel />
                </div>
            </div>
        </div>

        <!-- Navbar Section Start  -->
        <nav class="navbar navbar-expand-lg nav-bg-color">
            <div class="container-fluid">
                <button class="navbar-toggler ml-auto custom-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-start" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mx-4 mb-lg-0 ">
                        <li class="nav-item">
                            <a class="nav-link txt_color" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link txt_color " aria-current="page" href="/about-us">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link txt_color " aria-current="page" href="#">Our Service</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link txt_color " aria-current="page" href="#">Message</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link txt_color " href="#">Partner</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link txt_color dropdown-toggle " href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Join Us
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="vendor-registration">Retailer & Wholesaler Registration </a></li>
                                <li><a class="dropdown-item" href="#"> Direct Retailer Service Form</a></li>

                                
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link txt_color " href="#">Enterprises</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link txt_color " href="#">Media</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link txt_color  btn-contact" href="#">Contact Us</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link txt_color dropdown-toggle " href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Select service
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <!-- <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search Our All Service"
                            aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form> -->
                </div>
            </div>
        </nav>
        <!-- Navbar Section End -->


       


    </div>
</template>
<style>
div.fixed {
    width: 10%;
    height: 100px;
    background-color: red;
    border: 3px solid #73AD21;
}

.a {
    padding-left: 10px;
    float: right;
    width: 90%;
    height: auto;
    border: 3px solid black;
}
</style>