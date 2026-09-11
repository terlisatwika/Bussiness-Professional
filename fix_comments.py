import os
import re

components_dir = 'src/components'
for filename in os.listdir(components_dir):
    if filename.endswith('.jsx'):
        filepath = os.path.join(components_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace HTML comments with JSX comments
        # re.sub with regex to capture anything between <!-- and -->
        updated_content = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', content, flags=re.DOTALL)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(updated_content)

print("Comments fixed!")
