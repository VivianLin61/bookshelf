import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MultiStepComponent } from './multi-step-component';
import { useSession } from 'next-auth/react';
import { toast } from '@/hooks/use-toast';

interface MultiStepDialogProps {
  className?: string;
  triggerLabel: string;
}

export const MultiStepDialog: React.FC<MultiStepDialogProps> = ({
  className = '',
  triggerLabel = 'Import books',
}) => {
  const [open, setOpen] = useState(false);
  const { data } = useSession();
  const onOpenDialog = () => {
    if (data?.user.username == 'demo') {
      return toast({
        title: 'Demo account',
        description: 'You cannot import books to the demo account.',
      });
    }
    setOpen(!open);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenDialog}>
      <DialogTrigger asChild>
        <Button variant='secondary' className={className}>
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className='bg-none p-6 sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Import goodreads library</DialogTitle>
        </DialogHeader>
        <MultiStepComponent setOpenDialog={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default MultiStepDialog;
