export function areEquallyStrong(
  yourLeft: number,
  yourRight: number,
  friendsLeft: number,
  friendsRight: number
): boolean {
  const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
  const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
  const friendsWeaket =
    friendsLeft <= friendsRight ? friendsLeft : friendsRight;
  const friendsStrongest =
    friendsLeft >= friendsRight ? friendsLeft : friendsRight;

  return yourStrongest === friendsStrongest && yourWeakest === friendsWeaket;
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
