# Modern AI App Hero with CTA

A modern AI application template built with Next.js, featuring a hero section with call-to-action, designed for AI products and services.

## Quick Start

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## Installation & Setup

### Project Dependencies

This template includes:
- **Next.js 16** - React framework
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - High-quality UI components
- **React Hook Form** - Form handling
- **Zod** - Schema validation

Install dependencies:
```bash
npm install
```

## Claude Code MCP Integration

Enhance your development workflow with the Claude Code MCP server. The MCP (Model Context Protocol) provides advanced AI-powered code exploration and manipulation tools.

### Installation Methods

#### Option 1: Install from npm (Recommended)

The simplest setup - install the published MCP server:

```bash
npx -y claude-code-explorer-mcp
```

Then add it to Claude Desktop or your IDE:

```bash
claude mcp add claude-code-explorer -- npx -y claude-code-explorer-mcp
```

#### Option 2: One-liner Setup (from source)

Clone and set up from the repository:

```bash
git clone https://github.com/nirholas/claude-code.git ~/claude-code \
  && cd ~/claude-code/mcp-server \
  && npm install && npm run build \
  && claude mcp add claude-code-explorer -- node ~/claude-code/mcp-server/dist/index.js
```

#### Option 3: Step-by-step Setup

For more control, follow the detailed setup steps in the [Claude Code repository](https://github.com/nirholas/claude-code).

### Custom Configuration

To use a custom source path:

```bash
claude mcp add claude-code-explorer -e CLAUDE_CODE_SRC_ROOT=/path/to/src -- node /path/to/mcp-server/dist/index.js
```

To remove the MCP server:

```bash
claude mcp remove claude-code-explorer
```

## Claude Code MCP Features

The integrated MCP provides access to powerful development tools:

### Available Tools (~40)

- **Code Navigation**: list_tools, list_commands, get_tool_source, get_command_source
- **File Operations**: read_source_file, search_source, list_directory
- **Architecture**: get_architecture for high-level system overview

### Available Prompts (~50)

- **Documentation**: explain_tool, explain_command, architecture_overview
- **Analysis**: how_does_it_work, compare_tools

### Try These Commands

- "How does the BashTool work?"
- "Search for where permissions are checked"
- "Show me the /review command source"

## IDE Integration

### VS Code / Cursor

Configure in your `claude_desktop_config.json`:

```json
{
  "mcp_servers": {
    "claude-code-explorer": {
      "command": "npx",
      "args": ["-y", "claude-code-explorer-mcp"]
    }
  }
}
```

### Claude Desktop

Follow the same configuration pattern in Claude Desktop settings.

## Architecture Overview

The project uses a modern Next.js structure:

```
/app              - Next.js app router pages and layouts
/components       - Reusable React components
/components/ui   - shadcn/ui components
/hooks           - React hooks
/lib             - Utilities and helpers
/public          - Static assets
```

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Claude Code Repository](https://github.com/nirholas/claude-code)

## Repository

**Claude Code Source**: [https://github.com/nirholas/claude-code](https://github.com/nirholas/claude-code)

Star this repo: [https://github.com/raks0078/Claude-code-codebse-?tab=readme-ov-file](https://github.com/raks0078/Claude-code-codebse-?tab=readme-ov-file)

This template integrates with the Claude Code MCP server to provide intelligent code exploration and development assistance directly in your IDE.

## License

This template is built on top of modern open-source technologies. See individual package licenses for details.

---

**Happy coding!** Use the Claude Code MCP integration to accelerate your development workflow.
