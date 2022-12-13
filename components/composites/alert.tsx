import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  ButtonProps,
} from "@chakra-ui/react";
import { useRef } from "react";

export interface IAlert {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  desc: string;
  actionButtonProps?: ButtonProps;
  actionButtonText: string;
  onClickActionButton: () => void;
  isLoading?: boolean;
}

export const Alert = (props: IAlert) => {
  const {
    onClose,
    title,
    desc,
    actionButtonText,
    actionButtonProps,
    onClickActionButton,
    isOpen,
    isLoading,
  } = props;
  const cancelButtonRef = useRef<HTMLButtonElement>();

  return (
    <>
      <AlertDialog
        //@ts-ignore
        leastDestructiveRef={cancelButtonRef}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {title}
            </AlertDialogHeader>

            <AlertDialogBody>{desc}</AlertDialogBody>

            <AlertDialogFooter>
              {/*  @ts-ignore */}
              <Button ref={cancelButtonRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={onClickActionButton}
                ml={3}
                isLoading={isLoading}
                {...actionButtonProps}
              >
                {actionButtonText}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
