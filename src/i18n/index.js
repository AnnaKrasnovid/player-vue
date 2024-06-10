import en from './en.json';
import ru from './ru.json';

export const defaultLocale = localStorage.getItem('lang') || 'ru';
export const languages = {
  en,
  ru,
}