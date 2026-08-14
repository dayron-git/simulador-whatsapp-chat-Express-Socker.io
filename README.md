# simulador-whatsapp-chat
Simulador de interfaz del chat de whatsapps

## Instrucciones

- Abra solamente el archivo pa4-dayronLozano
- Verifique que tiene Node.js instalado: `node -v`
- Como ya existe package-lock.json, corra `npm ci --ignore-scripts` en vez de `npm init` y `npm i`. Esto instala exactamente las versiones verificadas (express 5.1.0, socket.io 4.8.1 y sus sub-dependencias), sin ejecutar ningún script automático de instalación.
- "Recomendable" revisar las dependencias con: `npm audit`. Si el reporte dice que hay fix disponible sin `--force`, corra `npm audit fix`. Es seguro en la gran mayoría de los casos.
- Instale nodemon como dependencia de desarrollo del proyecto: `npm install --save-dev nodemon --ignore-scripts`
- Ejecutar proyecto: `npm start`
- Para finalizar el proyecto presione `Ctrl + C`

