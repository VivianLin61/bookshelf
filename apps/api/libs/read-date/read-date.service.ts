// read-date.service.ts
import { Injectable } from '@nestjs/common';
import { ReadDate } from '@bookcue/api/generated-db-types';
import { PrismaRepository } from 'prisma/prisma.repository';
import { ReadDateRepository } from './read-date.repository';

@Injectable()
export class ReadDateService {
  constructor(
    private readonly prisma: PrismaRepository,
    private readonly repository: ReadDateRepository,
  ) {}

  findMany = this.repository.findMany;

  async findByUserBookId(userBookId: string): Promise<ReadDate[]> {
    return this.prisma.readDate.findMany({
      where: {
        userBookId,
      },
    });
  }
}
