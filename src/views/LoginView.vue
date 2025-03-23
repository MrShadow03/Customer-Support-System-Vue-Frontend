<script setup>
    import { useAuthStore } from '@/stores/auth';
    import { storeToRefs } from 'pinia';
    import { reactive } from 'vue';
    import logo from '@/assets/images/logo.jpg';

    const { authenticate } = useAuthStore();
    const { errors } = storeToRefs(useAuthStore());

    const form = reactive({
        email: '',
        password: '',
    });
</script>
<template>
    <!--begin::Form-->
    <form @submit.prevent="authenticate('login', form, 'submit-button')" class="form w-100" novalidate="novalidate" id="kt_sign_in_form" action="#">
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
            <input v-model="form.email" type="text" placeholder="Email" name="email" autocomplete="off" class="form-control bg-transparent"/> 
            <!--end::Email-->

            <!--begin::Error-->
            <div v-if="errors.email" class="fv-plugins-message-container">
                <div data-field="email" data-validator="notEmpty" class="fv-help-block">{{ errors.email[0] }}</div>
            </div>
        </div>
    
        <!--end::Input group--->
        <div class="fv-row mb-8">    
            <!--begin::Password-->
            <input v-model="form.password" type="password" placeholder="Password" name="password" autocomplete="off" class="form-control bg-transparent"/>
            <!--end::Password-->

            <!--begin::Error-->
            <div v-if="errors.password" class="fv-plugins-message-container">
                <div data-field="password" data-validator="notEmpty" class="fv-help-block">{{ errors.password[0] }}</div>
            </div>
        </div>
        <!--end::Input group--->
    
        <!--begin::Submit button-->
        <div class="d-grid mb-10 mt-10">
            <button type="submit" id="submit-button" class="btn btn-primary">
                
                <!--begin::Indicator label-->
                <span class="indicator-label">
                    Login
                </span>
                <!--end::Indicator label-->
                
                <!--begin::Indicator progress-->
                <span class="indicator-progress">
                    Please wait...
                    <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
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