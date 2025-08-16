import { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Vertex Yapı İnşaat iletişim bilgileri. Mersin Silifke\'de inşaat projeleriniz için bize ulaşın. Telefon: 540 384 33 33, E-posta: info@vertexyapi.com',
  keywords: [
    'Vertex Yapı iletişim', 'Mersin inşaat firması iletişim', 'Silifke inşaat şirketi',
    'inşaat projesi teklifi', 'Mersin inşaat firması telefon', 'Silifke inşaat şirketi adres'
  ],
  alternates: {
    canonical: '/iletisim',
  },
  openGraph: {
    title: 'Vertex Yapı İnşaat - İletişim',
    description: 'Mersin Silifke\'de inşaat projeleriniz için bize ulaşın.',
    url: 'https://vertexyapi.com/iletisim',
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
