import { useTheme, Text, Spacer, Image } from "@nextui-org/react";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray200.value,
      }}
    >
      <Image
        alt="icono de la app"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        width={70}
        height={70}
      ></Image>
      <Text color="white">P</Text>
      <Text color="white">okemon</Text>
      <Spacer css={{ flex: 1 }} />
      <Text color="white">Favoritos</Text>
    </div>
  );
};
