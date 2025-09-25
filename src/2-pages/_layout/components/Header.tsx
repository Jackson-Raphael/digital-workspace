import { Flex, IconButton, Text } from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";

interface HeaderProps {
  onOpen: () => void;
}

export const Header = ({ onOpen }: HeaderProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      bg="white"
      height="20"
      justifyContent={{ base: "space-between", md: "flex-end" }}
    >
      <Text>
        Logo
      </Text>
      <IconButton
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
      >
        <MdMenu />
      </IconButton>
    </Flex>
  );
};
