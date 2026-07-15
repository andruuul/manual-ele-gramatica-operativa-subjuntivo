import { CircleCheckBig } from 'lucide-react';

import photoPerson from '../assets/images/photo-person-glasses.webp';
import sketchPerson from '../assets/images/sketch-person-glasses.webp';

export default function OperationalComparison() {
  return (
    <section className="my-12">

      <div className="border-b border-[#D8D6CF] pb-2 mb-8">

        <span className="text-[10px] uppercase tracking-[0.2em] font-mono font-bold text-gray-500">
          Modelo Operativo
        </span>

        <h2 className="mt-2 text-xl md:text-2xl font-display font-bold text-[#5A7D4D]">
          Foto vs. Sketch
        </h2>

        <p className="mt-2 text-gray-600 max-w-3xl">
          Una imagen mental para decidir cuándo usar el indicativo y cuándo usar el subjuntivo.
        </p>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* ================= INDICATIVO ================= */}

        <article className="rounded-xl border border-[#5A7D4D]/20 bg-white overflow-hidden shadow-sm">

          <div className="bg-[#F2F1EC] border-b border-[#D8D6CF] px-6 py-4">

            <span className="text-[10px] uppercase font-mono font-bold tracking-wide text-[#5A7D4D]">
              Indicativo
            </span>

            <h3 className="mt-2 text-2xl font-display font-bold text-[#5A7D4D]">
              Una foto
            </h3>

          </div>

        <div className="px-6 pt-6">

            <p className="text-center text-lg font-display font-semibold text-[#2F3437] mb-4">
                Una persona que <span className="text-[#5A7D4D]">tiene</span> lentes
            </p>

            <img
                src={photoPerson}
                alt="Persona que tiene lentes"
                className="mx-auto max-h-80 w-auto rounded-lg border border-[#D8D6CF]"
            />

        </div>

          <div className="p-6">

            <div className="space-y-4">

              <div className="flex items-start gap-3">
                <CircleCheckBig
                  size={18}
                  strokeWidth={1.8}
                  className="text-[#5A7D4D] shrink-0 mt-0.5"
                />
                <p>Es como una <strong>foto</strong> de la realidad.</p>
              </div>

              <div className="flex items-start gap-3">
                <CircleCheckBig
                  size={18}
                  strokeWidth={1.8}
                  className="text-[#5A7D4D] shrink-0 mt-0.5"
                />
                <p>Hablas de algo que <strong>conoces</strong> o <strong>puedes identificar</strong>.</p>
              </div>

              <div className="flex items-start gap-3">
                <CircleCheckBig
                  size={18}
                  strokeWidth={1.8}
                  className="text-[#5A7D4D] shrink-0 mt-0.5"
                />
                <p>Das información sobre algo que para ti <strong>es un hecho</strong>.</p>
              </div>

              <div className="flex items-start gap-3">
                <CircleCheckBig
                  size={18}
                  strokeWidth={1.8}
                  className="text-[#5A7D4D] shrink-0 mt-0.5"
                />
                <p><strong>Declaras</strong> información sobre algo real para ti.</p>
              </div>

            </div>

            <div className="mt-8 border-l-4 border-[#5A7D4D] pl-4">

              <p className="text-xs uppercase tracking-wide font-mono font-bold text-[#5A7D4D] mb-2">
                Ejemplo
              </p>

              <p className="italic">
                Busco el libro que <strong>tiene</strong> fotos de Madrid.
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Sé cuál es el libro.
              </p>

            </div>

          </div>

        </article>

        {/* ================= SUBJUNTIVO ================= */}

        <article className="rounded-xl border border-[#C97C5D]/20 bg-white overflow-hidden shadow-sm">

          <div className="bg-[#FAF5E7] border-b border-[#D8D6CF] px-6 py-4">

            <span className="text-[10px] uppercase font-mono font-bold tracking-wide text-[#C97C5D]">
              Subjuntivo
            </span>

            <h3 className="mt-2 text-2xl font-display font-bold text-[#C97C5D]">
              Un sketch
            </h3>

          </div>

          <div className="px-6 pt-6">

            <p className="text-center text-lg font-display font-semibold text-[#2F3437] mb-4">
                Una persona que <span className="text-[#C97C5D]">tenga</span> lentes
            </p>

            <img
                src={sketchPerson}
                alt="Persona que tenga lentes"
                className="mx-auto max-h-80 w-auto rounded-lg border border-[#D8D6CF]"
            />

            </div>

          <div className="p-6">

            <div className="space-y-4">

              <div className="flex items-start gap-3">
                <CircleCheckBig
                  size={18}
                  strokeWidth={1.8}
                  className="text-[#C97C5D] shrink-0 mt-0.5"
                />
                <p>Es como un <strong>sketch</strong> de una idea.</p>
              </div>

              <div className="flex items-start gap-3">
                <CircleCheckBig
                  size={18}
                  strokeWidth={1.8}
                  className="text-[#C97C5D] shrink-0 mt-0.5"
                />
                <p>Hablas de algo que <strong>todavía no conoces</strong> o <strong>no puedes identificar</strong>.</p>
              </div>

              <div className="flex items-start gap-3">
                <CircleCheckBig
                  size={18}
                  strokeWidth={1.8}
                  className="text-[#C97C5D] shrink-0 mt-0.5"
                />
                <p>Solo describes <strong>la idea</strong> de lo que buscas, quieres o imaginas.</p>
              </div>

              <div className="flex items-start gap-3">
                <CircleCheckBig
                  size={18}
                  strokeWidth={1.8}
                  className="text-[#C97C5D] shrink-0 mt-0.5"
                />
                <p><strong>No declaras</strong> que exista; solo mencionas una posibilidad o una idea.</p>
              </div>

            </div>

            <div className="mt-8 border-l-4 border-[#C97C5D] pl-4">

              <p className="text-xs uppercase tracking-wide font-mono font-bold text-[#C97C5D] mb-2">
                Ejemplo
              </p>

              <p className="italic">
                Busco un libro que <strong>tenga</strong> fotos de Madrid.
              </p>

              <p className="mt-2 text-sm text-gray-500">
                No sé si existe ni cuál es.
              </p>

            </div>

          </div>

        </article>

      </div>

      <div className="mt-10 rounded-xl border border-[#D8D6CF] bg-[#F2F1EC] px-6 py-5">

        <p className="text-center text-[#2F3437] leading-relaxed">

          <span className="font-display font-bold text-[#5A7D4D]">
            Idea clave:
          </span>

          {' '}
          El <strong>indicativo</strong> presenta una entidad que el hablante ya puede identificar.
          El <strong>subjuntivo</strong> presenta únicamente el perfil o la idea de una entidad que todavía no puede identificar.

        </p>

      </div>

    </section>
  );
}