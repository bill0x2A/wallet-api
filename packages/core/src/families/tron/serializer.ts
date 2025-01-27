import BigNumber from "bignumber.js";
import type { RawTronTransaction, TronTransaction } from "./types";

export const serializeTronTransaction = ({
  amount,
  recipient,
  family,
  mode,
  resource,
  duration,
}: TronTransaction): RawTronTransaction => ({
  amount: amount.toString(),
  recipient,
  family,
  mode,
  resource,
  duration,
});

export const deserializeTronTransaction = ({
  amount,
  recipient,
  family,
  mode,
  resource,
  duration,
}: RawTronTransaction): TronTransaction => ({
  amount: new BigNumber(amount),
  recipient,
  family,
  mode,
  resource,
  duration,
});
