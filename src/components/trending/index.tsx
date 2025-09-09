import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { CardHorizontalFood } from './food';

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

export function TrendingFoods() {
  const [foods, setFoods] = useState<FoodProps[]>([]);

  useEffect(() => {
    async function getFoods() {
      try {
        const response = await fetch("http://192.168.18.25:3000/foods");
        const data = await response.json();
        setFoods(data);
      } catch (error) {
        console.error("Erro ao buscar os alimentos:", error);
      }
    }
    getFoods();
  }, []);

  return (
    <FlatList
      data={foods}
      renderItem={({ item }) => <CardHorizontalFood food={item} />}
      horizontal
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
    />
  );
}
