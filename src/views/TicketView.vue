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
            <a href="#" class="btn btn-sm btn-flex bg-body btn-color-gray-700 btn-active-color-primary fw-bold" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
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
                  <button type="reset" class="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>

                  <button type="submit" class="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
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

          <!--begin::Primary button-->
          <a href="#" data-bs-toggle="modal" data-bs-target="#kt_modal_new_ticket" class="btn btn-primary fw-bold fs-8 fs-lg-base">Create Ticket</a>
          <!--end::Primary button-->
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

        <div class="card">
          <!--begin::Card body-->
          <div class="card-body">
            <!--begin::Layout-->
            <div class="d-flex flex-column flex-xl-row p-7">
              <!--begin::Content-->
              <div class="flex-lg-row-fluid me-xl-15 mb-20 mb-xl-0">



                <!--begin::Ticket view-->
                <div class="mb-0">
                  <!--begin::Heading-->
                  <div class="d-flex align-items-center mb-12">
                    <!--begin::Icon-->
                    <i class="ki-duotone ki-file-added fs-4qx text-success ms-n2 me-3"><span class="path1"></span><span class="path2"></span></i>
                    <!--end::Icon-->

                    <!--begin::Content-->
                    <div class="d-flex flex-column">
                      <!--begin::Title-->
                      <h1 class="text-gray-800 fw-semibold">How to use Metronic with Django Framework?</h1>
                      <!--end::Title-->

                      <!--begin::Info-->
                      <div class="">
                        <!--begin::Label-->
                        <span class="fw-semibold text-muted me-6">Product: <a href="#" class="text-muted text-hover-primary">Metronic</a></span>
                        <!--end::Label-->

                        <!--begin::Label-->
                        <span class="fw-semibold text-muted me-6">By: <a href="#" class="text-muted text-hover-primary">Jerry Johns</a></span>
                        <!--end::Label-->

                        <!--begin::Label-->
                        <span class="fw-semibold text-muted">Created: <span class="fw-bold text-gray-600 me-1">3 Hours ago</span>(24.06.2020 at 5:03 PM)</span>
                        <!--end::Label-->
                      </div>
                      <!--end::Info-->
                    </div>
                    <!--end::Content-->
                  </div>
                  <!--end::Heading-->

                  <!--begin::Details-->
                  <div class="mb-15">
                    <!--begin::Description-->
                    <div class="mb-15 fs-5 fw-normal text-gray-800">
                      <!--begin::Text-->
                      <div class="mb-5 fs-5">Hello,</div>
                      <!--end::Text-->

                      <!--begin::Text-->
                      <div class="mb-10">
                        When you’re done bundling, you should decide on the order of the topics your article. In most cases,
                        you can decide to order thematically. For instance, if you want to discuss various aspects or angles
                        of the main topic of your blog post. But you can also order your text chronologically or didactically.
                      </div>
                      <!--end::Text-->

                      <!--begin::Code-->
                      <div class="mb-10">
                        <!--begin::Highlight-->
                        <div class="highlight"> <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>
                          <ul class="nav nav-pills" role="tablist">
                            <li class="nav-item" role="presentation"> <a class="nav-link active" data-bs-toggle="tab" href="#kt_highlight_64abcec476fa4" role="tab" aria-selected="true">JAVASCRIPT</a></li>
                            <li class="nav-item" role="presentation"> <a class="nav-link " data-bs-toggle="tab" href="#kt_highlight_64abcec476fa9" role="tab" aria-selected="false" tabindex="-1">HTML</a></li>
                          </ul>
                          <div class="tab-content">
                            <div class="tab-pane fade show active" id="kt_highlight_64abcec476fa4" role="tabpanel">
                              <div class="highlight-code">
                                <pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token comment">// Element to indecate</span>
