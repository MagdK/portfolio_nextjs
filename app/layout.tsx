import '../styles/globals.scss';
import Navigation from "@/components/Navigation";
import Footer from '@/components/Footer';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div >
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html >
  )
}
