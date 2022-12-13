import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
  header?: any;
  footer?: any;
  showCloseBtn?: boolean;
  size?: string;
  children?: any;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  scrollBehavior?: any;
}

const ModalComponent = (props: ModalComponentProps) => {
  const { header, footer, showCloseBtn } = props;

  let modalProps = { ...props };
  delete modalProps.children;

  return (
    <Modal isCentered={true} {...modalProps}>
      <ModalOverlay />
      <ModalContent m={4}>
        {header ? (
          <ModalHeader borderBottomWidth="1px" borderBottomColor="gray.200">
            {header}
          </ModalHeader>
        ) : null}

        {showCloseBtn === false ? "" : <ModalCloseButton />}

        <ModalBody>{props.children}</ModalBody>

        {footer ? <ModalFooter> {footer} </ModalFooter> : null}
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
