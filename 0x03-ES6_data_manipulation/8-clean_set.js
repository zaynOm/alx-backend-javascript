export default function cleanSet(set, prefix) {
  if (!set || !prefix || !(set instanceof Set) || typeof prefix !== 'string') {
    return '';
  }
  return [...set]
    .filter((item) => item && item.startsWith(prefix))
    .map((item) => item.slice(prefix.length))
    .join('-');
}
