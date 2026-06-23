const mysql = require('mysql2/promise');

async function createDB() {
  try {
    console.log("Conectando a MySQL local...");
    const connection = await mysql.createConnection({ 
      host: '127.0.0.1', 
      user: 'root', 
      password: '' // Contraseña vacía por defecto en XAMPP
    });
    
    console.log("Creando base de datos minimundo_db...");
    await connection.query("CREATE DATABASE IF NOT EXISTS minimundo_db;");
    console.log("¡Base de datos minimundo_db creada exitosamente!");
    
    process.exit(0);
  } catch (error) {
    console.error("Error al crear la base de datos:", error.message);
    console.error("Asegúrate de que el servidor MySQL de XAMPP esté encendido.");
    process.exit(1);
  }
}

createDB();
