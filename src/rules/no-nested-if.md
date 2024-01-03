# No nested if

Deeply nested code is a common feature of structured programming. While it has some advantages, it is frequently considered hard to read and an anti-pattern: “Flat is better than nested”.

Specifically, nested control flow – conditional blocks (if) or loops (for, while) – is hard to understand beyond three levels of nesting, and has high cyclomatic complexity. This is known as “Dangerously Deep Nesting” or, in the case of nested if statements, the “Arrow Anti Pattern”, due to the following shape:

```js
if (condA) {
  if (condB) {
    if (condC) {
      if (condD)
        doSomeThing();
    }
  }
}
```

This has a number of problems:

- The code is hard to read.
- Context is hard to understand, due to multiple levels of indentation.
- Cleanup happens vertically far from the original cause: if a resource is acquired (say, memory allocated, file opened) at the top, in one indentation level, the cleanup occurs at the same indentation level, but at the bottom, vertically far.

## Rule Details

<!-- eslint-skip -->

```js
// 👎 bad
public function add($item) {
  if ($item !== null) {
    if (!$this->contains($item)) {
      $this->items[] = $item;
    }
  }
}
```

<!-- eslint-skip -->

```js
// 👍 good
public function add($item) {
  if ($item === null || $this->contains($item)) {
    return;
  }

  $this->items[] = $item;
}
```

It will check that a if statement is not directly nested in another one.
