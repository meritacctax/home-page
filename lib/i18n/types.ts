export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
}

export interface WhyItem {
  icon: string;
  title: string;
  desc: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface Dict {
  nav: {
    services: string;
    why: string;
    industries: string;
    process: string;
    contact: string;
    consult: string;
  };
  lang: {
    toggle: string;
    current: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaConsult: string;
    ctaLine: string;
    trustline: string;
  };
  stats: StatItem[];
  services: {
    title: string;
    subtitle: string;
    cta: string;
    items: ServiceItem[];
  };
  why: {
    title: string;
    subtitle: string;
    items: WhyItem[];
  };
  industries: {
    title: string;
    subtitle: string;
    items: string[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  cta: {
    title: string;
    subtitle: string;
    call: string;
    line: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      phone: string;
      email: string;
      service: string;
      message: string;
      submit: string;
      placeholder: {
        name: string;
        phone: string;
        email: string;
        message: string;
      };
      serviceOptions: string[];
      successMsg: string;
      errorMsg: string;
    };
    info: {
      title: string;
      phones: string[];
      email: string;
      lineLabel: string;
      fbLabel: string;
      fbPage: string;
      address: string;
      addressNote: string;
      hours: string;
      hoursLabel: string;
      addressLabel: string;
    };
  };
  footer: {
    tagline: string;
    copy: string;
    links: {
      services: string;
      why: string;
      industries: string;
      process: string;
      contact: string;
    };
  };
  floating: {
    call: string;
    line: string;
    facebook: string;
  };
}
