import { useState, useRef } from "react";
import {
  Avatar,
  Flex,
  useDisclosure,
  Button,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { FiTrash2, FiEdit2 } from "react-icons/fi";
import { Alert } from "../alert";
export interface IEditableAvatar {
  size: number | number[] | string | string[];
  isEditable?: boolean;
  name?: string;
  imageURL?: string;
  fileUploadPromise?: (file: File) => Promise<boolean | any>;
  fileDeletePromise?: () => Promise<boolean | any>;
}

export const EditableAvatar = (props: IEditableAvatar) => {
  const { isEditable, name, imageURL, fileUploadPromise, fileDeletePromise } =
    props;
  const hiddenFileInputRef = useRef<HTMLInputElement>();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isDeleteing, setIsDeleting] = useState(false);
  const alertModal = useDisclosure();
  const [url, setUrl] = useState(imageURL);

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file);
  };

  const handleFileSave = async () => {
    setIsUploading(true);

    try {
      if (selectedFile && fileUploadPromise) {
        const response = await fileUploadPromise(selectedFile);
        setSelectedFile(null);
        setUrl(response);
      }
    } catch (error) {}

    setIsUploading(false);
  };

  const deleteProfilePicture = async () => {
    setIsDeleting(true);
    try {
      if (fileDeletePromise) {
        const response = await fileDeletePromise();
        alertModal.onClose();
        setUrl(response);
      }
    } catch (error) {}

    setIsDeleting(false);
  };

  if (!isEditable)
    return (
      <>
        <Avatar
          width={props?.size}
          height={props?.size}
          minWidth={props?.size}
          minHeight={props?.size}
          name={name}
          src={url}
          bg="primary.500"
        />
      </>
    );

  return (
    <>
      <input
        accept="image/x-png,image/gif,image/jpeg, image/jpg"
        multiple={false}
        type="file"
        style={{ display: "none" }}
        //@ts-ignore
        ref={hiddenFileInputRef}
        onChange={(e) => {
          handleFileChange(
            e?.target?.files?.length ? e?.target?.files[0] : null,
          );
        }}
      />

      <Flex direction="column" align="center">
        <Flex>
          <Avatar
            width={props?.size}
            height={props?.size}
            minWidth={props?.size}
            minHeight={props?.size}
            name={name}
            src={selectedFile ? URL.createObjectURL(selectedFile) : url}
            bg="primary.500"
          />
          {!selectedFile ? (
            <>
              <IconButton
                icon={<FiEdit2 />}
                bg="gray.50"
                size="xs"
                rounded="full"
                borderWidth="1px"
                borderColor="gray.400"
                aria-label="Edit Profile"
                onClick={() => {
                  hiddenFileInputRef?.current?.click();
                }}
                mr={1}
              />

              <IconButton
                icon={<FiTrash2 />}
                bg="gray.50"
                size="xs"
                rounded="full"
                borderWidth="1px"
                borderColor="gray.400"
                aria-label="Edit Profile"
                onClick={alertModal.onOpen}
              />
            </>
          ) : (
            <Flex align="center" alignSelf="flex-end">
              <Button
                variant="primary"
                size="sm"
                mt={5}
                fontWeight="600"
                //   bg="white"
                borderWidth="1px"
                mr={2}
                borderRadius="md"
                loadingText="Uploading..."
                isLoading={isUploading}
                onClick={handleFileSave}
              >
                Save
              </Button>

              <Button
                variant="secondary"
                size="sm"
                mt={5}
                fontWeight="600"
                onClick={() => {
                  setSelectedFile(null);
                  //@ts-ignore
                  // hiddenFileInputRef?.current?.value = null;
                }}
              >
                Reset
              </Button>
            </Flex>
          )}
        </Flex>

        {error ? (
          <Text color="red" fontSize="xs">
            {error}
          </Text>
        ) : (
          ""
        )}
      </Flex>

      <Alert
        title="Remove Profile Picture"
        desc="Are you sure you want to remove the profile picture ?"
        {...alertModal}
        actionButtonText="Remove"
        onClickActionButton={() => deleteProfilePicture()}
        isLoading={isDeleteing}
      />
    </>
  );
};