<span class="token keyword">var</span> button <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_button_1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Handle button click event</span>
button<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// Activate indicator</span>
button<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">"data-kt-indicator"</span><span class="token punctuation">,</span> <span class="token string">"on"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Disable indicator after 3 seconds</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    button<span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token string">"data-kt-indicator"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>
                              </div>
                            </div>
                            <div class="tab-pane fade " id="kt_highlight_64abcec476fa9" role="tabpanel">
                              <div class="highlight-code">
                                <pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary me-10<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>kt_button_1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>indicator-label<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    Submit
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>indicator-progress<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    Please wait...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>spinner-border spinner-border-sm align-middle ms-2<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></code></pre>
                              </div>
                            </div>
                          </div>
                        </div><!--end::Highlight-->
                      </div>
                      <!--end::Code-->

                      <!--begin::Section-->
                      <div class="mb-10">
                        In the above example we’re discussing, ordering topics thematically makes the most sense.
                      </div>
                      <!--end::Section-->

                      <!--begin::Section-->
                      <div class="m-0">
                        Than you, <br>
                        Jerry
                      </div>
                      <!--end::Section-->
                    </div>
                    <!--end::Description-->

                    <!--begin::Input group-->
                    <div class="mb-0">
                      <textarea class="form-control form-control-solid placeholder-gray-600 fw-bold fs-4 ps-9 pt-7" rows="6" name="message" placeholder="Write a comment"></textarea>

                      <!--begin::Submit-->
                      <button type="submit" class="btn btn-primary mt-n20 mb-20 position-relative float-end me-7">Send</button>
                      <!--end::Submit-->
                    </div>
                    <!--end::Input group-->
                  </div>
                  <!--end::Details-->

                  <!--begin::Comments-->
                  <div class="mb-15">
                    <!--begin::Comment-->
                    <div class="mb-9">
                      <!--begin::Card-->
                      <div class="card card-bordered w-100">
                        <!--begin::Body-->
                        <div class="card-body">
                          <!--begin::Wrapper-->
                          <div class="w-100 d-flex flex-stack mb-8">
                            <!--begin::Container-->
                            <div class="d-flex align-items-center f">
                              <!--begin::Author-->
                              <div class="symbol symbol-50px me-5">
                                <div class="symbol-label fs-1 fw-bold bg-light-success text-success">
                                  S </div>
                              </div>
                              <!--end::Author-->

                              <!--begin::Info-->
                              <div class="d-flex flex-column fw-semibold fs-5 text-gray-600 text-dark">
                                <!--begin::Text-->
                                <div class="d-flex align-items-center">
                                  <!--begin::Username-->
                                  <a href="../../../pages/user-profile/overview.html" class="text-gray-800 fw-bold text-hover-primary fs-5 me-3">Sandra Piquet</a>
                                  <!--end::Username-->

                                  <span class="m-0"></span>
                                </div>
                                <!--end::Text-->

                                <!--begin::Date-->
                                <span class="text-muted fw-semibold fs-6">2 Days ago</span>
                                <!--end::Date-->
                              </div>
                              <!--end::Info-->
                            </div>
                            <!--end::Container-->

                            <!--begin::Actions-->
                            <div class="m-0">

                              <button class="btn btn-color-gray-400 btn-active-color-primary p-0 fw-bold">Reply</button>
                            </div>
                            <!--end::Actions-->
                          </div>
                          <!--end::Wrapper-->

                          <!--begin::Desc-->
                          <p class="fw-normal fs-5 text-gray-700 m-0">
                            I run a team of 20 product managers, developers, QA and UX Previously
                            we designed everything ourselves.
                          </p>
                          <!--end::Desc-->
                        </div>
                        <!--end::Body-->
                      </div>
                      <!--end::Card-->



                    </div>
                    <!--end::Comment-->

                    <!--begin::Comment-->
                    <div class="mb-9">
                      <!--begin::Card-->
                      <div class="card card-bordered w-100">
                        <!--begin::Body-->
                        <div class="card-body">
                          <!--begin::Wrapper-->
                          <div class="w-100 d-flex flex-stack mb-8">
                            <!--begin::Container-->
                            <div class="d-flex align-items-center f">
                              <!--begin::Author-->
                              <div class="symbol symbol-50px me-5">
                                <div class="symbol-label fs-1 fw-bold bg-light-info text-info">
                                  B </div>
                              </div>
                              <!--end::Author-->

                              <!--begin::Info-->
                              <div class="d-flex flex-column fw-semibold fs-5 text-gray-600 text-dark">
                                <!--begin::Text-->
                                <div class="d-flex align-items-center">
                                  <!--begin::Username-->
                                  <a href="../../../pages/user-profile/overview.html" class="text-gray-800 fw-bold text-hover-primary fs-5 me-3">Bob Clarcson</a>
                                  <!--end::Username-->

                                  <span class="badge badge-light-danger">Author</span>
                                </div>
                                <!--end::Text-->

                                <!--begin::Date-->
                                <span class="text-muted fw-semibold fs-6">4 Days ago</span>
                                <!--end::Date-->
                              </div>
                              <!--end::Info-->
                            </div>
                            <!--end::Container-->

                            <!--begin::Actions-->
                            <div class="m-0">

                              <button class="btn btn-color-gray-400 btn-active-color-primary p-0 fw-bold">Reply</button>
                            </div>
                            <!--end::Actions-->
                          </div>
                          <!--end::Wrapper-->

                          <!--begin::Desc-->
                          <p class="fw-normal fs-5 text-gray-700 m-0">
                            I run a team of 20 product managers, developers, QA and UX Previously
                            we designed everything ourselves.
                          </p>
                          <!--end::Desc-->
                        </div>
                        <!--end::Body-->
                      </div>
                      <!--end::Card-->



                    </div>
                    <!--end::Comment-->

                    <!--begin::Comment-->
                    <div class="ms-9 mb-9">
                      <!--begin::Card-->
                      <div class="card card-bordered w-100">
                        <!--begin::Body-->
                        <div class="card-body">
                          <!--begin::Wrapper-->
                          <div class="w-100 d-flex flex-stack mb-8">
                            <!--begin::Container-->
                            <div class="d-flex align-items-center f">
                              <!--begin::Author-->
                              <div class="symbol symbol-50px me-5">
                                <img src="../../../assets/media/avatars/300-1.jpg" alt="">
                              </div>
                              <!--end::Author-->

                              <!--begin::Info-->
                              <div class="d-flex flex-column fw-semibold fs-5 text-gray-600 text-dark">
                                <!--begin::Text-->
                                <div class="d-flex align-items-center">
                                  <!--begin::Username-->
                                  <a href="../../../pages/user-profile/overview.html" class="text-gray-800 fw-bold text-hover-primary fs-5 me-3">Matthew</a>
                                  <!--end::Username-->

                                  <span class="m-0"></span>
                                </div>
                                <!--end::Text-->

                                <!--begin::Date-->
                                <span class="text-muted fw-semibold fs-6">3 Days ago</span>
                                <!--end::Date-->
                              </div>
                              <!--end::Info-->
                            </div>
                            <!--end::Container-->

                            <!--begin::Actions-->
                            <div class="m-0">

                              <button class="btn btn-color-gray-400 btn-active-color-primary p-0 fw-bold">Reply</button>
                            </div>
                            <!--end::Actions-->
                          </div>
                          <!--end::Wrapper-->

                          <!--begin::Desc-->
                          <p class="fw-normal fs-5 text-gray-700 m-0">
                            I run a team of 20 product managers, developers, QA and UX Previously
                            we designed everything ourselves.
                          </p>
                          <!--end::Desc-->
                        </div>
                        <!--end::Body-->
                      </div>
                      <!--end::Card-->



                    </div>
                    <!--end::Comment-->

                    <!--begin::Comment-->
                    <div class="overflow-hidden position-relative card-rounded">
                      <!--begin::Ribbon-->
                      <div class="ribbon ribbon-triangle ribbon-top-start border-success">
                        <!--begin::Ribbon icon-->
                        <div class="ribbon-icon mt-n5 ms-n6">
                          <i class="ki-duotone ki-check fs-1 text-white mt-n1"></i>
                        </div>
                        <!--end::Ribbon icon-->
                      </div>
                      <!--end::Ribbon-->

                      <!--begin::Card-->
                      <div class="card card-bordered w-100">
                        <!--begin::Body-->
                        <div class="card-body">
                          <!--begin::Wrapper-->
                          <div class="w-100 d-flex flex-stack mb-8">
                            <!--begin::Container-->
                            <div class="d-flex align-items-center f">
                              <!--begin::Author-->
                              <div class="symbol symbol-50px me-5">
                                <div class="symbol-label fs-1 fw-bold bg-light-primary text-primary">
                                  B </div>
                              </div>
                              <!--end::Author-->

                              <!--begin::Info-->
                              <div class="d-flex flex-column fw-semibold fs-5 text-gray-600 text-dark">
                                <!--begin::Text-->
                                <div class="d-flex align-items-center">
                                  <!--begin::Username-->
                                  <a href="../../../pages/user-profile/overview.html" class="text-gray-800 fw-bold text-hover-primary fs-5 me-3">Boris</a>
                                  <!--end::Username-->

                                  <span class="m-0"></span>
                                </div>
                                <!--end::Text-->

                                <!--begin::Date-->
                                <span class="text-muted fw-semibold fs-6">6 Days ago</span>
                                <!--end::Date-->
                              </div>
                              <!--end::Info-->
                            </div>
                            <!--end::Container-->

                            <!--begin::Actions-->
                            <div class="m-0">
                              <!--begin::Menu-->
                              <button type="button" class="btn btn-sm btn-icon btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-overflow="true" data-kt-menu-placement="top-end">
                                <i class="ki-duotone ki-dots-square fs-1"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></i> </button>

                              <!--begin::Menu 2-->
                              <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                                <!--begin::Menu item-->
                                <div class="menu-item px-3">
                                  <div class="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                </div>
                                <!--end::Menu item-->

                                <!--begin::Menu separator-->
                                <div class="separator mb-3 opacity-75"></div>
                                <!--end::Menu separator-->

                                <!--begin::Menu item-->
                                <div class="menu-item px-3">
                                  <a href="#" class="menu-link px-3">
                                    New Ticket
                                  </a>
                                </div>
                                <!--end::Menu item-->

                                <!--begin::Menu item-->
                                <div class="menu-item px-3">
                                  <a href="#" class="menu-link px-3">
                                    New Customer
                                  </a>
                                </div>
                                <!--end::Menu item-->

                                <!--begin::Menu item-->
                                <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                  <!--begin::Menu item-->
                                  <a href="#" class="menu-link px-3">
                                    <span class="menu-title">New Group</span>
                                    <span class="menu-arrow"></span>
                                  </a>
                                  <!--end::Menu item-->

                                  <!--begin::Menu sub-->
                                  <div class="menu-sub menu-sub-dropdown w-175px py-4">
                                    <!--begin::Menu item-->
                                    <div class="menu-item px-3">
                                      <a href="#" class="menu-link px-3">
                                        Admin Group
                                      </a>
                                    </div>
                                    <!--end::Menu item-->

                                    <!--begin::Menu item-->
                                    <div class="menu-item px-3">
                                      <a href="#" class="menu-link px-3">
                                        Staff Group
                                      </a>
                                    </div>
                                    <!--end::Menu item-->

                                    <!--begin::Menu item-->
                                    <div class="menu-item px-3">
                                      <a href="#" class="menu-link px-3">
                                        Member Group
                                      </a>
                                    </div>
                                    <!--end::Menu item-->
                                  </div>
                                  <!--end::Menu sub-->
                                </div>
                                <!--end::Menu item-->

                                <!--begin::Menu item-->
                                <div class="menu-item px-3">
                                  <a href="#" class="menu-link px-3">
                                    New Contact
                                  </a>
                                </div>
                                <!--end::Menu item-->

                                <!--begin::Menu separator-->
                                <div class="separator mt-3 opacity-75"></div>
                                <!--end::Menu separator-->

                                <!--begin::Menu item-->
                                <div class="menu-item px-3">
                                  <div class="menu-content px-3 py-3">
                                    <a class="btn btn-primary  btn-sm px-4" href="#">
                                      Generate Reports
                                    </a>
                                  </div>
                                </div>
                                <!--end::Menu item-->
                              </div>
                              <!--end::Menu 2-->
                              <!--end::Menu-->
                            </div>
                            <!--end::Actions-->
                          </div>
                          <!--end::Wrapper-->

                          <!--begin::Desc-->
                          <p class="fw-normal fs-5 text-gray-700 m-0">
                            I run a team of 20 product managers, developers, QA and UX Previously
                            we designed everything ourselves.
                          </p>
                          <!--end::Desc-->
                        </div>
                        <!--end::Body-->
                      </div>
                      <!--end::Card-->



                    </div>
                    <!--end::Comment-->
                  </div>
                  <!--end::Comments-->

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
                <!--end::Ticket view-->

              </div>
              <!--end::Content-->

              <!--begin::Sidebar-->
              <div class="flex-column flex-lg-row-auto w-100 mw-lg-300px mw-xxl-350px">
                <div class="card w-100 border-0 rounded-0" id="kt_drawer_chat_messenger">
                  <!--begin::Card header-->
                  <div class="card-header" id="kt_drawer_chat_messenger_header">
                    <!--begin::Title-->
                    <div class="card-title">
                      <!--begin::User-->
                      <div class="d-flex justify-content-center flex-column me-3">
                        <a href="#" class="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1">Brian Cox</a>

                        <!--begin::Info-->
                        <div class="mb-0 lh-1">
                          <span class="badge badge-success badge-circle w-10px h-10px me-1"></span>
                          <span class="fs-7 fw-semibold text-muted">Active</span>
                        </div>
                        <!--end::Info-->
                      </div>
                      <!--end::User-->
                    </div>
                    <!--end::Title-->

                    <!--begin::Card toolbar-->
                    <div class="card-toolbar">
                      <!--begin::Menu-->
                      <div class="me-0">
                        <button class="btn btn-sm btn-icon btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                          <i class="ki-duotone ki-dots-square fs-2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></i> </button>

                        <!--begin::Menu 3-->
                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                          <!--begin::Heading-->
                          <div class="menu-item px-3">
                            <div class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                              Contacts
                            </div>
                          </div>
                          <!--end::Heading-->

                          <!--begin::Menu item-->
                          <div class="menu-item px-3">
                            <a href="#" class="menu-link px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_users_search">
                              Add Contact
                            </a>
                          </div>
                          <!--end::Menu item-->

                          <!--begin::Menu item-->
                          <div class="menu-item px-3">
                            <a href="#" class="menu-link flex-stack px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">
                              Invite Contacts

                              <span class="ms-2" data-bs-toggle="tooltip" aria-label="Specify a contact email to send an invitation" data-bs-original-title="Specify a contact email to send an invitation" data-kt-initialized="1">
                                <i class="ki-duotone ki-information fs-7"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i> </span>
                            </a>
                          </div>
                          <!--end::Menu item-->

                          <!--begin::Menu item-->
                          <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                            <a href="#" class="menu-link px-3">
                              <span class="menu-title">Groups</span>
                              <span class="menu-arrow"></span>
                            </a>

                            <!--begin::Menu sub-->
                            <div class="menu-sub menu-sub-dropdown w-175px py-4">
                              <!--begin::Menu item-->
                              <div class="menu-item px-3">
                                <a href="#" class="menu-link px-3" data-bs-toggle="tooltip" data-bs-original-title="Coming soon" data-kt-initialized="1">
                                  Create Group
                                </a>
                              </div>
                              <!--end::Menu item-->

                              <!--begin::Menu item-->
                              <div class="menu-item px-3">
                                <a href="#" class="menu-link px-3" data-bs-toggle="tooltip" data-bs-original-title="Coming soon" data-kt-initialized="1">
                                  Invite Members
                                </a>
                              </div>
                              <!--end::Menu item-->

                              <!--begin::Menu item-->
                              <div class="menu-item px-3">
                                <a href="#" class="menu-link px-3" data-bs-toggle="tooltip" data-bs-original-title="Coming soon" data-kt-initialized="1">
                                  Settings
                                </a>
                              </div>
                              <!--end::Menu item-->
                            </div>
                            <!--end::Menu sub-->
                          </div>
                          <!--end::Menu item-->

                          <!--begin::Menu item-->
                          <div class="menu-item px-3 my-1">
                            <a href="#" class="menu-link px-3" data-bs-toggle="tooltip" data-bs-original-title="Coming soon" data-kt-initialized="1">
                              Settings
                            </a>
                          </div>
                          <!--end::Menu item-->
                        </div>
                        <!--end::Menu 3-->
                      </div>
                      <!--end::Menu-->

                      <!--begin::Close-->
                      <div class="btn btn-sm btn-icon btn-active-color-primary" id="kt_drawer_chat_close">
                        <i class="ki-duotone ki-cross-square fs-2"><span class="path1"></span><span class="path2"></span></i>
                      </div>
                      <!--end::Close-->
                    </div>
                    <!--end::Card toolbar-->
                  </div>
                  <!--end::Card header-->

                  <!--begin::Card body-->
                  <div class="card-body" id="kt_drawer_chat_messenger_body">
                    <!--begin::Messages-->
                    <div class="scroll-y me-n5 pe-5" data-kt-element="messages" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer" data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body" data-kt-scroll-offset="0px" style="height: 731px;">



                      <!--begin::Message(in)-->
                      <div class="d-flex justify-content-start mb-10 ">
                        <!--begin::Wrapper-->
                        <div class="d-flex flex-column align-items-start">
                          <!--begin::User-->
                          <div class="d-flex align-items-center mb-2">
                            <!--begin::Avatar-->
                            <div class="symbol  symbol-35px symbol-circle "><img alt="Pic" src="../assets/media/avatars/300-25.jpg"></div><!--end::Avatar-->
                            <!--begin::Details-->
                            <div class="ms-3">
                              <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                              <span class="text-muted fs-7 mb-1">2 mins</span>
                            </div>
                            <!--end::Details-->

                          </div>
                          <!--end::User-->

                          <!--begin::Text-->
                          <div class="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">
                            How likely are you to recommend our company to your friends and family ? </div>
                          <!--end::Text-->
                        </div>
                        <!--end::Wrapper-->
                      </div>
                      <!--end::Message(in)-->

                      <!--begin::Message(out)-->
                      <div class="d-flex justify-content-end mb-10 ">
                        <!--begin::Wrapper-->
                        <div class="d-flex flex-column align-items-end">
                          <!--begin::User-->
                          <div class="d-flex align-items-center mb-2">
                            <!--begin::Details-->
                            <div class="me-3">
                              <span class="text-muted fs-7 mb-1">5 mins</span>
                              <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
                            </div>
                            <!--end::Details-->

                            <!--begin::Avatar-->
                            <div class="symbol  symbol-35px symbol-circle "><img alt="Pic" src="../assets/media/avatars/300-1.jpg"></div><!--end::Avatar-->
                          </div>
                          <!--end::User-->

                          <!--begin::Text-->
                          <div class="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">
                            Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub. </div>
                          <!--end::Text-->
                        </div>
                        <!--end::Wrapper-->
                      </div>
                      <!--end::Message(out)-->

                      <!--begin::Message(in)-->
                      <div class="d-flex justify-content-start mb-10 ">
                        <!--begin::Wrapper-->
                        <div class="d-flex flex-column align-items-start">
                          <!--begin::User-->
                          <div class="d-flex align-items-center mb-2">
                            <!--begin::Avatar-->
                            <div class="symbol  symbol-35px symbol-circle "><img alt="Pic" src="../assets/media/avatars/300-25.jpg"></div><!--end::Avatar-->
                            <!--begin::Details-->
                            <div class="ms-3">
                              <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                              <span class="text-muted fs-7 mb-1">1 Hour</span>
                            </div>
                            <!--end::Details-->

                          </div>
                          <!--end::User-->

                          <!--begin::Text-->
                          <div class="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">
                            Ok, Understood! </div>
                          <!--end::Text-->
                        </div>
                        <!--end::Wrapper-->
                      </div>
                      <!--end::Message(in)-->

                      <!--begin::Message(out)-->
                      <div class="d-flex justify-content-end mb-10 ">
                        <!--begin::Wrapper-->
                        <div class="d-flex flex-column align-items-end">
                          <!--begin::User-->
                          <div class="d-flex align-items-center mb-2">
                            <!--begin::Details-->
                            <div class="me-3">
                              <span class="text-muted fs-7 mb-1">2 Hours</span>
                              <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
                            </div>
                            <!--end::Details-->

                            <!--begin::Avatar-->
                            <div class="symbol  symbol-35px symbol-circle "><img alt="Pic" src="../assets/media/avatars/300-1.jpg"></div><!--end::Avatar-->
                          </div>
                          <!--end::User-->

                          <!--begin::Text-->
                          <div class="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">
                            You’ll receive notifications for all issues, pull requests! </div>
                          <!--end::Text-->
                        </div>
                        <!--end::Wrapper-->
                      </div>
                      <!--end::Message(out)-->

                      <!--begin::Message(in)-->
                      <div class="d-flex justify-content-start mb-10 ">
                        <!--begin::Wrapper-->
                        <div class="d-flex flex-column align-items-start">
                          <!--begin::User-->
                          <div class="d-flex align-items-center mb-2">
                            <!--begin::Avatar-->
                            <div class="symbol  symbol-35px symbol-circle "><img alt="Pic" src="../assets/media/avatars/300-25.jpg"></div><!--end::Avatar-->
                            <!--begin::Details-->
                            <div class="ms-3">
                              <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                              <span class="text-muted fs-7 mb-1">3 Hours</span>
                            </div>
                            <!--end::Details-->

                          </div>
                          <!--end::User-->

                          <!--begin::Text-->
                          <div class="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">
                            You can unwatch this repository immediately by clicking here: <a href="https://keenthemes.com/">Keenthemes.com</a> </div>
                          <!--end::Text-->
                        </div>
                        <!--end::Wrapper-->
                      </div>
                      <!--end::Message(in)-->

                      <!--begin::Message(out)-->
                      <div class="d-flex justify-content-end mb-10 ">
                        <!--begin::Wrapper-->
                        <div class="d-flex flex-column align-items-end">
                          <!--begin::User-->
                          <div class="d-flex align-items-center mb-2">
                            <!--begin::Details-->
                            <div class="me-3">
                              <span class="text-muted fs-7 mb-1">4 Hours</span>
                              <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
                            </div>
                            <!--end::Details-->

                            <!--begin::Avatar-->
                            <div class="symbol  symbol-35px symbol-circle "><img alt="Pic" src="../assets/media/avatars/300-1.jpg"></div><!--end::Avatar-->
                          </div>
                          <!--end::User-->

                          <!--begin::Text-->
                          <div class="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">
                            Most purchased Business courses during this sale! </div>
                          <!--end::Text-->
                        </div>
                        <!--end::Wrapper-->
                      </div>
                      <!--end::Message(out)-->

                      <!--begin::Message(in)-->
                      <div class="d-flex justify-content-start mb-10 ">
                        <!--begin::Wrapper-->
                        <div class="d-flex flex-column align-items-start">
                          <!--begin::User-->
                          <div class="d-flex align-items-center mb-2">
                            <!--begin::Avatar-->
                            <div class="symbol  symbol-35px symbol-circle "><img alt="Pic" src="../assets/media/avatars/300-25.jpg"></div><!--end::Avatar-->
                            <!--begin::Details-->
                            <div class="ms-3">
                              <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                              <span class="text-muted fs-7 mb-1">5 Hours</span>
                            </div>
                            <!--end::Details-->

                          </div>
                          <!--end::User-->

                          <!--begin::Text-->
                          <div class="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">
                            Company BBQ to celebrate the last quater achievements and goals. Food and drinks provided </div>
                          <!--end::Text-->
                        </div>
                        <!--end::Wrapper-->
                      </div>
                      <!--end::Message(in)-->

                      <!--begin::Message(template for out)-->
                      <div class="d-flex justify-content-end mb-10 d-none" data-kt-element="template-out">
                        <!--begin::Wrapper-->
                        <div class="d-flex flex-column align-items-end">
                          <!--begin::User-->
                          <div class="d-flex align-items-center mb-2">
                            <!--begin::Details-->
                            <div class="me-3">
                              <span class="text-muted fs-7 mb-1">Just now</span>
                              <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
                            </div>
                            <!--end::Details-->

                            <!--begin::Avatar-->
                            <div class="symbol  symbol-35px symbol-circle "><img alt="Pic" src="../assets/media/avatars/300-1.jpg"></div><!--end::Avatar-->
                          </div>
                          <!--end::User-->

                          <!--begin::Text-->
                          <div class="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">
                          </div>
                          <!--end::Text-->
                        </div>
                        <!--end::Wrapper-->
                      </div>
                      <!--end::Message(template for out)-->

                      <!--begin::Message(template for in)-->
                      <div class="d-flex justify-content-start mb-10 d-none" data-kt-element="template-in">
                        <!--begin::Wrapper-->
                        <div class="d-flex flex-column align-items-start">
                          <!--begin::User-->
                          <div class="d-flex align-items-center mb-2">
                            <!--begin::Avatar-->
                            <div class="symbol  symbol-35px symbol-circle "><img alt="Pic" src="../assets/media/avatars/300-25.jpg"></div><!--end::Avatar-->
                            <!--begin::Details-->
                            <div class="ms-3">
                              <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                              <span class="text-muted fs-7 mb-1">Just now</span>
                            </div>
                            <!--end::Details-->

                          </div>
                          <!--end::User-->

                          <!--begin::Text-->
                          <div class="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">
                            Right before vacation season we have the next Big Deal for you. </div>
                          <!--end::Text-->
                        </div>
                        <!--end::Wrapper-->
                      </div>
                      <!--end::Message(template for in)-->
                    </div>
                    <!--end::Messages-->
                  </div>
                  <!--end::Card body-->

                  <!--begin::Card footer-->
                  <div class="card-footer pt-4" id="kt_drawer_chat_messenger_footer">
                    <!--begin::Input-->
                    <textarea class="form-control form-control-flush mb-3" rows="1" data-kt-element="input" placeholder="Type a message"></textarea>
                    <!--end::Input-->

                    <!--begin:Toolbar-->
                    <div class="d-flex flex-stack">
                      <!--begin::Actions-->
                      <div class="d-flex align-items-center me-2">
                        <button class="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" aria-label="Coming soon" data-bs-original-title="Coming soon" data-kt-initialized="1">
                          <i class="ki-duotone ki-paper-clip fs-3"></i> </button>
                        <button class="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" aria-label="Coming soon" data-bs-original-title="Coming soon" data-kt-initialized="1">
                          <i class="ki-duotone ki-cloud-add fs-3"><span class="path1"></span><span class="path2"></span></i> </button>
                      </div>
                      <!--end::Actions-->

                      <!--begin::Send-->
                      <button class="btn btn-primary" type="button" data-kt-element="send">Send</button>
                      <!--end::Send-->
                    </div>
                    <!--end::Toolbar-->
                  </div>
                  <!--end::Card footer-->
                </div>
              </div>
              <!--end::Sidebar-->
            </div>
            <!--end::Layout-->
          </div>
          <!--end::Card body-->
        </div>


        <!--begin::Modal - Support Center - Create Ticket-->
        <div class="modal fade" id="kt_modal_new_ticket" tabindex="-1" aria-hidden="true">
          <!--begin::Modal dialog-->
          <div class="modal-dialog modal-dialog-centered mw-750px">
            <!--begin::Modal content-->
            <div class="modal-content rounded">
              <!--begin::Modal header-->
              <div class="modal-header pb-0 border-0 justify-content-end">
                <!--begin::Close-->
                <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                  <i class="ki-duotone ki-cross fs-1"><span class="path1"></span><span class="path2"></span></i>
                </div>
                <!--end::Close-->
              </div>
              <!--begin::Modal header-->

              <!--begin::Modal body-->
              <div class="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
                <!--begin:Form-->
                <form id="kt_modal_new_ticket_form" class="form fv-plugins-bootstrap5 fv-plugins-framework" action="#">
                  <!--begin::Heading-->
                  <div class="mb-13 text-center">
                    <!--begin::Title-->
                    <h1 class="mb-3">Create Ticket</h1>
                    <!--end::Title-->

                    <!--begin::Description-->
                    <div class="text-gray-400 fw-semibold fs-5">
                      If you need more info, please check <a href="#" class="fw-bold link-primary">Support Guidelines</a>.
                    </div>
                    <!--end::Description-->
                  </div>
                  <!--end::Heading-->

                  <!--begin::Input group-->
                  <div class="d-flex flex-column mb-8 fv-row fv-plugins-icon-container">
                    <!--begin::Label-->
                    <label class="d-flex align-items-center fs-6 fw-semibold mb-2">
                      <span class="required">Subject</span>

                      <span class="ms-2" data-bs-toggle="tooltip" aria-label="Specify a subject for your issue" data-bs-original-title="Specify a subject for your issue" data-kt-initialized="1">
                        <i class="ki-duotone ki-information fs-7"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i> </span>
                    </label>
                    <!--end::Label-->

                    <input type="text" class="form-control form-control-solid" placeholder="Enter your ticket subject" name="subject">
                    <div class="fv-plugins-message-container invalid-feedback"></div>
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="row g-9 mb-8">
                    <!--begin::Col-->
                    <div class="col-md-6 fv-row">
                      <label class="required fs-6 fw-semibold mb-2">Product</label>

                      <select class="form-select form-select-solid select2-hidden-accessible" data-control="select2" data-hide-search="true" data-placeholder="Select a product" name="product" data-select2-id="select2-data-10-qm0r" tabindex="-1" aria-hidden="true" data-kt-initialized="1">
                        <option value="" data-select2-id="select2-data-12-6tf0">Select a product...</option>
                        <option value="1">HTML Theme</option>
                        <option value="1">Angular App</option>
                        <option value="1">Vue App</option>
                        <option value="1">React Theme</option>
                        <option value="1">Figma UI Kit</option>
                        <option value="3">Laravel App</option>
                        <option value="4">Blazor App</option>
                        <option value="5">Django App</option>
                      </select><span class="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-11-jjxs" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-product-iu-container" aria-controls="select2-product-iu-container"><span class="select2-selection__rendered" id="select2-product-iu-container" role="textbox" aria-readonly="true" title="Select a product"><span class="select2-selection__placeholder">Select a product</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                    </div>
                    <!--end::Col-->

                    <!--begin::Col-->
                    <div class="col-md-6 fv-row fv-plugins-icon-container">
                      <label class="required fs-6 fw-semibold mb-2">Assign</label>

                      <select class="form-select form-select-solid select2-hidden-accessible" data-control="select2" data-hide-search="true" data-placeholder="Select a Team Member" name="user" data-select2-id="select2-data-13-d3yp" tabindex="-1" aria-hidden="true" data-kt-initialized="1">
                        <option value="" data-select2-id="select2-data-15-rwvb">Select a user...</option>
                        <option value="1">Karina Clark</option>
                        <option value="2">Robert Doe</option>
                        <option value="3">Niel Owen</option>
                        <option value="4">Olivia Wild</option>
                        <option value="5">Sean Bean</option>
                      </select><span class="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-14-gf4h" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-user-h5-container" aria-controls="select2-user-h5-container"><span class="select2-selection__rendered" id="select2-user-h5-container" role="textbox" aria-readonly="true" title="Select a Team Member"><span class="select2-selection__placeholder">Select a Team Member</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                      <div class="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <!--end::Col-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="row g-9 mb-8">
                    <!--begin::Col-->
                    <div class="col-md-6 fv-row">
                      <label class="required fs-6 fw-semibold mb-2">Status</label>

                      <select class="form-select form-select-solid select2-hidden-accessible" data-control="select2" data-placeholder="Open" data-hide-search="true" data-select2-id="select2-data-16-ydqd" tabindex="-1" aria-hidden="true" data-kt-initialized="1">
                        <option value=""></option>
                        <option value="1" selected data-select2-id="select2-data-18-kvbl">Open</option>
                        <option value="2">Pending</option>
                        <option value="3">Resolved</option>
                        <option value="3">Closed</option>
                      </select><span class="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-17-r4te" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-9gzf-container" aria-controls="select2-9gzf-container"><span class="select2-selection__rendered" id="select2-9gzf-container" role="textbox" aria-readonly="true" title="Open">Open</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                    </div>
                    <!--end::Col-->

                    <!--begin::Col-->
                    <div class="col-md-6 fv-row fv-plugins-icon-container">
                      <label class="required fs-6 fw-semibold mb-2">Due Date</label>

                      <!--begin::Input-->
                      <div class="position-relative d-flex align-items-center">
                        <!--begin::Icon-->
                        <div class="symbol symbol-20px me-4 position-absolute ms-4">
                          <span class="symbol-label bg-secondary">
                            <i class="ki-duotone ki-element-11"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></i> </span>
                        </div>
                        <!--end::Icon-->

                        <!--begin::Datepicker-->
                        <input class="form-control form-control-solid ps-12 flatpickr-input" placeholder="Select a date" name="due_date" type="text" readonly>
                        <!--end::Datepicker-->
                      </div>
                      <!--end::Input-->
                      <div class="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <!--end::Col-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="d-flex flex-column mb-8 fv-row fv-plugins-icon-container">
                    <label class="fs-6 fw-semibold mb-2">Description</label>

                    <textarea class="form-control form-control-solid" rows="4" name="description" placeholder="Type your ticket description"></textarea>
                    <div class="fv-plugins-message-container invalid-feedback"></div>
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="fv-row mb-8">
                    <label class="fs-6 fw-semibold mb-2">Attachments</label>

                    <!--begin::Dropzone-->
                    <div class="dropzone dz-clickable" id="kt_modal_create_ticket_attachments">
                      <!--begin::Message-->
                      <div class="dz-message needsclick align-items-center">
                        <!--begin::Icon-->
                        <i class="ki-duotone ki-file-up fs-3hx text-primary"><span class="path1"></span><span class="path2"></span></i> <!--end::Icon-->

                        <!--begin::Info-->
                        <div class="ms-4">
                          <h3 class="fs-5 fw-bold text-gray-900 mb-1">Drop files here or click to upload.</h3>
                          <span class="fw-semibold fs-7 text-gray-400">Upload up to 10 files</span>
                        </div>
                        <!--end::Info-->
                      </div>
                    </div>
                    <!--end::Dropzone-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="mb-15 fv-row fv-plugins-icon-container">
                    <!--begin::Wrapper-->
                    <div class="d-flex flex-stack">
                      <!--begin::Label-->
                      <div class="fw-semibold me-5">
                        <label class="fs-6">Notifications</label>

                        <div class="fs-7 text-gray-400">Allow Notifications by Phone or Email</div>
                      </div>
                      <!--end::Label-->

                      <!--begin::Checkboxes-->
                      <div class="d-flex align-items-center">
                        <!--begin::Checkbox-->
                        <label class="form-check form-check-custom form-check-solid me-10">
                          <input class="form-check-input h-20px w-20px" type="checkbox" name="notifications[]" value="email" checked>

                          <span class="form-check-label fw-semibold">
                            Email
                          </span>
                        </label>
                        <!--end::Checkbox-->

                        <!--begin::Checkbox-->
                        <label class="form-check form-check-custom form-check-solid">
                          <input class="form-check-input h-20px w-20px" type="checkbox" name="notifications[]" value="phone">

                          <span class="form-check-label fw-semibold">
                            Phone
                          </span>
                        </label>
                        <!--end::Checkbox-->
                      </div>
                      <!--end::Checkboxes-->
                    </div>
                    <!--end::Wrapper-->
                    <div class="fv-plugins-message-container invalid-feedback"></div>
                  </div>
                  <!--end::Input group-->

                  <!--begin::Actions-->
                  <div class="text-center">
                    <button type="reset" id="kt_modal_new_ticket_cancel" class="btn btn-light me-3">
                      Cancel
                    </button>

                    <button type="submit" id="kt_modal_new_ticket_submit" class="btn btn-primary">
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