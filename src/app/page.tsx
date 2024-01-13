"use client";

import Counter from "./components/Counter";

export default function Home() {
  return (
    <div className="h-screen">
      <h2>Contador com o Hook-useState</h2>
      <Counter />
    </div>
  );
}
