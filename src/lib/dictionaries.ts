import "server-only"

// Importa los diccionarios
import en from "@/locales/en"
import es from "@/locales/es"

// Crea un objeto con los diccionarios
const dictionaries = {
  en,
  es,
}

// Función para obtener el diccionario según el idioma
export const getDictionary = async (locale: string) => {
  // Devuelve el diccionario correspondiente o el inglés por defecto
  return dictionaries[locale as keyof typeof dictionaries] || dictionaries.en
}
