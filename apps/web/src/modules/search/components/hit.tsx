import { BookCard, BookInfo } from '@/components/ui/book-card';
import BookCover from '@/components/book-cover';
;

export type HitProps = {
  hit: BookData;
};

const Hit = ({ hit }: HitProps) => {
  return (
    <BookCard
      book={hit}
      content={
        <BookCard.BookContent
          image={<BookCover src={hit.image} size={'sm'} />}
          info={<BookInfo />}
        />
      }
      />
  );
};

export default Hit;
