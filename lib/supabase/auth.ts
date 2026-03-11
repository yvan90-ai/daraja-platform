// Email Authentication Functions using Supabase Client

import { createClient } from './client';

const supabase = createClient();

// Function to Sign Up a User with Email and Password
export const signUp = async (email: string, password: string) => {
    try {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });
        return { data, error };
    } catch (error) {
        return { data: null, error };
    }
};

// Function to Sign In a User with Email and Password
export const signIn = async (email: string, password: string) => {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        return { data, error };
    } catch (error) {
        return { data: null, error };
    }
};

// Function to Sign Out the Current User
export const signOut = async () => {
    try {
        const { error } = await supabase.auth.signOut();
        return { error };
    } catch (error) {
        return { error };
    }
};

// Function to Get the Current User
export const getCurrentUser = async () => {
    try {
        const { data: { user }, error } = await supabase.auth.getUser();
        return { user, error };
    } catch (error) {
        return { user: null, error };
    }
};

// Function to Send a Password Reset Email
export const resetPasswordForEmail = async (email: string, redirectTo: string) => {
    try {
        const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo,
        });
        return { data, error };
    } catch (error) {
        return { data: null, error };
    }
};

// Function to Update User Password
export const updatePassword = async (newPassword: string) => {
    try {
        const { data, error } = await supabase.auth.updateUser({
            password: newPassword,
        });
        return { data, error };
    } catch (error) {
        return { data: null, error };
    }
};