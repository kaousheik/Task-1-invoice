import { ObjectType, Field } from "type-graphql";
import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToOne} from "typeorm";
import { Approval } from "./Approval"

enum ApprovalStatus {
    COORD =  "COORD",
    HEAD = "HEAD",
    CORE = "CORE",
    FINANCE_MANAGER = "FINANCE_MANAGER",
    FINANCE_CORE = "FINANCE_CORE",
    COCAD = "COCAD",
    REJECTED = "REJECTED"
}
enum InvoiceType {
    REIMBURSEMENT = "REIMBURSEMENT",
    SETTLEMENT = "SETTLEMENT",
    DIRECT_PAYMENT = "DIRECT_PAYMENT"
}
@ObjectType()
@Entity()
export class Invoice extends BaseEntity{
    @PrimaryGeneratedColumn()
    @Field()
    _id: number

    @Column()
    @Field()
    title: string
    
    @Column()
    @Field()
    date: string

    @Column()
    @Field()
    number: string

    @Column()
    @Field()
    vendor: string

    @Column()
    @Field()
    gstNumber: string

    @Column()
    @Field()
    amount: string

    @Column()
    @Field()
    purpose: string

    @Column()
    @Field() //
    uploadedBy: string

    @Column("enum", { enum: ApprovalStatus })
    @Field({nullable: true})
    status?: ApprovalStatus

    @Column("enum", { enum: InvoiceType })
    @Field({nullable: true}) 
    type?: InvoiceType

    @Column()
    @Field() //
    byDept: string

    @Column()
    @Field()
    image: string

    @Column()
    @Field({nullable: true})
    accountName?: string

    @Column()
    @Field({nullable: true})
    accountNumber?: string

    @Column()
    @Field({nullable: true})
    ifsc?: string

    @Column()
    @Field({nullable: true})
    bankDetails?: string
    
    @Column()
    @Field({nullable: true})
    advanceAmount?: string

    @Column()
    @Field({nullable: true})
    pendingAmount?: string

    @Field(() => [Approval], {nullable: true})
    // @Column({nullable: false})
    @OneToOne(()=> Approval)
    approvals?: Approval[]
}