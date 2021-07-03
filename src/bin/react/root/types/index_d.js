module.exports = () => `declare module '*.styl' {
  const classname: { readonly [key: string]: string };
  export default classname;
}

interface RootState {
  count: number;
}
`;
