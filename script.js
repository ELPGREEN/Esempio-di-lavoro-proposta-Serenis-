const translations = {
  it: {
    meta_description: "Proposta di partnership di Serenis per offrire servizi di salute mentale ai collaboratori della tua azienda.",
    header_title: "Proposta di Partnership",
    header_subtitle: "Ericson Piccoli – Serenis",
    greeting: "Ciao,",
    intro_1: "Sono Ericson Piccoli, responsabile dello sviluppo aziendale presso Serenis. Ti contatto perché credo che possiamo costruire insieme un progetto che generi un valore reale per i collaboratori di <strong>Esempio Azienda</strong>.",
    intro_2: "Serenis è una piattaforma italiana di salute mentale che offre psicoterapia online e in presenza con professionisti certificati. Ad oggi abbiamo realizzato oltre <strong>1 milione di sessioni</strong> e collaboriamo con aziende che, come la vostra, comprendono che la salute emotiva influisce direttamente sulle prestazioni e sulla fidelizzazione dei talenti.",
    proposal_title: "La mia proposta è semplice:",
    proposal_text: "Mappiamo le esigenze dei collaboratori, offriamo un accesso facilitato alla terapia e forniamo rapporti anonimi sull'utilizzo per il monitoraggio (sempre rispettando la privacy).",
    key_points_title: "Alcuni punti importanti:",
    key_points: [
      "Prima sessione sempre gratuita, senza barriere d'ingresso.",
      "Prezzo fisso per sessione (49€), senza abbonamento obbligatorio.",
      "Possibilità di sovvenzione parziale o totale da parte dell'azienda.",
      "Beneficio fiscale: deducibile come investimento in benessere aziendale.",
      "Assistenza con un linguaggio accessibile, tecnologia agile e supporto umano."
    ],
    outro: "Ho esperienza nello sviluppo di soluzioni su misura e nella presentazione di proposte adattate alla realtà di ogni azienda. Se ha senso per te, possiamo fissare una breve conversazione (15 minuti) per capire meglio la vostra situazione e valutare come procedere.",
    testimonials_title: "Cosa dicono di Serenis",
    testimonials_quote: "“Serenis ha trasformato il benessere dei nostri collaboratori! Le sessioni hanno migliorato la concentrazione e la produttività del team.”",
    testimonials_cite: "– Azienda Partner",
    cta_button: "Fissa una conversazione",
    form_title: "Fissa una Conversazione",
    form_name_label: "Nome:",
    form_name_placeholder: "Il tuo nome",
    form_email_label: "E-mail:",
    form_email_placeholder: "La tua e-mail",
    form_message_label: "Messaggio:",
    form_message_placeholder: "Scrivi il tuo messaggio (es.: vorrei fissare una conversazione di 15 minuti)",
    form_submit: "Invia Messaggio",
    contact_intro: "Rimango a disposizione,",
    contact_role: "Sviluppo Aziendale | Serenis",
    contact_email_tooltip: "Invia un'e-mail",
    contact_linkedin_tooltip: "Visita il profilo LinkedIn",
    contact_linkedin_label: "CV professionale | LinkedIn",
    footer: "© 2025 Serenis - 01:39 AM CEST, Giovedì 15 Maggio 2025",
    theme_toggle_label: "Alterna modalità scura",
    lang_toggle_label: "Cambia lingua"
  },
  en: {
    meta_description: "Serenis partnership proposal to offer mental health services to your company's employees.",
    header_title: "Partnership Proposal",
    header_subtitle: "Ericson Piccoli – Serenis",
    greeting: "Hello,",
    intro_1: "I am Ericson Piccoli, Business Development Executive at Serenis. I am reaching out because I believe we can collaborate on a project that delivers real value to the employees of <strong>Example Company</strong>.",
    intro_2: "Serenis is an Italian mental health platform offering online and in-person psychotherapy with certified professionals. To date, we have conducted over <strong>1 million sessions</strong> and work with companies that, like yours, understand that emotional health directly impacts performance and talent retention.",
    proposal_title: "My proposal is simple:",
    proposal_text: "We map the needs of your employees, provide easy access to therapy, and deliver anonymous usage reports for monitoring (always respecting privacy).",
    key_points_title: "Some key points:",
    key_points: [
      "First session always free, with no entry barriers.",
      "Fixed price per session (€49), no mandatory subscription.",
      "Possibility of partial or full subsidy by the company.",
      "Tax benefit: deductible as an investment in corporate well-being.",
      "Support with accessible language, agile technology, and humanized assistance."
    ],
    outro: "I have experience in developing tailored solutions and presenting proposals adjusted to each company's reality. If it makes sense, we can schedule a quick 15-minute conversation to better understand your situation and discuss next steps.",
    testimonials_title: "What they say about Serenis",
    testimonials_quote: "“Serenis has transformed our employees' well-being! The sessions have improved the team's focus and productivity.”",
    testimonials_cite: "– Partner Company",
    cta_button: "Schedule a conversation",
    form_title: "Schedule a Conversation",
    form_name_label: "Name:",
    form_name_placeholder: "Your name",
    form_email_label: "E-mail:",
    form_email_placeholder: "Your e-mail",
    form_message_label: "Message:",
    form_message_placeholder: "Write your message (e.g., I would like to schedule a 15-minute conversation)",
    form_submit: "Send Message",
    contact_intro: "I remain at your disposal,",
    contact_role: "Business Development | Serenis",
    contact_email_tooltip: "Send an e-mail",
    contact_linkedin_tooltip: "Visit LinkedIn profile",
    contact_linkedin_label: "Professional CV | LinkedIn",
    footer: "© 2025 Serenis - 01:39 AM CEST, Thursday, May 15, 2025",
    theme_toggle_label: "Toggle dark mode",
    lang_toggle_label: "Change language"
  }
};

