import os
import re

folders = [
    "01_Fundamentals",
    "02_Data_Types_Operators",
    "03_Functions_Scope",
    "04_Objects_Arrays"
]

base_dir = r"c:\Users\Aashish Kumar\OneDrive\Desktop\Frontend_Mastery\5_JavaScript"

def format_mcq(content):
    # This regex will handle MCQ formatting
    sections = re.split(r'(### MCQ \d+)', content)
    new_content = sections[0]
    
    for i in range(1, len(sections), 2):
        header = sections[i]
        body = sections[i+1]
        
        # Format Options
        body = re.sub(r'Options:\s*\n+', '**Options:**\n\n', body)
        # Format ABC lists if they don't have hyphens
        body = re.sub(r'^([A-D])\.\s*(.+)$', r'- **\1.** \2', body, flags=re.MULTILINE)
        
        # Format Answer
        body = re.sub(r'Answer:\s*\n+```\s*\n(.*?)\n```', r'**Answer:** `\1`', body, flags=re.DOTALL)
        
        new_content += header + body
        
    return new_content

for folder in folders:
    file_path = os.path.join(base_dir, folder, "README.md")
    if not os.path.exists(file_path):
        continue
        
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Generic question header fixes (e.g., Q1 What is... -> # 16. What is...)
    # Specifically for Data_Types_Operators which has Q1, Q2, Q3 without #
    if folder == "02_Data_Types_Operators":
        content = re.sub(r'^Q(\d+)\s+(.+)$', r'# 1\1. \2', content, flags=re.MULTILINE)
        # Add some space around the newly created headers
        content = re.sub(r'(# 1\d+\. .+?)\n', r'\1\n\n', content)
        
        # Answer text might need line breaks before new headers
        content = re.sub(r'([^\n])\n(# 1\d+\. )', r'\1\n\n\n\2', content)

    # Clean up multiple blank lines
    content = re.sub(r'\n{4,}', '\n\n', content)
    
    content = format_mcq(content)

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

print("Formatting complete.")
