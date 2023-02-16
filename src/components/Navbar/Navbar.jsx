import { Link } from "react-router-dom";
import "./assets/css/navbar.css";
import logo from "./assets/images/logo-danger.png";
import imgProfile from "./assets/images/user-03.jpg";

const Navbar = () => {
  return (
    <>
      {/* brand */}
      <div className="col-xl-2 col-lg-4 col-md-6 col-sm-12  navbar-brand d-flex wrap-brand fixed-top shadow">
        <a href="#">
          <img src={logo} width="50px" className="logo" alt="لوگو" />
        </a>
        <span className="form-switch ms-2">
          <input
            className=" input-switch"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </span>
      </div>

      {/* end brand */}

      <div className="col-xl-2 col-lg-4 col-md-6 col-sm-12 sidebar-nav fixed-top shadow">
        <div className="border-horizontal"></div>
        <a href="#" className="d-flex flex-column align-items-center my-2 ">
          <img
            src={imgProfile}
            alt="پروفایل"
            width="70px"
            className="rounded-circle img-thumbnail img-profile"
          />
          <h6 className="mt-2 text-shadow">محمد نیک عیش</h6>
        </a>
        <ul className="navbar-nav list-unstyled d-flex flex-column wrap-ul-sidebar">
          <li className="nav-item mb-3">
            <Link
              to="/"
              className="nav-link text-muted link-sidebar d-block box-shadow1"
            >
              <i className="fas fa-home"></i>
              <span className="ms-1">داشبورد</span>
            </Link>
          </li>
          {/* store heading */}
          <ul className="navbar-nav list-unstyled d-flex flex-column">
            <h6 className="mx-3 text-muted  d-block box-shadow-inset p-2 rounded-2 text-center ">
              فروشگاه
            </h6>
            <div className="p-3">
              <li className="nav-item mb-3">
                <Link
                  to="/category"
                  className="nav-link text-muted link-sidebar d-block box-shadow1"
                >
                  <i className="fas fa-home"></i>
                  <span className="ms-1">دسته بندی محصول</span>
                </Link>
              </li>
              <li className="nav-item mb-3">
                <Link
                  to="/products"
                  className="nav-link text-muted link-sidebar d-block box-shadow1"
                >
                  <i className="fas fa-home"></i>
                  <span className="ms-1">مدیریت محصول</span>
                </Link>
              </li>
              <li className="nav-item mb-3">
                <Link
                  to="/brands"
                  className="nav-link text-muted link-sidebar d-block box-shadow1"
                >
                  <i className="fas fa-home"></i>
                  <span className="ms-1">مدیریت برندها</span>
                </Link>
              </li>
              <li className="nav-item mb-3">
                <Link
                  to="/garanty"
                  className="nav-link text-muted link-sidebar d-block box-shadow1"
                >
                  <i className="fas fa-home"></i>
                  <span className="ms-1">مدیریت گارانتی ها</span>
                </Link>
              </li>
              <li className="nav-item mb-3">
                <Link
                  to="/colors"
                  className="nav-link text-muted link-sidebar d-block box-shadow1"
                >
                  <i className="fas fa-home"></i>
                  <span className="ms-1">مدیریت رنگ ها</span>
                </Link>
              </li>
              <li className="nav-item mb-3">
                <Link
                  to="/discounts"
                  className="nav-link text-muted link-sidebar d-block box-shadow1"
                >
                  <i className="fas fa-home"></i>
                  <span className="ms-1">مدیریت تخفیف ها</span>
                </Link>
              </li>
            </div>
          </ul>
          {/* end store heading */}
          {/* orders & card heading */}
          <ul className="navbar-nav list-unstyled d-flex flex-column">
            <h6 className="mx-3 text-muted  d-block box-shadow-inset rounded-3 text-center p-2">
              سفارشات و سبد
            </h6>
            <div className="p-3">
              <li className="nav-item mb-3">
                <Link
                  to="#"
                  className="nav-link text-muted link-sidebar d-block box-shadow1"
                >
                  <i className="fas fa-home"></i>
                  <span className="ms-1">مدیریت سبدها</span>
                </Link>
              </li>
              <li className="nav-item mb-3">
                <Link
                  to="#"
                  className="nav-link text-muted link-sidebar d-block box-shadow1"
                >
                  <i className="fas fa-home"></i>
                  <span className="ms-1">مدیریت سفارشات</span>
                </Link>
              </li>
              <li className="nav-item mb-3">
                <Link
                  to="#"
                  className="nav-link text-muted link-sidebar d-block box-shadow1"
                >
                  <i className="fas fa-home"></i>
                  <span className="ms-1">مدیریت نحوه ارسال</span>
                </Link>
              </li>
            </div>
          </ul>
          {/* end orders & card heading  */}
          {/* users heading */}
          <ul className="navbar-nav list-unstyled d-flex flex-column">
            <h6 className="mx-3 text-muted  d-block box-shadow-inset rounded-3 text-center p-2">
              کاربران و همکاران
            </h6>
            <div className="p-3">
              <li className="nav-item mb-3">
                <Link
                  to="#"
                  className="nav-link text-muted link-sidebar d-block box-shadow1"
                >
                  <i className="fas fa-home"></i>
                  <span className="ms-1">مشاهده کاربران</span>
                </Link>
              </li>
              <li className="nav-item mb-3">
                <Link
                  to="#"
                  className="nav-link text-muted link-sidebar d-block box-shadow1"
                >
                  <i className="fas fa-home"></i>
                  <span className="ms-1">نقش ها</span>
                </Link>
              </li>
              <li className="nav-item mb-3">
                <Link
                  to="#"
                  className="nav-link text-muted link-sidebar d-block box-shadow1"
                >
                  <i className="fas fa-home"></i>
                  <span className="ms-1">مجوزها</span>
                </Link>
              </li>
            </div>
          </ul>
          {/* end users heading  */}
        </ul>
      </div>

      <div className="col-xl-10 col-lg-8 col-md-6 top-nav fixed-top shadow ms-auto d-flex align-items-center ps-0">
        <div className="border-vertical"></div>
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between">
            <div className="col-sm-2 heading-top-nav">داشبورد</div>
            <div className="col-sm-8">
              <form className="d-flex justify-content-center">
                <button
                  className="btn  color-primary box-shadow1 rounded-circle me-2"
                  type="button"
                >
                  <i className="fas fa-search text-black"></i>
                </button>
                <input
                  type="text"
                  className="form-control box-shadow-inset w-50"
                  placeholder="جستجو..."
                />
              </form>
            </div>
            <div className="col-sm-2 text-end">
              <span className="dropdown-center">
                <a
                  href="#"
                  className="text-muted  box-shadow1 px-2 rounded-2 position-relative"
                  data-bs-toggle="dropdown"
                >
                  <i className="fas fa-bell"></i>
                  <span class="position-absolute start-0 me-3 translate-middle badge rounded-circle back-color-primary box-shadow1 text-danger fs-6">
                    5<span class="visually-hidden">unread messages</span>
                  </span>
                </a>
                <ul className="dropdown-menu box-shadow1 back-color-primary border-0 p-0">
                  <li>
                    <a href="#" className="dropdown-item">
                      پیام یک
                    </a>
                    <div class="border-horizontal"></div>
                  </li>

                  <li>
                    <a href="#" className="dropdown-item">
                      پیام دو
                    </a>
                    <div class="border-horizontal"></div>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      پیام سه
                    </a>
                  </li>
                </ul>
              </span>
              <span className="dropdown-center">
                <a
                  href="#"
                  className="text-muted ms-2 box-shadow1 px-2 rounded-2"
                  data-bs-toggle="dropdown"
                >
                  <i className="fas fa-bars"></i>
                </a>
                <ul className="dropdown-menu box-shadow1 back-color-primary border-0 p-0">
                  <li>
                    <a href="#" className="dropdown-item">
                      تنظیمات
                    </a>
                    <div class="border-horizontal"></div>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      محمد نیک عیش
                    </a>
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
