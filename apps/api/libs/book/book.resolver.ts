import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { BookService } from './book.service';
import {
  Book,
  BookCreateInput,
  BookWhereUniqueInput,
  CoverCreateInput,
} from 'src/generated-db-types';
import { AccessTokenGuard } from 'libs/auth/guards/jwt.guard';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'libs/auth/decorators/currentUser.decorator';
import { JwtPayload } from 'libs/auth/types';
import { CoverService } from 'libs/cover/cover.service';
import { findBookByGoogleBookId } from './api/google.api';
import { getCovers } from './api/book-cover.api';
import { generateSlug } from 'libs/user-book/utils';

@Resolver(() => Book)
export class BookResolver {
  constructor(
    private readonly bookService: BookService,
    private readonly coverService: CoverService,
  ) {}
  
  @Query(() => Book, { nullable: true, name: 'getGoogleBook' })
  async getGoogleBook(
    @Args('id')
    id: string,
  ) {
    const googleBook = await findBookByGoogleBookId(id);
    const identifier = await this.bookService.findByIdentifier({
      where: {
        google: googleBook.id,
      },
      include: {
        book: {
          include: {
            covers: true,
          },
        }, // Include related book information if needed
      },
    });

    if (!identifier) {
      const imageLinks = await getCovers({
        isbn: googleBook.isbn13,
        title: googleBook.title,
        authors: googleBook.authors,
      });
      const coverInput: CoverCreateInput[] =
        this.coverService.createCoverInput(imageLinks);

      const covers = await this.coverService.createCovers(coverInput);

      const bookData: BookCreateInput = {
        //   id: bookIdentifier.bookId,
        title: googleBook.title,
        pageCount: googleBook.pageCount,
        authors: googleBook.authors,
        publisher: googleBook.publisher,
        publishedDate: googleBook.publishedDate,
        description: googleBook.description,
        covers: {
          connect: covers.map((cover) => ({ id: cover.id })),
        },
        categories: googleBook.categories,
        averageRating: googleBook.averageRating,
        slug: generateSlug(
          googleBook.title + ' ' + googleBook.authors.join(' '),
        ),
      };
      const book = await this.bookService.create(bookData, null, {
        isbn10: googleBook.isbn10,
        isbn13: googleBook.isbn13,
        google: googleBook.id,
      });

      return book;
    }
    return identifier.book;

    // get the google book,
    // create check if there already exist a book with the this googleBookId
    // if there is just return the book else
    // then return the create the book,
    // check if there is a matching work, same title and author if there is add it as a edition
  }

  @UseGuards(AccessTokenGuard)
  @Mutation(() => Book)
  createBook(
    @Args('data') data: BookCreateInput,
    @CurrentUser() currentUser: JwtPayload,
  ) {
    return this.bookService.create(data, currentUser.userId);
  }

  @Query(() => Book, { nullable: true, name: 'book' })
  book(
    @Args('where')
    where: BookWhereUniqueInput,
  ) {
    const book = this.bookService.findUnique({
      where: {
        id: where.id,
      },
      include: {
        covers: true,
      },
    });

    if (!book) {
      throw new NotFoundException(
        `Book ${JSON.stringify(where)} does not exist`,
      );
    }
    return book;
  }
}
