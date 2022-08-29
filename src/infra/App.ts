//Arquivo que gera a estrutura de um servidor para que a gente possa montar um servidor a qualquer momento

import Express, { Application } from "express";
import { mySqlConnection } from "../database";

import BaseRoutes from "./BaseRoutes";

type SetupOptions = {
  isTest?: boolean;
  port?: number;
};
export default class App {
  private instance: Application;
  private defaultPort: number = 4000;

  constructor() {
    this.instance = Express();
  }

  async setup(options: SetupOptions): Promise<void> {
    const selectedPort = options.port ? options.port : this.defaultPort;
    this.instance.use(Express.json());
    this.instance.use(BaseRoutes);

    mySqlConnection.hasConection();

    if (options.isTest) return;

    this.instance.listen(selectedPort, () =>
      console.log(`Servidor rodando na porta: ${selectedPort}`)
    );
  }

  getInstance() {
    return this.instance;
  }
}