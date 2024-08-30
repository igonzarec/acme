// 1. Esto convierte el archivo en un Componente de Cliente.
'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
// 2. Importas el componente Link de Next.js para crear enlaces y el hook usePathname.
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// 3. the clsx library introduced in the chapter on CSS styling to conditionally apply class names when the link is active.
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname(); // Aquí obtienes la ruta actual, como "/inicio" o "/dashboard".

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            /*
            Uso de clsx: clsx es una librería de JavaScript que se usa para concatenar clases condicionalmente. Es similar a otras librerías como classnames.
Clases Condicionales:
El primer argumento es un string de clases que siempre se aplican.
El segundo argumento es un objeto donde las claves son nombres de clases, y los valores son condiciones booleanas.
En este caso, las clases 'bg-sky-100 text-blue-600' se aplicarán solo si la condición pathname === link.href es verdadera.
Flexibilidad: Este método te permite agregar o quitar clases dinámicamente, dependiendo de condiciones, como el estado de la aplicación o las propiedades del componente.
            */
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
