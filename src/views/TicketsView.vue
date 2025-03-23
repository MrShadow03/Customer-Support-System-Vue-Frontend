<template>
  <div class="d-flex flex-column flex-column-fluid">

    <!--begin::Toolbar-->
    <div id="kt_app_toolbar" class="app-toolbar  py-3 py-lg-6 ">

      <!--begin::Toolbar container-->
      <div id="kt_app_toolbar_container" class="app-container  container-xxl d-flex flex-stack ">



        <!--begin::Page title-->
        <div class="page-title d-flex flex-column justify-content-center flex-wrap me-3 ">
          <!--begin::Title-->
          <h1 class="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
            My Tickets
          </h1>
          <!--end::Title-->


          <!--begin::Breadcrumb-->
          <ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
            <!--begin::Item-->
            <li class="breadcrumb-item text-muted">
              Tickets </li>
            <!--end::Item-->

          </ul>
          <!--end::Breadcrumb-->
        </div>
        <!--end::Page title-->
        <!--begin::Actions-->
        <div class="d-flex align-items-center gap-2 gap-lg-3">
          <!--begin::Filter menu-->
          <div class="m-0">
            <!--begin::Menu toggle-->
            <a href="#" class="btn btn-sm btn-flex bg-body btn-color-gray-700 btn-active-color-warning fw-bold" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
              <i class="ki-duotone ki-filter fs-6 text-muted me-1"><span class="path1"></span><span class="path2"></span></i>
              Filter
            </a>
            <!--end::Menu toggle-->



            <!--begin::Menu 1-->
            <div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_64abcec43fb19">
              <!--begin::Header-->
              <div class="px-7 py-5">
                <div class="fs-5 text-dark fw-bold">Filter Options</div>
              </div>
              <!--end::Header-->

              <!--begin::Menu separator-->
              <div class="separator border-gray-200"></div>
              <!--end::Menu separator-->

              <!--begin::Form-->
              <div class="px-7 py-5">
                <!--begin::Input group-->
                <div class="mb-10">
                  <!--begin::Label-->
                  <label class="form-label fw-semibold">Status:</label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <div>
                    <select class="form-select form-select-solid select2-hidden-accessible" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_64abcec43fb19" data-allow-clear="true" data-select2-id="select2-data-7-yu0d" tabindex="-1" aria-hidden="true" data-kt-initialized="1">
                      <option data-select2-id="select2-data-9-b7l6"></option>
                      <option value="1">Approved</option>
                      <option value="2">Pending</option>
                      <option value="2">In Process</option>
                      <option value="2">Rejected</option>
                    </select><span class="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-8-06i1" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-oqny-container" aria-controls="select2-oqny-container"><span class="select2-selection__rendered" id="select2-oqny-container" role="textbox" aria-readonly="true" title="Select option"><span class="select2-selection__placeholder">Select option</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                  </div>
                  <!--end::Input-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="mb-10">
                  <!--begin::Label-->
                  <label class="form-label fw-semibold">Member Type:</label>
                  <!--end::Label-->

                  <!--begin::Options-->
                  <div class="d-flex">
                    <!--begin::Options-->
                    <label class="form-check form-check-sm form-check-custom form-check-solid me-5">
                      <input class="form-check-input" type="checkbox" value="1">
                      <span class="form-check-label">
                        Author
                      </span>
                    </label>
                    <!--end::Options-->

                    <!--begin::Options-->
                    <label class="form-check form-check-sm form-check-custom form-check-solid">
                      <input class="form-check-input" type="checkbox" value="2">
                      <span class="form-check-label">
                        Customer
                      </span>
                    </label>
                    <!--end::Options-->
                  </div>
                  <!--end::Options-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="mb-10">
                  <!--begin::Label-->
                  <label class="form-label fw-semibold">Notifications:</label>
                  <!--end::Label-->

                  <!--begin::Switch-->
                  <div class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                    <input class="form-check-input" type="checkbox" value="" name="notifications">
                    <label class="form-check-label">
                      Enabled
                    </label>
                  </div>
                  <!--end::Switch-->
                </div>
                <!--end::Input group-->

                <!--begin::Actions-->
                <div class="d-flex justify-content-end">
                  <button type="reset" class="btn btn-sm btn-light btn-active-light-warning me-2" data-kt-menu-dismiss="true">Reset</button>

                  <button type="submit" class="btn btn-sm btn-warning" data-kt-menu-dismiss="true">Apply</button>
                </div>
                <!--end::Actions-->
              </div>
              <!--end::Form-->
            </div>
            <!--end::Menu 1-->
          </div>
          <!--end::Filter menu-->


          <!--begin::Secondary button-->
          <!--end::Secondary button-->

          <!--begin::warning button-->
          <a href="#" data-bs-toggle="modal" data-bs-target="#kt_modal_new_ticket" class="btn btn-warning fw-bold fs-8 fs-lg-base">Create Ticket</a>
          <!--end::warning button-->
        </div>
        <!--end::Actions-->
      </div>
      <!--end::Toolbar container-->
    </div>
    <!--end::Toolbar-->

    <!--begin::Content-->
    <div id="kt_app_content" class="app-content  flex-column-fluid ">


      <!--begin::Content container-->
      <div id="kt_app_content_container" class="app-container  container-xxl ">

        <!--begin::Card-->
        <div class="card">
          <!--begin::Card body-->
          <div class="card-body">
            <!--begin::Layout-->
            <div class="d-flex flex-column flex-xl-row p-7">
              <!--begin::Content-->
              <div class="flex-lg-row-fluid me-xl-15 mb-20 mb-xl-0">



                <!--begin::Tickets-->
                <div class="mb-0">
                  <!--begin::Search form-->
                  <form method="post" action="#" class="form mb-15">
                    <!--begin::Input wrapper-->
                    <div class="position-relative">
                      <i class="ki-duotone ki-magnifier fs-1 text-warning position-absolute top-50 translate-middle ms-9"><span class="path1"></span><span class="path2"></span></i>
                      <input type="text" class="form-control form-control-lg form-control-solid ps-14" name="search" value="" placeholder="Search">
                    </div>
                    <!--end::Input wrapper-->
                  </form>
                  <!--end::Search form-->

                  <!--begin::Tickets List-->
                  <div class="mb-10">
                    <!--begin::Ticket-->
                    <div class="d-flex mb-10">
                      <!--begin::Symbol-->
                      <i class="ki-duotone ki-file-added fs-2x me-5 ms-n1 mt-2 text-success"><span class="path1"></span><span class="path2"></span></i>
                      <!--end::Symbol-->

                      <!--begin::Section-->
                      <div class="d-flex flex-column">
                        <!--begin::Content-->
                        <div class="d-flex align-items-center mb-2">
                          <!--begin::Title-->
                          <RouterLink :to="{ name: 'ticket.show', params: { id: 32 } }" class="text-dark text-hover-warning fs-4 me-3 fw-semibold">How to use Netronic with Django Framework?</RouterLink>
                          <!--end::Title-->

                          <span class="badge badge-light my-1">Finance ERP</span>
                        </div>
                        <!--end::Content-->
                        <div class="d-flex align-items-center mb-3">
                          <div class="text-muted fs-7">12 days ago</div>
                          <span class="badge badge-danger my-1 ms-5">High Priority</span>
                        </div>

                        <!--begin::Text-->
                        <span class="fs-6">By Keenthemes to save tons and more to time money projects are listed amazing <br>
                          outstanding projects are listed</span>
                        <!--end::Text-->
                      </div>
                      <!--end::Section-->
                    </div>
                    <!--end::Ticket-->

                  </div>
                  <!--end::Tickets List-->

                  <!--begin::Pagination-->
                  <ul class="pagination">
                    <li class="page-item previous disabled"><a href="#" class="page-link"><i class="previous"></i></a></li>
                    <li class="page-item "><a href="#" class="page-link">1</a></li>
                    <li class="page-item active"><a href="#" class="page-link">2</a></li>
                    <li class="page-item "><a href="#" class="page-link">3</a></li>
                    <li class="page-item "><a href="#" class="page-link">4</a></li>
                    <li class="page-item "><a href="#" class="page-link">5</a></li>
                    <li class="page-item "><a href="#" class="page-link">6</a></li>
                    <li class="page-item next"><a href="#" class="page-link"><i class="next"></i></a></li>
                  </ul>
                  <!--end::Pagination-->
                </div>
                <!--end::Tickets-->


              </div>
              <!--end::Content-->

              <!--begin::Sidebar-->
              <div class="flex-column flex-lg-row-auto w-100 mw-lg-300px mw-xxl-350px">




                <!--begin::More channels-->
                <div class="card-rounded bg-warning bg-opacity-5 p-10 mb-15">
                  <!--begin::Title-->
                  <h2 class="text-dark fw-bold mb-11">More Channels</h2>
                  <!--end::Title-->

                  <!--begin::Item-->
                  <div class="d-flex align-items-center mb-10">
                    <!--begin::Icon-->
                    <i class="ki-duotone ki-calendar fs-1 text-warning me-5"><span class="path1"></span><span class="path2"></span></i>
                    <!--end::Icon-->

                    <!--begin::Info-->
                    <div class="d-flex flex-column">
                      <h5 class="text-gray-800 fw-bold">Project Briefing</h5>

                      <!--begin::Section-->
                      <div class="fw-semibold">
                        <!--begin::Desc-->
                        <span class="text-muted">Check out our</span>
                        <!--end::Desc-->

                        <!--begin::Link-->
                        <a href="#" class="link-warning">Support Policy</a>
                        <!--end::Link-->
                      </div>
                      <!--end::Section-->
                    </div>
                    <!--end::Info-->
                  </div>
                  <!--end::Item-->
                  <!--begin::Item-->
                  <div class="d-flex align-items-center mb-10">
                    <!--begin::Icon-->
                    <i class="ki-duotone ki-notification-status fs-1 text-warning me-5"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></i>
                    <!--end::Icon-->

                    <!--begin::Info-->
                    <div class="d-flex flex-column">
                      <h5 class="text-gray-800 fw-bold">More to discuss?</h5>

                      <!--begin::Section-->
                      <div class="fw-semibold">
                        <!--begin::Desc-->
                        <span class="text-muted">Email us to</span>
                        <!--end::Desc-->

                        <!--begin::Link-->
                        <a href="#" class="link-warning">support@keenthemes.com</a>
                        <!--end::Link-->
                      </div>
                      <!--end::Section-->
                    </div>
                    <!--end::Info-->
                  </div>
                  <!--end::Item-->
                  <!--begin::Item-->
                  <div class="d-flex align-items-center mb-10">
                    <!--begin::Icon-->
                    <i class="ki-duotone ki-twitter fs-1 text-warning me-5"><span class="path1"></span><span class="path2"></span></i>
                    <!--end::Icon-->

                    <!--begin::Info-->
                    <div class="d-flex flex-column">
                      <h5 class="text-gray-800 fw-bold">Latest News</h5>

                      <!--begin::Section-->
                      <div class="fw-semibold">
                        <!--begin::Desc-->
                        <span class="text-muted">Follow us at</span>
                        <!--end::Desc-->

                        <!--begin::Link-->
                        <a href="#" class="link-warning">KeenThemes Twitter </a>
                        <!--end::Link-->
                      </div>
                      <!--end::Section-->
                    </div>
                    <!--end::Info-->
                  </div>
                  <!--end::Item-->
                  <!--begin::Item-->
                  <div class="d-flex align-items-center ">
                    <!--begin::Icon-->
                    <i class="ki-duotone ki-github fs-1 text-warning me-5"><span class="path1"></span><span class="path2"></span></i>
                    <!--end::Icon-->

                    <!--begin::Info-->
                    <div class="d-flex flex-column">
                      <h5 class="text-gray-800 fw-bold">Github Access</h5>

                      <!--begin::Section-->
                      <div class="fw-semibold">
                        <!--begin::Desc-->
                        <span class="text-muted">Our github repo</span>
                        <!--end::Desc-->

                        <!--begin::Link-->
                        <a href="#" class="link-warning">KeenThemes Github</a>
                        <!--end::Link-->
                      </div>
                      <!--end::Section-->
                    </div>
                    <!--end::Info-->
                  </div>
                  <!--end::Item-->

                </div>
                <!--end::More channels-->




                <!--begin::Documentations-->
                <div class="card-rounded bg-warning bg-opacity-5 p-10 mb-15">
                  <!--begin::Title-->
                  <h1 class="fw-bold text-dark mb-9">
                    Documentation
                  </h1>
                  <!--end::Title-->

                  <!--begin::Item-->
                  <div class="d-flex align-items-center mb-6">
                    <!--begin::Icon-->
                    <i class="ki-duotone ki-right fs-2 ms-n1 me-3"></i>
                    <!--end::Icon-->

                    <!--begin::Subtitle-->
                    <a href="#" class="fw-semibold text-gray-800 text-hover-warning fs-5 m-0">
                      Angular Admin </a>
                    <!--end::Subtitle-->
                  </div>
                  <!--end::Item-->
                  <!--begin::Item-->
                  <div class="d-flex align-items-center mb-6">
                    <!--begin::Icon-->
                    <i class="ki-duotone ki-right fs-2 ms-n1 me-3"></i>
                    <!--end::Icon-->

                    <!--begin::Subtitle-->
                    <a href="#" class="fw-semibold text-gray-800 text-hover-warning fs-5 m-0">
                      React Admin </a>
                    <!--end::Subtitle-->
                  </div>
                  <!--end::Item-->
                  <!--begin::Item-->
                  <div class="d-flex align-items-center mb-6">
                    <!--begin::Icon-->
                    <i class="ki-duotone ki-right fs-2 ms-n1 me-3"></i>
                    <!--end::Icon-->

                    <!--begin::Subtitle-->
                    <a href="#" class="fw-semibold text-gray-800 text-hover-warning fs-5 m-0">
                      Vue Dashboard </a>
                    <!--end::Subtitle-->
                  </div>
                  <!--end::Item-->
                  <!--begin::Item-->
                  <div class="d-flex align-items-center mb-6">
                    <!--begin::Icon-->
                    <i class="ki-duotone ki-right fs-2 ms-n1 me-3"></i>
                    <!--end::Icon-->

                    <!--begin::Subtitle-->
                    <a href="#" class="fw-semibold text-gray-800 text-hover-warning fs-5 m-0">
                      Niche Theme </a>
                    <!--end::Subtitle-->
                  </div>
                  <!--end::Item-->
                  <!--begin::Item-->
                  <div class="d-flex align-items-center mb-6">
                    <!--begin::Icon-->
                    <i class="ki-duotone ki-right fs-2 ms-n1 me-3"></i>
                    <!--end::Icon-->

                    <!--begin::Subtitle-->
                    <a href="#" class="fw-semibold text-gray-800 text-hover-warning fs-5 m-0">
                      Dashboard Admin </a>
                    <!--end::Subtitle-->
                  </div>
                  <!--end::Item-->
                  <!--begin::Item-->
                  <div class="d-flex align-items-center mb-6">
                    <!--begin::Icon-->
                    <i class="ki-duotone ki-right fs-2 ms-n1 me-3"></i>
                    <!--end::Icon-->

                    <!--begin::Subtitle-->
                    <a href="#" class="fw-semibold text-gray-800 text-hover-warning fs-5 m-0">
                      Dorsey Front-end </a>
                    <!--end::Subtitle-->
                  </div>
                  <!--end::Item-->
                  <!--begin::Item-->
                  <div class="d-flex align-items-center mb-6">
                    <!--begin::Icon-->
                    <i class="ki-duotone ki-right fs-2 ms-n1 me-3"></i>
                    <!--end::Icon-->

                    <!--begin::Subtitle-->
                    <a href="#" class="fw-semibold text-gray-800 text-hover-warning fs-5 m-0">
                      CRM Admin </a>
                    <!--end::Subtitle-->
                  </div>
                  <!--end::Item-->
                  <!--begin::Item-->
                  <div class="d-flex align-items-center mb-6">
                    <!--begin::Icon-->
                    <i class="ki-duotone ki-right fs-2 ms-n1 me-3"></i>
                    <!--end::Icon-->

                    <!--begin::Subtitle-->
                    <a href="#" class="fw-semibold text-gray-800 text-hover-warning fs-5 m-0">
                      Admin Dashbaord </a>
                    <!--end::Subtitle-->
                  </div>
                  <!--end::Item-->
                  <!--begin::Item-->
                  <div class="d-flex align-items-center ">
                    <!--begin::Icon-->
                    <i class="ki-duotone ki-right fs-2 ms-n1 me-3"></i>
                    <!--end::Icon-->

                    <!--begin::Subtitle-->
                    <a href="#" class="fw-semibold text-gray-800 text-hover-warning fs-5 m-0">
                      Intranet Admin </a>
                    <!--end::Subtitle-->
                  </div>
                  <!--end::Item-->

                </div>
                <!--end::Documentations-->












              </div>
              <!--end::Sidebar-->
            </div>
            <!--end::Layout-->
          </div>
          <!--end::Card body-->
        </div>
        <!--end::Card-->


        <!--begin::Modal - Support Center - Create Ticket-->
        <div class="modal fade" id="kt_modal_new_ticket" tabindex="-1" aria-hidden="true">
          <!--begin::Modal dialog-->
          <div class="modal-dialog modal-dialog-centered mw-750px">
            <!--begin::Modal content-->
            <div class="modal-content rounded">
              <!--begin::Modal header-->
              <div class="modal-header pb-0 border-0 justify-content-end">
                <!--begin::Close-->
                <div class="btn btn-sm btn-icon btn-active-color-warning" data-bs-dismiss="modal">
                  <i class="ki-duotone ki-cross fs-1"><span class="path1"></span><span class="path2"></span></i>
                </div>
                <!--end::Close-->
              </div>
              <!--begin::Modal header-->

              <!--begin::Modal body-->
              <div class="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
                <!--begin:Form-->
                <form id="kt_modal_new_ticket_form" class="form" action="#">
                  <!--begin::Heading-->
                  <div class="mb-13 text-center">
                    <!--begin::Title-->
                    <h1 class="mb-3">Create Ticket</h1>
                    <!--end::Title-->

                    <!--begin::Description-->
                    <div class="text-gray-400 fw-semibold fs-5">
                      If you need more info, please check <a href="#" class="fw-bold link-warning">Support Guidelines</a>.
                    </div>
                    <!--end::Description-->
                  </div>
                  <!--end::Heading-->

                  <!--begin::Input group-->
                  <div class="d-flex flex-column mb-8 fv-row">
                    <!--begin::Label-->
                    <label class="d-flex align-items-center fs-6 fw-semibold mb-2">
                      <span class="required">Subject</span>

                      <span class="ms-2" data-bs-toggle="tooltip" title="Specify a subject for your issue">
                        <i class="ki-duotone ki-information fs-7"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i> </span>
                    </label>
                    <!--end::Label-->

                    <input type="text" class="form-control form-control-solid" placeholder="Enter your ticket subject" name="subject" />
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="row g-9 mb-8">
                    <!--begin::Col-->
                    <div class="col-md-6 fv-row">
                      <label class="required fs-6 fw-semibold mb-2">Category</label>

                      <select class="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Select a category" name="category">
                        <option value="">Select a category...</option>
                        <option value="Technical">Technical</option>
                        <option value="Billing">Billing</option>
                        <option value="General">General</option>
                      </select>
                    </div>
                    <!--end::Col-->

                    <!--begin::Col-->
                    <div class="col-md-6 fv-row">
                      <label class="required fs-6 fw-semibold mb-2">Priority</label>

                      <select class="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Is it urgent?" name="priority">
                        <option value="">Select priority...</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                      </select>
                    </div>
                    <!--end::Col-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="d-flex flex-column mb-8 fv-row">
                    <label class="fs-6 fw-semibold mb-2">Description</label>

                    <textarea class="form-control form-control-solid" rows="4" name="description" placeholder="Please tell us about your issue"></textarea>
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="d-flex flex-column mb-8 fv-row">
                    <!--begin::Label-->
                    <label class="d-flex align-items-center fs-6 fw-semibold mb-2">
                      <span>Attachment</span>

                      <span class="ms-2" data-bs-toggle="tooltip" title="Specify a subject for your issue"></span>
                    </label>
                    <!--end::Label-->

                    <input type="file" class="form-control form-control-solid" placeholder="Enter your ticket subject" name="attachment" />
                  </div>
                  <!--end::Input group-->

                  <!--begin::Actions-->
                  <div class="text-center">
                    <button type="reset" id="kt_modal_new_ticket_cancel" class="btn btn-light me-3">
                      Cancel
                    </button>

                    <button type="submit" id="kt_modal_new_ticket_submit" class="btn btn-warning">
                      <span class="indicator-label">
                        Submit
                      </span>
                      <span class="indicator-progress">
                        Please wait... <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    </button>
                  </div>
                  <!--end::Actions-->
                </form>
                <!--end:Form-->
              </div>
              <!--end::Modal body-->
            </div>
            <!--end::Modal content-->
          </div>
          <!--end::Modal dialog-->
        </div>
        <!--end::Modal - Support Center - Create Ticket-->
      </div>
      <!--end::Content container-->
    </div>
    <!--end::Content-->
  </div>
</template>