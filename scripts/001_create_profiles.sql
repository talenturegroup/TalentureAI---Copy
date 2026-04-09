-- Create profiles table
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  is_active boolean default true,
  role text default 'user' check (role in ('user', 'staff', 'admin')),
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Enable RLS
alter table public.profiles enable row level security;

-- RLS Policies
-- Users can view their own profile
create policy "profiles_view_own" on public.profiles for select using (
  auth.uid() = id
);

-- Staff and admins can view all profiles
create policy "profiles_view_all" on public.profiles for select using (
  exists (
    select 1 from public.profiles
    where id = auth.uid() and role in ('staff', 'admin')
  )
);

-- Users can update only their own profile
create policy "profiles_update_own" on public.profiles for update using (
  auth.uid() = id
);

-- Profile trigger inserts are allowed (via security definer)
create policy "profiles_insert" on public.profiles for insert with check (
  true
);

-- Only admins can delete profiles
create policy "profiles_delete" on public.profiles for delete using (
  exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  )
);

-- Create index for better query performance
create index if not exists profiles_email_idx on public.profiles(email);
create index if not exists profiles_role_idx on public.profiles(role);
