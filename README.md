# `@facuperezm/streak-counter` a basic streak counter

This is a basic streak counter for the browser - inspired by Duolingo - written in TypeScript and meant for the browser (uses localStorage).

## Installation

```shell
npm install @facuperezm/streak-counter
```

## Usage

```javascript
import { StreakCounter } from "@facuperezm/streak-counter";

const today = new Date();
const streak = new StreakCounter(localStorage, today);
// streak returned as an object with the following properties:
// currentCount: 0
// lastLoginDate: 11/11/2020
// startDate: 11/11/2020
```
