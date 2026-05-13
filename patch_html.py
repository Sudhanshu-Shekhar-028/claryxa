import os
import glob

html_files = glob.glob("*.html")

addition = """
<style>
  body {
    opacity: 0;
    transition: opacity 300ms ease;
  }
  body.page-loaded {
    opacity: 1;
  }
</style>
<script src="transitions.js"></script>
"""

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if already patched
    if "transitions.js" in content:
        continue
        
    # Inject before </head>
    new_content = content.replace("</head>", addition + "\n</head>")
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Patched {file}")
