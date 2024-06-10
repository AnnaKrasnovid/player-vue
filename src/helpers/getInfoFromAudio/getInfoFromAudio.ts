
export function getInfoFromAudio(name: string) {
  // TODO: не корректно отрабатывает
  let author = '';
  let title = '';
  
  const string = name.replace(/_/g, " ");
  const array = string.split(" - ");
  
  author = array[0];
  const titleArray = array[1].split(" ");
  title = titleArray.slice(0, titleArray[1].length - 2).join(" ");
  
  return { author, title };
}