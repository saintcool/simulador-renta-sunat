import { TaxField } from '../types/tax';

export const taxFields: TaxField[] = [
  {
    id: 'cas-107',
    label: 'Renta Bruta obtenida por el ejercicio individual (Profesión, arte, ciencia u oficio)',
    readonly: false,
    explanation: 'Sumatoria del monto total de los ingresos por comprobantes de Pago obtenidos en la tarea Obtención del Archivo Personalizado y los ingresos que el contribuyente registre adicionalmente en la declaración.',
    idLabel: '107'
  },
  {
    id: 'cas-507',
    label: 'Deducción (20% del monto consignado en la Cas. 107 - Máximo 24 UITs)',
    readonly: true,
    explanation: '20% de la Cas 107 hasta un máximo de 24 UITs',
    idLabel: '507'
  },
  {
    id: 'cas-508',
    label: 'Renta Neta obtenida por el ejercicio individual (Profesión, arte, ciencia u oficio)* Cas.107-Cas.507',
    readonly: true,
    explanation: 'Cas 107 - Cas 507',
    idLabel: '508'
  },
  {
    id: 'cas-108',
    label: 'Otras Rentas de cuarta categoría',
    readonly: false,
    explanation: 'Sumatoria de dietas percibidas y otros comprobantes obtenidos según la definición de la tarea Obtención  del Archivo Personalizado y los  ingresos que el contribuyente registre adicionalmente en la declaración.',
    idLabel: '108'
  },
  {
    id: 'cas-509',
    label: 'Total rentas de cuarta categoría (Cas. 508 + Cas. 108)',
    readonly: true,
    explanation: 'Cas 508 + Cas 108',
    idLabel: '509'
  },
  {
    id: 'cas-111',
    label: 'Total rentas de quinta categoría',
    readonly: false,
    explanation: 'Sumatoria de la Base Imponible de Renta de Quinta Categoría obtenidos según la definición de la tarea Obtención  del Archivo Personalizado y las rentas que el contribuyente registre adicionalmente en la declaración.',
    idLabel: '111'
  },
  {
    id: 'cas-510',
    label: 'Total rentas de cuarta y quinta categoría (Cas. 509 + Cas. 111)',
    readonly: true,
    explanation: 'Cas 509 + Cas 111',
    idLabel: '510'
  },
  {
    id: 'cas-511',
    label: 'Deducción de 7 UIT (Hasta el límite resultante de la Cas. 510)',
    readonly: true,
    explanation: '',
    idLabel: '511'
  },
  {
    id: 'cas-A',
    label: '- Alquiler de bienes inmuebles.',
    readonly: false,
    explanation: 'Ingrese la suma total de los pagos por alquileres. Solo será válido hasta el 30% del total de estos gastos.',
    idLabel: 'A'
  },
  {
    id: 'cas-B',
    label: '- Gastos en restaurantes, hoteles, bares.',
    readonly: false,
    explanation: 'Ingrese la suma total de los pagos en restaurantes, hoteles y bares. Son válidos el 15% de los gastos',
    idLabel: 'B'
  },
  {
    id: 'cas-C',
    label: '- Médicos y odontólogos y servicios de profesionales independientes.',
    readonly: false,
    explanation: 'Ingrese la suma total de los pagos por los servicios. Solo será válido hasta el 30% del total de estos gastos.',
    idLabel: 'C'
  },
  {
    id: 'cas-D',
    label: '- Aportaciones a Essalud de trabajadores del hogar',
    readonly: false,
    explanation: 'Ingrese la suma total de los pagos por Essalud. Son válidos el 100% de los gastos.',
    idLabel: 'D'
  },
  {
    id: 'cas-ABC',
    label: 'DEDUCCION ADICIONAL (3 UIT)',
    readonly: true,
    explanation: 'En la casilla ABC se debe mostrar la sumatoria de los conceptos deducibles siendo la deducción máxima de 3 UITs (adicionales) en S/  12,600. El monto límite para esta casilla es 3 UIT (S/ 12,600).',
    idLabel: 'ABC'
  },
  {
    id: 'cas-512',
    label: 'TOTAL RENTA NETA DE CUARTA Y QUINTA CATEGORÍA Cas. 510 - Cas. 511 - Cas. ABC)',
    readonly: true,
    explanation: 'Cas. 510 – Cas. 511 – Cas. ABC',
    idLabel: '512'
  },
  {
    id: 'cas-522',
    label: 'Deducción por Impuesto a las Transacciones Financieras – ITF',
    readonly: false,
    explanation: 'ITF imputado en el ejercicio al contribuyente, por las entidades del sistema financiero de acuerdo a lo obtenido según la definición de la tarea Obtención del Archivo Personalizado y el ITF que ingresa el contribuyente por su parte. OBS.: en el caso de rentas de trabajo la deducción tendrá como límite la Renta Imponible de Trabajo y Fuente Extranjera sin considerar la renta correspondiente a la de Quinta Categoría, de ser el caso (Cas 517 - Cas 111) según art 19° D.S. N° 150-2007-EF (T.U.O. de la Ley para la Lucha contra la Evasión y para la Formalización de la Economía). Si Cas 522 > Cas 509 mostrar el siguiente mensaje: &quot;el valor de la casilla 522 (ITF) no puede ser mayor a la renta de cuarta categoría (casilla 509) (casillas ubicadas en el rubro Rentas de Trabajo y/o Fuente Extranjera)&quot;',
    idLabel: '522'
  },
  {
    id: 'cas-MD',
    label: 'MONTO DE DONACIONES',
    readonly: false,
    explanation: '',
    idLabel: 'MD'
  },
  {
    id: 'cas-519',
    label: 'Deducción por Donaciones',
    readonly: true,
    explanation: 'El valor de la Cas 519 (Donaciones) no puede ser mayor al 10% de la suma de la Renta Neta de Cuarta y Quinta Categorías (Cas 512) y la Renta neta de Fuente Extranjera (Cas 116). El total se redondea. Validación del límite: Si Cas 519 <= 10% (Cas 512 + Cas 116) entonces Cas 519 = Cas 519. Si Cas 519 > 10% (Cas 512 + Cas 116) mostrar el siguiente mensaje: “El valor de la casilla 519 (Donaciones) no puede ser mayor al 10% de la suma de la Renta Neta de Cuarta y Quinta Categorías (casilla 512) y la Renta neta de fuente extranjera (casilla 116).',
    idLabel: '519'
  },
  {
    id: 'cas-513',
    label: 'Sub total Cas. 512 - (Cas. 522 + Cas. 519)',
    readonly: true,
    explanation: 'Cas 512 – (Cas 522 + Cas 519). Si Cas 513 < 0 entonces Cas 513=0.',
    idLabel: '513'
  },
  {
    id: 'cas-116',
    label: 'Renta Neta de Fuente Extranjera',
    readonly: false,
    explanation: '',
    idLabel: '116'
  },
  {
    id: 'cas-517',
    label: 'Total Renta Imponible de Trabajo y Fuente Extranjera',
    readonly: true,
    explanation: 'Cas 513 + Cas 116',
    idLabel: '517'
  },
  {
    id: 'cas-120',
    label: 'Impuesto a la Renta',
    readonly: true,
    explanation: 'Si Cas 517=0 entonces Cas 120=0 • Hasta 5 UIT (21,000) se aplica tasa 8%, • Por el exceso de 5 UIT y hasta 20 UIT (84,000)  se aplica tasa de 14% sobre el exceso, • Por el exceso de 20 UIT y hasta 35 UIT (147,000)  se aplica tasa de 17% sobre el exceso, • Por el exceso de 35 UIT y hasta 45 UIT (189,000)  se aplica tasa de 20% sobre el exceso, • Por el exceso de 45 UIT se aplica tasa del 30% sobre el exceso  *Ajustar la fórmula con los 5 tramos vigentes para el cálculo de la Renta de Trabajo: a.Tramo I Si,(  5 UIT > = Casilla 517),  Entonces la Casilla 120 = Casilla 517 x 0.08. b.Tramo II Si,  (5 UIT <  Casilla 517  < =  20 UIT) Entonces la Casilla 120 = (Casilla 517 – 5 UIT) x 0.14 + 5 UIT x 0.08 c.Tramo III Si,   (20 UIT <  Casilla 517  < =  35 UIT) Entonces la Casilla 120 = (Casilla 517 – 20 UIT) x 0.17 + 15 UIT x 0.14 + 5 UIT x 0.08 d.Tramo IV Si, (35 UIT <  Casilla 517  < =  45 UIT) Entonces la Casilla 120 = (Casilla 517 – 35 UIT) x 0.20 + 15 UIT x 0.17 + 15 UIT x 0.14 + 5 UIT x 0.08 e.Tramo V Si, (45 UIT <  Casilla 517) Entonces la Casilla 120 = (Casilla 517 – 45 UIT) x 0.30 + 10 UIT x 0.20 + 15 UIT x 0.17 + 15 UIT x 0.14 + 5 UIT x 0.08',
    idLabel: '120'
  },
  {
    id: 'cas-IPE',
    label: 'IMPUESTO PAGADO EN EL EXTERIOR',
    readonly: false,
    explanation: '',
    idLabel: 'IPE'
  },
  {
    id: 'cas-122',
    label: 'Crédito por Impuesto a la Renta de Fuente Extranjera',
    readonly: true,
    explanation: 'Sumatoria de los campos “Monto del Impuesto”. El total se redondea. • Validación del límite: Si Cas 122 <= Cas 116 * Tasa Media % (redondeado a entero) entonces Cas 122 = Cas 122. Si Cas 122 > Tasa Media, mostrar el siguiente mensaje: “La información de la casilla 122 no puede ser mayor a XXX”, donde (XXX es Cas 116 * Tasa Media% en valor entero) y Tasa media = Cas 120 x 100) / (Cas 512 + Cas 116 + Cas 511). Redondear el valor del porcentaje a dos decimales.',
    idLabel: '122'
  },
  {
    id: 'cas-158',
    label: 'Subtotal',
    readonly: true,
    explanation: 'Cas 120 - Cas 122',
    idLabel: '158'
  },
  {
    id: 'cas-563',
    label: 'Saldo a favor del ejercicio 2023',
    readonly: false,
    explanation: 'Sería igual a la Cas 167',
    idLabel: '563'
  },
  {
    id: 'cas-564',
    label: 'Saldo a favor del ejercicio 2023 aplicado en el ejercicio 2024',
    readonly: false,
    explanation: '',
    idLabel: '564'
  },
  {
    id: 'cas-565',
    label: 'Saldo a favor del ejercicio 2023 aplicado en el ejercicio 2025',
    readonly: false,
    explanation: '',
    idLabel: '565'
  },
  {
    id: 'cas-125',
    label: 'Saldo a favor del período anterior',
    readonly: true,
    explanation: 'Cas 563 – (Cas 564 + Cas 565). Validar si Cas 125 es menor a Cero mostrar el siguiente mensaje de error: “La información de la casilla 125 no puede ser negativo.”',
    idLabel: '125'
  },
  {
    id: 'cas-127',
    label: 'Pago directo del Impuesto a la Renta por Rentas del Trabajo',
    readonly: false,
    explanation: 'Sumatoria de los pagos a cuenta mensuales realizados (sin intereses), saldos a favor aplicados, saldos del exportador aplicados, otros créditos, pagos sin intereses de acuerdo a la definición de la tarea Obtención del Archivo Personalizado.',
    idLabel: '127'
  },
  {
    id: 'cas-128',
    label: 'Pago directo del Impuesto a la Renta de quinta categoría',
    readonly: false,
    explanation: 'Sumatoria de los pagos a cuenta mensuales realizados (sin intereses), de acuerdo a la definición de la tarea Obtención del Archivo Personalizado.',
    idLabel: '128'
  },
  {
    id: 'cas-130',
    label: 'Impuesto retenido sobre rentas de Cuarta Categoría',
    readonly: false,
    explanation: 'Sumatoria de retenciones de cuarta categoría de acuerdo a la definición de la tarea Obtención del Archivo Personalizado.',
    idLabel: '130'
  },
  {
    id: 'cas-131',
    label: 'Impuesto retenido sobre rentas de quinta categoría',
    readonly: false,
    explanation: 'Sumatoria de retenciones de quinta categoría de acuerdo a la definición de la tarea Obtención del Archivo Personalizado.',
    idLabel: '131'
  },
  {
    id: 'cas-141',
    label: 'A favor del contribuyente',
    readonly: true,
    explanation: 'Si (Cas 120 - Cas 122 - Cas 125 - Cas 127 - Cas 128 - Cas 130 - Cas 131) < 0 muestra resultado en valor absoluto. Caso contrario casilla 141=0',
    idLabel: '141'
  },
  {
    id: 'cas-142',
    label: 'A favor del fisco',
    readonly: true,
    explanation: 'Si (Cas 120 - Cas 122 - Cas 125 - Cas 127 - Cas 128 - Cas 130 - Cas 131) > 0 muestra resultado. Caso contrario casilla 142=0.',
    idLabel: '142'
  },
  {
    id: 'cas-144',
    label: 'Pagos contra el saldo a favor del fisco, realizados antes de la presentación de este formulario',
    readonly: false,
    explanation: 'Casilla para el registro por parte del contribuyente',
    idLabel: '144'
  },
  {
    id: 'cas-145',
    label: 'Interés Moratorio',
    readonly: false,
    explanation: 'Debe ser el interés por no pagar el monto de la Cas 142 ',
    idLabel: '145'
  },
  {
    id: 'cas-146',
    label: 'Saldo de la Deuda Tributaria',
    readonly: true,
    explanation: 'Cas 142 - Cas 144 + Cas 145. En caso el resultado sea negativo mostrar cero.',
    idLabel: '146'
  }
];