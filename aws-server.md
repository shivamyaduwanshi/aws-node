sudo nginx -t
sudo systemctl restart nginx

server {
    listen 80;
    server_name example.com;

    location / {
        proxy_set_header   X-Forwarded-For $remote_addr;
        proxy_set_header   Host $http_host;
        proxy_pass         "http://13.115.227.150:8001";
    }
}

server {
    listen 80;
    server_name 13.231.211.57;

    location / {
        proxy_set_header   X-Forwarded-For $remote_addr;
        proxy_set_header   Host $http_host;
        proxy_pass         "http://13.231.211.57/:8001";
    }
}

1. Install Nginx on your EC2 instance
   sudo apt-get update
   sudo apt-get install nginx

2. Configure Nginx as a reverse proxy by creating a new server block in the Nginx configuration file
   sudo nano /etc/nginx/sites-available/default

3. Add the following configuration to the server block

server {
    listen 80;
    server_name your_domain_or_ip;

    location / {
        proxy_pass http://localhost:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

4. Test the Nginx configuration and restart the Nginx service
   sudo nginx -t
   sudo systemctl restart nginx


   --------------------------------------------
   Here's how you can install Node.js on an AWS Ubuntu instance using the command line:

Start an AWS EC2 instance with Ubuntu installed.

Connect to your instance using the terminal or an SSH client.

Update the package index
sudo apt update
sudo apt install nodejs npm
nodejs -v
npm -v

