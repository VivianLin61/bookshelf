'use client';
import { useState } from 'react';
import Collapsible from '../../../components/ui/collapsible';
import AlertModal from '../../../components/modals/alert-modal';
import { Shelf } from '@/graphql/graphql';
import { ShelfItem } from './shelf-item';
import useCreateShelfModal from '../hooks/use-create-shelf-modal';
import { useDeleteShelf } from '../mutations/use-delete-shelf';
import useShelfStore from '@/stores/use-shelf-store';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
interface ShelfContainerProps {
  title: string;
  shelves: Shelf[];
  isShelves?: boolean;
  collapsible?: boolean;
  children?: React.ReactNode;
}

const ShelfContainer: React.FC<ShelfContainerProps> = ({
  title,
  shelves,
  isShelves,
  collapsible,
  children,
}) => {
  const [openAlert, setOpenAlert] = useState(false);
  const shelfModal = useCreateShelfModal();
  const { removeShelf } = useShelfStore();
  const { deleteShelf } = useDeleteShelf({
    onSuccess: (_) => {
      removeShelf(shelfModal.shelf!.id);
      setOpenAlert(false);
      shelfModal.onClose();
    },
  });

  return (
    <>
      <AlertModal
        title={'Are you sure you want to remove this shelf?'}
        description={'This action cannot be undone.'}
        isOpen={openAlert}
        onClose={() => setOpenAlert(false)}
        onConfirm={async () => {
          await deleteShelf({ id: shelfModal.shelf!.id });
        }}
        loading={false}
      />
      <Collapsible title={title} collapsible={collapsible}>
        <div className='grid gap-1 text-sm'>
          {shelves.map((link, index) => (
            <ShelfItem
              key={index}
              shelf={link}
              isShelves={isShelves}
              setOpenAlert={setOpenAlert}
            ></ShelfItem>
          ))}
          {isShelves && (
            <>
              <Button
                onClick={() => {
                  shelfModal.onOpen();
                }}
                variant={'link'}
                className='mr-4 flex items-center justify-start gap-2 rounded-lg px-3 text-base text-gray-400 transition-all hover:text-beige-700 hover:no-underline '
              >
                <Icons.plus className='h-4 w-4' />
                Add a shelf
              </Button>
            </>
          )}
        </div>
      </Collapsible>
    </>
  );
};

export default ShelfContainer;
