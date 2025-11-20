"use client";
import Link from "next/link";
import ThemeToggle from "../ui/theme-toggle";

export default function Navbar() {
  return (
    <header className="flex h-14 items-center justify-between px-6 border-b border-zinc-200 dark:border-zinc-800 bg-[var(--color-muted)]">
      <Link href="/" className="text-lg font-semibold text-[var(--color-foreground)]">个人网站</Link>
      <nav className="flex items-center gap-4">
        <Link href="/about" className="text-sm text-[var(--color-foreground)] opacity-80 hover:opacity-100">关于</Link>
        <Link href="/projects" className="text-sm text-[var(--color-foreground)] opacity-80 hover:opacity-100">项目</Link>
        <Link href="/blog" className="text-sm text-[var(--color-foreground)] opacity-80 hover:opacity-100">博客</Link>
        <Link href="/contact" className="text-sm text-[var(--color-foreground)] opacity-80 hover:opacity-100">联系</Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}