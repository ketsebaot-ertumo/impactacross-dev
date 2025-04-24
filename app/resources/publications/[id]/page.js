"use client";

import { useEffect, useState } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import Loader from "../../../components/Loader";
import { Download } from "lucide-react";
import { getSinglePublicationPost } from "../../../lib/routes";

export default function PublicationDetail() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadPost = async () => {
      try {
        const latestPost = await getSinglePublicationPost(id);
        if (latestPost) {
          setPost( latestPost );
        }
      } catch (err) {
        toast.error('Could Not Load Publication Data.');
        console.error("Could not load publication data",err);
        setError("Could not load publication data.");
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [id]);

  if (loading) return <Loader />;

  return (
    <>
        <Header />

        {(!post || !post?.id) ? (
            <main className="container max-w-6xl mx-auto px-6 py-20 text-center min-h-[70vh] flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-red-500 mb-4">❌ Oops!</h1>
                <p className="text-gray-600 text-lg">"No Publication Post Found.</p>
            </main>
        ) :(
            <div>
                <section className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh] w-full flex items-center justify-center overflow-hidden">
                    <Image
                      src={post.imageURL}
                      alt={post.title}
                      fill
                      className="object-cover brightness-[0.5]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                    <div className="z-20 text-center px-6">
                      <h1 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg">
                          {post.title}
                      </h1>
                      <p className="mt-4 text-gray-300 text-sm">
                          {post.author && `By ${post.author}`} &bull;{" "}
                          {post?.published_at &&
                            new Date(post.published_at).toLocaleDateString("en-US", {
                              year: "numeric", month: "long", day: "numeric",}
                          )}
                      </p>
                    </div>
                </section>

                {/* Content Card with Glass Effect */}
                <section className="max-w-5xl mx-auto -mt-20 px-4 sm:px-6 lg:px-8 relative z-20">
                    <div className="bg-white/80 dark:bg-white/10 backdrop-blur-lg shadow-xl rounded-3xl p-6 sm:p-10 lg:p-14 transition-all duration-300">
                    <div className="relative w-full h-60 md:h-80 lg:h-[28rem] mb-10 rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={post.imageURL}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                    </div>
                    <article className="prose prose-lg md:prose-xl prose-gray max-w-none text-gray-800">
                        <p>{post.content}</p>
                    </article>
                
                    {/* Floating File Download */}
                    {post?.fileURL && (
                      <div className="mt-12 text-center">
                        <a
                          href={post?.fileURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-gradient-to-tr from-blue-300 to-blue-500 hover:from-blue-600 hover:to-blue-300 text-white px-6 py-3 rounded-full text-base font-medium shadow-lg transition-all duration-200 hover:scale-105"
                        >
                          <Download className="w-5 h-5" />
                            Download PDF
                        </a>
                      </div>
                    )}
                  </div>
                </section>
                    
                <Footer />
            </div>
        )}
    </>
  );
}