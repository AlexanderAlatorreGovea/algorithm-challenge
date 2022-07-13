export function findEmailDomain(address: string): string {
  const addressArray = address.split("@");
  return address.split("@")[addressArray.length - 1];
}

console.log(findEmailDomain("prettyandsimple@example.com"));
console.log(findEmailDomain('<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org'));
