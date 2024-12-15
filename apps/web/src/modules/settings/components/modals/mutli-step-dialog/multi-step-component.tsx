import React, { useCallback, useMemo, useReducer } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import useMeasure from 'react-use-measure';
import UploadFile from '../../upload-file';
import Step2 from './step-2';
import { toast } from '@/hooks/use-toast';
import { useImportUserBooksMutation } from '@/graphql/graphql';

interface ImportLibraryState {
  shelves: string[];
  csvContent: string | null;
  selectedFile: File | null;
}

type ImportLibraryAction =
  | { type: 'SET_SHELVES'; payload: string[] }
  | { type: 'SET_CSV_CONTENT'; payload: string }
  | { type: 'SET_SELECTED_FILE'; payload: File };

function importLibraryReducer(
  state: ImportLibraryState,
  action: ImportLibraryAction
): ImportLibraryState {
  switch (action.type) {
    case 'SET_SHELVES':
      return { ...state, shelves: action.payload };
    case 'SET_CSV_CONTENT':
      return { ...state, csvContent: action.payload };
    case 'SET_SELECTED_FILE':
      return { ...state, selectedFile: action.payload };
    default:
      return state;
  }
}

interface MultiStepComponentProps {
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create a context for the file upload state and dispatch function
export const ImportLibraryContext = React.createContext<
  | {
      state: ImportLibraryState;
      dispatch: React.Dispatch<ImportLibraryAction>;
    }
  | undefined
>(undefined);

export const MultiStepComponent: React.FC<MultiStepComponentProps> = ({
  setOpenDialog,
}) => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [direction, setDirection] = React.useState<number>();
  const [ref, bounds] = useMeasure();

  // Initialize the file upload state with useReducer
  const [importLibraryState, importLibraryDispatch] = useReducer(
    importLibraryReducer,
    {
      shelves: [],
      csvContent: null,
      selectedFile: null,
    }
  );

  // In MultiStepComponent
  const content = useMemo(() => {
    switch (currentStep) {
      case 0:
        return (
          <UploadFile
            setCurrentStep={setCurrentStep}
            setDirection={setDirection}
          />
        );
      case 1:
        return (
          <Step2
            setOpenDialog={setOpenDialog}
            setCurrentStep={setCurrentStep}
            setDirection={setDirection}
          />
        );
    }
  }, [currentStep]);

  return (
    <ImportLibraryContext.Provider
      value={{ state: importLibraryState, dispatch: importLibraryDispatch }}
    >
      <MotionConfig transition={{ duration: 0.5, type: 'spring', bounce: 0 }}>
        <motion.div
          initial={false}
          animate={{ height: bounds.height }}
          className='relative overflow-hidden'
        >
          <div ref={ref}>
            <AnimatePresence
              mode='popLayout'
              initial={false}
              custom={direction}
            >
              <motion.div
                key={currentStep}
                variants={variants}
                initial='initial'
                animate='active'
                exit='exit'
                custom={direction}
              >
                {content}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </MotionConfig>
    </ImportLibraryContext.Provider>
  );
};

const variants = {
  initial: (direction: number) => {
    return { x: `${110 * direction}%`, opacity: 0 };
  },
  active: { x: '0%', opacity: 1 },
  exit: (direction: number) => {
    return { x: `${-110 * direction}%`, opacity: 0 };
  },
};
