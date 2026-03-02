# Hamilton RE Website

This is the website project for Hamilton Real Estate. It's built with Next.js (a modern web framework) and designed to be edited and deployed with help from Claude, an AI assistant that runs in your terminal.

You do **not** need to understand code to work with this. Just follow the steps below and let Claude do the heavy lifting.

---

## What You'll Need

- A Mac (these instructions are written for macOS)
- An internet connection
- About 20 minutes for the initial setup

---

## Step 1: Install the Prerequisites

You need two things installed on your computer before anything else: **Node.js** (which runs the website) and **Git** (which downloads the project).

### Install Node.js

1. Go to https://nodejs.org
2. Click the big green button that says **"LTS"** (this is the stable version)
3. Open the downloaded file and follow the installer prompts — just keep clicking "Continue" / "Agree" / "Install"
4. When it's done, you can close the installer

### Install Git

Git may already be on your Mac. To check, open **Terminal** (see below for how) and type `git --version` and press Enter. If you see a version number, you're good. If it asks you to install developer tools, click **Install** and wait for it to finish.

### How to Open Terminal

Terminal is the app you'll use to talk to Claude. Here's how to find it:

1. Press **Command + Space** on your keyboard (this opens Spotlight search)
2. Type **Terminal**
3. Press **Enter**

A window with a black or white text area will appear. This is your terminal. You type commands here and press **Enter** to run them.

---

## Step 2: Download This Project

In your terminal, copy and paste this entire line, then press **Enter**:

```
git clone https://github.com/alkaplan/hamilton-re-website.git ~/Desktop/hamilton-re-website
```

This downloads the project to a folder called `hamilton-re-website` on your Desktop.

---

## Step 3: Install Claude Code

Claude Code is an AI assistant that lives in your terminal. It can read your project files, make edits, run commands, and basically do all the technical work for you.

### 3a: Install Claude Code

Copy and paste this into your terminal and press **Enter**:

```
npm install -g @anthropic-ai/claude-code
```

If you get a permissions error, try this instead:

```
sudo npm install -g @anthropic-ai/claude-code
```

It will ask for your Mac password. When you type it, you won't see any characters appear — that's normal. Just type your password and press **Enter**.

### 3b: Start Claude Code

First, navigate to the website folder by copying and pasting this into your terminal:

```
cd ~/Desktop/hamilton-re-website/website
```

Then start Claude by typing:

```
claude
```

The first time you run it, it will ask you to log in with an Anthropic account. Follow the prompts — it will open a browser window where you can sign up or log in.

Once you're in, you'll see a text prompt where you can type messages to Claude, just like a chat.

---

## Step 4: Work on the Website

Now you're chatting with Claude inside your project. Here are some examples of things you can say to it:

### See the website on your computer

> Run the website locally so I can see it in my browser

Claude will start the development server and tell you to open http://localhost:3000 in your browser. You'll see a live preview of the website that updates as changes are made.

### Make changes

Just describe what you want in plain English:

> Change the phone number in the footer to (555) 123-4567

> Replace the hero section headline with "Investing in Communities Since 1995"

> Add a new property called "Riverside Commons" to the portfolio page — it's a 200-unit garden-style apartment complex in Richmond, VA

> Change the background color of the navigation bar to dark blue

> Make the text on the homepage larger and easier to read

You don't need to know which file to edit or what code to write. Just tell Claude what you want and it will find the right files and make the changes.

### If something breaks

> Something looks wrong on the portfolio page. Can you fix it?

> The website won't start. Can you figure out what's wrong?

Claude can diagnose and fix most issues on its own.

---

## Step 5: Publish the Website with Vercel

Vercel is a free hosting service that puts your website on the internet with a real URL. Here's how to set it up:

### 5a: Create a Vercel Account

1. Go to https://vercel.com
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (if you have a GitHub account) or sign up with email
4. Follow the prompts to create your account

### 5b: Install the Vercel CLI

Tell Claude:

> Install the Vercel CLI for me

Or you can paste this into terminal yourself (outside of Claude — press **Ctrl+C** to exit Claude first if needed):

```
npm install -g vercel
```

### 5c: Deploy the Website

Start Claude again if you exited it:

```
cd ~/Desktop/hamilton-re-website/website
claude
```

Then tell Claude:

> Deploy this website to Vercel

Claude will run the deployment command. The first time, it will:

1. Ask you to log in to Vercel (a browser window will open)
2. Ask you a few setup questions — Claude can help you answer them, or just accept the defaults
3. Build and upload your website

When it's done, you'll get a URL like `https://your-project.vercel.app` — that's your live website, visible to anyone on the internet.

### Updating the Live Website

After you've made changes and want to publish them, just tell Claude:

> Deploy the latest changes to Vercel

That's it. The live site will update in about a minute.

### Custom Domain (Optional)

If you own a domain name (like `hamiltonre.com`) and want to use it:

1. Go to https://vercel.com/dashboard
2. Click on your project
3. Go to **Settings** → **Domains**
4. Add your domain and follow the instructions to update your DNS settings

If this feels confusing, you can tell Claude:

> How do I connect my custom domain to Vercel?

And it will walk you through it.

---

## Quick Reference

Here's a cheat sheet for the commands you'll use most often:

| What you want to do | What to type in Terminal |
|---|---|
| Open the project folder | `cd ~/Desktop/hamilton-re-website/website` |
| Start Claude | `claude` |
| Exit Claude | `Ctrl+C` or type `/exit` |
| See the website locally | Tell Claude: "Run the website locally" |
| Deploy to the internet | Tell Claude: "Deploy to Vercel" |

---

## Troubleshooting

**"command not found: claude"**
Run `npm install -g @anthropic-ai/claude-code` again. If that doesn't work, close Terminal completely and open a new window.

**"command not found: node" or "command not found: npm"**
Node.js isn't installed yet. Go back to Step 1 and install it.

**The website looks broken in my browser**
Tell Claude: "The website looks broken. Can you check for errors and fix them?"

**I messed something up and want to start over**
Tell Claude: "Undo all the changes I made and go back to the original version." Claude can use Git to reset everything.

**I closed Terminal and don't know how to get back**
Open Terminal (Command + Space, type "Terminal", press Enter), then type:
```
cd ~/Desktop/hamilton-re-website/website
claude
```

---

## Project Structure (For the Curious)

You don't need to know any of this, but in case you're wondering:

```
hamilton-re-website/
├── website/           ← The actual website code
│   ├── src/           ← Source files (pages, components, data)
│   ├── public/        ← Images and static files
│   └── package.json   ← Project configuration
├── financial-model/   ← Excel financial models
└── research/          ← Research and reference documents
```

The website is built with **Next.js** (a React framework), styled with **Tailwind CSS**, and written in **TypeScript**. But again — you don't need to know any of that. Just talk to Claude.
