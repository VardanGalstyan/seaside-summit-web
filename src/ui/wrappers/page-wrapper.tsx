const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <main className="[&>*:nth-child(even)]:bg-gray">{children}</main>;
};

export default PageWrapper;
