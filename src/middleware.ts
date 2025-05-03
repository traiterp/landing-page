import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

// Define los idiomas soportados
const locales = ["en", "es"]
const defaultLocale = "en"

// Función para obtener el idioma preferido del usuario
function getLocale(request: NextRequest) {
  // Negotiator espera un objeto plano, así que transformamos los headers
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // Usar negotiator y intl-localematcher para obtener el mejor idioma
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Comprobar si la ruta ya tiene un prefijo de idioma válido
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  // Si la ruta ya tiene un idioma válido, no hacemos nada
  if (pathnameHasLocale) return

  // Si no tiene un idioma, redirigimos a la ruta con el idioma detectado
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`

  // IMPORTANTE: Aquí estaba el error, debes REDIRIGIR, no continuar
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Excluir archivos estáticos, API, etc.
    "/((?!api|_next/static|_next/image|.*\\..*).*)",
    "/",
  ],
}
