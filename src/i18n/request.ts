import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({requestLocale}) => {
  // Can be null if the middleware couldn't detect a locale
  let locale = await requestLocale;
  
  // Ensure locale is valid, fallback to 'en' if undefined
  if (!locale || !['en', 'lo'].includes(locale)) {
    locale = 'en';
  }
  
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});