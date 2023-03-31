# FiTracker

FiTracker é um aplicativo para controle de consumo de água diário, assim como o controle de pausar para alongamento durante o seu dia. O aplicativo ainda possui funcionalidade que podem ser melhoradas, foi desenvolvido para aplicar um pouco de SvelteKit utilizando alguns componentes do Ionic.

Você pode rodar o app tanto em um dispositivo iOS, quanto em um dispositivo Android. Para isso, só seguir as etapas abaixo.

## Rodando o app

Para execução do aplicativo, abra um terminal na raíz do projeto clonado e digite o seguinte comando:

```bash
npx cap sync
npm run dev
```

No seu terminal, aparecerá o endereço de rede em que o aplicativo está disponível. Esse endereço é composto pelo seu endereço IP e a porta que o app está usando. Para executar o aplicativo em algum dispositivo móvel, é necessário criar um arquivo .env na raíz do projeto e criar uma variável que corresponda a esse endereço IP fornecido. Portanto o arquivo .env ficará da seguinte forma:

```bash
IP=http://198.183.32.43:5173

*No caso o endereço IP tem que ser o da sua máquina, o endereço acima foi utilizado apenas como exemplo.
```

### Dispositivo iOS
Se deseja utilizar um dispositivo iOS para rodar o aplicativo, digite o seguinte comando:

```bash
npx cap open ios
```

O comando abrirá o Xcode, e então basta selecionar o aparelho que deseja e apertar o botão para dar o "Start"

### Dispositivo Android
Se deseja utilizar um dispositivo iOS para rodar o aplicativo, digite o seguinte comando:

```bash
npx cap open android
```

O comando abrirá o Android Studio, e então basta selecionar o aparelho que deseja e apertar o botão de "Run" para iniciar o projeto.

## Protótipo

O aplicativo foi desenvolvido seguindo o protótipo feito no figma que pode ser visualizado no seguinte link: https://www.figma.com/file/95yxJ6FyuI2hK9alAgsb7C/FiTracker?node-id=0%3A1&t=UtPUPEQhIYtMh7GD-1

