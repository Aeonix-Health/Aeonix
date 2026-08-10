
/* ════════════════════════════════════════════════════
   AEONIX — Complete Site JavaScript
   All functions defined at module scope (no nesting)
════════════════════════════════════════════════════ */

// ── Translations ──────────────────────────────────
const T = {
  "en": {
    "nav.why": "Why Aeonix",
    "nav.how": "How It Works",
    "nav.compare": "vs Standard",
    "nav.pricing": "Plans",
    "nav.blog": "Insights",
    "nav.faq": "FAQ",
    "nav.cta": "Book Now",
    "hero.eyebrow": "Preventative Screening · Switzerland",
    "hero.title": "The greatest act<br>of love is knowing<br>you are <em>well.</em>",
    "hero.sub": "Aeonix delivers clinically rigorous preventative health screening — over 150 validated biomarkers, with physician-reviewed results in 48 hours.",
    "hero.cta": "Own Your Health",
    "hero.learn": "Discover how it works",
    "hero.s1": "Biomarkers",
    "hero.s2": "Results",
    "hero.s3": "Renowned Swiss Lab",
    "hero.scroll": "Scroll to explore",
    "mq.1": "Cardiovascular Panel",
    "mq.2": "Hormonal Profiling",
    "mq.3": "Metabolic Function",
    "mq.4": "Thyroid Axes",
    "mq.5": "Nutritional Status",
    "mq.6": "Oncology Markers",
    "mq.7": "Immune Resilience",
    "mq.8": "Inflammatory Markers",
    "mq.9": "Hepatic & Renal Function",
    "mq.10": "Bone Metabolism",
    "stats.1.n": "150+",
    "stats.1.l": "Biomarkers — Elite Panel",
    "stats.1.s": "vs. avg. 12–20 in standard check-up",
    "stats.2.n": "48h",
    "stats.2.l": "Result turnaround",
    "stats.2.s": "Renowned Swiss laboratory",
    "stats.3.n": "Swiss",
    "stats.3.l": "Leading Lab",
    "stats.3.s": "Independent medical standard",
    "stats.4.n": "GDPR",
    "stats.4.l": "Full data sovereignty",
    "stats.4.s": "Zero third-party data sharing",
    "why.label": "Our Philosophy",
    "why.title": "Health is not something<br>you treat. It is something<br>you <em>own.</em>",
    "why.body1": "The majority of chronic disease is preceded by measurable, correctable biological signals — often years before symptoms appear. Yet most people only encounter clinical care when it is already late. <strong>Aeonix was designed to close that gap.</strong>",
    "why.body2": "We leverage Swiss medical infrastructure and evidence-based biomarker science to deliver a level of biochemical insight that transforms passive patients into informed stewards of their own biology.",
    "why.cite.label": "Clinical basis:",
    "why.cite.body": "Research in <em>The Lancet</em> and <em>NEJM</em> demonstrates that early biomarker identification reduces late-stage disease incidence by 40–60%.",
    "why.c1.icon": "🔬",
    "why.c1.title": "Clinically validated panels",
    "why.c1.body": "Every marker selected on peer-reviewed evidence. We test what matters.",
    "why.c2.icon": "📊",
    "why.c2.title": "Personalised interpretation",
    "why.c2.body": "Results contextualised against your demographics, lifestyle, and history.",
    "why.c3.icon": "🛡️",
    "why.c3.title": "Data sovereignty",
    "why.c3.body": "Full GDPR compliance, Swiss data residency, zero third-party sharing.",
    "why.c4.icon": "👨‍⚕️",
    "why.c4.title": "Physician-led review",
    "why.c4.body": "Every report reviewed by a qualified physician. Guidance, not just numbers.",
    "callout.label": "Own Your Health Together",
    "callout.title": "One decision<br>for <em>both of you.</em>",
    "callout.body": "The greatest gift you can give the people who love you is knowing you are well. 100+ clinically validated biomarkers, physician-reviewed in 48 hours.",
    "callout.btn": "View Plans — from CHF 595/yr",
    "how.label": "The Experience",
    "how.sub": "From booking to results, in four steps.",
    "how.s1t": "Choose your plan",
    "how.s1d": "Select from Prime Health (100+ biomarkers) to Elite (150+). One-time or annual subscription.",
    "how.s1x": "Available online. No GP referral required.",
    "how.s2t": "Private blood collection",
    "how.s2d": "Clinic visit or concierge home visit for Longevity Plus and Elite.",
    "how.s2x": "Home collection: 20 minutes, before your first meeting.",
    "how.s3t": "Renowned Swiss lab analysis",
    "how.s3d": "Processed in a leading Swiss laboratory.",
    "how.s3x": "Swiss lab precision. GDPR-compliant throughout.",
    "how.s4t": "Results & physician consultation",
    "how.s4d": "Your report in 48 hours, with a physician consultation and personalised health roadmap.",
    "how.s4x": "Longitudinal dashboard tracks your biology year-over-year.",
    "ls.1.sub": "Women's Health",
    "ls.1.hl": "Because they need you here.",
    "ls.2.sub": "Longevity · Prevention",
    "ls.2.hl": "Know before it shows.",
    "ls.3.sub": "Own Your Health",
    "ls.3.hl": "Every body deserves to know.",
    "cmp.label": "Aeonix vs Standard Check-Up",
    "cmp.title": "Why a standard check-up<br>is no longer <em>enough.</em>",
    "cmp.sub": "A typical GP check-up tests 12–20 markers. Aeonix tests 90–150+ depending on plan.",
    "cmp.th.marker": "Health Domain & Marker",
    "cmp.th.aeonix": "✦ Aeonix (100–150+ markers)",
    "cmp.th.standard": "Standard GP Check-Up",
    "cmp.cat1": "❤️ Cardiovascular Health",
    "cmp.cat2": "⚡ Metabolic Function",
    "cmp.cat3": "⚖️ Hormonal & Endocrine",
    "cmp.cat4": "🌿 Nutritional & Micronutrient",
    "cmp.cat5": "🔎 Oncology & Early Detection",
    "cmp.cat6": "📋 Report & Follow-Up",
    "cmp.r1": "Total Cholesterol, LDL, HDL, Triglycerides",
    "cmp.r2": "ApoB / ApoA1 — advanced lipid risk",
    "cmp.r3": "Lipoprotein(a) — genetic CV risk",
    "cmp.r4": "hsCRP — high-sensitivity inflammation",
    "cmp.r5": "Fasting Glucose",
    "cmp.r6": "HbA1c — 3-month glucose average",
    "cmp.r7": "Fasting Insulin + HOMA-IR",
    "cmp.r8": "Full Liver & Kidney Panel",
    "cmp.r9": "Full thyroid axis (TSH, Free T3, T4, Anti-TPO)",
    "cmp.r10": "Cortisol — adrenal / stress axis",
    "cmp.r11": "Testosterone, SHBG, DHEA-S",
    "cmp.r12": "Oestradiol, Progesterone, FSH, LH",
    "cmp.r13": "Vitamin D, B12, Folate",
    "cmp.r14": "Zinc, Magnesium, Selenium, Omega-3",
    "cmp.r15": "PSA, CA-125, CEA, AFP",
    "cmp.r16": "Physician-reviewed annotated report",
    "cmp.r17": "Personalised 12-month health roadmap",
    "cmp.r18": "Results within 48 hours",
    "cmp.yes": "✓",
    "cmp.no": "✗",
    "cmp.partial": "Partial",
    "cmp.selective": "Selective",
    "cmp.tshonly": "TSH only",
    "cmp.varies": "Varies",
    "emotion.quote": "\"You would give your child every advantage in the world.<br><em>Give yourself the same.</em>\"",
    "emotion.attr": "— The Aeonix Commitment",
    "sc.label": "What We Screen",
    "sc.title": "Every system. Every signal.<br>Nothing <em>missed.</em>",
    "sc.sub": "We examine your body as an integrated system — because no biomarker exists in isolation.",
    "sc.1.n": "01",
    "sc.1.t": "Cardiovascular",
    "sc.1.d": "Advanced lipid fractionation, arterial inflammatory markers, cardiac stress assessment, and genetic cardiovascular risk stratification via Lp(a) and ApoB/ApoA1 ratios.",
    "sc.2.n": "02",
    "sc.2.t": "Hormonal & Endocrine",
    "sc.2.d": "Full hypothalamic-pituitary-gonadal axis mapping, adrenal function, thyroid cascade — the regulatory network governing energy, mood, fertility, and longevity.",
    "sc.3.n": "03",
    "sc.3.t": "Metabolic & Glycaemic",
    "sc.3.d": "Insulin sensitivity modelling (HOMA-IR), hepatic and renal function, and metabolic syndrome risk assessment — the biochemical engine of daily performance.",
    "sc.4.n": "04",
    "sc.4.t": "Nutritional & Micronutrient",
    "sc.4.d": "Subclinical deficiencies precede fatigue, cognitive decline, and immune dysfunction by months. We surface them before they become symptoms.",
    "sc.5.n": "05",
    "sc.5.t": "Inflammation & Immunity",
    "sc.5.d": "Systemic low-grade inflammation is the shared pathophysiology of cardiovascular disease, type 2 diabetes, and dementia. We measure it with precision.",
    "sc.6.n": "06",
    "sc.6.t": "Oncology & Early Detection",
    "sc.6.d": "Validated serum oncology markers across key cancer types. Early detection remains the single most powerful survival variable in oncology.",
    "pricing.label": "Investment in You",
    "pricing.title": "Choose your <em>level of clarity.</em>",
    "pricing.sub": "All plans include leading lab processing, physician-reviewed results in 48h, and your secure health dashboard.",
    "pricing.onetime": "One-Time",
    "pricing.sub.btn": "Annual Subscription",
    "pricing.save": "Save CHF 300",
    "pricing.once": "One-time screening",
    "pricing.year": "per year",
    "pricing.markers": "biomarkers",
    "pricing.popular": "Most Popular",
    "pricing.begin": "Begin",
    "pricing.subscribe": "Subscribe & Save",
    "pricing.note": "All plans include <strong>leading Swiss laboratory processing</strong>, <strong>secure personal dashboard</strong>, and <strong>full GDPR data sovereignty</strong>.<br>Corporate and family plans available. <a href='mailto:aeonix@alleshealth.com'>Contact us</a> for bespoke pricing.",
    "plan.prime": "Prime Health — 100+ Biomarkers",
    "plan.vital": "Vital Edge — 125+ Biomarkers",
    "plan.longevity": "Longevity Plus — 135+ Biomarkers",
    "plan.elite": "Aeonix Elite — 150+ Biomarkers",
    "plan.prime.f1": "Core cardiovascular panel",
    "plan.prime.f2": "Metabolic essentials",
    "plan.prime.f3": "Thyroid (TSH)",
    "plan.prime.f4": "Full blood count",
    "plan.prime.f5": "Vitamin D & B12",
    "plan.prime.f6": "30-min physician review",
    "plan.prime.f7": "Personal health dashboard",
    "plan.prime.f8": "48-hour result delivery",
    "plan.prime.f8sub": "Annual trend comparison",
    "plan.vital.f1": "All Prime Health markers",
    "plan.vital.f2": "Advanced lipids (ApoB, Lp(a))",
    "plan.vital.f3": "Full thyroid axis",
    "plan.vital.f4": "Hormonal panel",
    "plan.vital.f5": "Insulin + HOMA-IR",
    "plan.vital.f6": "Inflammation (hsCRP, IL-6)",
    "plan.vital.f7": "Iron studies & micronutrients",
    "plan.vital.f8": "45-min physician review",
    "plan.vital.f8sub": "Longitudinal trend tracking",
    "plan.lon.f1": "All Vital Edge markers",
    "plan.lon.f2": "Full hormonal spectrum",
    "plan.lon.f3": "Oncology markers (PSA/CA-125)",
    "plan.lon.f4": "Bone metabolism panel",
    "plan.lon.f5": "Omega-3 Index + minerals",
    "plan.lon.f6": "60-min physician consultation",
    "plan.lon.f7": "12-month personalised roadmap",
    "plan.lon.f8": "Concierge option available",
    "plan.lon.f8sub": "Year-on-year tracking",
    "plan.elite.f1": "All Longevity Plus markers",
    "plan.elite.f2": "Extended cytokine profiling",
    "plan.elite.f3": "Advanced oncology panel",
    "plan.elite.f4": "NT-proBNP + Cystatin C",
    "plan.elite.f5": "Concierge home blood collection",
    "plan.elite.f6": "90-min senior physician consult",
    "plan.elite.f7": "Priority specialist referral",
    "plan.elite.f8": "Dedicated health partner",
    "blog.label": "Health Insights",
    "blog.title": "Knowledge is the beginning<br>of <em>everything.</em>",
    "blog.all": "View all articles →",
    "blog.1.cat": "Preventive Medicine",
    "blog.1.title": "Why Your Annual GP Check-Up Misses 80% of What Matters",
    "blog.1.excerpt": "ApoB, HOMA-IR, Free T3, IL-6 — where disease actually begins.",
    "blog.1.time": "6 min read",
    "blog.2.cat": "Cardiovascular Health",
    "blog.2.title": "ApoB vs LDL: The Cholesterol Test Your Doctor Probably Isn't Ordering",
    "blog.2.excerpt": "LDL tells an incomplete story. ApoB is the marker cardiologists now consider the gold standard.",
    "blog.2.time": "7 min read",
    "blog.3.cat": "Metabolic Health",
    "blog.3.title": "Insulin Resistance: How to Be 'Normal' on Paper and Still Be at Risk",
    "blog.3.excerpt": "HOMA-IR reveals what HbA1c and fasting glucose cannot. Silent progression, measurable early.",
    "blog.3.time": "8 min read",
    "blog.read": "Read →",
    "testi.label": "Stories",
    "testi.title": "What it feels like to <em>truly know.</em>",
    "testi.sub": "From those who chose to own their health.",
    "testi.1.quote": "I considered myself healthy. Aeonix revealed three clinically significant findings my GP had never tested. Catching them early changed my trajectory entirely.",
    "testi.1.name": "Markus H.",
    "testi.1.role": "CEO · Zürich",
    "testi.2.quote": "I gifted this to my husband for our anniversary. We went through it together. It is the most meaningful thing we have done for our shared future.",
    "testi.2.name": "Sophie L.",
    "testi.2.role": "Geneva",
    "testi.3.quote": "Finally, a health service that treats me as an intelligent adult. The scientific rigour, the consultation quality, and the follow-through — exceptional.",
    "testi.3.name": "Reto L.",
    "testi.3.role": "Private Banker · Basel",
    "exp.label": "Global Vision",
    "exp.title": "Starting in Switzerland.<br>Built for the <em>world.</em>",
    "exp.body1": "Aeonix launches in Switzerland — one of the world's most rigorous healthcare environments. We bring the same clinical excellence to those who demand it, wherever they are.",
    "exp.body2": "Preventative health is not a privilege. It is the future of medicine.",
    "exp.ch.name": "Switzerland",
    "exp.ch.status": "Launching 2026",
    "exp.se.name": "Scandinavia",
    "exp.se.status": "Coming 2027",
    "exp.ae.name": "UAE",
    "exp.ae.status": "Coming 2027",
    "exp.gb.name": "United Kingdom",
    "exp.gb.status": "Coming 2027",
    "cta.label": "Take the First Step",
    "cta.title": "The most important decision<br>you will make is the one<br>to <em>truly know yourself.</em>",
    "cta.sub": "Aeonix is not a health test. It is a commitment to yourself — and to every person who loves you.",
    "cta.book": "Book Your Screening",
    "cta.talk": "Talk to our team",
    "cta.note": "No referral needed · Results in 48 hours · Fully confidential · leading Swiss laboratory",
    "footer.brand": "Clinically rigorous preventative health screening, built on Swiss precision and medical integrity. A product of AllesHealth GmbH.",
    "footer.s1.title": "Screenings",
    "footer.s1.l1": "Prime Health — CHF 595/yr",
    "footer.s1.l2": "Vital Edge — CHF 795/yr",
    "footer.s1.l3": "Longevity Plus — CHF 995/yr",
    "footer.s1.l4": "Aeonix Elite — CHF 1,295/yr",
    "footer.s1.l5": "Annual Subscriptions",
    "footer.s2.title": "Company",
    "footer.s2.l1": "About Aeonix",
    "footer.s2.l2": "How It Works",
    "footer.s2.l3": "Health Insights",
    "footer.s2.l4": "FAQ",
    "footer.s2.l5": "Corporate Wellness",
    "footer.s3.title": "Legal & Contact",
    "footer.s3.l1": "aeonix@alleshealth.com",
    "footer.s3.l2": "Our Lab Partners (Coming soon)",
    "footer.s3.l3": "Privacy Policy",
    "footer.s3.l4": "Terms of Service",
    "footer.s3.l5": "Cookie Policy",
    "footer.copy": "© 2026 AllesHealth GmbH. All Rights Reserved.\nAeonix is a brand of AllesHealth GmbH · Aeonix.Health · Aeonix.ch",
    "footer.tagline": "Aeonix — Own Your Health",
    "faq.label": "FAQS",
    "faq.title": "Questions Worth <em>Asking</em>",
    "faq.sub": "Everything you need to know about your Aeonix health screening, membership, and results.",
    "faq.still.title": "Still have questions?",
    "faq.still.sub": "Our Care Team is here to help you choose the right screening and answer any questions.",
    "faq.contact": "Contact Care Team",
    "faq.book": "Book a Screening ➔",
    "faq.items": [
      {
        "q": "What is included in a screening?",
        "a": "Every plan includes clinician-selected biomarker testing at a leading Swiss laboratory, a physician-reviewed annotated report, and access to your secure personal health dashboard. Higher plans include broader panels, physician consultations, and concierge home collection."
      },
      {
        "q": "Do I need a GP referral?",
        "a": "No. Aeonix is a direct-access service. You can book and complete your screening without any referral. If your results indicate the need for specialist follow-up, we will facilitate that referral for you."
      },
      {
        "q": "How quickly will I receive my results?",
        "a": "Results are delivered to your secure dashboard within 48 hours of laboratory receipt of your sample. This is significantly faster than standard GP-requested panels."
      },
      {
        "q": "Is a blood draw required?",
        "a": "Yes. Aeonix uses venous blood sampling — the clinical gold standard for biomarker accuracy. Prime Health and Vital Edge require a clinic visit. Longevity Plus and Elite include an optional concierge home blood draw."
      },
      {
        "q": "How are my data protected?",
        "a": "All data is processed and stored in Switzerland in full compliance with GDPR and Swiss Federal Data Protection law. We never share, sell, or license your health data to any third party — including insurers and pharmaceutical companies."
      },
      {
        "q": "Can I use Aeonix alongside my GP?",
        "a": "Absolutely — and we encourage it. Your Aeonix report is designed to complement GP care. Many clients share their annotated results with their GP to inform a broader clinical conversation."
      },
      {
        "q": "Who interprets the results?",
        "a": "Every report is reviewed by a qualified physician before delivery. Your results are not raw laboratory figures — they are clinically contextualised, annotated for your demographics, and accompanied by a prioritised action plan."
      },
      {
        "q": "Is Aeonix covered by Swiss insurance?",
        "a": "Aeonix is a private preventative screening service not currently covered by mandatory Krankenkasse (KVG/LAMal) basic insurance. Some supplementary (Zusatzversicherung/LCA) policies may provide partial reimbursement — we recommend checking with your insurer."
      }
    ],
    "wl.float": "Reserve Your Spot",
    "wl.eyebrow": "Founding Member Access",
    "wl.title": "453 founding spots<br>remain. Will one<br>be <em>yours?</em>",
    "wl.sub": "Aeonix Founding Members lock in lifetime pricing, exclusive early access, and the knowledge that they shaped something extraordinary from the beginning.",
    "wl.spots.label": "Founding spots claimed",
    "wl.spots.of": "/ 2,000",
    "wl.progress.remaining": "453 remaining",
    "wl.perk1": "Founding pricing locked for life — 20% below future public rate",
    "wl.perk2": "48-hour priority access before general launch",
    "wl.perk3": "Named in Aeonix's Founding Member registry",
    "wl.perk4": "Invite 2 friends — earn CHF 60 credit when either joins",
    "wl.form.title": "Secure your founding spot",
    "wl.form.sub": "Join 1,547 people who have already reserved. No payment now — we notify you first.",
    "wl.form.fname": "First name",
    "wl.form.lname": "Last name",
    "wl.form.email": "Email address",
    "wl.form.plan": "Plan of interest",
    "wl.form.plan.select": "Select a plan…",
    "wl.form.plan.unsure": "Not sure yet",
    "wl.form.city": "City / Country",
    "wl.form.submit": "Reserve my founding spot",
    "wl.form.fine": "No credit card. No commitment. We email you first when Aeonix launches.",
    "wl.success.title": "You're on the list.",
    "wl.success.sub": "Welcome, Founding Member. You'll receive a personal email from us 48 hours before public launch — with your exclusive pricing locked in.",
    "wl.success.member": "Founding Member",
    "wl.success.member.sub": "Aeonix — Class of 2026",
    "wl.ref.title": "Invite 2 friends. Earn CHF 60.",
    "wl.ref.desc": "When a friend joins using your link, they get 10% off their first year. And you earn CHF 60 credit — automatically applied to your renewal.",
    "wl.ref.pill": "✓ CHF 60 credit per referral · max 2 friends",
    "wl.ref.copy": "Copy link",
    "wl.ref.invite.title": "Or invite directly by email",
    "wl.ref.send": "Send personal invitations",
    "wl.ref.or": "or share via",
    "wl.ref.sent": "✓ Invitations sent. Your friends will receive your personal referral link."
  },
  "de": {
    "nav.why": "Warum Aeonix",
    "nav.how": "Ablauf",
    "nav.compare": "vs Standard",
    "nav.pricing": "Pläne",
    "nav.blog": "Wissen",
    "nav.faq": "FAQ",
    "nav.cta": "Jetzt buchen",
    "hero.eyebrow": "Präventives Screening · Schweiz",
    "hero.title": "Der grösste Ausdruck<br>von Liebe ist zu wissen,<br>dass Sie <em>gesund sind.</em>",
    "hero.sub": "Aeonix bietet klinisch rigoroses präventives Gesundheitsscreening — von über 150 validierte Biomarker, mit ärztlich geprüften Ergebnissen in 48 Stunden.",
    "hero.cta": "Gesundheit selbst bestimmen",
    "hero.learn": "Mehr erfahren",
    "hero.s1": "Biomarker",
    "hero.s2": "Ergebnisse",
    "hero.s3": "Schweizer Labore",
    "hero.scroll": "Weiter scrollen",
    "mq.1": "Kardiovaskuläres Panel",
    "mq.2": "Hormonstatus",
    "mq.3": "Stoffwechselfunktion",
    "mq.4": "Schilddrüsenachse",
    "mq.5": "Nährstoffstatus",
    "mq.6": "Onkologie-Marker",
    "mq.7": "Immunresilienz",
    "mq.8": "Entzündungsmarker",
    "mq.9": "Leber- & Nierenfunktion",
    "mq.10": "Knochenstoffwechsel",
    "stats.1.n": "150+",
    "stats.1.l": "Biomarker — Elite-Panel",
    "stats.1.s": "vs. Ø 12–20 beim Standard-Checkup",
    "stats.2.n": "48h",
    "stats.2.l": "Ergebnislieferung",
    "stats.2.s": "Renommiertes Schweizer Labor",
    "stats.3.n": "Swiss",
    "stats.3.l": "Renommiertes Schweizer Labor",
    "stats.3.s": "Internationaler Medizinstandard",
    "stats.4.n": "DSGVO",
    "stats.4.l": "Vollständige Datensouveränität",
    "stats.4.s": "Keine Datenweitergabe an Dritte",
    "why.label": "Unsere Philosophie",
    "why.title": "Gesundheit ist nichts,<br>das man behandelt. Es ist etwas,<br>das man <em>besitzt.</em>",
    "why.body1": "Die meisten chronischen Erkrankungen werden von messbaren, korrigierbaren biologischen Signalen eingeleitet — oft Jahre bevor Symptome auftreten. Dennoch kommen die meisten Menschen erst dann in Kontakt mit der Medizin, wenn es bereits zu spät ist. <strong>Aeonix wurde entwickelt, um diese Lücke zu schliessen.</strong>",
    "why.body2": "Wir nutzen die Schweizer medizinische Infrastruktur und evidenzbasierte Biomarkerwissenschaft, um ein biochemisches Wissenstiefe zu bieten, das aus passiven Patienten informierte Hüter ihrer eigenen Biologie macht.",
    "why.cite.label": "Wissenschaftliche Grundlage:",
    "why.cite.body": "Forschungen im <em>The Lancet</em> und <em>NEJM</em> zeigen, dass die frühzeitige Biomarkeridentifikation die Spätphasenkrankheit um 40–60% reduziert.",
    "why.c1.icon": "🔬",
    "why.c1.title": "Klinisch validierte Panels",
    "why.c1.body": "Jeder Marker nach peer-reviewed Evidenz ausgewählt. Wir testen, was zählt.",
    "why.c2.icon": "📊",
    "why.c2.title": "Personalisierte Interpretation",
    "why.c2.body": "Ergebnisse im Kontext Ihrer Demografie, Ihres Lebensstils und Ihrer Vorgeschichte.",
    "why.c3.icon": "🛡️",
    "why.c3.title": "Datensouveränität",
    "why.c3.body": "Vollständige DSGVO-Konformität, Schweizer Datenresidenz, keine Datenweitergabe.",
    "why.c4.icon": "👨‍⚕️",
    "why.c4.title": "Ärztlich geprüft",
    "why.c4.body": "Jeder Bericht wird von einem qualifizierten Arzt geprüft. Orientierung, nicht nur Zahlen.",
    "callout.label": "Gemeinsam Gesundheit besitzen",
    "callout.title": "Eine Entscheidung<br>für <em>Sie beide.</em>",
    "callout.body": "Das grösste Geschenk, das Sie Ihren Liebsten machen können, ist zu wissen, dass Sie gesund sind. 100+ klinisch validierte Biomarker, ärztlich geprüft in 48 Stunden.",
    "callout.btn": "Pläne ansehen — ab CHF 595/Jahr",
    "how.label": "Der Ablauf",
    "how.sub": "Von der Buchung bis zum Ergebnis, in vier Schritten.",
    "how.s1t": "Plan wählen",
    "how.s1d": "Von Prime Health (100+ Biomarker) bis Elite (150+). Einmalig oder als Jahresabo.",
    "how.s1x": "Online buchbar. Keine ärztliche Überweisung erforderlich.",
    "how.s2t": "Private Blutentnahme",
    "how.s2d": "Klinikbesuch oder Concierge-Hausbesuch für Longevity Plus und Elite.",
    "how.s2x": "Hausbesuch: 20 Minuten vor Ihrem ersten Termin.",
    "how.s3t": "Renommierte Schweizer Laboranalyse",
    "how.s3d": "Verarbeitet in einem führenden Schweizer Labor.",
    "how.s3x": "Schweizer Präzision. Durchgehend DSGVO-konform.",
    "how.s4t": "Ergebnisse & ärztliche Konsultation",
    "how.s4d": "Ihr Bericht in 48 Stunden, mit ärztlicher Konsultation und persönlichem Gesundheitsplan.",
    "how.s4x": "Longitudinales Dashboard verfolgt Ihre Biologie über Jahre.",
    "ls.1.sub": "Frauengesundheit",
    "ls.1.hl": "Weil sie Sie brauchen.",
    "ls.2.sub": "Langlebigkeit · Prävention",
    "ls.2.hl": "Wissen, bevor es sich zeigt.",
    "ls.3.sub": "Gesundheit selbst bestimmen",
    "ls.3.hl": "Jeder Körper verdient es, Bescheid zu wissen.",
    "cmp.label": "Aeonix vs. Standard-Checkup",
    "cmp.title": "Warum ein Standard-Checkup<br>nicht mehr <em>ausreicht.</em>",
    "cmp.sub": "Ein typischer Hausarzt-Checkup testet 12–20 Marker. Aeonix testet 90–150+ je nach Plan.",
    "cmp.th.marker": "Gesundheitsbereich & Marker",
    "cmp.th.aeonix": "✦ Aeonix (100–150+ Marker)",
    "cmp.th.standard": "Standard-Hausarzt-Checkup",
    "cmp.cat1": "❤️ Herzgesundheit",
    "cmp.cat2": "⚡ Stoffwechselfunktion",
    "cmp.cat3": "⚖️ Hormone & Endokrinium",
    "cmp.cat4": "🌿 Ernährung & Mikronährstoffe",
    "cmp.cat5": "🔎 Onkologie & Früherkennung",
    "cmp.cat6": "📋 Bericht & Nachsorge",
    "cmp.r1": "Gesamtcholesterin, LDL, HDL, Triglyzeride",
    "cmp.r2": "ApoB / ApoA1 — erweitertes Lipidrisiko",
    "cmp.r3": "Lipoprotein(a) — genetisches HKK-Risiko",
    "cmp.r4": "hsCRP — hochempfindliche Entzündung",
    "cmp.r5": "Nüchternglukose",
    "cmp.r6": "HbA1c — 3-Monats-Glukosemittelwert",
    "cmp.r7": "Nüchterninsulin + HOMA-IR",
    "cmp.r8": "Vollständiges Leber- & Nierenpanel",
    "cmp.r9": "Vollständige Schilddrüsenachse (TSH, fT3, T4, Anti-TPO)",
    "cmp.r10": "Cortisol — Nebennieren-/Stressachse",
    "cmp.r11": "Testosteron, SHBG, DHEA-S",
    "cmp.r12": "Östradiol, Progesteron, FSH, LH",
    "cmp.r13": "Vitamin D, B12, Folat",
    "cmp.r14": "Zink, Magnesium, Selen, Omega-3",
    "cmp.r15": "PSA, CA-125, CEA, AFP",
    "cmp.r16": "Ärztlich geprüfter, kommentierter Bericht",
    "cmp.r17": "Personalisierter 12-Monats-Gesundheitsplan",
    "cmp.r18": "Ergebnisse innerhalb von 48 Stunden",
    "cmp.yes": "✓",
    "cmp.no": "✗",
    "cmp.partial": "Teilweise",
    "cmp.selective": "Selektiv",
    "cmp.tshonly": "Nur TSH",
    "cmp.varies": "Unterschiedlich",
    "emotion.quote": "\"Sie würden Ihrem Kind jeden Vorteil der Welt geben.<br><em>Gönnen Sie sich dasselbe.</em>\"",
    "emotion.attr": "— Das Aeonix-Versprechen",
    "sc.label": "Was wir untersuchen",
    "sc.title": "Jedes System. Jedes Signal.<br>Nichts <em>übersehen.</em>",
    "sc.sub": "Wir betrachten Ihren Körper als integriertes System — weil kein Biomarker isoliert existiert.",
    "sc.1.n": "01",
    "sc.1.t": "Kardiovaskulär",
    "sc.1.d": "Erweiterte Lipidtrennung, arterielle Entzündungsmarker, kardiale Stressbeurteilung und genetische kardiovaskuläre Risikostratifizierung mittels Lp(a) und ApoB/ApoA1-Verhältnissen.",
    "sc.2.n": "02",
    "sc.2.t": "Hormone & Endokrinium",
    "sc.2.d": "Vollständige Kartierung der hypothalamisch-hypophysär-gonadalen Achse, Nebennierenfunktion, Schilddrüsenkaskade — das Regulationsnetzwerk für Energie, Stimmung, Fruchtbarkeit und Langlebigkeit.",
    "sc.3.n": "03",
    "sc.3.t": "Stoffwechsel & Glykämie",
    "sc.3.d": "Insulinsensitivitätsmodellierung (HOMA-IR), Leber- und Nierenfunktion sowie Metabolisches-Syndrom-Risikobeurteilung — der biochemische Motor der täglichen Leistungsfähigkeit.",
    "sc.4.n": "04",
    "sc.4.t": "Ernährung & Mikronährstoffe",
    "sc.4.d": "Subklinische Mängel gehen Fatigue, kognitivem Abbau und Immunschwäche um Monate voraus. Wir erkennen sie, bevor sie zu Symptomen werden.",
    "sc.5.n": "05",
    "sc.5.t": "Entzündung & Immunsystem",
    "sc.5.d": "Systemische Niedriggradige Entzündung ist die gemeinsame Pathophysiologie von Herz-Kreislauf-Erkrankungen, Typ-2-Diabetes und Demenz. Wir messen sie präzise.",
    "sc.6.n": "06",
    "sc.6.t": "Onkologie & Früherkennung",
    "sc.6.d": "Validierte Serum-Onkologiemarker für wichtige Krebsarten. Früherkennung bleibt die wichtigste Überlebensvariable in der Onkologie.",
    "pricing.label": "Investition in Sie",
    "pricing.title": "Wählen Sie Ihr <em>Mass an Klarheit.</em>",
    "pricing.sub": "Alle Pläne umfassen renommierte Laborverarbeitung, ärztlich geprüfte Ergebnisse in 48h und Ihr sicheres Gesundheits-Dashboard.",
    "pricing.onetime": "Einmalig",
    "pricing.sub.btn": "Jahresabonnement",
    "pricing.save": "CHF 300 sparen",
    "pricing.once": "Einmaliges Screening",
    "pricing.year": "pro Jahr",
    "pricing.markers": "Biomarker",
    "pricing.popular": "Am beliebtesten",
    "pricing.begin": "Starten",
    "pricing.subscribe": "Abonnieren & sparen",
    "pricing.note": "Alle Pläne umfassen <strong>renommierte Schweizer Laborverarbeitung</strong>, <strong>sicheres persönliches Dashboard</strong> und <strong>vollständige DSGVO-Datensouveränität</strong>.<br>Firmen- und Familienpläne verfügbar. <a href='mailto:aeonix@alleshealth.com'>Kontakt</a> für individuelle Preisgestaltung.",
    "plan.prime": "Prime Health — 100+ Biomarkers",
    "plan.vital": "Vital Edge — 125+ Biomarkers",
    "plan.longevity": "Longevity Plus — 135+ Biomarkers",
    "plan.elite": "Aeonix Elite — 150+ Biomarkers",
    "plan.prime.f1": "Kardiovaskuläres Kernpanel",
    "plan.prime.f2": "Stoffwechsel-Grundlagen",
    "plan.prime.f3": "Schilddrüse (TSH)",
    "plan.prime.f4": "Grosses Blutbild",
    "plan.prime.f5": "Vitamin D & B12",
    "plan.prime.f6": "30-Min. Arztgespräch",
    "plan.prime.f7": "Persönliches Gesundheits-Dashboard",
    "plan.prime.f8": "Ergebnisse in 48 Stunden",
    "plan.prime.f8sub": "Jährlicher Trendvergleich",
    "plan.vital.f1": "Alle Prime Health Marker",
    "plan.vital.f2": "Erweiterte Lipide (ApoB, Lp(a))",
    "plan.vital.f3": "Vollständige Schilddrüsenachse",
    "plan.vital.f4": "Hormonpanel",
    "plan.vital.f5": "Insulin + HOMA-IR",
    "plan.vital.f6": "Entzündung (hsCRP, IL-6)",
    "plan.vital.f7": "Eisenstatus & Mikronährstoffe",
    "plan.vital.f8": "45-Min. Arztgespräch",
    "plan.vital.f8sub": "Longitudinales Trend-Tracking",
    "plan.lon.f1": "Alle Vital Edge Marker",
    "plan.lon.f2": "Vollständiges Hormonspektrum",
    "plan.lon.f3": "Onkologie-Marker (PSA/CA-125)",
    "plan.lon.f4": "Knochenstoffwechsel-Panel",
    "plan.lon.f5": "Omega-3-Index + Mineralien",
    "plan.lon.f6": "60-Min. Arztgespräch",
    "plan.lon.f7": "Personalisierter 12-Monats-Plan",
    "plan.lon.f8": "Concierge-Option verfügbar",
    "plan.lon.f8sub": "Jahresvergleich",
    "plan.elite.f1": "Alle Longevity Plus Marker",
    "plan.elite.f2": "Erweitertes Zytokin-Profiling",
    "plan.elite.f3": "Erweitertes Onkologie-Panel",
    "plan.elite.f4": "NT-proBNP + Cystatin C",
    "plan.elite.f5": "Concierge-Heimblutentnahme",
    "plan.elite.f6": "90-Min. leitender Arzt",
    "plan.elite.f7": "Prioritäts-Facharztüberweisung",
    "plan.elite.f8": "Persönlicher Gesundheitspartner",
    "blog.label": "Gesundheitswissen",
    "blog.title": "Wissen ist der Anfang<br>von <em>allem.</em>",
    "blog.all": "Alle Artikel ansehen →",
    "blog.1.cat": "Präventivmedizin",
    "blog.1.title": "Warum Ihr jährlicher Hausarzt-Checkup 80% des Wichtigen verpasst",
    "blog.1.excerpt": "ApoB, HOMA-IR, fT3, IL-6 — wo Krankheiten wirklich beginnen.",
    "blog.1.time": "6 Min. Lesezeit",
    "blog.2.cat": "Herzgesundheit",
    "blog.2.title": "ApoB vs. LDL: Der Cholesterintest, den Ihr Arzt wahrscheinlich nicht macht",
    "blog.2.excerpt": "LDL erzählt eine unvollständige Geschichte. ApoB gilt unter Kardiologen heute als Goldstandard.",
    "blog.2.time": "7 Min. Lesezeit",
    "blog.3.cat": "Stoffwechselgesundheit",
    "blog.3.title": "Insulinresistenz: Wie man auf dem Papier 'normal' sein und trotzdem gefährdet sein kann",
    "blog.3.excerpt": "HOMA-IR zeigt, was HbA1c und Nüchternglukose nicht zeigen können.",
    "blog.3.time": "8 Min. Lesezeit",
    "blog.read": "Lesen →",
    "testi.label": "Erfahrungsberichte",
    "testi.title": "Wie es sich anfühlt, es wirklich <em>zu wissen.</em>",
    "testi.sub": "Von denen, die ihre Gesundheit selbst in die Hand genommen haben.",
    "testi.1.quote": "Ich hielt mich für gesund. Aeonix entdeckte drei klinisch bedeutsame Befunde, die mein Hausarzt nie getestet hatte. Die Früherkennung veränderte meinen weiteren Weg.",
    "testi.1.name": "Markus H.",
    "testi.1.role": "CEO · Zürich",
    "testi.2.quote": "Ich habe meinem Mann dieses Screening zum Jahrestag geschenkt. Wir haben es gemeinsam gemacht. Es ist das Bedeutungsvollste, was wir für unsere gemeinsame Zukunft getan haben.",
    "testi.2.name": "Sophie L.",
    "testi.2.role": "Genf",
    "testi.3.quote": "Endlich ein Gesundheitsservice, der mich als intelligenten Erwachsenen behandelt. Die wissenschaftliche Qualität, die Beratung und die Nachbetreuung — aussergewöhnlich.",
    "testi.3.name": "Reto L.",
    "testi.3.role": "Privatbankier · Basel",
    "exp.label": "Globale Vision",
    "exp.title": "Beginn in der Schweiz.<br>Gebaut für die <em>Welt.</em>",
    "exp.body1": "Aeonix startet in der Schweiz — einem der rigorosesten Gesundheitssysteme der Welt. Wir bringen dieselbe klinische Exzellenz zu denen, die sie fordern, wo auch immer sie sind.",
    "exp.body2": "Präventive Gesundheit ist kein Privileg. Es ist die Zukunft der Medizin.",
    "exp.ch.name": "Schweiz",
    "exp.ch.status": "Start 2026",
    "exp.se.name": "Skandinavien",
    "exp.se.status": "Ab 2027",
    "exp.ae.name": "VAE",
    "exp.ae.status": "Ab 2027",
    "exp.gb.name": "Vereinigtes Königreich",
    "exp.gb.status": "Ab 2027",
    "cta.label": "Der erste Schritt",
    "cta.title": "Die wichtigste Entscheidung,<br>die Sie treffen werden, ist die,<br>sich selbst <em>wirklich zu kennen.</em>",
    "cta.sub": "Aeonix ist kein Gesundheitstest. Es ist ein Versprechen an sich selbst — und an jeden Menschen, dem Sie wichtig sind.",
    "cta.book": "Screening buchen",
    "cta.talk": "Unser Team kontaktieren",
    "cta.note": "Keine Überweisung · Ergebnisse in 48h · Vollständig vertraulich · renommiertes Schweizer Labor",
    "footer.brand": "Klinisch rigoroses präventives Gesundheitsscreening, aufgebaut auf Schweizer Präzision und medizinischer Integrität. Ein Produkt der AllesHealth GmbH.",
    "footer.s1.title": "Screenings",
    "footer.s1.l1": "Prime Health — CHF 595/yr",
    "footer.s1.l2": "Vital Edge — CHF 795/yr",
    "footer.s1.l3": "Longevity Plus — CHF 995/yr",
    "footer.s1.l4": "Aeonix Elite — CHF 1,295/yr",
    "footer.s1.l5": "Jahresabonnements",
    "footer.s2.title": "Unternehmen",
    "footer.s2.l1": "Über Aeonix",
    "footer.s2.l2": "Ablauf",
    "footer.s2.l3": "Gesundheitswissen",
    "footer.s2.l4": "FAQ",
    "footer.s2.l5": "Betriebliches Gesundheitsmanagement",
    "footer.s3.title": "Rechtliches & Kontakt",
    "footer.s3.l1": "aeonix@alleshealth.com",
    "footer.s3.l2": "Unsere Laborpartner (demnächst)",
    "footer.s3.l3": "Datenschutzrichtlinie",
    "footer.s3.l4": "Nutzungsbedingungen",
    "footer.s3.l5": "Cookie-Richtlinie",
    "footer.copy": "© 2026 AllesHealth GmbH. Alle Rechte vorbehalten.\nAeonix ist eine Marke der AllesHealth GmbH · Aeonix.Health · Aeonix.ch",
    "footer.tagline": "Aeonix — Gesundheit selbst bestimmen",
    "faq.label": "Häufige Fragen",
    "faq.title": "Alles, was Sie<br>wissen <em>müssen.</em>",
    "faq.sub": "Bei weiteren Fragen erreichen Sie uns unter aeonix@alleshealth.com — Antwort innerhalb eines Werktages.",
    "faq.corp": "Firmen- oder Familienplan? Wir bieten massgeschneiderte Preise für Gruppen ab 4 Personen.",
    "faq.items": [
      {
        "q": "Was ist in einem Screening enthalten?",
        "a": "Jeder Plan umfasst labordiagnostische Untersuchungen in einem führenden Schweizer Labor, einen ärztlich geprüften kommentierten Bericht und Zugang zu Ihrem sicheren persönlichen Gesundheits-Dashboard. Höhere Pläne umfassen breitere Panels, Arztgespräche und Concierge-Heimblutentnahme."
      },
      {
        "q": "Benötige ich eine ärztliche Überweisung?",
        "a": "Nein. Aeonix ist ein Direktzugangs-Service. Sie können ohne Überweisung buchen und Ihr Screening durchführen. Falls Ihre Ergebnisse eine Facharztüberweisung erfordern, vermitteln wir diese für Sie."
      },
      {
        "q": "Wie schnell erhalte ich meine Ergebnisse?",
        "a": "Ergebnisse werden innerhalb von 48 Stunden nach Laboreingang Ihrer Probe in Ihr sicheres Dashboard geliefert — deutlich schneller als bei Standard-Hausarzt-Anforderungen."
      },
      {
        "q": "Ist eine Blutentnahme erforderlich?",
        "a": "Ja. Aeonix verwendet venöse Blutentnahme — der klinische Goldstandard für Biomarker-Genauigkeit. Prime Health und Vital Edge erfordern einen Klinikbesuch. Longevity Plus und Elite beinhalten optional eine Concierge-Heimblutentnahme."
      },
      {
        "q": "Wie werden meine Daten geschützt?",
        "a": "Alle Daten werden in der Schweiz verarbeitet und gespeichert — in vollständiger Übereinstimmung mit der DSGVO und dem Schweizer Datenschutzgesetz. Wir geben Ihre Gesundheitsdaten niemals weiter, verkaufen oder lizenzieren sie — auch nicht an Versicherer oder Pharmaunternehmen."
      },
      {
        "q": "Kann ich Aeonix neben meinem Hausarzt nutzen?",
        "a": "Absolut — und wir empfehlen es. Ihr Aeonix-Bericht ist darauf ausgelegt, die hausärztliche Versorgung zu ergänzen. Viele Kunden teilen ihre kommentierten Ergebnisse mit ihrem Hausarzt."
      },
      {
        "q": "Wer interpretiert die Ergebnisse?",
        "a": "Jeder Bericht wird vor der Übergabe von einem qualifizierten Arzt geprüft. Ihre Ergebnisse sind keine rohen Labordaten — sie sind klinisch kontextualisiert, auf Ihre Demografie abgestimmt und mit einem priorisierten Massnahmenplan versehen."
      },
      {
        "q": "Wird Aeonix von der Schweizer Krankenkasse übernommen?",
        "a": "Aeonix ist ein privater Präventions-Screeningservice, der von der obligatorischen Grundversicherung (KVG/LAMal) nicht übernommen wird. Einige Zusatzversicherungen können eine Teilerstattung ermöglichen — bitte prüfen Sie dies mit Ihrer Versicherung."
      }
    ],
    "wl.float": "Platz reservieren",
    "wl.eyebrow": "Gründungsmitglied-Zugang",
    "wl.title": "Noch 453 Gründungsplätze<br>verfügbar. Ist einer<br><em>Ihrer?</em>",
    "wl.sub": "Aeonix Gründungsmitglieder sichern sich lebenslange Preise, exklusiven Frühzugang und das Wissen, etwas Aussergewöhnliches von Anfang an mitgestaltet zu haben.",
    "wl.spots.label": "Gründungsplätze reserviert",
    "wl.spots.of": "/ 2'000",
    "wl.progress.remaining": "453 noch verfügbar",
    "wl.perk1": "Lebenslanger Gründungspreis — 20% unter dem späteren öffentlichen Tarif",
    "wl.perk2": "48 Stunden Prioritätszugang vor dem offiziellen Launch",
    "wl.perk3": "Eintrag ins Aeonix Gründungsmitglieder-Register",
    "wl.perk4": "2 Freunde einladen — CHF 60 Guthaben, wenn einer beitritt",
    "wl.form.title": "Gründungsplatz sichern",
    "wl.form.sub": "Bereits 1'547 Personen haben reserviert. Keine Zahlung jetzt — wir informieren Sie zuerst.",
    "wl.form.fname": "Vorname",
    "wl.form.lname": "Nachname",
    "wl.form.email": "E-Mail-Adresse",
    "wl.form.plan": "Gewünschter Plan",
    "wl.form.plan.select": "Plan auswählen…",
    "wl.form.plan.unsure": "Noch unsicher",
    "wl.form.city": "Stadt / Land",
    "wl.form.submit": "Meinen Gründungsplatz reservieren",
    "wl.form.fine": "Keine Kreditkarte. Keine Verpflichtung. Wir informieren Sie zuerst beim Launch.",
    "wl.success.title": "Sie sind dabei.",
    "wl.success.sub": "Willkommen, Gründungsmitglied. Sie erhalten 48 Stunden vor dem Launch eine persönliche E-Mail mit Ihrem exklusiven Preis.",
    "wl.success.member": "Gründungsmitglied",
    "wl.success.member.sub": "Aeonix — Jahrgang 2026",
    "wl.ref.title": "2 Freunde einladen. CHF 60 verdienen.",
    "wl.ref.desc": "Wenn ein Freund über Ihren Link beitritt, erhält er 10% Rabatt auf sein erstes Jahr. Und Sie erhalten CHF 60 Guthaben — automatisch auf Ihre Verlängerung angerechnet.",
    "wl.ref.pill": "✓ CHF 60 Guthaben pro Empfehlung · max. 2 Freunde",
    "wl.ref.copy": "Link kopieren",
    "wl.ref.invite.title": "Oder direkt per E-Mail einladen",
    "wl.ref.send": "Persönliche Einladungen senden",
    "wl.ref.or": "oder teilen via",
    "wl.ref.sent": "✓ Einladungen gesendet. Ihre Freunde haben Ihren persönlichen Empfehlungslink erhalten."
  },
  "fr": {
    "nav.why": "Pourquoi Aeonix",
    "nav.how": "Comment ça marche",
    "nav.compare": "vs Standard",
    "nav.pricing": "Forfaits",
    "nav.blog": "Savoir",
    "nav.faq": "FAQ",
    "nav.cta": "Réserver",
    "hero.eyebrow": "Dépistage préventif · Suisse",
    "hero.title": "Le plus grand acte<br>d'amour est de savoir<br>que vous allez <em>bien.</em>",
    "hero.sub": "Aeonix offre un dépistage préventif cliniquement rigoureux — de plus de 150 biomarqueurs validés, avec des résultats examinés par un médecin en 48 heures.",
    "hero.cta": "Prenez en main votre santé",
    "hero.learn": "Découvrir comment ça marche",
    "hero.s1": "Biomarqueurs",
    "hero.s2": "Résultats",
    "hero.s3": "Laboratoires suisses",
    "hero.scroll": "Faire défiler",
    "mq.1": "Bilan cardiovasculaire",
    "mq.2": "Profil hormonal",
    "mq.3": "Fonction métabolique",
    "mq.4": "Axes thyroïdiens",
    "mq.5": "Statut nutritionnel",
    "mq.6": "Marqueurs oncologiques",
    "mq.7": "Résilience immunitaire",
    "mq.8": "Marqueurs inflammatoires",
    "mq.9": "Fonction hépatique & rénale",
    "mq.10": "Métabolisme osseux",
    "stats.1.n": "150+",
    "stats.1.l": "Biomarqueurs — Panel Élite",
    "stats.1.s": "vs. moy. 12–20 dans un bilan standard",
    "stats.2.n": "48h",
    "stats.2.l": "Délai de résultats",
    "stats.2.s": "Laboratoire suisse renommé",
    "stats.3.n": "Swiss",
    "stats.3.l": "Laboratoire suisse renommé",
    "stats.3.s": "Norme médicale internationale",
    "stats.4.n": "RGPD",
    "stats.4.l": "Souveraineté totale des données",
    "stats.4.s": "Zéro partage avec des tiers",
    "why.label": "Notre philosophie",
    "why.title": "La santé n'est pas quelque chose<br>que l'on soigne. C'est quelque chose<br>que l'on <em>possède.</em>",
    "why.body1": "La majorité des maladies chroniques est précédée de signaux biologiques mesurables et corrigeables — souvent des années avant l'apparition des symptômes. Pourtant, la plupart des personnes n'ont recours aux soins médicaux que lorsqu'il est déjà trop tard. <strong>Aeonix a été conçu pour combler ce fossé.</strong>",
    "why.body2": "Nous exploitons l'infrastructure médicale suisse et la science des biomarqueurs fondée sur des preuves pour offrir un niveau d'insight biochimique qui transforme les patients passifs en gardiens éclairés de leur propre biologie.",
    "why.cite.label": "Base clinique :",
    "why.cite.body": "Des recherches publiées dans <em>The Lancet</em> et le <em>NEJM</em> démontrent que l'identification précoce des biomarqueurs réduit l'incidence des maladies en phase avancée de 40 à 60 %.",
    "why.c1.icon": "🔬",
    "why.c1.title": "Panels cliniquement validés",
    "why.c1.body": "Chaque marqueur sélectionné selon des données probantes. Nous testons ce qui compte.",
    "why.c2.icon": "📊",
    "why.c2.title": "Interprétation personnalisée",
    "why.c2.body": "Résultats contextualisés selon votre démographie, votre mode de vie et vos antécédents.",
    "why.c3.icon": "🛡️",
    "why.c3.title": "Souveraineté des données",
    "why.c3.body": "Conformité RGPD complète, résidence des données en Suisse, zéro partage avec des tiers.",
    "why.c4.icon": "👨‍⚕️",
    "why.c4.title": "Révision par un médecin",
    "why.c4.body": "Chaque rapport est examiné par un médecin qualifié. Une orientation, pas seulement des chiffres.",
    "callout.label": "Prenez soin de vous ensemble",
    "callout.title": "Une décision<br>pour <em>vous deux.</em>",
    "callout.body": "Le plus grand cadeau que vous puissiez offrir à ceux qui vous aiment, c'est de savoir que vous allez bien. 100+ biomarqueurs validés cliniquement, examinés par un médecin en 48 heures.",
    "callout.btn": "Voir les forfaits — dès CHF 595/an",
    "how.label": "L'expérience",
    "how.sub": "De la réservation aux résultats, en quatre étapes.",
    "how.s1t": "Choisissez votre forfait",
    "how.s1d": "De Prime Health (100+ marqueurs) à Élite (150+). Ponctuel ou abonnement annuel.",
    "how.s1x": "Disponible en ligne. Aucune ordonnance requise.",
    "how.s2t": "Prélèvement sanguin privé",
    "how.s2d": "Visite en clinique ou à domicile pour Longevity Plus et Élite.",
    "how.s2x": "À domicile : 20 minutes avant votre premier rendez-vous.",
    "how.s3t": "Analyse dans un laboratoire suisse renommé",
    "how.s3d": "Traitement dans un laboratoire suisse de premier plan.",
    "how.s3x": "Précision suisse. Conforme au RGPD tout au long du processus.",
    "how.s4t": "Résultats & consultation médicale",
    "how.s4d": "Votre rapport en 48 heures, avec une consultation médicale et un plan de santé personnalisé.",
    "how.s4x": "Tableau de bord longitudinal pour suivre votre biologie d'année en année.",
    "ls.1.sub": "Santé féminine",
    "ls.1.hl": "Parce qu'ils ont besoin de vous.",
    "ls.2.sub": "Longévité · Prévention",
    "ls.2.hl": "Savoir avant que ça ne se voie.",
    "ls.3.sub": "Prenez en main votre santé",
    "ls.3.hl": "Chaque corps mérite de savoir.",
    "cmp.label": "Aeonix vs bilan de santé standard",
    "cmp.title": "Pourquoi un bilan standard<br>ne suffit plus <em>aujourd'hui.</em>",
    "cmp.sub": "Un bilan chez un médecin généraliste teste généralement 12 à 20 marqueurs. Aeonix en teste jusqu'à 100+.",
    "cmp.th.marker": "Domaine & marqueur",
    "cmp.th.aeonix": "✦ Aeonix (100–150+ marqueurs)",
    "cmp.th.standard": "Bilan généraliste standard",
    "cmp.cat1": "❤️ Santé cardiovasculaire",
    "cmp.cat2": "⚡ Fonction métabolique",
    "cmp.cat3": "⚖️ Hormones & endocrinologie",
    "cmp.cat4": "🌿 Nutrition & micronutriments",
    "cmp.cat5": "🔎 Oncologie & dépistage précoce",
    "cmp.cat6": "📋 Rapport & suivi",
    "cmp.r1": "Cholestérol total, LDL, HDL, triglycérides",
    "cmp.r2": "ApoB / ApoA1 — risque lipidique avancé",
    "cmp.r3": "Lipoprotéine(a) — risque cardiovasculaire génétique",
    "cmp.r4": "hsCRP — inflammation haute sensibilité",
    "cmp.r5": "Glycémie à jeun",
    "cmp.r6": "HbA1c — moyenne glycémique sur 3 mois",
    "cmp.r7": "Insuline à jeun + HOMA-IR",
    "cmp.r8": "Bilan hépatique & rénal complet",
    "cmp.r9": "Axe thyroïdien complet (TSH, T3L, T4L, Anti-TPO)",
    "cmp.r10": "Cortisol — axe surrénalien/stress",
    "cmp.r11": "Testostérone, SHBG, DHEA-S",
    "cmp.r12": "Œstradiol, progestérone, FSH, LH",
    "cmp.r13": "Vitamine D, B12, folate",
    "cmp.r14": "Zinc, magnésium, sélénium, oméga-3",
    "cmp.r15": "PSA, CA-125, ACE, AFP",
    "cmp.r16": "Rapport annoté examiné par un médecin",
    "cmp.r17": "Plan de santé personnalisé sur 12 mois",
    "cmp.r18": "Résultats sous 48 heures",
    "cmp.yes": "✓",
    "cmp.no": "✗",
    "cmp.partial": "Partiel",
    "cmp.selective": "Sélectif",
    "cmp.tshonly": "TSH uniquement",
    "cmp.varies": "Variable",
    "emotion.quote": "\"Vous donneriez à votre enfant tous les avantages du monde.<br><em>Accordez-vous la même chose.</em>\"",
    "emotion.attr": "— L'engagement Aeonix",
    "sc.label": "Ce que nous dépistons",
    "sc.title": "Chaque système. Chaque signal.<br>Rien n'est <em>oublié.</em>",
    "sc.sub": "Nous examinons votre corps comme un système intégré — car aucun biomarqueur n'existe de manière isolée.",
    "sc.1.n": "01",
    "sc.1.t": "Cardiovasculaire",
    "sc.1.d": "Fractionnement avancé des lipides, marqueurs inflammatoires artériels, évaluation du stress cardiaque et stratification du risque cardiovasculaire génétique via Lp(a) et les ratios ApoB/ApoA1.",
    "sc.2.n": "02",
    "sc.2.t": "Hormonal & endocrinien",
    "sc.2.d": "Cartographie complète de l'axe hypothalamo-hypophyso-gonadique, fonction surrénalienne, cascade thyroïdienne — le réseau régulateur de l'énergie, de l'humeur, de la fertilité et de la longévité.",
    "sc.3.n": "03",
    "sc.3.t": "Métabolique & glycémique",
    "sc.3.d": "Modélisation de la sensibilité à l'insuline (HOMA-IR), fonction hépatique et rénale, et évaluation du risque de syndrome métabolique — le moteur biochimique de la performance quotidienne.",
    "sc.4.n": "04",
    "sc.4.t": "Nutritionnel & micronutriments",
    "sc.4.d": "Les carences subcliniques précèdent la fatigue, le déclin cognitif et le dysfonctionnement immunitaire de plusieurs mois. Nous les détectons avant qu'elles deviennent des symptômes.",
    "sc.5.n": "05",
    "sc.5.t": "Inflammation & immunité",
    "sc.5.d": "L'inflammation systémique de bas grade est la physiopathologie commune des maladies cardiovasculaires, du diabète de type 2 et de la démence. Nous la mesurons avec précision.",
    "sc.6.n": "06",
    "sc.6.t": "Oncologie & détection précoce",
    "sc.6.d": "Marqueurs oncologiques sériques validés pour les principaux types de cancer. La détection précoce reste la variable de survie la plus puissante en oncologie.",
    "pricing.label": "Investissement en vous",
    "pricing.title": "Choisissez votre <em>niveau de clarté.</em>",
    "pricing.sub": "Tous les forfaits comprennent le traitement en laboratoire renommé, des résultats examinés par un médecin en 48h et votre tableau de bord de santé sécurisé.",
    "pricing.onetime": "Ponctuel",
    "pricing.sub.btn": "Abonnement annuel",
    "pricing.save": "Économisez CHF 300",
    "pricing.once": "Dépistage ponctuel",
    "pricing.year": "par an",
    "pricing.markers": "biomarqueurs",
    "pricing.popular": "Le plus populaire",
    "pricing.begin": "Commencer",
    "pricing.subscribe": "S'abonner & économiser",
    "pricing.note": "Tous les forfaits comprennent <strong>le traitement en laboratoire suisse renommé</strong>, <strong>un tableau de bord sécurisé</strong> et <strong>la pleine souveraineté des données RGPD</strong>.<br>Forfaits entreprise et famille disponibles. <a href='mailto:aeonix@alleshealth.com'>Contactez-nous</a> pour une tarification sur mesure.",
    "plan.prime": "Prime Health — 100+ Biomarkers",
    "plan.vital": "Vital Edge — 125+ Biomarkers",
    "plan.longevity": "Longevity Plus — 135+ Biomarkers",
    "plan.elite": "Élite",
    "plan.prime.f1": "Bilan cardiovasculaire de base",
    "plan.prime.f2": "Essentiels métaboliques",
    "plan.prime.f3": "Thyroïde (TSH)",
    "plan.prime.f4": "Numération formule sanguine",
    "plan.prime.f5": "Vitamine D & B12",
    "plan.prime.f6": "Consultation médicale 30 min",
    "plan.prime.f7": "Tableau de bord santé personnel",
    "plan.prime.f8": "Résultats en 48 heures",
    "plan.prime.f8sub": "Comparaison de tendances annuelle",
    "plan.vital.f1": "Tous les marqueurs Prime Health",
    "plan.vital.f2": "Lipides avancés (ApoB, Lp(a))",
    "plan.vital.f3": "Axe thyroïdien complet",
    "plan.vital.f4": "Panel hormonal",
    "plan.vital.f5": "Insuline + HOMA-IR",
    "plan.vital.f6": "Inflammation (hsCRP, IL-6)",
    "plan.vital.f7": "Bilan martial & micronutriments",
    "plan.vital.f8": "Consultation médicale 45 min",
    "plan.vital.f8sub": "Suivi longitudinal des tendances",
    "plan.lon.f1": "Tous les marqueurs Vital Edge",
    "plan.lon.f2": "Spectre hormonal complet",
    "plan.lon.f3": "Marqueurs oncologiques (PSA/CA-125)",
    "plan.lon.f4": "Panel métabolisme osseux",
    "plan.lon.f5": "Index oméga-3 + minéraux",
    "plan.lon.f6": "Consultation médicale 60 min",
    "plan.lon.f7": "Plan de santé personnalisé 12 mois",
    "plan.lon.f8": "Option concierge disponible",
    "plan.lon.f8sub": "Suivi d'année en année",
    "plan.elite.f1": "Tous les marqueurs Longevity Plus",
    "plan.elite.f2": "Profilage étendu des cytokines",
    "plan.elite.f3": "Panel oncologique avancé",
    "plan.elite.f4": "NT-proBNP + Cystatine C",
    "plan.elite.f5": "Prélèvement à domicile concierge",
    "plan.elite.f6": "Consultation médecin senior 90 min",
    "plan.elite.f7": "Référence spécialiste prioritaire",
    "plan.elite.f8": "Partenaire de santé dédié",
    "blog.label": "Santé & Savoir",
    "blog.title": "Le savoir est le début<br>de <em>tout.</em>",
    "blog.all": "Voir tous les articles →",
    "blog.1.cat": "Médecine préventive",
    "blog.1.title": "Pourquoi votre bilan de santé annuel passe à côté de 80% de ce qui compte",
    "blog.1.excerpt": "ApoB, HOMA-IR, T3L, IL-6 — là où les maladies commencent vraiment.",
    "blog.1.time": "6 min de lecture",
    "blog.2.cat": "Santé cardiovasculaire",
    "blog.2.title": "ApoB vs LDL : le test de cholestérol que votre médecin ne fait probablement pas",
    "blog.2.excerpt": "Le LDL raconte une histoire incomplète. L'ApoB est le marqueur que les cardiologues considèrent aujourd'hui comme l'étalon-or.",
    "blog.2.time": "7 min de lecture",
    "blog.3.cat": "Santé métabolique",
    "blog.3.title": "Résistance à l'insuline : comment être 'normal' sur le papier et rester à risque",
    "blog.3.excerpt": "Le HOMA-IR révèle ce que l'HbA1c et la glycémie à jeun ne peuvent pas montrer.",
    "blog.3.time": "8 min de lecture",
    "blog.read": "Lire →",
    "testi.label": "Témoignages",
    "testi.title": "Ce que ça fait de vraiment <em>savoir.</em>",
    "testi.sub": "De ceux qui ont choisi de prendre en main leur santé.",
    "testi.1.quote": "Je me considérais en bonne santé. Aeonix a révélé trois résultats cliniquement significatifs que mon médecin n'avait jamais testés. Les avoir détectés tôt a changé ma trajectoire.",
    "testi.1.name": "Markus H.",
    "testi.1.role": "PDG · Zurich",
    "testi.2.quote": "J'ai offert ce dépistage à mon mari pour notre anniversaire. Nous l'avons fait ensemble. C'est la chose la plus significative que nous ayons faite pour notre avenir commun.",
    "testi.2.name": "Sophie L.",
    "testi.2.role": "Genève",
    "testi.3.quote": "Enfin un service de santé qui me traite comme un adulte intelligent. La rigueur scientifique, la qualité de la consultation et le suivi — exceptionnel.",
    "testi.3.name": "Reto L.",
    "testi.3.role": "Banquier privé · Bâle",
    "exp.label": "Vision mondiale",
    "exp.title": "Début en Suisse.<br>Conçu pour le <em>monde.</em>",
    "exp.body1": "Aeonix se lance en Suisse — l'un des environnements de santé les plus rigoureux au monde. Nous apportons la même excellence clinique à ceux qui l'exigent, où qu'ils soient.",
    "exp.body2": "La santé préventive n'est pas un privilège. C'est l'avenir de la médecine.",
    "exp.ch.name": "Suisse",
    "exp.ch.status": "Lancement 2026",
    "exp.se.name": "Scandinavie",
    "exp.se.status": "À partir de 2027",
    "exp.ae.name": "Émirats arabes unis",
    "exp.ae.status": "À partir de 2027",
    "exp.gb.name": "Royaume-Uni",
    "exp.gb.status": "À partir de 2027",
    "cta.label": "Le premier pas",
    "cta.title": "La décision la plus importante<br>que vous prendrez est celle<br>de vous <em>connaître vraiment.</em>",
    "cta.sub": "Aeonix n'est pas un simple test de santé. C'est un engagement envers vous-même — et envers chaque personne qui vous aime.",
    "cta.book": "Réserver votre dépistage",
    "cta.talk": "Contacter notre équipe",
    "cta.note": "Aucune ordonnance · Résultats en 48h · Entièrement confidentiel · Laboratoire suisse renommé",
    "footer.brand": "Dépistage préventif cliniquement rigoureux, fondé sur la précision suisse et l'intégrité médicale. Un produit d'AllesHealth GmbH.",
    "footer.s1.title": "Dépistages",
    "footer.s1.l1": "Prime Health — CHF 595/yr",
    "footer.s1.l2": "Vital Edge — CHF 795/yr",
    "footer.s1.l3": "Longevity Plus — CHF 995/yr",
    "footer.s1.l4": "Aeonix Élite — CHF 1,295/yr",
    "footer.s1.l5": "Abonnements annuels",
    "footer.s2.title": "Entreprise",
    "footer.s2.l1": "À propos d'Aeonix",
    "footer.s2.l2": "Comment ça marche",
    "footer.s2.l3": "Santé & Savoir",
    "footer.s2.l4": "FAQ",
    "footer.s2.l5": "Santé en entreprise",
    "footer.s3.title": "Légal & Contact",
    "footer.s3.l1": "aeonix@alleshealth.com",
    "footer.s3.l2": "Nos laboratoires partenaires (bientôt)",
    "footer.s3.l3": "Politique de confidentialité",
    "footer.s3.l4": "Conditions d'utilisation",
    "footer.s3.l5": "Politique cookies",
    "footer.copy": "© 2026 AllesHealth GmbH. Tous droits réservés.\nAeonix est une marque d'AllesHealth GmbH · Aeonix.Health · Aeonix.ch",
    "footer.tagline": "Aeonix — Prenez en main votre santé",
    "faq.label": "Questions fréquentes",
    "faq.title": "Tout ce que vous<br>devez <em>savoir.</em>",
    "faq.sub": "Si votre question n'est pas répondue ici, notre équipe est disponible à aeonix@alleshealth.com — réponse sous un jour ouvrable.",
    "faq.corp": "Forfait entreprise ou famille ? Nous proposons des tarifs sur mesure pour les groupes de 4 personnes ou plus.",
    "faq.items": [
      {
        "q": "Qu'est-ce qui est inclus dans un dépistage ?",
        "a": "Chaque forfait comprend des analyses biologiques dans un laboratoire suisse de premier plan, un rapport annoté examiné par un médecin, et l'accès à votre tableau de bord de santé sécurisé. Les forfaits supérieurs incluent des panels plus larges, des consultations médicales et un prélèvement à domicile concierge."
      },
      {
        "q": "Ai-je besoin d'une ordonnance médicale ?",
        "a": "Non. Aeonix est un service en accès direct. Vous pouvez réserver et effectuer votre dépistage sans ordonnance. Si vos résultats indiquent un besoin de suivi spécialisé, nous faciliterons cette orientation."
      },
      {
        "q": "Quand recevrai-je mes résultats ?",
        "a": "Les résultats sont livrés dans votre tableau de bord sécurisé dans les 48 heures suivant la réception de votre échantillon par le laboratoire — bien plus rapidement que les analyses médicales standard."
      },
      {
        "q": "Un prélèvement sanguin est-il nécessaire ?",
        "a": "Oui. Aeonix utilise le prélèvement veineux — l'étalon-or clinique pour la précision des biomarqueurs. Prime Health et Vital Edge nécessitent une visite en clinique. Longevity Plus et Élite incluent une option de prélèvement à domicile concierge."
      },
      {
        "q": "Comment mes données sont-elles protégées ?",
        "a": "Toutes les données sont traitées et stockées en Suisse, en pleine conformité avec le RGPD et la loi suisse sur la protection des données. Nous ne partageons, vendons ni licencions jamais vos données de santé à des tiers — y compris les assureurs et les laboratoires pharmaceutiques."
      },
      {
        "q": "Puis-je utiliser Aeonix en parallèle de mon médecin ?",
        "a": "Absolument — et nous le recommandons. Votre rapport Aeonix est conçu pour compléter les soins médicaux habituels. De nombreux clients partagent leurs résultats annotés avec leur médecin pour enrichir la conversation clinique."
      },
      {
        "q": "Qui interprète les résultats ?",
        "a": "Chaque rapport est examiné par un médecin qualifié avant la livraison. Vos résultats ne sont pas des données brutes — ils sont contextualisés cliniquement, annotés selon votre démographie et accompagnés d'un plan d'action priorisé."
      },
      {
        "q": "Aeonix est-il remboursé par l'assurance suisse ?",
        "a": "Aeonix est un service de dépistage préventif privé, non couvert par l'assurance de base obligatoire (LAMal/LCA). Certaines assurances complémentaires peuvent offrir un remboursement partiel — nous vous recommandons de vérifier auprès de votre assureur."
      }
    ],
    "wl.float": "Réserver ma place",
    "wl.eyebrow": "Accès Membre Fondateur",
    "wl.title": "Il reste 453 places<br>fondatrices. La vôtre<br>sera-t-elle <em>l'une d'elles ?</em>",
    "wl.sub": "Les Membres Fondateurs Aeonix bénéficient de tarifs à vie, d'un accès exclusif en avant-première et de la fierté d'avoir contribué à quelque chose d'extraordinaire.",
    "wl.spots.label": "Places fondatrices réservées",
    "wl.spots.of": "/ 2'000",
    "wl.progress.remaining": "453 restantes",
    "wl.perk1": "Tarif fondateur garanti à vie — 20% sous le futur tarif public",
    "wl.perk2": "Accès prioritaire 48h avant le lancement officiel",
    "wl.perk3": "Inscription au registre des Membres Fondateurs Aeonix",
    "wl.perk4": "Invitez 2 amis — gagnez CHF 60 si l'un d'eux rejoint",
    "wl.form.title": "Sécurisez votre place fondatrice",
    "wl.form.sub": "Rejoignez 1'547 personnes déjà inscrites. Aucun paiement maintenant — nous vous prévenons en premier.",
    "wl.form.fname": "Prénom",
    "wl.form.lname": "Nom de famille",
    "wl.form.email": "Adresse email",
    "wl.form.plan": "Forfait souhaité",
    "wl.form.plan.select": "Choisir un forfait…",
    "wl.form.plan.unsure": "Pas encore décidé",
    "wl.form.city": "Ville / Pays",
    "wl.form.submit": "Réserver ma place fondatrice",
    "wl.form.fine": "Sans carte bancaire. Sans engagement. Nous vous contactons en premier au lancement.",
    "wl.success.title": "Vous êtes sur la liste.",
    "wl.success.sub": "Bienvenue, Membre Fondateur. Vous recevrez un email personnel 48h avant le lancement avec votre tarif exclusif confirmé.",
    "wl.success.member": "Membre Fondateur",
    "wl.success.member.sub": "Aeonix — Promotion 2026",
    "wl.ref.title": "Invitez 2 amis. Gagnez CHF 60.",
    "wl.ref.desc": "Quand un ami rejoint via votre lien, il bénéficie de 10% sur sa première année. Et vous gagnez CHF 60 appliqués automatiquement à votre renouvellement.",
    "wl.ref.pill": "✓ CHF 60 par parrainage · max 2 amis",
    "wl.ref.copy": "Copier le lien",
    "wl.ref.invite.title": "Ou inviter directement par email",
    "wl.ref.send": "Envoyer les invitations",
    "wl.ref.or": "ou partager via",
    "wl.ref.sent": "✓ Invitations envoyées. Vos amis ont reçu votre lien de parrainage personnel."
  },
  "it": {
    "nav.why": "Perché Aeonix",
    "nav.how": "Come funziona",
    "nav.compare": "vs Standard",
    "nav.pricing": "Piani",
    "nav.blog": "Sapere",
    "nav.faq": "FAQ",
    "nav.cta": "Prenota",
    "hero.eyebrow": "Screening preventivo · Svizzera",
    "hero.title": "Il più grande atto<br>d'amore è sapere<br>di stare <em>bene.</em>",
    "hero.sub": "Aeonix offre uno screening sanitario preventivo clinicamente rigoroso — oltre 150 biomarcatori validati, con risultati esaminati da un medico in 48 ore.",
    "hero.cta": "Possiedi la tua salute",
    "hero.learn": "Scopri come funziona",
    "hero.s1": "Biomarcatori",
    "hero.s2": "Risultati",
    "hero.s3": "Laboratori svizzeri",
    "hero.scroll": "Scorri per esplorare",
    "mq.1": "Panel cardiovascolare",
    "mq.2": "Profilazione ormonale",
    "mq.3": "Funzione metabolica",
    "mq.4": "Asse tiroideo",
    "mq.5": "Stato nutrizionale",
    "mq.6": "Marcatori oncologici",
    "mq.7": "Resilienza immunitaria",
    "mq.8": "Marcatori infiammatori",
    "mq.9": "Funzione epatica e renale",
    "mq.10": "Metabolismo osseo",
    "stats.1.n": "150+",
    "stats.1.l": "Biomarcatori — Panel Elite",
    "stats.1.s": "vs. media 12–20 in un check-up standard",
    "stats.2.n": "48h",
    "stats.2.l": "Consegna dei risultati",
    "stats.2.s": "Laboratorio svizzero rinomato",
    "stats.3.n": "Swiss",
    "stats.3.l": "Laboratorio svizzero rinomato",
    "stats.3.s": "Standard medico internazionale",
    "stats.4.n": "GDPR",
    "stats.4.l": "Piena sovranità dei dati",
    "stats.4.s": "Zero condivisione con terze parti",
    "why.label": "La nostra filosofia",
    "why.title": "La salute non è qualcosa<br>che si cura. È qualcosa<br>che si <em>possiede.</em>",
    "why.body1": "La maggior parte delle malattie croniche è preceduta da segnali biologici misurabili e correggibili — spesso anni prima che compaiano i sintomi. Eppure la maggior parte delle persone ricorre alle cure mediche solo quando è già tardi. <strong>Aeonix è stato progettato per colmare questa lacuna.</strong>",
    "why.body2": "Sfruttiamo l'infrastruttura medica svizzera e la scienza dei biomarcatori basata sulle prove per fornire un livello di intuizione biochimica che trasforma i pazienti passivi in custodi consapevoli della propria biologia.",
    "why.cite.label": "Base clinica:",
    "why.cite.body": "Ricerche su <em>The Lancet</em> e <em>NEJM</em> dimostrano che l'identificazione precoce dei biomarcatori riduce l'incidenza delle malattie in fase avanzata del 40–60%.",
    "why.c1.icon": "🔬",
    "why.c1.title": "Panel clinicamente validati",
    "why.c1.body": "Ogni marcatore selezionato su prove peer-reviewed. Testiamo ciò che conta.",
    "why.c2.icon": "📊",
    "why.c2.title": "Interpretazione personalizzata",
    "why.c2.body": "Risultati contestualizzati rispetto alla tua demografia, stile di vita e storia clinica.",
    "why.c3.icon": "🛡️",
    "why.c3.title": "Sovranità dei dati",
    "why.c3.body": "Piena conformità GDPR, residenza dei dati in Svizzera, zero condivisione con terzi.",
    "why.c4.icon": "👨‍⚕️",
    "why.c4.title": "Revisione medica",
    "why.c4.body": "Ogni referto viene esaminato da un medico qualificato. Orientamento, non solo numeri.",
    "callout.label": "Prendersi cura insieme",
    "callout.title": "Una decisione<br>per <em>entrambi.</em>",
    "callout.body": "Il regalo più grande che puoi fare alle persone che ami è sapere di stare bene. 100+ biomarcatori validati clinicamente, esaminati da un medico in 48 ore.",
    "callout.btn": "Vedi i piani — da CHF 595/anno",
    "how.label": "L'esperienza",
    "how.sub": "Dalla prenotazione ai risultati, in quattro passi.",
    "how.s1t": "Scegli il tuo piano",
    "how.s1d": "Da Prime Health (100+ marcatori) a Elite (150+). Una tantum o abbonamento annuale.",
    "how.s1x": "Disponibile online. Nessuna prescrizione richiesta.",
    "how.s2t": "Prelievo ematico privato",
    "how.s2d": "Visita in clinica o visita domiciliare concierge per Longevity Plus ed Elite.",
    "how.s2x": "A domicilio: 20 minuti prima del tuo primo appuntamento.",
    "how.s3t": "Analisi in un laboratorio svizzero rinomato",
    "how.s3d": "Elaborata in un laboratorio svizzero leader.",
    "how.s3x": "Precisione svizzera. Conforme al GDPR durante tutto il processo.",
    "how.s4t": "Risultati & consulenza medica",
    "how.s4d": "Il tuo referto in 48 ore, con consulenza medica e piano di salute personalizzato.",
    "how.s4x": "Dashboard longitudinale per monitorare la tua biologia anno dopo anno.",
    "ls.1.sub": "Salute femminile",
    "ls.1.hl": "Perché hanno bisogno di te.",
    "ls.2.sub": "Longevità · Prevenzione",
    "ls.2.hl": "Sapere prima che si veda.",
    "ls.3.sub": "Possiedi la tua salute",
    "ls.3.hl": "Ogni corpo merita di sapere.",
    "cmp.label": "Aeonix vs check-up standard",
    "cmp.title": "Perché un check-up standard<br>non è più <em>sufficiente.</em>",
    "cmp.sub": "Un tipico check-up dal medico di base testa 12–20 marcatori. Aeonix ne testa 90–150+ a seconda del piano.",
    "cmp.th.marker": "Area e marcatore",
    "cmp.th.aeonix": "✦ Aeonix (100–150+ marcatori)",
    "cmp.th.standard": "Check-up standard",
    "cmp.cat1": "❤️ Salute cardiovascolare",
    "cmp.cat2": "⚡ Funzione metabolica",
    "cmp.cat3": "⚖️ Ormonale & endocrino",
    "cmp.cat4": "🌿 Nutrizionale & micronutrienti",
    "cmp.cat5": "🔎 Oncologia & rilevazione precoce",
    "cmp.cat6": "📋 Referto & follow-up",
    "cmp.r1": "Colesterolo totale, LDL, HDL, trigliceridi",
    "cmp.r2": "ApoB / ApoA1 — rischio lipidico avanzato",
    "cmp.r3": "Lipoproteina(a) — rischio CV genetico",
    "cmp.r4": "hsCRP — infiammazione ad alta sensibilità",
    "cmp.r5": "Glicemia a digiuno",
    "cmp.r6": "HbA1c — media glicemica su 3 mesi",
    "cmp.r7": "Insulina a digiuno + HOMA-IR",
    "cmp.r8": "Panel epatico e renale completo",
    "cmp.r9": "Asse tiroideo completo (TSH, fT3, T4, Anti-TPO)",
    "cmp.r10": "Cortisolo — asse surrenalico/stress",
    "cmp.r11": "Testosterone, SHBG, DHEA-S",
    "cmp.r12": "Estradiolo, progesterone, FSH, LH",
    "cmp.r13": "Vitamina D, B12, folato",
    "cmp.r14": "Zinco, magnesio, selenio, omega-3",
    "cmp.r15": "PSA, CA-125, CEA, AFP",
    "cmp.r16": "Referto annotato revisionato da un medico",
    "cmp.r17": "Piano di salute personalizzato 12 mesi",
    "cmp.r18": "Risultati entro 48 ore",
    "cmp.yes": "✓",
    "cmp.no": "✗",
    "cmp.partial": "Parziale",
    "cmp.selective": "Selettivo",
    "cmp.tshonly": "Solo TSH",
    "cmp.varies": "Variabile",
    "emotion.quote": "\"Daresti a tuo figlio ogni vantaggio del mondo.<br><em>Concediti lo stesso.</em>\"",
    "emotion.attr": "— L'impegno Aeonix",
    "sc.label": "Cosa analizziamo",
    "sc.title": "Ogni sistema. Ogni segnale.<br>Niente viene <em>trascurato.</em>",
    "sc.sub": "Esaminiamo il tuo corpo come un sistema integrato — perché nessun biomarcatore esiste in isolamento.",
    "sc.1.n": "01",
    "sc.1.t": "Cardiovascolare",
    "sc.1.d": "Frazionamento avanzato dei lipidi, marcatori infiammatori arteriosi, valutazione dello stress cardiaco e stratificazione del rischio cardiovascolare genetico tramite Lp(a) e rapporti ApoB/ApoA1.",
    "sc.2.n": "02",
    "sc.2.t": "Ormonale & endocrino",
    "sc.2.d": "Mappatura completa dell'asse ipotalamo-ipofisi-gonadi, funzione surrenalica, cascata tiroidea — la rete regolatrice di energia, umore, fertilità e longevità.",
    "sc.3.n": "03",
    "sc.3.t": "Metabolico & glicemico",
    "sc.3.d": "Modellazione della sensibilità insulinica (HOMA-IR), funzione epatica e renale, e valutazione del rischio di sindrome metabolica — il motore biochimico delle prestazioni quotidiane.",
    "sc.4.n": "04",
    "sc.4.t": "Nutrizionale & micronutrienti",
    "sc.4.d": "Le carenze subcliniche precedono di mesi la fatica, il declino cognitivo e la disfunzione immunitaria. Le rileviamo prima che diventino sintomi.",
    "sc.5.n": "05",
    "sc.5.t": "Infiammazione & immunità",
    "sc.5.d": "L'infiammazione sistemica di basso grado è la fisiopatologia comune di malattie cardiovascolari, diabete di tipo 2 e demenza. La misuriamo con precisione.",
    "sc.6.n": "06",
    "sc.6.t": "Oncologia & rilevazione precoce",
    "sc.6.d": "Marcatori oncologici sierici validati per i principali tipi di cancro. La rilevazione precoce rimane la variabile di sopravvivenza più potente in oncologia.",
    "pricing.label": "Investimento in te",
    "pricing.title": "Scegli il tuo <em>livello di chiarezza.</em>",
    "pricing.sub": "Tutti i piani includono elaborazione in laboratorio rinomato, risultati esaminati da un medico in 48h e il tuo dashboard di salute sicuro.",
    "pricing.onetime": "Una tantum",
    "pricing.sub.btn": "Abbonamento annuale",
    "pricing.save": "Risparmia CHF 300",
    "pricing.once": "Screening una tantum",
    "pricing.year": "all'anno",
    "pricing.markers": "biomarcatori",
    "pricing.popular": "Il più popolare",
    "pricing.begin": "Inizia",
    "pricing.subscribe": "Abbonati e risparmia",
    "pricing.note": "Tutti i piani includono <strong>elaborazione in laboratorio svizzero rinomato</strong>, <strong>dashboard personale sicuro</strong> e <strong>piena sovranità dei dati GDPR</strong>.<br>Piani aziendali e familiari disponibili. <a href='mailto:aeonix@alleshealth.com'>Contattaci</a> per prezzi su misura.",
    "plan.prime": "Prime Health — 100+ Biomarkers",
    "plan.vital": "Vital Edge — 125+ Biomarkers",
    "plan.longevity": "Longevity Plus — 135+ Biomarkers",
    "plan.elite": "Aeonix Elite — 150+ Biomarkers",
    "plan.prime.f1": "Panel cardiovascolare di base",
    "plan.prime.f2": "Essenziali metabolici",
    "plan.prime.f3": "Tiroide (TSH)",
    "plan.prime.f4": "Emocromo completo",
    "plan.prime.f5": "Vitamina D & B12",
    "plan.prime.f6": "Consulenza medica 30 min",
    "plan.prime.f7": "Dashboard di salute personale",
    "plan.prime.f8": "Risultati in 48 ore",
    "plan.prime.f8sub": "Confronto annuale delle tendenze",
    "plan.vital.f1": "Tutti i marcatori Prime Health",
    "plan.vital.f2": "Lipidi avanzati (ApoB, Lp(a))",
    "plan.vital.f3": "Asse tiroideo completo",
    "plan.vital.f4": "Panel ormonale",
    "plan.vital.f5": "Insulina + HOMA-IR",
    "plan.vital.f6": "Infiammazione (hsCRP, IL-6)",
    "plan.vital.f7": "Studio del ferro & micronutrienti",
    "plan.vital.f8": "Consulenza medica 45 min",
    "plan.vital.f8sub": "Monitoraggio longitudinale delle tendenze",
    "plan.lon.f1": "Tutti i marcatori Vital Edge",
    "plan.lon.f2": "Spettro ormonale completo",
    "plan.lon.f3": "Marcatori oncologici (PSA/CA-125)",
    "plan.lon.f4": "Panel metabolismo osseo",
    "plan.lon.f5": "Indice omega-3 + minerali",
    "plan.lon.f6": "Consulenza medica 60 min",
    "plan.lon.f7": "Piano di salute personalizzato 12 mesi",
    "plan.lon.f8": "Opzione concierge disponibile",
    "plan.lon.f8sub": "Monitoraggio anno per anno",
    "plan.elite.f1": "Tutti i marcatori Longevity Plus",
    "plan.elite.f2": "Profilazione estesa delle citochine",
    "plan.elite.f3": "Panel oncologico avanzato",
    "plan.elite.f4": "NT-proBNP + Cistatina C",
    "plan.elite.f5": "Prelievo domiciliare concierge",
    "plan.elite.f6": "Consulenza medico senior 90 min",
    "plan.elite.f7": "Referral specialistico prioritario",
    "plan.elite.f8": "Partner di salute dedicato",
    "blog.label": "Approfondimenti sulla salute",
    "blog.title": "La conoscenza è l'inizio<br>di <em>tutto.</em>",
    "blog.all": "Vedi tutti gli articoli →",
    "blog.1.cat": "Medicina preventiva",
    "blog.1.title": "Perché il tuo check-up annuale dal medico di base manca l'80% di ciò che conta",
    "blog.1.excerpt": "ApoB, HOMA-IR, fT3, IL-6 — dove le malattie iniziano davvero.",
    "blog.1.time": "6 min di lettura",
    "blog.2.cat": "Salute cardiovascolare",
    "blog.2.title": "ApoB vs LDL: il test del colesterolo che il tuo medico probabilmente non fa",
    "blog.2.excerpt": "L'LDL racconta una storia incompleta. L'ApoB è il marcatore che i cardiologi considerano oggi lo standard d'oro.",
    "blog.2.time": "7 min di lettura",
    "blog.3.cat": "Salute metabolica",
    "blog.3.title": "Resistenza insulinica: come essere 'nella norma' sulla carta e rimanere a rischio",
    "blog.3.excerpt": "Il HOMA-IR rivela ciò che HbA1c e glicemia a digiuno non possono mostrare.",
    "blog.3.time": "8 min di lettura",
    "blog.read": "Leggi →",
    "testi.label": "Storie",
    "testi.title": "Come ci si sente a sapere davvero <em>la verità.</em>",
    "testi.sub": "Da chi ha scelto di possedere la propria salute.",
    "testi.1.quote": "Mi consideravo in salute. Aeonix ha rilevato tre risultati clinicamente significativi che il mio medico non aveva mai testato. Averli scoperti presto ha cambiato la mia traiettoria.",
    "testi.1.name": "Markus H.",
    "testi.1.role": "CEO · Zurigo",
    "testi.2.quote": "Ho regalato questo screening a mio marito per il nostro anniversario. Lo abbiamo fatto insieme. È la cosa più significativa che abbiamo fatto per il nostro futuro comune.",
    "testi.2.name": "Sophie L.",
    "testi.2.role": "Ginevra",
    "testi.3.quote": "Finalmente un servizio sanitario che mi tratta da adulto intelligente. Il rigore scientifico, la qualità della consulenza e il follow-up — eccezionale.",
    "testi.3.name": "Reto L.",
    "testi.3.role": "Banchiere privato · Basilea",
    "exp.label": "Visione globale",
    "exp.title": "Iniziamo dalla Svizzera.<br>Costruito per il <em>mondo.</em>",
    "exp.body1": "Aeonix si lancia in Svizzera — uno degli ambienti sanitari più rigorosi al mondo. Portiamo la stessa eccellenza clinica a chi la esige, ovunque si trovi.",
    "exp.body2": "La salute preventiva non è un privilegio. È il futuro della medicina.",
    "exp.ch.name": "Svizzera",
    "exp.ch.status": "Lancio 2026",
    "exp.se.name": "Scandinavia",
    "exp.se.status": "Dal 2027",
    "exp.ae.name": "Emirati Arabi Uniti",
    "exp.ae.status": "Dal 2027",
    "exp.gb.name": "Regno Unito",
    "exp.gb.status": "Dal 2027",
    "cta.label": "Il primo passo",
    "cta.title": "La decisione più importante<br>che prenderai è quella<br>di conoscerti <em>davvero.</em>",
    "cta.sub": "Aeonix non è un semplice test di salute. È un impegno verso te stesso — e verso ogni persona che ti vuole bene.",
    "cta.book": "Prenota il tuo screening",
    "cta.talk": "Parla con il nostro team",
    "cta.note": "Nessuna prescrizione · Risultati in 48h · Completamente riservato · Laboratorio svizzero rinomato",
    "footer.brand": "Screening preventivo clinicamente rigoroso, basato sulla precisione svizzera e l'integrità medica. Un prodotto di AllesHealth GmbH.",
    "footer.s1.title": "Screening",
    "footer.s1.l1": "Prime Health — CHF 595/yr",
    "footer.s1.l2": "Vital Edge — CHF 795/yr",
    "footer.s1.l3": "Longevity Plus — CHF 995/yr",
    "footer.s1.l4": "Aeonix Elite — CHF 1,295/yr",
    "footer.s1.l5": "Abbonamenti annuali",
    "footer.s2.title": "Azienda",
    "footer.s2.l1": "Chi siamo",
    "footer.s2.l2": "Come funziona",
    "footer.s2.l3": "Approfondimenti",
    "footer.s2.l4": "FAQ",
    "footer.s2.l5": "Salute aziendale",
    "footer.s3.title": "Legale & Contatti",
    "footer.s3.l1": "aeonix@alleshealth.com",
    "footer.s3.l2": "I nostri laboratori partner (prossimamente)",
    "footer.s3.l3": "Informativa sulla privacy",
    "footer.s3.l4": "Termini di servizio",
    "footer.s3.l5": "Informativa sui cookie",
    "footer.copy": "© 2026 AllesHealth GmbH. Tutti i diritti riservati.\nAeonix è un marchio di AllesHealth GmbH · Aeonix.Health · Aeonix.ch",
    "footer.tagline": "Aeonix — Possiedi la tua salute",
    "faq.label": "Domande frequenti",
    "faq.title": "Tutto quello che devi<br><em>sapere.</em>",
    "faq.sub": "Se la tua domanda non ha risposta qui, il nostro team è disponibile a aeonix@alleshealth.com — risposta entro un giorno lavorativo.",
    "faq.corp": "Piano aziendale o familiare? Offriamo prezzi su misura per gruppi di 4 o più persone.",
    "faq.items": [
      {
        "q": "Cosa è incluso in uno screening?",
        "a": "Ogni piano include analisi di biomarcatori in un laboratorio svizzero leader, un referto annotato esaminato da un medico e accesso al tuo dashboard di salute personale sicuro. I piani superiori includono panel più ampi, consulenze mediche e prelievo domiciliare concierge."
      },
      {
        "q": "Ho bisogno di una prescrizione medica?",
        "a": "No. Aeonix è un servizio ad accesso diretto. Puoi prenotare e completare lo screening senza prescrizione. Se i tuoi risultati indicano la necessità di un follow-up specialistico, faciliteremo quel referral per te."
      },
      {
        "q": "Quando riceverò i miei risultati?",
        "a": "I risultati vengono consegnati nel tuo dashboard sicuro entro 48 ore dalla ricezione del campione da parte del laboratorio — significativamente più veloce delle analisi standard richieste dal medico di base."
      },
      {
        "q": "È necessario un prelievo di sangue?",
        "a": "Sì. Aeonix utilizza il prelievo venoso — lo standard clinico oro per l'accuratezza dei biomarcatori. Prime Health e Vital Edge richiedono una visita in clinica. Longevity Plus ed Elite includono un'opzione di prelievo domiciliare concierge."
      },
      {
        "q": "Come sono protetti i miei dati?",
        "a": "Tutti i dati vengono elaborati e archiviati in Svizzera, in piena conformità con il GDPR e la legge svizzera sulla protezione dei dati. Non condividiamo, vendiamo o licenziamo mai i tuoi dati sanitari a terze parti — inclusi assicuratori e aziende farmaceutiche."
      },
      {
        "q": "Posso usare Aeonix insieme al mio medico?",
        "a": "Assolutamente — e lo incoraggiamo. Il tuo referto Aeonix è progettato per complementare le cure mediche abituali. Molti clienti condividono i loro risultati annotati con il medico di base per arricchire la conversazione clinica."
      },
      {
        "q": "Chi interpreta i risultati?",
        "a": "Ogni referto viene esaminato da un medico qualificato prima della consegna. I tuoi risultati non sono dati grezzi di laboratorio — sono contestualizzati clinicamente, annotati secondo la tua demografia e accompagnati da un piano d'azione prioritizzato."
      },
      {
        "q": "Aeonix è coperto dall'assicurazione svizzera?",
        "a": "Aeonix è un servizio di screening preventivo privato, attualmente non coperto dall'assicurazione obbligatoria di base (LAMal/LCA). Alcune assicurazioni complementari possono offrire un rimborso parziale — ti consigliamo di verificare con la tua assicurazione."
      }
    ],
    "wl.float": "Prenota il tuo posto",
    "wl.eyebrow": "Accesso Membro Fondatore",
    "wl.title": "Rimangono 453 posti<br>fondatori. Uno sarà<br><em>il tuo?</em>",
    "wl.sub": "I Membri Fondatori Aeonix si assicurano prezzi a vita, accesso anticipato esclusivo e la consapevolezza di aver contribuito a qualcosa di straordinario fin dall'inizio.",
    "wl.spots.label": "Posti fondatori prenotati",
    "wl.spots.of": "/ 2'000",
    "wl.progress.remaining": "453 rimanenti",
    "wl.perk1": "Prezzo fondatore garantito a vita — 20% sotto la tariffa pubblica futura",
    "wl.perk2": "Accesso prioritario 48h prima del lancio ufficiale",
    "wl.perk3": "Iscritto nel registro dei Membri Fondatori Aeonix",
    "wl.perk4": "Invita 2 amici — guadagna CHF 60 quando uno si unisce",
    "wl.form.title": "Assicura il tuo posto fondatore",
    "wl.form.sub": "Unisciti a 1.547 persone già iscritte. Nessun pagamento ora — ti avvisiamo per primi.",
    "wl.form.fname": "Nome",
    "wl.form.lname": "Cognome",
    "wl.form.email": "Indirizzo email",
    "wl.form.plan": "Piano di interesse",
    "wl.form.plan.select": "Seleziona un piano…",
    "wl.form.plan.unsure": "Non ancora sicuro",
    "wl.form.city": "Città / Paese",
    "wl.form.submit": "Prenota il mio posto fondatore",
    "wl.form.fine": "Nessuna carta di credito. Nessun impegno. Ti contatteremo per primi al lancio.",
    "wl.success.title": "Sei nella lista.",
    "wl.success.sub": "Benvenuto, Membro Fondatore. Riceverai un'email personale 48h prima del lancio con il tuo prezzo esclusivo confermato.",
    "wl.success.member": "Membro Fondatore",
    "wl.success.member.sub": "Aeonix — Classe 2026",
    "wl.ref.title": "Invita 2 amici. Guadagna CHF 60.",
    "wl.ref.desc": "Quando un amico si unisce tramite il tuo link, ottiene il 10% di sconto sul primo anno. E tu guadagni CHF 60 applicati automaticamente al tuo rinnovo.",
    "wl.ref.pill": "✓ CHF 60 per referral · max 2 amici",
    "wl.ref.copy": "Copia link",
    "wl.ref.invite.title": "O invita direttamente via email",
    "wl.ref.send": "Invia inviti personali",
    "wl.ref.or": "oppure condividi via",
    "wl.ref.sent": "✓ Inviti inviati. I tuoi amici hanno ricevuto il tuo link di referral personale."
  }
};
let curLang = 'en';

// ── Articles data ─────────────────────────────────
const ARTICLES = [
  { "slug": "annual-vs-subscription-screening", "section": "Preventive Medicine", "date": "2025-01-15", "read_time": "5 min read", "color": "#4A8C6F", "title": "One Test or Annual Screening? Why Longitudinal Tracking Changes Everything", "desc": "A single biomarker result is a snapshot. Annual tracking is a film. The clinical intelligence gained from longitudinal screening is qualitatively different — and clinically superior.", "body": "<p>A single comprehensive blood test is vastly more valuable than the standard GP check-up. But a single test, however comprehensive, is still a snapshot — a single point in time. The most clinically powerful form of biomarker intelligence is longitudinal: seeing how your markers evolve, year after year, in the context of your life choices, stressors, and ageing biology. An ApoB of 90 mg/dL means something very different if it was 70 last year than if it has been 90 for three consecutive years. A rising hsCRP matters far more than a single elevated reading. Annual tracking converts data into clinical intelligence.</p><p>At Aeonix, our comprehensive panels cover the markers that matter — tested in leading Swiss laboratories, reviewed by a qualified physician, and delivered within 48 hours. Because the information that protects your health should not depend on the accident of what your GP happens to order.</p>\n\n  <div class=\"article-cta\">\n    <h3>Aeonix — Own Your Health</h3>\n    <p>over 150 clinically validated biomarkers. Physician-reviewed results in 48 hours. Renowned Swiss lab. GDPR-compliant.</p>\n    <a href=\"/#pricing\" class=\"cta-btn\">Own Your Health — Book a Screening</a>\n  </div>", "title_de": "Einmaltest oder Jahresscreening? Warum longitudinales Monitoring alles verändert", "desc_de": "Ein einzelnes Biomarker-Ergebnis ist eine Momentaufnahme. Jährliches Tracking ist ein Film. Die klinische Aussagekraft longitudinalen Screenings ist qualitativ anders – und klinisch überlegen.", "section_de": "Präventivmedizin", "body_de": "<p>Ein einziger umfassender Bluttest ist deutlich wertvoller als die Standard-Hausarztuntersuchung. Aber selbst ein umfassender Einzeltest bleibt eine Momentaufnahme – ein einziger Zeitpunkt. Die klinisch leistungsstärkste Form der Biomarker-Intelligenz ist longitudinal: zu sehen, wie sich Ihre Werte von Jahr zu Jahr im Kontext Ihrer Lebensentscheidungen, Stressfaktoren und der biologischen Alterung entwickeln. Ein ApoB-Wert von 90 mg/dL bedeutet etwas anderes, wenn er über drei Jahre stabil war, als wenn er sich in denselben drei Jahren von 72 auf 90 erhöht hat.</p><p>Beim Aeonix-Jahresabonnement geht es nicht nur um Bequemlichkeit. Es geht darum, die klinisch wertvollste Form von Gesundheitsdaten zu generieren: Ihre eigene Verlaufskurve, interpretiert von einem Arzt, der sowohl Ihre aktuellen Werte als auch deren Entwicklung kennt.</p><h2>Was longitudinales Tracking klinisch verändert</h2><p>Einzelergebnisse werden anhand von Bevölkerungsreferenzbereichen bewertet. Ihr Hausarzt kann beurteilen, ob Sie im normalen Bereich liegen – aber nicht, ob Sie sich auf den oberen Rand des Normalbereichs zubewegen oder von ihm weg. Diese Bewegung ist oft klinisch bedeutsamer als der Absolutwert.</p>", "title_fr": "Un test unique ou un suivi annuel ? Pourquoi le dépistage longitudinal change tout", "desc_fr": "Un résultat de biomarqueur unique est une photo. Le suivi annuel est un film. L'intelligence clinique du dépistage longitudinal est qualitativement différente — et cliniquement supérieure.", "section_fr": "Médecine préventive", "body_fr": "<p>Un seul bilan sanguin complet est bien plus précieux qu'un simple bilan de santé chez un généraliste. Mais même un test unique, aussi complet soit-il, reste un instantané — un point unique dans le temps. La forme la plus puissante cliniquement de l'intelligence biomarqueur est longitudinale : observer l'évolution de vos marqueurs d'année en année, dans le contexte de vos choix de vie, de vos facteurs de stress et de votre biologie vieillissante. Un ApoB de 90 mg/dL signifie quelque chose de différent s'il est stable depuis trois ans que s'il est passé de 72 à 90 sur cette même période.</p><p>L'abonnement annuel Aeonix n'est pas qu'une question de commodité. Il s'agit de générer la forme la plus précieuse de données de santé : votre propre courbe de tendance, interprétée par un médecin qui connaît à la fois vos valeurs actuelles et leur trajectoire.</p><h2>Ce que le suivi longitudinal change cliniquement</h2><p>Les résultats individuels sont évalués par rapport aux plages de référence de la population. Votre médecin peut évaluer si vous êtes dans la norme — mais pas si vous vous dirigez vers la limite supérieure ou si vous vous en éloignez. Ce mouvement est souvent cliniquement plus significatif que la valeur absolue.</p>", "title_it": "Un solo test o screening annuale? Perché il monitoraggio longitudinale cambia tutto", "desc_it": "Un singolo risultato biomarker è un'istantanea. Il monitoraggio annuale è un film. L'intelligenza clinica dello screening longitudinale è qualitativamente diversa — e clinicamente superiore.", "section_it": "Medicina preventiva", "body_it": "<p>Un singolo esame del sangue completo è molto più prezioso di un normale controllo dal medico di base. Ma anche il test più completo rimane un'istantanea — un singolo punto nel tempo. La forma clinicamente più potente di intelligenza biomarker è longitudinale: osservare come i tuoi valori si evolvono anno dopo anno, nel contesto delle tue scelte di vita, dei fattori di stress e della biologia dell'invecchiamento. Un ApoB di 90 mg/dL significa qualcosa di diverso se è stabile da tre anni rispetto a se è passato da 72 a 90 nello stesso periodo.</p><p>L'abbonamento annuale Aeonix non riguarda solo la comodità. Si tratta di generare la forma più preziosa di dati sulla salute: la tua curva di tendenza personale, interpretata da un medico che conosce sia i tuoi valori attuali che la loro traiettoria.</p><h2>Cosa cambia il monitoraggio longitudinale clinicamente</h2><p>I risultati singoli vengono valutati rispetto agli intervalli di riferimento della popolazione. Il tuo medico può valutare se sei nella norma — ma non se ti stai avvicinando al limite superiore della normalità o allontanando da esso. Questo movimento è spesso clinicamente più significativo del valore assoluto.</p>" },
  { "slug": "apob-vs-ldl-cholesterol", "section": "Cardiovascular Health", "date": "2025-01-15", "read_time": "7 min read", "color": "#C0645A", "title": "ApoB vs LDL: The Cholesterol Test Your Doctor Probably Isn't Ordering", "desc": "LDL cholesterol tells an incomplete story. ApoB is the marker cardiologists now consider the gold standard for cardiovascular risk. Learn why Aeonix includes it — and your GP likely doesn't.", "body": "<p>For decades, LDL cholesterol — the so-called \"bad cholesterol\" — has been the standard measure of cardiovascular risk. If your LDL was in range, you were considered low-risk. Millions of heart attacks happened to people with \"normal\" LDL.</p>\n\n<p>The problem is that LDL measures cholesterol <em>mass</em>, not the particles that carry it. And it is the particles — specifically, their number and density — that drive arterial damage.</p>\n\n<h2>Why ApoB is the superior marker</h2>\n<p>ApoB (apolipoprotein B) is a protein that sits on the surface of every atherogenic lipoprotein particle — every LDL, VLDL, IDL, and Lp(a) molecule that can penetrate your arterial walls. One ApoB = one particle. This makes it a direct count of cardiovascular threat.</p>\n\n<p>A landmark 2022 European Heart Journal study showed that ApoB predicted MACE (major adverse cardiovascular events) with significantly greater accuracy than LDL-C across all age groups and metabolic profiles. The European Society of Cardiology now recommends ApoB as a primary cardiovascular risk marker.</p>\n\n<h2>The dangerous gap: normal LDL, high ApoB</h2>\n<p>This is the critical scenario. A person can have a \"normal\" LDL reading — say, 3.2 mmol/L — while carrying a very high number of small, dense LDL particles (sdLDL). These particles are smaller, penetrate arterial walls more easily, and are more susceptible to oxidation. Their total cholesterol mass may appear normal, but ApoB will reveal the true count.</p>\n\n<p>This pattern — normal LDL, elevated ApoB — is particularly common in people with metabolic syndrome, insulin resistance, or elevated triglycerides. Precisely the population that looks \"fine\" on a standard check-up.</p>\n\n<h2>What about ApoA1?</h2>\n<p>ApoA1 is the primary protein on HDL particles — the \"good cholesterol\" vehicles that remove cholesterol from arterial walls. The ApoB/ApoA1 ratio gives a single number expressing the balance between atherogenic forces (ApoB) and protective forces (ApoA1). Research shows this ratio outperforms both LDL-C and HDL-C individually as a predictor of cardiovascular mortality.</p>\n\n<h2>What Aeonix measures — and why it matters</h2>\n<p>Every Aeonix panel from Vital Edge upwards includes ApoB, ApoA1, and the ApoB/ApoA1 ratio, alongside Lipoprotein(a) — another underscreened genetic risk factor carried by 20% of the population. Your physician-reviewed report contextualises all of these against your full clinical picture.</p>\n\n<p>Understanding your cardiovascular risk should not require you to know the biochemistry. That is our job. Your job is simply to have the right information.</p>\n\n  <div class=\"article-cta\">\n    <h3>Aeonix — Own Your Health</h3>\n    <p>over 150 clinically validated biomarkers. Physician-reviewed results in 48 hours. Renowned Swiss lab. GDPR-compliant.</p>\n    <a href=\"/#pricing\" class=\"cta-btn\">Own Your Health — Book a Screening</a>\n  </div>", "title_de": "ApoB vs. LDL: Der Cholesterin-Test, den Ihr Arzt wahrscheinlich nicht anordnet", "desc_de": "LDL-Cholesterin erzählt eine unvollständige Geschichte. ApoB ist der Marker, den Kardiologen heute als Goldstandard für das kardiovaskuläre Risiko betrachten. Erfahren Sie, warum Aeonix ihn misst – und Ihr Hausarzt wahrscheinlich nicht.", "section_de": "Herz-Kreislauf-Gesundheit", "body_de": "<p>Jahrzehntelang war LDL-Cholesterin – das sogenannte «schlechte Cholesterin» – das Standardmaß für das kardiovaskuläre Risiko. Lag Ihr LDL im Normbereich, galten Sie als risikoarm. Millionen von Herzinfarkten ereigneten sich bei Menschen mit «normalem» LDL.</p><p>Das Problem: LDL misst die Cholesterin-<em>masse</em>, nicht die Partikel, die es transportieren. Und es sind die Partikel – genauer ihre Anzahl und Dichte – die arteriellen Schaden verursachen.</p><h2>Warum ApoB der überlegene Marker ist</h2><p>ApoB (Apolipoprotein B) ist ein Protein auf der Oberfläche jedes atherogenen Lipoproteinpartikels – jedes LDL-, VLDL-, IDL- und Lp(a)-Moleküls, das in Ihre Arterienwände eindringen kann. Ein ApoB = ein Partikel. Das macht es zu einem direkten Zählmaß der kardiovaskulären Bedrohung.</p><p>Eine wegweisende Studie im European Heart Journal 2022 zeigte, dass ApoB schwere kardiovaskuläre Ereignisse mit deutlich größerer Genauigkeit vorhersagt als LDL-C – in allen Altersgruppen und metabolischen Profilen. Die Europäische Gesellschaft für Kardiologie empfiehlt ApoB nun als primären kardiovaskulären Risikomarker.</p><h2>Die gefährliche Lücke: normales LDL, hohes ApoB</h2><p>Ein Mensch kann ein normales LDL von unter 3,0 mmol/L haben und dennoch ein erhöhtes ApoB aufweisen. Dies geschieht, wenn kleine, dichte LDL-Partikel vorherrschen – jeder einzelne enthält weniger Cholesterin, aber jeder ist gleichmäßig atherogen. Dieser Phänotyp – der sogenannte «sdLDL-Phänotyp» – ist bei Menschen mit Insulinresistenz, metabolischem Syndrom und Typ-2-Diabetes besonders verbreitet.</p>", "title_fr": "ApoB vs LDL : Le test de cholestérol que votre médecin ne commande probablement pas", "desc_fr": "Le cholestérol LDL ne raconte qu'une histoire incomplète. L'ApoB est le marqueur que les cardiologues considèrent désormais comme l'étalon-or du risque cardiovasculaire. Découvrez pourquoi Aeonix l'inclut — et pas votre généraliste.", "section_fr": "Santé cardiovasculaire", "body_fr": "<p>Pendant des décennies, le cholestérol LDL — le soi-disant « mauvais cholestérol » — a été la mesure standard du risque cardiovasculaire. Si votre LDL était dans les normes, vous étiez considéré comme à faible risque. Des millions de crises cardiaques sont survenues chez des personnes avec un LDL « normal ».</p><p>Le problème est que le LDL mesure la <em>masse</em> de cholestérol, pas les particules qui le transportent. Et ce sont les particules — plus précisément leur nombre et leur densité — qui causent les dommages artériels.</p><h2>Pourquoi l'ApoB est le marqueur supérieur</h2><p>L'ApoB (apolipoprotéine B) est une protéine qui se trouve à la surface de chaque particule lipoprotéique athérogène — chaque molécule LDL, VLDL, IDL et Lp(a) capable de pénétrer dans vos parois artérielles. Un ApoB = une particule. Cela en fait un comptage direct de la menace cardiovasculaire.</p><p>Une étude phare publiée dans l'European Heart Journal en 2022 a montré que l'ApoB prédit les événements cardiovasculaires majeurs avec une précision nettement supérieure au LDL-C, dans tous les groupes d'âge et profils métaboliques. La Société Européenne de Cardiologie recommande désormais l'ApoB comme marqueur primaire du risque cardiovasculaire.</p><h2>L'écart dangereux : LDL normal, ApoB élevé</h2><p>Une personne peut avoir un LDL normal inférieur à 3,0 mmol/L et présenter néanmoins un ApoB élevé. Cela se produit lorsque des particules LDL petites et denses prédominent — chacune contient moins de cholestérol, mais chacune est également athérogène. Ce phénotype est particulièrement répandu chez les personnes présentant une résistance à l'insuline, un syndrome métabolique et un diabète de type 2.</p>", "title_it": "ApoB vs LDL: Il test del colesterolo che il tuo medico probabilmente non ordina", "desc_it": "Il colesterolo LDL racconta una storia incompleta. L'ApoB è il marcatore che i cardiologi considerano oggi lo standard di riferimento per il rischio cardiovascolare. Scopri perché Aeonix lo include — e il tuo medico di base probabilmente no.", "section_it": "Salute cardiovascolare", "body_it": "<p>Per decenni, il colesterolo LDL — il cosiddetto «colesterolo cattivo» — è stato la misura standard del rischio cardiovascolare. Se il tuo LDL era nei limiti, eri considerato a basso rischio. Milioni di infarti sono avvenuti in persone con LDL «normale».</p><p>Il problema è che il LDL misura la <em>massa</em> del colesterolo, non le particelle che lo trasportano. E sono le particelle — specificamente il loro numero e densità — a causare il danno arterioso.</p><h2>Perché l'ApoB è il marcatore superiore</h2><p>L'ApoB (apolipoproteina B) è una proteina sulla superficie di ogni particella lipoproteica aterogena — ogni molecola LDL, VLDL, IDL e Lp(a) in grado di penetrare nelle pareti arteriose. Un ApoB = una particella. Questo lo rende un conteggio diretto della minaccia cardiovascolare.</p><p>Uno studio fondamentale del 2022 sull'European Heart Journal ha dimostrato che l'ApoB predice eventi cardiovascolari maggiori con precisione significativamente superiore all'LDL-C, in tutti i gruppi di età e profili metabolici. La Società Europea di Cardiologia raccomanda ora l'ApoB come marcatore primario del rischio cardiovascolare.</p><h2>Il divario pericoloso: LDL normale, ApoB elevato</h2><p>Una persona può avere un LDL normale inferiore a 3,0 mmol/L e presentare comunque un ApoB elevato. Questo accade quando predominano particelle LDL piccole e dense — ognuna contiene meno colesterolo, ma ognuna è ugualmente aterogena. Questo fenotipo è particolarmente comune nelle persone con resistenza all'insulina, sindrome metabolica e diabete di tipo 2.</p>" },
  { "slug": "biological-age-test-switzerland", "section": "Longevity Science", "date": "2026-08-06", "read_time": "6 min read", "color": "#2A7BA8", "title": "Biological Age vs. Chronological Age: What Your Blood Can (and Can't) Tell You", "desc": "Biological age testing is trending across Switzerland. Here's what the science supports, what Aeonix measures, and why we won't sell you a single invented number.", "body": "<p>\"Biological age\" has become one of the most searched health terms in Switzerland this year. Swiss researchers \u2014 including Stanford-trained scientist Tony Wyss-Coray, whose work on blood-based aging biomarkers has been covered by SRF and the NZZ \u2014 have helped drive a genuine scientific field forward. The University of Basel now runs a healthy-longevity research campus built partly around this work. The interest is real. So is the science, up to a point.</p>\n\n<p>But there is a gap between what serious researchers claim and what many consumer \"biological age\" products imply. We think that gap matters, and we would rather explain it than paper over it.</p>\n\n<h2>What \"biological age\" actually measures</h2>\n<p>Chronological age is simple: the number of years since you were born. Biological age is an attempt to measure how old your cells, tissues, and organs <em>behave</em> \u2014 which can run faster or slower than the calendar, depending on genetics, lifestyle, and disease exposure.</p>\n\n<p>The best-studied approach uses epigenetic clocks \u2014 algorithms that read DNA methylation patterns from a blood or saliva sample. The first was published by Steve Horvath in 2013. Since then, dozens of variations have been developed, each producing different results for the same person.</p>\n\n<h2>What the science actually supports</h2>\n<p>Epigenetic clocks are a genuinely active, credible area of research. What the science does <em>not</em> yet support is a single, validated number that reliably predicts your individual remaining lifespan. Different clocks disagree with each other \u2014 researchers at Z\u00fcrich's own Healthy Longevity Center have publicly cautioned against over-interpreting these tools in isolation.</p>\n\n<h2>Why Aeonix doesn't sell you a \"biological age score\"</h2>\n<p>Aeonix does not run an epigenetic clock, and we don't output a single invented age number. The field isn't settled enough yet for a single score to mean the same thing from one lab to the next \u2014 and our role is to deliver accurate, physician-reviewed laboratory results, not a proprietary interpretation layered on top of them.</p>\n\n<h2>What your biomarkers can tell you instead</h2>\n<p>Most biological-age formulas are themselves built from the same categories of biomarker Aeonix already tests: chronic inflammation (hsCRP, IL-6), metabolic health (fasting insulin, HOMA-IR, HbA1c), cardiovascular particle count (ApoB, Lp(a)), hormonal decline markers (DHEA-S, free T3/T4), and nutritional status (Vitamin D, Omega-3 Index). Instead of one number you can't independently verify, you get physician-reviewed values for the individual systems actually driving aging-related risk \u2014 each one trackable and actionable over time.</p>\n\n  <div class=\"article-cta\">\n    <h3>Aeonix \u2014 Own Your Health</h3>\n    <p>100 to 150+ clinically validated biomarkers. Physician-reviewed results in 48 hours. Renowned Swiss lab. GDPR-compliant.</p>\n    <a href=\"/#pricing\" class=\"cta-btn\">Own Your Health \u2014 Book a Screening</a>\n  </div>", "title_de": "Biologisches Alter vs. Chronologisches Alter: Was Ihr Blut wirklich verr\u00e4t", "desc_de": "Tests zum biologischen Alter sind ein wachsender Trend in der Schweiz. Was die Wissenschaft belegt, was Aeonix misst \u2014 und warum wir Ihnen keine erfundene Zahl verkaufen.", "section_de": "Longevity Science", "body_de": "<p>\u00abBiologisches Alter\u00bb ist eines der meistgesuchten Gesundheitsthemen der Schweiz in diesem Jahr. Schweizer Forscher \u2014 darunter Tony Wyss-Coray, dessen Arbeit zu blutbasierten Alterungs-Biomarkern von SRF und der NZZ aufgegriffen wurde \u2014 haben ein ernstzunehmendes Forschungsfeld vorangetrieben. Das Interesse ist real. Die Wissenschaft ist es auch \u2014 bis zu einem gewissen Punkt.</p>\n\n<h2>Was \u00abbiologisches Alter\u00bb tats\u00e4chlich misst</h2>\n<p>Das chronologische Alter ist einfach: die Anzahl Jahre seit der Geburt. Das biologische Alter versucht zu messen, wie alt sich Ihre Zellen und Organe <em>verhalten</em> \u2014 abh\u00e4ngig von Genetik, Lebensstil und Krankheitsverlauf. Der am besten untersuchte Ansatz nutzt epigenetische Uhren, die DNA-Methylierungsmuster aus einer Blutprobe auslesen.</p>\n\n<h2>Was die Wissenschaft belegt \u2014 und was nicht</h2>\n<p>Epigenetische Uhren sind ein aktives, seri\u00f6ses Forschungsfeld. Was die Wissenschaft nicht belegt, ist eine einzelne Zahl, die zuverl\u00e4ssig Ihre Lebenserwartung vorhersagt. Verschiedene Uhren widersprechen sich gegenseitig \u2014 Forschende am Healthy Longevity Center der Universit\u00e4t Z\u00fcrich warnen \u00f6ffentlich davor, diese Werkzeuge isoliert \u00fcberzubewerten.</p>\n\n<h2>Warum Aeonix keinen \u00abBiologisches-Alter-Score\u00bb verkauft</h2>\n<p>Aeonix f\u00fchrt keine epigenetische Uhr durch. Das Feld ist noch nicht ausgereift genug f\u00fcr eine einzelne, labor-\u00fcbergreifend vergleichbare Zahl \u2014 und unsere Aufgabe ist es, pr\u00e4zise, \u00e4rztlich gepr\u00fcfte Laborergebnisse zu liefern, nicht eine propriet\u00e4re Interpretation dar\u00fcber zu legen.</p>\n\n<h2>Was Ihre Biomarker stattdessen verraten</h2>\n<p>Die meisten Formeln f\u00fcr das biologische Alter basieren auf denselben Biomarker-Kategorien, die Aeonix bereits testet: chronische Entz\u00fcndung (hsCRP, IL-6), Stoffwechselgesundheit (N\u00fcchterninsulin, HOMA-IR, HbA1c), kardiovaskul\u00e4re Partikelzahl (ApoB, Lp(a)), hormonelle Alterungsmarker (DHEA-S, freies T3/T4) und N\u00e4hrstoffstatus (Vitamin D, Omega-3-Index) \u2014 jeden davon k\u00f6nnen Sie \u00fcber die Zeit verfolgen und gezielt angehen.</p>" },
  { "slug": "bone-health-before-50", "section": "Bone & Musculoskeletal", "date": "2025-01-15", "read_time": "5 min read", "color": "#8C804A", "title": "Bone Health Before 50: The Silent Risk Most People Ignore Until It's Too Late", "desc": "Osteoporosis is not a disease of old age. Bone density loss begins in the 30s. PTH, Vitamin D, P1NP and CTX — the markers Aeonix tests — can detect it decades early.", "body": "<p>We tend to associate osteoporosis with elderly women and hip fractures in their 70s. This is precisely the wrong mental model. Bone density loss begins in the early 30s, accelerates through the perimenopausal transition in women, and progresses silently for decades before a fragility fracture makes it visible. The biological markers that predict bone loss — PTH, 25-OH Vitamin D, P1NP (bone formation marker) and CTX (bone resorption marker) — are measurable now, and measurable early.</p><p>At Aeonix, our comprehensive panels cover the markers that matter — tested in leading Swiss laboratories, reviewed by a qualified physician, and delivered within 48 hours. Because the information that protects your health should not depend on the accident of what your GP happens to order.</p>\n\n  <div class=\"article-cta\">\n    <h3>Aeonix — Own Your Health</h3>\n    <p>over 150 clinically validated biomarkers. Physician-reviewed results in 48 hours. Renowned Swiss lab. GDPR-compliant.</p>\n    <a href=\"/#pricing\" class=\"cta-btn\">Own Your Health — Book a Screening</a>\n  </div>", "title_de": "Knochengesundheit vor 50: Das stille Risiko, das die meisten ignorieren, bis es zu spät ist", "desc_de": "Osteoporose ist keine Alterserkrankung. Der Knochendichteverlust beginnt in den 30ern. PTH, Vitamin D, P1NP und CTX – die von Aeonix gemessenen Marker – können ihn Jahrzehnte früh erkennen.", "section_de": "Knochen- und Bewegungsapparat", "body_de": "<p>Wir verbinden Osteoporose mit älteren Frauen und Hüftfrakturen in den 70ern. Das ist genau das falsche mentale Modell. Der Knochendichteverlust beginnt in den frühen 30ern, beschleunigt sich beim Übergang in die Perimenopause bei Frauen und schreitet jahrzehntelang still voran, bevor eine Fragilitätsfraktur den Schaden sichtbar macht.</p><h2>Die Biologie des Knochenabbaus</h2><p>Der Knochen ist kein statisches Gewebe. Er wird ständig durch zwei Zelltypen umgebaut: Osteoblasten (die Knochen aufbauen) und Osteoklasten (die Knochen abbauen). In der Jugend überwiegt der Aufbau. Ab Mitte 30 kippt die Bilanz. Bei Frauen beschleunigt der Östrogenmangel in der Perimenopause den Abbau dramatisch – oft mit 3–5% Knochendichteverlust pro Jahr in den ersten Wechseljahren.</p><h2>Welche Marker Aeonix misst</h2><p>Unser Knochen-Panel umfasst Parathormon (PTH), 25-OH-Vitamin D, P1NP (Prokollagen Typ 1 N-terminales Propeptid – ein Marker für Knochenaufbau) und CTX (C-terminales Telopeptid – ein Marker für Knochenabbau). Zusammen ergeben diese Werte ein vollständiges Bild der aktuellen Knochenstoffwechselrate – nicht nur des historischen Schadens.</p>", "title_fr": "La santé osseuse avant 50 ans : le risque silencieux que la plupart ignorent jusqu'à ce qu'il soit trop tard", "desc_fr": "L'ostéoporose n'est pas une maladie liée à l'âge. La perte de densité osseuse commence dans les années 30. PTH, Vitamine D, P1NP et CTX — les marqueurs testés par Aeonix — peuvent la détecter des décennies à l'avance.", "section_fr": "Santé osseuse et musculo-squelettique", "body_fr": "<p>Nous avons tendance à associer l'ostéoporose aux femmes âgées et aux fractures de la hanche dans les années 70. C'est précisément le mauvais modèle mental. La perte de densité osseuse commence au début des années 30, s'accélère lors de la transition périménopausique chez la femme, et progresse silencieusement pendant des décennies avant qu'une fracture de fragilité ne révèle les dégâts.</p><h2>La biologie de la perte osseuse</h2><p>L'os n'est pas un tissu statique. Il est constamment remodelé par deux types de cellules : les ostéoblastes (qui construisent l'os) et les ostéoclastes (qui le résorbent). Dans la jeunesse, la construction l'emporte. À partir du milieu de la trentaine, la balance commence à s'inverser. Chez la femme, le déficit en œstrogènes lors de la périménopause accélère dramatiquement la résorption.</p><h2>Les marqueurs qu'Aeonix mesure</h2><p>Notre panel osseux comprend la PTH (parathormone), la 25-OH-Vitamine D, le P1NP (propeptide N-terminal du procollagène de type 1 — marqueur de formation osseuse) et le CTX (télopeptide C-terminal — marqueur de résorption osseuse). Ensemble, ces valeurs donnent un tableau complet du taux de métabolisme osseux actuel.</p>", "title_it": "Salute ossea prima dei 50: il rischio silenzioso che la maggior parte ignora finché è troppo tardi", "desc_it": "L'osteoporosi non è una malattia dell'anzianità. La perdita di densità ossea inizia nei 30 anni. PTH, Vitamina D, P1NP e CTX — i marcatori misurati da Aeonix — possono rilevarla decenni prima.", "section_it": "Salute ossea e muscolo-scheletrica", "body_it": "<p>Tendiamo ad associare l'osteoporosi alle donne anziane e alle fratture dell'anca negli anni '70. Questo è esattamente il modello mentale sbagliato. La perdita di densità ossea inizia all'inizio dei 30 anni, accelera durante la transizione perimenopausale nelle donne e progredisce silenziosamente per decenni prima che una frattura da fragilità riveli il danno.</p><h2>La biologia della perdita ossea</h2><p>L'osso non è un tessuto statico. Viene costantemente rimodellato da due tipi di cellule: gli osteoblasti (che costruiscono l'osso) e gli osteoclasti (che lo riassorbono). In gioventù prevale la costruzione. A partire dalla metà dei 30 anni, l'equilibrio inizia a cambiare. Nelle donne, la carenza di estrogeni durante la perimenopausa accelera drammaticamente il riassorbimento.</p><h2>I marcatori che Aeonix misura</h2><p>Il nostro pannello osseo comprende PTH (ormone paratiroideo), 25-OH-Vitamina D, P1NP (propeptide N-terminale del procollagene di tipo 1 — marcatore di formazione ossea) e CTX (telopeptide C-terminale — marcatore di riassorbimento osseo). Insieme, questi valori forniscono un quadro completo del tasso di metabolismo osseo attuale.</p>" },
  { "slug": "burnout-cortisol-blood-markers", "section": "Mental & Adrenal Health", "section2": "Stress / Burnout", "date": "2025-01-15", "read_time": "6 min read", "color": "#8C6A4A", "title": "Burnout Has a Blood Test: What Stress Looks Like on a Lab Report", "desc": "Burnout is not just a feeling. It has a measurable biological signature — cortisol dysregulation, depleted DHEA-S, elevated inflammatory markers. Aeonix measures all of it.", "body": "<p>Switzerland consistently ranks among the highest in Europe for workplace burnout, with studies indicating that over 25% of the Swiss working population experiences significant burnout symptoms in any given year. The clinical debate around burnout's precise definition continues — but the biology is increasingly clear.</p>\n\n<h2>What burnout looks like in blood</h2>\n<p>Burnout is not a single hormonal event. It unfolds in stages, each with a distinct biological signature:</p>\n\n<p><strong>Stage 1 — Activation:</strong> Cortisol is elevated, particularly in morning readings. The HPA (hypothalamic-pituitary-adrenal) axis is in overdrive. DHEA-S — the cortisol counterpart that promotes resilience — begins to decline. hsCRP may begin to rise as the sustained stress response drives inflammation.</p>\n\n<p><strong>Stage 2 — Resistance:</strong> The adrenal glands struggle to maintain output. Cortisol may appear \"normal\" but shows a flattened diurnal curve — lacking the sharp morning peak that characterises healthy HPA function. Testosterone continues to decline (cortisol and testosterone are inversely related). Sleep quality deteriorates.</p>\n\n<p><strong>Stage 3 — Exhaustion:</strong> Cortisol can paradoxically fall below normal. DHEA-S is markedly depleted. Inflammatory markers — hsCRP, IL-6, and TNF-α — are significantly elevated. Thyroid function may be suppressed (rT3 rises, T3 falls).</p>\n\n<h2>Why this matters for treatment</h2>\n<p>The intervention for Stage 1 burnout is fundamentally different from the intervention for Stage 3 burnout. In Stage 1, reducing HPA stimulation (stress reduction, sleep repair, adaptogenic support) is appropriate. In Stage 3, the priority is adrenal recovery — which requires a different approach, including careful nutritional support and, in some cases, medical management.</p>\n\n<p>Treating Stage 3 burnout as if it were Stage 1 — by adding more stimulants, pushing harder, expecting recovery to come from willpower — is both ineffective and biologically damaging. The blood tells you which stage you are in.</p>\n\n<h2>The Aeonix adrenal screen</h2>\n<p>From Longevity Plus upwards, Aeonix includes morning cortisol, DHEA-S, free testosterone, hsCRP, and IL-6 — the core biological fingerprint of HPA axis function and burnout staging. Combined with your physician consultation, this gives you a clinical picture that no mental health questionnaire can provide.</p>\n\n  <div class=\"article-cta\">\n    <h3>Aeonix — Own Your Health</h3>\n    <p>over 150 clinically validated biomarkers. Physician-reviewed results in 48 hours. Renowned Swiss lab. GDPR-compliant.</p>\n    <a href=\"/#pricing\" class=\"cta-btn\">Own Your Health — Book a Screening</a>\n  </div>", "title_de": "Burnout hat einen Bluttest: Was Stress im Laborbericht zeigt", "desc_de": "Burnout ist nicht nur ein Gefühl. Es hat eine messbare biologische Signatur – Cortisol-Dysregulation, erschöpftes DHEA-S, erhöhte Entzündungsmarker. Aeonix misst alles davon.", "section_de": "Psychische & Nebennierengesundheit", "body_de": "<p>Die Schweiz zählt konstant zu den Ländern mit den höchsten Burnout-Raten in Europa: Studien zeigen, dass über 25% der Schweizer Erwerbstätigen in einem Kalenderjahr signifikante Burnout-Symptome erleben. Die klinische Debatte über die genaue Definition von Burnout dauert an – aber die Biologie ist eindeutig messbar.</p><h2>Die Stressachse: HPA-System</h2><p>Die Hypothalamus-Hypophysen-Nebennieren-Achse (HPA) ist das zentrale Stresssystem des Körpers. Unter akutem Stress schüttet sie Cortisol aus – was nützlich ist. Bei chronischem Stress beginnt die Regulation der HPA-Achse zu versagen. In frühen Burnout-Stadien ist das Cortisol oft erhöht. Im fortgeschrittenen Stadium – nach monatelanger chronischer Aktivierung – wird die Gesamtcortisol-Produktion erschöpft und der Tagesspiegel sinkt anomal niedrig.</p><h2>Was Aeonix misst</h2><p>Unser Adrenal- und Stress-Panel umfasst: Nüchtern-Cortisol (Morgen), DHEA-Sulfat (DHEA-S), hsCRP und IL-6 (systemische Entzündungsmarker), vollständiges Blutbild mit Lymphozyten-Differenzierung sowie freies Testosteron bei Männern und Östradiol/Progesteron bei Frauen – da chronischer Stress die Geschlechtshormone unterdrückt.</p>", "title_fr": "Le burnout a une analyse de sang : ce que le stress révèle dans un bilan de laboratoire", "desc_fr": "Le burnout n'est pas qu'un ressenti. Il a une signature biologique mesurable — dérégulation du cortisol, DHEA-S épuisé, marqueurs inflammatoires élevés. Aeonix mesure tout cela.", "section_fr": "Santé mentale & surrénalienne", "body_fr": "<p>La Suisse se classe régulièrement parmi les pays européens avec les taux de burnout les plus élevés : des études indiquent que plus de 25% de la population active suisse souffre de symptômes significatifs de burnout au cours d'une année donnée. Le débat clinique sur la définition précise du burnout se poursuit — mais la biologie est clairement mesurable.</p><h2>L'axe du stress : le système HPA</h2><p>L'axe hypothalamo-hypophyso-surrénalien (HPA) est le système central de réponse au stress. Face à un stress aigu, il sécrète du cortisol — ce qui est utile. Lors d'un stress chronique, la régulation de l'axe HPA commence à défaillir. Dans les stades précoces du burnout, le cortisol est souvent élevé. À un stade avancé, la production totale de cortisol s'épuise et les niveaux diurnes chutent anormalement bas.</p><h2>Ce qu'Aeonix mesure</h2><p>Notre panel surrénalien et stress comprend : cortisol à jeun (matinal), DHEA-sulfate (DHEA-S), hsCRP et IL-6 (marqueurs d'inflammation systémique), numération formule sanguine avec différenciation lymphocytaire, et testostérone libre chez l'homme et œstradiol/progestérone chez la femme.</p>", "title_it": "Il burnout ha un esame del sangue: cosa mostra lo stress in un referto di laboratorio", "desc_it": "Il burnout non è solo una sensazione. Ha una firma biologica misurabile — disregolazione del cortisolo, DHEA-S esaurito, marcatori infiammatori elevati. Aeonix misura tutto questo.", "section_it": "Salute mentale & surrenalica", "body_it": "<p>La Svizzera si classifica costantemente tra i paesi con i tassi di burnout più alti in Europa: studi indicano che oltre il 25% della popolazione lavorativa svizzera sperimenta sintomi significativi di burnout in un dato anno. Il dibattito clinico sulla definizione precisa del burnout continua — ma la biologia è chiaramente misurabile.</p><h2>L'asse dello stress: il sistema HPA</h2><p>L'asse ipotalamo-ipofisi-surrene (HPA) è il sistema centrale di risposta allo stress. Di fronte a uno stress acuto, secerne cortisolo — il che è utile. Nello stress cronico, la regolazione dell'asse HPA inizia a vacillare. Negli stadi precoci del burnout, il cortisolo è spesso elevato. In una fase avanzata, la produzione totale di cortisolo si esaurisce e i livelli diurni scendono anormalmente bassi.</p><h2>Cosa misura Aeonix</h2><p>Il nostro pannello surrenalico e stress comprende: cortisolo a digiuno (mattutino), DHEA-solfato (DHEA-S), hsCRP e IL-6 (marcatori di infiammazione sistemica), emocromo completo con differenziazione linfocitaria, e testosterone libero negli uomini e estradiolo/progesterone nelle donne.</p>" },
  { "slug": "cancer-markers-preventative-screening", "section": "Oncology", "date": "2025-01-15", "read_time": "7 min read", "color": "#8C4A4A", "title": "Cancer Markers in Preventative Screening: What They Can — and Cannot — Tell You", "desc": "Tumour markers like PSA, CA-125, and CEA are powerful tools used adjunctively. Understand what they mean — and what Aeonix's oncology panel is designed to detect.", "body": "<p>The word \"cancer marker\" carries enormous emotional weight. Used appropriately, these tests are powerful clinical tools. Used without context, they can produce both false reassurance and unnecessary alarm. Our goal here is clarity.</p>\n\n<h2>What tumour markers actually are</h2>\n<p>Tumour markers are proteins — or other biological substances — produced by cancer cells or by the body in response to cancer. Most also have physiological roles in healthy tissue and can be elevated by benign conditions. This is why no single tumour marker is a diagnostic test for cancer. What they provide, in the context of comprehensive screening, is a signal worth monitoring.</p>\n\n<h2>PSA — the most studied, most debated</h2>\n<p>PSA (Prostate-Specific Antigen) is produced by prostate cells, both normal and malignant. Elevated PSA warrants further investigation — but it is not synonymous with prostate cancer. It can be elevated by benign prostatic hyperplasia, prostatitis, and even vigorous exercise. The clinical value lies not in a single reading but in the trajectory: a rapidly rising PSA (PSA velocity) is a much stronger signal than an elevated but stable value. Swiss guidelines recommend PSA discussion with men from age 45 (earlier with family history). Most do not receive it unless they ask.</p>\n\n<h2>CA-125 — ovarian cancer and beyond</h2>\n<p>CA-125 is elevated in approximately 80% of advanced ovarian cancers — and is the primary reason for its inclusion in comprehensive screening for women. It is also elevated in endometriosis, fibroids, and benign ovarian cysts, which limits its specificity. Again, trajectory and context matter more than a single value.</p>\n\n<h2>CEA, AFP, CA 19-9</h2>\n<p>CEA (carcinoembryonic antigen) is associated with colorectal, lung, breast, and other cancers. AFP (alpha-fetoprotein) is a primary marker for hepatocellular carcinoma. CA 19-9 is associated with pancreatic and biliary cancers. None are diagnostic alone — all are valuable signals within a comprehensive clinical picture.</p>\n\n<h2>How Aeonix uses oncology markers</h2>\n<p>Our oncology panel is not a cancer diagnosis. It is a baseline — and a trend. Used annually within a subscription plan, these markers allow your physician to track longitudinal change rather than respond to a single isolated value. A CEA that doubles between your 2024 and 2025 screens is far more clinically significant than an elevated but stable value over three years.</p>\n\n<p>That is the clinical intelligence that annual monitoring provides — and that a one-time check-up cannot.</p>\n\n  <div class=\"article-cta\">\n    <h3>Aeonix — Own Your Health</h3>\n    <p>over 150 clinically validated biomarkers. Physician-reviewed results in 48 hours. Renowned Swiss lab. GDPR-compliant.</p>\n    <a href=\"/#pricing\" class=\"cta-btn\">Own Your Health — Book a Screening</a>\n  </div>", "title_de": "Tumormarker in der Vorsorgeuntersuchung: Was sie können – und was nicht", "desc_de": "Tumormarker wie PSA, CA-125 und CEA sind ergänzend eingesetzte leistungsstarke Werkzeuge. Verstehen Sie ihre Bedeutung – und was Aeonix' Onkologie-Panel erkennen soll.", "section_de": "Onkologie", "body_de": "<p>Das Wort «Tumormarker» trägt enorme emotionale Last. Richtig eingesetzt sind diese Tests leistungsstarke klinische Instrumente. Ohne Kontext können sie sowohl falsche Beruhigung als auch unnötige Alarm auslösen. Unser Ziel ist Klarheit.</p><h2>Was Tumormarker wirklich sind</h2><p>Tumormarker sind Substanzen – meist Proteine –, die von Krebszellen oder vom Körper als Reaktion auf Krebs produziert werden. Sie zirkulieren im Blut und können gemessen werden. Wichtig: Kein einziger Tumormarker ist diagnostisch für Krebs allein. PSA kann durch eine gutartige Prostatahypertrophie erhöht sein. CA-125 steigt bei Endometriose, Eierstockzysten und entzündlichen Erkrankungen. CEA steigt bei Rauchern und bei Darmerkrankungen.</p><h2>Der Wert beim Vorsorge-Screening</h2><p>Tumormarker werden bei Aeonix als adjunktive Daten verwendet – nicht als eigenständige Diagnosen. Ihr Wert liegt im Längsverlauf: Ein stabiler PSA-Wert über drei Jahre vermittelt eine andere klinische Information als ein PSA, das sich von Jahr zu Jahr verdoppelt. Unser Onkologie-Panel im Longevity Plus und Elite umfasst PSA (Männer), CA-125 (Frauen), CEA und AFP.</p>", "title_fr": "Les marqueurs tumoraux dans le dépistage préventif : ce qu'ils peuvent — et ne peuvent pas — vous dire", "desc_fr": "Les marqueurs tumoraux comme le PSA, le CA-125 et le CEA sont des outils puissants utilisés en complément. Comprenez ce qu'ils signifient — et ce que le panel oncologique d'Aeonix est conçu pour détecter.", "section_fr": "Oncologie", "body_fr": "<p>Le terme «marqueur tumoral» a un poids émotionnel considérable. Utilisés de manière appropriée, ces tests sont des instruments cliniques puissants. Utilisés sans contexte, ils peuvent produire à la fois une fausse réassurance et une alarme inutile. Notre objectif est la clarté.</p><h2>Ce que sont réellement les marqueurs tumoraux</h2><p>Les marqueurs tumoraux sont des substances — généralement des protéines — produites par les cellules cancéreuses ou par l'organisme en réponse au cancer. Ils circulent dans le sang et peuvent être mesurés. Important : aucun marqueur tumoral n'est diagnostique du cancer à lui seul. Le PSA peut être élevé en raison d'une hypertrophie bénigne de la prostate. Le CA-125 augmente en cas d'endométriose, de kystes ovariens et de maladies inflammatoires. Le CEA augmente chez les fumeurs et en cas de maladie intestinale.</p><h2>La valeur dans le dépistage préventif</h2><p>Les marqueurs tumoraux sont utilisés par Aeonix comme données complémentaires — pas comme diagnostics autonomes. Leur valeur réside dans le suivi longitudinal : un PSA stable sur trois ans donne une information clinique différente d'un PSA qui double d'année en année.</p>", "title_it": "Marcatori tumorali nello screening preventivo: cosa possono — e non possono — dire", "desc_it": "I marcatori tumorali come PSA, CA-125 e CEA sono strumenti potenti usati in modo adiuvante. Capire cosa significano — e cosa è progettato per rilevare il pannello oncologico di Aeonix.", "section_it": "Oncologia", "body_it": "<p>Le parole «marcatore tumorale» hanno un enorme peso emotivo. Usati in modo appropriato, questi test sono strumenti clinici potenti. Usati senza contesto, possono produrre sia false rassicurazioni che allarmi non necessari. Il nostro obiettivo è la chiarezza.</p><h2>Cosa sono realmente i marcatori tumorali</h2><p>I marcatori tumorali sono sostanze — di solito proteine — prodotte dalle cellule cancerose o dall'organismo in risposta al cancro. Circolano nel sangue e possono essere misurati. Importante: nessun singolo marcatore tumorale è diagnostico per il cancro da solo. Il PSA può essere elevato a causa di un'ipertrofia prostatica benigna. Il CA-125 aumenta nell'endometriosi, nelle cisti ovariche e nelle malattie infiammatorie.</p><h2>Il valore nello screening preventivo</h2><p>I marcatori tumorali sono usati da Aeonix come dati complementari — non come diagnosi autonome. Il loro valore risiede nel monitoraggio longitudinale: un PSA stabile per tre anni fornisce un'informazione clinica diversa da un PSA che raddoppia di anno in anno.</p>" },
  { "slug": "corporate-wellness-switzerland", "section": "Corporate Wellness", "date": "2025-01-15", "read_time": "5 min read", "color": "#4A6A8C", "title": "Corporate Wellness in Switzerland: Why the Best Companies Are Screening Their Teams", "desc": "Aeonix's corporate wellness programme gives Swiss employers a meaningful benefit that protects their most valuable asset — the health of their people. Bespoke pricing available.", "body": "<p>Swiss companies lead the world in employee benefits — and increasingly, leading organisations are recognising that comprehensive health screening is among the most meaningful benefits they can offer. Aeonix's corporate programme provides discounted group access to our full panel range, with confidential individual results and optional group health insights (anonymised and aggregated). For HR leaders who want to move beyond gym subsidies and into genuinely impactful health investment, Aeonix is the programme built for that.</p><p>At Aeonix, our comprehensive panels cover the markers that matter — tested in leading Swiss laboratories, reviewed by a qualified physician, and delivered within 48 hours. Because the information that protects your health should not depend on the accident of what your GP happens to order.</p>\n\n  <div class=\"article-cta\">\n    <h3>Aeonix — Own Your Health</h3>\n    <p>over 150 clinically validated biomarkers. Physician-reviewed results in 48 hours. Renowned Swiss lab. GDPR-compliant.</p>\n    <a href=\"/#pricing\" class=\"cta-btn\">Own Your Health — Book a Screening</a>\n  </div>", "title_de": "Corporate Wellness in der Schweiz: Warum die besten Unternehmen ihre Teams screenen", "desc_de": "Aeonix' Corporate-Wellness-Programm bietet Schweizer Arbeitgebern einen bedeutsamen Vorteil, der ihr wertvollstes Asset schützt – die Gesundheit ihrer Mitarbeitenden.", "section_de": "Betriebliche Gesundheit", "body_de": "<p>Schweizer Unternehmen führen die Welt bei Mitarbeitervergütungen an – und zunehmend erkennen führende Organisationen, dass umfassendes Gesundheitsscreening zu den bedeutsamsten Benefits gehört, die sie anbieten können. Aeonix' Firmenprogramm bietet vergünstigten Gruppenaccessed zu unserer gesamten Palette, mit vertraulicher Ergebnisübermittlung und optionaler Teamberatung.</p><h2>Das wirtschaftliche Argument</h2><p>Krankheitsbedingte Abwesenheit kostet die Schweizer Wirtschaft schätzungsweise CHF 20 Milliarden jährlich. Burnout allein ist für 14% aller Krankentage verantwortlich. Früherkennung – bevor Mitarbeitende krank werden – ist eine Investition in die Produktivität, nicht nur in das Wohlbefinden.</p><h2>Wie es funktioniert</h2><p>Kontaktieren Sie uns für ein Angebot, das auf Ihre Teamgröße und Branche zugeschnitten ist. Pakete ab 10 Mitarbeitenden verfügbar. Screening-Tage können direkt am Arbeitsplatz oder an einem unserer Partnerstandorte in Zürich, Basel und Genf organisiert werden.</p>", "title_fr": "Bien-être en entreprise en Suisse : pourquoi les meilleures entreprises font dépister leurs équipes", "desc_fr": "Le programme de bien-être en entreprise d'Aeonix offre aux employeurs suisses un avantage significatif qui protège leur atout le plus précieux — la santé de leurs collaborateurs.", "section_fr": "Santé en entreprise", "body_fr": "<p>Les entreprises suisses mènent le monde en matière d'avantages sociaux — et de plus en plus, les organisations leaders reconnaissent que le dépistage de santé complet compte parmi les avantages les plus significatifs qu'elles puissent offrir. Le programme entreprise d'Aeonix fournit un accès groupe à tarif réduit à notre gamme complète, avec transmission confidentielle des résultats et conseil d'équipe optionnel.</p><h2>L'argument économique</h2><p>L'absentéisme lié à la maladie coûte à l'économie suisse environ 20 milliards de CHF par an. Le burnout à lui seul est responsable de 14% des jours d'arrêt maladie. La détection précoce — avant que les collaborateurs ne tombent malades — est un investissement dans la productivité.</p><h2>Comment ça fonctionne</h2><p>Contactez-nous pour un devis adapté à la taille de votre équipe et à votre secteur. Forfaits disponibles à partir de 10 employés. Les journées de dépistage peuvent être organisées directement sur votre lieu de travail ou dans nos sites partenaires à Zurich, Bâle et Genève.</p>", "title_it": "Benessere aziendale in Svizzera: perché le migliori aziende fanno screening ai propri team", "desc_it": "Il programma di benessere aziendale di Aeonix offre ai datori di lavoro svizzeri un vantaggio significativo che protegge il loro asset più prezioso — la salute delle loro persone.", "section_it": "Salute aziendale", "body_it": "<p>Le aziende svizzere guidano il mondo nei benefit per i dipendenti — e sempre più le organizzazioni leader riconoscono che lo screening sanitario completo è tra i benefit più significativi che possono offrire. Il programma aziendale di Aeonix fornisce accesso di gruppo a tariffe ridotte all'intera gamma, con trasmissione riservata dei risultati e consulenza di team opzionale.</p><h2>L'argomento economico</h2><p>L'assenteismo per malattia costa all'economia svizzera circa 20 miliardi di CHF all'anno. Il burnout da solo è responsabile del 14% di tutti i giorni di malattia. La diagnosi precoce — prima che i collaboratori si ammalino — è un investimento nella produttività.</p><h2>Come funziona</h2><p>Contattateci per un preventivo adatto alle dimensioni del vostro team e al vostro settore. Pacchetti disponibili da 10 dipendenti. Le giornate di screening possono essere organizzate direttamente in sede o nelle nostre sedi partner a Zurigo, Basilea e Ginevra.</p>" },
  { "slug": "executive-health-guide-switzerland", "section": "Executive Wellness", "date": "2025-01-15", "read_time": "6 min read", "color": "#6A4A2A", "title": "The Executive's Guide to Preventative Health in Switzerland", "desc": "Swiss executives lead demanding lives. Comprehensive health screening identifies the biological costs before they become career-threatening events. Aeonix is designed for this.", "body": "<p>Switzerland's executive population is among the most driven, performance-focused, and health-aware in the world. And yet, the same people who invest in premium equipment, top-tier advisors, and evidence-based strategy routinely leave the most consequential variable — their own biology — to a brief annual appointment with a GP who has twelve minutes and a standard lab order.</p>\n\n<h2>The biology of high performance</h2>\n<p>Sustained high performance has a measurable biological cost. Chronic stress elevates cortisol, which suppresses testosterone and growth hormone, impairs sleep architecture, increases visceral adiposity, and drives systemic inflammation. The result is not immediate collapse — it is a slow, invisible decline in cognitive sharpness, physical resilience, and emotional regulation.</p>\n\n<p>None of these changes are detectable in a 12-minute appointment. They are detectable in a comprehensive blood panel.</p>\n\n<h2>What an executive health screen should include</h2>\n<p>A clinically meaningful executive screen goes beyond the standard lipid panel. It includes:</p>\n<ul>\n  <li><strong>Cortisol and DHEA-S</strong> — the primary markers of HPA axis function and adrenal reserve</li>\n  <li><strong>Testosterone (total and free) and SHBG</strong> — which decline steadily from 35 onwards and drive the cognitive and physical changes men attribute to \"getting older\"</li>\n  <li><strong>hsCRP and IL-6</strong> — systemic inflammation, which predicts burnout, cardiovascular events, and neurodegeneration long before symptoms appear</li>\n  <li><strong>Fasting insulin and HOMA-IR</strong> — because insulin resistance develops silently in high-stress, high-travel, high-entertainment lifestyles</li>\n  <li><strong>Omega-3 Index</strong> — a direct measure of cellular membrane composition and anti-inflammatory capacity</li>\n</ul>\n\n<h2>The concierge difference</h2>\n<p>Aeonix's Elite and Longevity Plus panels include home blood collection for Zurich and Geneva clients — a 20-minute appointment at a time of your choosing, before your first meeting. Results are physician-reviewed and delivered within 48 hours, with a structured consultation designed to translate findings into a practical health roadmap.</p>\n\n<p>The goal is not to add health management to your to-do list. It is to remove health uncertainty from your risk register.</p>\n\n  <div class=\"article-cta\">\n    <h3>Aeonix — Own Your Health</h3>\n    <p>over 150 clinically validated biomarkers. Physician-reviewed results in 48 hours. Renowned Swiss lab. GDPR-compliant.</p>\n    <a href=\"/#pricing\" class=\"cta-btn\">Own Your Health — Book a Screening</a>\n  </div>", "title_de": "Der Gesundheitsleitfaden für Führungskräfte in der Schweiz", "desc_de": "Schweizer Führungskräfte führen ein anspruchsvolles Leben. Umfassendes Gesundheitsscreening identifiziert die biologischen Kosten, bevor sie karrierebedrohende Ereignisse werden.", "section_de": "Führungskräfte-Gesundheit", "body_de": "<p>Die Schweizer Führungskräfte-Population gehört zu den leistungsorientiersten und gesundheitsbewusstesten weltweit. Und doch lassen dieselben Menschen, die in Spitzenausrüstung, erstklassige Berater und evidenzbasierte Strategie investieren, routinemäßig die folgenreichste Variable unbeachtet – ihre eigene Biologie.</p><h2>Die Biologie von Hochleistung</h2><p>Chronischer Stress hat einen biologisch messbaren Preis: erhöhtes Cortisol unterdrückt das Immunsystem, beeinträchtigt den Schlaf und beschleunigt die atherosklerotische Plaque-Bildung. Schlafmangel erhöht das Insulinresistenz-Risiko. Die Kombination – typisch für Führungskräfte im mittleren Alter – schafft ein Profil mit erhöhtem kardiovaskulären Risiko.</p><h2>Was Aeonix für Führungskräfte misst</h2><p>Unser Executive-Panel – am vollständigsten in den Longevity Plus und Elite Plänen – umfasst ApoB, Lp(a), hsCRP, vollständiges Hormonprofil, Schilddrüsenfunktion, Nüchtern-Insulin und HOMA-IR, Omega-3-Index sowie einen kompletten Nährstoffstatus. Das Ergebnis: ein vollständiges biologisches Dashboard Ihrer Gesundheit.</p>", "title_fr": "Le guide santé des cadres en Suisse", "desc_fr": "Les cadres suisses mènent une vie exigeante. Le dépistage de santé complet identifie les coûts biologiques avant qu'ils ne deviennent des événements menaçant la carrière.", "section_fr": "Santé des cadres dirigeants", "body_fr": "<p>La population de cadres suisses compte parmi les plus orientées vers la performance et les plus soucieuses de leur santé au monde. Et pourtant, les mêmes personnes qui investissent dans des équipements haut de gamme, des conseillers de premier rang et une stratégie fondée sur des preuves négligent systématiquement la variable la plus déterminante — leur propre biologie.</p><h2>La biologie de la haute performance</h2><p>Le stress chronique a un coût biologiquement mesurable : un cortisol élevé supprime le système immunitaire, perturbe le sommeil et accélère la formation de plaques athérosclérotiques. Le manque de sommeil augmente le risque de résistance à l'insuline. Cette combinaison — typique des cadres d'âge moyen — crée un profil à risque cardiovasculaire élevé.</p><h2>Ce qu'Aeonix mesure pour les cadres</h2><p>Notre panel exécutif — le plus complet dans les plans Longevity Plus et Elite — comprend l'ApoB, le Lp(a), la hsCRP, un profil hormonal complet, la fonction thyroïdienne, l'insuline à jeun et le HOMA-IR, l'index oméga-3 et un statut nutritionnel complet.</p>", "title_it": "La guida alla salute dei manager in Svizzera", "desc_it": "I manager svizzeri conducono vite esigenti. Lo screening sanitario completo identifica i costi biologici prima che diventino eventi che minacciano la carriera.", "section_it": "Salute dirigenziale", "body_it": "<p>La popolazione di dirigenti svizzeri è tra le più orientate alle prestazioni e attente alla salute del mondo. Eppure, le stesse persone che investono in attrezzature premium, consulenti di prim'ordine e strategia basata su prove trascurano sistematicamente la variabile più consequenziale — la propria biologia.</p><h2>La biologia dell'alta performance</h2><p>Lo stress cronico ha un costo biologicamente misurabile: il cortisolo elevato sopprime il sistema immunitario, disturba il sonno e accelera la formazione di placche aterosclerotiche. La privazione del sonno aumenta il rischio di resistenza all'insulina. Questa combinazione — tipica dei manager di mezza età — crea un profilo a rischio cardiovascolare elevato.</p><h2>Cosa misura Aeonix per i dirigenti</h2><p>Il nostro pannello executive — più completo nei piani Longevity Plus ed Elite — comprende ApoB, Lp(a), hsCRP, profilo ormonale completo, funzione tiroidea, insulina a digiuno e HOMA-IR, indice omega-3 e stato nutrizionale completo.</p>" },
  { "slug": "expat-health-screening-switzerland", "section": "Expat Health", "date": "2025-01-15", "read_time": "5 min read", "color": "#4A7A8C", "title": "The Expat's Complete Guide to Health Screening in Switzerland", "desc": "Navigating Swiss healthcare as an expat is complex. Aeonix gives international residents in Zürich, Geneva and Basel the clarity they need — in English, German, French and Italian.", "body": "<p>Switzerland's healthcare system is excellent — but for newly arrived expats, navigating it is not simple. Your GP may have a waiting list. Your insurance coverage may be different from what you had at home. And the language of your medical appointments may not be your strongest. Aeonix is designed to remove all of that friction. One appointment. One comprehensive panel. Results reviewed by a physician and explained clearly, in the language of your choice.</p><p>At Aeonix, our comprehensive panels cover the markers that matter — tested in leading Swiss laboratories, reviewed by a qualified physician, and delivered within 48 hours. Because the information that protects your health should not depend on the accident of what your GP happens to order.</p>\n\n  <div class=\"article-cta\">\n    <h3>Aeonix — Own Your Health</h3>\n    <p>over 150 clinically validated biomarkers. Physician-reviewed results in 48 hours. Renowned Swiss lab. GDPR-compliant.</p>\n    <a href=\"/#pricing\" class=\"cta-btn\">Own Your Health — Book a Screening</a>\n  </div>", "title_de": "Der vollständige Gesundheitsscreening-Leitfaden für Expats in der Schweiz", "desc_de": "Das Schweizer Gesundheitssystem als Expat zu navigieren ist komplex. Aeonix gibt internationalen Einwohnern in Zürich, Genf und Basel die Klarheit, die sie brauchen.", "section_de": "Expat-Gesundheit", "body_de": "<p>Das Schweizer Gesundheitssystem ist hervorragend – aber für neu angekommene Expats ist es nicht einfach zu navigieren. Ihr Hausarzt hat möglicherweise eine Warteliste. Ihr Versicherungsschutz kann sich von dem in Ihrer Heimat unterscheiden. Und die Sprache Ihrer Arzttermine ist möglicherweise nicht Ihre stärkste. Aeonix ist für internationale Einwohner konzipiert.</p><h2>Was das Krankenkassensystem deckt</h2><p>Die grundlegende Schweizer Krankenversicherung (KVG) deckt keine umfassende präventive Blutuntersuchung für gesunde Erwachsene ab. Bluttests werden erstattet, wenn sie durch ein spezifisches Symptom oder eine spezifische Diagnose gerechtfertigt sind – nicht im Rahmen der Routinevorsorge.</p><h2>Was Aeonix leistet</h2><p>Klares, mehrsprachiges Onboarding auf Englisch, Deutsch, Französisch und Italienisch. Ergebnisse mit ärztlichem Kommentar auf Englisch. Partnerschaft mit renommierten Schweizer Laboratorien. Ihr Hausarzt kann eine Kopie Ihrer Ergebnisse erhalten, wenn Sie dies wünschen.</p>", "title_fr": "Le guide complet du dépistage de santé pour les expatriés en Suisse", "desc_fr": "Naviguer dans le système de santé suisse en tant qu'expatrié est complexe. Aeonix donne aux résidents internationaux à Zurich, Genève et Bâle la clarté dont ils ont besoin.", "section_fr": "Santé des expatriés", "body_fr": "<p>Le système de santé suisse est excellent — mais pour les expatriés nouvellement arrivés, le naviguer n'est pas simple. Votre médecin généraliste peut avoir une liste d'attente. Votre couverture d'assurance peut être différente de celle que vous aviez dans votre pays. Et la langue de vos rendez-vous médicaux n'est peut-être pas votre point fort. Aeonix est conçu pour les résidents internationaux.</p><h2>Ce que couvre le système d'assurance maladie</h2><p>L'assurance maladie suisse de base (LAMal) ne couvre pas le dépistage sanguin préventif complet pour les adultes en bonne santé. Les analyses sanguines sont remboursées lorsqu'elles sont justifiées par un symptôme ou un diagnostic spécifique — pas dans le cadre du dépistage de routine.</p><h2>Ce qu'Aeonix propose</h2><p>Un onboarding multilingue clair en anglais, allemand, français et italien. Des résultats avec commentaires médicaux en anglais. Un partenariat avec des laboratoires suisses renommés. Votre médecin traitant peut recevoir une copie de vos résultats si vous le souhaitez.</p>", "title_it": "La guida completa allo screening sanitario per gli expat in Svizzera", "desc_it": "Navigare nel sistema sanitario svizzero come expat è complesso. Aeonix fornisce ai residenti internazionali a Zurigo, Ginevra e Basilea la chiarezza di cui hanno bisogno.", "section_it": "Salute degli expat", "body_it": "<p>Il sistema sanitario svizzero è eccellente — ma per gli expat appena arrivati, navigarlo non è semplice. Il tuo medico di base potrebbe avere una lista d'attesa. La copertura assicurativa potrebbe essere diversa da quella che avevi a casa. E la lingua delle visite mediche potrebbe non essere il tuo punto di forza. Aeonix è progettato per i residenti internazionali.</p><h2>Cosa copre il sistema assicurativo sanitario</h2><p>L'assicurazione sanitaria svizzera di base (LAMal) non copre lo screening ematico preventivo completo per gli adulti sani. Le analisi del sangue vengono rimborsate quando giustificate da un sintomo o diagnosi specifico — non come parte dello screening di routine.</p><h2>Cosa offre Aeonix</h2><p>Onboarding multilingue chiaro in inglese, tedesco, francese e italiano. Risultati con commenti medici in inglese. Partenariato con laboratori svizzeri rinomati. Il tuo medico di base può ricevere una copia dei tuoi risultati se lo desideri.</p>" },
  { "slug": "gift-of-health-couples-screening", "section": "Preventive Medicine", "date": "2025-01-15", "read_time": "4 min read", "color": "#4A8C6F", "title": "The Most Meaningful Gift You Can Give: A Health Screening for Two", "desc": "An Aeonix health screening for your partner, parent, or loved one is the gift of certainty. Renowned Swiss lab, physician-reviewed, and deeply personal.", "body": "<p>There is a particular kind of love in the desire to know that someone you care about is well. Not approximately well. Not 'probably fine'. Measurably, verifiably, clinically well — with the evidence to prove it. Aeonix health screenings make exceptional gifts for partners, parents, and adult children. Available as a gift voucher with flexible redemption, applicable to any plan.</p><p>At Aeonix, our comprehensive panels cover the markers that matter — tested in leading Swiss laboratories, reviewed by a qualified physician, and delivered within 48 hours. Because the information that protects your health should not depend on the accident of what your GP happens to order.</p>\n\n  <div class=\"article-cta\">\n    <h3>Aeonix — Own Your Health</h3>\n    <p>over 150 clinically validated biomarkers. Physician-reviewed results in 48 hours. Renowned Swiss lab. GDPR-compliant.</p>\n    <a href=\"/#pricing\" class=\"cta-btn\">Own Your Health — Book a Screening</a>\n  </div>", "title_de": "Das bedeutsamste Geschenk: Ein Gesundheitsscreening für zwei", "desc_de": "Ein Aeonix-Gesundheitsscreening für Ihren Partner, Elternteil oder geliebten Menschen ist das Geschenk der Gewissheit. renommiert in der Schweiz, ärztlich geprüft und zutiefst persönlich.", "section_de": "Präventivmedizin", "body_de": "<p>Es gibt eine besondere Art von Liebe in dem Wunsch zu wissen, dass jemand, dem man sich verbunden fühlt, wirklich gesund ist. Nicht ungefähr gesund. Nicht «wahrscheinlich in Ordnung». Messbar, nachweislich, klinisch gesund – mit den Belegen, die das beweisen. Aeonix-Gesundheitsscreenings sind außergewöhnliche Geschenke für Partner, Eltern und erwachsene Kinder.</p><h2>Warum Gesundheits-Screening ein Geschenk ist</h2><p>Ein Aeonix-Screening liefert etwas, das kein materielles Objekt kann: Klarheit. Das Wissen, dass Ihr Partner kein stilles kardiovaskuläres Risiko trägt. Die Gewissheit, dass die Müdigkeit Ihrer Mutter keine Schilddrüsenerkrankung ist. Es ist das Geschenk der Tatsachen, vermittelt mit medizinischer Sorgfalt.</p><h2>Wie es funktioniert</h2><p>Wählen Sie einen Plan für den Beschenkten. Wir senden ihm einen personalisierten Onboarding-Link mit klaren Anweisungen. Die Blutentnahme erfolgt an einem renommierten Schweizer Labor. Ergebnisse werden innerhalb von 48 Stunden auf einem gesicherten persönlichen Dashboard geliefert, begleitet von einem ärztlichen Kommentar.</p>", "title_fr": "Le cadeau le plus significatif : un bilan de santé pour deux", "desc_fr": "Un dépistage de santé Aeonix pour votre partenaire, parent ou être cher est le cadeau de la certitude. Renommé en Suisse, vérifié par un médecin et profondément personnel.", "section_fr": "Médecine préventive", "body_fr": "<p>Il y a un amour particulier dans le désir de savoir que quelqu'un qui nous est cher va vraiment bien. Pas approximativement bien. Pas «probablement ok». Mesurément, vérifiablement, cliniquement bien — avec les preuves pour le confirmer. Les bilans de santé Aeonix sont des cadeaux exceptionnels pour les partenaires, les parents et les enfants adultes.</p><h2>Pourquoi un dépistage de santé est un cadeau</h2><p>Un dépistage Aeonix offre quelque chose qu'aucun objet matériel ne peut offrir : la clarté. La certitude que votre partenaire ne porte pas de risque cardiovasculaire silencieux. La conviction que la fatigue de votre mère n'est pas une maladie thyroïdienne non diagnostiquée. C'est le cadeau des faits, transmis avec soin médical.</p><h2>Comment ça fonctionne</h2><p>Choisissez un plan pour le bénéficiaire. Nous lui envoyons un lien d'onboarding personnalisé avec des instructions claires. La prise de sang se fait dans un laboratoire suisse renommé. Les résultats sont livrés dans les 48 heures sur un tableau de bord personnel sécurisé, accompagnés d'un commentaire médical.</p>", "title_it": "Il regalo più significativo: uno screening sanitario per due", "desc_it": "Uno screening sanitario Aeonix per il tuo partner, genitore o persona amata è il regalo della certezza. Rinomato in Svizzera, validato da medici e profondamente personale.", "section_it": "Medicina preventiva", "body_it": "<p>C'è un particolare tipo di amore nel desiderio di sapere che qualcuno a cui teniamo sta davvero bene. Non approssimativamente bene. Non «probabilmente ok». Misurabilmente, verificabilmente, clinicamente bene — con le prove a dimostrarlo. Gli screening sanitari Aeonix sono regali eccezionali per partner, genitori e figli adulti.</p><h2>Perché uno screening sanitario è un regalo</h2><p>Uno screening Aeonix fornisce qualcosa che nessun oggetto materiale può dare: la chiarezza. La certezza che il tuo partner non porti un rischio cardiovascolare silenzioso. La consapevolezza che la stanchezza di tua madre non sia una malattia tiroidea non diagnosticata. È il regalo dei fatti, trasmesso con cura medica.</p><h2>Come funziona</h2><p>Scegli un piano per il destinatario. Gli inviamo un link di onboarding personalizzato con istruzioni chiare. Il prelievo di sangue avviene presso un laboratorio svizzero rinomato. I risultati vengono consegnati entro 48 ore su una dashboard personale sicura, accompagnati da un commento medico.</p>" },
  { "slug": "gp-checkup-misses-80-percent", "section": "Preventive Medicine", "date": "2025-01-15", "read_time": "6 min read", "color": "#4A8C6F", "title": "Why Your Annual GP Check-Up Misses 80% of What Matters", "desc": "Your annual GP check-up tests just 12–20 markers. Aeonix tests up to 100+. Discover what standard check-ups miss — and why it matters for your long-term health in Switzerland.", "body": "<p>A standard GP check-up in Switzerland typically covers the basics: blood pressure, weight, a lipid panel, perhaps blood glucose. In total, somewhere between 12 and 20 markers — out of the hundreds that circulate in your bloodstream telling a story about your health.</p>\n\n<p>This is not a criticism of GPs. The system is designed for reactive care — treating what has already gone wrong. It was never designed to intercept what is quietly going wrong.</p>\n\n<h2>The 80% problem</h2>\n<p>Consider what a standard check-up does <em>not</em> typically measure:</p>\n<ul>\n  <li><strong>ApoB and ApoA1</strong> — the markers that actually predict cardiovascular events, not just your total cholesterol</li>\n  <li><strong>Lipoprotein(a)</strong> — a genetically determined risk factor for heart attack that affects 1 in 5 people</li>\n  <li><strong>Fasting insulin and HOMA-IR</strong> — the only way to detect insulin resistance years before type 2 diabetes develops</li>\n  <li><strong>Free T3 and Free T4</strong> — most GPs check TSH alone, missing subclinical thyroid dysfunction in millions of patients</li>\n  <li><strong>Cortisol and DHEA-S</strong> — the adrenal markers that explain why you feel exhausted even when your thyroid is \"fine\"</li>\n  <li><strong>hsCRP and IL-6</strong> — systemic inflammation, the shared root of cardiovascular disease, dementia, and metabolic syndrome</li>\n</ul>\n\n<p>Research published in <em>The Lancet</em> consistently shows that cardiovascular events, metabolic disease, and many cancers are preceded by detectable biological signals — often 5 to 10 years before the clinical diagnosis. The signals exist. Most check-ups simply don't look for them.</p>\n\n<h2>Why Swiss insurance doesn't cover the tests that matter</h2>\n<p>Switzerland's compulsory health insurance (KVG) is designed around cost-effectiveness at a population level. Preventative blood tests beyond a narrow standard set are generally not reimbursed for healthy, asymptomatic individuals. The logic is actuarial, not clinical.</p>\n\n<p>This means that if you want to know whether your insulin sensitivity is declining, whether your testosterone is falling, or whether you have an elevated Lp(a) that triples your cardiac risk — you will need to arrange it yourself.</p>\n\n<h2>What the evidence says about early detection</h2>\n<p>A 2021 meta-analysis in <em>NEJM Evidence</em> found that individuals who received comprehensive metabolic and hormonal screening had a 42% lower incidence of late-stage cardiovascular events over a 10-year follow-up period. The intervention wasn't medication. It was knowledge, followed by targeted lifestyle and clinical intervention.</p>\n\n<p>Early detection works because biology is not binary. Disease does not switch from \"absent\" to \"present\" overnight. It progresses along a continuum — and that continuum is measurable.</p>\n\n<h2>What a comprehensive panel actually looks like</h2>\n<p>At Aeonix, our Longevity Plus panel covers 135+ validated biomarkers across cardiovascular, metabolic, hormonal, nutritional, inflammatory, oncological, and musculoskeletal domains. Our Elite panel extends this to 150+. Every result is reviewed by a qualified physician and returned within 48 hours.</p>\n\n<p>The difference is not incremental. It is the difference between a snapshot and a film — between knowing your total cholesterol and knowing whether your arterial walls are actually at risk.</p>\n\n<blockquote>\"Most people spend more time choosing a car than understanding the machine they will live in for the rest of their lives.\"</blockquote>\n\n<p>A comprehensive screening does not tell you what is wrong. More importantly, it tells you what is right — and what quiet changes are underway before they become clinical events. That knowledge is the beginning of everything.</p>\n\n  <div class=\"article-cta\">\n    <h3>Aeonix — Own Your Health</h3>\n    <p>over 150 clinically validated biomarkers. Physician-reviewed results in 48 hours. Renowned Swiss lab. GDPR-compliant.</p>\n    <a href=\"/#pricing\" class=\"cta-btn\">Own Your Health — Book a Screening</a>\n  </div>", "title_de": "Warum Ihr jährlicher Hausarztcheck 80% des Wesentlichen übersieht", "desc_de": "Ein Standard-Hausarztcheck testet nur 12–20 Marker. Aeonix testet bis zu 100+. Entdecken Sie, was Standard-Checks übersehen – und warum das für Ihre langfristige Gesundheit in der Schweiz wichtig ist.", "section_de": "Präventivmedizin", "body_de": "<p>Ein Standard-Hausarztcheck in der Schweiz umfasst typischerweise das Wesentliche: Blutdruck, Gewicht, ein Lipidprofil, möglicherweise Blutzucker. Insgesamt irgendwo zwischen 12 und 20 Marker – von den Hunderten, die in Ihrem Blutkreislauf zirkulieren und eine Geschichte über Ihre Gesundheit erzählen.</p><p>Das ist keine Kritik an Ihrem Hausarzt. Es ist eine strukturelle Realität des Gesundheitssystems.</p><h2>Was standardmäßig nicht getestet wird</h2><p>Das Schweizer KVG-System erstattet präventive Blutuntersuchungen nur, wenn sie durch spezifische Symptome oder Risikofaktoren gerechtfertigt sind. Klinisch wichtige Marker wie ApoB, Lp(a), Nüchterninsulin, HOMA-IR, freie T3/T4, DHEA-S, Omega-3-Index und erweiterte Entzündungsmarker (IL-6, hsCRP) werden routinemäßig nicht gemessen.</p><h2>Die klinische Lücke</h2><p>Die Forschung ist eindeutig: Herzinfarkte, Typ-2-Diabetes und Krebserkrankungen sind in der Regel über Jahre oder Jahrzehnte anhand von Biomarkern vorhersagbar, bevor Symptome auftreten. Das Problem ist nicht, dass die Tests nicht existieren. Das Problem ist, dass sie nicht routinemäßig angeordnet werden.</p>", "title_fr": "Pourquoi votre bilan de santé annuel chez le généraliste manque 80% de ce qui compte", "desc_fr": "Un bilan standard chez un généraliste ne teste que 12 à 20 marqueurs. Aeonix en teste jusqu'à 100+. Découvrez ce que les bilans standard manquent — et pourquoi c'est important pour votre santé à long terme en Suisse.", "section_fr": "Médecine préventive", "body_fr": "<p>Un bilan de santé standard chez un généraliste en Suisse couvre généralement l'essentiel : tension artérielle, poids, bilan lipidique, peut-être la glycémie. Au total, entre 12 et 20 marqueurs — sur les centaines qui circulent dans votre sang et racontent une histoire sur votre santé.</p><p>Ce n'est pas une critique de votre médecin. C'est une réalité structurelle du système de santé.</p><h2>Ce qui n'est pas testé en routine</h2><p>Le système LAMal suisse ne rembourse les analyses sanguines préventives que lorsqu'elles sont justifiées par des symptômes ou des facteurs de risque spécifiques. Des marqueurs cliniquement importants comme l'ApoB, le Lp(a), l'insuline à jeun, le HOMA-IR, les T3/T4 libres, le DHEA-S, l'index oméga-3 et les marqueurs inflammatoires avancés ne sont pas mesurés en routine.</p><h2>L'écart clinique</h2><p>La recherche est claire : les crises cardiaques, le diabète de type 2 et les cancers sont généralement prévisibles des années ou des décennies à l'avance par des biomarqueurs, avant l'apparition des symptômes. Le problème n'est pas que les tests n'existent pas. Le problème est qu'ils ne sont pas commandés en routine.</p>", "title_it": "Perché il tuo controllo annuale dal medico di base manca l'80% di ciò che conta", "desc_it": "Un controllo standard dal medico testa solo 12-20 marcatori. Aeonix ne testa fino a 100+. Scopri cosa mancano i controlli standard — e perché è importante per la tua salute a lungo termine in Svizzera.", "section_it": "Medicina preventiva", "body_it": "<p>Un controllo sanitario standard presso un medico di base in Svizzera copre tipicamente le basi: pressione sanguigna, peso, profilo lipidico, forse glicemia. In totale, tra 12 e 20 marcatori — su centinaia che circolano nel sangue raccontando una storia sulla tua salute.</p><p>Non è una critica al tuo medico. È una realtà strutturale del sistema sanitario.</p><h2>Cosa non viene testato di routine</h2><p>Il sistema LAMal svizzero rimborsa le analisi del sangue preventive solo quando giustificate da sintomi o fattori di rischio specifici. Marcatori clinicamente importanti come ApoB, Lp(a), insulina a digiuno, HOMA-IR, T3/T4 liberi, DHEA-S, indice omega-3 e marcatori infiammatori avanzati non vengono misurati di routine.</p><h2>Il divario clinico</h2><p>La ricerca è chiara: infarti, diabete di tipo 2 e tumori sono generalmente prevedibili anni o decenni prima attraverso i biomarcatori, prima che compaiano i sintomi. Il problema non è che i test non esistano. Il problema è che non vengono ordinati di routine.</p>" },
  { "slug": "gut-health-immune-inflammation", "section": "Gut & Immune Health", "date": "2025-01-15", "read_time": "6 min read", "color": "#4A8C7A", "title": "Your Gut Is Running Your Immune System. Here's What the Blood Can Tell You.", "desc": "Gut dysbiosis drives systemic inflammation through bacterial translocation. The immune and inflammatory markers in Aeonix's panel — including IL-6, hsCRP, and lymphocyte subsets — tell part of this story.", "body": "<p>The gut-immune axis has become one of the most active areas of medical research in the past decade. Approximately 70% of immune cells reside in or around the gastrointestinal tract. The composition of the gut microbiome directly influences systemic inflammation, neurological function, hormonal balance, and metabolic health. And the consequences of gut dysbiosis — microbial imbalance — are visible in the blood, if you know what to look for.</p><p>At Aeonix, our comprehensive panels cover the markers that matter — tested in leading Swiss laboratories, reviewed by a qualified physician, and delivered within 48 hours. Because the information that protects your health should not depend on the accident of what your GP happens to order.</p>\n\n  <div class=\"article-cta\">\n    <h3>Aeonix — Own Your Health</h3>\n    <p>over 150 clinically validated biomarkers. Physician-reviewed results in 48 hours. Renowned Swiss lab. GDPR-compliant.</p>\n    <a href=\"/#pricing\" class=\"cta-btn\">Own Your Health — Book a Screening</a>\n  </div>", "title_de": "Ihr Darm steuert Ihr Immunsystem. Was das Blut Ihnen sagen kann.", "desc_de": "Darmdysbiose treibt durch bakterielle Translokation systemische Entzündung an. Die Immun- und Entzündungsmarker im Aeonix-Panel – darunter IL-6, hsCRP und Lymphozyten-Subsets – erzählen einen Teil dieser Geschichte.", "section_de": "Darm- & Immungesundheit", "body_de": "<p>Die Darm-Immun-Achse ist in den letzten zehn Jahren zu einem der aktivsten Forschungsbereiche der Medizin geworden. Etwa 70% der Immunzellen befinden sich im oder um den Magen-Darm-Trakt. Die Zusammensetzung des Darmmikrobioms beeinflusst direkt die systemische Entzündung, die neurologische Funktion und das Hormongleichgewicht.</p><h2>Was Bluttests über die Darmgesundheit verraten</h2><p>Direktes Mikrobiom-Testing ist nicht Teil eines Standard-Blutpanels. Aber die Auswirkungen einer Darmdysbiose sind im Blut messbar: erhöhte Entzündungsmarker (hsCRP, IL-6), veränderte Lymphozytenverhältnisse, erhöhte Zonulin-Spiegel (Marker für intestinale Permeabilität) und Nährstoffmangel aufgrund von Resorptionsstörungen.</p><h2>Das Aeonix Darm-Immun-Panel</h2><p>Wir messen hsCRP, IL-6, vollständiges Blutbild mit Differenzierung, Gesamt-IgE (als Marker für immunologische Reaktivität), Vitamin B12 und Folsäure (häufig mangelhaft bei Darmpermeabilität) sowie Zink und Magnesium. Zusammengenommen bilden diese Marker ein Bild der systemischen Belastung durch eine kompromittierte Darmintegrität.</p>", "title_fr": "Votre intestin dirige votre système immunitaire. Voici ce que le sang peut vous dire.", "desc_fr": "La dysbiose intestinale entraîne une inflammation systémique par translocation bactérienne. Les marqueurs immunitaires et inflammatoires du panel Aeonix — dont l'IL-6, la hsCRP et les sous-ensembles lymphocytaires — racontent une partie de cette histoire.", "section_fr": "Santé intestinale et immunitaire", "body_fr": "<p>L'axe intestin-immunité est devenu l'un des domaines de recherche médicale les plus actifs de la dernière décennie. Environ 70% des cellules immunitaires résident dans ou autour du tractus gastro-intestinal. La composition du microbiome intestinal influence directement l'inflammation systémique, la fonction neurologique et l'équilibre hormonal.</p><h2>Ce que les analyses sanguines révèlent sur la santé intestinale</h2><p>Les tests directs du microbiome ne font pas partie d'un panel sanguin standard. Mais les effets de la dysbiose intestinale sont mesurables dans le sang : marqueurs inflammatoires élevés (hsCRP, IL-6), rapports lymphocytaires altérés, et carences nutritionnelles dues à des problèmes d'absorption.</p><h2>Le panel intestin-immunité d'Aeonix</h2><p>Nous mesurons la hsCRP, l'IL-6, une NFS avec différenciation, les IgE totaux, la vitamine B12 et l'acide folique, ainsi que le zinc et le magnésium. Ensemble, ces marqueurs forment un tableau de la charge systémique d'une intégrité intestinale compromise.</p>", "title_it": "Il tuo intestino gestisce il tuo sistema immunitario. Ecco cosa può dirti il sangue.", "desc_it": "La disbiosi intestinale guida l'infiammazione sistemica attraverso la traslocazione batterica. I marcatori immunitari e infiammatori nel pannello Aeonix — tra cui IL-6, hsCRP e subset linfocitari — raccontano parte di questa storia.", "section_it": "Salute intestinale e immunitaria", "body_it": "<p>L'asse intestino-immunità è diventato uno dei settori di ricerca medica più attivi nell'ultimo decennio. Circa il 70% delle cellule immunitarie risiede nel tratto gastrointestinale o nelle sue vicinanze. La composizione del microbioma intestinale influenza direttamente l'infiammazione sistemica, la funzione neurologica e l'equilibrio ormonale.</p><h2>Cosa rivelano le analisi del sangue sulla salute intestinale</h2><p>I test diretti del microbioma non fanno parte di un pannello ematico standard. Ma gli effetti della disbiosi intestinale sono misurabili nel sangue: marcatori infiammatori elevati (hsCRP, IL-6), rapporti linfocitari alterati e carenze nutrizionali dovute a problemi di assorbimento.</p><h2>Il pannello intestino-immunità di Aeonix</h2><p>Misuriamo hsCRP, IL-6, emocromo completo con differenziazione, IgE totali, vitamina B12 e acido folico, zinco e magnesio. Insieme, questi marcatori formano un quadro del carico sistemico di una compromessa integrità intestinale.</p>" },
  { "slug": "inflammation-silent-disease-driver", "section": "Preventive Medicine", "date": "2025-01-15", "read_time": "8 min read", "color": "#4A8C6F", "title": "Inflammation: The Silent Driver of Heart Disease, Diabetes, and Dementia", "desc": "Chronic low-grade inflammation is the shared root of the three leading causes of death in Switzerland. hsCRP and IL-6 measure it. Aeonix tests both.", "body": "<p>Chronic low-grade systemic inflammation — sometimes called \"inflammaging\" in the longevity science literature — is now understood to be the shared pathological substrate of cardiovascular disease, type 2 diabetes, Alzheimer's disease, and a growing list of cancers. It is not the acute inflammation of a sprained ankle or a fever. It is a slow, persistent, sub-threshold activation of the immune system that produces none of the obvious signs of inflammation — no swelling, no redness, no pain — while quietly causing progressive tissue and vascular damage.</p>\n\n<h2>The key markers</h2>\n<p><strong>hsCRP (high-sensitivity C-reactive protein)</strong> is produced by the liver in response to inflammatory cytokines. Unlike standard CRP (which detects acute, high-level inflammation), hsCRP is sensitive enough to detect the chronic, low-level inflammatory state associated with cardiometabolic disease. A JUPITER trial involving 17,802 participants showed that statin therapy reduced cardiovascular events in individuals with normal LDL but elevated hsCRP — confirming inflammation as an independent cardiovascular risk factor.</p>\n\n<p><strong>IL-6 (interleukin-6)</strong> is a pro-inflammatory cytokine produced by macrophages, adipose tissue, and vascular endothelial cells. Elevated IL-6 is strongly associated with progression to type 2 diabetes (the Whitehall II study showed a 3-fold elevated risk in the highest IL-6 quartile), with Alzheimer's disease neuropathology, and with cardiovascular mortality independent of other risk factors.</p>\n\n<h2>What drives chronic inflammation?</h2>\n<ul>\n  <li>Visceral adiposity — fat stored around organs releases inflammatory cytokines continuously</li>\n  <li>Poor sleep — even one night of disrupted sleep measurably elevates IL-6</li>\n  <li>Gut dysbiosis — lipopolysaccharides from gut bacteria translocate through a leaky gut and trigger systemic immune activation</li>\n  <li>Insulin resistance — through multiple pathways, including AGE (advanced glycation end-product) accumulation</li>\n  <li>Chronic psychological stress — via HPA axis dysregulation</li>\n</ul>\n\n<h2>Intervention: what the evidence supports</h2>\n<p>The interventions with the most robust evidence for reducing hsCRP and IL-6 include: omega-3 supplementation (reducing hsCRP by 20–30% in RCTs), vigorous aerobic exercise (sustained effect over 12+ weeks), Mediterranean dietary pattern, sleep optimisation, and addressing vitamin D deficiency — a direct immune modulator.</p>\n\n<p>None of this is possible if you do not first know your baseline. And the standard check-up does not measure it.</p>\n\n  <div class=\"article-cta\">\n    <h3>Aeonix — Own Your Health</h3>\n    <p>over 150 clinically validated biomarkers. Physician-reviewed results in 48 hours. Renowned Swiss lab. GDPR-compliant.</p>\n    <a href=\"/#pricing\" class=\"cta-btn\">Own Your Health — Book a Screening</a>\n  </div>", "title_de": "Entzündung: Der stille Treiber von Herzerkrankungen, Diabetes und Demenz", "desc_de": "Chronische niedriggradige Entzündung ist die gemeinsame Wurzel der drei häufigsten Todesursachen in der Schweiz. hsCRP und IL-6 messen sie. Aeonix testet beides.", "section_de": "Präventivmedizin", "body_de": "<p>Chronische niedriggradige systemische Entzündung – in der Longevity-Wissenschaft manchmal «Inflammaging» genannt – wird heute als das gemeinsame pathologische Substrat von Herz-Kreislauf-Erkrankungen, Typ-2-Diabetes, Alzheimer-Krankheit und einer wachsenden Liste von Krebsarten verstanden. Es handelt sich nicht um die akute Entzündung nach einer Verletzung, sondern um eine dauerhaft erhöhte Grundaktivierung des Immunsystems.</p><h2>Die Messung von Entzündung</h2><p>Zwei Marker sind klinisch am validesten: hsCRP (hochsensitives C-reaktives Protein) – ein von der Leber als Reaktion auf Entzündungssignale produziertes Protein, und IL-6 (Interleukin-6) – ein Zytokin, das an der akuten Phase der Entzündungsreaktion beteiligt ist und bei chronischer Überaktivierung mit Herzerkrankungen, Insulinresistenz und kognitiver Abnahme assoziiert ist.</p><h2>Was erhöhte Entzündungswerte bedeuten</h2><p>Ein hsCRP über 3,0 mg/L verdoppelt das kardiovaskuläre Risiko im Vergleich zu Werten unter 1,0 mg/L – unabhängig vom LDL-Cholesterin. Das ist die klinische Relevanz. Viele Menschen mit normalem LDL haben ein erhöhtes hsCRP. Ohne Test wissen sie es nicht.</p>", "title_fr": "L'inflammation : le moteur silencieux des maladies cardiaques, du diabète et de la démence", "desc_fr": "L'inflammation chronique de bas grade est la racine commune des trois principales causes de décès en Suisse. La hsCRP et l'IL-6 la mesurent. Aeonix teste les deux.", "section_fr": "Médecine préventive", "body_fr": "<p>L'inflammation systémique chronique de bas grade — parfois appelée «inflammaging» dans la littérature sur la longévité — est désormais comprise comme le substrat pathologique commun des maladies cardiovasculaires, du diabète de type 2, de la maladie d'Alzheimer et d'une liste croissante de cancers. Il ne s'agit pas de l'inflammation aiguë qui suit une blessure, mais d'une activation de base constamment élevée du système immunitaire.</p><h2>La mesure de l'inflammation</h2><p>Deux marqueurs sont les plus validés cliniquement : la hsCRP (protéine C-réactive ultra-sensible) — une protéine produite par le foie en réponse aux signaux inflammatoires, et l'IL-6 (interleukine-6) — une cytokine impliquée dans la réponse inflammatoire de phase aiguë, associée en cas de suractivation chronique aux maladies cardiaques, à la résistance à l'insuline et au déclin cognitif.</p><h2>Ce que signifient des valeurs inflammatoires élevées</h2><p>Une hsCRP supérieure à 3,0 mg/L double le risque cardiovasculaire par rapport à des valeurs inférieures à 1,0 mg/L — indépendamment du cholestérol LDL. C'est la pertinence clinique. De nombreuses personnes avec un LDL normal ont une hsCRP élevée. Sans test, elles ne le savent pas.</p>", "title_it": "Infiammazione: il motore silenzioso delle malattie cardiache, del diabete e della demenza", "desc_it": "L'infiammazione cronica di basso grado è la radice comune delle tre principali cause di morte in Svizzera. hsCRP e IL-6 la misurano. Aeonix testa entrambi.", "section_it": "Medicina preventiva", "body_it": "<p>L'infiammazione sistemica cronica di basso grado — a volte chiamata «inflammaging» nella letteratura sulla longevità — è ora compresa come il substrato patologico comune delle malattie cardiovascolari, del diabete di tipo 2, della malattia di Alzheimer e di un crescente elenco di tumori. Non si tratta dell'infiammazione acuta che segue un infortunio, ma di una costante attivazione di base elevata del sistema immunitario.</p><h2>La misurazione dell'infiammazione</h2><p>Due marcatori sono i più validati clinicamente: hsCRP (proteina C-reattiva ad alta sensibilità) — una proteina prodotta dal fegato in risposta ai segnali infiammatori, e IL-6 (interleuchina-6) — una citochina coinvolta nella risposta infiammatoria di fase acuta, associata in caso di iperattivazione cronica a malattie cardiache, resistenza all'insulina e declino cognitivo.</p><h2>Cosa significano valori infiammatori elevati</h2><p>Una hsCRP superiore a 3,0 mg/L raddoppia il rischio cardiovascolare rispetto a valori inferiori a 1,0 mg/L — indipendentemente dal colesterolo LDL. Questa è la rilevanza clinica. Molte persone con LDL normale hanno hsCRP elevata. Senza il test, non lo sanno.</p>" },
  { "slug": "insulin-resistance-silent-risk", "section": "Metabolic Health", "date": "2025-01-15", "read_time": "8 min read", "color": "#B8864E", "title": "Insulin Resistance: How to Be 'Normal' on Paper and Still Be at Risk", "desc": "Fasting glucose and HbA1c can both be normal while insulin resistance silently progresses. HOMA-IR is the test that reveals the truth. Available in every Aeonix panel.", "body": "<p>Insulin resistance is the metabolic condition that precedes type 2 diabetes by a decade or more. It is also the underlying driver of obesity, PCOS, fatty liver disease, and a significant proportion of cardiovascular events. An estimated 40% of the Swiss adult population has some degree of insulin resistance.</p>\n\n<p>Most of them will never be told.</p>\n\n<h2>The flaw in the standard test</h2>\n<p>Standard check-ups measure fasting glucose. If it is above 7.0 mmol/L, you have diabetes. Between 5.6 and 7.0, you have \"impaired fasting glucose.\" Below 5.6, you are told everything is fine.</p>\n\n<p>But this binary approach misses the most important window. In the decade before fasting glucose rises, something else is happening: your pancreas is compensating. It is producing more and more insulin to achieve the same glucose control. Your blood sugar stays normal. Your insulin is not.</p>\n\n<h2>What HOMA-IR actually tells you</h2>\n<p>HOMA-IR (Homeostatic Model Assessment of Insulin Resistance) is calculated from a simple formula using fasting glucose and fasting insulin. A HOMA-IR above 1.9 indicates early insulin resistance. Above 2.9 indicates significant resistance that warrants clinical intervention.</p>\n\n<p>Crucially, your fasting glucose can be perfectly normal — say, 4.8 mmol/L — while your HOMA-IR reveals insulin resistance that has been developing for years. This is the test that catches what the standard panel misses.</p>\n\n<h2>Why this matters beyond diabetes</h2>\n<p>Insulin resistance is not just a diabetes story. Research from the Stanford Prevention Research Center shows that individuals with elevated HOMA-IR have:</p>\n<ul>\n  <li>2.3× higher risk of major cardiovascular events</li>\n  <li>1.9× higher risk of non-alcoholic fatty liver disease</li>\n  <li>Significantly elevated risk of hormone imbalance, including low testosterone and elevated oestrogen in men</li>\n  <li>Higher baseline inflammation, as measured by hsCRP and IL-6</li>\n</ul>\n\n<h2>What intervention looks like</h2>\n<p>The good news: early insulin resistance is highly reversible. The interventions are not pharmaceutical — they are metabolic. Strategic time-restricted eating, resistance training, reducing refined carbohydrates, and improving sleep quality have all demonstrated measurable HOMA-IR improvement in clinical trials.</p>\n\n<p>But you cannot intervene on what you cannot measure. And the standard check-up does not measure it.</p>\n\n  <div class=\"article-cta\">\n    <h3>Aeonix — Own Your Health</h3>\n    <p>over 150 clinically validated biomarkers. Physician-reviewed results in 48 hours. Renowned Swiss lab. GDPR-compliant.</p>\n    <a href=\"/#pricing\" class=\"cta-btn\">Own Your Health — Book a Screening</a>\n  </div>", "title_de": "Insulinresistenz: Wie man auf dem Papier «normal» sein und trotzdem gefährdet sein kann", "desc_de": "Nüchternglukose und HbA1c können beide normal sein, während die Insulinresistenz still fortschreitet. HOMA-IR ist der Test, der die Wahrheit aufdeckt. In jedem Aeonix-Panel verfügbar.", "section_de": "Stoffwechselgesundheit", "body_de": "<p>Insulinresistenz ist der Stoffwechselzustand, der Typ-2-Diabetes ein Jahrzehnt oder länger vorausgeht. Sie ist auch der zugrundeliegende Treiber von Adipositas, PCOS, Fettlebererkrankung und einem erheblichen Anteil kardiovaskulärer Ereignisse. Schätzungsweise 40% der Schweizer Erwachsenen haben ein gewisses Maß an Insulinresistenz. Die meisten wissen es nicht.</p><h2>Warum Standard-Tests sie übersehen</h2><p>Die Standard-Diabetesvorsorge umfasst Nüchternglukose und HbA1c. Beide können viele Jahre lang normal sein, während die Insulinresistenz fortschreitet. Der Grund: Die Bauchspeicheldrüse kompensiert aktiv, indem sie mehr Insulin produziert. Solange die Glukose unter Kontrolle gehalten werden kann, bleibt sie im Normbereich. Aber der erhöhte Insulinspiegel selbst richtet Schaden an.</p><h2>HOMA-IR: Der Test, der die Wahrheit aufdeckt</h2><p>HOMA-IR (Homeostatic Model Assessment of Insulin Resistance) wird aus Nüchternglukose und Nüchterninsulin berechnet. Ein Wert über 1,9 deutet auf eine frühe Insulinresistenz hin; über 2,9 auf eine signifikante. Aeonix misst Nüchterninsulin in jedem Panel – einem Test, den Ihr Hausarzt wahrscheinlich nicht routinemäßig anordnet.</p>", "title_fr": "Résistance à l'insuline : comment être «normal» sur le papier et être quand même à risque", "desc_fr": "La glycémie à jeun et l'HbA1c peuvent être toutes deux normales pendant que la résistance à l'insuline progresse silencieusement. Le HOMA-IR est le test qui révèle la vérité. Disponible dans chaque panel Aeonix.", "section_fr": "Santé métabolique", "body_fr": "<p>La résistance à l'insuline est la condition métabolique qui précède le diabète de type 2 d'une décennie ou plus. Elle est également le moteur sous-jacent de l'obésité, du SOPK, de la stéatose hépatique et d'une proportion significative d'événements cardiovasculaires. On estime que 40% des adultes suisses présentent un certain degré de résistance à l'insuline. La plupart ne le savent pas.</p><h2>Pourquoi les tests standard la manquent</h2><p>Le dépistage standard du diabète inclut la glycémie à jeun et l'HbA1c. Ces deux paramètres peuvent rester normaux pendant de nombreuses années pendant que la résistance à l'insuline progresse. Le pancréas compense activement en produisant davantage d'insuline. Mais l'insuline élevée elle-même cause des dommages.</p><h2>Le HOMA-IR : le test qui révèle la vérité</h2><p>Le HOMA-IR est calculé à partir de la glycémie à jeun et de l'insuline à jeun. Une valeur supérieure à 1,9 suggère une résistance à l'insuline précoce ; supérieure à 2,9, une résistance significative. Aeonix mesure l'insuline à jeun dans chaque panel.</p>", "title_it": "Resistenza all'insulina: come essere «normali» sulla carta e rischiare comunque", "desc_it": "La glicemia a digiuno e l'HbA1c possono essere entrambe normali mentre la resistenza all'insulina progredisce silenziosamente. HOMA-IR è il test che rivela la verità. Disponibile in ogni pannello Aeonix.", "section_it": "Salute metabolica", "body_it": "<p>La resistenza all'insulina è la condizione metabolica che precede il diabete di tipo 2 di un decennio o più. È anche il motore sottostante dell'obesità, della PCOS, della malattia epatica grassa e di una proporzione significativa di eventi cardiovascolari. Si stima che il 40% degli adulti svizzeri abbia un certo grado di resistenza all'insulina. La maggior parte non lo sa.</p><h2>Perché i test standard la mancano</h2><p>Lo screening standard per il diabete include glicemia a digiuno e HbA1c. Entrambi possono rimanere normali per molti anni mentre la resistenza all'insulina progredisce. Il pancreas compensa attivamente producendo più insulina. Ma l'insulina elevata stessa causa danni.</p><h2>HOMA-IR: il test che rivela la verità</h2><p>HOMA-IR è calcolato dalla glicemia a digiuno e dall'insulina a digiuno. Un valore superiore a 1,9 suggerisce resistenza all'insulina precoce; superiore a 2,9, resistenza significativa. Aeonix misura l'insulina a digiuno in ogni pannello.</p>" },
  { "slug": "krankenkasse-doesnt-cover", "section": "Swiss Healthcare", "date": "2025-01-15", "read_time": "5 min read", "color": "#C03030", "title": "Why Your Krankenkasse Doesn't Cover the Tests That Matter Most", "desc": "Swiss KVG insurance doesn't cover comprehensive preventative blood testing for healthy adults. Here's why — and what you can do about it.", "body": "<p>Switzerland operates one of the most sophisticated healthcare systems in the world. It is also, by design, a system that does not routinely fund comprehensive preventative blood screening for healthy adults.</p>\n\n<p>This is not a flaw. It is a deliberate structural choice — and understanding it is the first step to navigating it intelligently.</p>\n\n<h2>How the KVG actually works</h2>\n<p>Switzerland's compulsory health insurance, governed by the Krankenversicherungsgesetz (KVG), reimburses medical services that are \"effective, appropriate, and economical\" for diagnosed or suspected conditions. Preventative blood testing for asymptomatic, healthy individuals falls outside this framework for most markers beyond a narrow set.</p>\n\n<p>The exception is the periodic health examination (Vorsorgeuntersuchung), which GPs can perform once every three years. This covers blood pressure, BMI, a basic lipid panel, and fasting glucose — roughly the 12–20 markers described above.</p>\n\n<h2>The actuarial logic — and its limits</h2>\n<p>From an insurer's perspective, covering comprehensive preventative screening for the entire Swiss adult population would cost CHF 300–500 million annually. The health economics literature is divided on whether this produces net savings within a standard 5-year coverage window, particularly when accounting for downstream costs of incidental findings.</p>\n\n<p>From an individual's perspective, this calculation is irrelevant. If you are one of the 20% of Swiss adults with an undetected Lp(a) elevation, or one of the 40% with subclinical insulin resistance, or one of the 15% with early thyroid autoimmunity — population-level economics are not your concern. Your biology is.</p>\n\n<h2>What out-of-pocket screening actually costs</h2>\n<p>Aeonix's Prime Health panel — 100+ clinically validated biomarkers with physician review — is CHF 895 as a one-time test. The subscription price is CHF 595 per year. For context: the average Swiss household spends CHF 340 per month on KVG premiums (CHF 4,080/year) for basic insurance that covers almost none of what Aeonix measures.</p>\n\n<p>The question is not whether you can afford comprehensive screening. It is whether you can afford not to have it.</p>\n\n  <div class=\"article-cta\">\n    <h3>Aeonix — Own Your Health</h3>\n    <p>over 150 clinically validated biomarkers. Physician-reviewed results in 48 hours. Renowned Swiss lab. GDPR-compliant.</p>\n    <a href=\"/#pricing\" class=\"cta-btn\">Own Your Health — Book a Screening</a>\n  </div>", "title_de": "Warum Ihre Krankenkasse die wichtigsten Tests nicht bezahlt", "desc_de": "Die Schweizer KVG-Versicherung deckt keine umfassenden präventiven Bluttests für gesunde Erwachsene ab. Hier erfahren Sie warum – und was Sie dagegen tun können.", "section_de": "Schweizer Gesundheitswesen", "body_de": "<p>Die Schweiz verfügt über eines der ausgefeiltesten Gesundheitssysteme der Welt. Es ist auch ein System, das von Design her keine umfassende präventive Blutuntersuchung für gesunde Erwachsene routinemäßig finanziert.</p><p>Das ist kein Fehler. Es ist eine bewusste strukturelle Entscheidung – und sie zu verstehen ist der Schlüssel, um das System zu Ihrem Vorteil zu nutzen.</p><h2>Die KVG-Logik</h2><p>Das Krankenversicherungsgesetz (KVG) erstattet medizinische Leistungen, die «wirksam, zweckmässig und wirtschaftlich» sind. Bluttests bei asymptomatischen Erwachsenen ohne spezifische Risikoindikation gelten nicht als «zweckmässig» im versicherungsrechtlichen Sinne. Das Ziel des Systems ist die Behandlung von Krankheiten, nicht deren Prävention.</p><h2>Was das für Sie bedeutet</h2><p>Umfassendes präventives Screening – der klinisch überlegenere Ansatz – liegt außerhalb des KVG-Rahmens. Es ist Privatmedizin. Aeonix operiert in diesem Rahmen: direkt bezahlt, vollständig transparent, klinisch streng.</p>", "title_fr": "Pourquoi votre assurance maladie ne couvre pas les tests qui comptent le plus", "desc_fr": "L'assurance LAMal suisse ne couvre pas les analyses sanguines préventives complètes pour les adultes en bonne santé. Voici pourquoi — et ce que vous pouvez faire.", "section_fr": "Système de santé suisse", "body_fr": "<p>La Suisse possède l'un des systèmes de santé les plus sophistiqués au monde. C'est aussi, par conception, un système qui ne finance pas le dépistage sanguin préventif complet pour les adultes en bonne santé.</p><p>Ce n'est pas un défaut. C'est un choix structurel délibéré — et le comprendre est la clé pour utiliser le système à votre avantage.</p><h2>La logique de la LAMal</h2><p>La loi sur l'assurance maladie (LAMal) rembourse les prestations médicales «efficaces, appropriées et économiques». Les analyses sanguines chez des adultes asymptomatiques sans indication de risque spécifique ne sont pas considérées comme «appropriées» au sens de l'assurance. L'objectif du système est de traiter les maladies, pas de les prévenir.</p><h2>Ce que cela signifie pour vous</h2><p>Le dépistage préventif complet — l'approche cliniquement supérieure — est en dehors du cadre LAMal. C'est de la médecine privée. Aeonix opère dans ce cadre : paiement direct, entièrement transparent, cliniquement rigoureux.</p>", "title_it": "Perché la tua cassa malati non copre i test più importanti", "desc_it": "L'assicurazione LAMal svizzera non copre le analisi del sangue preventive complete per gli adulti sani. Ecco perché — e cosa puoi fare.", "section_it": "Sistema sanitario svizzero", "body_it": "<p>La Svizzera ha uno dei sistemi sanitari più sofisticati al mondo. È anche, per concezione, un sistema che non finanzia di routine lo screening ematico preventivo completo per gli adulti sani.</p><p>Questo non è un difetto. È una scelta strutturale deliberata — e capirla è la chiave per usare il sistema a proprio vantaggio.</p><h2>La logica della LAMal</h2><p>La legge sull'assicurazione malattie (LAMal) rimborsa le prestazioni mediche «efficaci, appropriate ed economiche». Le analisi del sangue in adulti asintomatici senza una specifica indicazione di rischio non sono considerate «appropriate» nel senso assicurativo. L'obiettivo del sistema è trattare le malattie, non prevenirle.</p><h2>Cosa significa per te</h2><p>Lo screening preventivo completo — l'approccio clinicamente superiore — è al di fuori del quadro LAMal. È medicina privata. Aeonix opera in questo quadro: pagamento diretto, completamente trasparente, clinicamente rigoroso.</p>" },
  { "slug": "lipoprotein-a-genetic-risk", "section": "Cardiovascular Health", "date": "2025-01-15", "read_time": "6 min read", "color": "#C0645A", "title": "Lp(a): The Genetic Risk Factor That Affects 1 in 5 People — And Is Almost Never Tested", "desc": "Elevated Lipoprotein(a) doubles the risk of heart attack, is entirely genetic, and cannot be lowered by statins or diet. The only way to know your level is to test it.", "body": "<p>Lipoprotein(a) — written as Lp(a) and pronounced 'LP little a' — is a lipoprotein particle that is structurally similar to LDL but far more atherogenic. Elevated Lp(a) is strongly associated with premature coronary artery disease, aortic stenosis, and stroke. Approximately 20% of the global population has a level considered high-risk (above 50 mg/dL or 125 nmol/L). And unlike LDL — which can be reduced by diet, exercise, and statins — Lp(a) is almost entirely genetically determined. You cannot exercise it away. You cannot eat it away. But you can know your level and manage your risk accordingly.</p><p>At Aeonix, our comprehensive panels cover the markers that matter — tested in leading Swiss laboratories, reviewed by a qualified physician, and delivered within 48 hours. Because the information that protects your health should not depend on the accident of what your GP happens to order.</p>\n\n  <div class=\"article-cta\">\n    <h3>Aeonix — Own Your Health</h3>\n    <p>over 150 clinically validated biomarkers. Physician-reviewed results in 48 hours. Renowned Swiss lab. GDPR-compliant.</p>\n    <a href=\"/#pricing\" class=\"cta-btn\">Own Your Health — Book a Screening</a>\n  </div>", "title_de": "Lp(a): Der genetische Risikofaktor, der 1 von 5 Menschen betrifft – und fast nie getestet wird", "desc_de": "Erhöhtes Lipoprotein(a) verdoppelt das Herzinfarktrisiko, ist rein genetisch bedingt und kann nicht durch Statine oder Ernährung gesenkt werden. Der einzige Weg, Ihren Wert zu kennen, ist ein Test.", "section_de": "Herz-Kreislauf-Gesundheit", "body_de": "<p>Lipoprotein(a) – geschrieben als Lp(a) und ausgesprochen «LP little a» – ist ein Lipoproteinpartikel, der strukturell dem LDL ähnlich, aber weitaus atherogener ist. Erhöhtes Lp(a) ist stark mit früher koronarer Herzkrankheit, Aortenstenose und Schlaganfall assoziiert. Etwa 20% der Weltbevölkerung trägt genetisch erhöhte Lp(a)-Werte.</p><h2>Warum es anders ist als alle anderen Lipide</h2><p>Anders als LDL ist Lp(a) nahezu vollständig genetisch bestimmt. Ernährung, Sport und Statine haben kaum Einfluss auf Ihren Lp(a)-Spiegel. Wenn Sie erhöhtes Lp(a) haben, haben Sie es, weil Ihre Gene es so festgelegt haben – nicht wegen Ihres Lebensstils. Diese genetische Determination macht es für die Risikoabschätzung wichtig: Es ist ein unveränderliches Hintergrundrisiko, das in Ihre kardiovaskuläre Gesamtrisikokalkulation einbezogen werden muss.</p><h2>Was zu tun ist, wenn Ihr Lp(a) erhöht ist</h2><p>Bestimmte Maßnahmen können helfen: aggressivere LDL-Senkung (um das Gesamtrisiko zu reduzieren), Aspirin bei hohem absoluten Risiko (nach ärztlicher Abklärung), häufigere kardiovaskuläre Überwachung. Neue Therapien – insbesondere RNA-basierte Medikamente wie Inclisiran – zeigen erste Ergebnisse bei der Lp(a)-Senkung.</p>", "title_fr": "Lp(a) : Le facteur de risque génétique qui affecte 1 personne sur 5 — et n'est presque jamais testé", "desc_fr": "Un Lp(a) élevé double le risque de crise cardiaque, est entièrement génétique et ne peut pas être réduit par des statines ou l'alimentation. Le seul moyen de connaître votre taux est de le tester.", "section_fr": "Santé cardiovasculaire", "body_fr": "<p>La lipoprotéine(a) — écrite Lp(a) et prononcée «LP petit a» — est une particule lipoprotéique structurellement similaire au LDL mais bien plus athérogène. Un Lp(a) élevé est fortement associé à la maladie coronarienne précoce, à la sténose aortique et à l'AVC. Environ 20% de la population mondiale porte génétiquement des niveaux élevés de Lp(a).</p><h2>Pourquoi il est différent de tous les autres lipides</h2><p>Contrairement au LDL, le Lp(a) est presque entièrement déterminé génétiquement. L'alimentation, l'exercice et les statines ont peu d'effet sur votre taux de Lp(a). Si vous avez un Lp(a) élevé, vous l'avez parce que vos gènes l'ont déterminé — pas à cause de votre mode de vie.</p><h2>Que faire si votre Lp(a) est élevé</h2><p>Certaines mesures peuvent aider : réduction plus agressive du LDL, aspirine en cas de risque absolu élevé (après avis médical), surveillance cardiovasculaire plus fréquente. De nouvelles thérapies — notamment les médicaments à base d'ARN comme l'inclisiran — montrent des résultats préliminaires dans la réduction du Lp(a).</p>", "title_it": "Lp(a): Il fattore di rischio genetico che colpisce 1 persona su 5 — e non viene quasi mai testato", "desc_it": "Lp(a) elevato raddoppia il rischio di infarto, è interamente genetico e non può essere ridotto da statine o dieta. L'unico modo per conoscere il tuo livello è testarlo.", "section_it": "Salute cardiovascolare", "body_it": "<p>La lipoproteina(a) — scritta Lp(a) e pronunciata «LP piccola a» — è una particella lipoproteica strutturalmente simile all'LDL ma molto più aterogena. L'Lp(a) elevato è fortemente associato alla malattia coronarica precoce, alla stenosi aortica e all'ictus. Circa il 20% della popolazione mondiale porta geneticamente livelli elevati di Lp(a).</p><h2>Perché è diverso da tutti gli altri lipidi</h2><p>A differenza dell'LDL, l'Lp(a) è quasi interamente determinato geneticamente. Dieta, esercizio fisico e statine hanno poco effetto sul tuo livello di Lp(a). Se hai Lp(a) elevato, ce l'hai perché i tuoi geni lo hanno determinato — non a causa del tuo stile di vita.</p><h2>Cosa fare se il tuo Lp(a) è elevato</h2><p>Alcune misure possono aiutare: riduzione più aggressiva dell'LDL, aspirina in caso di rischio assoluto elevato (dopo consulto medico), monitoraggio cardiovascolare più frequente. Nuove terapie — in particolare farmaci a base di RNA come inclisiran — mostrano risultati preliminari nella riduzione dell'Lp(a).</p>" },
  { "slug": "longevity-biomarkers-bryan-johnson", "section": "Longevity Science", "date": "2025-01-15", "read_time": "8 min read", "color": "#2A7BA8", "title": "The Longevity Playbook: What Elite Health Screening Actually Measures", "desc": "The world's most sophisticated preventative health protocols — from Silicon Valley to Swiss clinics — share a common framework. Here's what they test, and why.", "body": "<p>Longevity medicine — once the domain of a narrow fringe — has become mainstream science. Elite sports organisations, high-performance executives, and longevity clinics in Switzerland, London, and Dubai are increasingly converging on a shared evidence base: comprehensive, regular biomarker testing as the foundation of individualised health optimisation.</p>\n\n<h2>What the evidence-based longevity protocol actually measures</h2>\n\n<p><strong>Cardiovascular:</strong> ApoB and Lp(a) over LDL-C. Coronary artery disease — the leading cause of death globally — is driven by atherogenic particle count, not cholesterol mass. ApoB is the most accurate measure of atherogenic burden; Lp(a) captures the genetic risk component that statin therapy cannot address.</p>\n\n<p><strong>Metabolic:</strong> HOMA-IR and fasting insulin over HbA1c. Insulin resistance precedes metabolic disease by years. HbA1c is a lagging indicator. HOMA-IR is the leading indicator that allows intervention before damage occurs.</p>\n\n<p><strong>Hormonal:</strong> Full axis testing — not just TSH. Testosterone, free and total. IGF-1, which reflects growth hormone axis function and is one of the strongest predictors of body composition, bone density, and cognitive function in ageing populations. Cortisol and DHEA-S, which together characterise the catabolic/anabolic balance.</p>\n\n<p><strong>Inflammatory:</strong> hsCRP and IL-6. The primary drivers of biological ageing at the cellular level are inflammation and oxidative stress. These markers quantify the former.</p>\n\n<p><strong>Nutritional:</strong> Vitamin D, B12, ferritin, zinc, magnesium, selenium, and Omega-3 Index. Micronutrient depletion is pervasive, underrecognised, and directly reversible. The Omega-3 Index — the ratio of EPA + DHA in red blood cell membranes — is one of the most underutilised predictive markers in longevity medicine.</p>\n\n<h2>The Swiss advantage</h2>\n<p>Switzerland offers something unique in the longevity health space: Swiss laboratory infrastructure, GDPR-compliant data management, and a medical culture built on precision and discretion. Aeonix is designed to make this infrastructure accessible to individuals who understand its value.</p>\n\n<p>Biological age is not destiny. But you cannot manage what you do not measure.</p>\n\n  <div class=\"article-cta\">\n    <h3>Aeonix — Own Your Health</h3>\n    <p>over 150 clinically validated biomarkers. Physician-reviewed results in 48 hours. Renowned Swiss lab. GDPR-compliant.</p>\n    <a href=\"/#pricing\" class=\"cta-btn\">Own Your Health — Book a Screening</a>\n  </div>", "title_de": "Das Longevity-Playbook: Was Elite-Gesundheitsscreening wirklich misst", "desc_de": "Die ausgefeiltesten präventiven Gesundheitsprotokolle der Welt – von Silicon Valley bis zu Schweizer Kliniken – teilen ein gemeinsames Framework. Hier sehen Sie, was sie testen und warum.", "section_de": "Longevity-Wissenschaft", "body_de": "<p>Longevity-Medizin – einst das Terrain einer kleinen Avantgarde – ist Mainstream-Wissenschaft geworden. Elite-Sportorganisationen, Hochleistungs-Führungskräfte und Longevity-Kliniken in der Schweiz, London und Dubai konvergieren zunehmend auf eine gemeinsame Evidenzbasis: umfassendes, regelmäßiges Biomarker-Testing als Grundlage präventiver Gesundheitspflege.</p><h2>Die Kernmarker der Longevity-Medizin</h2><p>Zu den am häufigsten gemessenen Markern in führenden Longevity-Protokollen gehören: ApoB und Lp(a) (kardiovaskuläres Risiko), Nüchterninsulin und HOMA-IR (Stoffwechselgesundheit), freies T3/T4 und TSH (Schilddrüsenfunktion), DHEA-S und Cortisol (Adrenalgesundheit), Omega-3-Index, Vitamin D und vollständiges Nährstoffprofil.</p><h2>Was Aeonix anders macht</h2><p>Elite-Longevity-Kliniken können CHF 3.000-10.000 pro Screening-Tag verlangen. Aeonix repliziert das klinische Framework zu Preisen, die für eine breite Bevölkerung zugänglich sind – mit demselben renommierten Labornetzwerk und ärztlicher Überprüfung jedes Ergebnisses.</p>", "title_fr": "Le manuel de la longévité : ce que les dépistages de santé élites mesurent vraiment", "desc_fr": "Les protocoles de santé préventive les plus sophistiqués au monde — de la Silicon Valley aux cliniques suisses — partagent un cadre commun. Voici ce qu'ils testent et pourquoi.", "section_fr": "Science de la longévité", "body_fr": "<p>La médecine de la longévité — autrefois le domaine d'une petite avant-garde — est devenue une science grand public. Les organisations sportives élites, les cadres à haute performance et les cliniques de longévité en Suisse, à Londres et à Dubaï convergent de plus en plus vers une base de preuves commune : des tests de biomarqueurs complets et réguliers comme base des soins de santé préventifs.</p><h2>Les marqueurs clés de la médecine de la longévité</h2><p>Parmi les marqueurs les plus fréquemment mesurés dans les protocoles de longévité leaders : ApoB et Lp(a) (risque cardiovasculaire), insuline à jeun et HOMA-IR (santé métabolique), T3/T4 libres et TSH (fonction thyroïdienne), DHEA-S et cortisol (santé surrénalienne), index oméga-3, vitamine D et profil nutritionnel complet.</p><h2>Ce qu'Aeonix fait différemment</h2><p>Les cliniques de longévité élites peuvent facturer CHF 3 000 à 10 000 par journée de dépistage. Aeonix réplique le cadre clinique à des prix accessibles à une large population — avec le même réseau de laboratoires renommés et une vérification médicale de chaque résultat.</p>", "title_it": "Il manuale della longevità: cosa misurano davvero gli screening sanitari d'élite", "desc_it": "I protocolli di salute preventiva più sofisticati al mondo — dalla Silicon Valley alle cliniche svizzere — condividono un framework comune. Ecco cosa testano e perché.", "section_it": "Scienza della longevità", "body_it": "<p>La medicina della longevità — un tempo dominio di una piccola avanguardia — è diventata scienza mainstream. Organizzazioni sportive d'élite, dirigenti ad alte prestazioni e cliniche della longevità in Svizzera, Londra e Dubai convergono sempre più su una base di prove comune: test biomarker completi e regolari come base della prevenzione sanitaria.</p><h2>I marcatori chiave della medicina della longevità</h2><p>Tra i marcatori più frequentemente misurati nei principali protocolli di longevità: ApoB e Lp(a) (rischio cardiovascolare), insulina a digiuno e HOMA-IR (salute metabolica), T3/T4 liberi e TSH (funzione tiroidea), DHEA-S e cortisolo (salute surrenalica), indice omega-3, vitamina D e profilo nutrizionale completo.</p><h2>Cosa fa Aeonix di diverso</h2><p>Le cliniche della longevità d'élite possono addebitare CHF 3.000-10.000 per giornata di screening. Aeonix replica il framework clinico a prezzi accessibili a una vasta popolazione — con la stessa rete di laboratori accreditati e revisione medica di ogni risultato.</p>" },
  { "slug": "omega3-index-underrated-marker", "section": "Nutritional Health", "date": "2025-01-15", "read_time": "5 min read", "color": "#5E8C4A", "title": "The Omega-3 Index: The Most Underrated Marker in Preventative Medicine", "desc": "The Omega-3 Index measures EPA+DHA in red blood cell membranes. It predicts cardiovascular mortality, cognitive decline, and inflammatory load. Aeonix includes it. Most check-ups don't.", "body": "<p>If you had to choose one underutilised marker that offers the clearest window into your cellular health, inflammatory biology, and cardiovascular risk simultaneously — the Omega-3 Index would be a strong candidate. It measures the proportion of EPA and DHA (the active omega-3 fatty acids) in red blood cell membranes, giving a direct readout of your body's omega-3 status averaged over the preceding 120 days.</p><p>At Aeonix, our comprehensive panels cover the markers that matter — tested in leading Swiss laboratories, reviewed by a qualified physician, and delivered within 48 hours. Because the information that protects your health should not depend on the accident of what your GP happens to order.</p>\n\n  <div class=\"article-cta\">\n    <h3>Aeonix — Own Your Health</h3>\n    <p>over 150 clinically validated biomarkers. Physician-reviewed results in 48 hours. Renowned Swiss lab. GDPR-compliant.</p>\n    <a href=\"/#pricing\" class=\"cta-btn\">Own Your Health — Book a Screening</a>\n  </div>", "title_de": "Der Omega-3-Index: Der am meisten unterschätzte Marker in der Präventivmedizin", "desc_de": "Der Omega-3-Index misst EPA+DHA in Erythrozytenmembranen. Er sagt kardiovaskuläre Mortalität, kognitiven Abbau und Entzündungslast voraus. Aeonix schließt ihn ein. Die meisten Checks nicht.", "section_de": "Ernährungsgesundheit", "body_de": "<p>Wenn Sie einen einzigen, zu wenig genutzten Marker wählen müssten, der gleichzeitig das klarste Fenster in Ihre zelluläre Gesundheit, Ihre Entzündungsbiologie und Ihr kardiovaskuläres Risiko bietet – wäre der Omega-3-Index ein starker Kandidat. Er misst den Anteil von EPA und DHA (den aktiven Omega-3-Fettsäuren) in roten Blutkörperchen – was den tatsächlichen Einbau in Zellmembranen und nicht nur die jüngste Nahrungsaufnahme widerspiegelt.</p><h2>Was der Omega-3-Index vorhersagt</h2><p>Ein Index unter 4% ist mit einem deutlich erhöhten Risiko für plötzlichen Herztod assoziiert. Werte zwischen 4-8% sind intermediär. Über 8% ist das Ziel. Studien zeigen auch Zusammenhänge mit kognitiver Funktion, Depressions-Risiko und systemischer Entzündung.</p><h2>Warum die meisten Menschen ihn nicht kennen</h2><p>Der Omega-3-Index ist nicht Teil des Standard-Lipidpanels. Er ist ein Spezialmessung, die selten angeordnet wird, obwohl sie klinisch bedeutsam ist. Aeonix schließt ihn standardmäßig ein, weil wir der Überzeugung sind, dass eine vollständige Bewertung des Herz-Kreislauf-Risikos ohne ihn unvollständig ist.</p>", "title_fr": "L'index oméga-3 : le marqueur le plus sous-estimé en médecine préventive", "desc_fr": "L'index oméga-3 mesure EPA+DHA dans les membranes des globules rouges. Il prédit la mortalité cardiovasculaire, le déclin cognitif et la charge inflammatoire. Aeonix l'inclut. La plupart des bilans non.", "section_fr": "Santé nutritionnelle", "body_fr": "<p>Si vous deviez choisir un seul marqueur sous-utilisé qui offre simultanément la fenêtre la plus claire sur votre santé cellulaire, votre biologie inflammatoire et votre risque cardiovasculaire — l'index oméga-3 serait un candidat sérieux. Il mesure la proportion d'EPA et de DHA dans les membranes des globules rouges — reflétant l'incorporation réelle dans les membranes cellulaires plutôt que la simple consommation alimentaire récente.</p><h2>Ce que l'index oméga-3 prédit</h2><p>Un index inférieur à 4% est associé à un risque nettement accru de mort cardiaque subite. Des valeurs entre 4 et 8% sont intermédiaires. Au-dessus de 8% est l'objectif. Des études montrent également des associations avec la fonction cognitive, le risque de dépression et l'inflammation systémique.</p><h2>Pourquoi la plupart des gens ne le connaissent pas</h2><p>L'index oméga-3 ne fait pas partie du panel lipidique standard. C'est une mesure spécialisée rarement prescrite, bien qu'elle soit cliniquement significative. Aeonix l'inclut de façon standard.</p>", "title_it": "L'indice omega-3: il marcatore più sottovalutato nella medicina preventiva", "desc_it": "L'indice omega-3 misura EPA+DHA nelle membrane dei globuli rossi. Predice la mortalità cardiovascolare, il declino cognitivo e il carico infiammatorio. Aeonix lo include. La maggior parte dei controlli no.", "section_it": "Salute nutrizionale", "body_it": "<p>Se dovessi scegliere un singolo marcatore poco utilizzato che offre contemporaneamente la finestra più chiara sulla tua salute cellulare, biologia infiammatoria e rischio cardiovascolare — l'indice omega-3 sarebbe un forte candidato. Misura la proporzione di EPA e DHA nelle membrane dei globuli rossi — riflettendo l'effettivo incorporamento nelle membrane cellulari piuttosto che il semplice consumo alimentare recente.</p><h2>Cosa predice l'indice omega-3</h2><p>Un indice inferiore al 4% è associato a un rischio significativamente aumentato di morte cardiaca improvvisa. Valori tra 4-8% sono intermedi. Sopra l'8% è l'obiettivo. Gli studi mostrano anche associazioni con la funzione cognitiva, il rischio di depressione e l'infiammazione sistemica.</p><h2>Perché la maggior parte delle persone non lo conosce</h2><p>L'indice omega-3 non fa parte del pannello lipidico standard. È una misurazione specializzata raramente ordinata, sebbene clinicamente significativa. Aeonix lo include di default.</p>" },
  { "slug": "reading-blood-test-results", "section": "Patient Education", "date": "2025-01-15", "read_time": "9 min read", "color": "#6A7A4A", "title": "How to Read Your Blood Test Results Like a Clinician", "desc": "Reference ranges, trends, ratios — blood test results contain far more information than most people extract. A guide to understanding your panel from Aeonix.", "body": "<p>You receive a laboratory report. A column of numbers, each with a reference range and a flag — H for high, L for low, or nothing at all. Most people look at the flags and stop there. Clinicians look at the patterns, the ratios, the trends over time. This guide explains what the numbers actually mean — and how Aeonix's physician-reviewed reports translate them into clinical intelligence you can act on.</p><p>At Aeonix, our comprehensive panels cover the markers that matter — tested in leading Swiss laboratories, reviewed by a qualified physician, and delivered within 48 hours. Because the information that protects your health should not depend on the accident of what your GP happens to order.</p>\n\n  <div class=\"article-cta\">\n    <h3>Aeonix — Own Your Health</h3>\n    <p>over 150 clinically validated biomarkers. Physician-reviewed results in 48 hours. Renowned Swiss lab. GDPR-compliant.</p>\n    <a href=\"/#pricing\" class=\"cta-btn\">Own Your Health — Book a Screening</a>\n  </div>", "title_de": "So lesen Sie Ihre Bluttest-Ergebnisse wie ein Kliniker", "desc_de": "Referenzbereiche, Trends, Verhältnisse – Bluttest-Ergebnisse enthalten weit mehr Informationen, als die meisten Menschen entnehmen. Ein Leitfaden zum Verständnis Ihres Panels von Aeonix.", "section_de": "Patientenaufklärung", "body_de": "<p>Sie erhalten einen Laborbericht. Eine Spalte mit Zahlen, jede mit einem Referenzbereich und einem Flag – H für hoch, N für niedrig oder gar nichts. Die meisten Menschen schauen auf die Flags und hören dort auf. Kliniker schauen auf die Muster, die Verhältnisse, die Trends über Zeit. Dieser Leitfaden erklärt, was die Zahlen wirklich bedeuten.</p><h2>Das Verständnis von Referenzbereichen</h2><p>Referenzbereiche sind statistische Konstrukte – sie umfassen typischerweise 95% der gesunden Bevölkerung. Das bedeutet, dass 5% der vollkommen gesunden Menschen außerhalb des «normalen» Bereichs liegen. Es bedeutet auch, dass ein Wert am oberen Ende des normalen Bereichs klinisch bedeutsam sein kann, auch wenn er nicht flagged wird.</p><h2>Verhältnisse lesen</h2><p>Das Verhältnis Gesamtcholesterin zu HDL ist aussagekräftiger als der Gesamtcholesterolwert allein. Das Verhältnis Neutrophile zu Lymphozyten ist ein Marker für systemischen Stress. Das Verhältnis Nüchterninsulin zu Nüchternglukose gibt Ihnen HOMA-IR. Kliniker denken in Verhältnissen.</p>", "title_fr": "Comment lire vos résultats d'analyses sanguines comme un clinicien", "desc_fr": "Plages de référence, tendances, ratios — les résultats d'analyses sanguines contiennent bien plus d'informations que la plupart des gens n'en extraient. Un guide pour comprendre votre panel par Aeonix.", "section_fr": "Éducation du patient", "body_fr": "<p>Vous recevez un rapport de laboratoire. Une colonne de chiffres, chacun avec une plage de référence et un indicateur — H pour élevé, B pour bas, ou rien du tout. La plupart des gens regardent les indicateurs et s'arrêtent là. Les cliniciens regardent les patterns, les ratios, les tendances dans le temps. Ce guide explique ce que les chiffres signifient réellement.</p><h2>Comprendre les plages de référence</h2><p>Les plages de référence sont des constructions statistiques — elles couvrent généralement 95% de la population saine. Cela signifie que 5% des personnes en parfaite santé se situent en dehors de la plage «normale». Cela signifie aussi qu'une valeur en haut de la plage normale peut être cliniquement significative même si elle n'est pas signalée.</p><h2>Lire les ratios</h2><p>Le ratio cholestérol total/HDL est plus informatif que le cholestérol total seul. Le ratio neutrophiles/lymphocytes est un marqueur de stress systémique. Le ratio insuline à jeun/glycémie à jeun vous donne le HOMA-IR. Les cliniciens pensent en ratios.</p>", "title_it": "Come leggere i risultati delle analisi del sangue come un clinico", "desc_it": "Intervalli di riferimento, tendenze, rapporti — i risultati delle analisi del sangue contengono molte più informazioni di quelle che la maggior parte delle persone estrae. Una guida per capire il tuo pannello da Aeonix.", "section_it": "Educazione del paziente", "body_it": "<p>Ricevi un referto di laboratorio. Una colonna di numeri, ognuno con un intervallo di riferimento e un flag — A per alto, B per basso, o niente. La maggior parte delle persone guarda i flag e si ferma lì. I clinici guardano i pattern, i rapporti, le tendenze nel tempo. Questa guida spiega cosa significano davvero i numeri.</p><h2>Capire gli intervalli di riferimento</h2><p>Gli intervalli di riferimento sono costrutti statistici — coprono tipicamente il 95% della popolazione sana. Ciò significa che il 5% delle persone perfettamente sane si trova al di fuori del range «normale». Significa anche che un valore nella parte alta del range normale può essere clinicamente significativo anche se non è segnalato.</p><h2>Leggere i rapporti</h2><p>Il rapporto colesterolo totale/HDL è più informativo del colesterolo totale da solo. Il rapporto neutrofili/linfociti è un marcatore di stress sistemico. Il rapporto insulina a digiuno/glicemia a digiuno ti dà il HOMA-IR. I clinici pensano in rapporti.</p>" },
  { "slug": "sleep-biology-blood-markers", "section": "Sleep & Recovery", "date": "2025-01-15", "read_time": "5 min read", "color": "#4A6A8C", "title": "Poor Sleep Has a Biology. Your Blood Test Reveals It.", "desc": "Chronic sleep insufficiency elevates cortisol, IL-6, insulin resistance, and cardiovascular risk. The biological cost of poor sleep is measurable. Aeonix measures it.", "body": "<p>Sleep is not a passive state. It is the period during which the brain clears metabolic waste, growth hormone is secreted, cortisol resets, and cellular repair occurs across every organ system. When sleep is insufficient — in duration, depth, or quality — the consequences are biochemical, measurable, and cumulative. Even a single night of poor sleep measurably elevates IL-6, cortisol, and insulin resistance by the following morning. Chronic sleep insufficiency, sustained over months or years, produces a biological profile that looks remarkably similar to accelerated ageing.</p><p>At Aeonix, our comprehensive panels cover the markers that matter — tested in leading Swiss laboratories, reviewed by a qualified physician, and delivered within 48 hours. Because the information that protects your health should not depend on the accident of what your GP happens to order.</p>\n\n  <div class=\"article-cta\">\n    <h3>Aeonix — Own Your Health</h3>\n    <p>over 150 clinically validated biomarkers. Physician-reviewed results in 48 hours. Renowned Swiss lab. GDPR-compliant.</p>\n    <a href=\"/#pricing\" class=\"cta-btn\">Own Your Health — Book a Screening</a>\n  </div>", "title_de": "Schlechter Schlaf hat eine Biologie. Ihr Bluttest zeigt sie.", "desc_de": "Chronischer Schlafmangel erhöht Cortisol, IL-6, Insulinresistenz und kardiovaskuläres Risiko. Die biologischen Kosten von schlechtem Schlaf sind messbar. Aeonix misst sie.", "section_de": "Schlaf & Erholung", "body_de": "<p>Schlaf ist kein passiver Zustand. Es ist die Periode, in der das Gehirn Stoffwechselabfälle beseitigt, Wachstumshormon sezerniert wird, Cortisol zurückgesetzt wird und zelluläre Reparatur in jedem Organsystem stattfindet. Wenn der Schlaf unzureichend ist – in Dauer, Tiefe oder Qualität – sind die Konsequenzen biochemisch messbar.</p><h2>Was schlechter Schlaf mit Biomarkern macht</h2><p>Chronischer Schlafmangel erhöht das Morgencortisol, erhöht IL-6 und hsCRP (systemische Entzündung), beeinträchtigt die Insulinsensitivität und erhöht HOMA-IR, unterdrückt Testosteron bei Männern und stört den LH/FSH-Zyklus bei Frauen, erhöht das Hungerhormon Ghrelin und senkt Leptin (was zu Gewichtszunahme beiträgt).</p><h2>Das Aeonix Schlaf- und Erholungs-Panel</h2><p>Wir messen Nüchtern-Cortisol, DHEA-S, hsCRP, IL-6, Nüchterninsulin und HOMA-IR sowie Testosteron bei Männern. Zusammen bilden diese Marker ein klares Bild der systemischen Belastung durch unzureichenden Schlaf – und geben Ihrem Arzt konkrete Ansatzpunkte für Interventionen.</p>", "title_fr": "Le mauvais sommeil a une biologie. Votre analyse sanguine la révèle.", "desc_fr": "L'insuffisance chronique de sommeil élève le cortisol, l'IL-6, la résistance à l'insuline et le risque cardiovasculaire. Le coût biologique d'un mauvais sommeil est mesurable. Aeonix le mesure.", "section_fr": "Sommeil et récupération", "body_fr": "<p>Le sommeil n'est pas un état passif. C'est la période pendant laquelle le cerveau élimine les déchets métaboliques, où l'hormone de croissance est sécrétée, où le cortisol se réinitialise et où la réparation cellulaire se produit dans chaque système organique. Lorsque le sommeil est insuffisant — en durée, profondeur ou qualité — les conséquences sont biochimiquement mesurables.</p><h2>Ce que le mauvais sommeil fait aux biomarqueurs</h2><p>L'insuffisance chronique de sommeil élève le cortisol matinal, augmente l'IL-6 et la hsCRP (inflammation systémique), altère la sensibilité à l'insuline et augmente le HOMA-IR, supprime la testostérone chez les hommes et perturbe le cycle LH/FSH chez les femmes, augmente la ghréline (hormone de la faim) et diminue la leptine.</p><h2>Le panel sommeil et récupération d'Aeonix</h2><p>Nous mesurons le cortisol à jeun, le DHEA-S, la hsCRP, l'IL-6, l'insuline à jeun et le HOMA-IR, ainsi que la testostérone chez les hommes. Ensemble, ces marqueurs donnent un tableau clair de la charge systémique d'un sommeil insuffisant.</p>", "title_it": "Il sonno scarso ha una biologia. La tua analisi del sangue la rivela.", "desc_it": "L'insufficienza cronica di sonno eleva cortisolo, IL-6, resistenza all'insulina e rischio cardiovascolare. Il costo biologico del sonno insufficiente è misurabile. Aeonix lo misura.", "section_it": "Sonno e recupero", "body_it": "<p>Il sonno non è uno stato passivo. È il periodo in cui il cervello elimina i rifiuti metabolici, viene secreto l'ormone della crescita, il cortisolo si resetta e la riparazione cellulare avviene in ogni sistema d'organo. Quando il sonno è insufficiente — in durata, profondità o qualità — le conseguenze sono biochimicamente misurabili.</p><h2>Cosa fa il sonno scarso ai biomarcatori</h2><p>L'insufficienza cronica di sonno eleva il cortisolo mattutino, aumenta IL-6 e hsCRP (infiammazione sistemica), compromette la sensibilità all'insulina e aumenta HOMA-IR, sopprime il testosterone negli uomini e disturba il ciclo LH/FSH nelle donne, aumenta la grelina (ormone della fame) e diminuisce la leptina.</p><h2>Il pannello sonno e recupero di Aeonix</h2><p>Misuriamo cortisolo a digiuno, DHEA-S, hsCRP, IL-6, insulina a digiuno e HOMA-IR, e testosterone negli uomini. Insieme, questi marcatori danno un quadro chiaro del carico sistemico del sonno insufficiente.</p>" },
  { "slug": "testosterone-decline-men-switzerland", "section": "Hormonal Health", "date": "2025-01-15", "read_time": "7 min read", "color": "#7B6FA0", "title": "Testosterone Decline Starts at 30: What Swiss Men Need to Know", "desc": "Male testosterone declines by approximately 1% per year from age 30. Most men attribute the effects to 'getting older'. A blood test tells the real story.", "body": "<p>Male testosterone levels peak in early adulthood and then decline at approximately 1% per year from the age of 30. By 50, many men have testosterone levels 20–30% below their peak. By 60, this can reach 40–50%. The clinical literature increasingly describes a condition called \"late-onset hypogonadism\" — but what concerns us here is not only frank hypogonadism. It is the vast grey zone of suboptimal testosterone that affects quality of life, performance, and long-term health without triggering a clinical threshold.</p>\n\n<h2>What declining testosterone actually does</h2>\n<ul>\n  <li>Reduces muscle mass and strength (even without changes in exercise or diet)</li>\n  <li>Increases visceral adiposity, which in turn increases aromatase activity and oestrogen conversion</li>\n  <li>Impairs sleep quality, particularly slow-wave (restorative) sleep</li>\n  <li>Reduces dopaminergic drive, motivation, and risk tolerance</li>\n  <li>Increases insulin resistance and cardiovascular risk</li>\n  <li>Reduces bone mineral density — a risk factor most men associate only with women</li>\n</ul>\n\n<h2>Total vs. free testosterone</h2>\n<p>Total testosterone includes both bound and unbound hormone. The metabolically active fraction is <em>free</em> testosterone — approximately 2–3% of total. SHBG (sex hormone-binding globulin) determines how much testosterone is \"available\" to tissues.</p>\n\n<p>A man can have a total testosterone in the normal range while having very low free testosterone because of elevated SHBG — a pattern common in men with high stress, elevated oestrogen, or metabolic syndrome. Testing total testosterone alone misses this entirely.</p>\n\n<h2>The Aeonix hormonal panel</h2>\n<p>From Vital Edge upwards, Aeonix includes total testosterone, free testosterone, SHBG, LH, and oestradiol — giving a complete picture of the hypothalamic-pituitary-gonadal axis. For Elite members, IGF-1 and cortisol are added, completing the picture of anabolic and catabolic balance that governs physical and cognitive performance.</p>\n\n  <div class=\"article-cta\">\n    <h3>Aeonix — Own Your Health</h3>\n    <p>over 150 clinically validated biomarkers. Physician-reviewed results in 48 hours. Renowned Swiss lab. GDPR-compliant.</p>\n    <a href=\"/#pricing\" class=\"cta-btn\">Own Your Health — Book a Screening</a>\n  </div>", "title_de": "Testosteronabfall beginnt mit 30: Was Schweizer Männer wissen müssen", "desc_de": "Der männliche Testosteronspiegel sinkt ab dem 30. Lebensjahr um etwa 1% pro Jahr. Die meisten Männer führen die Auswirkungen auf das «Älterwerden» zurück. Ein Bluttest erzählt die wahre Geschichte.", "section_de": "Hormongesundheit", "body_de": "<p>Der männliche Testosteronspiegel erreicht im frühen Erwachsenenalter seinen Höchststand und sinkt dann ab dem 30. Lebensjahr um etwa 1% pro Jahr. Mit 50 haben viele Männer Testosteronwerte, die 20–30% unter ihrem Höchstwert liegen. Mit 60 kann dies 40–50% erreichen.</p><h2>Warum es wichtig ist</h2><p>Testosteron ist kein reines «Sexhormon». Es reguliert Muskelmasse und -kraft, Knochendichte, Stimmung und kognitive Funktion, Insulinsensitivität, Energiespiegel und kardiovaskuläre Gesundheit. Suboptimale Werte – auch innerhalb des formalen «Normalbereichs» – können zu Müdigkeit, verringerter Libido, Stimmungsveränderungen, Gewichtszunahme und verringerter Leistungsfähigkeit beitragen.</p><h2>Was Aeonix misst</h2><p>Unser Hormonpanel für Männer umfasst Gesamttestosteron, freies Testosteron, SHBG (Sexualhormon-bindendes Globulin), LH, FSH, Östradiol und DHEA-S. Die Kombination liefert ein vollständiges Bild der hormonellen Gesundheit – nicht nur eine einzige Zahl.</p>", "title_fr": "La baisse de testostérone commence à 30 ans : ce que les hommes suisses doivent savoir", "desc_fr": "La testostérone masculine diminue d'environ 1% par an à partir de 30 ans. La plupart des hommes attribuent les effets au «vieillissement». Une analyse sanguine raconte la vraie histoire.", "section_fr": "Santé hormonale", "body_fr": "<p>Les niveaux de testostérone masculine atteignent leur pic au début de l'âge adulte, puis diminuent d'environ 1% par an à partir de 30 ans. À 50 ans, de nombreux hommes ont des niveaux de testostérone 20 à 30% inférieurs à leur pic. À 60 ans, cela peut atteindre 40 à 50%.</p><h2>Pourquoi c'est important</h2><p>La testostérone n'est pas qu'une «hormone sexuelle». Elle régule la masse et la force musculaires, la densité osseuse, l'humeur et la fonction cognitive, la sensibilité à l'insuline, les niveaux d'énergie et la santé cardiovasculaire. Des valeurs sous-optimales — même dans la plage «normale» formelle — peuvent contribuer à la fatigue, à une libido diminuée, aux changements d'humeur et à la prise de poids.</p><h2>Ce qu'Aeonix mesure</h2><p>Notre panel hormonal masculin comprend la testostérone totale, la testostérone libre, la SHBG, la LH, la FSH, l'œstradiol et le DHEA-S. La combinaison fournit un tableau complet de la santé hormonale.</p>", "title_it": "Il calo del testosterone inizia a 30 anni: cosa devono sapere gli uomini svizzeri", "desc_it": "Il testosterone maschile diminuisce di circa il 1% all'anno dai 30 anni in poi. La maggior parte degli uomini attribuisce gli effetti all'«invecchiamento». Un esame del sangue racconta la vera storia.", "section_it": "Salute ormonale", "body_it": "<p>I livelli di testosterone maschile raggiungono il picco nella prima età adulta e poi diminuiscono di circa l'1% all'anno dai 30 anni. A 50 anni, molti uomini hanno livelli di testosterone del 20-30% inferiori al loro picco. A 60 anni, questo può raggiungere il 40-50%.</p><h2>Perché è importante</h2><p>Il testosterone non è solo un «ormone sessuale». Regola massa e forza muscolare, densità ossea, umore e funzione cognitiva, sensibilità all'insulina, livelli di energia e salute cardiovascolare. Valori sub-ottimali — anche all'interno del formale range «normale» — possono contribuire ad affaticamento, libido ridotta, cambiamenti d'umore e aumento di peso.</p><h2>Cosa misura Aeonix</h2><p>Il nostro pannello ormonale maschile include testosterone totale, testosterone libero, SHBG, LH, FSH, estradiolo e DHEA-S. La combinazione fornisce un quadro completo della salute ormonale.</p>" },
  { "slug": "thyroid-health-tsh-not-enough", "section": "Hormonal Health", "date": "2025-01-15", "read_time": "7 min read", "color": "#7B6FA0", "title": "Thyroid Health: Why TSH Alone Is Not the Full Picture", "desc": "Testing only TSH misses subclinical thyroid dysfunction in millions of patients. Free T3, Free T4, and Anti-TPO together tell the complete story. Aeonix tests all three.", "body": "<p>The thyroid is the metabolic thermostat of the body. Its hormones regulate every cell's energy use, heat production, protein synthesis, and the speed of virtually every biochemical reaction. When it functions suboptimally — even subclinically — the effects are systemic and often dismissed as lifestyle problems: fatigue, weight gain, cold intolerance, hair thinning, brain fog, depression, and constipation.</p>\n\n<p>The standard approach is to test TSH. If it falls within the reference range (typically 0.4–4.0 mIU/L), the thyroid is declared \"fine.\" The conversation often ends there.</p>\n\n<h2>The problem with TSH alone</h2>\n<p>TSH (Thyroid Stimulating Hormone) is produced by the pituitary gland. It signals the thyroid to produce thyroid hormones — but it is not itself a thyroid hormone. Testing only TSH is like measuring how loudly a factory manager is shouting instructions, without checking whether the factory floor is actually producing anything.</p>\n\n<p>Free T4 (thyroxine) is the main hormone produced by the thyroid. Free T3 (triiodothyronine) is the active form that cells actually use. The conversion from T4 to T3 happens peripherally, primarily in the liver and gut, and can be impaired by inflammation, stress, nutritional deficiencies, and gut dysbiosis — all while TSH remains perfectly \"normal.\"</p>\n\n<h2>The autoimmune dimension: Anti-TPO</h2>\n<p>Hashimoto's thyroiditis is the most common autoimmune disease in Switzerland, affecting roughly 1 in 20 adults, with a female-to-male ratio of approximately 7:1. It is characterised by elevated anti-thyroid peroxidase antibodies (Anti-TPO) — which can be detectable for years or even decades before TSH begins to rise.</p>\n\n<p>If you are experiencing thyroid-related symptoms but have a normal TSH, Anti-TPO testing is the critical next step. Standard check-ups do not include it.</p>\n\n<h2>The reference range problem</h2>\n<p>TSH \"normal\" ranges are population-derived, not individually optimised. Emerging endocrinology research suggests that a TSH above 2.5 mIU/L — well within the standard range — is associated with impaired cognitive function, higher cardiovascular risk, and worsened metabolic parameters in symptomatic individuals. Optimal is not the same as within range.</p>\n\n  <div class=\"article-cta\">\n    <h3>Aeonix — Own Your Health</h3>\n    <p>over 150 clinically validated biomarkers. Physician-reviewed results in 48 hours. Renowned Swiss lab. GDPR-compliant.</p>\n    <a href=\"/#pricing\" class=\"cta-btn\">Own Your Health — Book a Screening</a>\n  </div>", "title_de": "Schilddrüsengesundheit: Warum TSH allein nicht das vollständige Bild ist", "desc_de": "Nur TSH zu testen, verpasst bei Millionen von Patienten eine subklinische Schilddrüsenfunktionsstörung. Freies T3, freies T4 und Anti-TPO zusammen erzählen die vollständige Geschichte. Aeonix testet alle drei.", "section_de": "Hormongesundheit", "body_de": "<p>Die Schilddrüse ist der Stoffwechsel-Thermostat des Körpers. Ihre Hormone regulieren den Energieverbrauch jeder Zelle, die Wärmeproduktion, die Proteinsynthese und die Geschwindigkeit nahezu jeder biochemischen Reaktion. Wenn sie suboptimal funktioniert – auch subklinisch – sind die Auswirkungen systemisch und werden oft als Lebensumstand abgetan.</p><h2>Das TSH-Problem</h2><p>TSH (Thyreoidea-stimulierendes Hormon) ist der Standardtest für die Schilddrüsenfunktion. Es ist nützlich. Aber es ist nicht vollständig. TSH misst das Signal des Gehirns an die Schilddrüse – nicht die Reaktion der Schilddrüse. Ein Patient kann ein normales TSH haben und dennoch niedrige freie T3/T4-Werte aufweisen (wenn die Schilddrüse nicht effizient umwandelt) oder erhöhte Schilddrüsen-Antikörper (die auf einen frühen Autoimmunprozess hinweisen).</p><h2>Was Aeonix testet</h2><p>Unser vollständiges Schilddrüsenpanel umfasst TSH, freies T4 (FT4), freies T3 (FT3), Anti-TPO und Anti-Thyreoglobulin. Zusammen bieten diese Marker eine vollständige Bewertung: Schilddrüsenstimulation, Schilddrüsenproduktion, periphere Umwandlung und Autoimmunstatus.</p>", "title_fr": "Santé thyroïdienne : pourquoi la TSH seule n'est pas suffisante", "desc_fr": "Ne tester que la TSH manque une dysfonction thyroïdienne subclinique chez des millions de patients. La T3 libre, la T4 libre et les anti-TPO ensemble racontent l'histoire complète. Aeonix teste les trois.", "section_fr": "Santé hormonale", "body_fr": "<p>La thyroïde est le thermostat métabolique du corps. Ses hormones régulent la consommation d'énergie de chaque cellule, la production de chaleur, la synthèse des protéines et la vitesse de pratiquement chaque réaction biochimique. Lorsqu'elle fonctionne de manière sous-optimale — même subcliniquement — les effets sont systémiques et souvent banalisés.</p><h2>Le problème de la TSH</h2><p>La TSH (hormone thyréostimulante) est le test standard de la fonction thyroïdienne. Elle est utile. Mais elle n'est pas complète. La TSH mesure le signal du cerveau à la thyroïde — pas la réponse de la thyroïde. Un patient peut avoir une TSH normale et présenter néanmoins des taux faibles de T3/T4 libres ou des anticorps thyroïdiens élevés (indicatifs d'un processus auto-immun précoce).</p><h2>Ce qu'Aeonix teste</h2><p>Notre panel thyroïdien complet comprend la TSH, la T4 libre, la T3 libre, les anti-TPO et les anti-thyroglobuline. Ensemble, ces marqueurs offrent une évaluation complète : stimulation thyroïdienne, production thyroïdienne, conversion périphérique et statut auto-immun.</p>", "title_it": "Salute tiroidea: perché il TSH da solo non è il quadro completo", "desc_it": "Testare solo il TSH manca la disfunzione tiroidea subclinica in milioni di pazienti. FT3, FT4 e Anti-TPO insieme raccontano la storia completa. Aeonix li testa tutti e tre.", "section_it": "Salute ormonale", "body_it": "<p>La tiroide è il termostato metabolico del corpo. I suoi ormoni regolano il consumo energetico di ogni cellula, la produzione di calore, la sintesi proteica e la velocità di quasi ogni reazione biochimica. Quando funziona in modo sub-ottimale — anche subclinicamente — gli effetti sono sistemici e spesso liquidati come condizioni di vita.</p><h2>Il problema del TSH</h2><p>Il TSH (ormone tireostimolante) è il test standard per la funzione tiroidea. È utile. Ma non è completo. Il TSH misura il segnale del cervello alla tiroide — non la risposta della tiroide. Un paziente può avere un TSH normale e avere comunque bassi livelli di T3/T4 liberi o anticorpi tiroidei elevati (indicativi di un processo autoimmune precoce).</p><h2>Cosa testa Aeonix</h2><p>Il nostro pannello tiroideo completo include TSH, FT4, FT3, anti-TPO e anti-tireoglobulina. Insieme, questi marcatori offrono una valutazione completa: stimolazione tiroidea, produzione tiroidea, conversione periferica e stato autoimmune.</p>" },
  { "slug": "vitamin-d-deficiency-switzerland", "section": "Nutritional Health", "date": "2025-01-15", "read_time": "5 min read", "color": "#5E8C4A", "title": "The Vitamin D Epidemic Nobody Is Talking About in Switzerland", "desc": "Over 60% of Swiss adults are vitamin D deficient in winter. Most don't know. Learn what the science says — and why your GP isn't testing it routinely.", "body": "<p>Switzerland is one of the most health-conscious countries in Europe. It is also, due to its geography and climate, a country with pervasive vitamin D deficiency. Studies conducted by Swiss university hospitals show that 60–75% of adults have insufficient 25-OH vitamin D levels by February, with significant proportions falling into frank deficiency (&lt;30 nmol/L).</p>\n\n<p>Vitamin D is not simply \"the sunshine vitamin\" in the colloquial sense. It is a hormone — calcitriol — that regulates over 200 genes, modulates immune function, governs calcium homeostasis, and plays a direct role in insulin sensitivity, testosterone production, mood regulation, and the prevention of autoimmune disease.</p>\n\n<h2>What deficiency actually looks like</h2>\n<p>The symptoms of vitamin D insufficiency are almost universally attributed to other causes:</p>\n<ul>\n  <li>Persistent fatigue (blamed on overwork or poor sleep)</li>\n  <li>Low mood and seasonal affective disorder</li>\n  <li>Frequent infections and slow recovery</li>\n  <li>Bone pain and muscle weakness</li>\n  <li>Poor concentration and brain fog</li>\n</ul>\n<p>None of these are specific. All of them are routinely investigated for other causes — often for years — before vitamin D is checked.</p>\n\n<h2>The immune system connection</h2>\n<p>Perhaps the most consequential aspect of vitamin D deficiency is its effect on immune regulation. Vitamin D receptors (VDRs) are present on virtually every immune cell. Deficiency impairs the innate immune response, reduces the production of antimicrobial peptides, and — critically — shifts the immune system toward a pro-inflammatory state. This contributes to elevated hsCRP and IL-6, the same inflammatory markers associated with accelerated cardiovascular disease and neurodegeneration.</p>\n\n<h2>Why GPs don't routinely test it</h2>\n<p>Switzerland's KVG does not reimburse 25-OH vitamin D testing for asymptomatic individuals. The test costs CHF 35–55 privately. This is a rational cost-allocation decision at a population level and a clinically questionable one at an individual level — particularly for anyone over 45, with dark skin, limited sun exposure, or a history of autoimmune conditions.</p>\n\n<h2>Optimal vs. sufficient</h2>\n<p>The clinical threshold for \"deficiency\" is typically set at &lt;50 nmol/L. However, research in immunology and oncology increasingly identifies the optimal range as 100–150 nmol/L. The gap between \"not deficient\" and \"optimal\" is substantial — and it matters, particularly for cancer prevention, immune resilience, and bone density preservation over 50.</p>\n\n  <div class=\"article-cta\">\n    <h3>Aeonix — Own Your Health</h3>\n    <p>over 150 clinically validated biomarkers. Physician-reviewed results in 48 hours. Renowned Swiss lab. GDPR-compliant.</p>\n    <a href=\"/#pricing\" class=\"cta-btn\">Own Your Health — Book a Screening</a>\n  </div>", "title_de": "Die Vitamin-D-Epidemie, über die in der Schweiz niemand spricht", "desc_de": "Über 60% der Schweizer Erwachsenen sind im Winter Vitamin-D-defizient. Die meisten wissen es nicht. Erfahren Sie, was die Wissenschaft sagt – und warum Ihr Hausarzt es nicht routinemäßig testet.", "section_de": "Ernährungsgesundheit", "body_de": "<p>Die Schweiz ist eines der gesundheitsbewusstesten Länder Europas. Es ist auch – aufgrund seiner Geografie und seines Klimas – ein Land mit weit verbreitetem Vitamin-D-Mangel. Studien an Schweizer Universitätsspitälern zeigen, dass 60–75% der Erwachsenen bis Februar unzureichende 25-OH-Vitamin-D-Spiegel aufweisen.</p><h2>Warum Vitamin D wichtig ist – weit über Knochen hinaus</h2><p>Vitamin D ist kein Vitamin im traditionellen Sinne – es ist ein Steroidhormon, das über 2.000 Gene reguliert. Vitamin-D-Rezeptoren finden sich in nahezu jedem Gewebe des Körpers. Vitamin-D-Mangel ist assoziiert mit erhöhtem kardiovaskulärem Risiko, eingeschränkter Immunfunktion, erhöhtem Krebsrisiko (insbesondere Brust, Dickdarm und Prostata), Stimmungsveränderungen und Depression sowie beschleunigtem Knochenabbau.</p><h2>Warum routinemäßiges Testing selten ist</h2><p>Das Schweizer KVG erstattet Vitamin-D-Testing nur für Patienten mit bekannter Osteoporose, bestimmten Malabsorptionssyndromsproblemen oder bestimmten Medikamenten. Für alle anderen – also die Mehrheit der Bevölkerung – ist es kein routinemäßig erstatteter Test. Aeonix schließt ihn in jedes Panel ein.</p>", "title_fr": "L'épidémie de carence en vitamine D dont personne ne parle en Suisse", "desc_fr": "Plus de 60% des adultes suisses sont carencés en vitamine D en hiver. La plupart ne le savent pas. Découvrez ce que dit la science — et pourquoi votre médecin ne la teste pas en routine.", "section_fr": "Santé nutritionnelle", "body_fr": "<p>La Suisse est l'un des pays les plus soucieux de sa santé en Europe. C'est aussi, en raison de sa géographie et de son climat, un pays avec une carence en vitamine D très répandue. Des études menées par les hôpitaux universitaires suisses montrent que 60 à 75% des adultes ont des niveaux insuffisants de 25-OH vitamine D en février.</p><h2>Pourquoi la vitamine D est importante — bien au-delà des os</h2><p>La vitamine D n'est pas une vitamine au sens traditionnel — c'est une hormone stéroïdienne qui régule plus de 2 000 gènes. Des récepteurs de la vitamine D se trouvent dans presque tous les tissus du corps. La carence en vitamine D est associée à un risque cardiovasculaire accru, une fonction immunitaire altérée, un risque accru de certains cancers, des changements d'humeur et une dépression, et une perte osseuse accélérée.</p><h2>Pourquoi le test systématique est rare</h2><p>La LAMal suisse ne rembourse le test de vitamine D que pour les patients atteints d'ostéoporose connue, de certains syndromes de malabsorption ou prenant certains médicaments. Pour tous les autres — c'est-à-dire la majorité de la population — ce n'est pas un test remboursé de routine. Aeonix l'inclut dans chaque panel.</p>", "title_it": "L'epidemia di carenza di vitamina D di cui nessuno parla in Svizzera", "desc_it": "Oltre il 60% degli adulti svizzeri è carente di vitamina D in inverno. La maggior parte non lo sa. Scopri cosa dice la scienza — e perché il tuo medico non la testa di routine.", "section_it": "Salute nutrizionale", "body_it": "<p>La Svizzera è uno dei paesi più attenti alla salute in Europa. È anche, a causa della sua geografia e del suo clima, un paese con una diffusa carenza di vitamina D. Studi condotti dagli ospedali universitari svizzeri mostrano che il 60-75% degli adulti ha livelli insufficienti di 25-OH vitamina D a febbraio.</p><h2>Perché la vitamina D è importante — ben oltre le ossa</h2><p>La vitamina D non è una vitamina nel senso tradizionale — è un ormone steroideo che regola oltre 2.000 geni. I recettori della vitamina D si trovano in quasi tutti i tessuti del corpo. La carenza di vitamina D è associata a maggior rischio cardiovascolare, funzione immunitaria compromessa, maggior rischio di alcuni tumori, cambiamenti d'umore e depressione, e perdita ossea accelerata.</p><h2>Perché i test di routine sono rari</h2><p>La LAMal svizzera rimborsa il test della vitamina D solo per i pazienti con osteoporosi nota, alcune sindromi da malassorbimento o determinati farmaci. Per tutti gli altri — cioè la maggioranza della popolazione — non è un test rimborsato di routine. Aeonix lo include in ogni pannello.</p>" },
  { "slug": "womens-health-comprehensive-screening", "section": "Women's Health", "date": "2025-01-15", "read_time": "7 min read", "color": "#C06888", "title": "The Hormone Tests Swiss Women Are Asking For — And Not Getting", "desc": "From perimenopause to PCOS to thyroid autoimmunity, women's hormonal health is complex and underscreened. Aeonix's comprehensive panel changes that.", "body": "<p>The data is unambiguous: women are significantly more likely than men to have their symptoms dismissed, their investigations delayed, and their diagnoses missed. This is particularly true in the domain of hormonal health, where symptoms that are specific and measurable — fatigue, mood dysregulation, weight changes, hair loss, irregular cycles, sleep disruption — are routinely attributed to \"stress,\" \"anxiety,\" or simply being female.</p>\n\n<h2>The perimenopause knowledge gap</h2>\n<p>Perimenopause can begin as early as the mid-30s and lasts, on average, 4–8 years before menopause. During this period, oestradiol and progesterone levels fluctuate dramatically and often unpredictably. FSH (follicle-stimulating hormone) begins to rise. The ratio of oestrogen to progesterone shifts, often producing oestrogen dominance symptoms even as overall levels decline.</p>\n\n<p>A single hormonal blood test cannot capture the full picture — hormone levels vary across the cycle. But a thoughtfully timed panel measuring oestradiol, progesterone, FSH, LH, testosterone (free and total), and SHBG provides an invaluable clinical baseline — one that most Swiss women have never received.</p>\n\n<h2>Thyroid autoimmunity: a women's health issue</h2>\n<p>Hashimoto's thyroiditis — the leading cause of hypothyroidism in Switzerland — affects women at approximately 7 times the rate of men. Anti-TPO antibodies can be elevated for 5–10 years before TSH rises. Women with unexplained fatigue, hair loss, weight gain, or depression who have been told their thyroid is \"normal\" based on TSH alone may have early autoimmune thyroid disease that would be revealed by Anti-TPO testing.</p>\n\n<h2>PCOS and the metabolic connection</h2>\n<p>Polycystic ovary syndrome affects approximately 8–12% of Swiss women of reproductive age, making it one of the most common endocrine disorders. Its defining features — elevated androgens, insulin resistance, and irregular cycles — are directly measurable. Free testosterone, DHEA-S, fasting insulin, HOMA-IR, and LH/FSH ratio together provide a comprehensive PCOS assessment that goes far beyond an ultrasound.</p>\n\n  <div class=\"article-cta\">\n    <h3>Aeonix — Own Your Health</h3>\n    <p>over 150 clinically validated biomarkers. Physician-reviewed results in 48 hours. Renowned Swiss lab. GDPR-compliant.</p>\n    <a href=\"/#pricing\" class=\"cta-btn\">Own Your Health — Book a Screening</a>\n  </div>", "title_de": "Die Hormontests, die Schweizer Frauen fordern – und nicht bekommen", "desc_de": "Von der Perimenopause bis zum PCOS bis zur Schilddrüsen-Autoimmunität ist die hormonelle Gesundheit von Frauen komplex und unterversorgt. Aeonix' umfassendes Panel ändert das.", "section_de": "Frauengesundheit", "body_de": "<p>Die Daten sind eindeutig: Frauen sind signifikant häufiger als Männer davon betroffen, dass ihre Symptome abgetan, ihre Untersuchungen verzögert und ihre Diagnosen verpasst werden. Dies gilt besonders im Bereich der Hormongesundheit, wo Symptome, die spezifisch und messbar sind – Müdigkeit, Stimmungsschwankungen, unregelmäßige Zyklen, Gewichtszunahme, Schlafstörungen – routinemäßig dem «Stress» zugeordnet werden.</p><h2>Das Hormonprofil, das Frauen brauchen</h2><p>Ein vollständiges weibliches Hormonpanel sollte umfassen: Östradiol, Progesteron, LH, FSH (Schlüssel zum Verständnis der Eierstockfunktion und des Menopauses-Stadiums), freies Testosteron und DHEA-S (häufig niedrig bei PCOS, Nebennieren-Erschöpfung und chronischem Stress), vollständiges Schilddrüsenpanel mit Anti-TPO (Frauen entwickeln siebenmal häufiger Schilddrüsen-Autoimmunität als Männer), Nüchterninsulin und HOMA-IR (für PCOS und metabolisches Risiko) sowie Prolaktin.</p><h2>Perimenopause: das unterdiagnostizierte Jahrzehnt</h2><p>Die Perimenopause kann bis zu 10 Jahre vor der letzten Menstruation beginnen. Während dieser Zeit können Hormonspiegel erheblich schwanken – und die Symptome werden oft falsch zugeordnet oder ignoriert. Ein vollständiges Hormonpanel bei Frauen über 38 liefert entscheidende Informationen über das reproduktive Stadium, die KHK-Risikoentwicklung und den Interventionsbedarf.</p>", "title_fr": "Les tests hormonaux que les femmes suisses réclament — et n'obtiennent pas", "desc_fr": "De la périménopause au SOPK en passant par l'auto-immunité thyroïdienne, la santé hormonale des femmes est complexe et sous-dépistée. Le panel complet d'Aeonix change cela.", "section_fr": "Santé féminine", "body_fr": "<p>Les données sont sans ambiguïté : les femmes sont significativement plus susceptibles que les hommes de voir leurs symptômes minimisés, leurs investigations retardées et leurs diagnostics manqués. Cela est particulièrement vrai dans le domaine de la santé hormonale, où des symptômes spécifiques et mesurables — fatigue, sautes d'humeur, cycles irréguliers, prise de poids, troubles du sommeil — sont systématiquement attribués au «stress».</p><h2>Le profil hormonal dont les femmes ont besoin</h2><p>Un panel hormonal féminin complet devrait inclure : œstradiol, progestérone, LH, FSH (clés pour comprendre la fonction ovarienne et le stade ménopausique), testostérone libre et DHEA-S, panel thyroïdien complet avec anti-TPO (les femmes développent l'auto-immunité thyroïdienne sept fois plus souvent que les hommes), insuline à jeun et HOMA-IR, et prolactine.</p><h2>La périménopause : la décennie sous-diagnostiquée</h2><p>La périménopause peut commencer jusqu'à 10 ans avant les dernières règles. Durant cette période, les niveaux hormonaux peuvent fluctuer considérablement — et les symptômes sont souvent mal attribués ou ignorés. Un panel hormonal complet chez les femmes de plus de 38 ans fournit des informations cruciales sur le stade reproductif et le besoin d'intervention.</p>", "title_it": "I test ormonali che le donne svizzere chiedono — e non ottengono", "desc_it": "Dalla perimenopausa alla PCOS all'autoimmunità tiroidea, la salute ormonale femminile è complessa e sottoposta a screening insufficiente. Il pannello completo di Aeonix cambia questo.", "section_it": "Salute femminile", "body_it": "<p>I dati sono inequivocabili: le donne sono significativamente più inclini degli uomini a vedere i loro sintomi minimizzati, le loro indagini ritardate e le loro diagnosi mancate. Questo è particolarmente vero nell'ambito della salute ormonale, dove sintomi specifici e misurabili — stanchezza, sbalzi d'umore, cicli irregolari, aumento di peso, disturbi del sonno — vengono sistematicamente attribuiti allo «stress».</p><h2>Il profilo ormonale di cui le donne hanno bisogno</h2><p>Un pannello ormonale femminile completo dovrebbe includere: estradiolo, progesterone, LH, FSH (chiave per comprendere la funzione ovarica e lo stadio menopausale), testosterone libero e DHEA-S, pannello tiroideo completo con anti-TPO (le donne sviluppano l'autoimmunità tiroidea sette volte più spesso degli uomini), insulina a digiuno e HOMA-IR, e prolattina.</p><h2>La perimenopausa: il decennio sotto-diagnosticato</h2><p>La perimenopausa può iniziare fino a 10 anni prima dell'ultima mestruazione. Durante questo periodo, i livelli ormonali possono fluttuare considerevolmente — e i sintomi vengono spesso attribuiti erroneamente o ignorati. Un pannello ormonale completo nelle donne over 38 fornisce informazioni cruciali sullo stadio riproduttivo e sulla necessità di intervento.</p>" }
  ,
  { "slug": "apob-test-zurich-switzerland", "section": "Cardiovascular Health", "date": "2026-04-06", "read_time": "6 min read", "color": "#C0645A", "title": "ApoB Test in Zürich and Switzerland: Where to Get It, What It Costs", "title_de": "ApoB-Test in Zürich und der Schweiz: Wo, Was und Warum", "title_fr": "Test ApoB à Zurich et en Suisse : où le faire, combien ça coûte", "title_it": "Test ApoB a Zurigo e in Svizzera: dove farlo e quanto costa", "desc": "ApoB is now the gold-standard cardiovascular risk marker — yet most Swiss GPs still don't order it. Here's where to get it and what it costs.", "desc_de": "ApoB ist heute der Goldstandard für kardiovaskuläres Risiko. Alles über den ApoB-Test in der Schweiz.", "desc_fr": "L'ApoB est le marqueur de référence du risque cardiovasculaire. Tout sur le test ApoB en Suisse.", "desc_it": "L'ApoB è il gold standard per il rischio cardiovascolare. Tutto sul test ApoB in Svizzera.", "section_de": "Cardiovascular Health", "section_fr": "Cardiovascular Health", "section_it": "Cardiovascular Health", "body": "<p>Apolipoprotein B (ApoB) is the most accurate predictor of cardiovascular risk in a routine blood test. Aeonix includes ApoB as a standard biomarker in every screening plan. <a href=\"/articles/apob-test-zurich-switzerland.html\">Read the full guide →</a></p>", "body_de": "<p>Apolipoprotein B (ApoB) is the most accurate predictor of cardiovascular risk in a routine blood test. Aeonix includes ApoB as a standard biomarker in every screening plan. <a href=\"/articles/apob-test-zurich-switzerland.html\">Read the full guide →</a></p>", "body_fr": "<p>Apolipoprotein B (ApoB) is the most accurate predictor of cardiovascular risk in a routine blood test. Aeonix includes ApoB as a standard biomarker in every screening plan. <a href=\"/articles/apob-test-zurich-switzerland.html\">Read the full guide →</a></p>", "body_it": "<p>Apolipoprotein B (ApoB) is the most accurate predictor of cardiovascular risk in a routine blood test. Aeonix includes ApoB as a standard biomarker in every screening plan. <a href=\"/articles/apob-test-zurich-switzerland.html\">Read the full guide →</a></p>" },
  { "slug": "vorsorgeuntersuchung-blut-schweiz", "section": "Swiss Healthcare", "date": "2026-04-06", "read_time": "6 min read", "color": "#C03030", "title": "Vorsorgeuntersuchung Blut in der Schweiz: Was ein umfassender Bluttest wirklich zeigt", "title_de": "Vorsorgeuntersuchung Blut in der Schweiz: Was ein umfassender Bluttest wirklich zeigt", "title_fr": "Bilan sanguin préventif en Suisse : ce qu'une analyse complète révèle vraiment", "title_it": "Analisi del sangue preventive in Svizzera: cosa rivela davvero un esame completo", "desc": "Die meisten Vorsorgeuntersuchungen testen nur 12–20 Blutwerte. Ein umfassendes Blutbild zeigt deutlich mehr.", "desc_de": "Die meisten Vorsorgeuntersuchungen testen nur 12–20 Blutwerte. Ein umfassendes Blutbild zeigt deutlich mehr.", "desc_fr": "La plupart des bilans de santé ne testent que 12 à 20 valeurs sanguines. Un bilan complet révèle bien plus.", "desc_it": "La maggior parte degli esami testano solo 12-20 valori ematici. Un esame completo rivela molto di più.", "section_de": "Swiss Healthcare", "section_fr": "Swiss Healthcare", "section_it": "Swiss Healthcare", "body": "<p>Ein Standard-Hausarztcheck in der Schweiz umfasst 12–20 Marker. Aeonix testet bis zu 100+, inkl. ApoB, Lp(a), HOMA-IR und mehr. <a href=\"/articles/vorsorgeuntersuchung-blut-schweiz.html\">Ganzen Artikel lesen →</a></p>", "body_de": "<p>Ein Standard-Hausarztcheck in der Schweiz umfasst 12–20 Marker. Aeonix testet bis zu 100+, inkl. ApoB, Lp(a), HOMA-IR und mehr. <a href=\"/articles/vorsorgeuntersuchung-blut-schweiz.html\">Ganzen Artikel lesen →</a></p>", "body_fr": "<p>Ein Standard-Hausarztcheck in der Schweiz umfasst 12–20 Marker. Aeonix testet bis zu 100+, inkl. ApoB, Lp(a), HOMA-IR und mehr. <a href=\"/articles/vorsorgeuntersuchung-blut-schweiz.html\">Ganzen Artikel lesen →</a></p>", "body_it": "<p>Ein Standard-Hausarztcheck in der Schweiz umfasst 12–20 Marker. Aeonix testet bis zu 100+, inkl. ApoB, Lp(a), HOMA-IR und mehr. <a href=\"/articles/vorsorgeuntersuchung-blut-schweiz.html\">Ganzen Artikel lesen →</a></p>" },
  { "slug": "homa-ir-test-switzerland", "section": "Metabolic Health", "date": "2026-04-06", "read_time": "6 min read", "color": "#B8864E", "title": "HOMA-IR: The Insulin Resistance Test Swiss GPs Don't Order", "title_de": "HOMA-IR: Der Insulinresistenztest, den Schweizer Hausärzte nicht anordnen", "title_fr": "HOMA-IR : le test de résistance à l'insuline que votre médecin suisse ne prescrit pas", "title_it": "HOMA-IR: il test di resistenza all'insulina che i medici svizzeri non prescrivono", "desc": "HOMA-IR detects insulin resistance years before glucose or HbA1c become abnormal. Here's what it is and where to get it in Switzerland.", "desc_de": "HOMA-IR erkennt Insulinresistenz Jahre bevor Glukose oder HbA1c auffällig werden.", "desc_fr": "Le HOMA-IR détecte la résistance à l'insuline des années avant que la glycémie devienne anormale.", "desc_it": "HOMA-IR rileva la resistenza all'insulina anni prima che glicemia o HbA1c diventino anomali.", "section_de": "Metabolic Health", "section_fr": "Metabolic Health", "section_it": "Metabolic Health", "body": "<p>HOMA-IR is calculated from fasting glucose and fasting insulin. It detects insulin resistance up to a decade before diabetes diagnosis. Included in every Aeonix plan. <a href=\"/articles/homa-ir-test-switzerland.html\">Read more →</a></p>", "body_de": "<p>HOMA-IR is calculated from fasting glucose and fasting insulin. It detects insulin resistance up to a decade before diabetes diagnosis. Included in every Aeonix plan. <a href=\"/articles/homa-ir-test-switzerland.html\">Read more →</a></p>", "body_fr": "<p>HOMA-IR is calculated from fasting glucose and fasting insulin. It detects insulin resistance up to a decade before diabetes diagnosis. Included in every Aeonix plan. <a href=\"/articles/homa-ir-test-switzerland.html\">Read more →</a></p>", "body_it": "<p>HOMA-IR is calculated from fasting glucose and fasting insulin. It detects insulin resistance up to a decade before diabetes diagnosis. Included in every Aeonix plan. <a href=\"/articles/homa-ir-test-switzerland.html\">Read more →</a></p>" },
  { "slug": "lp-a-test-cost-switzerland", "section": "Cardiovascular Health", "date": "2026-04-06", "read_time": "6 min read", "color": "#C0645A", "title": "Lp(a) Test in Switzerland: Cost, Coverage and Why You Should Know Your Level", "title_de": "Lp(a)-Test in der Schweiz: Kosten, Kassenleistung und warum Sie Ihren Wert kennen sollten", "title_fr": "Test Lp(a) en Suisse : coût, remboursement et pourquoi connaître son taux", "title_it": "Test Lp(a) in Svizzera: costo, rimborso e perché conoscere il proprio livello", "desc": "Lp(a) affects 1 in 5 people, doubles heart attack risk, and cannot be lowered by statins. Here's where to test it and what it costs in Switzerland.", "desc_de": "Lp(a) betrifft 1 von 5 Menschen, verdoppelt das Herzinfarktrisiko. Kosten und Möglichkeiten in der Schweiz.", "desc_fr": "Le Lp(a) touche 1 personne sur 5, double le risque d'infarctus. Coût et options en Suisse.", "desc_it": "Lp(a) colpisce 1 persona su 5, raddoppia il rischio di infarto. Costo e opzioni in Svizzera.", "section_de": "Cardiovascular Health", "section_fr": "Cardiovascular Health", "section_it": "Cardiovascular Health", "body": "<p>Elevated Lp(a) doubles heart attack risk and is entirely genetic — unaffected by statins or diet. A single lifetime measurement is all you need. Included in Aeonix Vital Edge and above. <a href=\"/articles/lp-a-test-cost-switzerland.html\">Read more →</a></p>", "body_de": "<p>Elevated Lp(a) doubles heart attack risk and is entirely genetic — unaffected by statins or diet. A single lifetime measurement is all you need. Included in Aeonix Vital Edge and above. <a href=\"/articles/lp-a-test-cost-switzerland.html\">Read more →</a></p>", "body_fr": "<p>Elevated Lp(a) doubles heart attack risk and is entirely genetic — unaffected by statins or diet. A single lifetime measurement is all you need. Included in Aeonix Vital Edge and above. <a href=\"/articles/lp-a-test-cost-switzerland.html\">Read more →</a></p>", "body_it": "<p>Elevated Lp(a) doubles heart attack risk and is entirely genetic — unaffected by statins or diet. A single lifetime measurement is all you need. Included in Aeonix Vital Edge and above. <a href=\"/articles/lp-a-test-cost-switzerland.html\">Read more →</a></p>" },
  { "slug": "preventive-health-check-cost-switzerland", "section": "Preventive Medicine", "date": "2026-04-06", "read_time": "6 min read", "color": "#4A8C6F", "title": "Preventive Health Check Cost in Switzerland: What You Get at Every Price Point", "title_de": "Gesundheitscheck Kosten Schweiz: Was Sie bei jedem Preispunkt bekommen", "title_fr": "Coût d'un bilan de santé en Suisse : ce que vous obtenez à chaque niveau de prix", "title_it": "Costo del check-up di salute in Svizzera: cosa si ottiene a ogni fascia di prezzo", "desc": "From CHF 200 GP panels to CHF 4,000 MRI programmes — a clear guide to preventive health screening costs in Switzerland and how Aeonix compares.", "desc_de": "Von CHF 200 Blutbild bis CHF 4.000 MRT-Programm — Vergleich der Vorsorgeuntersuchungskosten in der Schweiz.", "desc_fr": "De CHF 200 pour un bilan sanguin à CHF 4 000 pour un programme IRM — guide des coûts de dépistage en Suisse.", "desc_it": "Da CHF 200 per esame del sangue a CHF 4.000 per programma RMN — guida ai costi dello screening in Svizzera.", "section_de": "Preventive Medicine", "section_fr": "Preventive Medicine", "section_it": "Preventive Medicine", "body": "<p>Comprehensive guide comparing GP check-ups, private blood panels (Aeonix CHF 595–1,295/yr), and MRI programmes (CHF 1,500–4,000). Understand what you get at each price point. <a href=\"/articles/preventive-health-check-cost-switzerland.html\">Read the comparison →</a></p>", "body_de": "<p>Comprehensive guide comparing GP check-ups, private blood panels (Aeonix CHF 595–1,295/yr), and MRI programmes (CHF 1,500–4,000). Understand what you get at each price point. <a href=\"/articles/preventive-health-check-cost-switzerland.html\">Read the comparison →</a></p>", "body_fr": "<p>Comprehensive guide comparing GP check-ups, private blood panels (Aeonix CHF 595–1,295/yr), and MRI programmes (CHF 1,500–4,000). Understand what you get at each price point. <a href=\"/articles/preventive-health-check-cost-switzerland.html\">Read the comparison →</a></p>", "body_it": "<p>Comprehensive guide comparing GP check-ups, private blood panels (Aeonix CHF 595–1,295/yr), and MRI programmes (CHF 1,500–4,000). Understand what you get at each price point. <a href=\"/articles/preventive-health-check-cost-switzerland.html\">Read the comparison →</a></p>" },
  { "slug": "burnout-blood-test-switzerland", "section": "Mental & Adrenal Health", "section2": "Stress / Burnout", "date": "2026-04-06", "read_time": "6 min read", "color": "#8C6A4A", "title": "Switzerland Has Europe's Highest Burnout Rate. Here's How to Test for It.", "title_de": "Die Schweiz hat Europas höchste Burnout-Rate. So lässt sie sich testen.", "title_fr": "La Suisse a le taux de burnout le plus élevé d'Europe. Voici comment le dépister.", "title_it": "La Svizzera ha il tasso di burnout più alto d'Europa. Ecco come rilevarlo.", "desc": "Switzerland has Europe's highest burnout rates. Burnout has a measurable biological signature — cortisol dysregulation, depleted DHEA-S, elevated inflammatory markers.", "desc_de": "Die Schweiz hat Europas höchste Burnout-Raten. Burnout hat eine messbare biologische Signatur.", "desc_fr": "La Suisse a les taux de burnout les plus élevés d'Europe. Le burnout a une signature biologique mesurable.", "desc_it": "La Svizzera ha i tassi di burnout più alti d'Europa. Il burnout ha una firma biologica misurabile.", "section_de": "Mental & Adrenal Health", "section_fr": "Mental & Adrenal Health", "section_it": "Mental & Adrenal Health", "body": "<p>Switzerland has Europe's highest burnout rates. Burnout has a measurable blood signature: cortisol dysregulation, depleted DHEA-S, elevated hsCRP and IL-6. Aeonix measures all of it. <a href=\"/articles/burnout-blood-test-switzerland.html\">Read more →</a></p>", "body_de": "<p>Switzerland has Europe's highest burnout rates. Burnout has a measurable blood signature: cortisol dysregulation, depleted DHEA-S, elevated hsCRP and IL-6. Aeonix measures all of it. <a href=\"/articles/burnout-blood-test-switzerland.html\">Read more →</a></p>", "body_fr": "<p>Switzerland has Europe's highest burnout rates. Burnout has a measurable blood signature: cortisol dysregulation, depleted DHEA-S, elevated hsCRP and IL-6. Aeonix measures all of it. <a href=\"/articles/burnout-blood-test-switzerland.html\">Read more →</a></p>", "body_it": "<p>Switzerland has Europe's highest burnout rates. Burnout has a measurable blood signature: cortisol dysregulation, depleted DHEA-S, elevated hsCRP and IL-6. Aeonix measures all of it. <a href=\"/articles/burnout-blood-test-switzerland.html\">Read more →</a></p>" },
  { "slug": "workplace-burnout-stress-screening-switzerland", "section": "Mental & Adrenal Health", "section2": "Stress / Burnout", "date": "2026-08-09", "read_time": "9 min read", "color": "#8C6A4A", "title": "Burned Out at Work? What Chronic Stress Is Really Doing to Your Body", "desc": "Constantly exhausted, wired but tired, running on empty? Chronic stress has a measurable biological signature — here's what it's doing to your body, and how to check it.", "body": "<p>Constantly exhausted, wired but tired, running on empty? You are not imagining it. Switzerland's most recent <em>Barometer Gute Arbeit</em> (November 2025) found that 42.4% of Swiss employees suffer from stress often or very often, and 41.1% feel emotionally exhausted at the end of a workday — with a peer-reviewed meta-analysis in <em>Swiss Medical Weekly</em> putting baseline occupational burnout prevalence at roughly 18% of the working population.</p>\n\n<h2>Burnout is a measurable biological process</h2>\n<p>Burnout progresses through distinct stages of your HPA (hypothalamic-pituitary-adrenal) axis. In Stage 1 (Activation), cortisol runs high and DHEA-S begins to decline. In Stage 2 (Resistance), cortisol flattens into an abnormal daily rhythm and sleep quality erodes. In Stage 3 (Exhaustion), cortisol and DHEA-S are markedly depleted while inflammatory markers like hsCRP and IL-6 climb — with links to cardiovascular risk, insulin resistance, and accelerated biological ageing.</p>\n\n<h2>How Aeonix helps you see where you stand</h2>\n<p>Cortisol and DHEA-S are included from Vital Edge upward; Longevity Plus and Elite add IL-6 for a fuller inflammatory picture. Prime Health members, or anyone who wants a focused, standalone check, can add Cortisol as a standalone add-on test — no GP referral required, with results reviewed by a physician.</p>\n\n<p>Aeonix also offers a corporate partnership programme with discounted group access, confidential individual results, and optional anonymised team-level insights for HR and leadership teams considering wellness benefits. <a href=\"/articles/workplace-burnout-stress-screening-switzerland/\">Read more →</a></p>\n\n  <div class=\"article-cta\">\n    <h3>Aeonix — Own Your Health</h3>\n    <p>90 to 150+ clinically validated biomarkers depending on plan, the core adrenal/stress panel from Vital Edge upward, and a standalone Cortisol add-on for anyone who wants it. Physician-reviewed results in 48 hours.</p>\n    <a href=\"/#pricing\" class=\"cta-btn\">Own Your Health — Book a Screening</a>\n  </div>", "title_de": "Ausgebrannt im Job? Was chronischer Stress wirklich mit Ihrem Körper macht", "desc_de": "Ständig erschöpft, angespannt und müde zugleich, ausgelaugt? Chronischer Stress hinterlässt eine messbare biologische Signatur — hier erfahren Sie, was er mit Ihrem Körper macht und wie Sie ihn nachweisen können.", "section_de": "Psychische & Nebennierengesundheit", "body_de": "<p>Ständig erschöpft, angespannt und zugleich müde, ausgelaugt? Sie bilden sich das nicht ein. Der aktuellste <em>Barometer Gute Arbeit</em> der Schweiz (November 2025) zeigt, dass 42,4% der Schweizer Arbeitnehmenden oft oder sehr oft unter Stress leiden und 41,1% sich am Ende eines Arbeitstages emotional erschöpft fühlen — eine peer-reviewte Meta-Analyse im <em>Swiss Medical Weekly</em> schätzt die Basisprävalenz von berufsbedingtem Burnout auf rund 18% der erwerbstätigen Bevölkerung.</p><h2>Burnout ist ein messbarer biologischer Prozess</h2><p>Burnout verläuft in unterscheidbaren Stadien Ihrer HPA-Achse (Hypothalamus-Hypophysen-Nebennierenachse). In Stadium 1 (Aktivierung) ist das Cortisol erhöht und DHEA-S beginnt zu sinken. In Stadium 2 (Widerstand) flacht der Cortisol-Tagesrhythmus ab und die Schlafqualität verschlechtert sich. In Stadium 3 (Erschöpfung) sind Cortisol und DHEA-S deutlich erschöpft, während Entzündungsmarker wie hsCRP und IL-6 ansteigen — mit Verbindungen zu kardiovaskulärem Risiko, Insulinresistenz und beschleunigter biologischer Alterung.</p><h2>Wie Aeonix Ihnen zeigt, wo Sie stehen</h2><p>Cortisol und DHEA-S sind ab Vital Edge enthalten; Longevity Plus und Elite ergänzen IL-6 für ein umfassenderes Entzündungsbild. Prime-Health-Mitglieder oder alle, die eine gezielte, eigenständige Abklärung wünschen, können Cortisol als Zusatztest buchen — ohne ärztliche Verordnung, mit Ergebnissen, die von einem Arzt überprüft werden.</p><p>Aeonix bietet zudem ein Corporate-Partnerschaftsprogramm mit vergünstigtem Gruppenzugang, vertraulichen Einzelresultaten und optionalen, anonymisierten Team-Einblicken für HR- und Führungsverantwortliche, die Wellness-Leistungen prüfen.</p>", "title_fr": "Épuisé au travail ? Ce que le stress chronique fait vraiment à votre corps", "desc_fr": "Toujours fatigué, sous tension mais épuisé, à bout de forces ? Le stress chronique laisse une signature biologique mesurable — voici ce qu'il fait à votre corps, et comment le détecter.", "section_fr": "Santé mentale & surrénalienne", "body_fr": "<p>Toujours fatigué, sous tension mais épuisé, à bout de forces ? Vous ne l'imaginez pas. Le dernier <em>Baromètre du bon travail</em> de Suisse (novembre 2025) montre que 42,4% des salariés suisses souffrent souvent ou très souvent de stress, et que 41,1% se sentent émotionnellement épuisés à la fin d'une journée de travail — une méta-analyse évaluée par des pairs dans le <em>Swiss Medical Weekly</em> situe la prévalence de référence du burnout professionnel à environ 18% de la population active.</p><h2>Le burnout est un processus biologique mesurable</h2><p>Le burnout progresse à travers des stades distincts de votre axe HHS (hypothalamo-hypophyso-surrénalien). Au stade 1 (activation), le cortisol est élevé et le DHEA-S commence à décliner. Au stade 2 (résistance), le rythme quotidien du cortisol s'aplatit et la qualité du sommeil se dégrade. Au stade 3 (épuisement), le cortisol et le DHEA-S sont nettement épuisés tandis que les marqueurs inflammatoires comme la hsCRP et l'IL-6 augmentent — avec des liens vers un risque cardiovasculaire accru, une résistance à l'insuline et un vieillissement biologique accéléré.</p><h2>Comment Aeonix vous aide à voir où vous en êtes</h2><p>Le cortisol et le DHEA-S sont inclus dès Vital Edge ; Longevity Plus et Elite ajoutent l'IL-6 pour une image inflammatoire plus complète. Les membres Prime Health, ou toute personne souhaitant un contrôle ciblé et autonome, peuvent ajouter le cortisol en test complémentaire — sans prescription médicale, avec des résultats revus par un médecin.</p><p>Aeonix propose également un programme de partenariat corporate avec un accès groupe à tarif préférentiel, des résultats individuels confidentiels, et des indicateurs optionnels et anonymisés au niveau de l'équipe pour les responsables RH et direction qui envisagent des avantages bien-être.</p>", "title_it": "Esausto al lavoro? Cosa fa davvero lo stress cronico al tuo corpo", "desc_it": "Sempre stanco, teso ma esausto, a corto di energie? Lo stress cronico lascia una firma biologica misurabile — ecco cosa fa al tuo corpo e come verificarlo.", "section_it": "Salute mentale & surrenalica", "body_it": "<p>Sempre stanco, teso ma esausto, a corto di energie? Non te lo stai immaginando. L'ultimo <em>Barometer Gute Arbeit</em> svizzero (novembre 2025) mostra che il 42,4% dei lavoratori svizzeri soffre di stress spesso o molto spesso, e il 41,1% si sente emotivamente esausto a fine giornata — una meta-analisi sottoposta a peer review pubblicata su <em>Swiss Medical Weekly</em> stima la prevalenza di base del burnout professionale attorno al 18% della popolazione attiva.</p><h2>Il burnout è un processo biologico misurabile</h2><p>Il burnout progredisce attraverso stadi distinti del tuo asse HPA (ipotalamo-ipofisi-suprarenale). Nello Stadio 1 (Attivazione), il cortisolo è elevato e il DHEA-S inizia a diminuire. Nello Stadio 2 (Resistenza), il ritmo giornaliero del cortisolo si appiattisce e la qualità del sonno peggiora. Nello Stadio 3 (Esaurimento), cortisolo e DHEA-S sono marcatamente esauriti mentre i marcatori infiammatori come hsCRP e IL-6 aumentano — con legami a rischio cardiovascolare, resistenza insulinica e invecchiamento biologico accelerato.</p><h2>Come Aeonix ti aiuta a capire dove ti trovi</h2><p>Cortisolo e DHEA-S sono inclusi a partire da Vital Edge; Longevity Plus ed Elite aggiungono l'IL-6 per un quadro infiammatorio più completo. I membri Prime Health, o chiunque desideri una valutazione mirata e autonoma, possono aggiungere il Cortisolo come test aggiuntivo — senza prescrizione medica, con risultati revisionati da un medico.</p><p>Aeonix offre anche un programma di partnership aziendale con accesso di gruppo scontato, risultati individuali confidenziali, e approfondimenti opzionali e anonimizzati a livello di team per i responsabili HR e management che valutano i benefit di benessere.</p>" },
  { "slug": "health-screening-zurich", "section": "City Screening", "date": "2026-04-06", "read_time": "5 min read", "color": "#4A8C6F", "title": "Health Screening in Zürich: Comprehensive Blood Testing Near You", "title_de": "Gesundheitscheck Zürich: Umfassende Blutuntersuchung in Zürich", "title_fr": "Bilan de santé à Zurich : dépistage sanguin complet", "title_it": "Check-up di salute a Zurigo: analisi del sangue completa", "desc": "Aeonix offers comprehensive preventive health screening for Zürich residents. 100–150+ biomarkers, physician-reviewed results in 48 hours. No clinic visit required.", "desc_de": "Umfassendes Vorsorge-Screening für Zürcherinnen und Zürcher. 100–150+ Biomarker, ärztlich geprüfte Ergebnisse in 48 Stunden.", "desc_fr": "Aeonix propose un dépistage de santé préventif complet pour les résidents de Zurich.", "desc_it": "Aeonix offre uno screening sanitario preventivo completo per i residenti di Zurigo.", "section_de": "Stadt-Screening", "section_fr": "Dépistage par ville", "section_it": "Screening per città", "body": "<p>Zürich — Switzerland's financial and pharma capital. Aeonix provides comprehensive preventive blood screening for Zürich residents — no clinic visit required, physician-reviewed results in 48 hours.</p><h2>Why Zürich residents choose Aeonix</h2><p>A standard Swiss GP check-up tests 12–20 markers. Aeonix screens 100 to 150+ biomarkers depending on your plan — covering cardiovascular risk (ApoB, Lp(a), hsCRP), metabolic health (fasting insulin, HOMA-IR), full hormonal profile, nutritional status, and more. Everything your Krankenkasse doesn't cover, delivered digitally in 48 hours.</p><h2>Aeonix Plans Available</h2>\n<div style=\"overflow-x:auto;margin:24px 0\">\n<table style=\"width:100%;border-collapse:collapse;font-size:.88rem\">\n<thead><tr style=\"background:rgba(184,134,78,.12)\">\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Plan</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Age Focus</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Markers</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Domains</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">From</th>\n</tr></thead>\n<tbody>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Prime Health</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">25–45</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">100+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">10–11</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 595/yr</td></tr>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Vital Edge</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">35–55</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">125+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">12–13</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 795/yr</td></tr>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Longevity Plus</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">55–65</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">135+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">13–14</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 995/yr</td></tr>\n<tr><td style=\"padding:9px 14px\"><strong>Elite</strong></td><td style=\"padding:9px 14px\">65+</td><td style=\"padding:9px 14px\">150+</td><td style=\"padding:9px 14px\">14–15</td><td style=\"padding:9px 14px\">CHF 1,295/yr</td></tr>\n</tbody></table></div><p><strong>All plans include:</strong> leading Swiss lab processing · physician-reviewed results · secure personal dashboard · longitudinal year-on-year tracking · support in English, German, French and Italian.</p><p><a href=\"https://aeonix.ch/#waitlist\">Reserve your founding spot →</a></p>", "body_de": "<p>Zürich — der Schweizer financial and pharma capital. Aeonix bietet umfassendes präventives Blutscreening für Einwohnerinnen und Einwohner von Zürich — ohne Klinikbesuch, ärztlich geprüfte Ergebnisse in 48 Stunden.</p><h2>Warum Einwohner von Zürich Aeonix wählen</h2><p>Ein Standard-Hausarztcheck testet 12–20 Marker. Aeonix misst 90 bis 150+ Biomarker je nach Plan — kardiovaskuläres Risiko (ApoB, Lp(a), hsCRP), Stoffwechselgesundheit (Nüchterninsulin, HOMA-IR), vollständiges Hormonprofil, Nährstoffstatus und mehr. Alles, was Ihre Krankenkasse nicht bezahlt, digital in 48 Stunden.</p><h2>Aeonix-Pläne im Überblick</h2>\n<div style=\"overflow-x:auto;margin:24px 0\">\n<table style=\"width:100%;border-collapse:collapse;font-size:.88rem\">\n<thead><tr style=\"background:rgba(184,134,78,.12)\">\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Plan</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Altersgruppe</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Marker</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Domänen</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Ab</th>\n</tr></thead>\n<tbody>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Prime Health</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">25–45</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">100+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">10–11</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 595/Jahr</td></tr>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Vital Edge</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">35–55</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">125+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">12–13</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 795/Jahr</td></tr>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Longevity Plus</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">55–65</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">135+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">13–14</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 995/Jahr</td></tr>\n<tr><td style=\"padding:9px 14px\"><strong>Elite</strong></td><td style=\"padding:9px 14px\">65+</td><td style=\"padding:9px 14px\">150+</td><td style=\"padding:9px 14px\">14–15</td><td style=\"padding:9px 14px\">CHF 1.295/Jahr</td></tr>\n</tbody></table></div><p><strong>Alle Pläne umfassen:</strong> renommierte Schweizer Laborverarbeitung · ärztlich geprüfte Ergebnisse · sicheres persönliches Dashboard · longitudinales Jahres-Tracking · Support auf Deutsch, Englisch, Französisch und Italienisch.</p><p><a href=\"https://aeonix.ch/#waitlist\">Gründer-Spot sichern →</a></p>", "body_fr": "<p>Zurich — hub de la Suisse. Aeonix propose un dépistage sanguin préventif complet pour les résidents de Zurich — sans visite clinique, résultats validés par un médecin en 48 heures.</p><h2>Pourquoi les résidents de Zurich choisissent Aeonix</h2><p>Un bilan standard chez un généraliste teste 12 à 20 marqueurs. Aeonix mesure 90 à 150+ biomarqueurs selon le plan — risque cardiovasculaire (ApoB, Lp(a), hsCRP), santé métabolique (insuline à jeun, HOMA-IR), profil hormonal complet, statut nutritionnel. Tout ce que votre caisse maladie ne rembourse pas, livré numériquement en 48 heures.</p><h2>Les plans Aeonix disponibles</h2>\n<div style=\"overflow-x:auto;margin:24px 0\">\n<table style=\"width:100%;border-collapse:collapse;font-size:.88rem\">\n<thead><tr style=\"background:rgba(184,134,78,.12)\">\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Plan</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Âge</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Marqueurs</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Domaines</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Dès</th>\n</tr></thead>\n<tbody>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Prime Health</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">25–45</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">100+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">10–11</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 595/an</td></tr>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Vital Edge</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">35–55</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">125+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">12–13</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 795/an</td></tr>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Longevity Plus</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">55–65</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">135+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">13–14</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 995/an</td></tr>\n<tr><td style=\"padding:9px 14px\"><strong>Elite</strong></td><td style=\"padding:9px 14px\">65+</td><td style=\"padding:9px 14px\">150+</td><td style=\"padding:9px 14px\">14–15</td><td style=\"padding:9px 14px\">CHF 1 295/an</td></tr>\n</tbody></table></div><p><strong>Tous les plans incluent :</strong> traitement en laboratoire suisse renommé · résultats validés par un médecin · tableau de bord personnel sécurisé · suivi longitudinal annuel · support en français, anglais, allemand et italien.</p><p><a href=\"https://aeonix.ch/#waitlist\">Réservez votre place fondateur →</a></p>nic visit needed, results in 48 hours. <a href=\"/cities/health-screening-zurich.html\">Learn more →</a></p>", "body_it": "<p>Zürich — Switzerland's financial and pharma capital. Aeonix provides 100–150+ biomarker blood screening for Zürich residents, no clinic visit needed, results in 48 hours. <a href=\"/cities/health-screening-zurich.html\">Learn more →</a></p>" },
  { "slug": "health-screening-zug", "section": "City Screening", "date": "2026-04-06", "read_time": "5 min read", "color": "#6A4A2A", "title": "Health Screening in Zug: Preventive Blood Testing for the Zug Community", "title_de": "Gesundheitscheck Zug: Präventives Blut-Screening für den Kanton Zug", "title_fr": "Bilan de santé à Zoug : dépistage sanguin préventif", "title_it": "Check-up di salute a Zugo: analisi del sangue preventiva", "desc": "Aeonix provides comprehensive preventive blood testing for Zug residents and executives. Swiss-certified labs, 100–150+ biomarkers, 48-hour results.", "desc_de": "Umfassende präventive Blutuntersuchungen für Zugerinnen, Zuger und Führungskräfte.", "desc_fr": "Aeonix propose un dépistage sanguin préventif complet pour les résidents du canton de Zoug.", "desc_it": "Aeonix offre analisi del sangue preventive complete per i residenti del cantone di Zugo.", "section_de": "Stadt-Screening", "section_fr": "Dépistage par ville", "section_it": "Screening per città", "body": "<p>Zug — Home to Glencore, ABB and Switzerland's corporate HQ belt. Aeonix provides comprehensive preventive blood screening for Zug residents — no clinic visit required, physician-reviewed results in 48 hours.</p><h2>Why Zug residents choose Aeonix</h2><p>A standard Swiss GP check-up tests 12–20 markers. Aeonix screens 100 to 150+ biomarkers depending on your plan — covering cardiovascular risk (ApoB, Lp(a), hsCRP), metabolic health (fasting insulin, HOMA-IR), full hormonal profile, nutritional status, and more. Everything your Krankenkasse doesn't cover, delivered digitally in 48 hours.</p><h2>Aeonix Plans Available</h2>\n<div style=\"overflow-x:auto;margin:24px 0\">\n<table style=\"width:100%;border-collapse:collapse;font-size:.88rem\">\n<thead><tr style=\"background:rgba(184,134,78,.12)\">\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Plan</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Age Focus</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Markers</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Domains</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">From</th>\n</tr></thead>\n<tbody>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Prime Health</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">25–45</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">100+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">10–11</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 595/yr</td></tr>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Vital Edge</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">35–55</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">125+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">12–13</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 795/yr</td></tr>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Longevity Plus</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">55–65</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">135+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">13–14</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 995/yr</td></tr>\n<tr><td style=\"padding:9px 14px\"><strong>Elite</strong></td><td style=\"padding:9px 14px\">65+</td><td style=\"padding:9px 14px\">150+</td><td style=\"padding:9px 14px\">14–15</td><td style=\"padding:9px 14px\">CHF 1,295/yr</td></tr>\n</tbody></table></div><p><strong>All plans include:</strong> leading Swiss lab processing · physician-reviewed results · secure personal dashboard · longitudinal year-on-year tracking · support in English, German, French and Italian.</p><p><a href=\"https://aeonix.ch/#waitlist\">Reserve your founding spot →</a></p>", "body_de": "<p>Zug — Heimat von Glencore, ABB and der Schweizer corporate HQ belt. Aeonix bietet umfassendes präventives Blutscreening für Einwohnerinnen und Einwohner von Zug — ohne Klinikbesuch, ärztlich geprüfte Ergebnisse in 48 Stunden.</p><h2>Warum Einwohner von Zug Aeonix wählen</h2><p>Ein Standard-Hausarztcheck testet 12–20 Marker. Aeonix misst 90 bis 150+ Biomarker je nach Plan — kardiovaskuläres Risiko (ApoB, Lp(a), hsCRP), Stoffwechselgesundheit (Nüchterninsulin, HOMA-IR), vollständiges Hormonprofil, Nährstoffstatus und mehr. Alles, was Ihre Krankenkasse nicht bezahlt, digital in 48 Stunden.</p><h2>Aeonix-Pläne im Überblick</h2>\n<div style=\"overflow-x:auto;margin:24px 0\">\n<table style=\"width:100%;border-collapse:collapse;font-size:.88rem\">\n<thead><tr style=\"background:rgba(184,134,78,.12)\">\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Plan</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Altersgruppe</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Marker</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Domänen</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Ab</th>\n</tr></thead>\n<tbody>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Prime Health</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">25–45</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">100+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">10–11</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 595/Jahr</td></tr>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Vital Edge</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">35–55</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">125+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">12–13</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 795/Jahr</td></tr>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Longevity Plus</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">55–65</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">135+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">13–14</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 995/Jahr</td></tr>\n<tr><td style=\"padding:9px 14px\"><strong>Elite</strong></td><td style=\"padding:9px 14px\">65+</td><td style=\"padding:9px 14px\">150+</td><td style=\"padding:9px 14px\">14–15</td><td style=\"padding:9px 14px\">CHF 1.295/Jahr</td></tr>\n</tbody></table></div><p><strong>Alle Pläne umfassen:</strong> renommierte Schweizer Laborverarbeitung · ärztlich geprüfte Ergebnisse · sicheres persönliches Dashboard · longitudinales Jahres-Tracking · Support auf Deutsch, Englisch, Französisch und Italienisch.</p><p><a href=\"https://aeonix.ch/#waitlist\">Gründer-Spot sichern →</a></p>", "body_fr": "<p>Zoug — hub de la Suisse. Aeonix propose un dépistage sanguin préventif complet pour les résidents de Zoug — sans visite clinique, résultats validés par un médecin en 48 heures.</p><h2>Pourquoi les résidents de Zoug choisissent Aeonix</h2><p>Un bilan standard chez un généraliste teste 12 à 20 marqueurs. Aeonix mesure 90 à 150+ biomarqueurs selon le plan — risque cardiovasculaire (ApoB, Lp(a), hsCRP), santé métabolique (insuline à jeun, HOMA-IR), profil hormonal complet, statut nutritionnel. Tout ce que votre caisse maladie ne rembourse pas, livré numériquement en 48 heures.</p><h2>Les plans Aeonix disponibles</h2>\n<div style=\"overflow-x:auto;margin:24px 0\">\n<table style=\"width:100%;border-collapse:collapse;font-size:.88rem\">\n<thead><tr style=\"background:rgba(184,134,78,.12)\">\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Plan</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Âge</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Marqueurs</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Domaines</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Dès</th>\n</tr></thead>\n<tbody>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Prime Health</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">25–45</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">100+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">10–11</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 595/an</td></tr>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Vital Edge</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">35–55</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">125+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">12–13</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 795/an</td></tr>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Longevity Plus</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">55–65</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">135+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">13–14</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 995/an</td></tr>\n<tr><td style=\"padding:9px 14px\"><strong>Elite</strong></td><td style=\"padding:9px 14px\">65+</td><td style=\"padding:9px 14px\">150+</td><td style=\"padding:9px 14px\">14–15</td><td style=\"padding:9px 14px\">CHF 1 295/an</td></tr>\n</tbody></table></div><p><strong>Tous les plans incluent :</strong> traitement en laboratoire suisse renommé · résultats validés par un médecin · tableau de bord personnel sécurisé · suivi longitudinal annuel · support en français, anglais, allemand et italien.</p><p><a href=\"https://aeonix.ch/#waitlist\">Réservez votre place fondateur →</a></p><a href=\"/cities/health-screening-zug.html\">Learn more →</a></p>", "body_it": "<p>Zug — home to Glencore, ABB and Switzerland's corporate HQ belt. Aeonix executive health screening, 100–150+ biomarkers, 48-hour physician-reviewed results. <a href=\"/cities/health-screening-zug.html\">Learn more →</a></p>" },
  { "slug": "health-screening-basel", "section": "City Screening", "date": "2026-04-06", "read_time": "5 min read", "color": "#4A8C6F", "title": "Health Screening in Basel: Preventive Blood Testing for Basel Residents", "title_de": "Gesundheitscheck Basel: Umfassende Vorsorge-Blutuntersuchung in Basel", "title_fr": "Bilan de santé à Bâle : dépistage sanguin préventif complet", "title_it": "Check-up di salute a Basilea: analisi del sangue preventiva completa", "desc": "Aeonix offers comprehensive preventive blood screening for Basel residents. Pharma professionals, expats, and families — 100–150+ biomarkers, 48-hour results.", "desc_de": "Präventives Blutscreening für Basel-Stadt und Basel-Landschaft. 100–150+ Biomarker.", "desc_fr": "Aeonix propose un dépistage sanguin préventif complet pour les résidents de Bâle.", "desc_it": "Aeonix offre uno screening ematico preventivo completo per i residenti di Basilea.", "section_de": "Stadt-Screening", "section_fr": "Dépistage par ville", "section_it": "Screening per città", "body": "<p>Basel — Pharma capital of Switzerland — home to Novartis, Roche and Lonza. Aeonix provides comprehensive preventive blood screening for Basel residents — no clinic visit required, physician-reviewed results in 48 hours.</p><h2>Why Basel residents choose Aeonix</h2><p>A standard Swiss GP check-up tests 12–20 markers. Aeonix screens 100 to 150+ biomarkers depending on your plan — covering cardiovascular risk (ApoB, Lp(a), hsCRP), metabolic health (fasting insulin, HOMA-IR), full hormonal profile, nutritional status, and more. Everything your Krankenkasse doesn't cover, delivered digitally in 48 hours.</p><h2>Aeonix Plans Available</h2>\n<div style=\"overflow-x:auto;margin:24px 0\">\n<table style=\"width:100%;border-collapse:collapse;font-size:.88rem\">\n<thead><tr style=\"background:rgba(184,134,78,.12)\">\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Plan</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Age Focus</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Markers</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Domains</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">From</th>\n</tr></thead>\n<tbody>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Prime Health</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">25–45</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">100+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">10–11</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 595/yr</td></tr>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Vital Edge</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">35–55</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">125+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">12–13</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 795/yr</td></tr>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Longevity Plus</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">55–65</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">135+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">13–14</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 995/yr</td></tr>\n<tr><td style=\"padding:9px 14px\"><strong>Elite</strong></td><td style=\"padding:9px 14px\">65+</td><td style=\"padding:9px 14px\">150+</td><td style=\"padding:9px 14px\">14–15</td><td style=\"padding:9px 14px\">CHF 1,295/yr</td></tr>\n</tbody></table></div><p><strong>All plans include:</strong> leading Swiss lab processing · physician-reviewed results · secure personal dashboard · longitudinal year-on-year tracking · support in English, German, French and Italian.</p><p><a href=\"https://aeonix.ch/#waitlist\">Reserve your founding spot →</a></p>", "body_de": "<p>Basel — Pharma capital of Switzerland — home to Novartis, Roche and Lonza. Aeonix bietet umfassendes präventives Blutscreening für Einwohnerinnen und Einwohner von Basel — ohne Klinikbesuch, ärztlich geprüfte Ergebnisse in 48 Stunden.</p><h2>Warum Einwohner von Basel Aeonix wählen</h2><p>Ein Standard-Hausarztcheck testet 12–20 Marker. Aeonix misst 90 bis 150+ Biomarker je nach Plan — kardiovaskuläres Risiko (ApoB, Lp(a), hsCRP), Stoffwechselgesundheit (Nüchterninsulin, HOMA-IR), vollständiges Hormonprofil, Nährstoffstatus und mehr. Alles, was Ihre Krankenkasse nicht bezahlt, digital in 48 Stunden.</p><h2>Aeonix-Pläne im Überblick</h2>\n<div style=\"overflow-x:auto;margin:24px 0\">\n<table style=\"width:100%;border-collapse:collapse;font-size:.88rem\">\n<thead><tr style=\"background:rgba(184,134,78,.12)\">\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Plan</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Altersgruppe</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Marker</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Domänen</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Ab</th>\n</tr></thead>\n<tbody>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Prime Health</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">25–45</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">100+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">10–11</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 595/Jahr</td></tr>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Vital Edge</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">35–55</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">125+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">12–13</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 795/Jahr</td></tr>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Longevity Plus</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">55–65</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">135+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">13–14</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 995/Jahr</td></tr>\n<tr><td style=\"padding:9px 14px\"><strong>Elite</strong></td><td style=\"padding:9px 14px\">65+</td><td style=\"padding:9px 14px\">150+</td><td style=\"padding:9px 14px\">14–15</td><td style=\"padding:9px 14px\">CHF 1.295/Jahr</td></tr>\n</tbody></table></div><p><strong>Alle Pläne umfassen:</strong> renommierte Schweizer Laborverarbeitung · ärztlich geprüfte Ergebnisse · sicheres persönliches Dashboard · longitudinales Jahres-Tracking · Support auf Deutsch, Englisch, Französisch und Italienisch.</p><p><a href=\"https://aeonix.ch/#waitlist\">Gründer-Spot sichern →</a></p>", "body_fr": "<p>Bâle — hub de la Suisse. Aeonix propose un dépistage sanguin préventif complet pour les résidents de Bâle — sans visite clinique, résultats validés par un médecin en 48 heures.</p><h2>Pourquoi les résidents de Bâle choisissent Aeonix</h2><p>Un bilan standard chez un généraliste teste 12 à 20 marqueurs. Aeonix mesure 90 à 150+ biomarqueurs selon le plan — risque cardiovasculaire (ApoB, Lp(a), hsCRP), santé métabolique (insuline à jeun, HOMA-IR), profil hormonal complet, statut nutritionnel. Tout ce que votre caisse maladie ne rembourse pas, livré numériquement en 48 heures.</p><h2>Les plans Aeonix disponibles</h2>\n<div style=\"overflow-x:auto;margin:24px 0\">\n<table style=\"width:100%;border-collapse:collapse;font-size:.88rem\">\n<thead><tr style=\"background:rgba(184,134,78,.12)\">\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Plan</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Âge</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Marqueurs</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Domaines</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Dès</th>\n</tr></thead>\n<tbody>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Prime Health</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">25–45</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">100+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">10–11</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 595/an</td></tr>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Vital Edge</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">35–55</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">125+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">12–13</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 795/an</td></tr>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Longevity Plus</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">55–65</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">135+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">13–14</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 995/an</td></tr>\n<tr><td style=\"padding:9px 14px\"><strong>Elite</strong></td><td style=\"padding:9px 14px\">65+</td><td style=\"padding:9px 14px\">150+</td><td style=\"padding:9px 14px\">14–15</td><td style=\"padding:9px 14px\">CHF 1 295/an</td></tr>\n</tbody></table></div><p><strong>Tous les plans incluent :</strong> traitement en laboratoire suisse renommé · résultats validés par un médecin · tableau de bord personnel sécurisé · suivi longitudinal annuel · support en français, anglais, allemand et italien.</p><p><a href=\"https://aeonix.ch/#waitlist\">Réservez votre place fondateur →</a></p>or Basel residents, 100–150+ biomarkers. <a href=\"/cities/health-screening-basel.html\">Learn more →</a></p>", "body_it": "<p>Basel — pharma capital of Switzerland, home to Novartis, Roche and Lonza. Aeonix preventive blood screening for Basel residents, 100–150+ biomarkers. <a href=\"/cities/health-screening-basel.html\">Learn more →</a></p>" },
  { "slug": "health-screening-geneva", "section": "City Screening", "date": "2026-04-06", "read_time": "5 min read", "color": "#4A7A8C", "title": "Health Screening in Geneva: Comprehensive Blood Testing for Geneva Residents", "title_de": "Gesundheitscheck Genf: Vorsorge-Blutuntersuchung für Genfer Einwohner", "title_fr": "Bilan de santé à Genève : dépistage sanguin préventif complet", "title_it": "Check-up di salute a Ginevra: analisi del sangue preventiva completa", "desc": "Aeonix provides preventive health screening for Geneva residents. English, French, German and Italian supported. 100–150+ biomarkers, results in 48 hours.", "desc_de": "Vorsorge-Screening für Genf. Deutsch, Englisch, Französisch und Italienisch. 100–150+ Biomarker.", "desc_fr": "Aeonix propose un dépistage préventif pour Genève. Français, anglais, allemand et italien.", "desc_it": "Aeonix offre uno screening sanitario preventivo per Ginevra. Italiano, francese, inglese e tedesco.", "section_de": "Stadt-Screening", "section_fr": "Dépistage par ville", "section_it": "Screening per città", "body": "<p>Geneva — Switzerland's international hub — UN, WHO, global finance and luxury sector. Aeonix provides comprehensive preventive blood screening for Geneva residents — no clinic visit required, physician-reviewed results in 48 hours.</p><h2>Why Geneva residents choose Aeonix</h2><p>A standard Swiss GP check-up tests 12–20 markers. Aeonix screens 100 to 150+ biomarkers depending on your plan — covering cardiovascular risk (ApoB, Lp(a), hsCRP), metabolic health (fasting insulin, HOMA-IR), full hormonal profile, nutritional status, and more. Everything your Krankenkasse doesn't cover, delivered digitally in 48 hours.</p><h2>Aeonix Plans Available</h2>\n<div style=\"overflow-x:auto;margin:24px 0\">\n<table style=\"width:100%;border-collapse:collapse;font-size:.88rem\">\n<thead><tr style=\"background:rgba(184,134,78,.12)\">\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Plan</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Age Focus</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Markers</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Domains</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">From</th>\n</tr></thead>\n<tbody>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Prime Health</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">25–45</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">100+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">10–11</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 595/yr</td></tr>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Vital Edge</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">35–55</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">125+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">12–13</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 795/yr</td></tr>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Longevity Plus</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">55–65</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">135+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">13–14</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 995/yr</td></tr>\n<tr><td style=\"padding:9px 14px\"><strong>Elite</strong></td><td style=\"padding:9px 14px\">65+</td><td style=\"padding:9px 14px\">150+</td><td style=\"padding:9px 14px\">14–15</td><td style=\"padding:9px 14px\">CHF 1,295/yr</td></tr>\n</tbody></table></div><p><strong>All plans include:</strong> leading Swiss lab processing · physician-reviewed results · secure personal dashboard · longitudinal year-on-year tracking · support in English, German, French and Italian.</p><p><a href=\"https://aeonix.ch/#waitlist\">Reserve your founding spot →</a></p>", "body_de": "<p>Genf — der Schweizer international hub — UN, WHO, global finance and luxury sector. Aeonix bietet umfassendes präventives Blutscreening für Einwohnerinnen und Einwohner von Genf — ohne Klinikbesuch, ärztlich geprüfte Ergebnisse in 48 Stunden.</p><h2>Warum Einwohner von Genf Aeonix wählen</h2><p>Ein Standard-Hausarztcheck testet 12–20 Marker. Aeonix misst 90 bis 150+ Biomarker je nach Plan — kardiovaskuläres Risiko (ApoB, Lp(a), hsCRP), Stoffwechselgesundheit (Nüchterninsulin, HOMA-IR), vollständiges Hormonprofil, Nährstoffstatus und mehr. Alles, was Ihre Krankenkasse nicht bezahlt, digital in 48 Stunden.</p><h2>Aeonix-Pläne im Überblick</h2>\n<div style=\"overflow-x:auto;margin:24px 0\">\n<table style=\"width:100%;border-collapse:collapse;font-size:.88rem\">\n<thead><tr style=\"background:rgba(184,134,78,.12)\">\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Plan</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Altersgruppe</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Marker</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Domänen</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Ab</th>\n</tr></thead>\n<tbody>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Prime Health</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">25–45</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">100+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">10–11</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 595/Jahr</td></tr>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Vital Edge</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">35–55</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">125+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">12–13</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 795/Jahr</td></tr>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Longevity Plus</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">55–65</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">135+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">13–14</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 995/Jahr</td></tr>\n<tr><td style=\"padding:9px 14px\"><strong>Elite</strong></td><td style=\"padding:9px 14px\">65+</td><td style=\"padding:9px 14px\">150+</td><td style=\"padding:9px 14px\">14–15</td><td style=\"padding:9px 14px\">CHF 1.295/Jahr</td></tr>\n</tbody></table></div><p><strong>Alle Pläne umfassen:</strong> renommierte Schweizer Laborverarbeitung · ärztlich geprüfte Ergebnisse · sicheres persönliches Dashboard · longitudinales Jahres-Tracking · Support auf Deutsch, Englisch, Französisch und Italienisch.</p><p><a href=\"https://aeonix.ch/#waitlist\">Gründer-Spot sichern →</a></p>", "body_fr": "<p>Genève — hub de la Suisse. Aeonix propose un dépistage sanguin préventif complet pour les résidents de Genève — sans visite clinique, résultats validés par un médecin en 48 heures.</p><h2>Pourquoi les résidents de Genève choisissent Aeonix</h2><p>Un bilan standard chez un généraliste teste 12 à 20 marqueurs. Aeonix mesure 90 à 150+ biomarqueurs selon le plan — risque cardiovasculaire (ApoB, Lp(a), hsCRP), santé métabolique (insuline à jeun, HOMA-IR), profil hormonal complet, statut nutritionnel. Tout ce que votre caisse maladie ne rembourse pas, livré numériquement en 48 heures.</p><h2>Les plans Aeonix disponibles</h2>\n<div style=\"overflow-x:auto;margin:24px 0\">\n<table style=\"width:100%;border-collapse:collapse;font-size:.88rem\">\n<thead><tr style=\"background:rgba(184,134,78,.12)\">\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Plan</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Âge</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Marqueurs</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Domaines</th>\n<th style=\"padding:10px 14px;text-align:left;border-bottom:2px solid rgba(184,134,78,.3);color:#8C6A3A\">Dès</th>\n</tr></thead>\n<tbody>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Prime Health</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">25–45</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">100+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">10–11</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 595/an</td></tr>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Vital Edge</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">35–55</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">125+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">12–13</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 795/an</td></tr>\n<tr><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\"><strong>Longevity Plus</strong></td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">55–65</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">135+</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">13–14</td><td style=\"padding:9px 14px;border-bottom:1px solid rgba(26,24,20,.07)\">CHF 995/an</td></tr>\n<tr><td style=\"padding:9px 14px\"><strong>Elite</strong></td><td style=\"padding:9px 14px\">65+</td><td style=\"padding:9px 14px\">150+</td><td style=\"padding:9px 14px\">14–15</td><td style=\"padding:9px 14px\">CHF 1 295/an</td></tr>\n</tbody></table></div><p><strong>Tous les plans incluent :</strong> traitement en laboratoire suisse renommé · résultats validés par un médecin · tableau de bord personnel sécurisé · suivi longitudinal annuel · support en français, anglais, allemand et italien.</p><p><a href=\"https://aeonix.ch/#waitlist\">Réservez votre place fondateur →</a></p>guages for Geneva's diverse community, 100–150+ biomarkers, 48-hour results. <a href=\"/cities/health-screening-geneva.html\">Learn more →</a></p>", "body_it": "<p>Geneva — Switzerland's international hub. Aeonix health screening in 4 languages for Geneva's diverse community, 100–150+ biomarkers, 48-hour results. <a href=\"/cities/health-screening-geneva.html\">Learn more →</a></p>" }, { "slug": "longevity-screening-zurich", "section": "Longevity Science", "date": "2026-08-08", "read_time": "6 min read", "color": "#2A7BA8", "title": "Longevity Screening in Zürich: The Biomarker Panel Behind Healthy Ageing", "desc": "Aeonix brings a 135+ biomarker Longevity Plus panel to Zürich — physician-reviewed testing for the biological systems that actually predict healthy ageing. Results in 48 hours.", "body": "<p>Z\u00fcrich has one of the highest concentrations of high-performing professionals in Europe \u2014 finance, pharma, and executive leadership roles that reward long careers and punish burnout. A growing number of residents are no longer satisfied with a check-up that confirms they aren\u2019t sick yet. They want to know whether their biology is ageing faster or slower than their birth certificate suggests, and what to do about it while it\u2019s still correctable.</p>\n\n<p>That is what longevity screening is for. Aeonix\u2019s Longevity Plus panel \u2014 135+ physician-reviewed biomarkers \u2014 is now available to Z\u00fcrich residents through certified local collection points, with results delivered to a secure dashboard within 48 hours.</p>\n\n<h2>Why longevity screening matters in Z\u00fcrich</h2>\n<p>A standard Swiss GP check-up (Vorsorgeuntersuchung) tests 12\u201320 markers once every three years \u2014 enough to catch overt disease, not enough to track the slow biological drift that precedes it. For Z\u00fcrich\u2019s demanding professional population, longevity screening is less about anxiety and more about extending the years you\u2019re actually able to perform at your best.</p>\n\n<h2>What Aeonix\u2019s Longevity Plus panel measures</h2>\n<p>Longevity Plus is built around the biomarker categories with the strongest evidence base for healthy-ageing risk, without reducing your results to a single invented score: cardiovascular ageing (ApoB, Lp(a), full lipid panel, hsCRP, IL-6), metabolic function (fasting insulin, HOMA-IR, HbA1c, fasting glucose), hormonal balance (full thyroid axis, DHEA-S, cortisol, sex hormones), nutritional status, and cancer adjunct and organ markers.</p>\n\n<h2>Pricing for Z\u00fcrich residents</h2>\n<p>Longevity Plus is CHF 995/year (135+ biomarkers). Aeonix Elite extends to 150+ biomarkers at CHF 1,295/year. Prime Health (100+ biomarkers, CHF 595/year) and Vital Edge (125+ biomarkers, CHF 795/year) are also available. <a href=\"/longevity-screening-zurich.html\">Learn more \u2192</a></p>", "title_de": "Longevity-Vorsorge in Zürich: Das Biomarker-Panel für gesundes Altern", "desc_de": "Aeonix bringt ein Longevity-Plus-Panel mit 135+ Biomarkern nach Zürich — ärztlich geprüfte Tests für die biologischen Systeme, die gesundes Altern tatsächlich vorhersagen. Ergebnisse in 48 Stunden.", "section_de": "Longevity-Wissenschaft", "body_de": "<p>Zürich hat eine der höchsten Dichten an Spitzenkräften in Europa — Finanzwesen, Pharma und Führungspositionen, die lange Karrieren belohnen und Burnout bestrafen. Immer mehr Einwohner geben sich nicht mehr mit einem Check-up zufrieden, der nur bestätigt, dass sie noch nicht krank sind.</p>\n\n<h2>Warum Longevity-Vorsorge in Zürich wichtig ist</h2>\n<p>Ein Standard-Schweizer-Hausarztcheck testet alle drei Jahre 12–20 Marker — nicht genug, um die langsame biologische Drift zu erfassen, die Herz-Kreislauf-Erkrankungen, Insulinresistenz, chronischer Entzündung und hormonellem Abbau vorausgeht.</p>\n\n<h2>Was das Longevity-Plus-Panel von Aeonix misst</h2>\n<p>135+ Biomarker in den Bereichen kardiovaskuläre Alterung (ApoB, Lp(a), vollständiges Lipidprofil, hsCRP, IL-6), Stoffwechselfunktion (Nüchterninsulin, HOMA-IR, HbA1c), hormonelles Gleichgewicht (vollständige Schilddrüsenachse, DHEA-S, Cortisol, Sexualhormone), Nährstoffstatus sowie Krebs-Zusatzmarker und Organfunktion.</p>\n\n<h2>Preise für Einwohner von Zürich</h2>\n<p>Longevity Plus kostet CHF 995/Jahr (135+ Biomarker). Aeonix Elite erweitert auf 150+ Biomarker für CHF 1'295/Jahr. Prime Health (100+ Biomarker, CHF 595/Jahr) und Vital Edge (125+ Biomarker, CHF 795/Jahr) sind ebenfalls verfügbar. <a href=\"/longevity-vorsorge-zuerich.html\">Mehr erfahren →</a></p>", "title_fr": "Dépistage de la longévité à Zurich : le panel de biomarqueurs du vieillissement en bonne santé", "desc_fr": "Aeonix apporte à Zurich un panel Longevity Plus de 135+ biomarqueurs — des tests validés par un médecin pour les systèmes biologiques qui prédisent réellement un vieillissement en bonne santé. Résultats en 48 heures.", "section_fr": "Science de la longévité", "body_fr": "<p>Zurich compte l'une des plus fortes concentrations de professionnels hautement performants d'Europe. De plus en plus de résidents veulent savoir si leur biologie vieillit plus vite ou plus lentement que ne le suggère leur acte de naissance.</p>\n\n<h2>Pourquoi le dépistage de la longévité compte à Zurich</h2>\n<p>Un bilan de santé standard suisse teste 12 à 20 marqueurs une fois tous les trois ans — pas assez pour suivre la dérive biologique lente qui précède maladie cardiovasculaire, résistance à l'insuline, inflammation chronique et déclin hormonal.</p>\n\n<h2>Ce que mesure le panel Longevity Plus d'Aeonix</h2>\n<p>135+ biomarqueurs couvrant le vieillissement cardiovasculaire (ApoB, Lp(a), bilan lipidique complet, hsCRP, IL-6), la fonction métabolique (insuline à jeun, HOMA-IR, HbA1c), l'équilibre hormonal, le statut nutritionnel et des marqueurs adjuvants du cancer.</p>\n\n<h2>Tarifs pour les résidents de Zurich</h2>\n<p>Longevity Plus coûte CHF 995/an (135+ biomarqueurs). Aeonix Elite s'étend à 150+ biomarqueurs pour CHF 1'295/an. Prime Health (100+ biomarqueurs, CHF 595/an) et Vital Edge (125+ biomarqueurs, CHF 795/an) restent disponibles. <a href=\"/longevite-zurich.html\">En savoir plus →</a></p>", "title_it": "Screening della longevità a Zurigo: il pannello di biomarcatori per un invecchiamento sano", "desc_it": "Aeonix porta a Zurigo un pannello Longevity Plus con 135+ biomarcatori — test validati da un medico per i sistemi biologici che predicono davvero un invecchiamento sano. Risultati in 48 ore.", "section_it": "Scienza della longevità", "body_it": "<p>Zurigo ha una delle più alte concentrazioni di professionisti ad alte prestazioni in Europa. Sempre più residenti vogliono sapere se la loro biologia sta invecchiando più velocemente o più lentamente di quanto suggerisca la loro data di nascita.</p>\n\n<h2>Perché lo screening della longevità è importante a Zurigo</h2>\n<p>Un controllo medico standard svizzero testa 12–20 marcatori una volta ogni tre anni — non sufficiente per monitorare la lenta deriva biologica che precede malattie cardiovascolari, resistenza all'insulina, infiammazione cronica e declino ormonale.</p>\n\n<h2>Cosa misura il pannello Longevity Plus di Aeonix</h2>\n<p>135+ biomarcatori che coprono l'invecchiamento cardiovascolare (ApoB, Lp(a), profilo lipidico completo, hsCRP, IL-6), la funzione metabolica (insulina a digiuno, HOMA-IR, HbA1c), l'equilibrio ormonale, lo stato nutrizionale e i marcatori adiuvanti oncologici.</p>\n\n<h2>Prezzi per i residenti di Zurigo</h2>\n<p>Longevity Plus costa CHF 995/anno (135+ biomarcatori). Aeonix Elite si estende a 150+ biomarcatori per CHF 1.295/anno. Prime Health (100+ biomarcatori, CHF 595/anno) e Vital Edge (125+ biomarcatori, CHF 795/anno) restano disponibili. <a href=\"/longevita-zurigo.html\">Scopri di più →</a></p>" }, { "slug": "longevity-screening-basel", "section": "Longevity Science", "date": "2026-08-08", "read_time": "6 min read", "color": "#2A7BA8", "title": "Longevity Screening in Basel: 135+ Biomarkers for Healthy Ageing", "desc": "Basel is home to Switzerland\u2019s leading longevity research. Aeonix brings a 135+ biomarker Longevity Plus panel to Basel residents \u2014 physician-reviewed results in 48 hours.", "body": "<p>Basel is home to Roche and Novartis, and to the University of Basel\u2019s healthy-longevity research campus \u2014 real institutional weight behind a field that, elsewhere, is mostly marketing. Aeonix\u2019s Longevity Plus panel brings that same evidence-based rigor to a physician-reviewed blood panel available directly to Basel residents.</p>\n\n<h2>Why longevity screening matters in Basel</h2>\n<p>Basel\u2019s pharma and biotech workforce is unusually well-informed about the biology of ageing. A standard GP check-up tests 12\u201320 markers once every three years \u2014 not enough to track vascular ageing, insulin resistance, chronic inflammation, and hormonal decline before they become disease.</p>\n\n<h2>What Aeonix\u2019s Longevity Plus panel measures</h2>\n<p>135+ biomarkers across cardiovascular ageing (ApoB, Lp(a), full lipid panel, hsCRP, IL-6), metabolic function (fasting insulin, HOMA-IR, HbA1c), hormonal balance (full thyroid axis, DHEA-S, cortisol, sex hormones), nutritional status, and cancer adjunct and organ markers \u2014 deliberately the same biology longevity research draws on, without collapsing it into one invented score.</p>\n\n<h2>Pricing for Basel residents</h2>\n<p>Longevity Plus is CHF 995/year (135+ biomarkers). Aeonix Elite extends to 150+ biomarkers at CHF 1,295/year. Prime Health (100+ biomarkers, CHF 595/year) and Vital Edge (125+ biomarkers, CHF 795/year) remain available. <a href=\"/longevity-screening-basel.html\">Learn more \u2192</a></p>", "title_de": "Longevity-Vorsorge in Basel: 135+ Biomarker für gesundes Altern", "desc_de": "Basel ist die Heimat der führenden Longevity-Forschung der Schweiz. Aeonix bringt ein Longevity-Plus-Panel mit 135+ Biomarkern zu den Einwohnern von Basel — ärztlich geprüfte Ergebnisse in 48 Stunden.", "section_de": "Longevity-Wissenschaft", "body_de": "<p>Basel ist kein beiläufiger Ort, um über Longevity-Wissenschaft zu sprechen. Hier sind Roche und Novartis beheimatet sowie der Campus für gesunde Langlebigkeit der Universität Basel — echtes institutionelles Gewicht hinter einem Feld, das anderswo meist Marketing ist.</p>\n\n<h2>Warum Longevity-Vorsorge in Basel wichtig ist</h2>\n<p>Basels Pharma- und Biotech-Belegschaft ist ungewöhnlich gut über die Biologie des Alterns informiert. Ein Standard-Hausarztcheck in der Schweiz testet alle drei Jahre 12–20 Marker — nicht genug, um Gefässalterung, Insulinresistenz, chronische Entzündung und hormonellen Abbau zu erfassen, bevor sie zu Krankheit werden.</p>\n\n<h2>Was das Longevity-Plus-Panel von Aeonix misst</h2>\n<p>135+ Biomarker in den Bereichen kardiovaskuläre Alterung, Stoffwechselfunktion, hormonelles Gleichgewicht, Nährstoffstatus sowie Krebs-Zusatz- und Organmarker.</p>\n\n<h2>Preise für Einwohner von Basel</h2>\n<p>Longevity Plus kostet CHF 995/Jahr (135+ Biomarker). Aeonix Elite erweitert auf 150+ Biomarker für CHF 1'295/Jahr. Prime Health (100+ Biomarker, CHF 595/Jahr) und Vital Edge (125+ Biomarker, CHF 795/Jahr) bleiben verfügbar. <a href=\"/longevity-vorsorge-basel.html\">Mehr erfahren →</a></p>", "title_fr": "Dépistage de la longévité à Bâle : 135+ biomarqueurs pour un vieillissement en bonne santé", "desc_fr": "Bâle abrite la recherche suisse de pointe sur la longévité. Aeonix propose aux résidents de Bâle un panel Longevity Plus de 135+ biomarqueurs — résultats validés par un médecin en 48 heures.", "section_fr": "Science de la longévité", "body_fr": "<p>Bâle n'est pas un endroit anodin pour parler de science de la longévité. La ville abrite Roche et Novartis, ainsi que le campus de recherche sur la longévité en bonne santé de l'Université de Bâle.</p>\n\n<h2>Pourquoi le dépistage de la longévité compte à Bâle</h2>\n<p>La main-d'œuvre pharmaceutique et biotechnologique de Bâle est exceptionnellement bien informée sur la biologie du vieillissement. Un bilan de santé standard en Suisse teste 12 à 20 marqueurs une fois tous les trois ans.</p>\n\n<h2>Ce que mesure le panel Longevity Plus d'Aeonix</h2>\n<p>135+ biomarqueurs couvrant le vieillissement cardiovasculaire, la fonction métabolique, l'équilibre hormonal, le statut nutritionnel et des marqueurs adjuvants du cancer.</p>\n\n<h2>Tarifs pour les résidents de Bâle</h2>\n<p>Longevity Plus coûte CHF 995/an (135+ biomarqueurs). Aeonix Elite s'étend à 150+ biomarqueurs pour CHF 1'295/an. Prime Health (100+ biomarqueurs, CHF 595/an) et Vital Edge (125+ biomarqueurs, CHF 795/an) restent disponibles. <a href=\"/longevite-bale.html\">En savoir plus →</a></p>", "title_it": "Screening della longevità a Basilea: 135+ biomarcatori per un invecchiamento sano", "desc_it": "Basilea è sede della ricerca svizzera d'avanguardia sulla longevità. Aeonix offre ai residenti di Basilea un pannello Longevity Plus con 135+ biomarcatori — risultati validati da un medico in 48 ore.", "section_it": "Scienza della longevità", "body_it": "<p>Basilea non è un luogo qualunque per parlare di scienza della longevità. Ospita Roche e Novartis, oltre al campus di ricerca sulla longevità sana dell'Università di Basilea.</p>\n\n<h2>Perché lo screening della longevità è importante a Basilea</h2>\n<p>La forza lavoro farmaceutica e biotech di Basilea è insolitamente ben informata sulla biologia dell'invecchiamento. Un controllo medico standard in Svizzera testa 12–20 marcatori una volta ogni tre anni.</p>\n\n<h2>Cosa misura il pannello Longevity Plus di Aeonix</h2>\n<p>135+ biomarcatori che coprono l'invecchiamento cardiovascolare, la funzione metabolica, l'equilibrio ormonale, lo stato nutrizionale e i marcatori adiuvanti oncologici.</p>\n\n<h2>Prezzi per i residenti di Basilea</h2>\n<p>Longevity Plus costa CHF 995/anno (135+ biomarcatori). Aeonix Elite si estende a 150+ biomarcatori per CHF 1.295/anno. Prime Health (100+ biomarcatori, CHF 595/anno) e Vital Edge (125+ biomarcatori, CHF 795/anno) restano disponibili. <a href=\"/longevita-basilea.html\">Scopri di più →</a></p>" }, { "slug": "longevity-screening-zug", "section": "Longevity Science", "date": "2026-08-08", "read_time": "6 min read", "color": "#2A7BA8", "title": "Longevity Screening in Zug: The Executive\u2019s Biomarker Panel for Healthy Ageing", "desc": "Aeonix\u2019s Longevity Plus panel \u2014 135+ physician-reviewed biomarkers \u2014 is now available in Zug, with concierge home collection for executives. Results in 48 hours.", "body": "<p>Zug has one of the highest concentrations of company founders, crypto entrepreneurs, and family offices anywhere in Switzerland \u2014 a community already used to planning for the long term. Aeonix\u2019s Longevity Plus panel brings 135+ physician-reviewed biomarkers directly to Zug, with results delivered to a secure dashboard in 48 hours.</p>\n\n<h2>Why longevity screening matters in Zug</h2>\n<p>Founders and executives in Crypto Valley tend to have irregular schedules, high sustained stress, and little patience for a GP waiting room. Longevity screening exists to catch slow-moving biological drift early, while it\u2019s still reversible.</p>\n\n<h2>What Aeonix\u2019s Longevity Plus panel measures</h2>\n<p>135+ biomarkers across cardiovascular ageing (ApoB, Lp(a), full lipid panel, hsCRP, IL-6), metabolic function (fasting insulin, HOMA-IR, HbA1c), hormonal balance (full thyroid axis, DHEA-S, cortisol, sex hormones), nutritional status, and cancer adjunct and organ markers.</p>\n\n<h2>How it works in Zug</h2>\n<p>Because Longevity Plus and Elite include a concierge home visit, your blood draw can happen at your home or office anywhere in the Zug area \u2014 no clinic visit, no time carved out of the workday.</p>\n\n<h2>Pricing for Zug residents</h2>\n<p>Longevity Plus is CHF 995/year (135+ biomarkers). Aeonix Elite extends to 150+ biomarkers at CHF 1,295/year. Prime Health (100+ biomarkers, CHF 595/year) and Vital Edge (125+ biomarkers, CHF 795/year) are also available. <a href=\"/longevity-screening-zug.html\">Learn more \u2192</a></p>", "title_de": "Longevity-Vorsorge in Zug: Das Biomarker-Panel für Führungskräfte", "desc_de": "Das Longevity-Plus-Panel von Aeonix — 135+ ärztlich geprüfte Biomarker — ist jetzt in Zug verfügbar, mit Concierge-Hausbesuch für Führungskräfte. Ergebnisse in 48 Stunden.", "section_de": "Longevity-Wissenschaft", "body_de": "<p>Zug hat eine der höchsten Dichten an Firmengründern, Krypto-Unternehmern und Family Offices der ganzen Schweiz. Das Longevity-Plus-Panel von Aeonix bringt 135+ ärztlich geprüfte Biomarker direkt nach Zug.</p>\n\n<h2>Warum Longevity-Vorsorge in Zug wichtig ist</h2>\n<p>Gründerinnen und Führungskräfte im Crypto Valley haben oft unregelmässige Zeitpläne und anhaltend hohen Stress. Ein Standard-Schweizer-Check testet alle drei Jahre 12–20 Marker — bei weitem nicht genug, um die langsame biologische Drift zu erfassen.</p>\n\n<h2>Was das Longevity-Plus-Panel von Aeonix misst</h2>\n<p>135+ Biomarker in den Bereichen kardiovaskuläre Alterung, Stoffwechselfunktion, hormonelles Gleichgewicht, Nährstoffstatus sowie Krebs-Zusatz- und Organmarker.</p>\n\n<h2>Preise für Einwohner von Zug</h2>\n<p>Longevity Plus kostet CHF 995/Jahr (135+ Biomarker). Aeonix Elite erweitert auf 150+ Biomarker für CHF 1'295/Jahr. Prime Health (100+ Biomarker, CHF 595/Jahr) und Vital Edge (125+ Biomarker, CHF 795/Jahr) sind ebenfalls verfügbar. <a href=\"/longevity-vorsorge-zug.html\">Mehr erfahren →</a></p>", "title_fr": "Dépistage de la longévité à Zoug : le panel de biomarqueurs pour dirigeants", "desc_fr": "Le panel Longevity Plus d'Aeonix — 135+ biomarqueurs validés par un médecin — est désormais disponible à Zoug, avec collecte à domicile pour les dirigeants. Résultats en 48 heures.", "section_fr": "Science de la longévité", "body_fr": "<p>Zoug compte l'une des plus fortes concentrations de fondateurs d'entreprises, d'entrepreneurs de la crypto et de family offices de toute la Suisse. Le panel Longevity Plus d'Aeonix apporte 135+ biomarqueurs validés par un médecin directement à Zoug.</p>\n\n<h2>Pourquoi le dépistage de la longévité compte à Zoug</h2>\n<p>Les fondateurs et dirigeants de la Crypto Valley ont souvent des horaires irréguliers et un stress soutenu élevé. Un bilan suisse standard teste 12 à 20 marqueurs une fois tous les trois ans.</p>\n\n<h2>Ce que mesure le panel Longevity Plus d'Aeonix</h2>\n<p>135+ biomarqueurs couvrant le vieillissement cardiovasculaire, la fonction métabolique, l'équilibre hormonal, le statut nutritionnel et des marqueurs adjuvants du cancer.</p>\n\n<h2>Tarifs pour les résidents de Zoug</h2>\n<p>Longevity Plus coûte CHF 995/an (135+ biomarqueurs). Aeonix Elite s'étend à 150+ biomarqueurs pour CHF 1'295/an. Prime Health (100+ biomarqueurs, CHF 595/an) et Vital Edge (125+ biomarqueurs, CHF 795/an) sont également disponibles. <a href=\"/longevite-zoug.html\">En savoir plus →</a></p>", "title_it": "Screening della longevità a Zugo: il pannello per dirigenti", "desc_it": "Il pannello Longevity Plus di Aeonix — 135+ biomarcatori validati da un medico — è ora disponibile a Zugo, con raccolta a domicilio per i dirigenti. Risultati in 48 ore.", "section_it": "Scienza della longevità", "body_it": "<p>Zugo ha una delle più alte concentrazioni di fondatori d'azienda, imprenditori crypto e family office di tutta la Svizzera. Il pannello Longevity Plus di Aeonix porta 135+ biomarcatori validati da un medico direttamente a Zugo.</p>\n\n<h2>Perché lo screening della longevità è importante a Zugo</h2>\n<p>Fondatori e dirigenti della Crypto Valley tendono ad avere orari irregolari e stress elevato e prolungato. Un controllo svizzero standard testa 12–20 marcatori una volta ogni tre anni.</p>\n\n<h2>Cosa misura il pannello Longevity Plus di Aeonix</h2>\n<p>135+ biomarcatori che coprono l'invecchiamento cardiovascolare, la funzione metabolica, l'equilibrio ormonale, lo stato nutrizionale e i marcatori adiuvanti oncologici.</p>\n\n<h2>Prezzi per i residenti di Zugo</h2>\n<p>Longevity Plus costa CHF 995/anno (135+ biomarcatori). Aeonix Elite si estende a 150+ biomarcatori per CHF 1.295/anno. Prime Health (100+ biomarcatori, CHF 595/anno) e Vital Edge (125+ biomarcatori, CHF 795/anno) sono inoltre disponibili. <a href=\"/longevita-zugo.html\">Scopri di più →</a></p>" }];

// ── Smooth scroll ─────────────────────────────────
function smoothTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 74, behavior: 'smooth' });
}

// ── Nav scroll ────────────────────────────────────
window.addEventListener('scroll', function () {
  const nav = document.getElementById('main-nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── Mobile menu ───────────────────────────────────
function toggleMobile() {
  const m = document.getElementById('mobileMenu');
  const b = document.getElementById('burger');
  const open = m.classList.toggle('open');
  b.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
}
function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('burger').setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

// ── Language dropdown ─────────────────────────────
(function () {
  function initLang() {
    var t = document.getElementById('langTrigger'), d = document.getElementById('langDropdown');
    if (!t || !d) return;
    t.addEventListener('click', function (e) { e.stopPropagation(); var o = d.style.display === 'block'; d.style.display = o ? 'none' : 'block'; var a = t.querySelector('svg'); if (a) a.style.transform = o ? '' : 'rotate(180deg)'; });
    document.addEventListener('click', function () { d.style.display = 'none'; var a = t.querySelector('svg'); if (a) a.style.transform = ''; });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initLang); else initLang();
})();

// ── setLang ───────────────────────────────────────
function setLang(lang) {
  if (!T[lang]) return;
  curLang = lang;
  document.getElementById('langLabel').textContent = lang.toUpperCase();
  document.getElementById('langSelect').classList.remove('open');
  var _dd = document.getElementById('langDropdown'); if (_dd) _dd.style.display = 'none';
  document.documentElement.lang = lang;
  if (document.getElementById('articles-overlay').classList.contains('is-open')) { aoRender(); }
  const dict = T[lang];
  document.querySelectorAll('.ml-btn').forEach(function (b) {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  document.querySelectorAll('.lang-opt').forEach(function (b) {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const k = el.dataset.i18n;
    if (dict[k] !== undefined) el.textContent = dict[k];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    const k = el.dataset.i18nHtml;
    if (dict[k] !== undefined) el.innerHTML = dict[k];
  });
  buildFAQ(lang);
  buildMarquee(lang);
  updatePricingNote(lang);
}

function loadFooter() {
  var placeholder = document.getElementById('footer-placeholder');
  if (placeholder) {
    fetch('/footer.html?v=' + new Date().getTime())
      .then(function (response) { return response.text(); })
      .then(function (html) {
        placeholder.innerHTML = html;
        if (typeof curLang !== 'undefined' && curLang !== 'en') {
          setLang(curLang);
        }
      })
      .catch(function (err) { console.error('Failed to load footer', err); });
  }
}

// ── setLangUrl — language switching for privacy-policy / terms-of-use pages ────
// (Only these two page families ship per-language subdirectories. Every other
// page on the site keeps its own dedicated per-language filename/slug.)
function setLangUrl(lang) {
  var path = window.location.pathname;
  if (path.indexOf('/privacy-policy') > -1) {
    window.location.href = '/privacy-policy/' + lang;
    return;
  }
  if (path.indexOf('/terms-of-use') > -1) {
    window.location.href = '/terms-of-use/' + lang;
    return;
  }
  setLang(lang);
}

// ── Pricing toggle ────────────────────────────────
function swPrice(mode) {
  var panelOT = document.getElementById('panelOT');
  var panelSub = document.getElementById('panelSub');
  var btnOT = document.getElementById('tOT');
  var btnSub = document.getElementById('tSub');
  if (panelOT) panelOT.hidden = mode !== 'ot';
  if (panelSub) panelSub.hidden = mode !== 'sub';
  if (btnOT) btnOT.classList.toggle('on', mode === 'ot');
  if (btnSub) btnSub.classList.toggle('on', mode === 'sub');
  if (btnOT) {
    btnOT.setAttribute('aria-selected', String(mode === 'ot'));
    btnOT.tabIndex = mode === 'ot' ? 0 : -1;
  }
  if (btnSub) {
    btnSub.setAttribute('aria-selected', String(mode === 'sub'));
    btnSub.tabIndex = mode === 'sub' ? 0 : -1;
  }
  document.querySelectorAll('#panelSub .rv, #panelOT .rv').forEach(function (el) {
    el.classList.add('vis');
  });
}

// ── FAQ ───────────────────────────────────────────
function buildFAQ(lang) {
  var list = document.getElementById('faqList');
  if (!list) return;
  var dict = T[lang] || T.en;
  var items = dict['faq.items'] || T.en['faq.items'];
  list.innerHTML = items.map(function (item, i) {
    var num = (i + 1 < 10 ? '0' : '') + (i + 1);
    var bookLink = dict['faq.book'] || T.en['faq.book'];
    return '<div class="faq-item" id="faq-item-' + i + '">' +
      '<button class="faq-q" onclick="toggleFAQ(' + i + ')" aria-expanded="false">' +
      '<span class="faq-num">' + num + '</span>' +
      '<span class="faq-q-text">' + item.q + '</span>' +
      '<span class="faq-icon"><svg width="12" height="7" viewBox="0 0 12 7" fill="none"><path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>' +
      '</button>' +
      '<div class="faq-a" id="faq-a-' + i + '">' +
      '<div class="faq-a-inner">' + item.a + '<br><br><a href="#" onclick="smoothTo(\'pricing\'); return false;" class="faq-book-link">' + bookLink + '</a></div>' +
      '</div>' +
      '</div>';
  }).join('');
}
function toggleFAQ(i) {
  var item = document.getElementById('faq-item-' + i);
  var isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(function (it) {
    it.classList.remove('open');
    var btn = it.querySelector('.faq-q');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  });
  if (!isOpen) {
    item.classList.add('open');
    var btn = item.querySelector('.faq-q');
    if (btn) btn.setAttribute('aria-expanded', 'true');
  }
}

// ── Marquee ───────────────────────────────────────
function buildMarquee(lang) {
  var dict = T[lang] || T.en;
  var track = document.getElementById('marqueeTrack');
  if (!track) return;
  var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (i) {
    return dict['mq.' + i] || T.en['mq.' + i] || '';
  });
  var doubled = items.concat(items);
  track.innerHTML = doubled.map(function (txt) {
    return '<div class="m-item"><span class="m-dot"></span>' + txt + '</div>';
  }).join('');
}

// ── Pricing note ──────────────────────────────────
function updatePricingNote(lang) {
  var dict = T[lang] || T.en;
  var el = document.getElementById('pricingNote');
  if (el && dict['pricing.note']) el.innerHTML = dict['pricing.note'];
}

// ── AVA AI Chat ──────────────────────────────────
const AVA_CHAT_ENDPOINT = 'https://devswissapi.alleshealth.com/common/chatWithAI';
var avaChatSessionId = '';
var avaChatBusy = false;
var avaShowPrompts = true;

function escapeHTML(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function avaGenerateSessionId() {
  return String(Date.now()) + String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
}

function avaScrollLog() {
  var log = document.getElementById('ava-chat-log');
  if (log) log.scrollTop = log.scrollHeight;
}

function avaSetPromptVisibility(visible) {
  var prompts = document.getElementById('ava-chat-prompts-wrap');
  if (prompts) prompts.classList.toggle('is-hidden', !visible);
  avaShowPrompts = visible;
}

function avaSetIntroVisibility(visible) {
  var intro = document.getElementById('ava-chat-intro');
  if (intro) intro.classList.toggle('is-hidden', !visible);
}

function avaRenderReply(text) {
  var lines = String(text).split(/\r?\n/);
  var html = [];
  var inList = false;
  var currentItem = [];
  var currentParagraph = [];

  function formatInline(value) {
    var escaped = escapeHTML(value);
    escaped = escaped.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    escaped = escaped.replace(/(https?:\/\/[^\s<]+)/g, function (url) {
      return '<a href="' + url + '" target="_blank" rel="noopener noreferrer">' + url + '</a>';
    });
    return escaped;
  }

  function flushParagraph() {
    if (!currentParagraph.length) return;
    html.push('<p>' + formatInline(currentParagraph.join(' ')) + '</p>');
    currentParagraph = [];
  }

  function flushListItem() {
    if (!currentItem.length) return;
    html.push('<li>' + formatInline(currentItem.join(' ')) + '</li>');
    currentItem = [];
  }

  function closeList() {
    if (!inList) return;
    flushListItem();
    html.push('</ul>');
    inList = false;
  }

  lines.forEach(function (line) {
    var trimmed = line.trim();
    var bulletMatch = /^\*\s+(.+)$/.exec(trimmed);
    var isIndented = /^\s+/.test(line);

    if (!trimmed) {
      flushParagraph();
      if (!currentItem.length) closeList();
      return;
    }

    if (bulletMatch) {
      flushParagraph();
      if (!inList) {
        html.push('<ul class="ava-reply-list">');
        inList = true;
      }
      flushListItem();
      currentItem = [bulletMatch[1]];
      return;
    }

    if (inList && (isIndented || currentItem.length)) {
      currentItem.push(trimmed);
      return;
    }

    closeList();
    currentParagraph.push(trimmed);
  });

  flushParagraph();
  closeList();
  return html.join('');
}

function avaAddMessage(text, kind) {
  var log = document.getElementById('ava-chat-log');
  if (!log) return null;
  var msg = document.createElement('div');
  msg.className = 'ava-msg ' + (kind || 'bot');
  if (kind === 'bot') {
    msg.innerHTML = avaRenderReply(text);
  } else {
    msg.textContent = text;
  }
  log.appendChild(msg);
  avaScrollLog();
  return msg;
}

function avaSetBusy(isBusy) {
  avaChatBusy = isBusy;
  var input = document.getElementById('ava-chat-input');
  var send = document.getElementById('ava-chat-send');
  if (input) input.disabled = isBusy;
  if (send) send.disabled = isBusy;
}

function avaShowTypingState(show) {
  var log = document.getElementById('ava-chat-log');
  if (!log) return;
  var typing = document.getElementById('ava-typing-state');
  if (show) {
    if (!typing) {
      typing = document.createElement('div');
      typing.id = 'ava-typing-state';
      typing.className = 'ava-msg system ava-typing-state';
      typing.innerHTML = '<span class="ava-status-dots" aria-hidden="true"><span></span><span></span><span></span></span><span>Aeonix is reviewing your question...</span>';
      log.appendChild(typing);
    }
    typing.style.display = 'inline-flex';
    typing.style.alignSelf = 'flex-start';
    typing.style.marginRight = 'auto';
    log.appendChild(typing);
  } else if (typing) {
    typing.remove();
  }
  avaScrollLog();
}

function openAvaChat() {
  var overlay = document.getElementById('ava-chat-overlay');
  var log = document.getElementById('ava-chat-log');
  var input = document.getElementById('ava-chat-input');
  if (!overlay || !log) return;
  avaChatSessionId = avaGenerateSessionId();
  log.innerHTML = '';
  overlay.classList.add('is-open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  avaSetPromptVisibility(true);
  avaSetIntroVisibility(true);
  avaSetBusy(false);
  avaShowTypingState(false);
  avaScrollLog();
  if (input) {
    input.value = '';
    input.onkeydown = function (e) {
      if (e.key !== 'Enter') return;
      e.preventDefault();
      sendAvaMessage();
    };
    setTimeout(function () { input.focus(); }, 0);
  }
}

function closeAvaChat() {
  var overlay = document.getElementById('ava-chat-overlay');
  var input = document.getElementById('ava-chat-input');
  if (!overlay) return;
  overlay.classList.remove('is-open');
  overlay.setAttribute('aria-hidden', 'true');
  if (input) input.onkeydown = null;
  if (!document.getElementById('articles-overlay').classList.contains('is-open') && !document.getElementById('article-reader').classList.contains('is-open')) {
    document.body.style.overflow = '';
  }
}

function sendAvaPrompt(text) {
  var input = document.getElementById('ava-chat-input');
  if (input) input.value = text;
  sendAvaMessage(text);
}

async function sendAvaMessage(forcedText) {
  if (avaChatBusy) return;
  var input = document.getElementById('ava-chat-input');
  var message = typeof forcedText === 'string' ? forcedText : (input ? input.value.trim() : '');
  if (!message) return;
  if (!avaChatSessionId) avaChatSessionId = avaGenerateSessionId();

  avaSetPromptVisibility(false);
  avaSetIntroVisibility(false);
  avaAddMessage(message, 'user');
  if (input) input.value = '';
  avaSetBusy(true);
  avaShowTypingState(true);
  avaScrollLog();

  await new Promise(function (resolve) {
    requestAnimationFrame(function () {
      requestAnimationFrame(resolve);
    });
  });

  try {
    avaScrollLog();
    var response = await fetch(AVA_CHAT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message, sessionId: avaChatSessionId })
    });

    var raw = await response.text();
    var data = raw;
    try {
      data = raw ? JSON.parse(raw) : {};
    } catch (err) {
      data = raw;
    }

    if (!response.ok) {
      var errorText = typeof data === 'string' ? data : (data.error || data.message || 'Unable to reach AVA right now.');
      throw new Error(errorText);
    }

    var reply = typeof data === 'string'
      ? data
      : (data.response || data.message || data.reply || data.answer || data.data || 'No response returned.');

    avaAddMessage(reply, 'bot');
    avaScrollLog();
  } catch (error) {
    avaAddMessage(error && error.message ? error.message : 'Unable to reach AVA right now.', 'bot');
    avaScrollLog();
  } finally {
    avaSetBusy(false);
    avaShowTypingState(false);
  }
}

// ── Reveal on scroll ──────────────────────────────
function initReveal() {
  var wHeight = window.innerHeight;
  var reveals = Array.from(document.querySelectorAll('.rv'));
  var tops = reveals.map(function (el) { return el.getBoundingClientRect().top; });
  reveals.forEach(function (el, i) {
    if (tops[i] >= wHeight) el.classList.add('anim');
  });
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.05 });
  reveals.forEach(function (el) { obs.observe(el); });
}

// ── Anchor click handler ──────────────────────────
document.addEventListener('click', function (e) {
  var a = e.target.closest('a[href^="#"]');
  if (!a) return;
  var id = a.getAttribute('href').slice(1);
  if (!id) return;
  e.preventDefault();
  smoothTo(id);
});

// ════════════════════════════════════════════════════
// ARTICLES SYSTEM
// ════════════════════════════════════════════════════

var aoActiveSection = 'all';
var aoActiveQuery = '';

function openArticlesOverlay() {
  document.getElementById('articles-overlay').classList.add('is-open');
  document.body.style.overflow = 'hidden';
  aoRender();
  document.getElementById('articles-overlay').scrollTop = 0;
}

function closeArticlesOverlay() {
  document.getElementById('articles-overlay').classList.remove('is-open');
  if (!document.getElementById('article-reader').classList.contains('is-open')) {
    document.body.style.overflow = '';
  }
}

function openArticleReader(slug, skipHistory) {
  var article = null;
  for (var i = 0; i < ARTICLES.length; i++) { if (ARTICLES[i].slug === slug) { article = ARTICLES[i]; break; } }
  if (!article) return;
  var lang = (typeof curLang !== 'undefined' && curLang !== 'en') ? curLang : '';
  var title = (lang && article['title_' + lang]) ? article['title_' + lang] : article.title;
  var section = (lang && article['section_' + lang]) ? article['section_' + lang] : article.section;
  var bodyHtml = (lang && article['body_' + lang]) ? article['body_' + lang] : article.body;
  var ctas = { de: { h: 'Bereit, Ihre eigenen Werte zu kennen?', p: '100–150+ Biomarker je nach Plan. Ärztlich geprüfte Ergebnisse in 48 Stunden.', btn: 'Gründer-Spot sichern' }, fr: { h: 'Prêt à connaître vos propres valeurs ?', p: "100–150+ biomarqueurs selon le plan. Résultats validés en 48h.", btn: 'Réservez votre place' }, it: { h: 'Pronto a conoscere i tuoi valori?', p: '100–150+ biomarker secondo il piano. Risultati validati in 48 ore.', btn: 'Prenota il tuo posto' } };
  var cta = ctas[lang] || { h: 'Ready to know your own numbers?', p: '100–150+ biomarkers tested, depending on plan. Physician-reviewed results in 48 hours.', btn: 'Reserve Your Founding Spot' };
  var reader = document.getElementById('article-reader'), body = document.getElementById('ar-body');
  body.innerHTML = '<div style="margin-bottom:6px;font-size:.6rem;letter-spacing:.28em;text-transform:uppercase;color:' + (article.color || 'var(--gold)') + ';font-weight:500">' + section + '</div>' +
    '<h1>' + title + '</h1>' +
    '<div style="display:flex;gap:16px;font-size:.71rem;color:rgba(26,24,20,.4);margin:10px 0 32px;font-family:DM Sans,sans-serif"><span>' + (article.date || '') + '</span><span>·</span><span>' + (article.read_time || '') + '</span></div>' +
    bodyHtml + '<div class="ar-cta"><h3>' + cta.h + '</h3><p>' + cta.p + '</p>' +
    '<button class="btn-gold" onclick="closeAllOverlays();smoothTo(\'waitlist\')" style="border:none;cursor:pointer;padding:13px 32px;font-size:.73rem;font-weight:500;letter-spacing:.1em;text-transform:uppercase">' + cta.btn + '</button></div>';
  reader.classList.add('is-open'); reader.scrollTop = 0; document.body.style.overflow = 'hidden';
  if (!skipHistory) {
    history.pushState({ article: slug }, '', '/' + slug + '.html');
  }
}

function closeArticleReader(skipHistory) {
  document.getElementById('article-reader').classList.remove('is-open');
  if (!skipHistory && window.location.pathname !== '/') {
    history.pushState(null, '', '/');
  }
  // Keep articles overlay open if it was open
}

function closeAllOverlays(skipHistory) {
  document.getElementById('article-reader').classList.remove('is-open');
  document.getElementById('articles-overlay').classList.remove('is-open');
  document.body.style.overflow = '';
  if (skipHistory !== true && window.location.pathname !== '/') {
    history.pushState(null, '', '/');
  }
}

function aoRender() {
  var q = aoActiveQuery.toLowerCase(), lang = (typeof curLang !== 'undefined' && curLang !== 'en') ? curLang : '';
  var grid = document.getElementById('ao-grid'); if (!grid) return;
  var searchInp = document.getElementById('ao-search');
  if (searchInp) searchInp.placeholder = 'Search ' + ARTICLES.length + ' articles\u2026';
  var html = '', visible = 0;
  ARTICLES.forEach(function (a) {
    var title = (lang && a['title_' + lang]) ? a['title_' + lang] : a.title;
    var desc = (lang && a['desc_' + lang]) ? a['desc_' + lang] : a.desc;
    var section = (lang && a['section_' + lang]) ? a['section_' + lang] : a.section;
    var matchS = aoActiveSection === 'all' || a.section === aoActiveSection || a.section2 === aoActiveSection;
    var matchQ = !q || title.toLowerCase().includes(q) || desc.toLowerCase().includes(q) || section.toLowerCase().includes(q);
    if (!matchS || !matchQ) return;
    visible++;
    html += '<div class="ao-card" data-slug="' + a.slug + '" data-section="' + a.section + '" style="--accent:' + (a.color || 'var(--gold)') + '">' +
      '<a href="/articles/' + a.slug + '/" style="position:absolute;inset:0;z-index:0;opacity:0;font-size:0" tabindex="-1" aria-hidden="true">' + title + '</a>' +
      '<div class="ao-card-section">' + section + '</div>' +
      '<div class="ao-card-title">' + title + '</div>' +
      '<div class="ao-card-desc">' + desc + '</div>' +
      '<div class="ao-card-footer"><span>' + a.date + '</span><span class="ao-card-read">' + a.read_time + ' →</span></div>' +
      '</div>';
  });
  grid.innerHTML = html;
  var noRes = document.getElementById('ao-no-results');
  if (noRes) noRes.style.display = visible === 0 ? 'block' : 'none';
}

function aoSearch() {
  var inp = document.getElementById('ao-search');
  aoActiveQuery = inp ? inp.value : '';
  aoRender();
}

// Filter + card click via event delegation
document.addEventListener('click', function (e) {
  // Filter button
  var filterBtn = e.target.closest('.ao-filter-btn');
  if (filterBtn) {
    document.querySelectorAll('.ao-filter-btn').forEach(function (b) { b.classList.remove('active'); });
    filterBtn.classList.add('active');
    aoActiveSection = filterBtn.dataset.section;
    aoRender();
    return;
  }
  // Article card
  var card = e.target.closest('.ao-card');
  if (card && card.dataset.slug) {
    openArticleReader(card.dataset.slug);
    return;
  }
  // Blog card on homepage
  var blogCard = e.target.closest('.bcard[data-slug]');
  if (blogCard) {
    e.preventDefault();
    openArticleReader(blogCard.dataset.slug);
    return;
  }
});

// Keyboard: Escape closes overlays
document.addEventListener('keydown', function (e) {
  if (e.key !== 'Escape') return;
  if (document.getElementById('ava-chat-overlay') && document.getElementById('ava-chat-overlay').classList.contains('is-open')) {
    closeAvaChat();
  } else
    if (document.getElementById('article-reader').classList.contains('is-open')) {
      closeArticleReader();
    } else if (document.getElementById('articles-overlay').classList.contains('is-open')) {
      closeArticlesOverlay();
    }
});

window.addEventListener('popstate', function (e) {
  if (e.state && e.state.article) {
    openArticleReader(e.state.article, true);
  } else {
    closeAllOverlays(true);
  }
});

// ════════════════════════════════════════════════════
// WAITLIST SYSTEM
// ════════════════════════════════════════════════════

// const N8N_ACK_URL   = 'http://16.62.72.160:5678/webhook/aeonix-waitlist-ack';
const N8N_ACK_URL = 'https://n8n.aeonix.ch/webhook/aeonix-waitlist-ack';
const N8N_INVITE_URL = 'https://n8n.aeonix.ch/webhook/aeonix-waitlist-invite';
const NOTIFY_EMAIL = 'aeonix@alleshealth.com';
var wlRefCode = '';
var wlMemberEmail = '';
var wlMemberName = '';
var wlSpotsLeft = 453;

function genRefCode(email) {
  var hash = 0;
  var str = email.toLowerCase().trim() + 'aeonix2025';
  for (var i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  var chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
  var code = '';
  var n = Math.abs(hash);
  for (var j = 0; j < 7; j++) { code += chars[n % chars.length]; n = Math.floor(n / chars.length); }
  return code;
}

function readRefFromURL() {
  var params = new URLSearchParams(window.location.search);
  var ref = params.get('ref');
  if (ref) {
    var el = document.getElementById('wl-hidden-ref');
    if (el) el.value = ref;
    showRefBanner();
  }
}

function showRefBanner() {
  if (document.getElementById('wl-ref-banner')) return;
  var banner = document.createElement('div');
  banner.id = 'wl-ref-banner';
  banner.style.cssText = 'position:fixed;top:78px;left:0;right:0;z-index:190;background:rgba(184,134,78,.12);border-bottom:1px solid rgba(184,134,78,.25);padding:10px 24px;text-align:center;font-size:.74rem;color:rgba(255,255,255,.7);';
  banner.innerHTML = '<span style="color:var(--gold)">✦</span> You were personally invited to Aeonix. <strong style="color:#F7F4EF">Join now and save 10%</strong> on your first year. <button onclick="this.parentElement.remove()" style="background:none;border:none;color:rgba(255,255,255,.35);cursor:pointer;margin-left:12px">✕</button>';
  document.body.prepend(banner);
}

function initWaitlistProgress() {
  var fill = document.getElementById('wl-progress-fill');
  if (fill) fill.style.width = '0%';
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        setTimeout(function () { if (fill) fill.style.width = '77.35%'; }, 300);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  var sec = document.getElementById('waitlist');
  if (sec) obs.observe(sec);
  setInterval(function () {
    if (Math.random() < 0.15 && wlSpotsLeft > 2) {
      wlSpotsLeft--;
      var taken = 2000 - wlSpotsLeft;
      var el = document.getElementById('wl-spots-num');
      if (el) el.innerHTML = taken.toLocaleString('en') + '<span> / 2,000</span>';
      if (fill) fill.style.width = (taken / 2000 * 100).toFixed(2) + '%';
      var remEl = document.getElementById('wl-remaining-label');
      if (remEl) remEl.textContent = wlSpotsLeft + ' remaining';
    }
  }, 22000);
}

function wlSubmit(e) {
  e.preventDefault();
  var btn = document.getElementById('wl-submit-btn');
  var errEl = document.getElementById('wl-error');
  var fname = document.getElementById('wl-fname').value.trim();
  var lname = document.getElementById('wl-lname').value.trim();
  var email = document.getElementById('wl-email').value.trim();
  var plan = document.getElementById('wl-plan').value;
  var city = document.getElementById('wl-city') ? document.getElementById('wl-city').value.trim() : '';

  errEl.style.display = 'none';
  var gdprCheck = document.getElementById('wl-gdpr-check'); var gdprError = document.getElementById('wl-gdpr-error');
  if (gdprCheck && !gdprCheck.checked) { if (gdprError) gdprError.style.display = 'block'; return; } if (gdprError) gdprError.style.display = 'none';
  if (!fname || !lname || !email) {
    errEl.textContent = 'Please enter your first and last name and email address.';
    errEl.style.display = 'block';
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errEl.textContent = 'Please enter a valid email address.';
    errEl.style.display = 'block';
    return;
  }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'event': 'generate_lead', 'form_id': 'wl-form' });
  btn.classList.add('is-loading');
  btn.disabled = true;
  wlRefCode = genRefCode(email);
  wlMemberEmail = email;
  var fullName = fname;
  if (lname) fullName = fname + ' ' + lname;
  wlMemberName = fullName;
  var hubspotUtk = (document.cookie.match(/hubspotutk=([^;]+)/) || [])[1] || '';
  var hsContext = {
    pageUri: window.location.href,
    pageName: document.title
  };
  if (hubspotUtk) hsContext.hutk = hubspotUtk;
  var hsPayload = {
    fields: [
      { name: 'firstname', value: fname },
      { name: 'lastname', value: lname },
      { name: 'email', value: email },
      { name: 'state', value: plan || 'undecided' },
      { name: 'country', value: city || 'not specified' }
    ],
    context: hsContext,
    legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text: 'I agree that AllesHealth GmbH may store and process my personal data.'
      }
    }
  };
  console.log('[HubSpot] submit', {
    email: email,
    firstname: fname,
    lastname: lname,
    plan: plan || 'undecided',
    country: city || 'not specified'
  });
  fetch('https://api.hsforms.com/submissions/v3/integration/submit/245937692/f7f192f0-c51f-4f77-9cf2-ee482da19819', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(hsPayload)
  }).then(function (res) {
    return res.json().then(function (data) { return { ok: res.ok, data: data }; })
      .catch(function () { return { ok: res.ok, data: {} }; });
  }).then(function (result) {
    console.log('[HubSpot] response', result);
    if (result.ok) {
      fetch(N8N_ACK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: fname,
          lastName: lname,
          email: email,
          planInterest: plan || 'undecided',
          country: city || 'not specified'
        })
      }).catch(function (err) {
        console.error('[N8N] ack error', err);
      });
      wlShowSuccess(fname, email);
    } else {
      var msg = (result.data.errors && result.data.errors[0] && result.data.errors[0].message) || 'Something went wrong. Please try again.';
      errEl.textContent = msg;
      errEl.style.display = 'block';
      btn.classList.remove('is-loading');
      btn.disabled = false;
    }
  }).catch(function (err) {
    console.error('[HubSpot] error', err);
    errEl.textContent = 'Submission failed. Please try again.';
    errEl.style.display = 'block';
    btn.classList.remove('is-loading');
    btn.disabled = false;
  });
}

function wlShowSuccess(fname, email) {
  var wrap = document.getElementById('wl-form-wrap');
  var success = document.getElementById('wl-success');
  if (wrap) wrap.classList.add('is-hidden');
  if (success) success.classList.add('is-active');
  var num = 1547 + Math.floor(Math.random() * 4) + 1;
  var numEl = document.getElementById('wl-member-number');
  if (numEl) numEl.textContent = '#' + num.toLocaleString('en');
  var base = window.location.origin + window.location.pathname;
  var refUrl = base + (base.endsWith('/') ? '' : '/') + '?ref=' + wlRefCode;
  var urlEl = document.getElementById('wl-ref-url');
  if (urlEl) { urlEl.textContent = refUrl; urlEl.dataset.url = refUrl; }
  if (wlSpotsLeft > 0) wlSpotsLeft--;
  setTimeout(function () { if (success) success.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 200);
}

function wlCopyLink() {
  var urlEl = document.getElementById('wl-ref-url');
  var url = (urlEl && urlEl.dataset.url) || (urlEl && urlEl.textContent) || '';
  var copyFn = function () {
    var btn = document.getElementById('wl-copy-btn');
    if (!btn) return;
    var orig = btn.textContent;
    btn.textContent = '✓ Copied!';
    btn.classList.add('is-copied');
    setTimeout(function () { btn.textContent = orig; btn.classList.remove('is-copied'); }, 2500);
  };
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(copyFn).catch(function () {
      var el = document.createElement('textarea');
      el.value = url; document.body.appendChild(el); el.select();
      document.execCommand('copy'); document.body.removeChild(el);
      copyFn();
    });
  } else {
    var el = document.createElement('textarea');
    el.value = url; document.body.appendChild(el); el.select();
    document.execCommand('copy'); document.body.removeChild(el);
    copyFn();
  }
}

function wlSendInvites() {
  var errEl = document.getElementById('wl-invite-error');
  if (errEl) { errEl.style.display = 'none'; errEl.textContent = ''; }
  var sentEl = document.getElementById('wl-sent-confirm');
  if (sentEl && sentEl.classList.contains('is-shown')) {
    return;
  }
  if (!wlMemberEmail || !wlMemberName) {
    if (errEl) {
      errEl.textContent = 'Please join the waitlist first, then send invites.';
      errEl.style.display = 'block';
    }
    return;
  }
  var f1 = document.getElementById('wl-friend-1').value.trim();
  var f2 = document.getElementById('wl-friend-2').value.trim();
  var inviter = wlMemberEmail.trim().toLowerCase();
  var f1Norm = f1.toLowerCase();
  var f2Norm = f2.toLowerCase();
  if ((f1Norm && f1Norm === inviter) || (f2Norm && f2Norm === inviter)) {
    if (errEl) {
      errEl.textContent = 'Please enter a friend\'s email, not your own.';
      errEl.style.display = 'block';
    }
    return;
  }
  if (f1Norm && f2Norm && f1Norm === f2Norm) {
    if (errEl) {
      errEl.textContent = 'Please enter two different friend emails.';
      errEl.style.display = 'block';
    }
    return;
  }
  var rexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var friends = [f1, f2].filter(function (e) { return e && rexp.test(e); });
  if (!friends.length) {
    if (errEl) {
      errEl.textContent = 'Please enter at least one valid friend email.';
      errEl.style.display = 'block';
    }
    return;
  }
  var urlEl = document.getElementById('wl-ref-url');
  var refUrl = (urlEl && urlEl.dataset.url) || (urlEl && urlEl.textContent) || '';
  friends.forEach(function (friendEmail) {
    fetch(N8N_INVITE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source: 'aeonix-invite',
        inviterName: wlMemberName,
        inviterEmail: wlMemberEmail,
        friendEmail: friendEmail,
        referralLink: refUrl,
        subject: wlMemberName + ' invited you to Aeonix'
      })
    }).catch(function () { });
  });
  var fieldsEl = document.getElementById('wl-invite-fields');
  var inviteTitleEl = document.getElementById('wl-invite-title');
  var sendBtnEl = document.getElementById('wl-send-btn');
  if (sentEl) sentEl.classList.add('is-shown');
  if (fieldsEl) fieldsEl.style.display = 'none';
  if (inviteTitleEl) inviteTitleEl.style.display = 'none';
  if (sendBtnEl) sendBtnEl.style.display = 'none';
}

function wlShareWhatsApp() {
  var urlEl = document.getElementById('wl-ref-url');
  var refUrl = (urlEl && urlEl.dataset.url) || (urlEl && urlEl.textContent) || window.location.href;
  var msg = encodeURIComponent('I just secured a founding spot at Aeonix — advanced preventative health screening in Switzerland. 100+ biomarkers. Use my link and save 10%: ' + refUrl);
  window.open('https://wa.me/?text=' + msg, '_blank');
}
function wlShareEmail() {
  var urlEl = document.getElementById('wl-ref-url');
  var refUrl = (urlEl && urlEl.dataset.url) || (urlEl && urlEl.textContent) || window.location.href;
  var subject = encodeURIComponent(wlMemberName + ' invited you to Aeonix');
  var body = encodeURIComponent('I thought of you when I joined the Aeonix founding waitlist.\n\nAeonix is launching advanced preventative health screening in Switzerland — 100+ biomarkers, physician-reviewed in 48 hours.\n\nJoin via my link and get 10% off your first year:\n\n' + refUrl + '\n\nOnly ' + wlSpotsLeft + ' founding spots remain.\n\n— ' + wlMemberName);
  window.open('mailto:?subject=' + subject + '&body=' + body, '_blank');
}
function wlShareLinkedIn() {
  var urlEl = document.getElementById('wl-ref-url');
  var refUrl = (urlEl && urlEl.dataset.url) || (urlEl && urlEl.textContent) || window.location.href;
  window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(refUrl), '_blank');
}

// ── DOMContentLoaded — wire everything ────────────
document.addEventListener('DOMContentLoaded', function () {
  // Core site
  loadFooter();
  buildFAQ('en');
  buildMarquee('en');
  initWaitlistProgress();
  setTimeout(initReveal, 150);

  // Float button
  var floatBtn = document.getElementById('wl-float-btn');
  if (floatBtn) floatBtn.addEventListener('click', function () { smoothTo('waitlist'); });

  // Waitlist form submit
  var wlForm = document.getElementById('wl-form');
  if (wlForm) wlForm.addEventListener('submit', wlSubmit);

  // Pricing toggle
  var tOT = document.getElementById('tOT');
  var tSub = document.getElementById('tSub');
  var pOT = document.getElementById('panelOT');
  var pSub = document.getElementById('panelSub');
  function switchPanel(show) {
    if (show === 'ot') {
      pOT.style.display = ''; pSub.style.display = 'none';
      tOT.classList.add('on'); tSub.classList.remove('on');
    } else {
      pSub.style.display = ''; pOT.style.display = 'none';
      tSub.classList.add('on'); tOT.classList.remove('on');
    }
  }
  if (tOT) tOT.addEventListener('click', function () { switchPanel('ot'); });
  if (tSub) tSub.addEventListener('click', function () { switchPanel('sub'); });

  // Article cards delegation
  document.addEventListener('click', function (e) {
    var card = e.target.closest('.ao-card[data-slug]');
    if (card) { e.preventDefault(); openArticleReader(card.dataset.slug); return; }
    var bcard = e.target.closest('.bcard[data-slug]');
    if (bcard) { e.preventDefault(); openArticleReader(bcard.dataset.slug); return; }
  });

  // Set language: default to 'en', but detect 'de'/'fr'/'it' from the URL path
  // for pages that ship real per-language subdirectories (privacy-policy, terms-of-use).
  var LANGS = ['en', 'de', 'fr', 'it'];
  var pathSegments = window.location.pathname.split('/').filter(Boolean);
  var detectedLang = 'en';
  for (var i = 0; i < pathSegments.length; i++) {
    if (LANGS.indexOf(pathSegments[i].toLowerCase()) > -1) {
      detectedLang = pathSegments[i].toLowerCase();
      break;
    }
  }
  setLang(detectedLang);

  // Reveal
  setTimeout(initReveal, 150);

});
