import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from '../graphql/models/Department';
import { CreateDepartmentInput } from '../graphql/utils/CreateDepartmentInput';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}

  getDepartments() {
    return this.departmentRepository.find({ relations: ['subDepartments'] });
  }

  async createDepartment(createDepartmentData: CreateDepartmentInput) {
    const department = this.departmentRepository.create(createDepartmentData);

    if (createDepartmentData.subDepartments) {
      department.subDepartments = await Promise.all(
        createDepartmentData.subDepartments.map((sub) =>
          this.departmentRepository.save({ ...sub }),
        ),
      );
    }

    return this.departmentRepository.save(department);
  }

  async updateDepartment(id: number, name: string) {
    const department = await this.departmentRepository.findOneBy({ id });

    if (!department) throw new Error('Department not found.');

    department.name = name;

    return this.departmentRepository.save(department);
  }

  async deleteDepartment(id: number) {
    const department = await this.departmentRepository.findOneBy({ id });

    if (!department) throw new Error('Department not found.');

    await this.departmentRepository.remove(department);

    return true;
  }
}
