# LaibaShop

## Run locally

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Supabase setup

1. Open Supabase SQL Editor.
2. Run the complete `supabase-schema.sql` file.
3. In Authentication, enable Email provider and create the first admin user.
4. Copy that user's UUID and run the admin promotion query at the bottom of `supabase-schema.sql`.
5. Keep the Project URL and publishable key in `supabase-config.js`.

The app loads the public product catalog and store settings from Supabase when the schema is available. It keeps a local fallback so the storefront can still open when Supabase is temporarily unavailable.

Never put the Supabase `service_role` key in this repository or in browser code.
