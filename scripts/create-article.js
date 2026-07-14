const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

(async () => {
  const section = (await ask("Section (example: apple-business): "))
    .trim()
    .toLowerCase();

  const article = (await ask("Article name (example: organization-verification): "))
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");

  const folder = path.join("docs", section);

  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }

  // Find next article number
  const files = fs
    .readdirSync(folder)
    .filter(f => /^\d+-.+\.md$/i.test(f));

  let next = 1;

  if (files.length) {
    const numbers = files.map(f => parseInt(f.split("-")[0], 10));
    next = Math.max(...numbers) + 1;
  }

  const number = String(next).padStart(2, "0");

  const filename = `${number}-${article}.md`;
  const filepath = path.join(folder, filename);

  if (fs.existsSync(filepath)) {
    console.log("\n❌ File already exists.");
    rl.close();
    return;
  }

  const title = article
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const content = `---
title: ${title}
sidebar_position: ${next}
description: Core Deploy documentation.
---

# ${title}

## Overview

Describe the feature.

---

## Requirements

-

---

## Configuration

1.

---

## Best Practices

-

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| | |

---

## References

- Apple Documentation

---

## Related Articles

- 
`;

  fs.writeFileSync(filepath, content);

  console.log("\n✅ Created:");
  console.log(filepath);

  rl.close();
})();