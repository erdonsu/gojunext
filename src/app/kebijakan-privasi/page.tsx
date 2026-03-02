"use client";

import { Shield, Lock, Eye, Cookie, UserCheck, RefreshCw } from "lucide-react";

const policies = [
  {
    icon: Eye,
    number: "1",
    title: "Informasi yang Kami Kumpulkan",
    content: "Kami dapat mengumpulkan informasi pribadi Anda seperti nama, alamat email, nomor telepon, dan informasi lain yang Anda berikan saat mendaftar dan menggunakan layanan kami. Selain itu, kami juga dapat mengumpulkan informasi non-pribadi seperti alamat IP, tipe perangkat, browser yang digunakan, dan data lain terkait dengan interaksi Anda dengan platform kami.",
  },
  {
    icon: UserCheck,
    number: "2",
    title: "Penggunaan Informasi",
    content: "Informasi yang kami kumpulkan dapat digunakan untuk: Mengelola dan menyediakan layanan GoJuara, termasuk mengelola akun Anda dan memberikan akses ke ujian online; Mengirimkan informasi terkait kompetisi, pembaruan, dan pengumuman melalui email atau pesan lainnya; Meningkatkan pengalaman pengguna dengan mengadaptasi layanan kami sesuai dengan umpan balik dan kebutuhan Anda; Menganalisis data untuk tujuan statistik dan riset guna meningkatkan kualitas layanan kami; Menjalankan operasi internal termasuk pemeliharaan, pemecahan masalah, dan pencegahan penyalahgunaan.",
  },
  {
    icon: Shield,
    number: "3",
    title: "Berbagi Informasi",
    content: "Kami tidak akan menjual, menyewakan, atau menukar informasi pribadi Anda kepada pihak ketiga tanpa izin Anda, kecuali diperlukan oleh hukum atau dalam situasi tertentu yang diatur dalam kebijakan ini.",
  },
  {
    icon: Lock,
    number: "4",
    title: "Keamanan",
    content: "Kami mengutamakan keamanan informasi pribadi Anda dan telah mengadopsi langkah-langkah yang cermat untuk melindungi data Anda dari akses yang tidak sah, penggunaan yang tidak sah, atau pengungkapan yang tidak sah. Kami menerapkan tindakan keamanan fisik, elektronik, dan prosedural yang ketat, sejalan dengan standar industri, untuk mencegah insiden keamanan.",
  },
  {
    icon: Cookie,
    number: "5",
    title: "Cookie dan Teknologi Serupa",
    content: "Kami dapat menggunakan teknologi seperti cookie untuk mengumpulkan informasi tentang interaksi Anda dengan layanan kami. Anda dapat mengatur browser Anda untuk menolak semua atau beberapa cookie, atau untuk memberi tahu Anda ketika cookie digunakan. Namun, ini mungkin mempengaruhi fungsionalitas layanan kami.",
  },
  {
    icon: UserCheck,
    number: "6",
    title: "Hak Privasi Anda",
    content: "Anda memiliki hak untuk mengakses, mengoreksi, atau menghapus informasi pribadi Anda yang kami miliki. Untuk melakukannya, silakan hubungi kami melalui informasi kontak yang tertera pada bagian halaman kontak.",
  },
  {
    icon: RefreshCw,
    number: "7",
    title: "Perubahan Kebijakan Privasi",
    content: "Kami berhak untuk mengubah kebijakan privasi ini dari waktu ke waktu. Perubahan tersebut akan diberlakukan saat kebijakan diperbarui di situs kami.",
  },
];

export default function KebijakanPrivasiPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Shield size={32} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Kebijakan Privasi
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed text-center">
              Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda mengakses dan menggunakan layanan kami. Kami menghargai privasi Anda dan berkomitmen untuk menjaga kerahasiaan informasi pribadi Anda. Harap luangkan waktu untuk membaca kebijakan privasi ini dengan seksama.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {policies.map((policy) => (
                <div
                  key={policy.number}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <policy.icon className="text-blue-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 mb-3">
                        {policy.number}. {policy.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                        {policy.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Security Note */}
            <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Catatan Keamanan
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Namun, penting untuk diingat bahwa tidak ada sistem atau metode penyimpanan data yang dapat dianggap sepenuhnya bebas risiko. Meskipun kami mengambil langkah-langkah untuk melindungi informasi Anda, kami tidak dapat menjamin keamanan mutlak. Setiap penggunaan layanan kami adalah tanggung jawab Anda sendiri, dan Anda harus memastikan keamanan informasi pribadi Anda, seperti menjaga kerahasiaan kata sandi dan informasi akun Anda.
              </p>
            </div>

            {/* Agreement */}
            <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Persetujuan
              </h3>
              <p className="text-gray-600">
                Dengan menggunakan layanan kami, Anda setuju dengan pengumpulan dan penggunaan informasi sebagaimana dijelaskan dalam kebijakan privasi ini. Jika Anda memiliki pertanyaan atau keprihatinan tentang kebijakan privasi kami, silakan hubungi kami pada halaman kontak.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
