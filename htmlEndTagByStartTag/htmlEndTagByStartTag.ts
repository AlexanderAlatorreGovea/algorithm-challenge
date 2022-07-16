export function htmlEndTagByStartTag(startTag: string): string {
  let enclosedNameInTag = "";

  for (let char of startTag) {
    if (char !== "<" && char !== ">") {
      enclosedNameInTag += char
    }
  }

  enclosedNameInTag = enclosedNameInTag.split(" ")[0]

  return "</" + enclosedNameInTag + ">";
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag("<i>"));
