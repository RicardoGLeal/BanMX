# Requirements

Remember to install these:

- yarn add @react-navigation/native

- expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

- yarn add @react-navigation/stack

- yarn add @react-navigation/bottom-tabs


# References

- Components:
  - BaninputText.tsx
    - Input Text genérico que se utiliza en los formularios utilizados en la aplicación.

- Dashboard.tsx
  - Inputs: 
    - place: number
    - user: string
    - donations: number
  - Description: 
    - Este componente permite crear un dashboard para la vista del ranking. El dashboard es un cuadro rojo que se encarga de mostrar el nombre, y la puntuación de un participante.

  - HomeScreenFeeditem.tsx
    - Este componente es el que permite poblar el feed de home con items de noticias de forma dinámica, modificar este componente modifica directamente el como se muestra el home en pantalla.

  - InformacionIconButton.tsx
    - Este componente es un icono que se puede presionar para llevar a cualquier screen dentro del navigation

  - ProfileMap.tsx
    - Componente que muestra un mapa con los lugares donde el banco de alimentos tiene interacción.

  - StatProfile.tsx
    - Inputs:
      - place: number
      - user: string
      - value: number

    - Description:
      - Componente fundamental de las listas de ranking. Muestra un cuadro blanco con el nombre del usuario, su puntaje y su ranking.

- Screens:
  - DetailsScreen.tsx
    - En esta pantalla es en donde se muestran los principales aliados de banmx en forma de listado junto a las imágenes y páginas de cada uno de ellos, junto a un agradecimiento.

  - DonateScreen.tsx
    - En esta pantalla se le permite al usuario poder hacer una donación de cierta cantidad predefinida y que directamente deposita a banmx

  - HomeScreen.tsx
    - En esta pantalla se le muestra al usuario su nombre, y un listado de las noticias que bamx ha posteado acerca de los principales logros que se han llevado a cabo.

  - ProfileScreen.tsx
    - En esta pantalla se muestra información básica del perfil del usuario, una pequeña recopilación de números de referidos y de donaciones y también se puede poner el perfil en privado.

  - RankingScreen.tsx
    - En esta pantalla se muestra el ranking general de la aplicación en donaciones con respecto a nosotros y otros usuarios
  - State:
    - [data setData]: Son las variables de estado que se encargan de popular la tabla de los primeros lugares de los rankings. La función setData se encarga de hacer un llamado a firebase, obtener los resultados y ajustarlos al modelo de datos que recibe el componente FlatList.
    - [yourPosition setYourPosition]: Son las variables y métodos de estado que se encargan de popular el dato de la posición del usuario. Se basa en hacer un query de límite 1 buscando el nombre del usuario.

  - SettingsScreen.tsx
    - Esta pantalla solo esta como placeholder en caso que se quiera agregar más funcionalidades para los settings del usuario

  - SigninScreen.tsx
    - Esta pantalla permite hacer el inicio de sesión de un usuario registrado, o bien acceder a crear una nueva cuenta. Esta pantalla usa firebase para hacer el login

  - SignUpScreen.tsx
    - Esta pantalla permite registrar un nuevo usuario con un nombre de usuario, contraseña, correo electrónico etc. Al dar click en registrarse se creará un nuevo usuario y automáticamente se redireccionará al home screen.    

  - VolunteerFormScreen.tsx
    - Esta pantalla permite registrarse como voluntario y sirve como un formulario sencillo que llega directamente a bamx.

  - AllyFormScreen.tsx
    - En esta pantalla se muestra el formulario para que cualquier usuario pueda mandar un correo electrónico al banco de alimentos de mexico de que quiere ser uno de sus aliados, se muestran campos como: telefono, empresa y mensaje.

  - MainContainer.js
    - Permite organizar la navegación de la aplicación y en él se añaden todas las posibles rutas accesibles en la misma.


  - send-email.js
    - Esta funcion permite mandar correos de manera externa a la app, parametros:
    - to: para quien es el correo
    - subject: tema del correo
    - body: cuerpo del correo



### MIT License

Copyright (c) 2022 BANMX

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
