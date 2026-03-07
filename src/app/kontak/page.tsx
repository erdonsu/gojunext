"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight, User, AtSign } from "lucide-react";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success message after 4 seconds
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Spacer for fixed navbar */}
      <div className="h-24 sm:h-32"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left Column: Heading & Contact Details */}
          <div className="flex flex-col justify-center pt-4 sm:pt-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0055b8] px-4 py-2 rounded-full mb-8 font-bold text-sm tracking-wide w-max">
              <MessageSquare size={16} />
              Layanan Pelanggan
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-[1.1] tracking-tight">
              Mari Terhubung Bersama Kami
            </h1>

            <p className="text-lg text-gray-600 mb-12 max-w-lg leading-relaxed">
              Kami selalu siap mendengarkan. Punya pertanyaan, masukan, atau ide kerja sama? Jangan ragu untuk menghubungi tim GoJuara melalui berbagai kanal di bawah ini.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group cursor-default">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-[#0055b8] transition-colors duration-300">
                  <Phone size={28} className="text-[#0055b8] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-xl mb-1">WhatsApp</p>
                  <p className="text-gray-500 mb-2">Tersedia Senin-Jumat (08:00 - 17:00)</p>
                  <a href="https://wa.me/6282258692808" target="_blank" rel="noreferrer" className="text-[#0055b8] font-bold text-lg hover:underline inline-flex items-center gap-2">
                    +62 822-5869-2808
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group cursor-default">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-[#0055b8] transition-colors duration-300">
                  <Mail size={28} className="text-[#0055b8] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-xl mb-1">Alamat Email</p>
                  <p className="text-gray-500 mb-2">Kirimkan pertanyaan detail Anda kepada kami</p>
                  <a href="mailto:info@gojuara.or.id" className="text-[#0055b8] font-bold text-lg hover:underline inline-flex items-center gap-2">
                    info@gojuara.or.id
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group cursor-default">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-[#0055b8] transition-colors duration-300">
                  <MapPin size={28} className="text-[#0055b8] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-xl mb-1">Lokasi Kantor</p>
                  <p className="text-gray-600 leading-relaxed">
                    Yayasan Pusat Sang Juara.<br />
                    Jl. Pendidikan No. 123,<br />
                    Jakarta Selatan, Indonesia 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-8 sm:p-10 lg:p-12 relative overflow-hidden">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-8">Kirim Pesan</h3>

            {submitted && (
              <div className="bg-emerald-50 text-emerald-800 font-medium p-4 rounded-2xl mb-8 flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                  <Send size={18} className="text-emerald-600" />
                </div>
                <p>Pesan Anda telah berhasil terkirim. Terima kasih!</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-3 ml-1">
                  Nama Lengkap
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-gray-400 group-focus-within:text-[#0055b8] transition-colors">
                    <User size={20} />
                  </div>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full pl-14 pr-5 py-4 bg-gray-50 rounded-2xl border-none focus:bg-white focus:ring-2 focus:ring-[#0055b8] shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-3 ml-1">
                  Alamat Email
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-gray-400 group-focus-within:text-[#0055b8] transition-colors">
                    <AtSign size={20} />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full pl-14 pr-5 py-4 bg-gray-50 rounded-2xl border-none focus:bg-white focus:ring-2 focus:ring-[#0055b8] shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
                    placeholder="contoh@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-3 ml-1">
                  Pesan Anda
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-6 py-5 bg-gray-50 rounded-2xl border-none focus:bg-white focus:ring-2 focus:ring-[#0055b8] shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400 resize-none"
                  placeholder="Tulis pesan atau pertanyaan Anda di sini..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0055b8] hover:bg-[#004499] active:scale-[0.98] text-white font-bold text-lg py-5 rounded-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-70 mt-4"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Mengirim...
                  </span>
                ) : (
                  <>
                    Kirim Pesan
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
