import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  ClipboardList,
  Factory,
  Link2,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  FileText,
  Mail,
  Phone,
  MapPin,
  Scale,
  Lock,
  Users,
  BadgeCheck,
} from "lucide-react";

// shadcn/ui
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

/**
 * Single-page marketing website for: Independent QA Mediation & Pre-Assurance
 * - Path A positioning: trusted specialist, low-volume, high-trust
 * - EDF-safe language: no AI hype, no sign-off claims, governance-first
 *
 * Customize constants below: company name, contact, regions, etc.
 */

const BRAND = {
  companyName: "LocArc LTD",
  tagline: "Construction QA Inspections • Independent Verification • Pre‑Assurance",
  location: "UK – Nationwide Construction Projects",
  email: "[your.email@domain.co.uk]",
  phone: "[+44 ...]",
  linkedinUrl: "[https://www.linkedin.com/in/your-profile]",
  // Optional: If you have a Calendly link, add it here.
  calendlyUrl: "",
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <div className="text-xs tracking-wide uppercase text-muted-foreground mb-2">{eyebrow}</div>
      )}
      <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">{title}</h2>
      {subtitle && <p className="text-muted-foreground mt-3">{subtitle}</p>}
    </div>
  );
}

function Pill({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
      <Icon className="h-4 w-4" />
      <span>{text}</span>
    </div>
  );
}

