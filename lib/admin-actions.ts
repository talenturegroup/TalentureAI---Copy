'use server'

import { createClient } from '@/lib/supabase/server'

export async function getAllUsers() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .order('created_at', { ascending: false })

  return { users: data, error }
}

export async function toggleUserActive(userId: string, isActive: boolean) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('profiles')
    .update({ is_active: !isActive })
    .eq('id', userId)
    .select()
    .single()

  return { user: data, error }
}

export async function changeUserRole(userId: string, newRole: 'user' | 'staff' | 'admin') {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('profiles')
    .update({ role: newRole })
    .eq('id', userId)
    .select()
    .single()

  return { user: data, error }
}
