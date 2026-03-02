import Image from "next/image";
import Link from "next/link";
import { pengumumanList, getPengumumanBySlug } from "@/lib/data/pengumuman";
import { Calendar, ArrowLeft, Trophy, Medal, Award } from "lucide-react";
import { notFound } from "next/navigation";

// Generate static params for all pengumuman
export function generateStaticParams() {
  return pengumumanList.map((item) => ({
    slug: item.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PengumumanDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pengumuman = getPengumumanBySlug(slug);

  if (!pengumuman) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/pengumuman"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft size={20} />
            Kembali ke Pengumuman
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 text-sm text-white/80 mb-4">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                {pengumuman.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{pengumuman.date}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              {pengumuman.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={pengumuman.image}
                alt={pengumuman.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {pengumuman.excerpt}
              </p>

              {/* Winner Announcement Placeholder */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-8 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="text-yellow-500" size={32} />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Selamat Kepada Pemenang
                  </h2>
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Medal className="text-yellow-600" size={28} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Juara 1</h3>
                    <p className="text-sm text-gray-600">Segera diumumkan</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="text-gray-600" size={28} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Juara 2</h3>
                    <p className="text-sm text-gray-600">Segera diumumkan</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="text-orange-600" size={28} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Juara 3</h3>
                    <p className="text-sm text-gray-600">Segera diumumkan</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Detail lengkap pemenang akan segera diumumkan. Pantau terus website GoJuara untuk informasi selengkapnya.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
