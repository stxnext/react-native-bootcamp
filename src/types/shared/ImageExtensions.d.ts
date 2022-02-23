// it's used to handle resolving .png import
declare module '*.png' {
  const value: any;
  export = value;
}
