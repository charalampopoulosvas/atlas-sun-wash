import { createFileRoute } from "@tanstack/react-router";
import heroSplit from "@/assets/hero-split.jpg.asset.json";
import roofSunset from "@/assets/roof-sunset.jpg.asset.json";
import robotField from "@/assets/robot-field.jpg.asset.json";
import robotCleaning from "@/assets/robot-cleaning.jpg.asset.json";
import robotCloseup from "@/assets/robot-closeup.jpg.asset.json";
import aerialLarge from "@/assets/aerial-large.jpg.asset.json";
import aerialIndustrial from "@/assets/aerial-industrial.jpg.asset.json";
import installKallas from "@/assets/install-kallas.jpg.asset.json";
import installTeam from "@/assets/install-team.jpg.asset.json";
import atlasLogo from "@/assets/atlas-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atlas EU | Ρομποτικός Καθαρισμός & Εγκατάσταση Φωτοβολταϊκών" },
      { name: "description", content: "Ρομποτικός καθαρισμός φωτοβολταϊκών με SolarCleano F1 και ολοκληρωμένες εγκαταστάσεις Φ/Β σε όλη την Ελλάδα. Από το 2010." },
      { property: "og:title", content: "Atlas EU | Ρομποτικός Καθαρισμός & Εγκατάσταση Φωτοβολταϊκών" },
      { property: "og:description", content: "Μέγιστη απόδοση κάθε φωτοβολταϊκής εγκατάστασης με τεχνολογία αιχμής." },
      { property: "og:image", content: heroSplit.url },
      { name: "twitter:image", content: heroSplit.url },
    ],
  }),
  component: Index,
});

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <img src={atlasLogo.url} alt="Atlas EU" className="h-9 w-auto" />
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#services" className="transition-colors hover:text-solar">Υπηρεσίες</a>
          <a href="#robot" className="transition-colors hover:text-solar">SolarCleano F1</a>
          <a href="#projects" className="transition-colors hover:text-solar">Έργα</a>
          <a href="#about" className="transition-colors hover:text-solar">Εταιρεία</a>
          <a href="#contact" className="transition-colors hover:text-solar">Επικοινωνία</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-ink px-5 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.02] active:scale-95"
        >
          Ζητήστε προσφορά
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-gradient-solar opacity-20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-16 md:pt-24 lg:grid-cols-12 lg:gap-16 lg:pb-28">
        <div className="lg:col-span-7 fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-solar/30 bg-solar/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
            <span className="size-1.5 animate-pulse rounded-full bg-solar" />
            Από το 2010 · 8.5 MW πλυσιμάτων
          </div>
          <h1 className="font-display text-balance text-5xl font-semibold leading-[1.02] text-ink md:text-6xl lg:text-7xl">
            Κάθε χαμένο kWh<br />
            είναι <span className="text-solar">χαμένο κέρδος.</span>
          </h1>
          <p className="mt-7 max-w-[58ch] text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Στην Atlas EU συνδυάζουμε εμπειρία, τεχνογνωσία και σύγχρονο εξοπλισμό για να
            εξασφαλίζουμε τη μέγιστη απόδοση κάθε φωτοβολταϊκής εγκατάστασης — από
            τον ρομποτικό καθαρισμό με <em className="not-italic font-medium text-ink">SolarCleano F1</em> έως
            ολοκληρωμένες εγκαταστάσεις Φ/Β.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
            >
              Ζητήστε δωρεάν προσφορά
              <span className="grid size-6 place-items-center rounded-full bg-solar text-ink transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a href="#services" className="text-sm font-medium text-ink underline decoration-solar decoration-2 underline-offset-4">
              Δείτε τις υπηρεσίες
            </a>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8 text-ink">
            <div><dt className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Από</dt><dd className="mt-1 font-display text-2xl font-semibold">2010</dd></div>
            <div><dt className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Πλυσίματα</dt><dd className="mt-1 font-display text-2xl font-semibold">8.5<span className="text-solar">MW</span></dd></div>
            <div><dt className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Εγκαταστάσεις</dt><dd className="mt-1 font-display text-2xl font-semibold">1<span className="text-solar">MW+</span></dd></div>
          </dl>
        </div>
        <div className="relative lg:col-span-5 fade-up">
          <div className="shimmer relative overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-glow">
            <img src={roofSunset.url} alt="Ρομποτικός καθαρισμός φωτοβολταϊκών σε βιομηχανική στέγη στο ηλιοβασίλεμα" className="aspect-[4/5] h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 max-w-[220px] rounded-xl border border-border bg-background/95 p-4 shadow-soft backdrop-blur">
            <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Ταχύτητα Ρομπότ</div>
            <div className="mt-1 font-display text-3xl font-semibold text-ink">40<span className="text-solar">m</span>/min</div>
            <div className="text-xs text-muted-foreground">10× ταχύτερα από χειροκίνητα</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Ρομποτικός Καθαρισμός",
    "Εγκαταστάσεις Φ/Β",
    "Απιονισμένο Νερό",
    "SolarCleano F1",
    "Βιομηχανικές Στέγες",
    "Συντήρηση Εγκαταστάσεων",
  ];
  return (
    <div className="border-y border-border bg-secondary">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-10 gap-y-3 px-6 py-5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {items.map((t) => (
          <span key={t} className="flex items-center gap-2"><span className="size-1 rounded-full bg-solar" />{t}</span>
        ))}
      </div>
    </div>
  );
}

