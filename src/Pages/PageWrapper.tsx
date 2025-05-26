import type { FC, ReactNode } from "react";

type PageProps = {
  children: ReactNode;
  Bg_Color:string
};

const PageWrapper: FC<PageProps> = ({ children,Bg_Color='bg-purple' }) => {
  return (
    <main className="h-dvh relative w-dvw overflow-hidden">
      <div className={`${Bg_Color} flex  h-full flex-col items-center justify-center gap-5 `}>
        {children}
      </div>
    </main>
  );
};

export default PageWrapper;
