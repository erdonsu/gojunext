import Image from "next/image";
import Link from "next/link";
import { articles, getArticleBySlug } from "@/lib/data/articles";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { notFound } from "next/navigation";

// Generate static params for all articles
export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArtikelDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16">
      {/* Article Header */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/artikel"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6"
          >
            <ArrowLeft size={20} />
            Kembali ke Artikel
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                {article.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User size={14} />
                <span>{article.author}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{article.author}</p>
                  <p className="text-sm text-gray-500">Penulis</p>
                </div>
              </div>
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Share2 size={20} />
                <span className="hidden sm:inline">Bagikan</span>
              </button>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {article.excerpt}
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
                <p className="text-gray-700 italic">
                  &ldquo;Perjalanan menuju kesuksesan dimulai dari langkah kecil yang konsisten.
                  Bersama GoJuara, mari wujudkan impianmu menjadi juara!&rdquo;
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Artikel ini akan membahas lebih detail tentang {article.title.toLowerCase()}. 
                Informasi lengkap akan segera ditambahkan.
              </p>
            </div>

            {/* Share Section */}
            <div className="border-t pt-8 mt-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Bagikan Artikel
              </h3>
              <div className="flex gap-4">
                <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <span className="font-bold">f</span>
                </button>
                <button className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
                  <span className="font-bold">X</span>
                </button>
                <button className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <span className="font-bold">WA</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
