import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Department } from '../models/Department';
import { CreateDepartmentInput } from '../utils/CreateDepartmentInput';
import { DepartmentService } from '../../users/DepartmentService';

@Resolver((of) => Department)
export class DepartmentResolver {
  constructor(private departmentService: DepartmentService) {}

  @Query((returns) => [Department])
  async getDepartments() {
    return this.departmentService.getDepartments();
  }

  @Mutation((returns) => Department)
  async createDepartment(
    @Args('createDepartmentData') createDepartmentData: CreateDepartmentInput,
  ) {
    return this.departmentService.createDepartment(createDepartmentData);
  }

  @Mutation((returns) => Department)
  async updateDepartment(
    @Args('id') id: number,
    @Args('name') name: string,
  ) {
    return this.departmentService.updateDepartment(id, name);
  }

  @Mutation((returns) => Boolean)
  async deleteDepartment(@Args('id') id: number) {
    return this.departmentService.deleteDepartment(id);
  }
}
