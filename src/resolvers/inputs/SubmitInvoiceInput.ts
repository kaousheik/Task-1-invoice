import { InputType, Field } from "type-graphql";
import { Invoice } from "src/entities/Invoice";
import { InvoiceType } from "../../entities/enums/InvoiceType.enum"
@InputType()
export class SubmitInvoiceInput implements Partial<Invoice>{

    @Field()
    title: string;

    @Field()
    date: string;

    @Field()
    number: string

    @Field()
    vendor: string

    @Field()
    gstNumber: string

    @Field()
    amount: string

    @Field()
    purpose: string

    @Field(() => InvoiceType)
    type: InvoiceType

    @Field({nullable: true})
    subDept?: string

    @Field({nullable: true})
    accountName?: string

    @Field({nullable: true})
    accountNumber?: string

    @Field({nullable: true})
    ifsc?: string

    @Field({nullable: true})
    bankDetails?: string
    
    @Field({nullable: true})
    advanceAmount?: string
    
    @Field({nullable: true})
    pendingAmount?: string


}
