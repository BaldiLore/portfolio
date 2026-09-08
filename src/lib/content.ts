// Contenuti del portfolio, bilingue IT/EN.
// Dati reali di Lorenzo Baldi (mappati dal portfolio Angular precedente).

import type { Lang, PortfolioContent } from './types';

export const LANGS: Lang[] = ['it', 'en'];

const it: PortfolioContent = {
  heroKicker: 'SOFTWARE DEVELOPER',
  heroName: 'Lorenzo Baldi',
  heroFirstName: 'Lorenzo',
  heroLastName: 'Baldi',
  heroRole: 'Software Developer & Team Leader',
  manifesto: [
    'Tech Lead e sviluppatore backend con oltre {years} anni di esperienza nella progettazione di applicazioni enterprise per la Pubblica Amministrazione.',
    'Specializzato nello stack Java/Spring (Spring Boot) e Oracle DB, guido la modernizzazione di sistemi legacy monolitici verso architetture a microservizi cloud-native su Kubernetes, dalla progettazione alla delivery, garantendo qualità del codice e continuità operativa sui sistemi esistenti.',
    'Oracle Certified Associate (Java SE), coordino il team di sviluppo con attività di mentoring e crescita delle risorse junior.',
  ],
  heroData: [
    { label: 'Età', value: '{age} anni' },
    { label: 'Nazionalità', value: 'Italiana' },
    { label: 'Località', value: 'Roma' },
  ],

  ctaContact: 'Contattami',
  cvUrl: '/curriculum.pdf',
  cvLabel: 'CV',
  detailsLabel: 'Dettagli',
  currentBadge: 'ATTUALE',
  featuredLabel: 'In risalto',
  respLabel: 'Responsabilità',
  resultLabel: 'Risultati',
  overviewLabel: 'Panoramica',
  doneLabel: 'Cosa è stato fatto',
  showMore: '+ Mostra più',
  showLess: '— Mostra meno',

  nav: [
    { label: 'Presentazione', href: '#hero' },
    { label: 'Esperienza', href: '#esperienza' },
    { label: 'Istruzione', href: '#istruzione' },
    { label: 'Certificazioni', href: '#certificazioni' },
    { label: 'Progetti', href: '#progetti' },
    { label: 'Competenze', href: '#competenze' },
    { label: 'Contatti', href: '#contatti' },
  ],
  titleExperience: 'Esperienza',
  titleEducation: 'Istruzione',
  titleCert: 'Certificazioni',
  titleProjects: 'Progetti',
  titleSkills: 'Competenze',
  titleContact: 'Contatti',
  digitalLabel: 'Competenze digitali',
  langLabel: 'Competenze linguistiche',

  experience: [
    {
      company: 'Sistemi Informativi',
      initials: 'SI',
      logo: '/logos/sistemi.jpeg',
      current: true,
      period: 'Giu 2024 — Presente',
      roles: [
        {
          title: 'Tech Lead',
          period: 'Feb 2025 — Presente',
          desc: 'Guido tecnicamente un team variabile di sviluppatori su stream di sviluppo paralleli, presidiando scelte architetturali e standard di qualità dalla progettazione alla delivery.',
          long: [
            'Guido tecnicamente un team variabile di sviluppatori su stream di sviluppo paralleli, presidiando scelte architetturali e standard di qualità dalla progettazione alla delivery nella modernizzazione di applicazioni enterprise per la Pubblica Amministrazione.',
            'Ho standardizzato code review e linee guida architetturali trasversali agli stream, garantendo coerenza tecnica e riducendo le divergenze implementative tra i team.',
            `Curo l'interfaccia tecnica verso cliente e referenti funzionali, traducendo requisiti in scelte architetturali e coordinando prioritizzazione e reporting delle issue.`,
            'Affianco le risorse junior con attività di mentoring, supportandone la crescita tecnica.',
          ],
        },
        {
          title: 'Application Developer — Java & Web Technologies',
          period: 'Giu 2024 — Feb 2025',
          desc: 'Ho contribuito allo sviluppo backend della modernizzazione delle applicazioni legacy, realizzando Rest API in Java/Spring Boot in ambiente Kubernetes, con focus su sviluppo e qualità del codice.',
          long: [
            'Ho contribuito allo sviluppo backend nell\'ambito di un progetto di modernizzazione di applicazioni legacy verso un\'architettura a microservizi, progettando e realizzando REST API in Java (Spring Boot) containerizzate e orchestrate su Kubernetes.',
            'Ho curato la qualità del codice attraverso code review, definizione di best practice di sviluppo e attività di refactoring, contribuendo inoltre a scelte architetturali relative a persistenza dati, gestione delle transazioni e integrazione tra i vari moduli applicativi.'
          ],
        },
      ],
      tags: ['Java 8/21', 'Spring Boot 3/4', 'OracleDB', 'PostgreSql', 'MongoDB', 'Kubernetes', 'Leadership'],
      hasLink: false,
    },
    {
      company: 'I&M Consulting',
      initials: 'IM',
      logo: '/logos/im.png',
      current: false,
      period: 'Ott 2023 — Giu 2024',
      roles: [
        {
          title: 'Java Developer',
          period: 'Ott 2023 — Giu 2024',
          desc: 'Ho progettato e sviluppato Rest API in Java e Spring per applicativi della Pubblica Amministrazione.',
          long: 'Ho progettato e sviluppato Rest API in Java e Spring per applicativi della Pubblica Amministrazione, contribuendo alla realizzazione e reingegnerizzazione di circa 5 applicativi.',
        },
      ],
      tags: ['Java 8', 'Spring Boot 3', 'Angular', 'OracleDB', 'DB2'],
      hasLink: false,
    },
    {
      company: 'Solving Team',
      initials: 'ST',
      logo: '/logos/solvingteam.jpeg',
      current: false,
      period: 'Dic 2021 — Ott 2023',
      roles: [
        {
          title: 'Java Full-Stack Developer',
          period: 'Dic 2021 — Ott 2023',
          desc: `Ho progettato e sviluppato applicativi end-to-end per la Pubblica Amministrazione: Rest API in Java/Spring sul backend e interfacce Angular sul frontend, curando l'intero ciclo dallo sviluppo al rilascio.`,
          long: `Ho progettato e sviluppato applicativi end-to-end per la Pubblica Amministrazione: Rest API in Java/Spring sul backend e interfacce Angular sul frontend, curando l'intero ciclo dallo sviluppo al rilascio.`,
        },
        {
          title: 'DevOps',
          period: 'Dic 2021 — Nov 2022',
          desc: `Ho introdotto e configurato l'infrastruttura di delivery cloud per la distribuzione di applicativi client-server, dove in precedenza non era presente: ambiente AWS per i progetti interni e OpenShift per i clienti.`,
          long: [
            `Ho introdotto e configurato l'infrastruttura di delivery cloud per la distribuzione di applicativi client-server, dove in precedenza non era presente: ambiente AWS per i progetti interni Solving Team e OpenShift per i clienti.`,
            'Ho definito e mantenuto lo stack di build e deploy, automatizzando la distribuzione e standardizzando gli ambienti di rilascio.',
          ],
        },
      ],
      tags: ['Java 8', 'Spring Boot 3', 'MySql', 'OracleDB', 'DB2', 'Angular', 'AWS', 'OpenShift', 'Jenkins'],
      hasLink: false,
    },
  ],

  education: [
    {
      period: 'Ott 2021 — Dic 2021',
      title: 'Corso Java Full-Stack',
      place: 'Solving Team — Roma',
      desc: 'Corso intensivo di dieci settimane con taglio pratico sullo sviluppo full-stack: applicazioni Java/Spring lato backend e Angular lato frontend, con esercitazioni progettuali su Maven, Tomcat e MySQL.',
    },
    {
      period: 'Set 2014 — Giu 2019',
      title: 'Diploma di scuola superiore, Informatica',
      place: 'IIS Meucci — Massa',
      desc: 'Percorso formativo incentrato su programmazione (C++, Java), programamzione web, basi di dati, reti di calcolatori, sistemi operativi e sviluppo di sistemi informativi, con attività di laboratorio orientate alla progettazione e realizzazione di applicazioni software.',
    },
  ],

  certsFeatured: [
    {
      name: 'Oracle Certified Associate, Java SE 8 Programmer',
      issuer: 'Oracle',
      date: 'Mag 2023',
      url: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=DFB6F8E23048C429E31BF33AEF273C1FD2C0C4B96A83FE8CF57DFC1E576B2DF7',
    },
    {
      name: 'EFSet English Certificate',
      issuer: 'Education First',
      date: 'Ott 2024',
      url: 'https://cert.efset.org/it/MRdvuT',
    },
  ],
  certsMore: [
    {
      name: 'Lifelong Professional Skills',
      issuer: 'IBM',
      date: 'Set 2026',
      url: 'https://www.credly.com/badges/c85cc2bb-d34b-4108-9924-1a2e180967a8/public_url',
    },
    {
      name: 'Docker Essentials: A Developer Introduction',
      issuer: 'IBM',
      date: 'Giu 2025',
      url: 'https://www.credly.com/badges/622f4a05-212a-42d8-b212-03c7994f2f7e/public_url',
    },
    {
      name: 'Project Management Fundamentals',
      issuer: 'IBM',
      date: 'Gen 2025',
      url: 'https://www.credly.com/badges/294b329c-da82-45c2-bf78-4f774ba58fd9/public_url',
    },
    {
      name: 'CS50: Introduction to Computer Science',
      issuer: 'Università di Harvard',
      date: 'Mag 2022',
      url: 'https://certificates.cs50.io/1193c614-c2c3-4b7f-b05c-59f75b5e434c.pdf?size=letter',
    },
    { name: 'Entando Professional Developer', issuer: 'Entando Inc.', date: 'Mar 2022', url: '' },
  ],

  filterLabels: { all: 'Tutti', pro: 'Professionali', perso: 'Personali' },
  projects: [
    {
      kind: 'pro',
      title: 'Roma Capitale — Dipartimento Risorse Economiche',
      client: 'Cliente: Roma Capitale',
      period: 'Giu 2024 — Presente',
      dateRange: 'Giu 2024 — Presente',
      desc: 'Modernizzazione di applicazioni monolitiche legacy Java per il DRE: upgrade a Spring Boot e migrazione verso Kubernetes in cloud.',
      tags: ['Java 8/21', 'Spring Boot 3/4', 'OracleDB', 'PostgreSql', 'MongoDB', 'Kubernetes', 'Leadership'],
      long: [
        `Modernizzazione completa di applicazioni monolitiche legacy Java per il DRE di Roma Capitale: aggiornamento all'ultima versione di Java, adozione di Spring Boot e migrazione verso un'architettura a microservizi su Kubernetes in ambiente cloud, con focus su performance, scalabilità e manutenibilità.`,
        `Presidio le scelte architetturali principali, bilanciando l'evoluzione dei sistemi legacy con l'adozione di tecnologie attuali, e coordinamento dela gestione delle criticità e degli interventi evolutivi sui sistemi esistenti.`,
      ],
      highlights: [
        'Ruolo: Sviluppatore backend, Tech Lead e decision maker tecnico',
        'Modernizzati e migrati 4 applicativi su Kubernetes',
        'Completate 7 modifiche evolutive e molteplici adeguative',
      ],
    },
    {
      kind: 'pro',
      title: `CED Interforze — Ministero dell'Interno`,
      client: 'Cliente: Accenture',
      period: 'Nov 2022 — Giu 2024',
      dateRange: 'Nov 2022 — Giu 2024',
      desc: 'Realizzazione, manutenzione e reingegnerizzazione di applicativi per il Dipartimento della Pubblica Sicurezza.',
      tags: ['Java 8', 'Spring Boot 3', 'Angular', 'OracleDB', 'DB2'],
      long: [
        'Realizzazione, manutenzione e reingegnerizzazione di applicativi per il Dipartimento della Pubblica Sicurezza, comprendenti sia strumenti interni per l\'amministrazione del portale internet e la gestione delle varie applicazioni in esso presenti, sia applicazioni destinate all\'utilizzo operativo sul campo e presso gli uffici delle forze dell\'ordine.',
      ],
      highlights: [
        'Ruolo: Sviluppatore backend.',
        'Reingegnerizzati 2 applicativi pre-esistenti.',
        'Sviluppati 3 applicativi nuovi.',
        'Sviluppata applicazione per la gestione delle denunce di persone scomparse e per il ritrovamento di cadaveri, identificati e non.',
        'Applicazione per la gestione dei controlli ai posti di blocco.'
      ],
    },
    {
      kind: 'pro',
      title: `SME — Stato Maggiore dell'Esercito`,
      client: `Cliente: Stato Maggiore dell'Esercito`,
      period: 'Apr 2022 — Nov 2022',
      dateRange: 'Apr 2022 — Nov 2022',
      desc: 'Supporto tecnico DevOps al COM.C4.EI nello sviluppo, pubblicazione e manutenzione di applicativi su Entando e OpenShift.',
      tags: ['Entando', 'OpenShift', 'DevOps', 'OracleDB'],
      long: 'Supporto tecnico DevOps al COM.C4.EI nello sviluppo, pubblicazione e manutenzione di applicativi su Entando e OpenShift, nell\'ambito di un progetto finalizzato a dotare la Forza Armata di un\'infrastruttura in intranet per lo sviluppo e la pubblicazione dei portali dei vari reparti dell\'Esercito.',
      highlights: [
        'Ruolo: DevOps',
        `Creata infrastruttura cloud (OpenShift) per ospitare siti intranet per centinaia di reparti dell'esercito`,
      ],
    },
    {
      kind: 'pro',
      title: 'Solving Team — Co.Ge.',
      client: 'Cliente: Solving Team',
      period: 'Dic 2021 — Mar 2022',
      dateRange: 'Dic 2021 — Mar 2022',
      desc: 'Sviluppo di una piattaforma interna per la gestione amministrativa aziendale.',
      tags: ['Java 8', 'Spring 3', 'Angular', 'MySql', 'AWS'],
      long: 'Sviluppo di una piattaforma interna per la gestione amministrativa aziendale.',
      highlights: ['Ruolo: Sviluppatore Full-Stack', 'Piattaforma rilasciata e adottata internamente'],
    },
    {
      kind: 'perso',
      title: 'SnackOn',
      client: 'Freelance',
      period: 'Gen 2019 — Mar 2020',
      dateRange: 'Gen 2019 — Mar 2020',
      desc: 'Sviluppo di un\'applicazione per la gestione delle ordinazioni delle merende degli studenti dell\'istituto.',
      tags: ['HTML', 'CSS', 'Javascript', 'PHP', 'JQuery', 'MySql', 'Aruba'],
      long: [
        'Sviluppo di un\'applicazione per la gestione delle ordinazioni delle merende degli studenti dell\'istituto, con l\'obiettivo di informatizzare il processo, includendo la gestione degli acquisti direttamente in app.',
        'Il progetto ha previsto la realizzazione di un\'applicazione nativa Android, di una componente web, di un backoffice dedicato ai fornitori e di una dashboard per la visualizzazione delle statistiche.'
      ],
      highlights: ['Ruolo: Sviluppatore Full-Stack', 'Piattaforma rilasciata e adottata internamente'],
    },
    {
      kind: 'perso',
      title: 'Social Tech Care',
      client: 'Cliente: Consiglio Nazionale delle Ricerche',
      period: 'Feb 2018 — Ott 2018',
      dateRange: 'Feb 2018 — Ott 2018',
      desc: 'Nell\'ambito del progetto "Social Tech Care" (alternanza scuola-lavoro supervisionata dal CNR di Pisa), ho contribuito allo sviluppo di un servizio per il monitoraggio di anziani residenti in zone remote.',
      tags: ['HTML', 'CSS', 'Javascript', 'MySql'],
      long: [
        'Nell\'ambito del progetto "Social Tech Care" (alternanza scuola-lavoro promossa dall\'Istituto di Informatica e Telematica del CNR di Pisa, in collaborazione con gli istituti "Da Vinci-Fascetti" di Pisa, "Marconi" di Pontedera e "Meucci" di Massa), ho contribuito allo sviluppo di un servizio per il monitoraggio a distanza di anziani soli e case sparse in zone isolate o montane, con l\'obiettivo di supportare popolazioni residenti in aree difficili da raggiungere ed esposte a rischi come calamità naturali e dissesto idrogeologico.',
        'La piattaforma prevedeva l\'integrazione di diversi sensori (movimento, temperatura, umidità) collegati in rete a una centrale di monitoraggio, con un\'architettura personalizzabile e a basso costo, pensata per essere installata presso Comuni o associazioni di Protezione Civile.',
        'È stato realizzato un primo prototipo con sensori di allagamento, presentato durante la Notte dei Ricercatori di Pisa; il progetto ha inoltre vinto il premio Unioncamere 2018/2019 come miglior esperienza di alternanza scuola-lavoro.'
      ],
      highlights: ['Ruolo: Sviluppatore Full-Stack', 'Piattaforma prototipata'],
      linkUrl:
        'https://www.cnr.it/sites/default/files/public/media/rassegna_stampa/Rep_Scienze_Il_sensore_che_protegge_chi_vive_in_zone_isolate_12-12-2019.pdf',
      linkLabel: 'Rassegna stampa',
    },
  ],

  skills: [
    { name: 'Java', pct: 92, levelLabel: 'Avanzato' },
    { name: 'Spring (Boot, Data, REST, Security)', pct: 90, levelLabel: 'Avanzato' },
    { name: 'SQL', pct: 85, levelLabel: 'Avanzato' },
    { name: 'Angular', pct: 70, levelLabel: 'Intermedio' },
    { name: 'DevOps', pct: 68, levelLabel: 'Intermedio' },
    { name: 'Team Leading', pct: 87, levelLabel: 'Avanzato' },
  ],
  languages: [
    { name: 'Italiano', level: 'Madrelingua', detail: 'Lingua madre' },
    { name: 'Inglese', level: 'C1', detail: 'Ascolto C2 · Lettura C2 · Conversazione B2 · Scrittura C1' },
  ],

  contactHeadline: 'Lavoriamo insieme?',
  contactSub:
    'Sono sempre aperto a nuove opportunità e collaborazioni interessanti. Scrivimi pure.',
  contacts: [
    { label: 'Email', href: 'mailto:lorenzobaldi.dev@proton.me' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/%F0%9F%92%BBlorenzo-baldi-709b70202/' },
    { label: 'GitHub', href: 'https://github.com/BaldiLore' },
  ],
  footer: '© 2026 Lorenzo Baldi — Costruito con cura.',
};

// Versione inglese: traduzione letterale dei contenuti italiani.
const en: PortfolioContent = {
  ...it,
  heroKicker: 'SOFTWARE DEVELOPER',
  heroRole: 'Software Developer & Team Leader',
  manifesto: [
    'Tech Lead and backend developer with over {years} years of experience designing enterprise applications for the Public Administration.',
    'Specialized in the Java/Spring (Spring Boot) and Oracle DB stack, I lead the modernization of monolithic legacy systems towards cloud-native microservice architectures on Kubernetes, from design to delivery, ensuring code quality and operational continuity on existing systems.',
    'Oracle Certified Associate (Java SE), I coordinate the development team with mentoring and growth of junior resources.',
  ],
  heroData: [
    { label: 'Age', value: '{age} years' },
    { label: 'Nationality', value: 'Italian' },
    { label: 'Location', value: 'Rome' },
  ],

  ctaContact: 'Get in touch',
  cvLabel: 'CV',
  detailsLabel: 'Details',
  currentBadge: 'CURRENT',
  featuredLabel: 'Featured',
  respLabel: 'Responsibilities',
  resultLabel: 'Results',
  overviewLabel: 'Overview',
  doneLabel: 'What was done',
  showMore: '+ Show more',
  showLess: '— Show less',

  nav: [
    { label: 'About', href: '#hero' },
    { label: 'Experience', href: '#esperienza' },
    { label: 'Education', href: '#istruzione' },
    { label: 'Certifications', href: '#certificazioni' },
    { label: 'Projects', href: '#progetti' },
    { label: 'Skills', href: '#competenze' },
    { label: 'Contact', href: '#contatti' },
  ],
  titleExperience: 'Experience',
  titleEducation: 'Education',
  titleCert: 'Certifications',
  titleProjects: 'Projects',
  titleSkills: 'Skills',
  titleContact: 'Contact',
  digitalLabel: 'Digital skills',
  langLabel: 'Languages',

  experience: [
    {
      company: 'Sistemi Informativi',
      initials: 'SI',
      logo: '/logos/sistemi.jpeg',
      current: true,
      period: 'Jun 2024 — Present',
      roles: [
        {
          title: 'Tech Lead',
          period: 'Feb 2025 — Present',
          desc: 'I provide technical leadership to a variable team of developers across parallel development streams, owning architectural choices and quality standards from design to delivery.',
          long: [
            'I provide technical leadership to a variable team of developers across parallel development streams, owning architectural choices and quality standards from design to delivery, in the modernization of enterprise applications for the Public Administration.',
            'I standardized code reviews and cross-stream architectural guidelines, ensuring technical consistency and reducing implementation divergences between teams.',
            'I manage the technical interface with the client and functional stakeholders, translating requirements into architectural choices and coordinating prioritization and issue reporting.',
            'I support junior resources with mentoring, fostering their technical growth.',
          ],
        },
        {
          title: 'Application Developer — Java & Web Technologies',
          period: 'Jun 2024 — Feb 2025',
          desc: 'I contributed to the backend development of the legacy application modernization, building REST APIs in Java/Spring Boot on Kubernetes, with a focus on development and code quality.',
          long: [
            'I contributed to the backend development within a project to modernize legacy applications towards a microservice architecture, designing and building REST APIs in Java (Spring Boot), containerized and orchestrated on Kubernetes.',
            'I ensured code quality through code reviews, the definition of development best practices and refactoring activities, also contributing to architectural choices regarding data persistence, transaction management and integration between the various application modules.',
          ],
        },
      ],
      tags: ['Java 8/21', 'Spring Boot 3/4', 'OracleDB', 'PostgreSql', 'MongoDB', 'Kubernetes', 'Leadership'],
      hasLink: false,
    },
    {
      company: 'I&M Consulting',
      initials: 'IM',
      logo: '/logos/im.png',
      current: false,
      period: 'Oct 2023 — Jun 2024',
      roles: [
        {
          title: 'Java Developer',
          period: 'Oct 2023 — Jun 2024',
          desc: 'I designed and developed REST APIs in Java and Spring for Public Administration applications.',
          long: 'I designed and developed REST APIs in Java and Spring for Public Administration applications, contributing to the creation and re-engineering of around 5 applications.',
        },
      ],
      tags: ['Java 8', 'Spring Boot 3', 'Angular', 'OracleDB', 'DB2'],
      hasLink: false,
    },
    {
      company: 'Solving Team',
      initials: 'ST',
      logo: '/logos/solvingteam.jpeg',
      current: false,
      period: 'Dec 2021 — Oct 2023',
      roles: [
        {
          title: 'Java Full-Stack Developer',
          period: 'Dec 2021 — Oct 2023',
          desc: 'I designed and developed end-to-end applications for the Public Administration: REST APIs in Java/Spring on the backend and Angular interfaces on the frontend, handling the whole cycle from development to release.',
          long: 'I designed and developed end-to-end applications for the Public Administration: REST APIs in Java/Spring on the backend and Angular interfaces on the frontend, handling the whole cycle from development to release.',
        },
        {
          title: 'DevOps',
          period: 'Dec 2021 — Nov 2022',
          desc: 'I introduced and configured the cloud delivery infrastructure for distributing client-server applications, where none existed before: AWS for internal projects and OpenShift for clients.',
          long: [
            `I introduced and configured the cloud delivery infrastructure for distributing client-server applications, where none existed before: AWS for Solving Team's internal projects and OpenShift for clients.`,
            'I defined and maintained the build and deploy stack, automating distribution and standardizing release environments.',
          ],
        },
      ],
      tags: ['Java 8', 'Spring Boot 3', 'MySql', 'OracleDB', 'DB2', 'Angular', 'AWS', 'OpenShift', 'Jenkins'],
      hasLink: false,
    },
  ],

  education: [
    {
      period: 'Oct 2021 — Dec 2021',
      title: 'Java Full-Stack Course',
      place: 'Solving Team — Rome',
      desc: 'Intensive ten-week course with a practical focus on full-stack development: Java/Spring applications on the backend and Angular on the frontend, with project exercises on Maven, Tomcat and MySQL.',
    },
    {
      period: 'Sep 2014 — Jun 2019',
      title: 'High School Diploma, Computer Science',
      place: 'IIS Meucci — Massa',
      desc: 'Educational path focused on programming (C++, Java), web programming, databases, computer networks, operating systems and information systems development, with lab activities oriented to the design and creation of software applications.',
    },
  ],

  certsFeatured: [
    {
      name: 'Oracle Certified Associate, Java SE 8 Programmer',
      issuer: 'Oracle',
      date: 'May 2023',
      url: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=DFB6F8E23048C429E31BF33AEF273C1FD2C0C4B96A83FE8CF57DFC1E576B2DF7',
    },
    {
      name: 'EFSet English Certificate',
      issuer: 'Education First',
      date: 'Oct 2024',
      url: 'https://cert.efset.org/it/MRdvuT',
    },
  ],
  certsMore: [
    {
      name: 'Lifelong Professional Skills',
      issuer: 'IBM',
      date: 'Sep 2026',
      url: 'https://www.credly.com/badges/c85cc2bb-d34b-4108-9924-1a2e180967a8/public_url',
    },
    {
      name: 'Docker Essentials: A Developer Introduction',
      issuer: 'IBM',
      date: 'Jun 2025',
      url: 'https://www.credly.com/badges/622f4a05-212a-42d8-b212-03c7994f2f7e/public_url',
    },
    {
      name: 'Project Management Fundamentals',
      issuer: 'IBM',
      date: 'Jan 2025',
      url: 'https://www.credly.com/badges/294b329c-da82-45c2-bf78-4f774ba58fd9/public_url',
    },
    {
      name: 'CS50: Introduction to Computer Science',
      issuer: 'Harvard University',
      date: 'May 2022',
      url: 'https://certificates.cs50.io/1193c614-c2c3-4b7f-b05c-59f75b5e434c.pdf?size=letter',
    },
    { name: 'Entando Professional Developer', issuer: 'Entando Inc.', date: 'Mar 2022', url: '#' },
  ],

  filterLabels: { all: 'All', pro: 'Professional', perso: 'Personal' },
  projects: [
    {
      kind: 'pro',
      title: 'Roma Capitale — Economic Resources Department',
      client: 'Client: Roma Capitale',
      period: 'Jun 2024 — Present',
      dateRange: 'Jun 2024 — Present',
      desc: 'Modernization of monolithic legacy Java applications for the ERD: upgrade to Spring Boot and migration to Kubernetes in the cloud.',
      tags: ['Java 8/21', 'Spring Boot 3/4', 'OracleDB', 'PostgreSql', 'MongoDB', 'Kubernetes', 'Leadership'],
      long: [
        'Complete modernization of monolithic legacy Java applications for the Economic Resources Department of Roma Capitale: upgrading to the latest Java version, adopting Spring Boot and migrating to a microservice architecture on Kubernetes in a cloud environment, with a focus on performance, scalability and maintainability.',
        'I own the main architectural choices, balancing the evolution of legacy systems with the adoption of current technologies, and I coordinate the management of critical issues and evolutionary changes on existing systems.',
      ],
      highlights: [
        'Role: backend developer, Tech Lead and technical decision maker',
        '4 applications modernized and migrated to Kubernetes',
        '7 evolutionary changes and multiple corrective ones completed',
      ],
    },
    {
      kind: 'pro',
      title: 'CED Interforze — Ministry of the Interior',
      client: 'Client: Accenture',
      period: 'Nov 2022 — Jun 2024',
      dateRange: 'Nov 2022 — Jun 2024',
      desc: 'Creation, maintenance and re-engineering of applications for the Department of Public Safety.',
      tags: ['Java 8', 'Spring Boot 3', 'Angular', 'OracleDB', 'DB2'],
      long: [
        'Creation, maintenance and re-engineering of applications for the Department of Public Safety, including both internal tools for administering the web portal and managing the various applications within it, and applications intended for operational use in the field and at law enforcement offices.',
      ],
      highlights: [
        'Role: backend developer.',
        '2 existing applications re-engineered.',
        '3 new applications developed.',
        'Developed an application for managing missing person reports and the recovery of bodies, identified and unidentified.',
        'Application for managing checks at roadblocks.',
      ],
    },
    {
      kind: 'pro',
      title: 'SME — General Staff of the Italian Army',
      client: 'Client: General Staff of the Italian Army',
      period: 'Apr 2022 — Nov 2022',
      dateRange: 'Apr 2022 — Nov 2022',
      desc: 'DevOps technical support to COM.C4.EI in the development, deployment and maintenance of applications on Entando and OpenShift.',
      tags: ['Entando', 'OpenShift', 'DevOps', 'OracleDB'],
      long: `DevOps technical support to COM.C4.EI in the development, deployment and maintenance of applications on Entando and OpenShift, within a project aimed at providing the Armed Force with an intranet infrastructure for the development and publishing of the portals of the various Army units.`,
      highlights: [
        'Role: DevOps',
        'Built a cloud infrastructure (OpenShift) to host intranet sites for hundreds of army units',
      ],
    },
    {
      kind: 'pro',
      title: 'Solving Team — Co.Ge.',
      client: 'Client: Solving Team',
      period: 'Dec 2021 — Mar 2022',
      dateRange: 'Dec 2021 — Mar 2022',
      desc: `Development of an internal platform for the company's administrative management.`,
      tags: ['Java 8', 'Spring 3', 'Angular', 'MySql', 'AWS'],
      long: `Development of an internal platform for the company's administrative management.`,
      highlights: ['Role: Full-Stack Developer', 'Platform released and adopted internally'],
    },
    {
      kind: 'perso',
      title: 'SnackOn',
      client: 'Freelance',
      period: 'Jan 2019 — Mar 2020',
      dateRange: 'Jan 2019 — Mar 2020',
      desc: `Development of an application for managing students' snack orders at the school.`,
      tags: ['HTML', 'CSS', 'Javascript', 'PHP', 'JQuery', 'MySql', 'Aruba'],
      long: [
        `Development of an application for managing students' snack orders at the school, with the goal of digitizing the process, including managing purchases directly in the app.`,
        'The project involved building a native Android application, a web component, a dedicated back office for suppliers and a dashboard for viewing statistics.',
      ],
      highlights: ['Role: Full-Stack Developer', 'Platform released and adopted internally'],
    },
    {
      kind: 'perso',
      title: 'Social Tech Care',
      client: 'Client: National Research Council',
      period: 'Feb 2018 — Oct 2018',
      dateRange: 'Feb 2018 — Oct 2018',
      desc: `As part of the "Social Tech Care" project (a school-work programme supervised by the CNR of Pisa), I contributed to developing a service for monitoring elderly people living in remote areas.`,
      tags: ['HTML', 'CSS', 'Javascript', 'MySql'],
      long: [
        `As part of the "Social Tech Care" project (a school-work programme promoted by the Institute of Informatics and Telematics of the CNR of Pisa, in collaboration with the "Da Vinci-Fascetti" institute of Pisa, "Marconi" of Pontedera and "Meucci" of Massa), I contributed to developing a service for the remote monitoring of elderly people living alone and scattered houses in isolated or mountainous areas, with the goal of supporting people living in hard-to-reach areas exposed to risks such as natural disasters and hydrogeological instability.`,
        'The platform integrated various sensors (motion, temperature, humidity) networked to a monitoring centre, with a customizable, low-cost architecture designed to be installed at municipalities or Civil Protection associations.',
        `A first prototype with flood sensors was built and presented during the Pisa Researchers' Night; the project also won the Unioncamere 2018/2019 award as the best school-work experience.`,
      ],
      highlights: ['Role: Full-Stack Developer', 'Prototyped platform'],
      linkUrl:
        'https://www.cnr.it/sites/default/files/public/media/rassegna_stampa/Rep_Scienze_Il_sensore_che_protegge_chi_vive_in_zone_isolate_12-12-2019.pdf',
      linkLabel: 'Press article',
    },
  ],

  skills: [
    { name: 'Java', pct: 92, levelLabel: 'Advanced' },
    { name: 'Spring (Boot, Data, REST, Security)', pct: 90, levelLabel: 'Advanced' },
    { name: 'SQL', pct: 85, levelLabel: 'Advanced' },
    { name: 'Angular', pct: 70, levelLabel: 'Intermediate' },
    { name: 'DevOps', pct: 68, levelLabel: 'Intermediate' },
    { name: 'Team Leading', pct: 87, levelLabel: 'Advanced' },
  ],
  languages: [
    { name: 'Italian', level: 'Native', detail: 'Mother tongue' },
    { name: 'English', level: 'C1', detail: 'Listening C2 · Reading C2 · Speaking B2 · Writing C1' },
  ],

  contactHeadline: 'Let’s work together?',
  contactSub:
    'I’m always open to new opportunities and interesting collaborations. Feel free to reach out.',
  contacts: [
    { label: 'Email', href: 'mailto:lorenzobaldi.dev@proton.me' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/%F0%9F%92%BBlorenzo-baldi-709b70202/' },
    { label: 'GitHub', href: 'https://github.com/BaldiLore' },
  ],
  footer: '© 2026 Lorenzo Baldi — Crafted with care.',
};

const DICTS: Record<Lang, PortfolioContent> = { it, en };

export function isLang(value: string): value is Lang {
  return (LANGS as string[]).includes(value);
}

export function getContent(lang: Lang): PortfolioContent {
  // I segnaposto {age}/{years} restano nelle stringhe: vengono calcolati lato
  // client all'apertura del sito, sulla data del visitatore (vedi Portfolio.tsx).
  return DICTS[lang];
}
