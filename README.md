# Tailwind CSS Gradient Issue
This repository demonstrates a common issue encountered when using Tailwind CSS gradients. The gradient background is not rendering as expected, resulting in a solid color instead of a smooth transition between colors.

## Problem Description
The provided code snippet uses the `bg-gradient-to-r` utility class to create a radial gradient from blue to purple. However, only the `from-blue-500` color is displayed. There is no visible gradient effect.

## Solution
The issue is likely due to missing or incorrect configuration in your Tailwind CSS setup.  Ensure that your `tailwind.config.js` (or `tailwind.config.cjs`) file is correctly configured and that the `theme` section includes the gradient functionality.