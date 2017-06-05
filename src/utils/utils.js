export function generateLocation({city = '', country = ''}) {
  const locationSeparator = city && country ? ', ' : '';
  return city || country ? `${city}${locationSeparator}${country}` : '';
}