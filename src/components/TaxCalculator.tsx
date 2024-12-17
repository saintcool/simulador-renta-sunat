import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { taxFields } from '../constants/taxFields';
import { calculateTax } from '../utils/calculations';
import { TaxInput, UIT_VALUE } from '../types/tax';
import { TaxField } from './TaxField';

export function TaxCalculator() {
  const [values, setValues] = useState<TaxInput>({});
  const [calculatedValues, setCalculatedValues] = useState<TaxInput>({});

  useEffect(() => {
    const result = calculateTax(values);
    setCalculatedValues(result);
  }, [values]);

  const handleInputChange = (id: string, value: string) => {
    const numValue = value === '' ? 0 : parseFloat(value);
    setValues(prev => ({
      ...prev,
      [id]: numValue
    }));
  };

  const getValue = (id: string) => {
    if (taxFields.find(field => field.id === id)?.readonly) {
      return calculatedValues[id]?.toFixed(2) || '0.00';
    }
    return values[id]?.toString() || '';
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Simulador de renta de cuarta y quinta categoría - 2024
        </h1>
        <div className="mb-8">
          <Badge variant="outline" className="text-lg py-2 px-4 bg-white text-black border-white/20">
            UIT: S/ {UIT_VALUE.toLocaleString('es-PE', { minimumFractionDigits: 2 })}
          </Badge>
        </div>

        <div className="space-y-4">
          {taxFields.map((field) => (
            <TaxField
              key={field.id}
              field={field}
              value={getValue(field.id)}
              onChange={handleInputChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
}