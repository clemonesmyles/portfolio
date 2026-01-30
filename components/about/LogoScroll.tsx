import Image from 'next/image'

const companies = [
  { name: 'Northwestern Mutual', file: 'NM logo.png' },
  { name: 'DVA', file: 'DVA logo.png' },
  { name: 'Arthritis Movement', file: 'Arthritis movement logo.png' },
  { name: 'Essential Energy', file: 'EE logo.png' },
  { name: 'Gumtree', file: 'gumtree logo.png' },
  { name: 'NSW Government', file: 'nsw gov logo.png' },
  { name: 'Maritime Museum', file: 'mariitme logo.png' },
  { name: 'NFSA', file: 'nfsa logo.png' },
  { name: 'Commonwealth Bank', file: 'CBA logo.png' },
  { name: 'Westpac', file: 'Westpac logo.png' },
  { name: 'Bureau of Meteorology', file: 'BOM logo.png' },
  { name: 'DPI', file: 'DPI logo.png' },
  { name: 'Adevinta', file: 'Adevinta logo.png' },
  { name: 'AutoTrader', file: 'autotrader logo.png' },
  { name: 'Mobile.de', file: 'mobile.de logo.png' },
  { name: 'Esri', file: 'esri logo.png' },
  { name: 'BT', file: 'BT logo.png' },
  { name: 'Care Connect', file: 'Care Connect.png' },
  { name: 'Rebuilt', file: 'rebuilt logo.png' },
  { name: 'VESR', file: 'vesr logo.png' },
]

export default function LogoScroll() {
  return (
    <div className="py-8">
      <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8 md:gap-10 items-center justify-items-center">
        {companies.map((company) => (
          <div
            key={company.file}
            className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 relative"
            style={{ width: '140px', height: '58px' }}
          >
            <Image
              src={`/images/logos/${company.file}`}
              alt={company.name}
              fill
              className="object-contain"
              sizes="140px"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}
