import { registerEnumType } from "type-graphql";

export enum InvoiceType {
    REIMBURSEMENT,
    SETTLEMENT,
    DIRECT_PAYMENT
}

registerEnumType(InvoiceType, {
  name: "InvoiceType",
 });