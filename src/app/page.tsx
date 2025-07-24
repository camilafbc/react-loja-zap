import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TabsSkeleton } from "@/components/products/sekeleton";
import { ProductsTab } from "@/components/products/tab";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full max-w-4xl mx-auto">
      <Header />
      <div className="mx-3 flex-grow">
        <Suspense fallback={<TabsSkeleton />}>
          <ProductsTab />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
