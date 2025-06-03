
import { Leaf, Sparkles, Gift } from "lucide-react";

export const PromiseSection = () => (
    <section className="py-20 bg-pink-50/30">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900">
            The Blushberry Difference
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Beauty that aligns with your values. Pure, potent, and always
            principled.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 text-center">
          <div className="p-6">
            <div className="flex justify-center items-center mb-5 w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-400 text-white mx-auto shadow-lg">
              <Leaf size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Consciously Crafted
            </h3>
            <p className="text-gray-600 text-sm">
              Ethically sourced ingredients, 100% cruelty-free. Beauty that feels
              good, inside and out.
            </p>
          </div>
          <div className="p-6">
            <div className="flex justify-center items-center mb-5 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 text-white mx-auto shadow-lg">
              <Sparkles size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Visible Radiance
            </h3>
            <p className="text-gray-600 text-sm">
              Formulated for efficacy. Experience transformative results you can
              see and feel.
            </p>
          </div>
          <div className="p-6">
            <div className="flex justify-center items-center mb-5 w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-yellow-400 text-white mx-auto shadow-lg">
              <Gift size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Exquisite Experience
            </h3>
            <p className="text-gray-600 text-sm">
              From our packaging to your daily ritual, indulge in a touch of
              luxury.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

