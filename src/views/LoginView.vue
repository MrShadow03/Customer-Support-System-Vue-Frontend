<script setup>
    import logo from '@/assets/images/logo.jpg'
</script>
<template>
    <!--begin::Form-->
    <form class="form w-100" novalidate="novalidate" id="kt_sign_in_form" action="#">
        <!--begin::Heading-->
        <div class="text-center mb-11">
            <img class="w-150px mb-5" alt="Logo" :src="logo" style="width: 150px; aspect-ratio: 1; object-fit:contain">
    
            <!--begin::Subtitle-->
            <div class="text-gray-500 fw-semibold fs-6">
                Login to Customer Support System
            </div>
            <!--end::Subtitle--->
        </div>
        <!--begin::Heading-->
    
        <!--begin::Input group--->
        <div class="fv-row mb-8">
            <!--begin::Email-->
            <input type="text" placeholder="Email" name="email" autocomplete="off" class="form-control bg-transparent"/> 
            <!--end::Email-->
        </div>
    
        <!--end::Input group--->
        <div class="fv-row mb-3">    
            <!--begin::Password-->
            <input type="password" placeholder="Password" name="password" autocomplete="off" class="form-control bg-transparent"/>
            <!--end::Password-->
        </div>
        <!--end::Input group--->  
    
        <!--begin::Submit button-->
        <div class="d-grid mb-10 mt-10">
            <button type="submit" id="kt_sign_in_submit" class="btn btn-primary">
                
                <!--begin::Indicator label-->
                <span class="indicator-label">
                    Login</span>
                <!--end::Indicator label-->
                
                <!--begin::Indicator progress-->
                <span class="indicator-progress">
                    Please wait...    <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                </span>
                <!--end::Indicator progress-->
            </button>
        </div>
        <!--end::Submit button-->
    
        <!--begin::Sign up-->
        <div class="text-gray-500 text-center fw-semibold fs-6">
            Don't have an account yet?
    
            <RouterLink :to="{name: 'signup'}" class="link-primary fw-bolder">
                Sign Up
            </RouterLink>
        </div>
        <!--end::Sign up-->
    </form>
    <!--end::Form--> 
</template>