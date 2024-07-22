import { Dispatch, MutableRefObject, SetStateAction } from "react";

/**USEREF */
declare type RState<T> = [
  T | undefined,
  Dispatch<SetStateAction<T | undefined>>
];

/**USEREF */
declare type RRef<T> = MutableRefObject<T | undefined>;
