export const zip = <A, B>(arr1: Array<A>, arr2: Array<B>): Array<[A, B]> => {
  return arr1.map((item, index) => [item, arr2[index]]);
};
