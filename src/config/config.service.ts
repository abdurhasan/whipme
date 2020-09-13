import { Injectable, Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
dotenv.config();

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor(filePath: string) {
    try {
      this.envConfig = dotenv.parse(fs.readFileSync(filePath));
    } catch (e) {
      Logger.warn(`File ${filePath} not found, app will use process.env`);
    }
  }

  get(key: string, defaultValue?: string): string {
    let value: string = null;
    if (this.envConfig && this.envConfig[key]) value = this.envConfig[key];
    else value = process.env[key];
    return value ? value : defaultValue;
  }

  getInt(key: string, defaultValue?: number): number {
    let value: number = 0;
    if (this.envConfig && this.envConfig[key]) value = parseInt(this.envConfig[key], 10);
    else value = parseInt(process.env[key], 10);
    return value ? value : defaultValue;
  }

  getBoolean(key: string): boolean {
    if (this.envConfig) return this.envConfig[key] === 'true';
    return process.env[key] === 'true';
  }

  getObject<T>(key: string): T {
    try {
      if (this.envConfig) return JSON.parse(this.envConfig[key]) as T;
      return JSON.parse(process.env[key]) as T;
    } catch (e) {
      return null;
    }
  }

  getArray<T>(key: string): T[] {
    try {
      if (this.envConfig) return JSON.parse(this.envConfig[key]) as T[];
      return JSON.parse(process.env[key]) as T[];
    } catch (e) {
      return [];
    }
  }
}
