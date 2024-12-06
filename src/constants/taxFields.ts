import { TaxField } from '../types/tax';

export const taxFields: TaxField[] = [
  {
    id: 'cas-107',
    label: 'Renta Bruta obtenida por el ejercicio individual (Profesión, arte, ciencia u oficio)',
    readonly: false,
    explanation: 'test',
    idLabel: '107'
  },
  {
    id: 'cas-507',
    label: 'Deducción (20% del monto consignado en la Cas. 107 - Máximo S/ 100,800)',
    readonly: true,
    explanation: 'test',
    idLabel: '507'
  },
  {
    id: 'cas-508',
    label: 'Renta Neta obtenida por el ejercicio individual (Profesión, arte, ciencia u oficio)* Cas.107-Cas.507',
    readonly: true,
    explanation: 'test',
    idLabel: '508'
  },
  {
    id: 'cas-108',
    label: 'Otras Rentas de cuarta categoría',
    readonly: false,
    explanation: 'test',
    idLabel: '108'
  },
  {
    id: 'cas-509',
    label: 'Total rentas de cuarta categoría (Cas. 508 + Cas. 108)',
    readonly: true,
    explanation: 'test',
    idLabel: '509'
  },
  {
    id: 'cas-111',
    label: 'Total rentas de quinta categoría',
    readonly: false,
    explanation: 'test',
    idLabel: '111'
  },
  {
    id: 'cas-510',
    label: 'Total rentas de cuarta y quinta categoría (Cas. 509 + Cas. 111)',
    readonly: false,
    explanation: 'test',
    idLabel: '510'
  },
  {
    id: 'cas-511',
    label: 'Deducción de 7 UIT (Hasta el límite resultante de la Cas. 510)',
    readonly: true,
    explanation: 'test',
    idLabel: '511'
  },
  {
    id: 'cas-A',
    label: '- Alquiler de bienes inmuebles.',
    readonly: false,
    explanation: 'test',
    idLabel: 'A'
  },
  {
    id: 'cas-B',
    label: '- Gastos en restaurantes, hoteles, bares.',
    readonly: false,
    explanation: 'test',
    idLabel: 'B'
  },
  {
    id: 'cas-C',
    label: '- Médicos y odontólogos y servicios de profesionales independientes.',
    readonly: false,
    explanation: 'test',
    idLabel: 'C'
  },
  {
    id: 'cas-D',
    label: '- Aportaciones a Essalud de trabajadores del hogar',
    readonly: false,
    explanation: 'test',
    idLabel: 'D'
  },
  {
    id: 'cas-ABC',
    label: 'DEDUCCION ADICIONAL (3 UIT)',
    readonly: true,
    explanation: 'test',
    idLabel: 'ABC'
  },
  {
    id: 'cas-512',
    label: 'TOTAL RENTA NETA DE CUARTA Y QUINTA CATEGORÍA Cas. 510 - Cas. 511 - Cas. ABC)',
    readonly: true,
    explanation: 'test',
    idLabel: '512'
  },
  {
    id: 'cas-522',
    label: 'Deducción por Impuesto a las Transacciones Financieras – ITF',
    readonly: false,
    explanation: 'test',
    idLabel: '522'
  },
  {
    id: 'cas-MD',
    label: 'MONTO DE DONACIONES',
    readonly: false,
    explanation: 'test',
    idLabel: 'MD'
  },
  {
    id: 'cas-519',
    label: 'Deducción por Donaciones',
    readonly: true,
    explanation: 'test',
    idLabel: '519'
  },
  {
    id: 'cas-513',
    label: 'Sub total Cas. 512 - (Cas. 522 + Cas. 519)',
    readonly: true,
    explanation: 'test',
    idLabel: '513'
  },
  {
    id: 'cas-116',
    label: 'Renta Neta de Fuente Extranjera',
    readonly: false,
    explanation: 'test',
    idLabel: '116'
  },
  {
    id: 'cas-517',
    label: 'Total Renta Imponible de Trabajo y Fuente Extranjera',
    readonly: true,
    explanation: 'test',
    idLabel: '517'
  },
  {
    id: 'cas-120',
    label: 'Impuesto a la Renta',
    readonly: true,
    explanation: 'test',
    idLabel: '120'
  },
  {
    id: 'cas-IPE',
    label: 'IMPUESTO PAGADO EN EL EXTERIOR',
    readonly: false,
    explanation: 'test',
    idLabel: 'IPE'
  },
  {
    id: 'cas-122',
    label: 'Crédito por Impuesto a la Renta de Fuente Extranjera',
    readonly: true,
    explanation: 'test',
    idLabel: '122'
  },
  {
    id: 'cas-158',
    label: 'Subtotal',
    readonly: true,
    explanation: 'test',
    idLabel: '158'
  },
  {
    id: 'cas-563',
    label: 'Saldo a favor del ejercicio 2023',
    readonly: false,
    explanation: 'test',
    idLabel: '563'
  },
  {
    id: 'cas-564',
    label: 'Saldo a favor del ejercicio 2023 aplicado en el ejercicio 2024',
    readonly: false,
    explanation: 'test',
    idLabel: '564'
  },
  {
    id: 'cas-565',
    label: 'Saldo a favor del ejercicio 2023 aplicado en el ejercicio 2025',
    readonly: false,
    explanation: 'test',
    idLabel: '565'
  },
  {
    id: 'cas-125',
    label: 'Saldo a favor del período anterior',
    readonly: true,
    explanation: 'test',
    idLabel: '125'
  },
  {
    id: 'cas-127',
    label: 'Pago directo del Impuesto a la Renta por Rentas del Trabajo',
    readonly: false,
    explanation: 'test',
    idLabel: '127'
  },
  {
    id: 'cas-128',
    label: 'Pago directo del Impuesto a la Renta de quinta categoría',
    readonly: false,
    explanation: 'test',
    idLabel: '128'
  },
  {
    id: 'cas-130',
    label: 'Impuesto retenido sobre rentas de Cuarta Categoría',
    readonly: false,
    explanation: 'test',
    idLabel: '130'
  },
  {
    id: 'cas-131',
    label: 'Impuesto retenido sobre rentas de quinta categoría',
    readonly: false,
    explanation: 'test',
    idLabel: '131'
  },
  {
    id: 'cas-141',
    label: 'A favor del contribuyente',
    readonly: true,
    explanation: 'test',
    idLabel: '141'
  },
  {
    id: 'cas-142',
    label: 'A favor del fisco',
    readonly: true,
    explanation: 'test',
    idLabel: '142'
  },
  {
    id: 'cas-144',
    label: 'Pagos contra el saldo a favor del fisco, realizados antes de la presentación de este formulario',
    readonly: false,
    explanation: 'test',
    idLabel: '144'
  },
  {
    id: 'cas-145',
    label: 'Interés Moratorio',
    readonly: false,
    explanation: 'test',
    idLabel: '145'
  },
  {
    id: 'cas-146',
    label: 'Saldo de la Deuda Tributaria',
    readonly: true,
    explanation: 'test',
    idLabel: '146'
  }
];