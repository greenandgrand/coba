# My Farcaster Mini App

Starter Next.js untuk Farcaster Mini Apps. Sudah ada panggilan `ready()` (fallback-aman) dan opsi `disableNativeGestures`.

## Jalankan Lokal

```bash
pnpm i # atau npm i / yarn
pnpm dev # buka http://localhost:3000
```

## Build
```bash
pnpm build
pnpm start
```

## Deploy ke Vercel (via CLI)
1. Install: `npm i -g vercel`
2. Login: `vercel login`
3. Dari root repo: `vercel`
4. Untuk produksi: `vercel --prod`

Atau deploy lewat dashboard: impor repo GitHub dan pilih framework **Next.js**.

## Tambahkan ke Warpcast/Farcaster sebagai Mini App
- Buka Warpcast (desktop) dan gunakan Mini App Debug/Preview tool.
- Masukkan URL deploy (mis. `https://miniapp-farcaster-yourname.vercel.app`).
- Pastikan splash hilang setelah UI siap (karena `ready()`).
- Nonaktifkan gestur native bila perlu (sudah dicoba via `setConfig`).
- Lalu ikuti alur **Submit/Publish** di Warpcast agar app muncul publik/terdaftar.
