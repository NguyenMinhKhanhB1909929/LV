function Footer() {
  return (
    <div className="">
      <footer
        className="text-center text-lg-start text-white "
        style={{ backgroundColor: "#3e4551" }}
      >
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">K-Lancer</h5>

                <p>
                  Klancer là website đăng tin tuyển dụng miễn phí và tìm việc
                  làm theo lĩnh vực, khu vực, từ khóa để tìm công việc phù hợp
                  với bạn! Bạn có thể tạo CV ấn tượng ở đây.
                </p>
              </div>

              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">VIỆC LÀM PHỔ BIẾN</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Việc lập trình di động
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Việc làm web
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Việc làm Marketing online
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Việc làm SEO
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">ĐƯỢC THUÊ NHIỀU NHẤT</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Freelancer Marketing online
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Freelancer Moblie app
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Freelancer SEO
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Freelancer làm web
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">GIỚI THIỆU</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Về chúng tôi
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Nhà tài trợ
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Kiến thức Klancer
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Blog Klancer
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">LIÊN HỆ</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Thông báo lỗi
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Câu hỏi thường gặp
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Trợ giúp
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Liên hệ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="mb-4" />

          <section className="">
            <p className="d-flex justify-content-center align-items-center">
              <span className="me-3">Register for free</span>
              <button
                type="button"
                className="btn btn-outline-light btn-rounded"
              >
                Sign up!
              </button>
            </p>
          </section>

          <hr className="mb-4" />

          <section className="mb-4 text-center">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            Nguyễn Minh Khánh B1909929
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