let currentLang = 'it'; // Idioma padrão
const languages = ['it', 'en'];

// Função para aplicar traduções
function applyTranslations(lang) {
  console.log(`Aplicando idioma: ${lang}`);
  document.documentElement.setAttribute('lang', lang);
  
  // Atualizar meta description e título
  document.getElementById('meta-description').setAttribute('content', translations[lang].meta_description);
  document.getElementById('page-title').textContent = `${translations[lang].header_title} | Ericson Piccoli – Serenis`;
  
  // Atualizar textos
  document.querySelectorAll('[id]').forEach(element => {
    const key = element.id.replace(/-/g, '_');
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
  
  // Atualizar listas (key_points)
  document.querySelectorAll('#key-points span').forEach((element, index) => {
    element.textContent = translations[lang].key_points[index];
  });
  
  // Atualizar placeholders
  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.getAttribute('data-key');
    element.setAttribute('placeholder', translations[lang][key]);
  });
  
  // Atualizar tooltips
  document.getElementById('contact-email-tooltip').setAttribute('tooltip', translations[lang].contact_email_tooltip);
  document.getElementById('contact-linkedin-tooltip').setAttribute('tooltip', translations[lang].contact_linkedin_tooltip);
  
  // Atualizar aria-labels
  document.getElementById('theme-toggle').setAttribute('aria-label', translations[lang].theme_toggle_label);
  document.getElementById('lang-toggle').setAttribute('aria-label', translations[lang].lang_toggle_label);
  
  // Atualizar indicador visual do botão de idioma
  const langToggle = document.getElementById('lang-toggle');
  langToggle.classList.remove('it', 'en');
  langToggle.classList.add(lang);
}

// Detectar idioma do navegador e carregar idioma inicial
window.addEventListener('load', () => {
  // Detectar idioma do navegador
  const browserLang = navigator.language.split('-')[0];
  const savedLang = localStorage.getItem('lang');
  currentLang = savedLang || (languages.includes(browserLang) ? browserLang : 'it');
  
  applyTranslations(currentLang);
});

// Alternar modo escuro
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const icon = themeToggle.querySelector('i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});

// Alternar idioma
const langToggle = document.getElementById('lang-toggle');
langToggle.addEventListener('click', () => {
  const currentIndex = languages.indexOf(currentLang);
  currentLang = languages[(currentIndex + 1) % languages.length];
  localStorage.setItem('lang', currentLang);
  applyTranslations(currentLang);
});

// Rolagem suave para o formulário
document.querySelector('.cta a').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#contact-form').scrollIntoView({ behavior: 'smooth' });
});

// Efeito de Ripple nos botões
document.querySelectorAll('.cta a, .contact-form button').forEach(button => {
  button.addEventListener('click', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    button.classList.add('ripple');
  });
});