import { registerEnumType } from "type-graphql";

export 	enum ApprovalStatus {
    COORD,
    HEAD,
    CORE,
    FINANCE_MANAGER,
    FINANCE_CORE,
    COCAD,
    REJECTED
}

registerEnumType(ApprovalStatus, {
  name: "ApprovalStatus",
 });