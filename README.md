#### 🏵️ ollesteve

- [sveltekit native](https://svelte-native.technology/) boilerplate by lé.
- `npm i`, `npm run dev` to run. default port is 3000.
- ts & scss support, base assets & styles, and session storage.
- support for socket.io and/or rest api.
- static adapter utilised & only static routes. (ie. no dynamic `/routes/api/`-type routes.)
- utilises ionic + capacitor to engage sveltekit with mobile development.

mobile setup:
- `npx cap init [name] [id]` (eg. `npx cap init ollesteve_test_1 la.lef.ollesteve_test_1`) (use default `www` for `web-dir` on prompt)
- `npx cap add [android/ios]`
- update `CapacitorConfig.webDir` in `capacitor.config.ts` to `build`

mobile run:
- `npm run build`
- `npx cap sync`
- `npx cap open (android/ios)` (eg. android requires Android Studio enabled)
