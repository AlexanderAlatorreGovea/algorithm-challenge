export function incrementalBackups(
  lastBackupTime: number,
  changes: number[][]
): number[] {
  const backups = [];

  for (let i = 0; i < changes.length; i++) {
    const backup = changes[i][0];
    const ids = changes[i][1];

    if (backup > lastBackupTime && !backups.includes(ids)) {
      backups.push(ids);
    }
  }

  return backups.sort();
}

console.log(
  incrementalBackups(461620205, [
    [461620203, 1],
    [461620204, 2],
    [461620205, 6],
    [461620206, 5],
    [461620207, 3],
    [461620207, 5],
    [461620208, 1],
  ])
);
