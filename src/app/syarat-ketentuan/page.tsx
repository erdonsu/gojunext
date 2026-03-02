"use client";

import { FileText, CheckCircle } from "lucide-react";

const terms = [
  {
    number: "1",
    title: "Penerimaan Syarat dan Ketentuan",
    content: "Dengan menggunakan layanan GoJuara, Anda menyetujui untuk tunduk pada semua syarat dan ketentuan yang tercantum dalam dokumen ini. Jika Anda tidak setuju dengan salah satu bagian dari syarat dan ketentuan ini, Anda tidak diperkenankan untuk menggunakan layanan kami.",
  },
  {
    number: "2",
    title: "Penggunaan Layanan",
    content: "Layanan GoJuara disediakan untuk memfasilitasi kompetisi ujian online seperti cerdas cermat. Anda setuju untuk menggunakan layanan kami sesuai dengan peraturan dan hukum yang berlaku. Anda dilarang melakukan tindakan apapun yang dapat merusak, mengganggu, atau menghambat fungsi layanan kami.",
  },
  {
    number: "3",
    title: "Akun Pengguna",
    content: "Untuk mengakses beberapa fitur layanan, Anda mungkin harus membuat akun pengguna. Anda bertanggung jawab atas menjaga kerahasiaan informasi akun Anda, termasuk kata sandi. Anda bertanggung jawab penuh atas semua aktivitas yang terjadi di bawah akun Anda. Jika Anda menduga adanya penggunaan tidak sah atau akses yang tidak sah ke akun Anda, segera beritahu kami melalui email info@gojuara.or.id",
  },
  {
    number: "4",
    title: "Konten Pengguna",
    content: "Dalam menggunakan layanan kami, Anda dapat mengirimkan konten seperti pertanyaan, jawaban, komentar, atau materi lainnya. Dengan mengirimkan konten, Anda memberikan kami lisensi global, bebas royalti, dan tidak eksklusif untuk menggunakan, mereproduksi, mengubah, mengadaptasi, menerbitkan, menerjemahkan, dan mendistribusikan konten Anda. Anda setuju bahwa konten yang Anda kirimkan tidak akan melanggar hak kekayaan intelektual pihak ketiga, hukum yang berlaku, atau norma etika yang berlaku. Kami berhak, namun tidak berkewajiban, untuk menghapus atau mengubah konten yang dianggap melanggar atau tidak sesuai.",
  },
  {
    number: "5",
    title: "Tanggung Jawab dan Garansi",
    content: "Anda mengakui bahwa penggunaan layanan kami dilakukan atas risiko Anda sendiri. Kami tidak memberikan jaminan atau garansi, baik secara tersurat maupun tersirat, terkait keakuratan, ketersediaan, atau keandalan layanan kami. Kami tidak bertanggung jawab atas kerugian atau kerusakan yang timbul akibat penggunaan layanan kami.",
  },
  {
    number: "6",
    title: "Perubahan Layanan",
    content: "Kami berhak untuk mengubah, menghentikan, atau memodifikasi layanan kami, serta mengubah syarat dan ketentuan ini, tanpa pemberitahuan sebelumnya. Perubahan akan diberlakukan segera setelah diterbitkan di situs kami.",
  },
  {
    number: "7",
    title: "Pelanggaran Syarat dan Ketentuan",
    content: "Jika kami memiliki alasan yang wajar untuk percaya bahwa Anda melanggar syarat dan ketentuan ini, kami berhak untuk membatasi atau menghentikan akses Anda ke layanan kami tanpa pemberitahuan atau pertanggungjawaban.",
  },
  {
    number: "8",
    title: "Hukum yang Berlaku",
    content: "Syarat dan ketentuan ini diatur oleh hukum yang berlaku di Republik Indonesia. Anda setuju bahwa pengadilan yang berwenang di wilayah tersebut akan memiliki yurisdiksi eksklusif atas setiap sengketa yang timbul terkait dengan layanan kami.",
  },
  {
    number: "9",
    title: "Kontak Kami",
    content: "Jika Anda memiliki pertanyaan, masukan, atau kekhawatiran mengenai syarat dan ketentuan ini, silakan hubungi kami melalui informasi kontak yang tertera pada halaman kontak.",
  },
];

export default function SyaratKetentuanPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <FileText size={32} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Syarat dan Ketentuan
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Silakan baca syarat dan ketentuan penggunaan ini secara cermat sebelum Anda menggunakan layanan kami
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-lg mb-12 text-center">
              Dengan mengakses, mendaftar, atau menggunakan layanan kami, Anda dianggap telah membaca, memahami, dan menyetujui semua syarat dan ketentuan yang diuraikan di bawah ini.
            </p>

            <div className="space-y-8">
              {terms.map((term) => (
                <div
                  key={term.number}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-blue-600">{term.number}</span>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3">
                        {term.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                        {term.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Acceptance */}
            <div className="mt-12 bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <CheckCircle className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Penerimaan Syarat dan Ketentuan
              </h3>
              <p className="text-gray-600">
                Dengan menggunakan layanan kami, Anda mengakui bahwa Anda telah membaca, memahami, dan menyetujui semua syarat dan ketentuan ini. Terima kasih telah memilih layanan GoJuara.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
