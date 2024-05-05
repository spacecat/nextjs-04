import Link from "next/link";

export default function Page() {
  return (
    <>
      <div>Dashboard</div>
      <Link href="/dashboard/blog">To Blog</Link>
    </>
  );
}
