import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'departments' })
@ObjectType()
export class Department {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @ManyToOne(() => Department, (department) => department.subDepartments, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @Field(() => Department, { nullable: true })
  parent?: Department;

  @OneToMany(() => Department, (department) => department.parent)
  @Field(() => [Department], { nullable: true })
  subDepartments?: Department[];
}
