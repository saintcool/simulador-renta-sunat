export interface TaxInput {
  [key: string]: number;
}

export interface TaxField {
  id: string;
  label: string;
  readonly: boolean;
  explanation: string;
  idLabel: string;
}

export const UIT_VALUE = 5150; // 2024 UIT value