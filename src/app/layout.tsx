const RootLayout = ({ children }: Readonly<React.PropsWithChildren>) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
