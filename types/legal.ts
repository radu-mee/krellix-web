export interface LegalSection {
  title: string;
  paragraphs: readonly string[];
}

export interface LegalPage {
  label: string;
  title: string;
  updatedAt: string;
  sections: readonly LegalSection[];
}

