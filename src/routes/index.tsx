import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Zap, Layers, Blocks, Quote } from "lucide-react";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lanzá Lab — Creá y lanzá apps web sin programar" },
      { name: "description", content: "Academia y agencia no-code: aprendé a crear, lanzar y escalar aplicaciones web sin escribir código." },
      { property: "og:title", content: "Lanzá Lab — Apps web sin programar" },
      { property: "og:description", content: "Aprendé a crear y lanzar tu app web en semanas, no meses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  { icon: Zap, title: "Rápido", text: "Del boceto a tu primera versión online en días. Validá tu idea antes que nadie." },
  { icon: Layers, title: "Escalable", text: "Bases de datos, usuarios y pagos reales. Tu app crece con tu negocio." },
  { icon: Blocks, title: "Sin código tradicional", text: "Construís con herramientas visuales e IA. Cero líneas de código obligatorias." },
];

const testimonials = [
  { name: "Valentina R.", role: "Fundadora de TurnoYa", text: "En 3 semanas lancé mi sistema de reservas. Hoy lo usan 40 consultorios." },
  { name: "Martín G.", role: "Consultor de RR.HH.", text: "Dejé de depender de programadores. Armé mi portal de clientes yo mismo." },
  { name: "Lucía P.", role: "Emprendedora", text: "El acompañamiento fue clave. Mi marketplace facturó en el primer mes." },
];

function Index() {
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-display text-xl font-bold">Lanzá<span className="text-primary">.</span>Lab</span>
        <a href="#cta" className="rounded-full border px-5 py-2 text-sm transition-colors hover:bg-secondary">Inscribite</a>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-10 md:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-secondary px-4 py-1 text-xs uppercase tracking-widest text-muted-foreground">Academia + Agencia No-Code</span>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] md:text-6xl">
            Tu idea, <span className="text-primary">online</span> en semanas.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Aprendé a crear y lanzar aplicaciones web reales sin programar. O dejá que nuestro equipo la construya con vos.
          </p>
          <a id="cta" href="#casos" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105">
            Empezá gratis <ArrowRight className="h-5 w-5" />
          </a>
        </div>
        <img src={hero} alt="Bloques de aplicación encastrándose" width={1280} height={1024} className="rounded-2xl border shadow-glow" />
      </section>

      <section className="border-y bg-card/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold md:text-5xl">Por qué no-code</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border bg-card p-8 transition-colors hover:border-primary">
                <Icon className="h-8 w-8 text-primary" />
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="casos" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-bold md:text-5xl">Casos de éxito</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-secondary p-8">
              <Quote className="h-6 w-6 text-primary" />
              <blockquote className="mt-4 text-lg">{t.text}</blockquote>
              <figcaption className="mt-6 text-sm">
                <div className="font-semibold">{t.name}</div>
                <div className="text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer className="border-t py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
          <span className="font-display font-bold text-foreground">Lanzá<span className="text-primary">.</span>Lab</span>
          <span>© 2026 Lanzá Lab. Hecho sin código.</span>
          <a href="mailto:hola@lanzalab.com" className="hover:text-primary">hola@lanzalab.com</a>
        </div>
      </footer>
    </div>
  );
}
