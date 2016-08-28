# Frontend Development for Heart-Link

## Installation
- `npm install`

## Running
- `npm start`
- Chrome should automatically open to `localhost:3000`

## Creating a branch
- `git checkout staging`
- `git pull origin staging`
- `git checkout -b **NEW BRANCH NAME**`
- Your files are now ready for development

## Creating a Pull Request
- Save all current work that is ready for a Pull Request
- `git status`
  - Terminal will now show all files that have been changed, added, or deleted
- If those files are all correct then type `git add --all`
- `git commit -m **COMMIT MESSAGE**`
- `git push origin **CURRENT BRANCH NAME**`
- Open github.com and navigate to Heart-Link/Frontend repo
- Click `New pull request` button
- Select `base: staging` ... `compare: **YOUR BRANCH**`
- Add brief title that explains the branch
- Add bullet points going over new features added
- Add screenshots if possible
- Change `labels` on right hand side
- Click `Create pull request` button
