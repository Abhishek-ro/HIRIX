import Image from 'next/image';
import { CheckCircle, Send } from 'lucide-react';

export default function InterviewComplete() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white px-4 py-10">

      <div className="flex flex-col items-center gap-4">
        <CheckCircle size={72} strokeWidth={1.5} className="text-green-500" />
        <h1 className="text-4xl font-semibold text-gray-900">
          Interview&nbsp;Complete!
        </h1>
        <p className="max-w-lg text-center text-gray-500">
          Thank you for participating in the AI-driven interview with&nbsp;
          <span className="font-medium text-gray-900">Hirix</span>
        </p>
      </div>


      <div className="mt-10 w-full max-w-4xl overflow-hidden rounded-xl">
        <Image
          src="/Comp.jpg" 
          alt="Two people sitting across a table during an interview"
          width={1280}
          height={380}
          className="h-auto w-full object-cover"
          priority
        />
      </div>

  
      <section className="mt-12 flex w-full max-w-xl flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
        <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
          <Send size={28} strokeWidth={1.5} className="text-blue-600" />
        </span>

        <h2 className="mb-2 text-2xl font-semibold text-gray-900">
          What’s&nbsp;Next?
        </h2>

        <p className="text-center text-gray-500">
          The recruiter will review your interview responses and will contact
          you soon regarding the next steps.
        </p>

        <p className="mt-6 flex items-center gap-2 text-sm text-gray-400">
          <span className="relative top-0.5 mr-1 block h-[6px] w-[6px] rounded-full bg-gray-400/60" />
          Response within&nbsp;2–3&nbsp;business&nbsp;days
        </p>
      </section>
      <footer className="mt-20 text-sm text-gray-400">
        © 2025 Hirix. All rights reserved.
      </footer>
    </main>
  );
}
