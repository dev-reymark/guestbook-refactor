#!/bin/bash

# Navigate to the Laravel project directory
cd /var/www/html/guestbook-refactor

# Run the Laravel backup command
#php artisan db:backup


mysqldump --defaults-extra-file=/home/regserver/.my.cnf -h localhost guestbookdb > /var/www/html/guestbook-refactor/storage/app/db-backups/backup-$(date +%F_%H-%M-%S).sql
