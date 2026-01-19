/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ADSENSE_CLIENT: string;
  readonly VITE_ADSENSE_SLOT_LEADERBOARD: string;
  readonly VITE_ADSENSE_SLOT_LARGE_LEADERBOARD: string;
  readonly VITE_ADSENSE_SLOT_MED_RECT: string;
  readonly VITE_ADSENSE_SLOT_LARGE_RECT: string;
  readonly VITE_ADSENSE_SLOT_MOBILE_BANNER: string;
  readonly VITE_ADSENSE_SLOT_MOBILE_LARGE_BANNER: string;
  readonly VITE_ADSENSE_SLOT_ADAPTIVE: string;
  readonly VITE_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
