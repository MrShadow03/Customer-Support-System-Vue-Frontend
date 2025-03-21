<template>
    <div id="kt_app_header" class="app-header print-display-none">
        <!--begin::Header container-->
        <div class="app-container  container-fluid d-flex align-items-stretch justify-content-between " id="kt_app_header_container">

            <!--begin::Sidebar mobile toggle-->
            <div class="d-flex align-items-center d-lg-none ms-n3 me-1 me-md-2" title="Show sidebar menu">
                <div class="btn btn-icon btn-active-color-primary w-35px h-35px" id="kt_app_sidebar_mobile_toggle">
                    <i class="fa-light fa-bars fs-3"></i>
                </div>
            </div>
            <!--end::Sidebar mobile toggle-->


            <!--begin::Mobile logo-->
            <div class="d-flex align-items-center flex-lg-grow-0">
                <a href="" class="d-lg-none">
                    <img alt="Logo" src="" class="theme-light-show h-30px">
                    <img alt="Logo" src="" class="theme-dark-show h-30px">
                </a>
            </div>
            <!--end::Mobile logo-->

            <!--begin::Header wrapper-->
            <div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1" id="kt_app_header_wrapper">
                <div class="app-header-menu app-header-mobile-drawer align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="app-header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_app_header_menu_toggle" data-kt-swapper="true" data-kt-swapper-mode="{default: 'append', lg: 'prepend'}" data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}">
                <!--begin::Menu-->
                <div class="menu menu-rounded menu-column menu-lg-row my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0" id="kt_app_header_menu" data-kt-menu="true">

                </div>
            </div>
                <!--begin::Navbar-->
                <div class="app-navbar flex-shrink-0">
                    <!--begin::Theme mode-->
                    <div class="app-navbar-item ms-1 ms-md-3">

                        <!--begin::Menu toggle-->
                        <a href="#" class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px" data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                            <i class="fal fa-sun-bright theme-light-show fs-4 fs-lg-1"></i>
                            <i class="fal fa-moon theme-dark-show fs-4 fs-lg-1"></i>
                        </a>
                        <!--begin::Menu toggle-->

                        <!--begin::Menu-->
                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px" data-kt-menu="true" data-kt-element="theme-mode-menu">
                            <!--begin::Menu item-->
                            <div class="menu-item px-3 my-0">
                                <a href="#" class="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="light">
                                    <span class="menu-icon" data-kt-element="icon">
                                        <i class="fal fa-sun-bright fs-4"></i> 
                                    </span>
                                    <span class="menu-title">
                                        Light
                                    </span>
                                </a>
                            </div>
                            <!--end::Menu item-->

                            <!--begin::Menu item-->
                            <div class="menu-item px-3 my-0">
                                <a href="#" class="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="dark">
                                    <span class="menu-icon" data-kt-element="icon">
                                        <i class="fal fa-moon fs-4"></i>
                                    </span>
                                    <span class="menu-title">
                                        Dark
                                    </span>
                                </a>
                            </div>
                            <!--end::Menu item-->

                            <!--begin::Menu item-->
                            <div class="menu-item px-3 my-0">
                                <a href="#" class="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="system">
                                    <span class="menu-icon" data-kt-element="icon">
                                        <i class="fal fa-computer-speaker fs-4"></i>
                                    </span>
                                    <span class="menu-title">
                                        System
                                    </span>
                                </a>
                            </div>
                            <!--end::Menu item-->
                        </div>
                        <!--end::Menu-->

                    </div>
                    <!--end::Theme mode-->

                    <div class="app-navbar-item ms-1 ms-md-3 font-bn" id="kt_header_user_menu_toggle">

                    </div>
                </div>
                <!--end::Navbar-->
            </div>
            <!--end::Header wrapper-->
        </div>
        <!--end::Header container-->
    </div>
  </template>
  
  <style scoped>
  .navbar {
    height: 60px;
  }
  </style>
  