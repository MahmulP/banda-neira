import Header from "../components/Header";
import Footer from "../components/Footer";

function Process() {
  if (window.location.pathname === "/process") {
    import("../assets/css/service.css");
  }
  return (
    <>
      <Header></Header>

      <section className="main-slider main-slider-three">
        <div
          className="swiper-container thm-swiper__slider"
          data-swiper-options='{"slidesPerView": 1, "loop": false,
        "effect": "fade",
        "pagination": {
        "el": "#main-slider-pagination",
        "type": "bullets",
        "clickable": true
        },
        "navigation": {
        "nextEl": "#main-slider__swiper-button-next",
        "prevEl": "#main-slider__swiper-button-prev"
        },
        "autoplay": {
        "delay": 5000
        }}'>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="container">
                <img
                  src="src/assets/fdesign/18.png"
                  alt=""
                  id="img-container"
                />
                <div className="row">
                  <div className="col-xl-12">
                    <div
                      className="main-slider__content"
                      style={{ marginTop: "-70px" }}>
                      <h1
                        style={{
                          fontFamily: "Arial, Helvetica, sans-serif",
                          fontWeight: "bold",
                          fontSize: "xx-large",
                          marginBottom: "25px",
                        }}>
                        Alur Penukaran Poin
                        <br />
                        Menjadi Voucher Belanja
                      </h1>
                      <p>
                        <ol>
                          <li>
                            Login ke Akun Anda:
                            <ul>
                              <li>Buka situs web Bank Sampah.</li>
                              <li>
                                Masuk ke akun Anda menggunakan nama pengguna dan
                                kata sandi.
                              </li>
                            </ul>
                          </li>
                          <li>
                            Akses Halaman Penukaran Poin:
                            <ul>
                              <li>
                                Setelah masuk, cari opsi atau halaman yang
                                berkaitan dengan penukaran poin menjadi voucher.
                                Ini mungkin disebut "Penukaran Poin" atau
                                "Voucher Rewards."
                              </li>
                            </ul>
                          </li>
                          <li>
                            Pilih Voucher yang Diinginkan:
                            <ul>
                              <li>
                                Jelajahi daftar voucher yang tersedia. Voucher
                                tersebut mungkin mencakup berbagai penawaran,
                                seperti diskon belanja, produk gratis, atau
                                layanan tertentu.
                              </li>
                            </ul>
                          </li>
                          <li>
                            Lihat Persyaratan Penukaran:
                            <ul>
                              <li>
                                Setiap voucher mungkin memiliki persyaratan
                                tertentu, seperti jumlah poin yang diperlukan
                                untuk menebusnya atau batas waktu penggunaan.
                                Pastikan Anda membaca persyaratan dengan teliti.
                              </li>
                            </ul>
                          </li>
                          <li>
                            Pilih Jumlah Poin yang Akan Ditebus:
                            <ul>
                              <li>
                                Pilih jumlah poin yang ingin Anda tukarkan untuk
                                voucher tersebut. Jumlah ini akan tergantung
                                pada jumlah poin yang Anda miliki dan jumlah
                                yang diperlukan untuk voucher yang Anda pilih.
                              </li>
                            </ul>
                          </li>
                          <li>
                            Konfirmasi Penukaran:
                            <ul>
                              <li>
                                Setelah Anda memilih jumlah poin, konfirmasikan
                                penukaran tersebut. Pastikan Anda sudah yakin
                                dengan pilihan Anda.
                              </li>
                            </ul>
                          </li>
                          <li>
                            Terima Voucher:
                            <ul>
                              <li>
                                Setelah penukaran poin berhasil, voucher Anda
                                akan tersedia dalam akun Anda. Anda mungkin bisa
                                mengunduhnya dalam format digital atau menerima
                                melalui email.
                              </li>
                            </ul>
                          </li>
                          <li>
                            Gunakan Voucher:
                            <ul>
                              <li>
                                Gunakan voucher yang Anda terima sesuai dengan
                                persyaratan yang ada. Misalnya, jika itu adalah
                                voucher diskon belanja, gunakan voucher tersebut
                                saat berbelanja di toko yang berpartisipasi.
                              </li>
                            </ul>
                          </li>
                          <li>
                            Selesaikan Transaksi:
                            <ul>
                              <li>
                                Setelah menggunakan voucher, pastikan untuk
                                menyelesaikan transaksi dengan cara yang sesuai
                                dengan ketentuan voucher tersebut.
                              </li>
                            </ul>
                          </li>
                          <li>
                            Cek Sisa Poin:
                            <ul>
                              <li>
                                Setelah penukaran selesai, cek sisa poin yang
                                Anda miliki untuk mengetahui berapa poin yang
                                masih tersedia untuk ditukarkan atau digunakan
                                di masa mendatang.
                              </li>
                            </ul>
                          </li>
                          <li>
                            Logout :
                            <ul>
                              <li>
                                Jangan lupa untuk logout dari akun Anda jika
                                Anda telah menggunakan komputer atau perangkat
                                umum untuk menghindari akses yang tidak sah.
                              </li>
                            </ul>
                          </li>
                        </ol>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}

export default Process;
