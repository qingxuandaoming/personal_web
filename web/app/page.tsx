import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-56px)] max-w-5xl flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold text-[var(--color-foreground)]">个人网站</h1>
      <p className="mt-4 max-w-xl text-center text-[var(--color-foreground)] opacity-70">展示技能与作品，连接机会与伙伴。</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link href="/projects" className="rounded-md bg-primary-600 px-5 py-2.5 text-white">查看项目</Link>
        <Link href="/blog" className="rounded-md border px-5 py-2.5 text-[var(--color-foreground)]">阅读博客</Link>
      </div>
    </main>
  );
}
