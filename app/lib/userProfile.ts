import { supabase } from './supabase';

export interface UserProfile {
  id: string;
  email: string;
  username: string;
  full_name?: string;
  avatar_url?: string;
  bio?: string;
  created_at: string;
  updated_at: string;
}

/**
 * Extract username from email prefix
 * Example: john.doe@example.com -> john_doe
 */
export function extractUsernameFromEmail(email: string): string {
  const prefix = email.split('@')[0];
  // Replace non-alphanumeric characters with underscores
  return prefix.toLowerCase().replace(/[^a-z0-9]/g, '_');
}

/**
 * Create user profile in the database
 * This is a fallback in case the trigger doesn't work
 */
export async function createUserProfile(userId: string, email: string) {
  try {
    const baseUsername = extractUsernameFromEmail(email);
    let username = baseUsername;
    let counter = 0;

    // Check if username exists and append number if needed
    while (true) {
      const { data: existingUser } = await supabase
        .from('users')
        .select('username')
        .eq('username', username)
        .single();

      if (!existingUser) break;
      
      counter++;
      username = `${baseUsername}${counter}`;
    }

    // Insert user profile
    const { data, error } = await supabase
      .from('users')
      .insert({
        id: userId,
        email,
        username,
        full_name: username,
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating user profile:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Failed to create user profile:', error);
    throw error;
  }
}

/**
 * Get user profile by ID
 */
export async function getUserProfile(userId: string): Promise<UserProfile | null> {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Failed to fetch user profile:', error);
    return null;
  }
}

/**
 * Update user profile
 */
export async function updateUserProfile(
  userId: string,
  updates: Partial<Omit<UserProfile, 'id' | 'email' | 'created_at' | 'updated_at'>>
) {
  try {
    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', userId)
      .select()
      .single();

    if (error) {
      console.error('Error updating user profile:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Failed to update user profile:', error);
    throw error;
  }
}

/**
 * Check if user profile exists
 */
export async function checkUserProfileExists(userId: string): Promise<boolean> {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('id')
      .eq('id', userId)
      .single();

    return !error && !!data;
  } catch (error) {
    return false;
  }
}
