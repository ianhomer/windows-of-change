// Take a string or string array and return a string
export default function stringy(s: string | string[]): string {
  return Array.isArray(s) ? s.join("") : s;
}
