import React from 'react';
import Rating from '@/components/rating';
import { Action, AuditLog, Size } from '@/graphql/graphql';
import Link from 'next/link';
import BookCover from '@/components/book-cover';
import { format } from 'date-fns';
import { Progress } from '@/components/ui/progress';
import { formatAuthors, getCoverUrl } from '@/lib/utils';

const LogMessage = ({ log }: { log: AuditLog }) => {
  const { action, book, actionContent } = log;

  const titleLink = (
    <Link
      href={`/book/${book!.id}`}
      className='text-beige hover:text-stone-500'
    >
      {book!.title}
    </Link>
  );
  switch (action) {
    case Action.Shelve:
      return (
        <div>
          You shelved {titleLink} as: {actionContent}
        </div>
      );
    case Action.Review:
      return (
        <div className='flex gap-2'>
          <BookCover src={getCoverUrl(book, Size.Small)} size='md' />
          <div className='ml-2 flex flex-col justify-between'>
            <div className='flex flex-col gap-2'>
              <div>You reviewed</div>
              <div className='flex flex-col'>
                <div className='text-base font-semibold'>{titleLink}</div>
                <div className='text-beige'>by {formatAuthors(book!)}</div>
              </div>
              <div className='text-sm'>{actionContent}</div>
            </div>
            <div className='text-xs text-gray-500'>
              {format(new Date(log.createdAt), "MMM d, yyyy 'at' h:mm a")}
            </div>
          </div>
        </div>
      );
    case Action.StatusUpdate:
      return (
        <div>
          You marked {titleLink} as {actionContent}
        </div>
      );
    case Action.Like:
      return (
        <div>
          You marked {titleLink} as {actionContent}
        </div>
      );
    case Action.Rate:
      const rating = Number(actionContent);
      return (
        <div className='flex gap-2'>
          You rated {titleLink} <Rating value={rating} />
        </div>
      );
    default:
      return (
        <div>
          Unknown action "{action}" for entity {titleLink}
        </div>
      );
  }
};

export default LogMessage;
