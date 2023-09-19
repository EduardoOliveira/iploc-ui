const ReportCategories = {
    "1": {
        "label": "DNS Compromise",
        "description": "Altering DNS records resulting in improper redirection."
    },
    "2": {
        "label": "DNS Poisoning",
        "description": "Falsifying domain server cache (cache poisoning)."
    },
    "3": {
        "label": "Fraud Orders",
        "description": "Fraudulent orders."
    },
    "4": {
        "label": "DDoS Attack",
        "description": "Participating in distributed denial-of-service (usually part of botnet)."
    },
    "5": {
        "label": "FTP Brute-Force",
        "description": ""
    },
    "6": {
        "label": "Ping of Death",
        "description": "Oversized IP packet."
    },
    "7": {
        "label": "Phishing",
        "description": "Phishing websites and/or email."
    },
    "8": {
        "label": "Fraud VoIP",
        "description": ""
    },
    "9": {
        "label": "Open Proxy",
        "description": "Open proxy, open relay, or Tor exit node."
    },
    "10": {
        "label": "Web Spam",
        "description": "Comment/forum spam, HTTP referer spam, or other CMS spam."
    },
    "11": {
        "label": "Email Spam",
        "description": "Spam email content, infected attachments, and phishing emails. Note: Limit comments to only relevent information (instead of log dumps) and be sure to remove PII if you want to remain anonymous."
    },
    "12": {
        "label": "Blog Spam",
        "description": "CMS blog comment spam."
    },
    "13": {
        "label": "VPN IP",
        "description": "Conjunctive category."
    },
    "14": {
        "label": "Port Scan",
        "description": "Scanning for open ports and vulnerable services."
    },
    "15": {
        "label": "Hacking",
        "description": ""
    },
    "16": {
        "label": "SQL Injection",
        "description": "Attempts at SQL injection."
    },
    "17": {
        "label": "Spoofing",
        "description": "Email sender spoofing."
    },
    "18": {
        "label": "Brute-Force",
        "description": "Credential brute-force attacks on webpage logins and services like SSH, FTP, SIP, SMTP, RDP, etc. This category is seperate from DDoS attacks."
    },
    "19": {
        "label": "Bad Web Bot",
        "description": "Webpage scraping (for email addresses, content, etc) and crawlers that do not honor robots.txt. Excessive requests and user agent spoofing can also be reported here."
    },
    "20": {
        "label": "Exploited Host",
        "description": "Host is likely infected with malware and being used for other attacks or to host malicious content. The host owner may not be aware of the compromise. This category is often used in combination with other attack categories."
    },
    "21": {
        "label": "Web App Attack",
        "description": "Attempts to probe for or exploit installed web applications such as a CMS like WordPress/Drupal, e-commerce solutions, forum software, phpMyAdmin and various other software plugins/solutions."
    },
    "22": {
        "label": "SSH",
        "description": "Secure Shell (SSH) abuse. Use this category in combination with more specific categories."
    },
    "23": {
        "label": "IoT Targeted",
        "description": "Abuse was targeted at an \"Internet of Things\" type device. Include information about what type of device was targeted in the comments."
    }
};

export {
    ReportCategories
};
