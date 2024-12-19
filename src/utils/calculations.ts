import { TaxInput } from '../types/tax';
import { UIT_VALUE } from '../types/tax';

export const calculateTax = (values: TaxInput): TaxInput => {
  const result: TaxInput = { ...values };

  // CAS-507
  result['cas-507'] = Math.min(0.20 * (values['cas-107'] || 0), 24 * UIT_VALUE);

  // CAS-508
  console.log('cas-508');
  console.log(values['cas-107'] );
  console.log(result['cas-507']);
  result['cas-508'] = (values['cas-107'] || 0) - (result['cas-507'] || 0);

  // CAS-509
  result['cas-509'] = (result['cas-508'] || 0) + (values['cas-108'] || 0);

  // CAS-510
  result['cas-510'] = result['cas-509'] + (values['cas-111'] || 0);

  // CAS-511
  result['cas-511'] = Math.min(result['cas-510'] || 0 , 7 * UIT_VALUE);

  // CAS-ABC
  const deductionsSum =
    (values['cas-A'] || 0) * 0.3 +
    (values['cas-B'] || 0) * 0.15 +
    (values['cas-C'] || 0) * 0.3 +
    (values['cas-D'] || 0);
  result['cas-ABC'] = Math.min(deductionsSum, 3 * UIT_VALUE);

  // CAS-512
  result['cas-512'] = (result['cas-510'] || 0) - (result['cas-511'] || 0) - (result['cas-ABC'] || 0);

  // CAS-519
  result['cas-519'] = Math.min(0.10 * (result['cas-512'] || 0), values['cas-MD'] || 0);

  // CAS-513
  result['cas-513'] = Math.max(0, (result['cas-512'] || 0) - ((values['cas-522'] || 0) + (result['cas-519'] || 0)));

  // CAS-517
  result['cas-517'] = (result['cas-513'] || 0) + (values['cas-116'] || 0);

  // CAS-120 (Tax brackets calculation)
  const taxableIncome = result['cas-517'] || 0;
  let tax = 0;

  if (taxableIncome > 0) {
    const uit5 = 5 * UIT_VALUE;
    const uit20 = 20 * UIT_VALUE;
    const uit35 = 35 * UIT_VALUE;
    const uit45 = 45 * UIT_VALUE;

    if (taxableIncome <= uit5) {
      tax = taxableIncome * 0.08;
    } else if (taxableIncome <= uit20) {
      tax = (uit5 * 0.08) + ((taxableIncome - uit5) * 0.14);
    } else if (taxableIncome <= uit35) {
      tax = (uit5 * 0.08) + (15 * UIT_VALUE * 0.14) + ((taxableIncome - uit20) * 0.17);
    } else if (taxableIncome <= uit45) {
      tax = (uit5 * 0.08) + (15 * UIT_VALUE * 0.14) + (15 * UIT_VALUE * 0.17) + ((taxableIncome - uit35) * 0.20);
    } else {
      tax = (uit5 * 0.08) + (15 * UIT_VALUE * 0.14) + (15 * UIT_VALUE * 0.17) + (10 * UIT_VALUE * 0.20) + ((taxableIncome - uit45) * 0.30);
    }
  }
  result['cas-120'] = tax;

  // CAS-122 (Foreign tax credit)
  const averageRate = ((result['cas-120'] || 0) * 100) / ((result['cas-512'] || 0) + (values['cas-116'] || 0) + (result['cas-511'] || 0));
  const maxCredit = (values['cas-116'] || 0) * (averageRate / 100);
  if ((values['cas-IPE'] || 0) > maxCredit) {
    result['cas-122'] = maxCredit;
  } else {
    result['cas-122'] = values['cas-IPE'] || 0;
  }

  // CAS-158
  result['cas-158'] = (result['cas-120'] || 0) - (result['cas-122'] || 0);

  // CAS-125
  result['cas-125'] = (values['cas-563'] || 0) - ((values['cas-564'] || 0) + (values['cas-565'] || 0));

  // CAS-141 and CAS-142
  const balance = (result['cas-120'] || 0) - (result['cas-122'] || 0) - (result['cas-125'] || 0) - 
                 (values['cas-127'] || 0) - (values['cas-128'] || 0) - (values['cas-130'] || 0) - (values['cas-131'] || 0);
  
  result['cas-141'] = balance < 0 ? Math.abs(balance) : 0;
  result['cas-142'] = balance > 0 ? balance : 0;

  // CAS-146
  result['cas-146'] = (result['cas-142'] || 0) - (values['cas-144'] || 0) + (values['cas-145'] || 0);

  return result;
};