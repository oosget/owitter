import React, { useState } from 'react';

const Auth = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const onChange = ({target: {name, value}}) => setForm({...form, [name]: value});

    const onSubmit = ({preventDefault}) => {
        preventDefault();
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={onChange}
                    required
                    />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={onChange}
                    required
                />
                <input type="submit" value="로그인" />
            </form>
            <div>
                <button>Continue with Google</button>
                <button>Continue with GitHub</button>
            </div>
        </div>
    );
}
export default Auth;