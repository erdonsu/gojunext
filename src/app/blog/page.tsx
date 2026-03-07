"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogList } from "@/lib/data/blog";
import { Calendar, ArrowRight, Rss, Clock } from "lucide-react";

export default function BlogPage() {
  const [isLoading, setIsLoading] = useState(true);

  // Pisahkan postingan pertama sebagai featured
  const featuredPost = blogList[0];
  const regularPosts = blogList.slice(1);

  useEffect(() => {
    // Simulasi skeleton delay 800ms
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-gray-50 min-h-screen pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Skeleton Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-pulse">
            <div className="inline-block w-48 h-10 bg-gray-200 rounded-full mb-6"></div>
            <div className="h-12 sm:h-16 lg:h-16 bg-gray-200 rounded-xl mx-auto w-3/4 mb-4"></div>
            <div className="h-12 sm:h-16 lg:h-16 bg-gray-200 rounded-xl mx-auto w-1/2 mb-6"></div>
            <div className="h-6 bg-gray-200 rounded-md w-full mb-2"></div>
            <div className="h-6 bg-gray-200 rounded-md w-5/6 mx-auto"></div>
          </div>

          {/* Skeleton Featured Post */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col lg:flex-row mb-16 animate-pulse">
            <div className="w-full lg:w-3/5 aspect-[16/9] lg:aspect-auto min-h-[300px] lg:min-h-[400px] bg-gray-200"></div>
            <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
              <div className="w-32 h-5 bg-gray-200 rounded-md mb-4"></div>
              <div className="w-full h-10 bg-gray-200 rounded-md mb-3"></div>
              <div className="w-4/5 h-10 bg-gray-200 rounded-md mb-5"></div>
              <div className="w-full h-5 bg-gray-200 rounded-md mb-2"></div>
              <div className="w-full h-5 bg-gray-200 rounded-md mb-2"></div>
              <div className="w-2/3 h-5 bg-gray-200 rounded-md mb-8"></div>
              <div className="mt-auto w-40 h-6 bg-gray-200 rounded-md"></div>
            </div>
          </div>

          {/* Skeleton Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 animate-pulse flex flex-col h-full">
                <div className="aspect-[16/10] bg-gray-200"></div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="w-24 h-4 bg-gray-200 rounded-md mb-3"></div>
                  <div className="w-full h-7 bg-gray-200 rounded-md mb-2"></div>
                  <div className="w-3/4 h-7 bg-gray-200 rounded-md mb-4"></div>
                  <div className="w-full h-4 bg-gray-200 rounded-md mb-2"></div>
                  <div className="w-5/6 h-4 bg-gray-200 rounded-md mb-6"></div>
                  <div className="mt-auto w-32 h-5 bg-gray-200 rounded-md"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0055b8]/10 text-[#0055b8] px-4 py-2 rounded-full mb-6 font-semibold shadow-sm">
            <Rss size={18} />
            <span>Blog & Kabar Terbaru</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            Cerita & Inspirasi Dibalik <span className="text-[#0055b8]">GoJuara</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500">
            Temukan berita terbaru, pengumuman pemenang kompetisi, edukasi, dan inspirasi menarik seputar dunia pendidikan Indonesia.
          </p>
        </div>

        {/* Featured Post (Most Recent) */}
        {featuredPost && (
          <Link href={`/blog/${featuredPost.slug}`} className="block group mb-16">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-blue-100 flex flex-col lg:flex-row">
              <div className="relative w-full lg:w-3/5 aspect-[16/9] lg:aspect-auto min-h-[300px] lg:min-h-[400px] overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-yellow-400 text-yellow-950 text-xs px-4 py-1.5 rounded-full font-bold uppercase tracking-wider shadow-sm">
                    Topik Utama
                  </span>
                </div>
              </div>
              <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-gray-500 text-sm font-medium mb-4">
                  <span className="text-[#0055b8]">{featuredPost.category}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {featuredPost.date}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5 leading-tight group-hover:text-[#0055b8] transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-2 text-[#0055b8] font-semibold group-hover:gap-3 transition-all">
                  Baca Selengkapnya
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((item) => (
            <article
              key={item.id}
              className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <Link href={`/blog/${item.slug}`} className="flex flex-col h-full">
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-[#0055b8] text-[11px] px-3 py-1 rounded-full font-bold shadow-sm uppercase tracking-wide">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold mb-3">
                    <Clock size={14} />
                    <span>{item.date}</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#0055b8] transition-colors line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <div className="mt-auto flex items-center gap-1.5 text-sm font-bold text-[#0055b8] group-hover:gap-2.5 transition-all">
                    Selengkapnya
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
