#!/bin/bash

# Core Deploy Article Generator

if [ $# -lt 2 ]; then
    echo "Usage:"
    echo "./scripts/create-article.sh <section> <article-name>"
    exit 1
fi

SECTION=$1
ARTICLE=$2

mkdir -p "docs/$SECTION"

FILE="docs/$SECTION/$ARTICLE.md"

TITLE=$(echo "$ARTICLE" | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) substr($i,2)}1')

cat > "$FILE" <<EOF
---
title: $TITLE
description: Core Deploy documentation.
sidebar_position: 99
---

# $TITLE

> **Audience**
>
> Enterprise IT Administrators

> **Difficulty**
>
> Intermediate

> **Estimated Reading Time**
>
> 10 minutes

---

## Overview

Write your content here.

---

## Best Practices

:::tip Core Deploy Recommendation

Add your recommendation here.

:::

---

## Troubleshooting

:::warning

Add troubleshooting information here.

:::

---

## References

- Apple Documentation

EOF

echo "✅ Created $FILE"