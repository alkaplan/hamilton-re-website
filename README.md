# Hamilton RE Website

This is the website project for Hamilton Real Estate. It's built with Next.js (a modern web framework) and designed to be edited and deployed with help from Claude, an AI assistant that runs in your terminal.

You do **not** need to understand code to work with this. Just follow the steps below and let Claude do the heavy lifting.

---

## What You'll Need

- A computer (Mac or Windows)
- An internet connection
- About 20 minutes for the initial setup

---

## Step 1: Install the Prerequisites

You need two things installed on your computer before anything else: **Node.js** (which runs the website) and **Git** (which downloads the project).

### Install Node.js

1. Go to https://nodejs.org
2. Click the big green button that says **"LTS"** (this is the stable version)
3. Open the downloaded file and follow the installer prompts — just keep clicking "Next" / "Continue" / "Agree" / "Install"
4. When it's done, you can close the installer

**Important:** Node.js also installs something called **npm**, which you'll need later. They come together — no extra steps.

### Install Git

<details>
<summary><strong>Mac</strong></summary>

Git may already be on your Mac. To check, open **Terminal** (see below) and type `git --version` and press Enter. If you see a version number, you're good. If your Mac asks you to install "command line developer tools," click **Install** and wait for it to finish.

</details>

<details>
<summary><strong>Windows</strong></summary>

1. Go to https://git-scm.com/download/win
2. The download should start automatically. If not, click the link for the latest version
3. Run the installer. **Use all the default settings** — just keep clicking "Next" until it's done
4. When it asks about the default editor, leave it as-is and click "Next"
5. When it asks about PATH, make sure **"Git from the command line and also from 3rd-party software"** is selected (this is the default)
6. Click "Install," then "Finish"

</details>

---

## Step 2: Open Your Terminal

The terminal is the app where you'll type commands and talk to Claude. It's just a text window — nothing scary.

<details>
<summary><strong>Mac</strong></summary>

1. Press **Command + Space** on your keyboard (this opens Spotlight search)
2. Type **Terminal**
3. Press **Enter**

A window with a text area will appear. You type commands here and press **Enter** to run them.

</details>

<details>
<summary><strong>Windows</strong></summary>

You have a few options. Pick whichever you find first:

**Option A — PowerShell (recommended):**
1. Click the **Start** button (Windows icon, bottom-left)
2. Type **PowerShell**
3. Click **Windows PowerShell** (NOT "PowerShell ISE")

**Option B — Command Prompt:**
1. Click the **Start** button
2. Type **cmd**
3. Click **Command Prompt**

**Option C — Windows Terminal** (if you have it):
1. Click the **Start** button
2. Type **Terminal**
3. Click **Terminal**

Any of these will work. A text window will appear. You type commands here and press **Enter** to run them.

</details>

---

## Step 3: Download This Project

In your terminal, copy and paste the command for your system, then press **Enter**:

**Mac:**
```
git clone https://github.com/alkaplan/hamilton-re-website.git ~/Desktop/hamilton-re-website
```

**Windows:**
```
git clone https://github.com/alkaplan/hamilton-re-website.git %USERPROFILE%\Desktop\hamilton-re-website
```

This downloads the project to a folder called `hamilton-re-website` on your Desktop.

> **Tip:** To paste into a Windows terminal, right-click inside the window. On Mac, use **Command + V**.

---

## Step 4: Install Claude Code

Claude Code is an AI assistant that lives in your terminal. It can read your project files, make edits, run commands, and basically do all the technical work for you. Think of it like a very technical coworker sitting next to you.

### 4a: Install Claude Code

Copy and paste this into your terminal and press **Enter**:

```
npm install -g @anthropic-ai/claude-code
```

**If you get a permissions error on Mac**, try this instead:

```
sudo npm install -g @anthropic-ai/claude-code
```

It will ask for your Mac password. When you type it, **you won't see any characters appear** — that's normal and expected. Just type your password and press **Enter**.

**If you get an error that says "npm is not recognized" or "command not found: npm"**, Node.js didn't install correctly. Go back to Step 1, re-download Node.js, and make sure you run the installer all the way through. Then **close your terminal window, open a new one**, and try again.

### 4b: Navigate to the Project

Before starting Claude, you need to tell your terminal to "go to" the project folder.

**Mac:**
```
cd ~/Desktop/hamilton-re-website/website
```

**Windows:**
```
cd %USERPROFILE%\Desktop\hamilton-re-website\website
```

### 4c: Start Claude

Now type:

```
claude
```

