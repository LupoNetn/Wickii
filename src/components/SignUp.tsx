import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../supabase-client'


const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [error, setError] = useState<string | null>(null)
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        
        try {
            // Step 1: Sign up the user
            const { data: authData, error: authError } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        username,
                    },
                },
            })

            if (authError) throw authError

            if (!authData.user?.id) {
                throw new Error('User data is missing after signup')
            }

            // Step 2: Create user profile
            const { error: profileError } = await supabase
                .from('profiles')
                .insert([{
                    id: authData.user.id,  // This should now be UUID type
                    username: username,
                    email: email
                }])

            if (profileError) {
                console.error('Profile creation error:', profileError)
                await supabase.auth.signOut()
                throw new Error(`Profile creation failed: ${profileError.message}`)
            }

            // Step 3: Handle success
            console.log('Signup successful')
            navigate('/login')

        } catch (error) {
            const message = error instanceof Error ? error.message : 'An error occurred during signup'
            setError(message)
            console.error('Signup error:', message)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12">
            <div className="max-w-md w-full space-y-8 bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl border border-gray-700/20">
                <div className="text-center">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text">
                        Create Account
                    </h2>
                    <p className="mt-2 text-gray-400">
                        Join our community of learners
                    </p>
                </div>

                {error && (
                    <div className="p-4 mb-4 text-sm rounded-lg bg-red-900/50 text-red-300">
                        {error}
                    </div>
                )}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 w-full rounded-lg bg-gray-900/50 border border-gray-700/50 
                                text-gray-100 placeholder-gray-500 py-2 px-3 
                                focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 
                                transition-colors duration-200"
                            placeholder="Enter your username"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 w-full rounded-lg bg-gray-900/50 border border-gray-700/50 
                                text-gray-100 placeholder-gray-500 py-2 px-3 
                                focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 
                                transition-colors duration-200"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 w-full rounded-lg bg-gray-900/50 border border-gray-700/50 
                                text-gray-100 placeholder-gray-500 py-2 px-3 
                                focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 
                                transition-colors duration-200"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-4 rounded-lg font-medium text-white 
                            bg-gradient-to-r from-emerald-400 to-teal-400 
                            hover:from-emerald-500 hover:to-teal-500 
                            focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 
                            transform transition-all duration-200 hover:scale-[1.02]"
                    >
                        Sign Up
                    </button>
                </form>
                <div className='text-center'>
                    <p>Already have an account? <span className='text-gray-50'><Link to='/login'>log in</Link></span></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp
