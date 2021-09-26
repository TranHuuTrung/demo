interface AuthLayoutProps {
  children: Element;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <div>{children}</div>;
}
