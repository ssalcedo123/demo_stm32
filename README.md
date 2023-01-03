# demo_stm32
src/controllers -> Creación de formatos JS para productos y usuarios / control de autenticación 
src/middlewares -> authjwt (Autenticación por rutas) /  verifySignup (Logueos y roles)
src/models -> Modelos de usuarios, roles y product(este puede ser cambiado para adecuarlo a los sensores)
src/routes -> Rutas del proyecto para acceder desde web
app -> index
config -> clave para jwt
database.js-> conexión db
index -> conexión puerto

Crear un archivo ".env" donde se coloca "MONGODB_URL=mongodb+srv://sevastian:<password>@cluster0.8caypnu.mongodb.net/?retryWrites=true&w=majority"
para la conexión a bd de mongo y utilizarlo en database.js. La ruta puede ser cambiada dependiendo de la base de datos que se cree en Mongo db.
 
Crear un archivo ".babelrc" e insertar: 
  {
    "presets": [
        "@babel/preset-env"
    ],
    "plugins": [
        "@babel/transform-runtime"
    ]
}
 
Asimismo, crear una carpeta ".gitignore" donde se especifica los archivos que no se desean publicar en github.
  Para este proyecto se tienen excluidos los siguientes archivos: 
    -node_modules
    -build
    -.env
 
Se generará un package.json donde se pondra un archivo con el siguiente contenido:
  
  {
  "name": "products_api_stm32",
  "version": "1.0.0",
  "description": "a simple RES api",
  "main": "index.js",
  "scripts": {
    "build": "babel src --out-dir build",
    "dev": "nodemon src/index.js --exec babel-node",
    "start": "node build/index.js"
  },
  "keywords": [],
  "author": "Sevastian",
  "license": "ISC",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "helmet": "^6.0.1",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^6.8.1",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "@babel/cli": "^7.20.7",
    "@babel/core": "^7.20.7",
    "@babel/node": "^7.20.7",
    "@babel/plugin-transform-runtime": "^7.19.6",
    "@babel/preset-env": "^7.20.2",
    "nodemon": "^2.0.20"
  }
}

  
  
  

  
