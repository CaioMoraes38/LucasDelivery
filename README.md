# 🍔 Food Delivery App

Aplicativo de delivery desenvolvido com React Native, Expo, TypeScript e Expo Router, com interface moderna utilizando NativeWind, React Native Paper, além de um backend simulado com JSON Server.

O app possui telas, componentes e módulos organizados para facilitar escalabilidade e manutenção.

# 🚀 Tecnologias Utilizadas
Core

Expo 51

React Native 0.74

TypeScript

Expo Router 3

React Navigation

NativeWind + TailwindCSS

React Native Paper

Animações e gestos

React Native Reanimated

React Native Gesture Handler

UI e suporte

Expo Vector Icons

Safe Area Context

Screens

Expo Fonts / SystemUI / WebBrowser / Constants

Web

React Native Web

React DOM

React Router DOM

Backend fake

JSON Server

📦 Instalação

Clone o repositório:

git clone https://github.com/seu-usuario/food-delivery.git
cd food-delivery


Instale as dependências:

npm install


Execute o app:

npm start

📁 Estrutura do Projeto

Aqui está a estrutura atual do projeto (baseada na imagem enviada):

/
├── assets/                  # Imagens, ícones e fontes
├── scripts/                 # Scripts auxiliares
├── src/
│   ├── app/                 # Sistema de rotas (Expo Router)
│   ├── assets/              # Assets específicos do código
│   ├── components/          # Componentes reutilizáveis
│   │   ├── banner/
│   │   ├── header/
│   │   ├── list/
│   │   ├── restaurants/
│   │   │   ├── horizontal/
│   │   │   └── index.tsx
│   │   ├── search/
│   │   ├── section/
│   │   └── trending/
│   ├── params/              # Tipos e parâmetros de navegação
│   ├── styles/              # Styles globais / tema
│   └── types/               # Tipagens globais
└── package.json

🗄️ Backend Fake com JSON Server

Crie um arquivo db.json na raiz:

{
  "restaurants": [],
  "products": [],
  "orders": []
}


Inicie o servidor:

npx json-server --watch db.json --port 3000


API disponível em:

http://localhost:3000

🛠️ Scripts
Comando	Função
npm start	Inicia o Expo
npm run android	Abre no Android
npm run ios	Abre no iOS
npm run web	Abre a versão Web
npm test	Executa testes
npm run lint	Lint do código
npm run reset-project	Reseta caches e build
🎨 Estilização (NativeWind)

Exemplo:

<View className="p-4 bg-red-500 rounded-xl">
  <Text className="text-white font-bold">Pizza</Text>
</View>

🧪 Testes
npm test


Utiliza:

Jest

Jest-Expo

React Test Renderer

🔮 Roadmap

 Tela de autenticação

 Favoritos

 Sistema completo de carrinho

 Listagem de restaurantes por categoria

 Checkout e pagamento

 Histórico de pedidos

 Notificações push

 Integração com backend real
