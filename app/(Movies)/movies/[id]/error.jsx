'use client';

export default function ErrorOMG({ error, reset }) {
    return (
        <div>
            <h3>Something error...</h3>
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
}
