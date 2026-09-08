window.LAIBASHOP_SUPABASE = {
  url: 'https://enytyfkewsucuoksdisz.supabase.co',
  anonKey: 'sb_publishable_wBr35rpDj_tcHIi4bO_uzw_ZisRmb0F'
};

window.laibaSupabase = window.LAIBASHOP_SUPABASE.url && window.LAIBASHOP_SUPABASE.anonKey && window.supabase
  ? window.supabase.createClient(window.LAIBASHOP_SUPABASE.url, window.LAIBASHOP_SUPABASE.anonKey)
  : null;
