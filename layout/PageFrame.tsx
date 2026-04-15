export default function PageFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[var(--page-bg)]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1280px] flex-col bg-[var(--page-bg)] xl:border-x xl:border-[var(--border-strong)]">
        {children}
      </div>
    </div>
  );
}

