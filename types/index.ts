export interface Country {
  name: string
  full_name?: string
  capital: string
  iso2: string
  iso3: string
  covid19: Covid19
  current_president?: President
  currency: string
  phone_code: string
  continent?: string
  description?: string
  size: string
  independence_date?: string
  population: string
  href: {
    self: string
    states: string
    presidents: string
    flag: string
  }
}

export interface Covid19 {
  total_case: string
  total_deaths: string
  last_updated: string
}

export interface President {
  name: string
  gender: string
  appointment_start_date: string
  appointment_end_date: any
  href: {
    self: string
    country: string
    picture: string
  }
}

export interface CountryDetails {
  name: string
  full_name: string
  capital: string
  iso2: string
  iso3: string
  covid19: Covid19
  population: string
  href: {
    self: string
    states: string
    presidents: string
    flag: string
  }
}

export interface Fact {
  id: string
  text: string
  source: string
  source_url: string
  language: string
  permalink: string
}