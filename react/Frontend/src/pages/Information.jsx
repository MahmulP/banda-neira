import Header from "../components/Header";
import Footer from "../components/Footer";

function Process() {
  if (window.location.pathname === "/information") {
    import("../assets/css/service.css");
  }
  return (
    <>
      <Header></Header>

      <section
        id="header-information"
        style={{ background: "linear-gradient(to bottom, #DCFFDB, #D9D9D9)" }}>
        <div>
          <h2
            style={{
              textAlign: "center",
              marginTop: "150px",
              fontWeight: "bold",
            }}>
            Daur Ulang Sampah dan <br /> Upaya Atasi Penumpukan Sampah
          </h2>
          <p
            className="box-header"
            style={{
              backgroundColor: "var(--wostin-base)",
              color: "white",
              border: "2px solid rgb(238, 216, 216)",
              borderRadius: "12px",
              padding: "10px",
              textAlign: "center",
              marginLeft: "250px",
              marginRight: "250px",
              marginTop: "15px",
            }}>
            Daur ulang sampah dan upaya-atasi adalah topik penting dalam upaya
            menjaga lingkungan dan mengurangi dampak negatif sampah terhadap
            planet kita.
          </p>
          <p
            style={{
              textAlign: "justify",
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "20px",
              color: "#000",
            }}>
            Berdasarkan data dari Sistem Pengelolaan Sampah Nasional (SIPSN)
            Kementerian Lingkungan Hidup dan Kehutanan (KLHK), pada tahun 2021,
            masyarakat Indonesia menghasilkan 68 juta ton sampah. Berdasarkan
            jenisnya, mayoritas timbulan sampah nasional pada 2022 berupa sampah
            sisa makanan dengan proporsi 41,55%. Kemudian sampah plastik berada
            di urutan kedua dengan proporsi 18,55%. Sebanyak 13,27% sampah di
            Indonesia pada 2022 berupa kayu/ranting, 11,04% sampah
            kertas/karton, dan sampah logam 2,86%. Sayangnya, hanya sekitar
            10-15% sampah saja yang berhasil terdaur ulang. 60-70%-nya masih
            berakhir di TPA dan 15-30%-nya belum terkelola.
          </p>
        </div>

        <div id="header-information" style={{ marginTop: "-130px" }}>
          <h2
            style={{
              textAlign: "center",
              marginTop: "150px",
              fontWeight: "bold",
            }}>
            Pengertian Daur Ulang Sampah
          </h2>
          <p
            className="box-header"
            style={{
              backgroundColor: "var(--wostin-base)",
              color: "white",
              border: "2px solid rgb(238, 216, 216)",
              borderRadius: "12px",
              padding: "10px",
              textAlign: "center",
              marginLeft: "250px",
              marginRight: "250px",
              marginTop: "15px",
            }}>
            Indonesia masih terus menangani masalah penumpukan sampah, khususnya
            sampah plastik, dengan berbagai upaya, salah satunya dengan daur
            ulang sampah.
          </p>
          <p
            style={{
              textAlign: "justify",
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "20px",
              color: "#000",
            }}>
            Dalam konteks pengelolaan sampah dan praktik daur ulang, daur ulang
            sampah merupakan suatu proses penting yang melibatkan pengolahan
            kembali sampah atau barang-barang bekas menjadi produk baru yang
            memiliki nilai tambah. Artinya, bahan-bahan seperti plastik, kertas,
            logam, kaca, dan berbagai barang bekas lainnya, yang sebelumnya
            sudah tidak terpakai, diberikan kesempatan kedua untuk digunakan
            kembali. Mengacu pada Kamus Besar Bahasa Indonesia (KBBI), daur
            ulang dapat didefinisikan sebagai kegiatan atau proses pemrosesan
            kembali bahan yang pernah digunakan. Proses ini melibatkan tahapan
            pengumpulan, pemilahan, pembersihan, pengolahan, dan pembentukan
            bahan bekas menjadi produk baru yang dapat digunakan. Daur ulang
            bisa disebut sebagai tahap akhir dalam piramida pengelolaan sampah
            yang dikenal dengan konsep 3R (Reduce, Reuse, Recycle), 5R (Refuse,
            Reduce, Reuse, Repurpose, Recycle), atau 6R (Refuse, Reduce, Reuse,
            Repair, Repurpose, Recycle). Daur ulang bertujuan agar penanganan
            sampah dapat dimaksimalkan di tahap paling akhir, setelah
            usaha-usaha untuk mengurangi pemakaian barang yang berisiko menjadi
            sampah, mempromosikan penggunaan kembali barang, dan memperbaiki
            produk yang masih bermanfaat telah diupayakan. Daur ulang memiliki
            dampak positif, termasuk pengurangan jumlah sampah yang berakhir di
            Tempat Pembuangan Akhir (TPA), penghematan sumber daya alam, dan
            mengurangi pencemaran lingkungan. Praktik daur ulang menjadi penting
            dalam menjaga lingkungan, menjalankan praktik berkelanjutan, dan
            meminimalkan dampak negatif sampah terhadap planet kita.
          </p>
        </div>

        <div id="header-information" style={{ marginTop: "-130px" }}>
          <h2
            style={{
              textAlign: "center",
              marginTop: "150px",
              fontWeight: "bold",
            }}>
            Contoh Sampah yang Bisa Didaur Ulang
          </h2>
          <p
            className="box-header"
            style={{
              backgroundColor: "var(--wostin-base)",
              color: "white",
              border: "2px solid rgb(238, 216, 216)",
              borderRadius: "12px",
              padding: "10px",
              textAlign: "center",
              marginLeft: "250px",
              marginRight: "250px",
              marginTop: "15px",
            }}>
            "Mendaur ulang botol plastik bekas menjadi bahan baku untuk membuat
            produk plastik baru adalah salah satu contoh penting praktik daur
            ulang sampah yang membantu mengurangi pencemaran lingkungan."
          </p>
          <p
            style={{
              textAlign: "justify",
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "20px",
              color: "#000",
            }}>
            Dalam konteks daur ulang sampah, penting untuk memahami bahwa tidak
            semua jenis sampah dapat atau seharusnya didaur ulang. Terdapat
            beberapa faktor yang mempengaruhi kemampuan untuk mendaur ulang
            sampah tertentu. Beberapa faktor tersebut meliputi:
          </p>

          <div className="point">
            <h3
              style={{
                textAlign: "justify",
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "20px",
                color: "#000",
                marginTop: "-25px",
                fontFamily: "Times New Roman",
                fontSize: "20px",
              }}>
              1. Teknologi Daur Ulang
            </h3>
            <p
              style={{
                textAlign: "justify",
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "20px",
                color: "#000",
                marginTop: "-25px",
              }}>
              Kemampuan untuk mendaur ulang suatu jenis sampah tergantung pada
              teknologi daur ulang yang tersedia. Teknologi mungkin tidak
              memadai untuk mengolah beberapa jenis sampah.
            </p>
          </div>

          <div className="point">
            <h3
              style={{
                textAlign: "justify",
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "20px",
                color: "#000",
                marginTop: "-25px",
                fontFamily: "Times New Roman",
                fontSize: "20px",
              }}>
              2. Kondisi Barang Sisa
            </h3>
            <p
              style={{
                textAlign: "justify",
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "20px",
                color: "#000",
                marginTop: "-25px",
              }}>
              Sampah yang sudah sangat rusak atau terkontaminasi mungkin sulit
              atau bahkan tidak memungkinkan untuk didaur ulang. Sampah yang
              sangat kotor atau tercampur dengan bahan lain mungkin perlu
              dibuang sebagai sampah biasa.
            </p>
          </div>

          <div className="point">
            <h3
              style={{
                textAlign: "justify",
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "20px",
                color: "#000",
                marginTop: "-25px",
                fontFamily: "Times New Roman",
                fontSize: "20px",
              }}>
              3. Jenis Sampah
            </h3>
            <p
              style={{
                textAlign: "justify",
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "20px",
                color: "#000",
                marginTop: "-25px",
              }}>
              Beberapa jenis sampah memang tidak dapat didaur ulang karena sifat
              kimianya. Contohnya adalah sampah organik, seperti sisa makanan,
              yang biasanya diuraikan melalui komposting, bukan daur ulang.
            </p>
          </div>

          <div className="stabilo">
            <p
              style={{
                textAlign: "justify",
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "20px",
                color: "#000",
                marginTop: "-25px",
                textDecoration: "underline",
                textDecorationStyle: "solid",
                textDecorationColor: "var(--wostin-base)",
                textDecorationThickness: "2px",
              }}>
              Namun, ada juga beberapa jenis sampah yang bisa didaur ulang
              dengan efektif. Contoh-contoh sampah yang biasanya dapat didaur
              ulang meliputi:
            </p>
          </div>

          <div
            className="daftar-bulet"
            style={{
              listStyleType: "circle",
              marginLeft: "20px",
              textAlign: "justify",
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "20px",
              color: "#000",
              marginTop: "-25px",
            }}>
            <ul>
              <li>
                Plastik: Banyak jenis plastik dapat didaur ulang menjadi produk
                baru, seperti botol plastik yang diubah menjadi serat untuk
                pakaian.
              </li>
              <li>
                Kaca : Kaca dapat didaur ulang tanpa kehilangan kualitasnya.
                Botol kaca bekas dapat diolah menjadi botol kaca baru.
              </li>
              <li>
                Kertas : Berbagai jenis kertas, seperti kertas kardus dan kertas
                koran, dapat didaur ulang menjadi kertas daur ulang baru.
              </li>
              <li>
                Sampah Organik: Sampah organik, seperti sisa makanan dan
                tumpukan daun, dapat diubah menjadi kompos melalui proses
                komposting.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}

export default Process;
