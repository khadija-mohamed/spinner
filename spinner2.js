let start = 100;
let spinner = ['\r|   ', '\r/   ', '\r-   ', '\r-\\  ', '\r\|   ','\r\/   ', '\r\-   ', '\r\\   ']
  for (let r of spinner) {
    setTimeout(() => {
      process.stdout.write(r);
    }, start)   
    start += 200;
}
