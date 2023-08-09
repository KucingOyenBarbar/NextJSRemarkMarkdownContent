import ProfileImage from "./components/ProfileImage";
import { getSortedPostsData } from "@/lib/getSortedPostsData";
import PostsItem from "./posts/components/PostsItem";

export const revalidate = 10;

export default function Home() {
  const posts = getSortedPostsData();
  return (
    <main className="min-h-screen px-10 mb-28">
      <section className="max-w-4xl mx-auto scroll-mt-20">
        <ProfileImage />
        <p className="mt-12 mb-12 text-3xl text-center dark:text-gray-200">
          Hello and Welcome 👋&nbsp;
          <span className="whitespace-nowrap">
            I&apos;m <span className="font-bold">Farhan</span>.
          </span>
        </p>
        <p className="text-2xl font-serif font-normal text-center text-gray-200 py-4 mb-10">
          Saya seorang mahasiswa jurusan Ilmu Komputer yang sangat tertarik
          dengan bidang teknologi web saat ini. Setelah itu saya magang di
          kampus merdeka dengan mitra solutif selama 5 bulan. Melalui pengalaman
          ini, saya menyadari bahwa menjadi software developer adalah langkah
          yang tepat untuk mengimplementasikan atau mempraktekkan hasil
          pembelajaran kurang dari 3 tahun, baik di perkuliahan maupun di luar
          perkuliahan.
        </p>
        <hr className="text-black dark:text-slate-300 w-4/6 mx-auto" />
      </section>

      <section className="max-w-4xl mx-auto scroll-mt-20 pt-8">
        <h1 className="text-4xl font-bold dark:text-white/90">Posts</h1>

        <div className="pt-4">
          <ul className="w-full">
            {posts.map((post) => (
              <PostsItem key={post.id} post={post} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
