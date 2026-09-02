import Image from 'next/image';
import Link from 'next/link';
import { withBasePath } from '@/lib/base-path';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Download,
  Layers3,
} from 'lucide-react';

const hierarchy = [
  { level: 'I', label: 'Single vs dual', detail: 'Primary routing' },
  { level: 'II', label: '12 classes', detail: 'Single localization' },
  { level: 'III', label: '9 pairs', detail: 'Dual localization' },
  { level: 'IV', label: 'Membrane type', detail: 'Single- or multi-pass' },
];

export default function Home() {
  return (
    <div className="space-y-10 pb-10 pt-4 sm:space-y-14 sm:pt-8">
      <section className="relative overflow-hidden rounded-[2rem] border border-[#cfe1de] bg-[#f6f8f6] px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
        <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border-[52px] border-[#d8ebe8]/70" />
        <div className="pointer-events-none absolute bottom-0 right-[36%] h-24 w-24 translate-y-1/2 rounded-full bg-[#7454a6]/10" />

        <div className="relative grid gap-10 lg:grid-cols-[1.35fr_0.85fr] lg:items-end">
          <div>
            <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#218870]">
              <span className="h-px w-8 bg-[#218870]" />
              Arabidopsis proteome annotation
            </p>
            <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-[#082b3b] sm:text-5xl lg:text-6xl">
              Protein localization,
              <span className="block italic text-[#218870]">resolved for Arabidopsis.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              AtSubP-2.0 uses an Arabidopsis-specific convolutional neural network to predict where proteins act within the cell—from a single FASTA sequence to a four-level localization report.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/prediction"
                className="inline-flex items-center gap-2 rounded-full bg-[#218870] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(33,136,112,0.22)] transition hover:-translate-y-0.5 hover:bg-[#176d5b]"
              >
                Run a prediction <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/download"
                className="inline-flex items-center gap-2 rounded-full border border-[#bdd4cf] bg-white/80 px-6 py-3 text-sm font-bold text-[#185c4e] transition hover:-translate-y-0.5 hover:border-[#218870]"
              >
                <Download className="h-4 w-4" /> Standalone package
              </Link>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/80 bg-white/75 p-3 shadow-[0_20px_60px_rgba(8,43,59,0.08)] backdrop-blur">
            <div className="flex items-center justify-between px-3 pb-3 pt-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#218870]">Prediction hierarchy</p>
                <p className="mt-1 text-sm text-slate-500">One sequence, four decisions</p>
              </div>
              <Layers3 className="h-5 w-5 text-[#218870]" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {hierarchy.map((item) => (
                <div key={item.level} className="rounded-2xl border border-[#dce8e5] bg-[#fbfcfb] p-4">
                  <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#7454a6]">Level {item.level}</span>
                  <p className="mt-2 text-sm font-extrabold text-[#082b3b]">{item.label}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="workflow-title">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#218870]">From sequence to compartment</p>
            <h2 id="workflow-title" className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[#082b3b] sm:text-4xl">
              The complete prediction workflow
            </h2>
          </div>
          <p className="text-sm font-semibold text-slate-500">TPC · 8,000 features · CNN</p>
        </div>

        <figure className="overflow-hidden rounded-[1.75rem] border border-[#d7e4e1] bg-[#fbfbf8] p-2 shadow-[0_24px_70px_rgba(8,43,59,0.10)] sm:p-4">
          <Image
            src={withBasePath('/assets/images/atsubp2_workflow_acd.png')}
            alt="AtSubP-2.0 workflow from Arabidopsis protein sequence and tripeptide composition through a convolutional neural network and four-level localization hierarchy"
            width={1608}
            height={978}
            sizes="(min-width: 1280px) 1216px, calc(100vw - 32px)"
            priority
            className="h-auto w-full rounded-[1.15rem]"
          />
          <figcaption className="flex flex-col gap-1 px-3 pb-2 pt-4 text-xs leading-5 text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <span>AtSubP-2.0 four-level protein subcellular localization workflow.</span>
            <span>Generic query rows illustrate the report format.</span>
          </figcaption>
        </figure>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="rounded-[1.75rem] border border-slate-200 bg-white p-7 sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#218870]">Why species-specific?</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[#082b3b]">Built around the Arabidopsis proteome</h2>
          <div className="mt-5 grid gap-5 text-[15px] leading-7 text-slate-600 sm:grid-cols-2">
            <p>
              <em className="font-semibold text-slate-800">Arabidopsis thaliana</em> is a foundational model for plant biology. Knowing where its proteins localize helps researchers interpret trafficking, interactions, regulation, and organelle-specific function.
            </p>
            <p>
              AtSubP-2.0 converts each sequence into an 8,000-dimensional tripeptide-composition vector and applies CNN models across four linked localization levels.
            </p>
          </div>
        </article>

        <aside className="flex flex-col justify-between rounded-[1.75rem] bg-[#082b3b] p-7 text-white sm:p-9">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8ed9cb]">Ready to analyze?</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold">Start with a protein sequence.</h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">Paste FASTA, upload a file, or provide NCBI and UniProt accessions.</p>
          </div>
          <Link href="/prediction" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#a4eadc] hover:text-white">
            Open the prediction server <ArrowUpRight className="h-4 w-4" />
          </Link>
        </aside>
      </section>

      <section className="rounded-[1.75rem] border border-[#d7e4e1] bg-[#f7f9f8] p-6 sm:p-8" aria-labelledby="citation-title">
        <div className="grid gap-5 lg:grid-cols-[220px_1fr] lg:items-start">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#deeeea] text-[#218870]">
              <BookOpen className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#218870]">Publication</p>
              <h2 id="citation-title" className="mt-1 font-bold text-[#082b3b]">Please cite AtSubP-2.0</h2>
            </div>
          </div>
          <div className="border-t border-[#d7e4e1] pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
            <cite className="block not-italic text-sm font-semibold leading-6 text-slate-700">
              Duhan, N., &amp; Kaundal, R. (2025). AtSubP-2.0: An integrated web server for the annotation of Arabidopsis proteome subcellular localization using deep learning. <em>The Plant Genome, 18</em>(1), e20536.
            </cite>
            <a
              href="https://doi.org/10.1002/tpg2.20536"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-[#218870] hover:underline"
            >
              DOI: 10.1002/tpg2.20536 <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
