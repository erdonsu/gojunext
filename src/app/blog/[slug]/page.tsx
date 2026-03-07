import Image from "next/image";
import Link from "next/link";
import { blogList, getBlogBySlug } from "@/lib/data/blog";
import { Calendar, ArrowLeft, User, Share2, Tag } from "lucide-react";
import { notFound } from "next/navigation";

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogList.map((item) => ({
    slug: item.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const paragraphs = post.content?.split('\n\n') || [];

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="bg-[#0055b8] text-white pt-16 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#fde047] hover:text-yellow-300 mb-8 font-medium transition-colors"
            >
              <ArrowLeft size={18} />
              Kembali ke Blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 text-sm mb-6">
              <span className="bg-white/20 text-white backdrop-blur-md px-4 py-1.5 rounded-full font-semibold tracking-wide uppercase text-xs">
                {post.category}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
              <div className="flex items-center gap-1.5 font-medium text-[#fde047]">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-8 text-white">
              {post.title}
            </h1>

            <div className="flex items-center gap-3">
              <div className="bg-[#fde047]/20 p-2 rounded-full backdrop-blur-sm">
                <User size={20} className="text-[#fde047]" />
              </div>
              <div>
                <p className="text-sm text-[#fde047] font-medium">Ditulis oleh</p>
                <p className="font-bold text-white tracking-wide">{post.author}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image & Content Wrapper */}
      <section className="-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white mb-12">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Article Content */}
            <article className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-gray-100">
              {/* Excerpt Summary */}
              <div className="bg-blue-50 border-l-4 border-[#0055b8] p-5 sm:p-6 rounded-r-xl mb-8 sm:mb-10">
                <p className="text-lg sm:text-xl text-[#004499] font-medium leading-relaxed italic">
                  &ldquo;{post.excerpt}&rdquo;
                </p>
              </div>

              {/* Main Content */}
              <div className="prose prose-base sm:prose-lg max-w-none text-gray-700 leading-relaxed">
                {paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="mb-5 sm:mb-6">{paragraph}</p>
                ))}
              </div>

              {/* Footer Actions */}
              <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2 text-[#0055b8] font-semibold text-sm bg-blue-50 px-4 py-2 rounded-full">
                  <Tag size={16} />
                  <span>Kategori: {post.category}</span>
                </div>

                <button className="flex items-center gap-2 text-gray-600 hover:text-[#0055b8] font-medium transition-colors border border-gray-200 hover:border-blue-200 px-5 py-2.5 rounded-full shadow-sm hover:shadow">
                  <Share2 size={18} />
                  Bagikan Artikel
                </button>
              </div>
            </article>

          </div>
        </div>
      </section>
    </div>
  );
}
