<template>
    <div>
        <div class="container m-5">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-title">
                            <h3 class="text-center font-bold m-2">Retailer Services Form</h3>
                        </div>
                        <div class="card-body">
                            <div class="container">
                                <form action="">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group mb-2">
                                                <label for="name">Enter Your name :</label>
                                                <input type="text" placeholder="Name" class="form-control">
                                            </div>

                                            <div class="form-group mb-2">
                                                <label for="name">Photo Upload :</label>
                                                <br>
                                                <input class="form-control" type="file" id="img" name="img"
                                                    accept="image/*">
                                            </div>

                                            <div class="form-group mb-2">
                                                <label for="name">Permanent Address :</label>
                                                <input type="text" class="form-control"
                                                    placeholder="Enter Your Permanent Address">
                                            </div>
                                            <div class="form-group mb-2">
                                                <label for="name">Business Name :</label>
                                                <input type="text" class="form-control"
                                                    placeholder="Enter Your Business Name">
                                            </div>
                                            <div class="form-group mb-2">
                                                <label for="name">Business Mobile number :</label>
                                                <input type="text" class="form-control"
                                                    placeholder="Enter Your Business Mobile number">
                                            </div>
                                            <div class="form-group mb-2">
                                                <label for="name">Business Starting Date :</label>
                                                <input class="form-control" type="date" name="" id="">
                                            </div>
                                            <div class="form-group mb-2">
                                                <label for="name">Estimated Daily Sales :</label>
                                                <input type="text" class="form-control"
                                                    placeholder="enter Your Daily Sales amount">
                                            </div>
                                            <div class="mb-3">
                                            <label for="name">Account Type</label> <br>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1"
                                                    value="option1">
                                                <label class="form-check-label" for="inlineCheckbox1">Bkash</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2"
                                                    value="option2">
                                                <label class="form-check-label" for="inlineCheckbox2">Nagad</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3"
                                                    value="option3">
                                                <label class="form-check-label" for="inlineCheckbox3">Roclet</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3"
                                                    value="option3">
                                                <label class="form-check-label" for="inlineCheckbox3">Bank</label>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group mb-2">
                                                <label for="name">Phone Number :</label>
                                                <input type="text" class="form-control"
                                                    placeholder="Enter Your Phone Number">
                                            </div>

                                            <div class="form-group mb-2">
                                                <label for="name">present Address :</label>
                                                <input type="text" class="form-control"
                                                    placeholder="Enter Your present Address">
                                            </div>

                                            <div class="form-group mb-2">
                                                <label for="name">NID Number :</label>
                                                <input type="text" class="form-control"
                                                    placeholder="Enter Your NID Number">
                                            </div>
                                            <div class="form-group mb-2">
                                                <label for="name">Business Address :</label>
                                                <input type="text" class="form-control"
                                                    placeholder="Enter Your Business Address">
                                            </div>
                                            <div class="form-group mb-2">
                                                <label for="name">Email Address :</label>
                                                <input type="email" class="form-control"
                                                    placeholder="Enter Your Email Address">
                                            </div>
                                            <div class="form-group mb-2">
                                                <label for="name">Business Duration Date :</label>
                                                <input class="form-control" type="date" name="" id="">
                                            </div>
                                            <div class="form-group mb-2">
                                                <label for="name">Estimated Monthly Sales :</label>
                                                <input type="text" class="form-control"
                                                    placeholder="Enter Your Monthly Sales Amount">
                                            </div>
                                            <div class="form-group mb-2">
                                                <label for="name">Vendor Type:</label>
                                                <select name="VendorType:" id="" class="form-control">
                                                    <option value="">Retailer</option>
                                                    <option value="">Whole Sallier</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-color" style="background-color: orange;"
                                            type="button">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"VendorReg",
    components:{}
}
</script>
<style>
</style>