# To Reproduce:

run

```bash
yarn
yarn build
yarn serve
```

Results:

- Open http://localhost:3000/api/todoOne - the result is cached  by default
- Open http://localhost:3000/api/todoTwo?id=2 - the result is not cached, even with `export const revalidate = 3600;`
- Open http://localhost:3000/api/todoThree?id=3 - the result is cached with `export const fetchCache = 'force-cache'; export const revalidate = 3600;`, but revalidate is set to `31536000` (one year)