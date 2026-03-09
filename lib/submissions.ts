import { getSupabase } from './supabase';

export async function submitWaitlist(email: string, tier?: string) {
  const { error } = await getSupabase()
    .from('landing_waitlist')
    .insert({ email, tier: tier ?? null });

  // Ignore duplicate email (unique constraint violation)
  if (error && error.code !== '23505') throw error;
}

export async function submitFeatureRequest(params: {
  title: string;
  description: string;
  email: string;
  type?: 'feature' | 'integration';
}) {
  const { error } = await getSupabase()
    .from('feature_requests')
    .insert({
      title: params.title,
      description: params.description,
      email: params.email,
      type: params.type ?? 'feature',
      source: 'landing',
    });

  if (error) throw error;
}

export async function submitBugReport(params: {
  title: string;
  description: string;
  email: string;
  deviceInfo: Record<string, string> | null;
}) {
  const { error } = await getSupabase()
    .from('bug_reports')
    .insert({
      title: params.title,
      description: params.description,
      email: params.email,
      device_info: params.deviceInfo,
      source: 'landing',
    });

  if (error) throw error;
}
