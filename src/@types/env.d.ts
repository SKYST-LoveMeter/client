declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_API_HOST: string;
    }
  }
}

export {};
