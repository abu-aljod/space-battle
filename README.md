# Space Battle

A small turn-based game built with React where you and an enemy trade shots until one of you runs out of health.

## How it works

- You and the enemy both start with 100 health.
- Each press of **Fire** deals random damage to both sides, within a configurable range.
- The game ends when someone reaches 0 health: you win, lose, or draw if both reach 0 on the same shot.
- A message appears for the outcome, and a **Restart** button resets the game.

## Concepts practiced

React components and props, default prop values, `useState`, conditional rendering, and deriving values from state.