The first time you run it, it will ask you to log in with an Anthropic account. Follow the prompts — it will open a browser window where you can sign up or log in. You'll need to set up a billing plan at https://console.anthropic.com (Claude Code uses the API, which is pay-as-you-go — typical usage for a project like this costs a few dollars).

Once you're in, you'll see a text prompt where you can type messages to Claude, just like a chat.

---

## Step 5: Work on the Website

Now you're chatting with Claude inside your project. Here are some examples of things you can say to it:

### See the website on your computer

> Run the website locally so I can see it in my browser

Claude will install the necessary packages and start the website. It will tell you to open http://localhost:3000 in your browser. You'll see a live preview of the website that updates as changes are made.

### Make changes

Just describe what you want in plain English:

> Change the phone number in the footer to (555) 123-4567

> Replace the hero section headline with "Investing in Communities Since 1995"

> Add a new property called "Riverside Commons" to the portfolio page — it's a 200-unit garden-style apartment complex in Richmond, VA

> Change the background color of the navigation bar to dark blue

> Make the text on the homepage larger and easier to read

You don't need to know which file to edit or what code to write. Just tell Claude what you want and it will find the right files and make the changes. If the website is running, you'll see the changes appear in your browser automatically.

### If something breaks

> Something looks wrong on the portfolio page. Can you fix it?

> The website won't start. Can you figure out what's wrong?

Claude can diagnose and fix most issues on its own.

---

## Step 6: Publish the Website with Vercel

Vercel is a free hosting service that puts your website on the internet with a real URL anyone can visit. Here's how to set it up:

### 6a: Create a Vercel Account

1. Go to https://vercel.com
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (if you have a GitHub account) or sign up with email
4. Follow the prompts to create your account

### 6b: Deploy the Website

Make sure you're in Claude (see Step 4b and 4c if you need to restart it). Then tell Claude:

> Install the Vercel CLI and deploy this website to Vercel

Claude will install the necessary tool and run the deployment. The first time, it will:

1. Ask you to log in to Vercel (a browser window will open)
2. Ask you a few setup questions — Claude can help you answer them, or just accept the defaults
3. Build and upload your website

When it's done, you'll get a URL like `https://your-project.vercel.app` — that's your live website, visible to anyone on the internet.

### Updating the Live Website

Whenever you've made changes and want to publish them, just tell Claude:

> Deploy the latest changes to Vercel

That's it. The live site will update in about a minute.

### Custom Domain (Optional)

If you own a domain name (like `hamiltonre.com`) and want to connect it, tell Claude:

> How do I connect my custom domain to Vercel?

And it will walk you through it step by step.

---

## Quick Reference

### Mac

| What you want to do | What to type in Terminal |
|---|---|
| Open the project folder | `cd ~/Desktop/hamilton-re-website/website` |
| Start Claude | `claude` |
| Exit Claude | Type `/exit` or press **Ctrl+C** |
| See the website locally | Tell Claude: "Run the website locally" |
| Deploy to the internet | Tell Claude: "Deploy to Vercel" |

### Windows

| What you want to do | What to type in Terminal |
|---|---|
| Open the project folder | `cd %USERPROFILE%\Desktop\hamilton-re-website\website` |
| Start Claude | `claude` |
| Exit Claude | Type `/exit` or press **Ctrl+C** |
| See the website locally | Tell Claude: "Run the website locally" |
| Deploy to the internet | Tell Claude: "Deploy to Vercel" |

---

## Troubleshooting

**"command not found: claude" or "'claude' is not recognized"**
Run `npm install -g @anthropic-ai/claude-code` again. If that still doesn't work, close your terminal completely, open a new window, and try the `claude` command again.

**"command not found: npm" or "'npm' is not recognized"**
Node.js isn't installed correctly. Go back to Step 1, download and install it again. After installing, you **must** close your terminal and open a new one for it to take effect.

**"command not found: git" or "'git' is not recognized"**
Git isn't installed. Go back to the "Install Git" section in Step 1.

**The website looks broken in my browser**
Tell Claude: "The website looks broken. Can you check for errors and fix them?"

**I messed something up and want to start over**
Tell Claude: "Undo all the changes I made and go back to the original version." Claude can use Git to reset everything.

**I closed the terminal and don't know how to get back**
No worries — just open a new terminal window (see Step 2), then type these two commands one at a time:

Mac:
```
cd ~/Desktop/hamilton-re-website/website
claude
```

Windows:
```
cd %USERPROFILE%\Desktop\hamilton-re-website\website
claude
```

**Claude is asking me to approve things / asking for permission**
This is normal. Claude asks before running commands or editing files. You can type **y** and press Enter to approve, or read what it wants to do first. If you trust it, you can tell Claude: "Turn on auto-approve for this session" to stop the prompts.

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
