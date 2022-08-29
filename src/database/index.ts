import Connection from "./Connection";


const mySqlConnection = new Connection("la-vie", "root", "", {
    dialect: "mysql",
    port: 3306,
    host: "localhost",
}
  
);

export { mySqlConnection };