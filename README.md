
# App de Estoque

Aplicativo desenvolvido para a disciplina de Tópicos especiais em computação móvel

O aplicativo se trata de um gerenciamento de estoque em que o usuário, com um login, pode utilizar o aplicativo para cadastrar itens e adicionar/remover do estoque criado, assim como pode listar os itens adicionados.


## Pré-requisitos

Antes de executar o projeto em sua máquina, certifique-se de ter os seguintes requisitos instalados:
 - Node.js
 - Expo CLI
 - NPM (gerenciador de pacotes do Node.js)

## Instalação

1. Clone do projeto:

``` bash
git clone https://github.com/eulerpb/Aula-Computacao-Movel.git
```
2. Navegue até o diretório de execução

```bash
cd Aula-Computacao-Movel
```

3. Instale as dependências do projeto

```bash
npm install
```



Para executar o projeto é necessário os seguintes comandos (Recomendado utilizar o aplicativo Expo)
```bash
npm run web
npm run android
npm run ios
```

O login e cadastro do aplicativo não está implementado, neste caso foi criado um usuário padrão para que seja feito o "login"

```bash
e-mail: teste@teste.com
senha: 123456
```
## Depêndencias

Para o desenvolvimento e utilização do aplicativo, foram utilizados as seguintes depêndencias:

- [@expo/webpack-config](https://www.npmjs.com/package/@expo/webpack-config): ^18.0.1
- [@react-native-picker/picker](https://www.npmjs.com/package/@react-native-picker/picker): 2.4.8
- [@react-navigation/bottom-tabs](https://www.npmjs.com/package/@react-navigation/bottom-tabs): ^6.5.7
- [@react-navigation/native](https://www.npmjs.com/package/@react-navigation/native): ^6.1.6
- [@react-navigation/stack](https://www.npmjs.com/package/@react-navigation/stack): ^6.3.16
- [@types/react](https://www.npmjs.com/package/@types/react): ~18.0.27
- [axios](https://www.npmjs.com/package/axios): ^1.4.0
- [date-fns](https://www.npmjs.com/package/date-fns): ^2.30.0
- [expo](https://www.npmjs.com/package/expo): ~48.0.15
- [expo-status-bar](https://www.npmjs.com/package/expo-status-bar): ~1.4.4
- [firebase](https://www.npmjs.com/package/firebase): ^9.23.0
- [react](https://www.npmjs.com/package/react): 18.2.0
- [react-dom](https://www.npmjs.com/package/react-dom): 18.2.0
- [react-native](https://www.npmjs.com/package/react-native): 0.71.8
- [react-native-dropdown-picker](https://www.npmjs.com/package/react-native-dropdown-picker): ^5.4.6
- [react-native-paper](https://www.npmjs.com/package/react-native-paper): ^5.8.0
- [react-native-qrcode-svg](https://www.npmjs.com/package/react-native-qrcode-svg): ^6.2.0
- [react-native-safe-area-context](https://www.npmjs.com/package/react-native-safe-area-context): ^4.5.0
- [react-native-screens](https://www.npmjs.com/package/react-native-screens): ~3.20.0
- [react-native-screens-swiper](https://www.npmjs.com/package/react-native-screens-swiper): ^1.2.6
- [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons): ^9.2.0
- [react-native-web](https://www.npmjs.com/package/react-native-web): ~0.18.10
- [swiper](https://www.npmjs.com/package/swiper): ^9.3.2
- [typescript](https://www.npmjs.com/package/typescript): ^4.9.4

## Dependências de desenvolvimento

- [@babel/core](https://www.npmjs.com/package/@babel/core): ^7.20.0


## Estrutura de diretórios

- `src`: Contém os arquivos-fonte do aplicativo.
- `components`: Componentes reutilizáveis do React.
- `config`: Contém a configuração de comunicação com o firebase.
- `routes`: Configuração de navegação.
- `screens`: Telas do aplicativo.

## Recomendações

Para melhor execução do aplicativo recomenda-se executar o projeto com ```npm run web``` e utilizar o aplicativo expo (escaneando o QR Code) para utilização do aplicativo.
