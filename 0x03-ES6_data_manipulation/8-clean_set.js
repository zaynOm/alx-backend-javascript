export default function cleanSet(set, prefix) {
  if (!set || !prefix || !(set instanceof Set) || typeof prefix !== 'string') {
    return '';
  }
  return Array.from(set)
    .filter((item) => item.startsWith(prefix))
    .map((item) => item.slice(prefix.length))
    .join('-');
}
