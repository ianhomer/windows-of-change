import join from "lodash/join";

// Take a string or string array and return a string
export default function stringy(s: string | string[]): string {
  return join(s, "");
}
