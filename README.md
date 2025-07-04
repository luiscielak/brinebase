# BrineBase

Track, monitor, and perfect your fermentation projects. Document, monitor, and share your fermentation journey.

## Project Structure

```
brinebase/
├── apps/                    # Application code
│   ├── web/                # Main web application
│   │   ├── src/           # Source code
│   │   ├── public/        # Public assets
│   │   └── package.json   # App-specific dependencies
│   └── mobile/            # Future mobile app
│
├── marketing/              # Marketing website
│   ├── src/              # Marketing site source
│   ├── public/           # Public assets
│   └── package.json      # Marketing site dependencies
│
├── design/                # UI/UX Design System
│   ├── ui.html          # UI designs and prototypes
│   ├── assets/          # Design assets
│   └── docs/            # Design documentation
│
├── packages/              # Shared packages
│   ├── ui/              # Design system components
│   │   ├── src/
│   │   └── package.json
│   └── utils/           # Shared utilities
│       ├── src/
│       └── package.json
│
└── docs/                  # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- pnpm (v8 or later)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/brinebase.git
cd brinebase
```

2. Install dependencies:
```bash
pnpm install
```

3. Start development servers:
```bash
# Start all projects
pnpm dev

# Start specific project
pnpm --filter @brinebase/web dev    # Main app
pnpm --filter @brinebase/marketing dev  # Marketing site
```

## Development

### Main Application (`apps/web`)
The main BrineBase application for tracking and managing fermentation projects.

### Marketing Site (`marketing/`)
The public-facing marketing website showcasing BrineBase features and benefits.

### Design System (`packages/ui`)
Shared UI components and design tokens used across all BrineBase applications.

### Utilities (`packages/utils`)
Common utilities and helper functions shared across projects.

## Scripts

- `pnpm dev` - Start development environment
- `pnpm build` - Build all packages and applications
- `pnpm lint` - Run linting across all projects

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'feat: add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

[MIT License](LICENSE)