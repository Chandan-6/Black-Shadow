import { Vortex } from "@/components/ui/vortex";
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast, Toaster } from "sonner";
import { ButtonsCard } from "@/components/ui/tailwind-buttons";

export default function Home() {
  return (
    <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Black Shadow
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Protecting the Twitter, Authenticity. It's All That Matters.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Let's Go
          </button>
        </div>
      </Vortex>
    </div>
  );
}
