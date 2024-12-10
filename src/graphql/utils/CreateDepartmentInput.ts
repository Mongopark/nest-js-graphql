import { InputType, Field } from '@nestjs/graphql';
import { MinLength, ValidateNested, IsOptional, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class CreateDepartmentInput {
   @Field()
   @MinLength(2)
   name: string;

   @Field(() => [CreateDepartmentInput], { nullable: true })
   @IsOptional()
   @IsArray()
   @ValidateNested({ each: true })
   @Type(() => CreateDepartmentInput)
   subDepartments?: CreateDepartmentInput[];
}
