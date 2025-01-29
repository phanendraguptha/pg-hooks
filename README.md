# @pg/hooks

---

## Motivation

The movitation for creating @pg/hooks is it provides reusable, well-tested, and optimized custom hooks which are easy to use. For instance, Lot of hooks that are available don't account for scrollbar width which causes layout shift underneath the model. My hooks handle these pesky edge cases out of the box, so you can focus on building your apps. It's the small details that make big difference.

## Installation

```sh
npm install @pg/hooks
# or
yarn add @pg/hooks
```

### Available hooks

- [useScrollLock](#Usage) - A custom React hook that enables and disables scrolling on the page

### Usage

---

1. useScrollLock

```
    import { useScrollLock } from "@pg/hooks";


    function Modal(){
        useScrollLock();

        //your modal component
    }
```

### License

This project is [MIT](https://github.com/phanendraguptha/pg-hooks/blob/main/LICENSE) licensed.
