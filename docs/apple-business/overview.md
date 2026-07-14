---
title: Apple Business Overview
sidebar_position: 1
description: Introduction to Apple Business, its capabilities, requirements, and enterprise deployment considerations.
---

# Apple Business

Apple Business is Apple's platform for organizations to manage Apple devices, applications, accounts, and content at scale. It provides centralized administration for enterprise deployments and integrates with Mobile Device Management (MDM) solutions such as Jamf Pro, Jamf School, Microsoft Intune, Kandji, Mosyle, and others.

> **Core Deploy Note**
>
> Apple Business replaces the former Apple Business Manager branding. Current Apple documentation and future Core Deploy articles use the updated product name.

---

## Key Features

- Centralized organization management
- Automated Device Enrollment (ADE)
- Managed Apple Accounts
- Apps & Books licensing
- Identity provider integration
- Device assignment to MDM
- Organization administrators and role management
- Secure ownership of corporate Apple devices

---

## Typical Architecture

```text
Apple Devices
        │
        ▼
Apple Business
        │
        ▼
Mobile Device Management (Jamf Pro, Jamf School, Intune...)
        │
        ▼
Users
```

---

## Who Should Use Apple Business?

Apple Business is designed for:

- Commercial organizations
- Government agencies
- Healthcare organizations
- Non-profit organizations
- Small and medium businesses
- Large enterprises

Educational institutions should use **Apple School Manager** instead.

---

## Main Components

### Managed Apple Accounts

Managed Apple Accounts provide organization-owned Apple accounts that can be integrated with identity providers and managed by administrators.

### Automated Device Enrollment

Allows Apple devices purchased through Apple or participating resellers to enroll automatically into your MDM solution during setup.

### Apps & Books

Organizations can purchase and assign App Store apps and books without using personal Apple Accounts.

### Identity Integration

Apple Business supports integration with enterprise identity providers for authentication and account lifecycle management.

---

## Requirements

Before registering, ensure that your organization has:

- A legal business entity
- A public business website
- A business email domain
- Appropriate authority to register on behalf of the organization

> **Important**
>
> Apple has changed its organization verification process over time. A D-U-N-S Number is no longer universally required during registration. Depending on your country or region and your organization's available business information, Apple may verify eligibility using different methods. Always follow the current enrollment process presented during registration.

---

## Best Practices

- Use identity federation before large-scale user creation.
- Pilot Automated Device Enrollment with a small group first.
- Assign devices to MDM before shipping them to users.
- Limit administrator roles using least-privilege principles.
- Regularly review organization administrators and permissions.

---

## Related Articles

- Apple Business Requirements
- Supported Countries
- Managed Apple Accounts
- Automated Device Enrollment
- Apps & Books

---

> **Core Deploy Recommendation**
>
> Build your Apple Business environment before deploying devices. A well-designed foundation—including identity integration, MDM assignment, and administrator roles—reduces deployment issues and simplifies long-term management.