function Services() {
  const services = [
    {
      tag: "01 / Καθαρισμός",
      title: "Ρομποτικός Καθαρισμός Φωτοβολταϊκών",
      body: "Με το SolarCleano F1 και απιονισμένο νερό, απομακρύνουμε σκόνη, γύρη και ρύπους χωρίς χημικά. Η καθαρή επιφάνεια σημαίνει μεγαλύτερη απορρόφηση ηλιακής ακτινοβολίας και αυξημένη παραγωγή ενέργειας.",
      bullets: ["Καθαρισμός 10× ταχύτερος", "Μηδενικός κίνδυνος ζημιών", "Φιλικός προς το περιβάλλον"],
      img: robotCleaning.url,
      alt: "Ρομπότ SolarCleano F1 σε λειτουργία πάνω σε φωτοβολταϊκά πάνελ",
    },
    {
      tag: "02 / Εγκαταστάσεις",
      title: "Ολοκληρωμένες Εγκαταστάσεις Φ/Β",
      body: "Από τη μελέτη και τις βάσεις έως καλωδιώσεις DC/AC και τη σύνδεση. Πάνω από 1MW έργων σε επαγγελματικές και βιομηχανικές στέγες σε όλη την Ελλάδα.",
      bullets: ["Πλήρης μελέτη & σχεδιασμός", "Τήρηση μέτρων ασφαλείας", "Εξειδικευμένοι μηχανικοί"],
      img: installKallas.url,
      alt: "Συνεργείο της Atlas EU σε εγκατάσταση φωτοβολταϊκών σε βιομηχανική στέγη",
    },
  ];
  return (
    <section id="services" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[44ch]">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-solar">// Υπηρεσίες</div>
            <h2 className="text-balance font-display text-4xl font-semibold text-ink md:text-5xl">
              Δύο εξειδικεύσεις. Ένας στόχος: μέγιστη απόδοση.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-muted-foreground">
            Επαγγελματικός καθαρισμός για μεγαλύτερη αξιοπιστία και καλύτερη επένδυση —
            σε συνδυασμό με πιστοποιημένες εγκαταστάσεις από εξειδικευμένη ομάδα μηχανικών.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {services.map((s) => (
            <article key={s.title} className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-soft">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full bg-background/90 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-ink backdrop-blur">
                  {s.tag}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-2xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <ul className="mt-6 space-y-2 text-sm text-ink">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-solar" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RobotSection() {
  const specs = [
    { label: "Ταχύτητα", value: "40 m / min" },
    { label: "Καθαρισμός", value: "10× ταχύτερα" },
    { label: "Έλεγχος", value: "Τηλεχειρισμός" },
    { label: "Φθορές", value: "0% κίνδυνος" },
  ];
  return (
    <section id="robot" className="relative overflow-hidden bg-ink text-primary-foreground grain">
      <div className="pointer-events-none absolute -left-40 top-20 size-[500px] rounded-full bg-solar/20 blur-[120px]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-24 md:py-32 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-solar">// SolarCleano F1</div>
          <h2 className="text-balance font-display text-4xl font-semibold leading-tight md:text-5xl">
            Καινοτόμος ρομποτικός καθαρισμός. Ταχύτητα, ασφάλεια, ακρίβεια.
          </h2>
          <p className="mt-6 max-w-[55ch] text-pretty text-base leading-relaxed text-white/70">
            Σε αντίθεση με τις παραδοσιακές χειροκίνητες μεθόδους, το ρομπότ SolarCleano F1
            προσφέρει σταθερά υψηλή ποιότητα καθαρισμού. Οι χειριστές ελέγχουν τη διαδικασία εξ
            αποστάσεως, μειώνοντας τον κίνδυνο εργατικών ατυχημάτων, ενώ τα ειδικά λαστιχάκια
            διασφαλίζουν ομαλή κίνηση χωρίς φθορές στα πάνελ.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10">
            {specs.map((s) => (
              <div key={s.label} className="bg-ink p-5">
                <dt className="font-mono text-[10px] uppercase tracking-widest text-white/50">{s.label}</dt>
                <dd className="mt-2 font-display text-2xl font-semibold text-solar">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-4 lg:gap-5">
            <div className="col-span-2 overflow-hidden rounded-2xl ring-1 ring-white/10">
              <img src={robotCloseup.url} alt="Λεπτομέρεια του ρομπότ SolarCleano F1 σε καθαρισμό πάνελ" className="aspect-[16/9] w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
              <img src={robotField.url} alt="Ρομπότ SolarCleano F1 σε ηλιακό πάρκο" className="aspect-square w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
              <img src={hero.url} alt="Ρομπότ καθαρισμού πάνω σε πάνελ" className="aspect-square w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// alias to reuse hero-split inside RobotSection grid
const hero = heroSplit;

function Projects() {
  const items = [
    { kw: "600 kW", title: "Καθαρισμός φωτοβολταϊκού σταθμού", body: "Ένα ιδιαίτερα απαιτητικό έργο που ολοκληρώθηκε με απόλυτη επιτυχία, με ασφαλή εκτέλεση εργασιών και μέγιστη απόδοση συστήματος.", img: aerialLarge.url, alt: "Αεροφωτογραφία μεγάλης βιομηχανικής στέγης με φωτοβολταϊκά" },
    { kw: "120 kW", title: "Καθαρισμός Φ/Β συστήματος", body: "Επαναφέραμε τα πάνελ στην καλύτερη δυνατή κατάσταση. Καθαρή επιφάνεια = μεγαλύτερη απορρόφηση, αυξημένη παραγωγή, καλύτερη απόδοση επένδυσης.", img: aerialIndustrial.url, alt: "Αεροφωτογραφία βιομηχανικής εγκατάστασης φωτοβολταϊκών" },
    { kw: "1 MW+", title: "Εγκαταστάσεις σε όλη την Ελλάδα", body: "Από τοποθέτηση βάσεων, πάνελ, καλωδιώσεις DC και AC έως την τελική σύνδεση και λειτουργία — με σχολαστική τήρηση των κανόνων ασφαλείας.", img: installTeam.url, alt: "Συνεργείο της Atlas EU σε εργασίες εγκατάστασης Φ/Β" },
  ];
  return (
    <section id="projects" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-solar">// Επιλεγμένα Έργα</div>
            <h2 className="text-balance font-display text-4xl font-semibold text-ink md:text-5xl">Η διαφορά δεν φαίνεται μόνο…<br />μετριέται.</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((p) => (
            <article key={p.title} className="group flex flex-col overflow-hidden rounded-2xl bg-background ring-1 ring-border">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="font-display text-3xl font-semibold text-solar">{p.kw}</div>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const strengths = [
    { t: "Εξειδίκευση", d: "Απόλυτη τεχνογνωσία στον τομέα της ηλιακής ενέργειας." },
    { t: "Εμπειρία", d: "Πάνω από μια δεκαετία και έργα κάθε κλίμακας." },
    { t: "Συνέπεια", d: "Από τη μελέτη έως την παράδοση, με απόλυτη επαγγελματικότητα." },
    { t: "Ταχύτητα", d: "Άμεση ανταπόκριση και γρήγοροι χρόνοι υλοποίησης." },
  ];
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-2xl ring-1 ring-border">
            <img src={heroSplit.url} alt="Atlas EU — ρομποτικός καθαρισμός και εγκαταστάσεις φωτοβολταϊκών" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-solar">// Σχετικά με εμάς</div>
          <h2 className="text-balance font-display text-4xl font-semibold text-ink md:text-5xl">
            ΑΤΛΑΣ EU — Καινοτομία & αξιοπιστία στις ενεργειακές κατασκευές.
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            Η εταιρεία «ΑΤΛΑΣ EU» ιδρύθηκε το <strong className="font-semibold text-ink">2010</strong> από μια ομάδα έμπειρων μηχανικών με
            εξειδίκευση στις ειδικές ενεργειακές κατασκευές. Έχει εδραιωθεί ως μια από τις πλέον αξιόπιστες
            στον κλάδο των μεγάλων συστημάτων ενέργειας, παρέχοντας ολοκληρωμένες λύσεις υψηλής ποιότητας.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Η φιλοσοφία μας συνοψίζεται στη φράση: <em className="not-italic font-medium text-ink">«Συνεργάτης με προοπτική»</em>. Πιστεύουμε
            ότι η επιτυχία έρχεται μέσα από σχέσεις αμοιβαίας εμπιστοσύνης — κάθε πελάτης είναι ένας
            πολύτιμος συνεργάτης.
          </p>
          <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {strengths.map((s) => (
              <div key={s.t} className="border-l-2 border-solar pl-4">
                <dt className="font-display text-lg font-semibold text-ink">{s.t}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{s.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl bg-ink p-8 text-primary-foreground shadow-soft md:p-14 lg:p-16 grain">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-solar">// Επικοινωνία</div>
              <h2 className="text-balance font-display text-4xl font-semibold leading-tight md:text-5xl">
                Δώσε στα φωτοβολταϊκά σου τη φροντίδα που <span className="text-solar">αξίζουν.</span>
              </h2>
              <p className="mt-6 max-w-[52ch] text-white/70">
                Επικοινώνησε μαζί μας για να λάβεις προσφορά για τον πλήρες καθαρισμό ή την εγκατάσταση
                της φωτοβολταϊκής σου εγκατάστασης.
              </p>
              <ul className="mt-10 space-y-5">
                <li className="flex items-center gap-4">
                  <span className="grid size-11 place-items-center rounded-full bg-solar/15 text-solar font-mono">☎</span>
                  <a href="tel:+302106896000" className="font-display text-xl font-semibold transition-colors hover:text-solar">
                    21 0689 6000
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="grid size-11 place-items-center rounded-full bg-solar/15 text-solar font-mono">@</span>
                  <a href="mailto:sales@atlaseu.gr" className="font-display text-xl font-semibold transition-colors hover:text-solar">
                    sales@atlaseu.gr
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="grid size-11 place-items-center rounded-full bg-solar/15 text-solar font-mono">⌘</span>
                  <span className="font-display text-xl font-semibold">atlaseu.gr</span>
                </li>
              </ul>
            </div>
            <form
              className="lg:col-span-5"
              onSubmit={(e) => {
                e.preventDefault();
                const f = e.currentTarget as HTMLFormElement;
                const data = new FormData(f);
                const body = encodeURIComponent(
                  `Όνομα: ${data.get("name")}\nΤηλέφωνο: ${data.get("phone")}\nΥπηρεσία: ${data.get("service")}\n\n${data.get("message")}`,
                );
                window.location.href = `mailto:sales@atlaseu.gr?subject=${encodeURIComponent("Αίτημα προσφοράς από atlaseu.gr")}&body=${body}`;
              }}
            >
              <div className="space-y-4 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
                <Field label="Ονοματεπώνυμο" name="name" type="text" required />
                <Field label="Τηλέφωνο" name="phone" type="tel" required />
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-white/60">Υπηρεσία</label>
                  <select name="service" className="w-full rounded-md bg-white/5 px-3 py-2.5 text-sm text-white ring-1 ring-white/10 focus:outline-none focus:ring-solar">
                    <option className="bg-ink">Ρομποτικός καθαρισμός</option>
                    <option className="bg-ink">Εγκατάσταση Φ/Β</option>
                    <option className="bg-ink">Συντήρηση</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-white/60">Μήνυμα</label>
                  <textarea name="message" rows={3} className="w-full rounded-md bg-white/5 px-3 py-2.5 text-sm text-white ring-1 ring-white/10 focus:outline-none focus:ring-solar" placeholder="Λίγα λόγια για το έργο σας..." />
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-solar px-5 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.01] active:scale-95"
                >
                  Αποστολή αιτήματος →
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type, required }: { label: string; name: string; type: string; required?: boolean }) {
  return (
    <div className="space-y-1.5">
      <label className="font-mono text-[10px] uppercase tracking-widest text-white/60">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md bg-white/5 px-3 py-2.5 text-sm text-white ring-1 ring-white/10 focus:outline-none focus:ring-solar"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <img src={atlasLogo.url} alt="Atlas EU" className="h-7 w-auto" />
        </div>
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} Atlas EU · Engineered for light
        </p>
        <div className="flex gap-5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <a href="tel:+302106896000" className="hover:text-solar">21 0689 6000</a>
          <a href="mailto:sales@atlaseu.gr" className="hover:text-solar">sales@atlaseu.gr</a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <RobotSection />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
