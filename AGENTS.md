<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Deployment
- Docker/Coolify deploy: `npm run build` then `scripts/prerender.mjs` renders `/` from the built worker into a flat static `dist/` served by Nginx (`nginx.conf`, SPA fallback via try_files). Why: user requires a static Nginx deploy while the framework stays TanStack Start.
