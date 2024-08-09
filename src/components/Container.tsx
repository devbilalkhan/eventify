export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <section className="max-w-7xl flex flex-col min-h-screen mx-auto bg-white/[2%]">
      {children}
    </section>
  );
}
