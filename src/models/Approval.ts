import { Field,  ObjectType } from "type-graphql";
import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
@ObjectType()
export class Approval extends BaseEntity{
    @PrimaryGeneratedColumn()
    @Field()
    _id: number

    @Column()
    @Field()
    approvalName: string

    @Column()
    @Field()
    approvalAvatar: string

    @Column()
    @Field()
    approvedOn: string

    @Column()
    approverEmail: string

    @Column()
    @Field()
    approverMobile: string

}