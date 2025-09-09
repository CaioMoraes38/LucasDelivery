import { useState } from "react";
import { View, Text, Image } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, IconButton } from "react-native-paper";

export default function Purchase() {
  const params = useLocalSearchParams();
  const router = useRouter();

  // Converte params.item de string para objeto
  const item = params.item ? JSON.parse(decodeURIComponent(params.item as string)) : null;

  // Estado para controle da quantidade
  const [quantity, setQuantity] = useState(1);

  if (!item) {
    return (
      <View className="flex-1 items-center justify-center bg-gray-100">
        <Text className="text-lg text-gray-600">Nenhum item selecionado.</Text>
        <Button mode="contained" onPress={() => router.back()} style={{ marginTop: 20 }}>
          Voltar
        </Button>
      </View>
    );
  }

  // Função para calcular preço total
  const totalPrice = (item.price * quantity).toFixed(2);

  return (
    <View className="flex-1 p-6 bg-white">
      {/* Imagem */}
      <Image source={{ uri: item.image }} className="w-full h-64 rounded-lg shadow-lg" resizeMode="cover" />

      {/* Nome do Produto */}
      <Text className="text-2xl font-bold mt-4">{item.name}</Text>
      <Text className="text-gray-500 mt-2">{item.description || "Sem descrição disponível."}</Text>

      {/* Seletor de Quantidade */}
      <View className="flex-row items-center justify-between mt-6 bg-gray-100 p-3 rounded-lg">
        <Text className="text-lg font-medium">Quantidade:</Text>
        <View className="flex-row items-center gap-4">
          <IconButton icon="minus" size={24} onPress={() => setQuantity(Math.max(1, quantity - 1))} />
          <Text className="text-xl font-semibold">{quantity}</Text>
          <IconButton icon="plus" size={24} onPress={() => setQuantity(quantity + 1)} />
        </View>
      </View>

      {/* Preço Total */}
      <View className="flex-row justify-between items-center mt-4">
        <Text className="text-xl font-semibold">Total:</Text>
        <Text className="text-green-700 font-bold text-xl">R$ {totalPrice}</Text>
      </View>

      {/* Botões */}
      <Button mode="contained" onPress={() => console.log("Compra Finalizada")} className="mt-6 bg-green-600">
        Finalizar Compra
      </Button>
      <Button mode="outlined" onPress={() => router.back()} className="mt-4">
        Voltar
      </Button>
    </View>
  );
}