export default function QAMediationWebsite() {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("Enquiry: Independent QA Mediation & Pre-Assurance");
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\n\nMessage:\n${form.message}\n\n---\nSent via website contact form.`
    );
    return `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
  }, [form]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl border flex items-center justify-center">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="font-semibold leading-none">{BRAND.companyName}</div>
              <div className="text-xs text-muted-foreground">Construction QA • Inspections • Verification</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:underline" href="#services">Services</a>
            <a className="hover:underline" href="#how">How it works</a>
            <a className="hover:underline" href="#governance">Governance</a>
            <a className="hover:underline" href="#pilot">Pilot</a>
            <a className="hover:underline" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="secondary" className="hidden sm:inline-flex">
              <a href="#contact">Discuss a pilot</a>
            </Button>
            <Button asChild>
              <a href="#contact" className="inline-flex items-center gap-2">
                Enquire <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.5 }}>
            <div className="flex flex-wrap gap-2 mb-5">
              <Pill icon={BadgeCheck} text="Independent, senior-led" />
              <Pill icon={Lock} text="Advisory only — no sign-off" />
              <Pill icon={Scale} text="Governance-first, permissioned" />
            </div>

            <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
              Independent construction QA inspections and verification — <span className="text-muted-foreground">before quality issues turn into rework, delay, or dispute</span>.
            </h1>
            <p className="text-muted-foreground mt-5 max-w-3xl">
              LocArc LTD provides independent construction QA inspections, verification, and pre-assurance support for Tier 2–3 contractors, specialist trades, and off-site manufacturers. We focus on catching quality issues early, strengthening evidence packs, and improving traceability — without taking authority or approval away from delivery teams.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <a href="#contact" className="inline-flex items-center gap-2">
                  Start with a Construction QA Readiness Review <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="#pilot" className="inline-flex items-center gap-2">
                  View pilot scope <FileText className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: ClipboardList,
                  title: "Pre-assurance reviews",
                  desc: "Strengthen ITPs, method statements, inspection records and evidence packs before submission.",
                },
                {
                  icon: Link2,
                  title: "LTQR readiness",
                  desc: "Improve factory-to-site traceability and reduce last-minute QA churn at hold points.",
                },
                {
                  icon: Factory,
                  title: "Off-site interface",
                  desc: "Bridge manufacturing QA outputs with site expectations and package interfaces.",
                },
              ].map((c) => (
                <Card key={c.title} className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <c.icon className="h-5 w-5" /> {c.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">{c.desc}</CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        <Separator />

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-4 py-14">
          <SectionTitle
            eyebrow="Services"
            title="Practical QA inspection and verification services"
            subtitle="Focused on readiness, evidence quality, and early risk reduction — not paperwork for its own sake."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Construction QA Readiness Review</span>
                  <Badge variant="secondary">Entry</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="text-muted-foreground">
                  A fast, package-level review to identify documentation gaps, traceability issues, and likely audit/hold-point exposure.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>ITP / method statement / records readiness</li>
                  <li>LTQR linkage check (where applicable)</li>
                  <li>Risk-ranked findings + corrective actions</li>
                </ul>
                <div className="pt-2">
                  <Button asChild variant="secondary" className="w-full">
                    <a href="#contact">Request a snapshot</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Independent QA Verification (Pilot Scope)</span>
                  <Badge>Governance-safe</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="text-muted-foreground">
                  A tightly scoped trial on one package, trade, or manufacturer to prove value without changing authority or contractual responsibility.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Fixed duration (typically 8–12 weeks)</li>
                  <li>Explicit inclusions/exclusions and stop points</li>
                  <li>Success indicators agreed in advance</li>
                </ul>
                <div className="pt-2">
                  <Button asChild className="w-full">
                    <a href="#pilot">View pilot boundaries</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Ongoing QA Inspection & Advisory Support</span>
                  <Badge variant="outline">Low-volume</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="text-muted-foreground">
                  Ongoing advisory support to catch issues early, reduce churn, and improve submissions before escalation.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Light-touch reviews and early risk visibility</li>
                  <li>LTQR readiness and traceability support</li>
                  <li>Interface risk checks (multi-trade)</li>
                </ul>
                <div className="pt-2">
                  <Button asChild variant="secondary" className="w-full">
                    <a href="#contact">Discuss a retainer</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Who this is for */}
        <section className="mx-auto max-w-6xl px-4 py-14">
          <SectionTitle
            eyebrow="Who this is for"
            title="Built for contractors dealing with real quality pressure"
            subtitle="If quality issues are being found late, this is where LocArc adds value."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {["Tier 2 & Tier 3 contractors","Tier 1 contractors seeking cleaner Tier 2–3 QA submissions","Specialist trades (cladding, envelope, M&E, steel)","Off-site & modular manufacturers","Projects where QA issues surface too late"].map((t) => (
              <Card key={t} className="rounded-2xl"><CardContent className="text-sm text-muted-foreground">{t}</CardContent></Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* How it works */}
        <section id="how" className="mx-auto max-w-6xl px-4 py-14">
          <SectionTitle
            eyebrow="How it works"
            title="A simple upstream mediation workflow"
            subtitle="The aim is to strengthen contractor QA outputs before they reach main contractor review or client assurance activity."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            {[
              {
                step: "01",
                title: "Define scope",
                desc: "One package / trade / manufacturer. Agree what is in and out.",
              },
              {
                step: "02",
                title: "Collect evidence",
                desc: "ITPs, method statements, records, certs, photos, LTQR drafts.",
              },
              {
                step: "03",
                title: "Pre-assurance review",
                desc: "Identify gaps, traceability breaks, and interface risks early.",
              },
              {
                step: "04",
                title: "Actions & readiness",
                desc: "Issue risk-ranked findings and practical corrective actions.",
              },
            ].map((s) => (
              <Card key={s.step} className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-base">
                    <span className="inline-flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{s.step}</span>
                      {s.title}
                    </span>
                    <CheckCircle2 className="h-5 w-5" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{s.desc}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Why contractors use us */}
        <section className="mx-auto max-w-6xl px-4 py-14">
          <SectionTitle
            eyebrow="Why LocArc"
            title="Why contractors and Tier 1 teams bring us in early"
            subtitle="Independent QA support that reduces noise, not adds to it."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {["Catch issues before main contractor or client review","Reduce NCRs, rework, and aborted inspections","Improve QA evidence quality and traceability","Reduce Tier 1 QA burden on high-risk packages","Remain in control — no authority taken away"].map((w) => (
              <Card key={w} className="rounded-2xl"><CardContent className="text-sm text-muted-foreground">{w}</CardContent></Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Governance */}
        <section id="governance" className="mx-auto max-w-6xl px-4 py-14">
          <SectionTitle
            eyebrow="Governance"
            title="Clear boundaries — advisory, not approval"
            subtitle="Designed to be compatible with major construction project governance and robust quality management systems."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <ShieldCheck className="h-5 w-5" /> What this service does
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Strengthens Tier 2–3 QA documentation and evidence packs</li>
                  <li>Improves LTQR readiness and traceability (factory-to-site)</li>
                  <li>Flags interface risks early (multi-trade)</li>
                  <li>Provides practical corrective actions before escalation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <AlertTriangle className="h-5 w-5" /> What this service does not do
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>No approval or sign-off of works or documentation</li>
                  <li>No audit or enforcement role</li>
                  <li>No change to contractual responsibility or authority</li>
                  <li>No automated decision-making</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Pilot */}
        <section id="pilot" className="mx-auto max-w-6xl px-4 py-14">
          <SectionTitle
            eyebrow="Pilot"
            title="A safe way to trial the approach"
            subtitle="A pilot keeps scope tight, value measurable, and governance unchanged."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
            {[
              {
                title: "Scope",
                items: [
                  "One package / trade / manufacturer",
                  "Explicit inclusions and exclusions",
                  "No authority change",
                ],
              },
              {
                title: "Duration",
                items: ["Fixed period (typically 8–12 weeks)", "No automatic continuation", "Stop points agreed"],
              },
              {
                title: "Outputs",
                items: [
                  "Risk-ranked findings",
                  "Corrective action recommendations",
                  "Readiness summary for submissions",
                ],
              },
            ].map((b) => (
              <Card key={b.title} className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-base">{b.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="list-disc pl-5 space-y-1">
                    {b.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border p-5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 mt-0.5" />
                <div>
                  <div className="font-semibold">Want a pilot scope in writing?</div>
                  <div className="text-sm text-muted-foreground">I can share a controlled pilot outline tailored to your package and governance context.</div>
                </div>
              </div>
              <Button asChild>
                <a href="#contact" className="inline-flex items-center gap-2">
                  Request pilot outline <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Separator />

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-14">
          <SectionTitle
            eyebrow="Contact"
            title="Discuss a package, factory, or LTQR readiness review"
            subtitle="Send a short message and I’ll reply with a sensible next step."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">Send a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm">Name</label>
                    <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm">Company</label>
                    <Input
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Company name"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm">Email</label>
                  <Input
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label className="text-sm">Message</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Briefly describe the package/trade/manufacturer and the issue (e.g., LTQR readiness, evidence packs, interface risk)."
                    className="min-h-[140px]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  <Button asChild className="sm:flex-1">
                    <a href={mailtoHref} className="inline-flex items-center justify-center gap-2">
                      <Mail className="h-4 w-4" /> Email enquiry
                    </a>
                  </Button>
                  {BRAND.calendlyUrl ? (
                    <Button asChild variant="secondary" className="sm:flex-1">
                      <a href={BRAND.calendlyUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2">
                        Book a call <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  ) : (
                    <Button variant="secondary" className="sm:flex-1" disabled>
                      Add Calendly link to enable booking
                    </Button>
                  )}
                </div>

                <div className="text-xs text-muted-foreground">
                  Note: This site does not accept confidential document uploads. Engagements are scoped and governed before any information exchange.
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-muted-foreground">{BRAND.location}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-0.5" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">{BRAND.email}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-0.5" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground">{BRAND.phone}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Link2 className="h-5 w-5 mt-0.5" />
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <a className="text-muted-foreground hover:underline" href={BRAND.linkedinUrl} target="_blank" rel="noreferrer">
                      {BRAND.linkedinUrl || "Add your LinkedIn URL"}
                    </a>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="font-medium">Governance statement (summary)</div>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Advisory only — no sign-off or approval</li>
                    <li>No audit/enforcement role</li>
                    <li>No change to authority or contractual responsibility</li>
                    <li>Human judgement-led; no automated decisions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t">
          <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {BRAND.companyName}. Construction QA inspections and independent verification consultancy.
            </div>
            <div className="text-xs text-muted-foreground flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" /> Advisory service • No approval authority
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
