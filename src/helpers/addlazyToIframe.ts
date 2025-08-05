export function addLazyToIframes(html: string): string {
  return html.replace(/<iframe([^>]+?)>/g, (match, attrs) => {
    // If loading="lazy" already exists, leave it
    if (/loading\s*=\s*["']lazy["']/.test(attrs)) return match;

    return `<iframe loading="lazy"${attrs}>`;
  });
}
