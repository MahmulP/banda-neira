import Header from "../components/Header";
import Footer from "../components/Footer";

function TrashSelection() {
  if (window.location.pathname === "/trash-selection") {
    import("../assets/css/service.css");
  }
  return (
    <>
      <Header></Header>

      <section className="page-header" style={{ marginTop: "120px" }}>
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(src/assets/images/backgrounds/page-header-bg.jpg)",
          }}></div>
        <div className="container">
          <div className="page-header__inner">
            <h2>Pemilihan Sampah</h2>
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <a href="/">Beranda</a>
              </li>
              <li>Pemilihan Sampah</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="content" style={{ marginTop: "50px", marginBottom: "30px" }}>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-12">
              <h2>Kategori dan Jenis Sampah</h2>
              <p>
                Sebelum dapat memahami cara mengelola sampah dengan tepat dan
                bertanggung jawab, hal penting yang perlu diketahui adalah
                perbedaan dan karakteristik dari setiap jenis sampah yang ada.
                Tidak hanya terdiri dari sampah organik dan anorganik, sampah
                juga dapat dibedakan berdasarkan kategori tertentu. Berikut
                adalah jenis-jenis sampah berdasarkan sifat, sumber, dan
                waktunya. Pemanfaatan sampah dilakukan untuk mencegahnya
                berakhir sia-sia tidak terkelola. Pengelolaan sampah bertanggung
                jawab juga berperan mengurangi potensinya mencemari lingkungan.
              </p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-12">
              <h2>Pemilihan Sampah</h2>
              <p>Berikut adalah jenis sampah yang dapat kami daur ulang</p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-12">
              <div className="card float-start box" style={{ width: "15rem" }}>
                <img
                  className="card-img-top item"
                  src="src/assets/images/img/botol.JPG"
                  alt="Card image cap"
                />
                <h5 className="card-title">Botol</h5>
                <div className="card-body"></div>
              </div>

              <div className="card float-end box" style={{ width: "15rem" }}>
                <img
                  className="card-img-top item"
                  src="src/assets/images/img/botol-plastik.JPG"
                  alt="Card image cap"
                />
                <h5 className="card-title">Botol Kaca</h5>
                <div className="card-body"></div>
              </div>
            </div>

            <div className="col-md-12 d-flex justify-content-center">
              <div className="card box" style={{ width: "15rem" }}>
                <img
                  className="card-img-top item"
                  src="src/assets/images/img/plastik.JPG"
                  alt="Card image cap"
                />
                <h5 className="card-title">Plastik</h5>
                <div className="card-body"></div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="card float-start box" style={{ width: "15rem" }}>
                <img
                  className="card-img-top item"
                  src="src/assets/images/img/hp.JPG"
                  alt="Card image cap"
                />
                <h5 className="card-title">Elektronik</h5>
                <div className="card-body"></div>
              </div>

              <div className="card float-end box" style={{ width: "15rem" }}>
                <img
                  className="card-img-top item"
                  src="src/assets/images/img/roket.JPG"
                  alt="Card image cap"
                />
                <h5 className="card-title">Besi & Aluminium</h5>
                <div className="card-body"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}

export default TrashSelection;
