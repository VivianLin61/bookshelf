import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { CardWrapper } from './card-wrapper';

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel='Oops! Something went wrong!'
      backButtonHref='/login'
      backButtonLabel='Back to login'
    >
      <div className='flex w-full items-center justify-center'>
        <ExclamationTriangleIcon className='text-red-500' />
      </div>
    </CardWrapper>
  );
};
