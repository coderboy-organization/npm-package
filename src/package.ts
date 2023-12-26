export class Package {
  generate = (length: number = 5) => {
    let result: string = "";
    for (let i = 0; i <= length; i++) {
      result += i;
    }
    console.log(result);
  };
}
