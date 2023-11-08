import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { BookService } from './book.service';
import { Book, BookCreateInput } from 'src/generated-db-types';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';
import { JwtPayload } from 'libs/auth/types';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @UseGuards(AccessTokenGuard)
  @Mutation(() => Book)
  createBook(
    @Args('data') data: BookCreateInput,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.bookService.create(data, currentUser.userId);
  }

  //   @Mutation(() => Book)
  //   @UseGuards(AccessTokenGuard)
  //   async favoriteArticle(
  //     @Args('where') where: BookWhereUniqueInput,
  //     @Args('value') value: boolean,
  //     @CurrentUser() currentUser: JwtPayload,
  //   ) {
  //     const book = await this.bookService.findUnique({
  //       where,
  //     });
  //     if (!book) {
  //       throw new NotFoundException(`Book do not exists`);
  //     }
  //     if (value && book.favoritedBy.length > 0) {
  //       throw new ConflictException(`Book is already in favorite list`);
  //     }
  //     if (!value && book.favoritedBy.length === 0) {
  //       throw new ConflictException(`Book is not in favorite list`);
  //     }
  //     return this.service.favorite({
  //       article,
  //       favoritedByUserId: currentUser.id,
  //       value,
  //       include: {
  //         author: Boolean(fields.author),
  //         tags: Boolean(fields.tags),
  //       },
  //     });
  //   }
}
