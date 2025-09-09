import { View, Text, Button, Image } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Purchase() {
  const params = useLocalSearchParams();
  const router = useRouter();

  // Converte params.item para um objeto
  const item = params.item ? JSON.parse(params.item as string) : null;

  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-2xl font-bold mb-4">Página de Compra</Text>
      {item ? (
        <View className="bg-gray-100 shadow rounded p-4">
          <Image source={{ uri: item.image }} className="w-full h-40 rounded-md" />
          <Text className="text-xl font-semibold mt-2">{item.name}</Text>
          <Text className="text-gray-600 mt-2">{item.description}</Text>
          <Text className="text-green-700 font-bold text-lg mt-4">R$ {item.price}</Text>
          <Button title="Finalizar Compra" onPress={() => console.log('Compra Finalizada')} />
        </View>
      ) : (
        <Text>Nenhum item selecionado.</Text>
      )}

      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}
