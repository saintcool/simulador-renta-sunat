import { TaxCalculator } from './components/TaxCalculator';
import Footer from './components/ui/Footer.tsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TaxCalculator />
      <Footer />
    </div>
  );
}

export default App;