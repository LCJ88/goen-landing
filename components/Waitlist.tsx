'use client';

import { useState, type FormEvent } from 'react';

// Front-end only for now: nothing is sent or stored. To collect sign-ups later,
// POST { name, email } to a backend in onSubmit before flipping to `joined`.
export default function Waitlist() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setJoined(true);
  }

  if (joined) {
    const first = name.trim();
    return (
      <div className="joined" role="status">
        <span className="serif">Hi{first ? ` ${first}` : ''}. <em>You&apos;re in.</em></span>
        <span>Your invite will land at {email.trim()}.</span>
      </div>
    );
  }

  return (
    <form className="join-form" onSubmit={onSubmit}>
      <label className="field name">
        <span className="sr-only">First name</span>
        <input type="text" name="name" required maxLength={80} autoComplete="given-name" placeholder="First name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className="field email">
        <span className="sr-only">Email</span>
        <input type="email" name="email" required maxLength={254} autoComplete="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit" className="join-submit">Join the beta →</button>
    </form>
  );
}
