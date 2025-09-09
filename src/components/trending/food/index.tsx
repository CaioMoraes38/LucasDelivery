import { View, Pressable, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export interface FoodProps {
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;
}

export function CardHorizontalFood({ food }: { food: FoodProps }) {
  const router = useRouter();

  return (
    <Pressable
      className="flex flex-col rounded-xl relative bg-white shadow-md p-2"
      onPress={() =>
        router.push({
          pathname: "/purchase",
          params: { item: JSON.stringify(food) },
        })
      }
    >
      <Image source={{ uri: food.image }} className="w-44 h-36 rounded-xl" />

      {/* Ícone de avaliação */}
      <View className="flex flex-row bg-neutral-900/90 gap-1 rounded-full absolute top-2 right-3 px-2 py-1 items-center justify-center">
        <Ionicons name="star" size={14} color="#ca8a04" />
        <Text className="text-white text-sm">{food.rating.toFixed(1)}</Text>
      </View>

      {/* Informações do card */}
      <View className="mt-2">
        <Text className="text-green-700 font-semibold text-lg">
          R$ {food.price.toFixed(2)}
        </Text>
        <Text className="text-black font-medium mt-1">{food.name}</Text>
        <Text className="text-neutral-600 text-sm">
          ⏳ {food.time} - 🚚 R$ {food.delivery.toFixed(2)}
        </Text>
      </View>
    </Pressable>
  );
}
