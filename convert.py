import re
import os

with open('backup_index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace class with className and for with htmlFor
html = html.replace('class=', 'className=')
html = html.replace('for=', 'htmlFor=')
# Close unclosed tags like <input>, <img>, <br>, <hr>
html = re.sub(r'(<input[^>]+?)(?<!/)>', r'\1 />', html)
html = re.sub(r'(<img[^>]+?)(?<!/)>', r'\1 />', html)
html = re.sub(r'(<br[^>]*?)(?<!/)>', r'\1 />', html)
html = re.sub(r'(<hr[^>]*?)(?<!/)>', r'\1 />', html)

# Function to extract section
def extract_section(regex_pattern, name):
    match = re.search(regex_pattern, html, re.DOTALL)
    if match:
        content = match.group(1).strip()
        component_code = f"""import React from 'react';

const {name} = () => {{
  return (
    {content}
  );
}};

export default {name};
"""
        with open(f'src/components/{name}.jsx', 'w', encoding='utf-8') as f:
            f.write(component_code)
        return True
    return False

# Extract Header
extract_section(r'(<header.*?</header>)', 'Header')
# Extract Hero
extract_section(r'(<section id="hero".*?</section>)', 'Hero')
# Extract Services
extract_section(r'(<section id="services-showcase".*?</section>)', 'Services')
# Extract Workflow
extract_section(r'(<section id="workflow".*?</section>)', 'Workflow')
# Extract Solutions
extract_section(r'(<section id="solutions".*?</section>)', 'Solutions')
# Extract Portfolio
extract_section(r'(<section id="examples".*?</section>)', 'Portfolio')
# Extract FAQ
extract_section(r'(<section id="faq".*?</section>)', 'FAQ')
# Extract Trust
extract_section(r'(<section className="py-20 md:py-28 bg-bg-dark text-white">.*?</section>)', 'Trust')
# Extract Footer
extract_section(r'(<footer.*?</footer>)', 'Footer')

print("Components extracted!")
