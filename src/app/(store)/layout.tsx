export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pt-20 md:pt-32 min-h-screen">{children}</div>;
}
