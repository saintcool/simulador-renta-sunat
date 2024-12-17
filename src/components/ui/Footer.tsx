export default function Footer() {
    return (
      <footer className="bg-gray-100 border-t mt-auto">
        <div className="max-w-8xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} “Esta página es una herramienta de apoyo diseñada para el cálculo preliminar de impuestos. No reemplaza ni sustituye las funciones de la página oficial de la SUNAT. Se recomienda verificar toda la información en el portal oficial de la SUNAT para garantizar la exactitud de sus obligaciones tributarias. Uso exclusivo para fines orientativos.”
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.sunat.gob.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                Términos y Condiciones
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                Privacidad
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
